import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the difference between a UI and UX Designer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum viverra massa, lobortis posuere risus dignissim vehicula. Phasellus suscipit augue nisl, ac sollicitudin sem tempor eget. Cras ac eros vel odio pulvinar pulvinar at a tellus."
    },
    {
      question: "What is the difference between a UI and UX Designer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum viverra massa, lobortis posuere risus dignissim vehicula."
    },
    {
      question: "What is the difference between a UI and UX Designer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum viverra massa, lobortis posuere risus dignissim vehicula."
    },
    {
      question: "What is the difference between a UI and UX Designer?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum viverra massa, lobortis posuere risus dignissim vehicula."
    }
  ];

  return (
    <section className="py-16 px-4 w-11/12 ">
      <div className="">
        <h2 className="text-orange-500 text-center font-semibold text-2xl mb-2">FAQ</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions From Us</h1>
        
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.1)] overflow-hidden"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <ChevronDown 
                  className={`transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="p-4 border-t">
                  <p className="text-gray-600">{faq.answer}</p>
                  <button className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors flex items-center">
                    Learn More
                    <ChevronDown className="ml-2 rotate-[-90deg]" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;