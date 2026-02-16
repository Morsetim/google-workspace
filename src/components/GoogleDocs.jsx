import React from 'react';

const GoogleDocsHero = () => {
  return (
    <div className="bg-white font-sans">
      {/* 1. Top Navigation Bar */}

      {/* 2. Main Hero Section (Grid Layout) */}
      <section className="max-w-6xl mx-auto px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        
        {/* Left Column: Text Content */}
        <div className="space-y-8">
          <h2 className="text-5xl md:text-5xl font-bold text-[#202124] leading-[1.1] tracking-tight">
            Online, collaborative <br /> documents
          </h2>
          
          <p className="text-md md:text-xl text-[#5f6368] max-w-xl leading-relaxed font-light">
            AI-powered documents to help you and your team create and collaborate on content.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-[#1a73e8] hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-lg font-medium transition-all shadow-sm hover:shadow-md">
              Sign in
            </button>
            
            <div className="flex items-stretch border border-gray-300 rounded-full hover:bg-gray-50 transition-colors overflow-hidden cursor-pointer group h-[56px]">
              <span className="pl-6 pr-4 flex items-center text-[#1a73e8] font-medium">
                Try Docs for work
              </span>
              <span className="border-l border-gray-300 px-4 flex items-center justify-center">
                <span className="text-[#1a73e8] text-[10px] transform group-hover:translate-y-0.5 transition-transform">
                  ▼
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Large Image Section */}
        <div className="flex justify-center lg:justify-end"> 
  {/* The container below will now scale exactly to the image's size */}
  <div className="relative w-fit h-fit rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-2xl shadow-blue-100/50">
    <img 
      src="https://lh3.googleusercontent.com/_QqcHTvLAGW8jG1lQV9dqyP-t7MYvMnN7ck4NcLucu9QJNk7dTTVKO9KNH7f02gTCPHqNLPe0HLwpMFo9qHw7N6kv54Dneip6P4=e365-pa-nu-rw-w528" 
      alt="Main Visual" 
      className="block w-full h-auto max-w-full" 
    />
    {/* Subtle overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />
  </div>
</div>

      </section>
    </div>
  );
};

export default GoogleDocsHero;