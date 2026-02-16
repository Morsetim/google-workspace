import React, { useState } from 'react';

const SmartCanvasList = () => {
  // Set the first item (index 0) as the default so an image shows immediately
  const [activeIndex, setActiveIndex] = useState(0);

  const jsConcepts = [
    {
      title: "Get a jumpstart on your document with smart canvas",
      subtitle: "Instantly build formatted emails, calendar invites, review trackers, meeting notes, and more in Docs when you type ‘@.’",
      image: "https://lh3.googleusercontent.com/OrWMguUaJ-_UXljVsLx6eq_Bsgg8NyaEcIFokC9QvObcQu6MHglCZZMpBXnZwCz7FkNBOx4PCRBzlCfJOgPgT9qc-NDgzaaQl1on=e365-pa-nu-rw-w684"
    },
    {
      title: "Easily populate your document with rich details",
      subtitle: "Use smart chips to add names, files, calendar events, dropdown menus, and more when you type ‘@.’",
      image: "https://lh3.googleusercontent.com/snTjRW1KY17rb8k3GOYThAu103MQ6fmFQgpSSIORvoEv8rOq5S6U0bjl71yUR3AfMck2zT6_Z4qXwa8-pAPSVIR8tSpPrBQhQFs5oQ=e365-pa-nu-rw-w684"
    },
    {
      title: "Remove page breaks and write without limits",
      subtitle: "Choose pageless mode to create content - continuously write and scroll without interruption.",
      image: "https://lh3.googleusercontent.com/ZTkoTAX9Bb_tHTW_1KMeTKtHO6tq9-S4C5SJte_6fGE3xYGI_rKMS7AY4A2_mAyyCID9KqOjiMC3G3bvTBYw2x2di9DheaddRZAv=e365-pa-nu-rw-w684"
    },
    {
      title: "Stay organized with document tabs",
      subtitle: "Create a tab for each part of a project, plan, or report and keep everything in one place - never lose track of your documents again.",
      image: "https://lh3.googleusercontent.com/er3CWnoN2UWCO2C5FVuIj8xNkRoltmsW9_bnlppVxThtlQ0eGlYDzvpYQxyCiBeTudA0yscL0Oq17qRcRXsSqTXVh6nlsAn8R1rx=e365-pa-nu-rw-w684"
    },
  ];

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-8 gap-12 items-center min-h-[500px]">
      
      {/* LEFT SIDE: jsConcepts Container */}
      <div className="w-full md:w-1/2 space-y-4">
        {jsConcepts.map((concept, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer border-l-4 p-6 transition-all duration-300 ease-in-out rounded-r-xl
                ${isActive 
                  ? "border-blue-600 bg-blue-50 shadow-md translate-x-2" 
                  : "border-gray-200 bg-white hover:bg-gray-50"
                }`}
            >
              <h3 className={`text-xl font-semibold transition-colors duration-300 
                ${isActive ? "text-blue-700" : "text-gray-800"}`}>
                {concept.title}
              </h3>

              <div
                className={`grid transition-all duration-500 ease-in-out overflow-hidden
                  ${isActive 
                    ? "grid-rows-[1fr] opacity-100 mt-4" 
                    : "grid-rows-[0fr] opacity-0 mt-0"
                  }`}
              >
                <p className="min-h-0 text-gray-600 text-base leading-relaxed">
                  {concept.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT SIDE: Bold Image Container */}
      <img 
  key={activeIndex}
  src={jsConcepts[activeIndex].image} 
  alt="Concept Preview" 
  className="
    w-full h-full 
    md:w-1/2 
    max-w-[480px] 
    object-cover 
    transition-all 
    duration-500 
    animate-in 
    fade-in 
    zoom-in
  "
/>

    </div>
  );
};

export default SmartCanvasList;