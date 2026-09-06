export interface ResourceItem {
  id: string;
  category: 'programa' | 'clases' | 'lecturas' | 'evaluaciones' | 'penaflor' | 'herramientas';
  type: string;
  title: string;
  description: string;
  status: 'Por cargar' | 'Disponible' | 'Campus Virtual';
  href?: string;
}

// Registro central de recursos. Para incorporar documentación basta con
// cambiar status/href o añadir un nuevo objeto; no es necesario rediseñar páginas.
export const resources: ResourceItem[] = [
  { id:'programa', category:'programa', type:'PROG', title:'Programa oficial', description:'Programa institucional vigente de la asignatura.', status:'Por cargar' },
  { id:'calendario', category:'programa', type:'CAL', title:'Calendario del curso', description:'Fechas de clases, evaluaciones e hitos del semestre.', status:'Por cargar' },
  { id:'presentaciones', category:'clases', type:'PPT', title:'Presentaciones de clase', description:'Diapositivas organizadas por fecha y sesión.', status:'Por cargar' },
  { id:'actividades', category:'clases', type:'ACT', title:'Actividades y talleres', description:'Guías de trabajo utilizadas durante las sesiones.', status:'Por cargar' },
  { id:'diagnosticos', category:'clases', type:'DIAG', title:'Instrumentos diagnósticos y formativos', description:'Actividades sin calificación para obtener evidencia de aprendizaje.', status:'Por cargar' },
  { id:'lecturas-base', category:'lecturas', type:'LECT', title:'Lecturas base', description:'Bibliografía obligatoria; los materiales protegidos se alojan en Campus Virtual.', status:'Campus Virtual' },
  { id:'lecturas-complementarias', category:'lecturas', type:'LECT', title:'Lecturas complementarias', description:'Textos de profundización organizados por tema.', status:'Campus Virtual' },
  { id:'evaluaciones', category:'evaluaciones', type:'EVAL', title:'Instrucciones E1–E6', description:'Versiones vigentes de instrucciones, pautas y rúbricas.', status:'Por cargar' },
  { id:'plantillas-evaluacion', category:'evaluaciones', type:'TPL', title:'Plantillas de entrega', description:'Formatos y estructuras oficiales para productos evaluativos.', status:'Por cargar' },
  { id:'ehl', category:'penaflor', type:'EHL', title:'Estrategia Hídrica Local', description:'Documento base del desafío vinculado.', status:'Por cargar' },
  { id:'paccc', category:'penaflor', type:'PACCC', title:'Plan de Acción Comunal de Cambio Climático', description:'Instrumento comunal de referencia para la articulación.', status:'Por cargar' },
  { id:'instrumentos-proyecto', category:'penaflor', type:'PROY', title:'Instrumentos de trabajo Peñaflor', description:'Crosswalk, matriz maestra, fichas y productos de análisis.', status:'Por cargar' },
  { id:'rich-picture', category:'herramientas', type:'TOOL', title:'Rich Picture', description:'Orientaciones para explorar situaciones problemáticas complejas.', status:'Por cargar' },
  { id:'caja-negra', category:'herramientas', type:'TOOL', title:'Caja negra y transformación', description:'Guía para representar condición inicial, transformación y condición resultante.', status:'Por cargar' },
  { id:'catwoe', category:'herramientas', type:'TOOL', title:'CATWOE / TAPCID', description:'Andamiaje para caracterizar y revisar definiciones de sistemas relevantes.', status:'Por cargar' },
  { id:'crosswalk', category:'herramientas', type:'TOOL', title:'Crosswalk EHL–PACCC', description:'Herramienta para analizar correspondencias, tensiones y relaciones entre instrumentos.', status:'Por cargar' },
];
