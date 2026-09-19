import { siteConfig } from './site';

export interface ResourceItem {
  id: string;
  category: 'programa' | 'clases' | 'lecturas' | 'evaluaciones' | 'penaflor' | 'herramientas';
  type: string;
  title: string;
  description: string;
  status: 'Por cargar' | 'Disponible' | 'Campus Virtual';
  href?: string;
  collection?: 'Lecturas iniciales' | 'Evaluación 1';
}

const moodle = siteConfig.moodleUrl;

// Registro central de recursos. Los textos protegidos se describen aquí,
// pero el archivo permanece en Campus Virtual.
export const resources: ResourceItem[] = [
  { id:'programa', category:'programa', type:'PROG', title:'Programa oficial', description:'Programa institucional vigente de la asignatura.', status:'Por cargar' },
  { id:'calendario', category:'programa', type:'CAL', title:'Calendario del curso', description:'Fechas de clases, evaluaciones e hitos del semestre.', status:'Disponible', href:'../clases/' },
  { id:'presentaciones', category:'clases', type:'PPT', title:'Presentaciones de clase', description:'Diapositivas organizadas por fecha y sesión.', status:'Por cargar' },
  { id:'actividades', category:'clases', type:'ACT', title:'Actividades y talleres', description:'Guías de trabajo utilizadas durante las sesiones.', status:'Por cargar' },
  { id:'diagnosticos', category:'clases', type:'DIAG', title:'Instrumentos diagnósticos y formativos', description:'Actividades sin calificación para obtener evidencia de aprendizaje.', status:'Por cargar' },

  { id:'lectura-1-pensamiento-sistemas', category:'lecturas', collection:'Lecturas iniciales', type:'L1', title:'Lectura 1 · Pensamiento de Sistemas', description:'Pedro Antonio Narvarte Arregui (2014). Método científico, complejidad, concepto de sistema, observador, límites, propiedades sistémicas y movimiento de sistemas.', status:'Campus Virtual', href:moodle },
  { id:'lectura-2-ingenieria-ambiental', category:'lecturas', collection:'Lecturas iniciales', type:'L2', title:'Lectura 2 · Sistemas e Ingeniería Ambiental', description:'Material introductorio sobre ingeniería ambiental, desarrollo sustentable y pensamiento sistémico aplicado a problemas ambientales complejos.', status:'Campus Virtual', href:moodle },
  { id:'lectura-3-tgs', category:'lecturas', collection:'Lecturas iniciales', type:'L3', title:'Lectura 3 · Teoría General de Sistemas', description:'Clayton & Radcliffe. Complejidad, sistemas, emergencia, control jerárquico, comunicación, sistemas abiertos, límites y modelamiento.', status:'Campus Virtual', href:moodle },

  { id:'e1-t1-ford', category:'lecturas', collection:'Evaluación 1', type:'E1-T1', title:'Dinámica de Sistemas · Ford (1999)', description:'Modeling the Environment: An Introduction to System Dynamics Models of Environmental Systems.', status:'Campus Virtual', href:moodle },
  { id:'e1-t1-costanza-ruth', category:'lecturas', collection:'Evaluación 1', type:'E1-T1', title:'Dinámica de Sistemas · Costanza & Ruth (1998)', description:'Using Dynamic Modeling to Scope Environmental Problems and Build Consensus.', status:'Campus Virtual', href:moodle },
  { id:'e1-t2-stone', category:'lecturas', collection:'Evaluación 1', type:'E1-T2', title:'Teoría de la Información · Stone (2022)', description:'Information Theory: A Tutorial Introduction (2nd ed.).', status:'Campus Virtual', href:moodle },
  { id:'e1-t2-ulanowicz', category:'lecturas', collection:'Evaluación 1', type:'E1-T2', title:'Teoría de la Información · Ulanowicz et al. (2009)', description:'Quantifying Sustainability: Resilience, Efficiency and the Return of Information Theory.', status:'Campus Virtual', href:moodle },
  { id:'e1-t3-ashby', category:'lecturas', collection:'Evaluación 1', type:'E1-T3', title:'Cibernética · Ashby (1956)', description:'An Introduction to Cybernetics.', status:'Campus Virtual', href:moodle },
  { id:'e1-t3-patten-odum', category:'lecturas', collection:'Evaluación 1', type:'E1-T3', title:'Cibernética · Patten & Odum (1981)', description:'The Cybernetic Nature of Ecosystems.', status:'Campus Virtual', href:moodle },

  { id:'e1-instrucciones', category:'evaluaciones', type:'E1', title:'E1 · Instrucciones y rúbrica', description:'Presentación oral de teorías de sistemas: aspectos formales, estructura sugerida, lecturas base y rúbrica de 7 criterios.', status:'Disponible', href:'../evaluaciones/e1/' },
  { id:'evaluaciones', category:'evaluaciones', type:'EVAL', title:'Evaluaciones E2–E6', description:'Versiones vigentes de instrucciones, pautas y rúbricas.', status:'Por cargar' },
  { id:'plantillas-evaluacion', category:'evaluaciones', type:'TPL', title:'Plantillas de entrega', description:'Formatos y estructuras oficiales para productos evaluativos.', status:'Por cargar' },

  { id:'ehl', category:'penaflor', type:'EHL', title:'Estrategia Hídrica Local', description:'Documento base del desafío vinculado.', status:'Por cargar' },
  { id:'paccc', category:'penaflor', type:'PACCC', title:'Plan de Acción Comunal de Cambio Climático', description:'Instrumento comunal de referencia para la articulación.', status:'Por cargar' },
  { id:'instrumentos-proyecto', category:'penaflor', type:'PROY', title:'Instrumentos de trabajo Peñaflor', description:'Crosswalk, matriz maestra, fichas y productos de análisis.', status:'Por cargar' },
  { id:'rich-picture', category:'herramientas', type:'TOOL', title:'Rich Picture', description:'Orientaciones para explorar situaciones problemáticas complejas.', status:'Por cargar' },
  { id:'caja-negra', category:'herramientas', type:'TOOL', title:'Caja negra y transformación', description:'Guía para representar condición inicial, transformación y condición resultante.', status:'Por cargar' },
  { id:'catwoe', category:'herramientas', type:'TOOL', title:'CATWOE / TAPCID', description:'Andamiaje para caracterizar y revisar definiciones de sistemas relevantes.', status:'Por cargar' },
  { id:'crosswalk', category:'herramientas', type:'TOOL', title:'Crosswalk EHL–PACCC', description:'Herramienta para analizar correspondencias, tensiones y relaciones entre instrumentos.', status:'Por cargar' },
];
