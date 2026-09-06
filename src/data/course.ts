export type SessionStatus = 'Disponible' | 'Planificada' | 'Hito' | 'Feriado';
export type SessionKind = 'clase' | 'evaluacion' | 'hito' | 'feriado';

export interface Session {
  id: string;
  date: string;
  label: string;
  day: string;
  time: string;
  title: string;
  detail: string;
  status: SessionStatus;
  kind: SessionKind;
  href?: string;
  month: 'SEP' | 'OCT' | 'NOV' | 'DIC' | 'ENE';
}

export const learningRoute = [
  'Observar',
  'Problematizar',
  'Distinguir',
  'Modelar',
  'Explicar',
  'Diagnosticar',
  'Intervenir',
];

export const sessions: Session[] = [
  { id:'c01', date:'2026-09-22', label:'22 SEP', day:'Martes', time:'15:20–18:15', title:'El observador y la construcción de sistemas', detail:'Fenómeno · observador · sistema · diagnóstico inicial · presentación de E1 y del desafío Peñaflor.', status:'Disponible', kind:'clase', href:'clases/22-septiembre/', month:'SEP' },
  { id:'c02', date:'2026-09-24', label:'24 SEP', day:'Jueves', time:'15:20–16:45', title:'H0 · Escuchar el desafío y observar múltiples perspectivas', detail:'EHL/PACCC · contraparte · sabemos / interpretamos / necesitamos comprender.', status:'Planificada', kind:'hito', month:'SEP' },
  { id:'c03', date:'2026-09-29', label:'29 SEP', day:'Martes', time:'15:20–18:15', title:'Pensamiento sistémico y situaciones problemáticas', detail:'Checkland · complejidad · movimiento de sistemas · rich picture.', status:'Disponible', kind:'clase', href:'clases/29-septiembre/', month:'SEP' },
  { id:'c04', date:'2026-10-01', label:'01 OCT', day:'Jueves', time:'15:20–16:45', title:'Propiedades sistémicas y sistemas relevantes', detail:'Emergencia · jerarquía · información · control · definición raíz.', status:'Disponible', kind:'clase', href:'clases/01-octubre/', month:'OCT' },
  { id:'c05', date:'2026-10-06', label:'06 OCT', day:'Martes', time:'15:20–18:15', title:'Teorías de sistemas y problemáticas socioambientales', detail:'Información · cibernética · dinámica de sistemas · conversación profesional.', status:'Disponible', kind:'clase', href:'clases/06-octubre/', month:'OCT' },
  { id:'c06', date:'2026-10-08', label:'08 OCT', day:'Jueves', time:'15:20–16:45', title:'Delimitación colectiva del desafío Peñaflor', detail:'Conversación · acuerdos · evidencia · preguntas sistémicas · preparación del primer avance.', status:'Disponible', kind:'clase', href:'clases/08-octubre/', month:'OCT' },
  { id:'e1', date:'2026-10-13', label:'13 OCT', day:'Martes', time:'15:20–18:15', title:'E1 · Presentaciones de teorías de sistemas', detail:'Problema · conceptos · mecanismo · aplicación · alcance · límites.', status:'Hito', kind:'evaluacion', href:'evaluaciones/', month:'OCT' },
  { id:'c08', date:'2026-10-15', label:'15 OCT', day:'Jueves', time:'15:20–16:45', title:'Integración de teorías y lectura sistémica del desafío', detail:'Lenguaje común · complementariedad de enfoques · revisión de preguntas.', status:'Planificada', kind:'clase', month:'OCT' },
  { id:'c09', date:'2026-10-20', label:'20 OCT', day:'Martes', time:'15:20–18:15', title:'Transformación y caracterización del sistema', detail:'Caja negra · entradas/salidas · transformación · CATWOE/TAPCID.', status:'Planificada', kind:'clase', month:'OCT' },
  { id:'c10', date:'2026-10-22', label:'22 OCT', day:'Jueves', time:'15:20–16:45', title:'Información, regulación y revisión de coherencia', detail:'Transformación → información → decisión → acción · preparación E2.', status:'Planificada', kind:'clase', month:'OCT' },
  { id:'e2', date:'2026-10-27', label:'27 OCT', day:'Martes', time:'15:20–18:15', title:'E2 · Evaluación individual', detail:'Transferencia de conceptos y herramientas a mini-casos socioambientales.', status:'Hito', kind:'evaluacion', href:'evaluaciones/', month:'OCT' },
  { id:'c12', date:'2026-10-29', label:'29 OCT', day:'Jueves', time:'15:20–16:45', title:'Apertura del análisis documental EHL–PACCC', detail:'Evidencia · trazabilidad · afirmación / interpretación / hipótesis.', status:'Planificada', kind:'clase', month:'OCT' },
  { id:'c13', date:'2026-11-03', label:'03 NOV', day:'Martes', time:'15:20–18:15', title:'Laboratorio documental EHL–PACCC', detail:'Lectura estructurada · actores · acciones · indicadores · responsabilidades.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'c14', date:'2026-11-05', label:'05 NOV', day:'Jueves', time:'15:20–16:45', title:'Crosswalk EHL–PACCC y articulación semántica', detail:'Correspondencias · tensiones · vacíos · relaciones directas y habilitantes.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'c15', date:'2026-11-10', label:'10 NOV', day:'Martes', time:'15:20–18:15', title:'Preparación H1 · Problematización y sistema pertinente', detail:'Rich picture · sistema relevante · definición raíz · evidencia pendiente.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'h1', date:'2026-11-12', label:'12 NOV', day:'Jueves', time:'15:20–16:45', title:'H1 · Contraste con la contraparte municipal', detail:'Validación de situación-problema · actores · delimitación · hipótesis.', status:'Hito', kind:'hito', href:'proyecto-penaflor/', month:'NOV' },
  { id:'c17', date:'2026-11-17', label:'17 NOV', day:'Martes', time:'15:20–18:15', title:'Revisión posterior a H1 y delimitación final', detail:'Retroalimentación · límites · propósito · transformación · trazabilidad.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'c18', date:'2026-11-19', label:'19 NOV', day:'Jueves', time:'15:20–16:45', title:'Roles, facultades y capacidades de implementación', detail:'Actores · funciones · competencias · restricciones · dependencias.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'e3', date:'2026-11-24', label:'24 NOV', day:'Martes', time:'15:20–18:15', title:'E3 · Problematización y sistema pertinente', detail:'Situación-problema · crosswalk crítico · sistema pertinente · defensa.', status:'Hito', kind:'evaluacion', href:'evaluaciones/', month:'NOV' },
  { id:'c20', date:'2026-11-26', label:'26 NOV', day:'Jueves', time:'15:20–16:45', title:'Arquitectura funcional y relacional', detail:'Transformación · actividades · componentes · relaciones · dependencias.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'c21', date:'2026-12-01', label:'01 DIC', day:'Martes', time:'15:20–18:15', title:'Información, decisión y regulación', detail:'Flujos de información · comparación · decisión · acción · retroalimentación.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'c22', date:'2026-12-03', label:'03 DIC', day:'Jueves', time:'15:20–16:45', title:'Dinámica, retroalimentación y comportamiento', detail:'Relaciones causales · bucles · demoras · efectos no intencionados.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'feriado', date:'2026-12-08', label:'08 DIC', day:'Martes', time:'—', title:'Feriado legal', detail:'No se realiza sesión de clases.', status:'Feriado', kind:'feriado', month:'DIC' },
  { id:'c24', date:'2026-12-10', label:'10 DIC', day:'Jueves', time:'15:20–16:45', title:'Integración del modelo y preparación H2', detail:'Transformación · arquitectura · información · regulación · dinámica.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'h2', date:'2026-12-15', label:'15 DIC', day:'Martes', time:'15:20–18:15', title:'H2 · Contraste del modelo con la contraparte', detail:'Plausibilidad del modelo · brechas · dependencias · evidencia faltante.', status:'Hito', kind:'hito', href:'proyecto-penaflor/', month:'DIC' },
  { id:'c26', date:'2026-12-17', label:'17 DIC', day:'Jueves', time:'15:20–16:45', title:'Revisión posterior a H2', detail:'Ajuste del modelo · coherencia · preparación del cierre de E4.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'e4', date:'2026-12-22', label:'22 DIC', day:'Martes', time:'15:20–18:15', title:'E4 · Modelamiento sistémico integrado', detail:'Transformación · arquitectura · información · regulación · dinámica · defensa.', status:'Hito', kind:'evaluacion', href:'evaluaciones/', month:'DIC' },
  { id:'c28', date:'2026-12-24', label:'24 DIC', day:'Jueves', time:'15:20–16:45', title:'Del modelo al diagnóstico', detail:'Mecanismos · brechas · restricciones · condiciones de viabilidad.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'c29', date:'2026-12-29', label:'29 DIC', day:'Martes', time:'15:20–18:15', title:'Diagnóstico y puntos de intervención', detail:'Evidencia → mecanismo → brecha → punto de intervención.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'c30', date:'2026-12-31', label:'31 DIC', day:'Jueves', time:'15:20–16:45', title:'Alternativas, efectos y trade-offs', detail:'Alternativas · efectos directos/indirectos · demoras · factibilidad · sustentabilidad.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'c31', date:'2027-01-05', label:'05 ENE', day:'Martes', time:'15:20–18:15', title:'Preparación E5 · Hoja de ruta sistémica', detail:'Prioridad · secuencia · dependencia · responsable · indicador · revisión.', status:'Planificada', kind:'clase', month:'ENE' },
  { id:'e5', date:'2027-01-07', label:'07 ENE', day:'Jueves', time:'15:20–16:45', title:'E5 · Diagnóstico e intervención', detail:'Diagnóstico integrado · puntos de intervención · alternativas · hoja de ruta.', status:'Hito', kind:'evaluacion', href:'evaluaciones/', month:'ENE' },
  { id:'h3', date:'2027-01-12', label:'12 ENE', day:'Martes', time:'15:20–18:15', title:'H3 + E6 · Presentación a Municipalidad de Peñaflor', detail:'Hoja de ruta integrada · evaluación municipal · comunicación profesional.', status:'Hito', kind:'evaluacion', href:'proyecto-penaflor/', month:'ENE' },
  { id:'c34', date:'2027-01-14', label:'14 ENE', day:'Jueves', time:'15:20–16:45', title:'Cierre del curso y metarreflexión', detail:'Síntesis · revisión del aprendizaje · transferencia a futuros problemas profesionales.', status:'Planificada', kind:'clase', month:'ENE' },
];

export const evaluations = [
  { code:'E1', title:'Presentación de teorías de sistemas', weight:'15%', mode:'Grupal', date:'2026-10-13', dateLabel:'13 OCT', purpose:'Comprender una teoría, explicar su mecanismo, aplicarla y reconocer alcance y límites.', evidence:'Presentación oral + apoyo visual' },
  { code:'E2', title:'Evaluación individual', weight:'15%', mode:'Individual', date:'2026-10-27', dateLabel:'27 OCT', purpose:'Transferir conceptos y herramientas a mini-casos socioambientales.', evidence:'Respuestas abiertas de transferencia' },
  { code:'E3', title:'Problematización y sistema pertinente', weight:'20%', mode:'Grupal + defensa', date:'2026-11-24', dateLabel:'24 NOV', purpose:'Construir la situación-problema, contrastar perspectivas y delimitar un sistema pertinente.', evidence:'Informe + defensa' },
  { code:'E4', title:'Modelamiento sistémico integrado', weight:'20%', mode:'Grupal + defensa', date:'2026-12-22', dateLabel:'22 DIC', purpose:'Representar transformación, arquitectura, información, regulación y dinámica.', evidence:'Modelo integrado + defensa' },
  { code:'E5', title:'Diagnóstico e intervención', weight:'20%', mode:'Grupal', date:'2027-01-07', dateLabel:'07 ENE', purpose:'Integrar evidencia, mecanismos, brechas y puntos de intervención para justificar alternativas.', evidence:'Diagnóstico + hoja de ruta' },
  { code:'E6', title:'Evaluación municipal', weight:'10%', mode:'Grupal', date:'2027-01-12', dateLabel:'12 ENE', purpose:'Valorar pertinencia, utilidad, evidencia local y calidad de la comunicación profesional.', evidence:'Presentación final a contraparte' },
];

export const projectMilestones = [
  { code:'H0', date:'24 SEP', title:'Comprender el desafío', desc:'Escuchar, distinguir perspectivas y registrar incertidumbres sin cerrar prematuramente el problema.' },
  { code:'H1', date:'12 NOV', title:'Contrastar la problematización', desc:'Revisar situación-problema, actores, sistema pertinente y primeras hipótesis con la contraparte.' },
  { code:'H2', date:'15 DIC', title:'Contrastar el modelo', desc:'Poner a prueba transformación, arquitectura, información, regulación, dinámica y brechas.' },
  { code:'H3', date:'12 ENE', title:'Presentar la hoja de ruta', desc:'Integrar diagnóstico, prioridades, secuencia, responsables, indicadores y recomendaciones.' },
];

export const resourceCategories = [
  { id:'programa', label:'Programa', icon:'PROG', desc:'Programa oficial, calendario y orientaciones generales.' },
  { id:'clases', label:'Clases', icon:'CLASE', desc:'Presentaciones, guías, actividades y materiales por sesión.' },
  { id:'lecturas', label:'Lecturas', icon:'LECT', desc:'Textos base y complementarios; los protegidos se enlazan a Campus Virtual.' },
  { id:'evaluaciones', label:'Evaluaciones', icon:'EVAL', desc:'Instrucciones, pautas, rúbricas y versiones vigentes.' },
  { id:'penaflor', label:'Proyecto Peñaflor', icon:'PROY', desc:'EHL, PACCC, matrices, instrumentos y productos del desafío vinculado.' },
  { id:'herramientas', label:'Herramientas', icon:'TOOL', desc:'Rich Picture, caja negra, CATWOE/TAPCID, crosswalk y plantillas.' },
];
