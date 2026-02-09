
import React, { useState } from 'react';
import { MODULES } from './constants';
import { Module, UserProgress } from './types';

const ProgressBar: React.FC<{ progress: number; color: string }> = ({ progress, color }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
    <div 
      className={`h-2.5 rounded-full transition-all duration-500 ${color}`} 
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

const ClinicalCaseSection: React.FC<{ module: Module }> = ({ module }) => {
  const [showResolution, setShowResolution] = useState(false);
  const { clinicalCase } = module;

  return (
    <div className="my-12 bg-slate-50 rounded-3xl border-2 border-slate-200 overflow-hidden shadow-inner">
      <div className="bg-slate-200 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-microscope text-slate-500"></i>
          <span className="text-xs font-black uppercase tracking-widest text-slate-600">Discusión de Caso Clínico - Maestría</span>
        </div>
        <span className="text-[10px] font-bold text-slate-400">REF: PedsCases-2025-{module.id}</span>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <h4 className="text-sm font-bold text-blue-800 uppercase mb-2">Presentación del Paciente</h4>
          <p className="text-gray-700 italic font-serif text-lg leading-relaxed">{clinicalCase.patient}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-bold text-blue-800 uppercase mb-2">Hallazgos y Claves</h4>
          <p className="text-gray-700 font-medium leading-relaxed">{clinicalCase.findings}</p>
        </div>

        <div className="p-6 bg-blue-800 rounded-2xl text-white mb-6 shadow-lg border-l-8 border-blue-900">
          <div className="flex gap-4 items-start">
            <i className="fa-solid fa-clipboard-question text-3xl opacity-50"></i>
            <div>
              <p className="text-xl font-bold leading-tight">{clinicalCase.question}</p>
            </div>
          </div>
        </div>

        {!showResolution ? (
          <button 
            onClick={() => setShowResolution(true)}
            className="w-full py-4 bg-white border-2 border-blue-800 text-blue-800 font-black rounded-xl hover:bg-blue-50 transition-all uppercase tracking-widest text-sm shadow-md active:scale-[0.98]"
          >
            Ver Análisis del Guion
          </button>
        ) : (
          <div className="p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-xl animate-fade-in">
            <h4 className="text-emerald-800 font-bold mb-3 flex items-center gap-2">
              <i className="fa-solid fa-user-md"></i> Resolución Académica:
            </h4>
            <div className="text-emerald-950 leading-relaxed text-lg" dangerouslySetInnerHTML={{ __html: clinicalCase.resolution.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </div>
        )}
      </div>
    </div>
  );
};

const QuizComponent: React.FC<{ 
  module: Module; 
  onComplete: (score: number) => void;
  onBack: () => void;
}> = ({ module, onComplete, onBack }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const handleNext = () => {
    const isCorrect = selectedOption === module.quiz[currentQuestionIdx].correctAnswer;
    const nextCorrectCount = isCorrect ? correctCount + 1 : correctCount;
    
    if (currentQuestionIdx < module.quiz.length - 1) {
      setCorrectCount(nextCorrectCount);
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      onComplete(nextCorrectCount);
    }
  };

  const question = module.quiz[currentQuestionIdx];

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 max-w-3xl mx-auto border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${module.colorClass} bg-opacity-10 ${module.textColor}`}>
            Evaluación Módulo {module.id}
          </span>
          <p className="text-sm text-gray-400 mt-2 font-bold">Pregunta {currentQuestionIdx + 1} de {module.quiz.length}</p>
        </div>
        <button onClick={onBack} className="text-gray-300 hover:text-gray-500 transition-colors">
          <i className="fa-solid fa-circle-xmark text-2xl"></i>
        </button>
      </div>

      <h3 className="text-2xl font-bold mb-10 text-gray-800 leading-tight">
        {question.question}
      </h3>

      <div className="space-y-4 mb-10">
        {question.options.map((option, index) => {
          let variantClasses = "border-gray-100 hover:border-blue-200 bg-gray-50";
          if (selectedOption === index) variantClasses = "border-blue-500 bg-blue-50 ring-2 ring-blue-100";
          if (showExplanation && index === question.correctAnswer) variantClasses = "border-green-500 bg-green-50 ring-2 ring-green-100";
          if (showExplanation && selectedOption === index && index !== question.correctAnswer) variantClasses = "border-red-500 bg-red-50";

          return (
            <button
              key={index}
              disabled={showExplanation}
              onClick={() => setSelectedOption(index)}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 ${variantClasses}`}
            >
              <span className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-black ${selectedOption === index ? 'bg-blue-600 text-white shadow-lg' : 'bg-white text-gray-400 border border-gray-100'}`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-gray-700 font-bold text-lg">{option}</span>
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="mb-10 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 animate-fade-in">
          <p className="text-blue-900 leading-relaxed italic"><span className="font-black uppercase text-xs mr-2">Evidencia PedCases:</span> {question.explanation}</p>
        </div>
      )}

      <div className="flex justify-end">
        {!showExplanation ? (
          <button 
            disabled={selectedOption === null} 
            onClick={() => setShowExplanation(true)} 
            className={`px-12 py-4 rounded-2xl font-black text-white transition-all shadow-xl ${selectedOption === null ? 'bg-gray-200 cursor-not-allowed text-gray-400 shadow-none' : `${module.colorClass} hover:scale-105 active:scale-95`}`}
          >
            CONFIRMAR
          </button>
        ) : (
          <button 
            onClick={handleNext} 
            className={`px-12 py-4 rounded-2xl font-black text-white transition-all shadow-xl ${module.colorClass} hover:scale-105 active:scale-95`}
          >
            {currentQuestionIdx === module.quiz.length - 1 ? 'FINALIZAR TEST' : 'SIGUIENTE'}
          </button>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>({ 
    currentModuleId: 1, 
    completedModules: [], 
    quizScores: {} 
  });
  const [view, setView] = useState<'intro' | 'module' | 'quiz' | 'finish'>('intro');

  const currentModule = MODULES.find(m => m.id === progress.currentModuleId) || MODULES[0];

  const goToModule = (id: number) => {
    setProgress(prev => ({ ...prev, currentModuleId: id }));
    setView('module');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuizComplete = (score: number) => {
    setProgress(prev => {
      const newCompleted = Array.from(new Set([...prev.completedModules, prev.currentModuleId]));
      const newScores = { ...prev.quizScores, [prev.currentModuleId]: score };
      return { ...prev, completedModules: newCompleted, quizScores: newScores };
    });
    
    if (progress.currentModuleId < MODULES.length) {
      setProgress(prev => ({ ...prev, currentModuleId: prev.currentModuleId + 1 }));
      setView('module');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('finish');
    }
  };

  if (view === 'intro') {
    return (
      <div className="min-h-screen py-16 px-6 bg-gradient-to-br from-slate-50 to-indigo-50 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 text-center border border-white mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-700 via-indigo-700 to-rose-700"></div>
            <div className="mb-8 inline-block p-5 bg-indigo-800 rounded-3xl text-white shadow-2xl"><i className="fa-solid fa-stethoscope text-5xl"></i></div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">Abordaje Sistemático de Rasgos Dismórficos</h1>
            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium">Curso interactivo basado en el currículo de <strong>Armour & MacPherson (PedCases)</strong> para Maestría en Pediatría.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
              <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100">
                <i className="fa-solid fa-book-medical text-blue-700 text-2xl mb-3"></i>
                <p className="font-black text-slate-800 uppercase text-xs tracking-widest mb-1">Módulos</p>
                <p className="text-slate-600 text-sm font-bold">5 Unidades Teóricas</p>
              </div>
              <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100">
                <i className="fa-solid fa-file-medical text-emerald-700 text-2xl mb-3"></i>
                <p className="font-black text-slate-800 uppercase text-xs tracking-widest mb-1">Caso Integrador</p>
                <p className="text-slate-600 text-sm font-bold">Seguimiento de "Roger"</p>
              </div>
              <div className="p-6 bg-indigo-50 rounded-3xl border border-indigo-100">
                <i className="fa-solid fa-clipboard-check text-indigo-700 text-2xl mb-3"></i>
                <p className="font-black text-slate-800 uppercase text-xs tracking-widest mb-1">Certificación</p>
                <p className="text-slate-600 text-sm font-bold">25 Preguntas de Examen</p>
              </div>
            </div>

            <button onClick={() => setView('module')} className="group px-12 py-5 bg-indigo-900 text-white font-black rounded-2xl text-xl shadow-2xl hover:bg-black transition-all hover:scale-105 active:scale-95">COMENZAR APRENDIZAJE <i className="fa-solid fa-chevron-right ml-4"></i></button>
            <p className="mt-8 text-xs text-slate-400 font-bold uppercase tracking-widest italic">Desarrollado según guion original · Nov 11, 2025</p>
          </div>

          <h2 className="text-2xl font-black text-slate-800 mb-8 px-4 flex items-center gap-3"><i className="fa-solid fa-list-ul text-indigo-700"></i> Programa de Estudios PedsCases</h2>

          <div className="space-y-6 mb-16">
            {MODULES.map((m) => {
              const isCompleted = progress.completedModules.includes(m.id);
              return (
                <div 
                  key={m.id} 
                  onClick={() => goToModule(m.id)} 
                  className={`group bg-white rounded-3xl p-6 shadow-lg border-2 border-transparent cursor-pointer transition-all hover:border-indigo-500 hover:shadow-2xl flex items-center gap-8 ${isCompleted ? 'bg-emerald-50/50 border-emerald-100' : ''}`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-2xl font-black ${isCompleted ? 'bg-emerald-600 text-white' : `${m.colorClass} text-white shadow-xl`}`}>
                    {isCompleted ? <i className="fa-solid fa-check"></i> : m.id}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-700 transition-colors leading-tight">{m.title}</h3>
                    <p className="text-slate-500 font-bold text-sm mt-1">{m.subtitle}</p>
                  </div>
                  <i className="fa-solid fa-circle-play text-slate-200 group-hover:text-indigo-500 text-3xl transition-colors"></i>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (view === 'quiz') {
    return (
      <div className={`min-h-screen p-6 md:p-12 ${currentModule.colorClass} bg-opacity-5 flex items-center justify-center`}>
        <div className="w-full max-w-4xl">
          <QuizComponent module={currentModule} onComplete={handleQuizComplete} onBack={() => setView('module')} />
        </div>
      </div>
    );
  }

  if (view === 'finish') {
    const totalCorrect = (Object.values(progress.quizScores) as number[]).reduce((a, b) => a + b, 0);
    const totalQuestions = MODULES.length * 5;
    const percentage = (totalCorrect / totalQuestions) * 100;

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-3xl bg-white rounded-[3rem] shadow-2xl p-16 border border-white">
          <i className="fa-solid fa-certificate text-8xl text-indigo-700 mb-8"></i>
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Competencia Dismorfológica Alcanzada</h1>
          <p className="text-xl text-slate-500 mb-12 font-medium">Has completado el abordaje sistemático siguiendo el framework de PedCases.</p>
          
          <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100 mb-12">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Puntaje Final</div>
            <div className="text-6xl font-black text-slate-900 mb-2">{totalCorrect} / {totalQuestions}</div>
            <div className="text-lg font-bold text-indigo-700">{percentage}% Efectividad</div>
          </div>

          <button onClick={() => setView('intro')} className="w-full py-6 bg-indigo-900 text-white font-black rounded-3xl shadow-2xl hover:bg-black transition-all text-xl uppercase tracking-widest">Reiniciar Programa</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-32">
      <header className={`${currentModule.colorClass} text-white pt-20 pb-24 px-8 shadow-2xl relative overflow-hidden`}>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="bg-white/20 px-4 py-1.5 rounded-full text-xs font-black tracking-widest backdrop-blur-md border border-white/30 uppercase">Unidad {currentModule.id}</span>
            <button onClick={() => setView('intro')} className="text-white/80 hover:text-white transition-colors text-xs font-black tracking-widest flex items-center gap-2 uppercase"><i className="fa-solid fa-arrow-left"></i> Volver</button>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-4">{currentModule.title}</h1>
          <p className="text-xl font-bold opacity-90">{currentModule.subtitle}</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-8 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-20 border border-slate-100">
          
          <div className="prose prose-xl prose-slate max-w-none mb-20 text-slate-700 leading-relaxed">
             <div dangerouslySetInnerHTML={{ __html: currentModule.content }} />
          </div>
          
          <ClinicalCaseSection module={currentModule} />

          <div className={`p-10 rounded-[2.5rem] ${currentModule.colorClass} bg-opacity-5 border-2 border-dashed ${currentModule.colorClass.replace('bg-', 'border-')} border-opacity-30 mb-20`}>
            <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-3"><i className="fa-solid fa-bookmark text-indigo-700"></i> Resumen del Experto</h2>
            <p className="text-slate-600 text-xl font-medium italic">"{currentModule.summary}"</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 border-t border-slate-100 pt-16">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-black text-slate-900 mb-2">Evaluación Clínica</h3>
              <p className="text-slate-500 font-bold">5 preguntas basadas en el guion de PedCases.</p>
            </div>
            <button onClick={() => setView('quiz')} className={`px-16 py-6 ${currentModule.colorClass} text-white font-black rounded-3xl shadow-2xl hover:scale-105 transition-all text-xl uppercase tracking-widest`}>TEST DEL MÓDULO <i className="fa-solid fa-check-double ml-3"></i></button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
