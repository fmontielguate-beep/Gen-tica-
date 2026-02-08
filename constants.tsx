
import { Module } from './types';

export const MODULES: Module[] = [
  {
    id: 1,
    title: "Fundamentos de la Dismorfología",
    subtitle: "Definiciones y Procesos de Morfogénesis",
    colorClass: "bg-blue-600",
    textColor: "text-blue-600",
    content: `
      <p class="mb-4">La <strong>dismorfología</strong> es la disciplina médica que estudia las causas, el pronóstico, el tratamiento y la prevención de las anomalías congénitas. En términos más sencillos, es el estudio de las diferencias o alteraciones en la morfología humana típica. Como pediatras a nivel de maestría, es imperativo distinguir entre las anomalías congénitas amplias y los rasgos dismórficos específicos.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Anomalías Congénitas vs. Rasgos Dismórficos</h3>
      <p class="mb-4">Las anomalías congénitas son defectos estructurales o funcionales presentes al nacer, que pueden ser internos (como una comunicación interventricular) o externos (como la polidactilia). Por otro lado, los rasgos dismórficos son características físicas que caen fuera del rango de la variación humana típica, a menudo involucrando la cara, las extremidades o las proporciones corporales.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Tipos de Morfogénesis Anómala</h3>
      <p class="mb-4">Para entender el origen de estas alteraciones, debemos clasificar los procesos fisiopatológicos involucrados:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Secuencia de Malformación:</strong> Un defecto localizado primario en la formación del tejido que desencadena una cadena de defectos secundarios (ej. Secuencia de Pierre Robin).</li>
        <li><strong>Secuencia de Deformación:</strong> Resultado de fuerzas mecánicas extrínsecas que actúan sobre un feto en desarrollo normal (ej. Pie equinovaro debido a oligohidramnios o constricción uterina).</li>
        <li><strong>Secuencia de Disrupción:</strong> Ocurre cuando un feto expuesto a un evento destructivo (vascular, infeccioso o mecánico) sufre la alteración de una estructura ya formada (ej. Síndrome de bridas amnióticas o infección por rubeola).</li>
        <li><strong>Displasia:</strong> Falta de organización celular intrínseca en los tejidos (ej. Síndrome de Marfan o displasias esqueléticas).</li>
        <li><strong>Síndrome de Malformación:</strong> Múltiples defectos estructurales en uno o más tejidos causados por un único agente iniciador, ya sea un teratógeno ambiental o una anomalía genética (ej. Trisomía 21).</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Malformaciones Mayores y Menores</h3>
      <p class="mb-4">Las malformaciones <strong>menores</strong> (como una cresta palmar única o orejas de implantación baja) no suelen tener consecuencias médicas graves por sí mismas, pero son pistas cruciales. Las malformaciones <strong>mayores</strong> son aquellas que comprometen la vida, requieren intervenciones quirúrgicas significativas o alteran la función (ej. Defectos cardíacos congénitos).</p>
    `,
    summary: "La dismorfología clasifica los defectos según su origen (malformación, deformación, disrupción, displasia o síndrome) y su impacto clínico (mayor o menor). Entender estos conceptos es la base para el diagnóstico sindrómico.",
    quiz: [
      {
        id: 1,
        question: "¿Cuál es la definición correcta de 'Secuencia de Deformación'?",
        options: [
          "Defecto intrínseco en la organización de las células en los tejidos.",
          "Fuerzas mecánicas extrínsecas que alteran una estructura previamente normal.",
          "Evento destructivo vascular que interrumpe el desarrollo.",
          "Múltiples defectos causados por un único agente etiológico."
        ],
        correctAnswer: 1,
        explanation: "La deformación se produce por factores externos, como la falta de espacio intrauterino, sobre un feto morfológicamente sano."
      },
      {
        id: 2,
        question: "Un defecto en un solo órgano que desencadena una cascada de problemas secundarios se denomina:",
        options: ["Síndrome", "Displasia", "Secuencia de Malformación", "Disrupción"],
        correctAnswer: 2,
        explanation: "Una secuencia de malformación (como Pierre Robin) inicia con un defecto primario localizado que causa otros defectos en cadena."
      },
      {
        id: 3,
        question: "El Síndrome de Marfan es un ejemplo clásico de:",
        options: ["Displasia", "Deformación", "Disrupción", "Aneuploidía"],
        correctAnswer: 0,
        explanation: "El Síndrome de Marfan implica un defecto en la organización del tejido conectivo, lo cual es la definición de displasia."
      },
      {
        id: 4,
        question: "¿Qué caracteriza a una malformación 'menor'?",
        options: [
          "Requiere cirugía urgente.",
          "Es puramente estética y no tiene relevancia diagnóstica.",
          "No requiere intervención médica mayor pero sirve como pista sindrómica.",
          "Siempre es interna."
        ],
        correctAnswer: 2,
        explanation: "Las malformaciones menores son rasgos fuera de lo común que no comprometen la función pero sugieren un síndrome subyacente."
      },
      {
        id: 5,
        question: "Según la OMS, las anomalías congénitas son:",
        options: [
          "Raras y sin impacto en la mortalidad.",
          "Una causa significativa de morbi-mortalidad infantil mundial.",
          "Exclusivamente de origen genético.",
          "Detectables solo mediante pruebas de ADN."
        ],
        correctAnswer: 1,
        explanation: "Las anomalías congénitas representan un desafío global de salud pública debido a su alta carga en la mortalidad infantil."
      }
    ]
  },
  {
    id: 2,
    title: "La Historia Clínica en Dismorfología",
    subtitle: "Anamnesis Detallada y Árbol Genealógico",
    colorClass: "bg-emerald-600",
    textColor: "text-emerald-600",
    content: `
      <p class="mb-4">Una historia clínica exhaustiva es el 70% del diagnóstico en dismorfología. Para el pediatra especialista, esto va más allá de los antecedentes convencionales, requiriendo un enfoque en la vida intrauterina y la herencia.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Historia Prenatal</h3>
      <p class="mb-4">Es crítico indagar sobre la exposición a <strong>teratógenos</strong>: diabetes materna mal controlada, consumo de alcohol (Sindrome Alcohólico Fetal), fármacos y drogas, infecciones (complejo TORCH) o signos de disrupción vascular como sangrados vaginales. También se debe preguntar por:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Resultados de ecografías prenatales.</li>
        <li>Cribados genéticos (NIPS o pruebas de primer trimestre).</li>
        <li>Movimientos fetales: La disminución puede indicar problemas neurológicos subyacentes.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Historia Neonatal</h3>
      <p class="mb-4">Deben documentarse los parámetros de crecimiento al nacer: peso, talla y perímetro cefálico. La necesidad de reanimación, el ingreso en UCIN, el soporte ventilatorio (CPAP, intubación), la presencia de ictericia persistente o hipoglucemia son datos vitales que orientan hacia síndromes específicos.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Historia Familiar y Pedigrí</h3>
      <p class="mb-4">Se debe construir un árbol genealógico que abarque al menos <strong>3 generaciones</strong>. Las preguntas deben incluir:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Origen étnico (ciertos trastornos son más frecuentes en grupos específicos).</li>
        <li>Consanguinidad entre los padres.</li>
        <li>Antecedentes de abortos recurrentes, muertes neonatales o mortinatos.</li>
        <li>Familiares con discapacidad intelectual, autismo o anomalías congénitas.</li>
      </ul>
    `,
    summary: "La anamnesis dismorfológica debe cubrir desde la exposición prenatal a teratógenos hasta un árbol genealógico de tres generaciones para identificar patrones de herencia y riesgos genéticos.",
    quiz: [
      {
        id: 1,
        question: "¿Cuántas generaciones debe abarcar idealmente un pedigrí en dismorfología?",
        options: ["Una", "Dos", "Tres", "Cinco"],
        correctAnswer: 2,
        explanation: "Un árbol genealógico de tres generaciones permite observar patrones de herencia recesiva, dominante o ligada al X con mayor claridad."
      },
      {
        id: 2,
        question: "¿Qué puede sugerir una disminución significativa de los movimientos fetales?",
        options: [
          "Exceso de nutrición materna.",
          "Feto con gran desarrollo muscular.",
          "Posible problema neurológico o neuromuscular subyacente.",
          "Posición podálica únicamente."
        ],
        correctAnswer: 2,
        explanation: "La hipocinesia fetal suele correlacionarse con trastornos del sistema nervioso central o enfermedades neuromusculares."
      },
      {
        id: 3,
        question: "Son ejemplos de teratógenos ambientales comunes:",
        options: [
          "Diabetes materna y alcohol.",
          "Solo fármacos recetados.",
          "Caminar y ejercicio ligero.",
          "Suplementos de ácido fólico."
        ],
        correctAnswer: 0,
        explanation: "Tanto la hiperglucemia materna como el etanol son teratógenos potentes que causan patrones malformativos específicos."
      },
      {
        id: 4,
        question: "¿Por qué es importante preguntar sobre abortos recurrentes en la familia?",
        options: [
          "Para juzgar la fertilidad.",
          "Pueden indicar la presencia de translocaciones cromosómicas equilibradas en los padres.",
          "No tiene relevancia en pediatría.",
          "Para descartar infecciones urinarias."
        ],
        correctAnswer: 1,
        explanation: "Los abortos a repetición sugieren desequilibrios cromosómicos que podrían manifestarse como síndromes en descendientes vivos."
      },
      {
        id: 5,
        question: "¿Qué parámetro neonatal es crucial para descartar microcefalia sindrómica?",
        options: ["Peso", "Talla", "Perímetro Cefálico", "Apgar"],
        correctAnswer: 2,
        explanation: "El perímetro cefálico refleja el crecimiento cerebral y su medición precisa es esencial en la evaluación dismorfológica."
      }
    ]
  },
  {
    id: 3,
    title: "Examen Físico Sistemático",
    subtitle: "De la Cabeza a los Pies: Identificando Patrones",
    colorClass: "bg-indigo-600",
    textColor: "text-indigo-600",
    content: `
      <p class="mb-4">El examen físico en dismorfología debe ser sistemático y minucioso, siguiendo un orden que evite omitir rasgos sutiles pero diagnósticos.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Parámetros de Crecimiento y Cráneo</h3>
      <p class="mb-4">Inicie con medidas precisas de talla, peso y perímetro cefálico. Evalúe la forma del cráneo (ej. braquicefalia, dolicocefalia) y el tamaño/tensión de las fontanelas (fontanelas grandes pueden verse en el hipotiroidismo o displasias esqueléticas).</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Evaluación Facial Detallada</h3>
      <p class="mb-4">La cara es el área con mayor densidad de rasgos informativos:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Ojos:</strong> Distancia interpupilar (hipertelorismo vs hipotelorismo), inclinación de las fisuras palpebrales (hacia arriba en T21, hacia abajo en Síndrome de Noonan), presencia de epicanto o patrones en el iris (patrón estrellado en Williams).</li>
        <li><strong>Orejas:</strong> Implantación (baja si están bajo la línea de los ojos), rotación y morfología del pabellón.</li>
        <li><strong>Nariz:</strong> Puente nasal (deprimido o prominente), punta nasal (bulbosa, bífida).</li>
        <li><strong>Boca y Mentón:</strong> Filtrum (largo, corto, liso), forma de los labios (finos, gruesos), paladar (ojival, hendido) y posición de la mandíbula (micrognatia).</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Extremidades, Tronco y Piel</h3>
      <p class="mb-4">Revise manos y pies buscando polidactilia, sindactilia, pliegues palmares inusuales (cresta única) o anomalías en las uñas. En el tronco, observe la distancia entre pezones (hipertelorismo mamario) y la alineación de la columna. Finalmente, examine la piel en busca de manchas café con leche, hemangiomas o pigmentaciones inusuales.</p>
    `,
    summary: "Un examen físico dismorfológico exitoso requiere observar minuciosamente cada característica facial, la forma del cráneo, las extremidades y los anexos, comparándolos siempre con los rangos normales para la edad y etnia.",
    quiz: [
      {
        id: 1,
        question: "¿Qué es el 'Hipertelorismo'?",
        options: [
          "Ojos muy juntos.",
          "Ojos muy separados.",
          "Orejas de implantación baja.",
          "Mandíbula pequeña."
        ],
        correctAnswer: 1,
        explanation: "El hipertelorismo se refiere a un aumento en la distancia entre los ojos (específicamente la distancia interpupilar)."
      },
      {
        id: 2,
        question: "Las fisuras palpebrales con inclinación hacia arriba son características de:",
        options: ["Síndrome de Down", "Síndrome de Treacher Collins", "Síndrome de Noonan", "Feto sano siempre"],
        correctAnswer: 0,
        explanation: "La inclinación hacia arriba de las fisuras palpebrales es uno de los rasgos clásicos de la Trisomía 21."
      },
      {
        id: 3,
        question: "Un filtrum liso y labio superior fino sugieren frecuentemente:",
        options: ["Síndrome de Williams", "Síndrome Alcohólico Fetal", "Trisomía 13", "Normalidad étnica"],
        correctAnswer: 1,
        explanation: "Estos son rasgos diagnósticos clave causados por la exposición prenatal al alcohol."
      },
      {
        id: 4,
        question: "¿Dónde se busca una 'Cresta Palmar Única'?",
        options: ["En la planta del pie.", "En la palma de la mano.", "En el iris.", "En la nuca."],
        correctAnswer: 1,
        explanation: "El pliegue transverso único o cresta palmar única es un rasgo menor común en varios síndromes genéticos."
      },
      {
        id: 5,
        question: "Un patrón de iris 'estrellado' o de encaje es típico de:",
        options: ["Síndrome de Down", "Síndrome de Williams", "Síndrome de DiGeorge", "Diabetes Materna"],
        correctAnswer: 1,
        explanation: "El patrón estrellado o 'stellate' del iris es una característica sutil pero muy orientativa del Síndrome de Williams."
      }
    ]
  },
  {
    id: 4,
    title: "Diagnóstico Diferencial y Síndromes Comunes",
    subtitle: "Categorización Genética y Clínica",
    colorClass: "bg-purple-600",
    textColor: "text-purple-600",
    content: `
      <p class="mb-4">Organizar el diagnóstico diferencial por categorías genéticas facilita el abordaje diagnóstico y la selección de pruebas de laboratorio.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">1. Aneuploidías Cromosómicas</h3>
      <p class="mb-4">Son las más frecuentes y conocidas:</p>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Trisomía 21 (Down):</strong> Hipotonía, fisuras palpebrales hacia arriba, pliegue palmar único, defectos del canal AV.</li>
        <li><strong>Trisomía 18 (Edwards):</strong> Retraso de crecimiento grave, puños cerrados con dedos cabalgados, pies en 'mecedora'.</li>
        <li><strong>Trisomía 13 (Patau):</strong> Defectos de línea media (holoprosencefalia), labio leporino, polidactilia.</li>
        <li><strong>Monosomía X (Turner):</strong> Cuello alado, linfedema neonatal, talla baja.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">2. Síndromes de Microdeleción y Microduplicación</h3>
      <p class="mb-4">Requieren técnicas más avanzadas que el cariotipo convencional:</p>
      <ul class="list-disc pl-6 mb-4">
        <li><strong>Deleción 22q11.2 (DiGeorge):</strong> Defectos cardíacos troncoconales, hipocalcemia, anomalías del paladar.</li>
        <li><strong>Deleción 7q11.23 (Williams):</strong> Estenosis aórtica supravalvular, cara de 'duendecillo', personalidad muy social e iris estrellado.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">3. Trastornos Monogénicos y Causas No Genéticas</h3>
      <p class="mb-4">Incluyen síndromes como <strong>Noonan</strong> o <strong>Marfan</strong>. No debemos olvidar las causas ambientales o teratogénicas: Sindrome Alcohólico Fetal, embriopatía por rubeola o citomegalovirus, y los efectos de la diabetes materna descompensada.</p>
    `,
    summary: "El diferencial se divide en anomalías cromosómicas (aneuploidías), microdeleciones, trastornos de un solo gen y causas teratogénicas. Cada uno presenta un patrón fenotípico distintivo que guía la investigación.",
    quiz: [
      {
        id: 1,
        question: "La 'Estenosis Aórtica Supravalvular' es un hallazgo cardíaco altamente sugestivo de:",
        options: ["Síndrome de Down", "Síndrome de Williams", "Síndrome de Patau", "Turner"],
        correctAnswer: 1,
        explanation: "Esta cardiopatía específica es un marcador mayor del Síndrome de Williams por deleción en 7q11.23."
      },
      {
        id: 2,
        question: "¿Cuál de estas trisomías se asocia con dedos cabalgados y pies en mecedora?",
        options: ["Trisomía 21", "Trisomía 18", "Trisomía 13", "Síndrome de Noonan"],
        correctAnswer: 1,
        explanation: "El Síndrome de Edwards (T18) suele presentar este fenotipo característico en las extremidades."
      },
      {
        id: 3,
        question: "El Síndrome de DiGeorge (22q11.2) se caracteriza fundamentalmente por:",
        options: [
          "Talla alta y dedos largos.",
          "Defectos cardíacos e hipocalcemia.",
          "Iris estrellado y mucha sociabilidad.",
          "Manchas café con leche."
        ],
        correctAnswer: 1,
        explanation: "La tríada clásica incluye defectos cardíacos, hipoplasia tímica/inmunodeficiencia e hipocalcemia por hipoparatiroidismo."
      },
      {
        id: 4,
        question: "Un paciente con cuello alado y linfedema en manos/pies al nacer debe hacernos sospechar de:",
        options: ["Síndrome de Turner", "Síndrome de Marfan", "Síndrome de Williams", "Trisomía 21"],
        correctAnswer: 0,
        explanation: "El linfedema periférico y el pterygium colli son signos neonatales frecuentes en niñas con Monosomía X."
      },
      {
        id: 5,
        question: "Los defectos de línea media como la holoprosencefalia son típicos de:",
        options: ["Trisomía 21", "Trisomía 13", "Síndrome de Noonan", "Sindrome Alcohólico Fetal"],
        correctAnswer: 1,
        explanation: "La Trisomía 13 (Patau) afecta severamente el desarrollo de las estructuras de la línea media."
      }
    ]
  },
  {
    id: 5,
    title: "Investigaciones y Manejo Clínico",
    subtitle: "Pruebas Genéticas, Imagen y Referencia",
    colorClass: "bg-rose-600",
    textColor: "text-rose-600",
    content: `
      <p class="mb-4">Una vez identificado un patrón dismórfico, el pediatra debe coordinar las investigaciones pertinentes y decidir cuándo referir a genética médica.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Abordaje de Laboratorio</h3>
      <p class="mb-4">Las pruebas genéticas han evolucionado rápidamente:</p>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Detección Rápida de Aneuploidías (RAD):</strong> Útil si se sospecha fuertemente T21, T18 o T13. Resultados rápidos.</li>
        <li><strong>Microarray Cromosómico (CMA):</strong> La prueba de primera línea actual. Detecta deleciones y duplicaciones pequeñas (variantes en el número de copias) que el cariotipo no ve.</li>
        <li><strong>Paneles de Genes:</strong> Útiles si el cuadro clínico apunta a un grupo específico de enfermedades (ej. panel de displasias esqueléticas).</li>
        <li><strong>Secuenciación del Exoma Completo (WES):</strong> Analiza todas las regiones codificantes de proteínas. Reservado para casos complejos o multisistémicos sin diagnóstico tras CMA.</li>
      </ul>

      <h3 class="text-xl font-bold mt-6 mb-3">Estudios Complementarios de Imagen</h3>
      <p class="mb-4">Dependiendo del examen físico, se pueden requerir: RM cerebral, ecocardiograma, ecografía renal o serie ósea. Por ejemplo, ante la sospecha de un error innato del metabolismo, se deben solicitar estudios bioquímicos especializados.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Criterios de Referencia a Genética</h3>
      <p class="mb-4">Se debe referir a un genetista clínico cuando exista:</p>
      <ul class="list-disc pl-6 mb-4">
        <li>Historia familiar de condiciones genéticas conocidas.</li>
        <li>Consanguinidad parental.</li>
        <li>Dos o más pérdidas gestacionales o mortinatos inexplicados.</li>
        <li>Resultados anormales en pruebas genéticas de terceros.</li>
        <li>Presencia de múltiples anomalías congénitas o rasgos dismórficos significativos.</li>
      </ul>
    `,
    summary: "El microarray es hoy la herramienta diagnóstica inicial preferida. El manejo debe ser multidisciplinario, involucrando subespecialistas y al genetista para el asesoramiento familiar y pronóstico.",
    quiz: [
      {
        id: 1,
        question: "¿Cuál es actualmente la prueba de primera línea para investigar rasgos dismórficos inexplicados?",
        options: ["Cariotipo convencional", "Microarray Cromosómico (CMA)", "Radiografía de tórax", "NIPS"],
        correctAnswer: 1,
        explanation: "El CMA ofrece una resolución mucho mayor que el cariotipo para detectar desequilibrios genómicos pequeños."
      },
      {
        id: 2,
        question: "Si se sospecha una Trisomía 21 clásica, la prueba más directa y rápida es:",
        options: ["RAD o Cariotipo", "Exoma completo", "RM cerebral", "Ecografía renal"],
        correctAnswer: 0,
        explanation: "La detección rápida de aneuploidías permite confirmar trisomías comunes en pocos días."
      },
      {
        id: 3,
        question: "La secuenciación del Exoma Completo (WES) analiza:",
        options: [
          "Solo los cromosomas sexuales.",
          "Todas las regiones codificantes de proteínas del genoma.",
          "Únicamente el ADN mitocondrial.",
          "Las proteínas de la sangre directamente."
        ],
        correctAnswer: 1,
        explanation: "El exoma representa aproximadamente el 1-2% del genoma pero contiene el 85% de las mutaciones causantes de enfermedades."
      },
      {
        id: 4,
        question: "¿Cuál de estos es un criterio de referencia 'obligatoria' a genética?",
        options: [
          "Un resfriado común recurrente.",
          "Padres consanguíneos con un hijo con anomalías.",
          "Talla en el percentil 50.",
          "Apgar de 9 al nacer."
        ],
        correctAnswer: 1,
        explanation: "La consanguinidad aumenta el riesgo de enfermedades recesivas, requiriendo asesoramiento experto."
      },
      {
        id: 5,
        question: "Ante la sospecha de una displasia esquelética, la investigación de imagen de elección es:",
        options: ["Ecografía abdominal", "Serie ósea completa (Skeletal survey)", "RM de columna únicamente", "TAC de cráneo"],
        correctAnswer: 1,
        explanation: "La serie ósea permite evaluar las proporciones y características de todos los huesos largos y el esqueleto axial."
      }
    ]
  }
];
