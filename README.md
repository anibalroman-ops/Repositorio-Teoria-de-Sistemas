# Repositorio Teoría de Sistemas

Repositorio web académico del curso **Teoría de Sistemas** — Ingeniería Civil en Ambiente, semestre 2026-2.

## Arquitectura híbrida

- **GitHub:** código fuente, estructura y contenidos públicos del repositorio web.
- **Google Drive:** documentos fuente, materiales de trabajo e insumos del curso.
- **Campus Virtual USACH (Moodle):** matrícula, avisos, entregas, calificaciones y lecturas protegidas.

El sitio funciona como **repositorio académico**, no como LMS.

## Estado

**v1.0 — sistema funcional completo.**

La arquitectura, navegación, calendario, búsqueda, evaluaciones, proyecto Peñaflor, biblioteca de recursos y comportamiento responsive están preparados. La documentación puede incorporarse posteriormente sin rediseñar el sistema.

## Estructura principal

```text
src/
├── data/
│   ├── course.ts       # calendario, evaluaciones, ruta y categorías
│   ├── resources.ts    # registro central de recursos/documentos
│   └── site.ts         # configuración global y enlace Moodle
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── curso.astro
│   ├── clases/
│   ├── evaluaciones.astro
│   ├── proyecto-penaflor.astro
│   ├── recursos.astro
│   └── buscar.astro
└── styles/
    ├── global.css
    └── v1.css
```

## Cómo incorporar documentación después

### Recursos generales

Editar `src/data/resources.ts`.

Cada recurso posee:

```ts
{
  id: 'identificador',
  category: 'clases',
  type: 'PDF',
  title: 'Nombre visible',
  description: 'Descripción breve',
  status: 'Disponible',
  href: 'https://...'
}
```

Cuando un documento todavía no está incorporado, usar:

```ts
status: 'Por cargar'
```

Los materiales protegidos deben permanecer en Campus Virtual.

### Campus Virtual

Editar una sola línea en `src/data/site.ts`:

```ts
moodleUrl: 'URL_DEL_CURSO_MOODLE'
```

### Calendario y clases

El calendario completo se mantiene en `src/data/course.ts`.

Las sesiones publicadas pueden tener una página propia dentro de:

```text
src/pages/clases/
```

Mientras una sesión no tenga materiales, puede permanecer con estado `Planificada` sin enlace.

## Desarrollo local

```bash
npm install
npm run dev
```

Abrir la dirección local que entregue Astro, normalmente `http://localhost:4321/`.

## Publicación

GitHub Pages se despliega automáticamente desde `main` mediante:

```text
.github/workflows/deploy-pages.yml
```

Cada cambio incorporado a `main` genera una nueva versión pública del sitio.

## Principio de diseño

La navegación principal sigue la experiencia real del estudiante:

**Inicio → Curso → Clases → Evaluaciones → Proyecto Peñaflor → Recursos**

La progresión formativa visible es:

**Observar → Problematizar → Distinguir → Modelar → Explicar → Diagnosticar → Intervenir**
