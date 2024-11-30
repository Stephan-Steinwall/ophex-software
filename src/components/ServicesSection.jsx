import React from "react";
import ServiceCard from "./ServiceCard";
import { Monitor } from 'lucide-react';

const ServicesSection = () => {
    const services = [
      {
        title: "Web Application Development",
        description: "Stay in track where-ever when-ever",
        icon: <Monitor className="text-white" size={24} />
      },
      {
        title: "Web Application Development",
        description: "Stay in track where-ever when-ever",
        icon: <Monitor className="text-white" size={24} />
      },
      {
        title: "Web Application Development",
        description: "Stay in track where-ever when-ever",
        icon: <Monitor className="text-white" size={24} />
      },
      {
        title: "Web Application Development",
        description: "Stay in track where-ever when-ever",
        icon: <Monitor className="text-white" size={24} />
      },
      {
        title: "Web Application Development",
        description: "Stay in track where-ever when-ever",
        icon: <Monitor className="text-white" size={24} />
      },
      {
        title: "Web Application Development",
        description: "Stay in track where-ever when-ever",
        icon: <Monitor className="text-white" size={24} />
      }
    ];
  
    return (
      <div className="w-11/12 py-16 px-4 mx-auto">
        <div className="max-w-7xl mx-auto">
         
          <div className="text-center mb-16">
            <h2 className="text-orange-500 text-2xl font-semibold mb-4">Services</h2>
            <h1 className="text-4xl font-bold max-w-3xl mx-auto">Services We Provide For You</h1>
          </div>
  
         
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ServicesSection;