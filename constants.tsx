
import { Module } from './types';

export const MODULES: Module[] = [
  {
    id: 1,
    title: "Fundamentos y Mecanismos de Morfogénesis",
    subtitle: "Definiciones y Clasificación de Defectos",
    colorClass: "bg-blue-800",
    textColor: "text-blue-800",
    content: `
      <div class="space-y-4">
        <p>Según el enfoque de Armour & MacPherson, la <strong>dismorfología</strong> estudia las alteraciones de la morfología típica. Es crucial distinguir entre anomalías congénitas (defectos estructurales o funcionales presentes al nacer) y rasgos dismórficos (rasgos fuera del rango de variación humana típica).</p>
        
        <h4 class="font-bold text-blue-900">Mecanismos de Morfogénesis Anómala:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Secuencia de Malformación:</strong> Un defecto único y localizado que inicia una cadena de defectos secundarios (ej. Secuencia de Pierre Robin).</li>
          <li><strong>Secuencia de Deformación:</strong> Alteración por fuerzas mecánicas intrauterinas extrínsecas (ej. Pie equinovaro por restricción uterina).</li>
          <li><strong>Secuencia de Disrupción:</strong> Alteración vascular, infecciosa o mecánica de un tejido originalmente normal (ej. Infección por Rubéola).</li>
          <li><strong>Displasia:</strong> Falta de organización de células en tejidos (ej. Síndrome de Marfan).</li>
          <li><strong>Síndrome de Malformación:</strong> Múltiples defectos en uno o más tejidos causados por una etiología común (ej. Trisomía 21).</li>
        </ul>
        <p>Los defectos se categorizan además en <strong>Mayores</strong> (consecuencia médica o quirúrgica significativa) y <strong>Menores</strong> (sin consecuencia médica o cosmética seria, como un pliegue palmar único).</p>
      </div>
    `,
    summary: "Identificar si un defecto es una malformación aislada o parte de un síndrome es el primer paso crítico en el abordaje dismorfológico.",
    clinicalCase: {
      patient: "Lactante con micrognacia severa, glosoptosis y fisura palatina en forma de U.",
      findings: "La micrognacia impidió el descenso de la lengua, bloqueando mecánicamente el cierre del paladar.",
      question: "¿Cómo se clasifica fisiopatológicamente este conjunto de hallazgos según el texto?",
      resolution: "Se clasifica como una <strong>Secuencia de Malformación</strong> (específicamente la Secuencia de Pierre Robin), donde un defecto inicial desencadena una cadena de anomalías subsiguientes."
    },
    quiz: [
      {
        id: 1,
        question: "Según el texto, ¿qué distingue a una 'Deformación' de una 'Malformación'?",
        options: ["La deformación es un defecto intrínseco.", "La deformación es causada por fuerzas mecánicas extrínsecas.", "La malformación es siempre cosmética.", "La deformación ocurre solo en el tercer trimestre."],
        correctAnswer: 1,
        explanation: "El texto define la deformación como el resultado de una fuerza mecánica intrauterina extrínseca sobre una estructura normal."
      },
      {
        id: 2,
        question: "Un pliegue palmar único en un paciente con Trisomía 21 se clasifica como:",
        options: ["Malformación Mayor", "Anomalía Funcional", "Malformación Menor", "Disrupción"],
        correctAnswer: 2,
        explanation: "El texto utiliza el pliegue palmar único como ejemplo de malformación menor, sin consecuencias médicas o quirúrgicas por sí misma."
      },
      {
        id: 3,
        question: "¿Qué ejemplo de Displasia menciona específicamente el documento?",
        options: ["Síndrome de Down", "Síndrome de Marfan", "Secuencia de Pierre Robin", "Pie equinovaro"],
        correctAnswer: 1,
        explanation: "El documento cita explícitamente al Síndrome de Marfan como ejemplo de Displasia (falta de organización celular en tejidos)."
      },
      {
        id: 4,
        question: "La 'Dismorfología' se define fundamentalmente como:",
        options: ["El estudio de las enfermedades raras.", "El estudio de las diferencias o alteraciones de la morfología típica.", "La cirugía de malformaciones externas.", "El estudio exclusivo de rasgos faciales."],
        correctAnswer: 1,
        explanation: "Definición literal del texto: estudio de las causas, pronóstico, tratamiento y prevención de anomalías congénitas o alteraciones de la morfología típica."
      },
      {
        id: 5,
        question: "¿Cuál es el porcentaje de mortalidad en el primer año de vida para lactantes con anomalías congénitas en Canadá, según los datos citados?",
        options: ["1%", "5%", "10%", "15%"],
        correctAnswer: 1,
        explanation: "El texto menciona que aproximadamente el 5% de los lactantes con una anomalía congénita mueren en su primer año."
      }
    ]
  },
  {
    id: 2,
    title: "Anamnesis Sistemática y Pedigrí",
    subtitle: "Factores Prenatales y Antecedentes Familiares",
    colorClass: "bg-emerald-800",
    textColor: "text-emerald-800",
    content: `
      <div class="space-y-4">
        <p>La historia clínica debe ser exhaustiva. El texto subraya la importancia de investigar:</p>
        <h4 class="font-bold text-emerald-900">1. Historia del Embarazo:</h4>
        <ul class="list-disc pl-6 space-y-1">
          <li>Exposición a teratógenos: Diabetes materna, alcohol, drogas, infecciones (fiebre, rash).</li>
          <li>Signos de disrupción vascular (sangrados).</li>
          <li>Resultados de cribado prenatal (NIPS, primer trimestre) y ecografías.</li>
          <li><strong>Movimientos fetales:</strong> Clave para identificar problemas neurológicos subyacentes.</li>
        </ul>
        <h4 class="font-bold text-emerald-900">2. Historia Neonatal:</h4>
        <p>Parámetros de crecimiento (peso, longitud, PC), necesidad de reanimación, ingreso en NICU, hipoglucemia o ictericia.</p>
        <h4 class="font-bold text-emerald-900">3. Historia Familiar y Pedigrí:</h4>
        <p>Debe abarcar <strong>3 generaciones</strong>. Incluir origen étnico, consanguinidad, discapacidades intelectuales, autismo, muertes neonatales o abortos recurrentes.</p>
      </div>
    `,
    summary: "Los movimientos fetales disminuidos pueden ser la primera pista de una patología neurológica o neuromuscular en el feto.",
    clinicalCase: {
      patient: "Roger, lactante de 6 meses. Nacido a término, embarazo sin complicaciones, sin ingreso en NICU.",
      findings: "Padres no consanguíneos, sin antecedentes familiares de cardiopatías o trastornos del desarrollo. Peso y talla en percentil 5.",
      question: "¿Qué aspecto de la historia de Roger es vital para descartar causas ambientales?",
      resolution: "La confirmación de un <strong>embarazo sin complicaciones</strong> y la ausencia de exposición a teratógenos conocidos ayuda a inclinar la sospecha hacia una etiología genética de novo."
    },
    quiz: [
      {
        id: 1,
        question: "¿Por qué es útil preguntar sobre los movimientos fetales en la historia clínica?",
        options: ["Para predecir el temperamento del bebé.", "Para identificar posibles problemas neurológicos subyacentes.", "Para calcular la edad gestacional.", "Para determinar el peso al nacer."],
        correctAnswer: 1,
        explanation: "El texto indica que los movimientos fetales ayudan a identificar la posibilidad de un problema neurológico subyacente."
      },
      {
        id: 2,
        question: "¿Cuántas generaciones debe abarcar un pedigrí completo según el protocolo descrito?",
        options: ["Una", "Dos", "Tres", "Cuatro"],
        correctAnswer: 2,
        explanation: "El texto especifica que se debe crear un pedigrí que abarque 3 generaciones."
      },
      {
        id: 3,
        question: "¿Cuál de los siguientes NO es mencionado como un teratógeno a investigar?",
        options: ["Diabetes materna", "Alcohol", "Drogas", "Ejercicio físico moderado"],
        correctAnswer: 3,
        explanation: "El texto menciona diabetes, alcohol, drogas e infecciones, pero no el ejercicio moderado."
      },
      {
        id: 4,
        question: "En la revisión por sistemas, ¿qué signo podría indicar un problema neurológico o de alimentación?",
        options: ["Hipotonía (floppiness)", "Ictericia neonatal", "Iritis", "Consanguinidad"],
        correctAnswer: 0,
        explanation: "El texto menciona investigar el tono anormal y problemas de alimentación como parte de la revisión detallada."
      },
      {
        id: 5,
        question: "¿Qué parámetros de crecimiento neonatal deben registrarse según el texto?",
        options: ["Solo el peso", "Peso y longitud", "Peso, longitud y perímetro cefálico", "Peso y edad gestacional"],
        correctAnswer: 2,
        explanation: "El documento lista específicamente: peso al nacer, longitud y perímetro cefálico."
      }
    ]
  },
  {
    id: 3,
    title: "El Examen Físico Dismorfológico",
    subtitle: "Enfoque Sistemático y Hallazgos Faciales",
    colorClass: "bg-indigo-800",
    textColor: "text-indigo-800",
    content: `
      <div class="space-y-4">
        <p>El texto recomienda seguir el enfoque del <strong>Oxford Desk Reference for Clinical Genetics</strong>. El examen debe ser exhaustivo y sistemático:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>Parámetros de crecimiento:</strong> Estatura y complexión.</li>
          <li><strong>Cráneo:</strong> Forma y tamaño de fontanelas (grandes, pequeñas o anormales).</li>
          <li><strong>Cara:</strong> Evaluación detallada de orejas, ojos, nariz, filtrum, boca, paladar, úvula y mentón.</li>
          <li><strong>Ojos:</strong> Espaciado (hipertelorismo) e inclinación de fisuras palpebrales (horizontal, hacia arriba o hacia abajo).</li>
          <li><strong>Extremidades:</strong> Hallazgos ungueales, polidactilia o sindactilia, pliegues palmares o plantares inusuales.</li>
          <li><strong>Piel y Otros:</strong> Pigmentación, pezones (espaciado), alineación de espalda y examen genital.</li>
        </ul>
      </div>
    `,
    summary: "La descripción objetiva de los rasgos (ej. 'short nose with bulbous tip') es preferible a términos subjetivos.",
    clinicalCase: {
      patient: "Roger (caso de estudio). Presenta frente ancha y estrechamiento bitemporal.",
      findings: "Plenitud periorbital, patrón de iris estrellado, nariz corta con punta bulbosa, boca ancha con labios carnosos y mejillas llenas.",
      question: "¿Qué técnica de examen se aplicó para detectar el patrón del iris?",
      resolution: "Un examen ocular detallado que buscó rasgos distintivos (el <strong>patrón estrellado o de encaje del iris</strong>), lo cual es una característica clave mencionada para Roger."
    },
    quiz: [
      {
        id: 1,
        question: "¿Qué referencia bibliográfica sugiere el texto para seguir un enfoque sistemático en el examen?",
        options: ["Nelson Textbook of Pediatrics", "Oxford Desk Reference for clinical genetics", "Smith's Recognizable Patterns", "Harrison's Principles"],
        correctAnswer: 1,
        explanation: "El texto cita específicamente el 'Oxford Desk Reference for clinical genetics and genomics'."
      },
      {
        id: 2,
        question: "El término 'hipertelorismo' se refiere a:",
        options: ["Ojos muy juntos", "Aumento del espacio entre los ojos", "Fisuras palpebrales inclinadas", "Fontanela grande"],
        correctAnswer: 1,
        explanation: "El texto define el hipertelorismo como el aumento del espacio entre los ojos."
      },
      {
        id: 3,
        question: "¿Cuál de estos es un hallazgo a notar en manos y pies según el documento?",
        options: ["Solo el tamaño", "Ausencia o exceso de dedos (fingers)", "Color de las palmas", "Longitud del radio"],
        correctAnswer: 1,
        explanation: "El texto indica notar 'unusual nail findings, missing or extra fingers, or unusual palmar or plantar creases'."
      },
      {
        id: 4,
        question: "Además de los rasgos físicos, ¿qué otro aspecto debe comentarse al final del examen?",
        options: ["El costo de la consulta", "Conductas, manierismos y habla del niño", "La vestimenta del niño", "El nombre de los padres"],
        correctAnswer: 1,
        explanation: "El texto dice: 'comment on the child’s behaviours, mannerisms, stereotypies, and speech'."
      },
      {
        id: 5,
        question: "Al describir la cara, ¿qué estructuras deben evaluarse sistemáticamente según el orden del texto?",
        options: ["Solo ojos y boca", "Ojos, nariz y mentón", "Ears, eyes, nose, philtrum, mouth, palate, uvula, and chin", "Solo la forma global"],
        correctAnswer: 2,
        explanation: "El texto lista explícitamente: orejas, ojos, nariz, filtrum, boca, paladar, úvula y mentón."
      }
    ]
  },
  {
    id: 4,
    title: "Diagnóstico Diferencial y Categorías Genéticas",
    subtitle: "Aneuploidías, Microdeleciones y Teratógenos",
    colorClass: "bg-purple-800",
    textColor: "text-purple-800",
    content: `
      <div class="space-y-4">
        <p>El diagnóstico diferencial se organiza en amplias categorías genéticas según el guion:</p>
        <h4 class="font-bold text-purple-900">1. Anomalías Cromosómicas (Aneuploidías):</h4>
        <ul class="list-disc pl-6 space-y-1">
          <li><strong>Trisomía 21 (Down):</strong> Fisuras hacia arriba, hipertelorismo, pliegue palmar único, hipotonía, defectos del canal AV.</li>
          <li><strong>Trisomía 18 (Edwards) y 13 (Patau).</strong></li>
          <li><strong>Monosomía X (Turner).</strong></li>
        </ul>
        <h4 class="font-bold text-purple-900">2. Síndromes de Microdeleción:</h4>
        <ul class="list-disc pl-6 space-y-1">
          <li><strong>22q11.2 (DiGeorge).</strong></li>
          <li><strong>7q11 (Williams).</strong></li>
        </ul>
        <h4 class="font-bold text-purple-900">3. Trastornos de un Solo Gen:</h4>
        <p>Síndromes de Noonan o Marfan.</p>
        <h4 class="font-bold text-purple-900">4. Causas No Genéticas (Teratógenos):</h4>
        <p>FASD (Espectro Alcohólico Fetal), diabetes materna e infecciones (CMV, Toxoplasmosis, Varicela, Rubéola).</p>
      </div>
    `,
    summary: "No todos los cuadros dismórficos son genéticos; las exposiciones ambientales y las infecciones TORCH son diferenciales clave.",
    clinicalCase: {
      patient: "Roger (caso de estudio). Presenta un soplo cardiaco sistólico.",
      findings: "La evaluación cardiológica confirma una <strong>estenosis aórtica supravalvular</strong>.",
      question: "¿Con qué síndrome de microdeleción se asocia clásicamente este hallazgo cardiaco?",
      resolution: "Se asocia con el <strong>Síndrome de Williams</strong> (deleción en 7q11), que es el diagnóstico final de Roger en el texto."
    },
    quiz: [
      {
        id: 1,
        question: "¿Qué hallazgo cardiaco es común en el Síndrome de Down según el texto?",
        options: ["Estenosis aórtica", "Defectos del canal atrioventricular", "Tetralogía de Fallot", "Persistencia del conducto arterioso"],
        correctAnswer: 1,
        explanation: "El documento menciona específicamente: 'heart defects of the atrioventricular canal' para el Síndrome de Down."
      },
      {
        id: 2,
        question: "El Síndrome de DiGeorge también es conocido como:",
        options: ["7q11 deletion", "22q11.2 deletion syndrome", "Trisomía 18", "Síndrome de Noonan"],
        correctAnswer: 1,
        explanation: "El texto identifica a DiGeorge como el síndrome de deleción 22q11.2."
      },
      {
        id: 3,
        question: "¿Cuál de los siguientes es un ejemplo de causa NO genética según el documento?",
        options: ["Síndrome de Marfan", "Síndrome de Noonan", "Fetal alcohol spectrum disorder (FASD)", "Trisomía 13"],
        correctAnswer: 2,
        explanation: "El texto lista el FASD dentro de las condiciones 'non-genetic including some of the teratogenic syndromes'."
      },
      {
        id: 4,
        question: "¿Qué infecciones maternas se mencionan como posibles causas de anomalías?",
        options: ["Solo Rubéola", "CMV, Toxoplasmosis, Varicela y Rubéola", "Gripe común", "Infecciones urinarias"],
        correctAnswer: 1,
        explanation: "El documento lista: 'cytomegalovirus, toxoplasmosis, varicella or chicken pox, and rubella'."
      },
      {
        id: 5,
        question: "El Síndrome de Williams se asocia a una deleción en el cromosoma:",
        options: ["22", "7", "18", "13"],
        correctAnswer: 1,
        explanation: "El texto especifica '7q11 deletion also known as Williams syndrome'."
      }
    ]
  },
  {
    id: 5,
    title: "Investigaciones y Criterios de Referencia",
    subtitle: "RAD, Microarray y Cuándo Referir a Genética",
    colorClass: "bg-rose-800",
    textColor: "text-rose-800",
    content: `
      <div class="space-y-4">
        <p>El pediatra puede iniciar el estudio antes de la interconsulta con genética clínica:</p>
        <h4 class="font-bold text-rose-900">Algoritmo de Pruebas Genéticas:</h4>
        <ul class="list-disc pl-6 space-y-2">
          <li><strong>RAD (Rapid Aneuploidy Detection) o Cariotipo:</strong> Si se sospecha una aneuploidía común (21, 18, 13).</li>
          <li><strong>Microarray Cromosómico (CMA):</strong> Punto de partida para buscar deleciones, duplicaciones o variaciones en el número de copias.</li>
          <li><strong>Secuenciación del Exoma:</strong> Si hay un problema multisistémico complejo.</li>
        </ul>
        <h4 class="font-bold text-rose-900">Investigaciones Adyacentes:</h4>
        <p>Dependen de los hallazgos: MRI cerebral, ecocardiograma, ecografía renal, serie esquelética, cribado auditivo y examen ocular formal.</p>
        <h4 class="font-bold text-rose-900">Criterios de Referencia a Genética:</h4>
        <p>Historia familiar de condiciones genéticas, consanguinidad, 2 o más pérdidas de embarazo, resultados anormales en pruebas de terceros.</p>
      </div>
    `,
    summary: "Un diagnóstico temprano mediante rasgos dismórficos conduce a mejores resultados y una planificación familiar informada.",
    clinicalCase: {
      patient: "Roger (Conclusión). Se sospecha Síndrome de Williams por sus rasgos y estenosis aórtica.",
      findings: "Se solicita un Microarray para confirmar la deleción 7q11.",
      question: "¿Cuál fue el resultado final de la investigación de Roger?",
      resolution: "El <strong>Microarray resultó positivo para la deleción 7q11</strong>, confirmando el Síndrome de Williams. Roger fue referido a cardiología y genética para el manejo a largo plazo."
    },
    quiz: [
      {
        id: 1,
        question: "¿Qué prueba se utiliza como punto de partida para buscar variaciones en el número de copias (CNVs)?",
        options: ["MRI", "Microarray cromosómico", "Ecografía renal", "RAD"],
        correctAnswer: 1,
        explanation: "El texto indica que el microarray busca deleciones, duplicaciones o variantes en el número de copias."
      },
      {
        id: 2,
        question: "¿Cuándo se debe solicitar la secuenciación del exoma según el documento?",
        options: ["En todos los pacientes", "Si solo hay un rasgo menor", "Si hay un problema multisistémico o se necesitan investigaciones más especializadas", "Solo si el cariotipo es normal"],
        correctAnswer: 2,
        explanation: "El texto dice que el genetista puede pedir exoma si hay un 'multisystem issue' o se necesitan pruebas más especializadas."
      },
      {
        id: 3,
        question: "Si se sospecha Trisomía 21, 18 o 13, ¿qué prueba es la adecuada?",
        options: ["Ecografía", "Cariotipo o RAD", "Serie esquelética", "Examen auditivo"],
        correctAnswer: 1,
        explanation: "El texto especifica que para estas trisomías se usa 'karyotyping or RAD'."
      },
      {
        id: 4,
        question: "¿Cuál de estos es un criterio de referencia a genética mencionado?",
        options: ["Tener gripe", "Padres consanguíneos (blood related)", "Primer embarazo normal", "Vivir en Alberta"],
        correctAnswer: 1,
        explanation: "El texto explícitamente menciona referir si los padres son 'blood related'."
      },
      {
        id: 5,
        question: "¿Qué investigación se sugiere ante la sospecha de una displasia esquelética?",
        options: ["Ecocardiograma", "Serie esquelética (skeletal survey)", "MRI cerebral", "Cribado auditivo"],
        correctAnswer: 1,
        explanation: "El documento dice: 'if the child were suspected to have a skeletal dysplasia, a skeletal survey would provide useful information'."
      }
    ]
  }
];
