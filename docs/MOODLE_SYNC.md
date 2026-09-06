# Sincronización automática de lecturas Moodle → Repositorio

El repositorio está preparado para mostrar automáticamente las lecturas que se carguen en el curso Moodle **42361**.

## Flujo

1. El docente sube una lectura en Moodle dentro de una sección cuyo nombre contenga **Lectura**, **Lecturas** o **Bibliografía**.
2. GitHub Actions consulta Moodle mediante el web service oficial `core_course_get_contents`.
3. Se extrae solo la metadata necesaria: título del recurso, sección, tipo de archivo y URL del módulo Moodle.
4. La página **Recursos** del repositorio muestra la lectura como `Campus Virtual ↗`.
5. El archivo no se copia a GitHub. Al abrirlo, el estudiante accede a Moodle y Moodle aplica su autenticación y permisos.

## Seguridad

El token de Moodle nunca debe escribirse en el código. Debe almacenarse como secreto del repositorio con el nombre:

`MOODLE_TOKEN`

Ruta en GitHub: **Settings → Secrets and variables → Actions → New repository secret**.

## Requisito institucional

Campus Virtual debe habilitar para el docente o para una cuenta técnica un token de web services con acceso de lectura al curso y a la función `core_course_get_contents`.

No se deben almacenar usuario y contraseña de Moodle en GitHub.

## Frecuencia

El sitio consulta Moodle automáticamente una vez por hora y también cada vez que se publica una nueva versión del repositorio. También se puede ejecutar manualmente el workflow `Deploy Astro site to GitHub Pages`.

## Curso configurado

- Moodle base: `https://uvirtual.usach.cl/moodle`
- Curso: `42361`
- URL: `https://uvirtual.usach.cl/moodle/course/view.php?id=42361`

## Archivos técnicos

- `scripts/sync-moodle-readings.mjs`
- `src/data/moodle-resources.json`
- `.github/workflows/deploy-pages.yml`
- `src/pages/recursos.astro`
