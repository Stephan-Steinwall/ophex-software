import  React from 'react';
import TestemonialCard from './TestemonialCard';
import Reebok from '../assets/logos/clientLogo/Reebok.svg';
import clientImage from '../assets/images/clientImages/client.jpg';

const testemonials = [
    {
      id: 1,
      logo: Reebok,
      company: "Reebok",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum viverra massa, lobortis posuere risus dignissim vehicula. Phasellus suscipit augue nisl, ac sollicitudin sem",
      name: "Jane Doe de Silva",
      position: "Chief Executive Officer",
      clientImage: clientImage
    },
    {
      id: 2,
      logo: Reebok,
      company: "Reebok",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum viverra massa, lobortis posuere risus dignissim vehicula. Phasellus suscipit augue nisl, ac sollicitudin sem",
      name: "Jane Doe de Silva",
      position: "Chief Executive Officer",
      clientImage:clientImage
    },
    
  ];


  const ClientFeedback = () => {
    return (
      <section className="py-16 px-4 max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-orange-500 text-2xl font-semibold  mb-4">Client Feedback</h2>
          <p className="text-4xl font-bold max-w-3xl mx-auto">
            What Our Satisfied Clients Say About Us
          </p>
        </div>
  
       
        <div className="flex flex-wrap gap-8 justify-center mb-8">
          {testemonials.map((testemonial) => (
            <TestemonialCard 
              key={testemonial.id}
              {...testemonial}
            />
          ))}
        </div>
  
        
        <div className="flex justify-end gap-4">
          <button className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
          </button>
          <button className="p-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
      </section>
    );
  };
  
  export default ClientFeedback;