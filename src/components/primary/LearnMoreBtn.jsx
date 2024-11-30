import React from 'react'

const LearnMoreBtn = ({text = 'Learn More'}) => {
  return (
    <div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full inline-flex items-center group transition-colors">
            {text}
            <svg 
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
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
    </div>
  )
}

export default LearnMoreBtn