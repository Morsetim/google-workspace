import React from 'react';

const GoogleDocsHero = () => {
  return (
    <div className="bg-white font-sans overflow-hidden">
      {/* Main Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-10 md:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#202124] leading-[1.1] tracking-tight">
            Online, collaborative <span className="block sm:inline">documents</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[#5f6368] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
            AI-powered documents to help you and your team create and collaborate on content.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <button className="w-full sm:w-auto bg-[#1a73e8] hover:bg-blue-700 text-white px-8 py-3.5 rounded-full text-lg font-medium transition-all shadow-sm">
              Sign in
            </button>
            
            <div className="w-full sm:w-auto flex items-stretch border border-gray-300 rounded-full hover:bg-gray-50 transition-colors overflow-hidden cursor-pointer group h-[56px]">
              <span className="flex-1 sm:flex-none pl-6 pr-4 flex items-center justify-center text-[#1a73e8] font-medium whitespace-nowrap">
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
        <div className="flex justify-center lg:justify-end order-1 lg:order-2"> 
          <div className="relative w-full max-w-[500px] lg:max-w-none rounded-2xl md:rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl md:shadow-2xl shadow-blue-100/50">
            <img 
              src="https://lh3.googleusercontent.com/_QqcHTvLAGW8jG1lQV9dqyP-t7MYvMnN7ck4NcLucu9QJNk7dTTVKO9KNH7f02gTCPHqNLPe0HLwpMFo9qHw7N6kv54Dneip6P4=e365-pa-nu-rw-w528" 
              alt="Main Visual" 
              className="block w-full h-auto object-cover" 
            />
            {/* Subtle overlay to keep the "Docs" look clean */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent pointer-events-none" />
          </div>
        </div>

      </section>
    </div>
  );
};

export default GoogleDocsHero;