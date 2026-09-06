# Integración con Campus Virtual Moodle

Esta carpeta contiene los bloques HTML preparados para usar Moodle como puerta institucional hacia el repositorio académico del curso.

## Archivos

- `portada-general.html`: versión recomendada para la sección **General** del curso.
- `banner-compacto.html`: versión reducida para usar como alternativa si el tema institucional de Moodle limita el espacio disponible.

## Cómo instalar la portada

1. Activar **Modo edición** en el curso Moodle.
2. En la sección **General**, agregar **Área de texto y medios** (o **Etiqueta**, según la versión de Moodle).
3. Abrir el editor HTML / código fuente del editor de texto.
4. Copiar y pegar el contenido completo de `portada-general.html`.
5. Guardar y comprobar la visualización en escritorio y móvil.
6. Si el tema institucional modifica demasiado el diseño, utilizar `banner-compacto.html`.

## Estructura Moodle recomendada

- **General / Inicio**: portada y anuncios.
- **01 · Entregas**: actividades de entrega E1–E6 cuando corresponda.
- **02 · Lecturas protegidas**: libros, capítulos y artículos restringidos.
- **03 · Documentos institucionales**: programa y otros documentos oficiales.

Las clases, calendario, evaluaciones, recursos públicos y Proyecto Peñaflor se navegan desde el repositorio web.

## Enlace inverso Moodle → repositorio

La portada ya apunta a:

`https://anibalroman-ops.github.io/Repositorio-Teoria-de-Sistemas/`

## Enlace repositorio → Moodle

El sitio tiene preparado `moodleUrl` en `src/data/site.ts`. Actualmente está vacío para no inventar la URL institucional. Cuando se disponga de la URL exacta del curso Moodle, basta reemplazar:

```ts
moodleUrl: '',
```

por:

```ts
moodleUrl: 'URL_EXACTA_DEL_CURSO_MOODLE',
```

El botón **Campus Virtual** del repositorio quedará activo automáticamente.
