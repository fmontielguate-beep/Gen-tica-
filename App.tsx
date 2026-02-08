
import React, { useState, useEffect, useCallback } from 'react';
import { MODULES } from './constants';
import { Module, UserProgress } from './types';

// Components inside App for simplicity in this single-file structured logic
const ProgressBar: React.FC<{ progress: number; color: string }> = ({ progress, color }) => (
  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
    <div 
      className={`h-2.5 rounded-full transition-all duration-500 ${color}`} 
      style={{ width: `${progress}%` }}
    ></div>
  </div>
);

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

      <h3 className="text-xl font-semibold mb-8 text-gray-800 leading-tight">
        {question.question}
      </h3>

      <div className="space-y-4 mb-8">
        {question.options.map((option, index) => (
          <button
            key={index}
            disabled={showExplanation}
            onClick={() => setSelectedOption(index)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
              selectedOption === index 
                ? `${module.colorClass.replace('bg-', 'border-')} bg-opacity-5` 
                : 'border-gray-100 hover:border-gray-300'
            } ${
              showExplanation && index === question.correctAnswer ? 'border-green-500 bg-green-50' : ''
            } ${
              showExplanation && selectedOption === index && index !== question.correctAnswer ? 'border-red-500 bg-red-50' : ''
            }`}
          >
            <div className="flex items-center">
              <span className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold ${
                selectedOption === index ? `${module.colorClass} text-white` : 'bg-gray-100 text-gray-500'
              }`}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-gray-700 font-medium">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {showExplanation ? (
        <div className="mb-8 p-4 bg-blue-50 rounded-xl border border-blue-100 animate-fade-in">
          <p className="text-sm text-blue-800 leading-relaxed">
            <span className="font-bold">Explicación:</span> {question.explanation}
          </p>
        </div>
      ) : null}

      <div className="flex justify-end">
        {!showExplanation ? (
          <button
            disabled={selectedOption === null}
            onClick={() => setShowExplanation(true)}
            className={`px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg ${
              selectedOption === null ? 'bg-gray-300 cursor-not-allowed' : `${module.colorClass} hover:opacity-90 active:scale-95`
            }`}
          >
            Verificar Respuesta
          </button>
        ) : (
          <button
            onClick={handleNext}
            className={`px-8 py-3 rounded-full font-bold text-white transition-all shadow-lg ${module.colorClass} hover:opacity-90 active:scale-95`}
          >
            {currentQuestion === module.quiz.length - 1 ? 'Finalizar Test' : 'Siguiente Pregunta'}
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

  const handleCompleteModule = () => {
    setView('quiz');
  };

  const goToModule = (id: number) => {
    if (id >= 1 && id <= MODULES.length) {
      setProgress(prev => ({ ...prev, currentModuleId: id }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleQuizComplete = (score: number) => {
    setProgress(prev => {
      const newCompleted = Array.from(new Set([...prev.completedModules, prev.currentModuleId]));
      const newScores = { ...prev.quizScores, [prev.currentModuleId]: score };
      return { ...prev, completedModules: newCompleted, quizScores: newScores };
    });

    if (progress.currentModuleId < MODULES.length) {
      setView('module');
      setProgress(prev => ({ ...prev, currentModuleId: prev.currentModuleId + 1 }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setView('finish');
    }
  };

  const calculateOverallProgress = () => {
    const total = MODULES.length;
    const completed = progress.completedModules.length;
    return (completed / total) * 100;
  };

  const startCourse = () => {
    setView('module');
  };

  const restartCourse = () => {
    setProgress({ currentModuleId: 1, completedModules: [], quizScores: {} });
    setView('intro');
  };

  if (view === 'intro') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center border border-white">
          <div className="mb-6 inline-block p-4 bg-blue-600 rounded-2xl text-white shadow-lg">
            <i className="fa-solid fa-dna text-4xl"></i>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Abordaje Sistemático de Rasgos Dismórficos
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Un curso interactivo de alta especialidad diseñado para estudiantes de maestría en pediatría. Domina el diagnóstico diferencial, la fisiopatología y el abordaje clínico de las anomalías congénitas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <i className="fa-solid fa-book-medical text-blue-600 mb-2"></i>
              <h3 className="font-bold text-gray-800">5 Módulos</h3>
              <p className="text-sm text-gray-500">Contenido extenso y detallado.</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <i className="fa-solid fa-vial text-emerald-600 mb-2"></i>
              <h3 className="font-bold text-gray-800">Tests Interactivos</h3>
              <p className="text-sm text-gray-500">Evaluación por módulo.</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
              <i className="fa-solid fa-stethoscope text-purple-600 mb-2"></i>
              <h3 className="font-bold text-gray-800">Casos Clínicos</h3>
              <p className="text-sm text-gray-500">Aplicación práctica real.</p>
            </div>
          </div>
          <button 
            onClick={startCourse}
            className="group relative px-10 py-4 bg-blue-600 text-white font-bold rounded-full text-lg shadow-xl hover:bg-blue-700 transition-all hover:scale-105 active:scale-95"
          >
            Comenzar el Curso
            <i className="fa-solid fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
          </button>
        </div>
        <p className="mt-8 text-gray-400 text-sm font-medium">© 2025 · Educación Médica Superior en Pediatría</p>
      </div>
    );
  }

  if (view === 'quiz') {
    return (
      <div className={`min-h-screen p-6 ${currentModule.colorClass} bg-opacity-5 transition-colors duration-500`}>
        <div className="max-w-4xl mx-auto">
          <ProgressBar progress={calculateOverallProgress()} color={currentModule.colorClass} />
          <QuizComponent 
            module={currentModule} 
            onComplete={handleQuizComplete}
            onBack={() => setView('module')}
          />
        </div>
      </div>
    );
  }

  if (view === 'finish') {
    const totalScore = Object.values(progress.quizScores).reduce((a: number, b: number) => a + b, 0);
    const maxPossible = MODULES.length * 5;

    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-10 text-center">
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl shadow-inner">
            <i className="fa-solid fa-certificate"></i>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">¡Curso Completado!</h1>
          <p className="text-gray-500 mb-8">Has finalizado satisfactoriamente todos los módulos de dismorfología.</p>
          
          <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
            <h2 className="text-lg font-bold text-gray-700 mb-4 uppercase tracking-wider">Resultados de Evaluación</h2>
            <div className="text-5xl font-extrabold text-blue-600 mb-2">
              {totalScore} <span className="text-2xl text-gray-400">/ {maxPossible}</span>
            </div>
            <p className="text-sm text-gray-500">Puntaje total obtenido en los tests interactivos.</p>
          </div>

          <div className="space-y-4">
            <button 
              onClick={restartCourse}
              className="w-full py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg active:scale-95"
            >
              Volver al Inicio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Module Header */}
      <header className={`${currentModule.colorClass} text-white py-12 px-6 shadow-lg relative overflow-hidden`}>
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <i className="fa-solid fa-dna text-9xl transform rotate-12"></i>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4 text-white/80">
              <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-bold backdrop-blur-md">
                Módulo {currentModule.id} de {MODULES.length}
              </span>
              <span className="text-sm font-medium hidden md:inline">Curso de Dismorfología Avanzada</span>
            </div>
            <button 
              onClick={() => setView('intro')}
              className="text-white/80 hover:text-white transition-colors"
              title="Volver al inicio"
            >
              <i className="fa-solid fa-house"></i>
            </button>
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-3 leading-tight">{currentModule.title}</h1>
          <p className="text-xl opacity-90 font-medium">{currentModule.subtitle}</p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 -mt-8 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="mb-10">
            <ProgressBar progress={calculateOverallProgress()} color={currentModule.colorClass} />
            <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed" 
                 dangerouslySetInnerHTML={{ __html: currentModule.content }} />
          </div>

          <div className={`p-8 rounded-3xl ${currentModule.colorClass} bg-opacity-5 border-2 border-dashed ${currentModule.colorClass.replace('bg-', 'border-')} border-opacity-30 mb-12`}>
            <div className="flex items-center gap-3 mb-4">
              <i className={`fa-solid fa-lightbulb ${currentModule.textColor} text-xl`}></i>
              <h2 className="text-xl font-bold text-gray-800">Resumen del Módulo</h2>
            </div>
            <p className="text-gray-600 leading-relaxed italic">"{currentModule.summary}"</p>
          </div>

          {/* Navigation and Call to Action */}
          <div className="flex flex-col gap-10">
            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-gray-100 pt-10">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-bold text-gray-800 mb-1">¿Listo para la evaluación?</h3>
                <p className="text-gray-500">Responde 5 preguntas para validar tus conocimientos.</p>
              </div>
              <button 
                onClick={handleCompleteModule}
                className={`px-10 py-4 ${currentModule.colorClass} text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:opacity-90 active:scale-95 transition-all text-lg`}
              >
                Realizar Test
                <i className="fa-solid fa-vial ml-3"></i>
              </button>
            </div>

            {/* Pagination Navigation */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
              {currentModule.id > 1 ? (
                <button 
                  onClick={() => goToModule(currentModule.id - 1)}
                  className={`flex items-center gap-3 font-bold ${currentModule.textColor} hover:opacity-70 transition-opacity`}
                >
                  <i className="fa-solid fa-chevron-left"></i>
                  <span>Módulo Anterior</span>
                </button>
              ) : <div></div>}

              {currentModule.id < MODULES.length ? (
                <button 
                  onClick={() => goToModule(currentModule.id + 1)}
                  className={`flex items-center gap-3 font-bold ${currentModule.textColor} hover:opacity-70 transition-opacity`}
                >
                  <span>Módulo Siguiente</span>
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              ) : (
                <button 
                  disabled
                  className="flex items-center gap-3 font-bold text-gray-300"
                >
                  <span>Fin del Curso</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center text-gray-400 text-sm">
        <p>PedCases Podcast: Approach to Dysmorphic Features - Versión Académica Adaptada</p>
      </footer>
    </div>
  );
};

export default App;
