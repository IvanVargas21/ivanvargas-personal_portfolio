'use client'
import React from 'react';

interface SubmitButtonProps {
  isSubmitting: boolean;
}

const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => {
  return (
    <div className="pt-10 flex justify-center">
      <button
        type="submit"
        disabled={isSubmitting}
        className={`relative inline-flex items-center justify-center px-8 py-3 overflow-hidden text-base font-semibold text-white rounded-lg border-2 border-rose-400 bg-gradient-to-r from-rose-500/80 to-rose-400/80 shadow-lg hover:from-rose-400 hover:to-rose-500 hover:text-rose-100 transition-all duration-300 ${
          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center">
            <svg 
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              ></circle>
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </div>
  );
};

export default SubmitButton;