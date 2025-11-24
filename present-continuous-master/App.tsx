import React, { useState, useMemo, useEffect } from 'react';
import { EXERCISE_DATA } from './questions';
import QuestionCard from './components/Input'; // Reused file path for the card component
import { UserAnswers } from './types';

const App: React.FC = () => {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  // Initialize total questions count
  const totalQuestions = useMemo(() => {
    return EXERCISE_DATA.reduce((acc, section) => acc + section.questions.length, 0);
  }, []);

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;

    EXERCISE_DATA.forEach(section => {
      section.questions.forEach(q => {
        if (answers[q.id] === q.correctIndex) {
          correctCount++;
        }
      });
    });

    const score = (correctCount / totalQuestions) * 10;
    return {
      correctQuestions: correctCount,
      totalQuestions,
      finalScore: Math.round(score * 100) / 100
    };
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setShowScoreModal(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setAnswers({});
    setIsSubmitted(false);
    setShowScoreModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scoreData = useMemo(() => isSubmitted ? calculateScore() : null, [isSubmitted, answers]);

  // Prevent accidental navigation
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isSubmitted && Object.keys(answers).length > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [answers, isSubmitted]);

  return (
    <div className="min-h-screen pb-24 bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">Present Continuous Quiz</h1>
            <p className="text-sm text-slate-500 font-medium">30 Questions • 10 Point Scale</p>
          </div>
          {isSubmitted && scoreData && (
             <div className="text-right">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Score</div>
                <div className={`text-3xl font-bold ${scoreData.finalScore >= 5 ? 'text-green-600' : 'text-red-500'}`}>
                  {scoreData.finalScore} <span className="text-sm text-slate-400 font-normal">/ 10</span>
                </div>
             </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {EXERCISE_DATA.map((section) => (
          <section key={section.id} className="space-y-4">
             <div className="bg-blue-600 rounded-xl px-6 py-4 shadow-md text-white">
              <h2 className="text-xl font-bold">{section.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              {section.questions.map((q) => (
                <QuestionCard
                  key={q.id}
                  question={q}
                  selectedOption={answers[q.id]}
                  onSelect={(idx) => handleSelectAnswer(q.id, idx)}
                  isSubmitted={isSubmitted}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer / Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-20">
        <div className="max-w-4xl mx-auto flex gap-4 justify-between items-center">
           <div className="hidden sm:block text-slate-500 text-sm font-medium">
             {!isSubmitted 
               ? `${Object.keys(answers).length} / ${totalQuestions} questions answered`
               : "Review your results above"
             }
           </div>
           
           <div className="flex gap-4 w-full sm:w-auto justify-end">
            {isSubmitted ? (
              <button 
                onClick={handleReset}
                className="flex-1 sm:flex-none px-6 py-3 rounded-lg font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                Try Again
              </button>
            ) : (
              <button 
                onClick={handleSubmit}
                className="flex-1 sm:flex-none px-8 py-3 rounded-lg font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Submit Answers
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Score Modal */}
      {showScoreModal && scoreData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center transform transition-all scale-100">
            <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 text-4xl font-extrabold border-[6px] ${scoreData.finalScore >= 5 ? 'border-green-500 text-green-600 bg-green-50' : 'border-red-500 text-red-600 bg-red-50'}`}>
              {scoreData.finalScore}
            </div>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {scoreData.finalScore >= 8 ? "Excellent!" : scoreData.finalScore >= 5 ? "Good Job!" : "Keep Practicing"}
            </h2>
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              You answered <strong className="text-slate-900">{scoreData.correctQuestions}</strong> correctly out of <strong className="text-slate-900">{scoreData.totalQuestions}</strong>.
            </p>

            <button 
              onClick={() => setShowScoreModal(false)}
              className="w-full py-3.5 rounded-xl font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-lg"
            >
              Review Answers
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;