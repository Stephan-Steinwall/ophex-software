import React from 'react';

const TestimonialCard = ({ logo, company, text, name, position ,clientImage}) => {
    return (
      <div className="bg-gray-50 p-8 rounded-2xl shadow-lg max-w-xl">
        <img 
          src={logo} 
          alt={company} 
          className="w-12 h-12 mb-6"
        />
        
        <p className="text-gray-700 mb-8">{text}</p>
  
        <div>
          <h4 className="font-bold text-lg">{name}</h4>
          <p className="text-orange-500">{position}</p>
        </div>

        <div className="w-32 flex-shrink-0">
        <img 
          src={clientImage} 
          alt={name}
          className="w-full h-32 object-cover rounded-xl"
        />
      </div>

      </div>
    );
  };
  
  export default TestimonialCard;