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
  { id:'c02', date:'2026-09-24', label:'24 SEP', day:'Jueves', time:'15:20–16:45', title:'Preparar la escucha: EHL, PACCC, evidencia y preguntas', detail:'Lectura guiada EHL/PACCC · EV / INT / HIP / ? · banco inicial de preguntas para H0.', status:'Disponible', kind:'clase', href:'clases/24-septiembre/', month:'SEP' },
  { id:'c03', date:'2026-09-29', label:'29 SEP', day:'Martes', time:'15:20–18:15', title:'Pensamiento sistémico y situaciones problemáticas', detail:'Checkland · complejidad · rich picture · transferencia a Peñaflor · preparación final de H0.', status:'Disponible', kind:'clase', href:'clases/29-septiembre/', month:'SEP' },
  { id:'h0', date:'2026-09-30', label:'30 SEP', day:'Miércoles', time:'11:30 · horario extraordinario', title:'H0 · Encuentro con Municipalidad de Peñaflor', detail:'Presentación del desafío · indagación · ejemplos concretos · actores · procesos · incertidumbres · acuerdos y pendientes.', status:'Hito', kind:'hito', href:'proyecto-penaflor/', month:'SEP' },
  { id:'c04', date:'2026-10-01', label:'01 OCT', day:'Jueves', time:'15:20–16:45', title:'Propiedades sistémicas y sistemas relevantes', detail:'Emergencia · jerarquía · información · control · definición raíz.', status:'Disponible', kind:'clase', href:'clases/01-octubre/', month:'OCT' },
  { id:'c05', date:'2026-10-06', label:'06 OCT', day:'Martes', time:'15:20–18:15', title:'Teorías de sistemas aplicadas a problemáticas socioambientales', detail:'Cibernética · teoría de la información · dinámica de sistemas · aplicación al desafío Peñaflor.', status:'Disponible', kind:'clase', href:'clases/06-octubre/', month:'OCT' },
  { id:'c06', date:'2026-10-08', label:'08 OCT', day:'Jueves', time:'15:20–16:45', title:'Delimitación colectiva del desafío Peñaflor y acuerdos de trabajo', detail:'Rich picture común · evidencia/interpretación · preguntas prioritarias · formalización del equipo único.', status:'Disponible', kind:'clase', href:'clases/08-octubre/', month:'OCT' },
  { id:'e1', date:'2026-10-13', label:'13 OCT', day:'Martes', time:'15:20–18:15', title:'E1 · Presentaciones de teorías de sistemas', detail:'15 min · problema · conceptos · mecanismo · aplicación socioambiental · alcance y limitaciones.', status:'Hito', kind:'evaluacion', href:'evaluaciones/e1/', month:'OCT' },
  { id:'c08', date:'2026-10-15', label:'15 OCT', day:'Jueves', time:'15:20–16:45', title:'Integración de teorías y lectura sistémica del desafío', detail:'Lenguaje común · complementariedad de enfoques · revisión de preguntas.', status:'Planificada', kind:'clase', month:'OCT' },
  { id:'c09', date:'2026-10-20', label:'20 OCT', day:'Martes', time:'15:20–18:15', title:'Transformación y caracterización del sistema', detail:'Caja negra · entradas/salidas · transformación · CATWOE/TAPCID.', status:'Planificada', kind:'clase', month:'OCT' },
  { id:'c10', date:'2026-10-22', label:'22 OCT', day:'Jueves', time:'15:20–16:45', title:'Información, regulación y revisión de coherencia', detail:'Transformación → información → decisión → acción · preparación E2.', status:'Planificada', kind:'clase', month:'OCT' },
  { id:'e2', date:'2026-10-27', label:'27 OCT', day:'Martes', time:'15:20–18:15', title:'E2 · Evaluación individual', detail:'Transferencia de conceptos y herramientas a mini-casos socioambientales.', status:'Hito', kind:'evaluacion', href:'evaluaciones/', month:'OCT' },
  { id:'c12', date:'2026-10-29', label:'29 OCT', day:'Jueves', time:'15:20–16:45', title:'Apertura del análisis documental EHL–PACCC', detail:'Evidencia · trazabilidad · afirmación / interpretación / hipótesis.', status:'Planificada', kind:'clase', month:'OCT' },
  { id:'c13', date:'2026-11-03', label:'03 NOV', day:'Martes', time:'15:20–18:15', title:'Laboratorio documental EHL–PACCC', detail:'Lectura estructurada · actores · acciones · indicadores · responsabilidades.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'c14', date:'2026-11-05', label:'05 NOV', day:'Jueves', time:'15:20–16:45', title:'Crosswalk EHL–PACCC y articulación semántica', detail:'Correspondencias · tensiones · vacíos · relaciones directas y habilitantes.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'c15', date:'2026-11-10', label:'10 NOV', day:'Martes', time:'15:20–18:15', title:'Preparación H1 · Problematización y sistema pertinente', detail:'Rich picture · sistema relevante · definición raíz · evidencia pendiente.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'h1', date:'2026-11-12', label:'12 NOV', day:'Jueves', time:'15:20–16:45', title:'H1 · Contraste con la contraparte municipal', detail:'Situación-problema · actores · sistema preliminar · delimitación · hipótesis · preguntas abiertas.', status:'Hito', kind:'hito', href:'proyecto-penaflor/', month:'NOV' },
  { id:'c17', date:'2026-11-17', label:'17 NOV', day:'Martes', time:'15:20–18:15', title:'Revisión de sistemas relevantes, definiciones raíz y transformación', detail:'Retroalimentación H1 · sistema pertinente · definición raíz · transformación · CATWOE/TAPCID.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'c18', date:'2026-11-19', label:'19 NOV', day:'Jueves', time:'15:20–16:45', title:'Delimitación formal: sistema, ambiente, niveles y método de definición', detail:'Sistema/ambiente · inclusión/exclusión · límites · delimitaciones alternativas · preparación E3-I1.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'e3', date:'2026-11-24', label:'24 NOV', day:'Martes', time:'15:20–18:15', title:'E3 · Problematización y sistema pertinente', detail:'Expediente integrado · ficha individual E3-I1 · defensa individual E3-I2 · sistema pertinente y delimitación.', status:'Hito', kind:'evaluacion', href:'evaluaciones/', month:'NOV' },
  { id:'c20', date:'2026-11-26', label:'26 NOV', day:'Jueves', time:'15:20–16:45', title:'Abrir la caja negra: de la transformación a las funciones', detail:'Transformación · actividades necesarias · funciones · apertura progresiva del sistema.', status:'Planificada', kind:'clase', month:'NOV' },
  { id:'c21', date:'2026-12-01', label:'01 DIC', day:'Martes', time:'15:20–18:15', title:'Función, actor y capacidad', detail:'Funciones · actores · capacidades · restricciones · responsabilidades · condiciones de implementación.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'c22', date:'2026-12-03', label:'03 DIC', day:'Jueves', time:'15:20–16:45', title:'Arquitectura relacional', detail:'Relaciones · dependencias · coordinación · flujos · BPMN cuando resulte pertinente.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'feriado', date:'2026-12-08', label:'08 DIC', day:'Martes', time:'—', title:'Feriado legal', detail:'No se realiza sesión de clases.', status:'Feriado', kind:'feriado', month:'DIC' },
  { id:'c23', date:'2026-12-10', label:'10 DIC', day:'Jueves', time:'15:20–16:45', title:'Información, decisión, regulación y seguimiento EHL–PACCC', detail:'Estado observado/deseado · información · comparación · decisión · acción · retroalimentación · seguimiento.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'c24', date:'2026-12-15', label:'15 DIC', day:'Martes', time:'15:20–18:15', title:'Coordinación, variedad y comportamiento dinámico', detail:'Variedad · coordinación · bucles · demoras · comportamiento · stress test del modelo.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'h2', date:'2026-12-17', label:'17 DIC', day:'Jueves', time:'15:20–16:45', title:'H2 · Validación de plausibilidad con la contraparte', detail:'Contraste del modelo integrado · transformación · arquitectura · información · regulación · dinámica · evidencia faltante.', status:'Hito', kind:'hito', href:'proyecto-penaflor/', month:'DIC' },
  { id:'e4', date:'2026-12-22', label:'22 DIC', day:'Martes', time:'15:20–18:15', title:'E4 · Modelamiento sistémico integrado', detail:'Transformación · arquitectura · información · regulación · dinámica · defensa.', status:'Hito', kind:'evaluacion', href:'evaluaciones/', month:'DIC' },
  { id:'c27', date:'2026-12-24', label:'24 DIC', day:'Jueves', time:'15:20–16:45', title:'Del modelo al diagnóstico', detail:'Síntoma · hallazgo · mecanismo · consecuencia · brecha · diagnóstico como explicación.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'c28', date:'2026-12-29', label:'29 DIC', day:'Martes', time:'15:20–18:15', title:'Brechas, capacidades y puntos de intervención', detail:'Evidencia → mecanismo → brecha → capacidad → punto de intervención · agencia municipal.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'c29', date:'2026-12-31', label:'31 DIC', day:'Jueves', time:'15:20–16:45', title:'Alternativas sistémicas', detail:'Alternativas · mecanismo–acción · efectos · criterios · variantes sustantivas · SAMs cuando corresponda.', status:'Planificada', kind:'clase', month:'DIC' },
  { id:'c30', date:'2027-01-05', label:'05 ENE', day:'Martes', time:'15:20–18:15', title:'Trade-offs, dependencias, priorización y hoja de ruta', detail:'Efectos · trade-offs · dependencias · precedencia · factibilidad · priorización · fases de implementación.', status:'Planificada', kind:'clase', month:'ENE' },
  { id:'e5', date:'2027-01-07', label:'07 ENE', day:'Jueves', time:'15:20–16:45', title:'E5 · Diagnóstico e intervención', detail:'Diagnóstico integrado · puntos de intervención · alternativas · hoja de ruta.', status:'Hito', kind:'evaluacion', href:'evaluaciones/', month:'ENE' },
  { id:'h3', date:'2027-01-12', label:'12 ENE', day:'Martes', time:'15:20–18:15', title:'H3 + E6 · Presentación a Municipalidad de Peñaflor', detail:'Hoja de ruta integrada · evaluación municipal · comunicación profesional.', status:'Hito', kind:'evaluacion', href:'proyecto-penaflor/', month:'ENE' },
  { id:'c33', date:'2027-01-14', label:'14 ENE', day:'Jueves', time:'15:20–16:45', title:'Cierre, revisión y metacognición', detail:'Línea base · progresión · límites del modelo · transferencia · reflexión individual y adenda final.', status:'Planificada', kind:'clase', month:'ENE' },
];

export const evaluations = [
  { code:'E1', title:'Presentación de teorías de sistemas', weight:'15%', mode:'Grupal · presencial', date:'2026-10-13', dateLabel:'13 OCT', purpose:'Reconstruir la lógica de una teoría, explicar su mecanismo, aplicarla a una problemática socioambiental y analizar su alcance y limitaciones.', evidence:'Presentación oral de 15 min + apoyo visual' },
  { code:'E2', title:'Evaluación individual', weight:'15%', mode:'Individual', date:'2026-10-27', dateLabel:'27 OCT', purpose:'Transferir conceptos y herramientas a mini-casos socioambientales.', evidence:'Respuestas abiertas de transferencia' },
  { code:'E3', title:'Problematización y sistema pertinente', weight:'20%', mode:'60% colectivo + 40% individual', date:'2026-11-24', dateLabel:'24 NOV', purpose:'Construir la situación-problema, contrastar perspectivas y delimitar un sistema pertinente con trazabilidad individual.', evidence:'Expediente integrado + E3-I1 + E3-I2' },
  { code:'E4', title:'Modelamiento sistémico integrado', weight:'20%', mode:'Grupal + defensa', date:'2026-12-22', dateLabel:'22 DIC', purpose:'Representar transformación, arquitectura, información, regulación y dinámica.', evidence:'Modelo integrado + defensa' },
  { code:'E5', title:'Diagnóstico e intervención', weight:'20%', mode:'Equipo único + evidencia individual', date:'2027-01-07', dateLabel:'07 ENE', purpose:'Integrar evidencia, mecanismos, brechas y puntos de intervención para justificar alternativas y construir la hoja de ruta.', evidence:'Diagnóstico integrado + hoja de ruta + evidencia individual' },
  { code:'E6', title:'Evaluación municipal', weight:'10%', mode:'Equipo único', date:'2027-01-12', dateLabel:'12 ENE', purpose:'Valorar pertinencia, utilidad, evidencia local y calidad de la comunicación profesional del producto integrado.', evidence:'Hoja de ruta + presentación final a contraparte' },
];

export const projectMilestones = [
  { code:'H0', date:'30 SEP', title:'Comprender el desafío', desc:'Escuchar a la Municipalidad, contrastar preguntas preparadas y registrar evidencia, perspectivas e incertidumbres sin cerrar prematuramente el problema.' },
  { code:'H1', date:'12 NOV', title:'Contrastar la problematización', desc:'Revisar situación-problema, actores, sistema pertinente y primeras hipótesis con la contraparte.' },
  { code:'H2', date:'17 DIC', title:'Contrastar el modelo', desc:'Poner a prueba transformación, arquitectura, información, regulación, dinámica y evidencia faltante.' },
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
