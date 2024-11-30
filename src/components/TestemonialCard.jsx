import React from 'react';

const TestimonialCard = ({ logo, company, text, name, position, clientImage }) => {
  return (
    <div className="bg-gray-50 p-4 sm:p-8 rounded-2xl shadow-lg  max-w-xl flex flex-col md:flex-row gap-4 sm:gap-8">
      <div className="flex-1">
        <img
          src={logo}
          alt={company}
          className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-6"
        />

        <p className="text-gray-700 mb-6 sm:mb-8">{text}</p>

        <div>
          <h4 className="font-bold text-base sm:text-lg">{name}</h4>
          <p className="text-orange-500">{position}</p>
        </div>
      </div>

      <div className="w-full md:w-64 h-48 md:h-80 flex-shrink-0">
        <img
          src={clientImage}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default TestimonialCard;