import React from 'react';

const CtaBtn = ({ text = 'Get Started'}) => {
  return (
    <button 
      
      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full w-fit transition-colors duration-300 flex items-center group"
    >
      {text}
      <svg
        className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </button>
  );
};

export default CtaBtn;