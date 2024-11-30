import React from 'react';
import {Apple,Google,IDK,Insta,Facebook,Dribbble} from '../assets/logos';

const Clients = () => {
    const clients = [
        { name: 'Apple', logo: Apple },
        { name: 'Google', logo: Google },
        { name: 'Carrot', logo: IDK },
        { name: 'Instagram', logo: Insta },
        { name: 'Facebook', logo: Facebook },
        { name: 'Dribbble', logo: Dribbble }
      ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">Our Clients</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-lg transition-shadow duration-300 flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;