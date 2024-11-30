import React from 'react';
import LearnMoreBtn from './primary/LearnMoreBtn';

const Charity = () => {
  return (
    <section className="bg-gray-50 py-8 my-10 w-fit rounded-2xl">
      <div className="max-w-7xl px-4 md:px-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="Charity Impact image" 
            className="rounded-xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Get to know About our Charity Impact</h2>
          
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dictum viverra massa, 
            lobortis posuere risus dignissim vehicula. Phasellus suscipit augue nisl, ac sollicitudin 
            sem tempor eget. Cras ac eros vel odio pulvinar pulvinar at a tellus. Phasellus id lacus 
            augue. Maecenas turpis urna, elementum et finibus ut, aliquam accumsan mauris. 
            Aliquam sapien ipsum, tincidunt sit amet condimentum in, euismod at leo.
          </p>
          
          
          <LearnMoreBtn />
        </div>
      </div>
    </section>
  );
};

export default Charity;