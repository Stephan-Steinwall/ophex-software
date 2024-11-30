import React from 'react';
import PLearnMoreBtn from './primary/PLearnMoreBtn';

function ProjectCard({ title, description, imageUrl, isReversed }) {
    const cardClasses = `flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden rounded-xl`;
    
    return (
      <div className={cardClasses}>
        <div className="md:w-1/2">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{description}</p>
          <div className="flex">
            <PLearnMoreBtn text="Learn More" />
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;