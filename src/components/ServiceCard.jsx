import React from "react";

const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="relative group rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2">
        <div className="relative h-64 bg-gray-200">
          <img
            src="https://img.freepik.com/free-photo/globe-camera-near-laptop_23-2147772294.jpg?t=st=1732987730~exp=1732991330~hmac=1b914d54572ddaa889b2c6184ff710c5fea177d9bb1f84a63e2f7ba5e57d9758&w=1060"
            alt="Service background"
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-0 duration-500">
            {/* Content Container */}
            <div className="p-6 h-full flex flex-col justify-between"> {/* Changed justify-start to justify-between */}
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {description}
                </p>
              </div>
              
              {/* Icon Circle - Now positioned at bottom */}
              <div className="flex justify-end">
                <div className="bg-orange-500 p-3 rounded-full">
                  {icon}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;