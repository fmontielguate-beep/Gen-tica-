
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
          <i className="fa-solid fa-folder-open text-slate-500"></i>
          <span className="text-xs font-black uppercase tracking-widest text-slate-600">Expediente Clínico Académico</span>
        </div>
        <span className="text-[10px] font-bold text-slate-400">ID: CASE-00{module.id}</span>
      </div>
      
      <div className="p-8">
        <div className="mb-6">
          <h4 className="text-sm font-bold text-blue-600 uppercase mb-2">Paciente y Antecedentes</h4>
          <p className="text-gray-700 italic font-serif leading-relaxed">{clinicalCase.patient}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-bold text-blue-600 uppercase mb-2">Hallazgos al Examen</h4>
          <p className="text-gray-700 font-medium leading-relaxed">{clinicalCase.findings}</p>
        </div>

        <div className="p-5 bg-blue-600 rounded-2xl text-white mb-6 shadow-md">
          <div className="flex gap-4 items-start">
            <i className="fa-solid fa-circle-question text-2xl opacity-50"></i>
            <div>
              <p className="text-lg font-bold leading-tight">{clinicalCase.question}</p>
            </div>
          </div>
        </div>

        {!showResolution ? (
          <button 
            onClick={() => setShowResolution(true)}
            className="w-full py-4 bg-white border-2 border-blue-600 text-blue-600 font-black rounded-xl hover:bg-blue-50 transition-colors uppercase tracking-widest text-sm"
          >
            Revelar Análisis Clínico
          </button>
        ) : (
          <div className="p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl animate-fade-in">
            <h4 className="text-emerald-700 font-bold mb-2 flex items-center gap-2">
              <i className="fa-solid fa-user-doctor"></i> Conducta y Resolución
            </h4>
            <p className="text-emerald-900 leading-relaxed" dangerouslySetInnerHTML={{ __html: clinicalCase.resolution.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleNext = () => {
    const isCorrect = selectedOption === module.quiz[currentQuestion].correctAnswer;
    const newScore = isCorrect ? score + 1 : score;
    
    if (currentQuestion < module.quiz.length - 1) {
      setScore(newScore);
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      onComplete(newScore);
    }
  };

  const question = module.quiz[currentQuestion];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-2xl mx-auto border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <span className={`text-sm font-bold uppercase tracking-wider ${module.textColor}`}>
          Pregunta {currentQuestion + 1} de {module.quiz.length}
        </span>
        <button onClick={onBack} className="text-gray-400 hover:text-gray-600 transition-colors">
          <i className="fa-solid fa-xmark text-xl"></i>
        </button>
      </div>
      <h3 className="text-xl font-semibold mb-8 text-gray-800 leading-tight">{question.question}</h3>
      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            disabled={showExplanation}
            onClick={() => setSelectedOption(index)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
              selectedOption === index ? `${module.colorClass.replace('bg-', 'border-')} bg-opacity-5` : 'border-gray-100 hover:border-gray-300'
            } ${showExplanation && index === question.correctAnswer ? 'border-green-500 bg-green-50' : ''}`}
          >
            <div className="flex items-center">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold ${selectedOption === index ? `${module.colorClass} text-white` : 'bg-gray-100 text-gray-500'}`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-gray-700 font-medium">{option}</span>
            </div>
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
          <p className="text-sm text-blue-800 leading-relaxed"><span className="font-bold">Explicación:</span> {question.explanation}</p>
        </div>
      )}
      <div className="flex justify-end">
        {!showExplanation ? (
          <button disabled={selectedOption === null} onClick={() => setShowExplanation(true)} className={`px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg ${selectedOption === null ? 'bg-gray-300' : `${module.colorClass} hover:opacity-90`}`}>Verificar</button>
        ) : (
          <button onClick={handleNext} className={`px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg ${module.colorClass} hover:opacity-90`}>
            {currentQuestion === module.quiz.length - 1 ? 'Finalizar' : 'Siguiente'}
          </button>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [progress, setProgress] = useState<UserProgress>({ currentModuleId: 1, completedModules: [], quizScores: {} });
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
      <div className="min-h-screen py-12 px-6 bg-gradient-to-br from-gray-50 to-slate-100 flex flex-col items-center">
        <div className="max-w-4xl w-full">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-white mb-10 overflow-hidden relative">
            <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none"><i className="fa-solid fa-heart-pulse text-[200px]"></i></div>
            <div className="mb-6 inline-block p-4 bg-blue-600 rounded-2xl text-white shadow-lg relative z-10"><i className="fa-solid fa-dna text-4xl"></i></div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight relative z-10">Abordaje Sistemático de Rasgos Dismórficos</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed relative z-10">Maestría en Pediatría: Formación clínica avanzada en anomalías congénitas.</p>
            
            {/* Restaurada la cuadrícula de características */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left relative z-10">
              <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
                <i className="fa-solid fa-book-open text-blue-600 text-xl"></i>
                <div><p className="font-bold text-gray-800 leading-none">5 Módulos</p><p className="text-[10px] text-gray-500 uppercase tracking-wider">Teoría Profunda</p></div>
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-4">
                <i className="fa-solid fa-vial text-emerald-600 text-xl"></i>
                <div><p className="font-bold text-gray-800 leading-none">Evaluaciones</p><p className="text-[10px] text-gray-500 uppercase tracking-wider">Por cada unidad</p></div>
              </div>
              <div className="p-4 bg-purple-50 rounded-2xl border border-purple-100 flex items-center gap-4">
                <i className="fa-solid fa-user-doctor text-purple-600 text-xl"></i>
                <div><p className="font-bold text-gray-800 leading-none">Casos Clínicos</p><p className="text-[10px] text-gray-500 uppercase tracking-wider">Aplicación Real</p></div>
              </div>
            </div>

            <button onClick={() => setView('module')} className="group px-10 py-4 bg-blue-600 text-white font-bold rounded-full text-lg shadow-xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95">Comenzar Curso <i className="fa-solid fa-arrow-right ml-3"></i></button>
          </div>

          <div className="flex items-center justify-between mb-6 px-4">
            <h2 className="text-2xl font-bold text-gray-800">Programa Académico</h2>
          </div>

          <div className="space-y-4 mb-12">
            {MODULES.map((m) => (
              <div key={m.id} onClick={() => goToModule(m.id)} className="group bg-white rounded-2xl p-5 shadow-md border-2 border-transparent cursor-pointer transition-all hover:border-blue-400 flex items-center gap-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl font-black ${m.colorClass} text-white shadow-lg`}>{m.id}</div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600">{m.title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{m.subtitle}</p>
                </div>
                <i className="fa-solid fa-chevron-right text-gray-300 group-hover:text-blue-400"></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (view === 'quiz') {
    return (
      <div className={`min-h-screen p-6 ${currentModule.colorClass} bg-opacity-5`}>
        <div className="max-w-4xl mx-auto">
          <QuizComponent module={currentModule} onComplete={handleQuizComplete} onBack={() => setView('module')} />
        </div>
      </div>
    );
  }

  if (view === 'finish') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-2xl bg-white rounded-3xl shadow-2xl p-12">
          <i className="fa-solid fa-certificate text-6xl text-green-500 mb-6"></i>
          <h1 className="text-4xl font-bold mb-4">¡Especialización Completada!</h1>
          <p className="text-gray-500 mb-10">Has demostrado competencia en el abordaje sistemático de la dismorfología pediátrica.</p>
          <button onClick={() => setView('intro')} className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg">Reiniciar Programa</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <header className={`${currentModule.colorClass} text-white py-12 px-6 shadow-lg relative`}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">Módulo {currentModule.id}</span>
              <button onClick={() => setView('intro')} className="text-white/70 hover:text-white transition-colors text-xs font-bold"><i className="fa-solid fa-list-ul mr-2"></i>ÍNDICE</button>
            </div>
            <h1 className="text-3xl md:text-5xl font-black">{currentModule.title}</h1>
            <p className="text-lg opacity-80 mt-2 font-medium">{currentModule.subtitle}</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 -mt-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          <div className="prose prose-lg prose-blue max-w-none text-gray-700 mb-12" dangerouslySetInnerHTML={{ __html: currentModule.content }} />
          
          {/* Componente de Caso Clínico */}
          <ClinicalCaseSection module={currentModule} />

          <div className={`p-8 rounded-3xl ${currentModule.colorClass} bg-opacity-5 border-2 border-dashed ${currentModule.colorClass.replace('bg-', 'border-')} border-opacity-30 mb-12`}>
            <h2 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2"><i className="fa-solid fa-brain"></i> Conceptos Clave</h2>
            <p className="text-gray-600 italic">"{currentModule.summary}"</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-gray-100 pt-10">
            <button onClick={() => setView('quiz')} className={`px-12 py-5 ${currentModule.colorClass} text-white font-black rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all text-lg`}>INICIAR EVALUACIÓN <i className="fa-solid fa-vial ml-2"></i></button>
            
            <div className="flex gap-4">
              {currentModule.id > 1 && <button onClick={() => goToModule(currentModule.id - 1)} className="p-4 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"><i className="fa-solid fa-chevron-left"></i></button>}
              {currentModule.id < MODULES.length && <button onClick={() => goToModule(currentModule.id + 1)} className="p-4 bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"><i className="fa-solid fa-chevron-right"></i></button>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
