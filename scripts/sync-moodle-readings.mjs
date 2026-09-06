import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const moodleBase = (process.env.MOODLE_BASE_URL || 'https://uvirtual.usach.cl/moodle').replace(/\/$/, '');
const token = process.env.MOODLE_TOKEN || '';
const courseId = Number(process.env.MOODLE_COURSE_ID || 42361);
const keywords = (process.env.MOODLE_READING_SECTIONS || 'lectura,lecturas,bibliografia,bibliografía')
  .split(',')
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);
const outputPath = path.resolve('src/data/moodle-resources.json');

const normalize = (value = '') => value
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

const sectionIsReadings = (name = '') => {
  const normalized = normalize(name);
  return keywords.some((keyword) => normalized.includes(normalize(keyword)));
};

const getType = (module) => {
  const files = Array.isArray(module.contents) ? module.contents : [];
  if (files.some((file) => String(file.filename || '').toLowerCase().endsWith('.pdf'))) return 'PDF';
  if (module.modname === 'url') return 'URL';
  if (module.modname === 'folder') return 'CARP';
  if (module.modname === 'page') return 'PÁG';
  return 'LECT';
};

if (!token) {
  console.log('MOODLE_TOKEN no está configurado. Se conserva el último catálogo sincronizado.');
  try {
    await readFile(outputPath, 'utf8');
  } catch {
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, JSON.stringify({ syncedAt: null, courseId, source: 'Moodle', items: [] }, null, 2) + '\n');
  }
  process.exit(0);
}

const params = new URLSearchParams({
  wstoken: token,
  wsfunction: 'core_course_get_contents',
  moodlewsrestformat: 'json',
  courseid: String(courseId),
});

const response = await fetch(`${moodleBase}/webservice/rest/server.php`, {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  body: params,
});

if (!response.ok) {
  throw new Error(`Moodle respondió HTTP ${response.status}`);
}

const data = await response.json();
if (!Array.isArray(data)) {
  const message = data?.message || data?.errorcode || 'Respuesta inesperada de Moodle';
  throw new Error(message);
}

const allowedModules = new Set(['resource', 'url', 'folder', 'page']);
const items = [];

for (const section of data) {
  if (!sectionIsReadings(section.name)) continue;
  for (const module of section.modules || []) {
    if (!allowedModules.has(module.modname)) continue;
    if (module.visible === 0 || !module.url) continue;

    const files = Array.isArray(module.contents) ? module.contents : [];
    const filenames = files
      .map((file) => file.filename)
      .filter(Boolean)
      .filter((name) => name !== '.');

    items.push({
      id: `moodle-${module.id}`,
      category: 'lecturas',
      type: getType(module),
      title: module.name,
      description: filenames.length
        ? `${section.name} · ${filenames.join(', ')}`
        : `${section.name} · Recurso protegido en Campus Virtual`,
      status: 'Campus Virtual',
      href: module.url,
      section: section.name,
      moduleId: module.id,
      source: 'Moodle',
    });
  }
}

const output = {
  syncedAt: new Date().toISOString(),
  courseId,
  source: 'Moodle',
  items,
};

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, JSON.stringify(output, null, 2) + '\n', 'utf8');
console.log(`Sincronización Moodle completada: ${items.length} lectura(s) encontrada(s).`);
