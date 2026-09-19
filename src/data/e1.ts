export const e1 = {
  code: 'E1',
  title: 'Presentación Oral: Teorías de Sistemas',
  weight: '15%',
  date: '13 de octubre de 2026',
  duration: '15 minutos',
  tolerance: '±1 minuto',
  totalPoints: 21,
  requirement: '60%',
  mode: 'Grupal · presencial',
  defense: 'Sin ronda de preguntas ni defensa oral posterior',
  objective: 'Presentar de manera clara y fundamentada una teoría de sistemas asignada, demostrando comprensión conceptual, rigurosidad teórica, aplicación al ámbito de la ingeniería ambiental y habilidades de comunicación efectiva.',
};

export const e1WhatIsAssessed = [
  'Explicar el problema histórico o conceptual que motivó el desarrollo de la teoría.',
  'Identificar a sus autores centrales y situar brevemente el contexto de surgimiento.',
  'Definir con precisión los conceptos fundamentales y establecer relaciones entre ellos.',
  'Explicar con ejemplos el mecanismo central de la teoría: cómo conecta sus conceptos para interpretar o explicar un comportamiento, proceso o situación.',
  'Aplicar la teoría a una problemática socioambiental real o simulada, mostrando qué permite observar o explicar.',
  'Analizar su alcance: qué aspectos explica especialmente bien o qué tipo de preguntas ayuda a responder.',
  'Analizar sus limitaciones, supuestos o aspectos que tiende a dejar fuera o simplificar.',
  'Comunicar una argumentación coherente, apoyada en fuentes verificables y recursos visuales funcionales.',
];

export const e1Milestone = [
  'Tres conceptos centrales identificados en las lecturas base.',
  'Una pregunta socioambiental que la teoría podría ayudar a responder.',
  'Una duda conceptual que el grupo quiera discutir antes de la evaluación.',
];

export const e1Structure = [
  ['1 min', 'Apertura', 'Pregunta, problema o tensión que sitúe a la audiencia.'],
  ['2 min', 'Origen y autores', 'Por qué emerge la teoría y qué problema intenta enfrentar.'],
  ['4 min', 'Conceptos y relaciones', 'Explicar el núcleo conceptual como una red, no como glosario.'],
  ['3 min', 'Mecanismo explicativo', 'Mostrar cómo “funciona” la teoría para explicar un proceso o comportamiento.'],
  ['3 min', 'Aplicación socioambiental', 'Utilizar la teoría para interpretar un caso pertinente.'],
  ['2 min', 'Alcance, limitaciones y cierre', 'Qué permite explicar, qué deja fuera y qué aprendizaje deja al curso.'],
];

export const e1Topics = [
  {
    number: 1,
    theory: 'Dinámica de Sistemas',
    readings: [
      'Ford, A. (1999). Modeling the Environment: An Introduction to System Dynamics Models of Environmental Systems. Island Press.',
      'Costanza, R., & Ruth, M. (1998). Using Dynamic Modeling to Scope Environmental Problems and Build Consensus. Environmental Management, 22(2), 183–195.',
    ],
  },
  {
    number: 2,
    theory: 'Teoría de la Información',
    readings: [
      'Stone, J. V. (2022). Information Theory: A Tutorial Introduction (2nd ed.). Sebtel Press.',
      'Ulanowicz, R. E., Goerner, S. J., Lietaer, B., & Gomez, R. (2009). Quantifying Sustainability: Resilience, Efficiency and the Return of Information Theory. Ecological Complexity, 6, 27–36.',
    ],
  },
  {
    number: 3,
    theory: 'Cibernética',
    readings: [
      'Ashby, W. R. (1956). An Introduction to Cybernetics. Chapman & Hall.',
      'Patten, B. C., & Odum, E. P. (1981). The Cybernetic Nature of Ecosystems. The American Naturalist, 118, 886–895.',
    ],
  },
];

export const e1Rubric = [
  {
    code:'C1', title:'Contexto, problema y autores',
    levels:[
      ['3 · Logrado con solidez','Sitúa con precisión el problema histórico/conceptual que da origen a la teoría, identifica autores centrales y explica cómo el contexto se relaciona con su surgimiento, sin errores relevantes.'],
      ['2 · Logrado','Identifica correctamente problema, autores y contexto, pero la relación entre ellos se explica de manera parcial o con menor profundidad.'],
      ['1 · Incipiente','Presenta antecedentes fragmentarios o principalmente biográficos; el problema que motiva la teoría queda poco explicado o existen imprecisiones relevantes.'],
      ['0 · Evidencia insuficiente','Omite el origen de la teoría o presenta errores sustantivos sobre autores, contexto o problema fundacional.'],
    ]
  },
  {
    code:'C2', title:'Conceptos y relaciones',
    levels:[
      ['3 · Logrado con solidez','Define con precisión los conceptos centrales y muestra relaciones coherentes entre ellos, distinguiendo ideas próximas y utilizando ejemplos pertinentes.'],
      ['2 · Logrado','La mayoría de los conceptos está correctamente definida y relacionada, aunque algunas conexiones quedan implícitas o presentan imprecisiones menores.'],
      ['1 · Incipiente','Predomina una lista de definiciones; existen conceptos incompletos, relaciones poco claras o confusiones que limitan la comprensión.'],
      ['0 · Evidencia insuficiente','Los conceptos principales están ausentes, son incorrectos o no se articulan entre sí.'],
    ]
  },
  {
    code:'C3', title:'Mecanismo explicativo',
    levels:[
      ['3 · Logrado con solidez','Explica claramente cómo la teoría utiliza sus conceptos para interpretar un comportamiento, proceso o situación; hace visible una secuencia, relación causal, dinámica, regulación o mecanismo pertinente a la teoría.'],
      ['2 · Logrado','El mecanismo puede identificarse y es mayormente correcto, pero presenta simplificaciones o pasos poco desarrollados.'],
      ['1 · Incipiente','Menciona conceptos o ejemplos, pero no logra explicar cómo se conectan para producir una explicación sistémica.'],
      ['0 · Evidencia insuficiente','No existe un mecanismo explicativo reconocible o la explicación contradice principios centrales de la teoría.'],
    ]
  },
  {
    code:'C4', title:'Transferencia a una problemática socioambiental',
    levels:[
      ['3 · Logrado con solidez','Selecciona una problemática pertinente, la contextualiza con evidencia y utiliza la teoría para explicar aspectos concretos del caso, mostrando qué permite observar que sería difícil advertir sin esa lente.'],
      ['2 · Logrado','La aplicación es pertinente y existe relación explícita con la teoría, aunque el análisis del caso es general o desarrolla solo parte de su potencial explicativo.'],
      ['1 · Incipiente','El caso es pertinente pero funciona principalmente como ejemplo ilustrativo; la relación con la teoría es superficial o declarativa.'],
      ['0 · Evidencia insuficiente','No existe aplicación pertinente o el caso presentado no guarda relación clara con la teoría.'],
    ]
  },
  {
    code:'C5', title:'Alcance y limitaciones',
    levels:[
      ['3 · Logrado con solidez','Formula un juicio crítico y fundamentado sobre qué preguntas o fenómenos explica especialmente bien la teoría y qué aspectos deja fuera, simplifica o depende de supuestos/condiciones.'],
      ['2 · Logrado','Reconoce fortalezas y limitaciones pertinentes, pero con justificación parcial o poco desarrollada.'],
      ['1 · Incipiente','Presenta apreciaciones generales (“sirve/no sirve”, “es amplia/limitada”) sin vincularlas claramente a los supuestos o al tipo de explicación de la teoría.'],
      ['0 · Evidencia insuficiente','No analiza alcance ni limitaciones, o presenta la teoría como universal sin reconocer condiciones ni límites.'],
    ]
  },
  {
    code:'C6', title:'Rigor académico, fuentes y trazabilidad',
    levels:[
      ['3 · Logrado con solidez','Usa las lecturas base de forma reconocible y correcta; las afirmaciones y datos son trazables; las fuentes se citan de manera consistente; las referencias son reales y pertinentes; el uso de IA, si existió, está declarado y verificado.'],
      ['2 · Logrado','Las fuentes son pertinentes y mayormente trazables, aunque existen inconsistencias menores de citación, atribución o declaración de uso de IA.'],
      ['1 · Incipiente','La trazabilidad es débil: escasas citas visibles, dependencia de resúmenes no verificados o afirmaciones que no pueden asociarse claramente a una fuente.'],
      ['0 · Evidencia insuficiente','No existe trazabilidad suficiente de las fuentes, se omiten las lecturas base o se presentan atribuciones/referencias no verificables.'],
    ]
  },
  {
    code:'C7', title:'Comunicación, apoyo visual y gestión del tiempo',
    levels:[
      ['3 · Logrado con solidez','La presentación es clara, coherente y sintética; todos los integrantes participan de manera sustantiva; el apoyo visual facilita la comprensión sin sustituir la explicación oral; se ajusta a 15 minutos con tolerancia de ±1 minuto.'],
      ['2 · Logrado','La comunicación es comprensible y organizada, con participación del grupo y apoyo visual funcional; existen desequilibrios menores de síntesis, distribución o tiempo.'],
      ['1 · Incipiente','La exposición es difícil de seguir por momentos, el apoyo visual está sobrecargado o poco integrado, la participación es muy desigual o el manejo del tiempo afecta contenidos importantes.'],
      ['0 · Evidencia insuficiente','La presentación es incompleta o desorganizada, el apoyo visual impide o no apoya la comprensión, o el incumplimiento de tiempo/participación impide observar el desempeño esperado.'],
    ]
  },
];
