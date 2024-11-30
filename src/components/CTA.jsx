import React from 'react';
import Banner from '../assets/images/image.png';
import  CtaBtn from './primary/CtaBTN';

const CTA = () => {
    return (
        <div className="my-10 flex justify-center items-center w-11/12 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            <div className="relative w-11/12 h-[300px] overflow-hidden bg-white">
                <img
                    src={Banner}
                    alt="Developer workspace"
                    className="absolute right-0 opacity-90 brightness-90 object-cover w-1/2 h-full rounded-lg"
                />

                <div className="relative h-full flex flex-col justify-center px-8 md:px-5 max-w-7xl">
                    <h1 className="text-4xl md:text-3xl font-bold text-black mb-6 max-w-2xl">
                        Excited to bring your vision to life?
                        <br />
                        Let's get started together!
                    </h1>

                    

                    <CtaBtn />
                </div>
            </div>
        </div>
    );
};

export default CTA;