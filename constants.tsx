
import { Module } from './types';

export const MODULES: Module[] = [
  {
    id: 1,
    title: "Fundamentos de la Dismorfología",
    subtitle: "Definiciones y Procesos de Morfogénesis",
    colorClass: "bg-blue-600",
    textColor: "text-blue-600",
    content: `
      <p class="mb-4">La <strong>dismorfología</strong> es la disciplina médica que estudia las causas y el abordaje de las anomalías congénitas. Es vital distinguir entre los procesos que alteran la forma humana durante el desarrollo.</p>
      <h3 class="text-xl font-bold mt-6 mb-3">Morfogénesis Anómala</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Malformación:</strong> Defecto intrínseco primario (ej. polidactilia).</li>
        <li><strong>Deformación:</strong> Fuerza mecánica externa (ej. pie equinovaro por espacio reducido).</li>
        <li><strong>Disrupción:</strong> Interrupción de un tejido ya formado (ej. bridas amnióticas).</li>
        <li><strong>Displasia:</strong> Desorganización celular (ej. displasia esquelética).</li>
      </ul>
    `,
    summary: "La clasificación de los defectos según su origen fisiopatológico es el primer paso para un diagnóstico sindrómico preciso.",
    clinicalCase: {
      patient: "Recién nacido de 38 semanas, producto de madre primigesta con oligohidramnios severo detectado en el tercer trimestre.",
      findings: "Presenta asimetría facial leve y pie equinovaro bilateral reductible. No se observan otras anomalías internas en ecografía.",
      question: "¿Cuál es el proceso morfogénico más probable involucrado en este caso?",
      resolution: "Se trata de una **Deformación**. El oligohidramnios redujo el espacio intrauterino, ejerciendo fuerzas mecánicas extrínsecas sobre estructuras que inicialmente se desarrollaban de forma normal."
    },
    quiz: [
      {
        id: 1,
        question: "¿Cuál es la definición correcta de 'Secuencia de Deformación'?",
        options: ["Defecto intrínseco celular.", "Fuerzas mecánicas extrínsecas sobre tejido normal.", "Evento destructivo vascular.", "Defecto genético puro."],
        correctAnswer: 1,
        explanation: "La deformación se produce por factores externos, como la falta de espacio, sobre un feto morfológicamente sano."
      }
    ]
  },
  {
    id: 2,
    title: "La Historia Clínica en Dismorfología",
    subtitle: "Anamnesis y Árbol Genealógico",
    colorClass: "bg-emerald-600",
    textColor: "text-emerald-600",
    content: `
      <p class="mb-4">Una historia clínica exhaustiva debe investigar exposiciones prenatales y antecedentes familiares en al menos tres generaciones.</p>
    `,
    summary: "El pedigrí es la herramienta diagnóstica más económica y potente en genética clínica.",
    clinicalCase: {
      patient: "Lactante menor con retraso del crecimiento y microcefalia.",
      findings: "La madre refiere consumo de sustancias durante el primer trimestre. Al realizar el pedigrí, descubres que un hermano previo falleció con defectos cardiacos no explicados.",
      question: "¿Qué aspecto de la historia clínica es prioritario investigar para descartar un teratógeno común?",
      resolution: "Es prioritario detallar el **consumo de alcohol** (cantidad y frecuencia) para descartar Síndrome Alcohólico Fetal, además de solicitar autopsia o registros del hermano fallecido para buscar patrones de recurrencia."
    },
    quiz: [
      {
        id: 1,
        question: "¿Cuántas generaciones debe abarcar un pedigrí ideal?",
        options: ["Una", "Dos", "Tres", "Cuatro"],
        correctAnswer: 2,
        explanation: "Tres generaciones permiten observar patrones de herencia con claridad."
      }
    ]
  },
  {
    id: 3,
    title: "Examen Físico Sistemático",
    subtitle: "Identificación de Patrones Faciales y Corporales",
    colorClass: "bg-indigo-600",
    textColor: "text-indigo-600",
    content: `
      <p class="mb-4">La cara es la región con mayor densidad de rasgos informativos. Debemos evaluar distancias, inclinaciones y formas de manera objetiva.</p>
    `,
    summary: "El examen debe ser sistemático para no ignorar malformaciones menores que, agrupadas, forman un síndrome.",
    clinicalCase: {
      patient: "Niño de 4 años traído por retraso en el lenguaje.",
      findings: "Al examen facial observas: fisuras palpebrales cortas, filtrum liso, labio superior muy fino y puente nasal bajo.",
      question: "¿Qué diagnóstico clínico sugieren estos rasgos faciales?",
      resolution: "Sugieren **Trastorno del Espectro Alcohólico Fetal (FASD)**. Esta tríada facial (fisuras cortas, filtrum liso y labio fino) es patognomónica cuando se asocia a retraso del desarrollo."
    },
    quiz: [
      {
        id: 1,
        question: "¿Qué caracteriza al hipertelorismo?",
        options: ["Ojos juntos", "Ojos separados", "Orejas bajas", "Mandíbula grande"],
        correctAnswer: 1,
        explanation: "Es el aumento de la distancia interpupilar."
      }
    ]
  },
  {
    id: 4,
    title: "Diagnóstico Diferencial y Síndromes",
    subtitle: "Categorización Genética y Clínica",
    colorClass: "bg-purple-600",
    textColor: "text-purple-600",
    content: `
      <p class="mb-4">Organizar el diferencial por categorías (Aneuploidías, Microdeleciones, Monogénicas) optimiza la solicitud de pruebas.</p>
    `,
    summary: "Cada síndrome tiene una 'gestalt' o impresión general que el clínico debe aprender a reconocer.",
    clinicalCase: {
      patient: "Recién nacido con hipotonía marcada, llanto débil y rasgos dismórficos.",
      findings: "Fisuras palpebrales inclinadas hacia arriba, epicanto, orejas pequeñas y un solo pliegue transverso en ambas palmas.",
      question: "¿Cuál es el diagnóstico de sospecha más probable?",
      resolution: "Sospecha de **Trisomía 21 (Síndrome de Down)**. La combinación de hipotonía neonatal con estos rasgos faciales y manuales es altamente sugestiva."
    },
    quiz: [
      {
        id: 1,
        question: "¿Qué trisomía se asocia a dedos cabalgados y pies en mecedora?",
        options: ["T21", "T18", "T13", "Monosomía X"],
        correctAnswer: 1,
        explanation: "El Síndrome de Edwards (T18) presenta típicamente estos hallazgos."
      }
    ]
  },
  {
    id: 5,
    title: "Investigaciones y Manejo",
    subtitle: "Pruebas Genéticas de Nueva Generación",
    colorClass: "bg-rose-600",
    textColor: "text-rose-600",
    content: `
      <p class="mb-4">El microarray cromosómico (CMA) ha reemplazado al cariotipo como prueba de primera línea en dismorfología sin causa obvia.</p>
    `,
    summary: "El diagnóstico genético permite dar un asesoramiento reproductivo preciso a la familia.",
    clinicalCase: {
      patient: "Niña de 2 años con rasgos faciales inusuales (cara de 'duendecillo'), personalidad extremadamente sociable y soplo cardiaco.",
      findings: "El ecocardiograma reporta estenosis aórtica supravalvular.",
      question: "¿Qué prueba genética solicitaría para confirmar la sospecha clínica?",
      resolution: "Se debe solicitar un **Microarray (CMA)** o **FISH para 7q11.23** buscando la microdeleción causante del **Síndrome de Williams**."
    },
    quiz: [
      {
        id: 1,
        question: "¿Cuál es la prueba de primera línea para rasgos dismórficos inexplicados?",
        options: ["Cariotipo", "Microarray (CMA)", "Radiografía", "NIPS"],
        correctAnswer: 1,
        explanation: "El CMA detecta variantes del número de copias que el cariotipo no alcanza a ver."
      }
    ]
  }
];
