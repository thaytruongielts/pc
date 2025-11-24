import React from 'react';
import { Question } from '../types';

interface QuestionCardProps {
  question: Question;
  selectedOption: number | undefined;
  onSelect: (optionIndex: number) => void;
  isSubmitted: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedOption, onSelect, isSubmitted }) => {
  const letters = ['A', 'B', 'C', 'D'];

  return (
    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex gap-3 mb-4">
        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold text-sm">
          {question.id}
        </span>
        <h3 className="text-slate-800 font-medium text-lg leading-relaxed pt-0.5">
          {question.question}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 md:pl-11">
        {question.options.map((option, idx) => {
          let buttonStyle = "border-slate-200 bg-white hover:bg-slate-50 text-slate-700";
          let icon = null;

          // Selection Logic
          if (!isSubmitted) {
            if (selectedOption === idx) {
              buttonStyle = "border-blue-500 bg-blue-50 text-blue-800 ring-1 ring-blue-500";
            }
          } else {
            // Submitted Logic
            if (idx === question.correctIndex) {
              // This is the correct answer
              buttonStyle = "border-green-500 bg-green-50 text-green-800 ring-1 ring-green-500 font-medium";
              icon = (
                <svg className="w-5 h-5 text-green-600 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              );
            } else if (selectedOption === idx) {
              // User selected this, but it's wrong (since it wasn't caught by the if above)
              buttonStyle = "border-red-300 bg-red-50 text-red-800 opacity-75";
              icon = (
                <svg className="w-5 h-5 text-red-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              );
            } else {
              // Unselected, wrong options
              buttonStyle = "border-slate-100 bg-slate-50 text-slate-400 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => !isSubmitted && onSelect(idx)}
              disabled={isSubmitted}
              className={`relative flex items-center text-left w-full p-3 rounded-lg border-2 transition-all duration-200 ${buttonStyle}`}
            >
              <span className="font-bold mr-3 opacity-60 w-5">{letters[idx]}.</span>
              <span className="flex-grow">{option}</span>
              {icon}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;