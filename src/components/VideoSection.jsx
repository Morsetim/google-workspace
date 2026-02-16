import React, { useState, useRef, useEffect } from 'react';

const DocsFeatureSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  // Sync the circular progress with video time
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // SVG Circle math
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div>
    <section className="flex items-center justify-center bg-white p-6 md:p-24 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center justify-between">
        
        {/* LEFT COLUMN: VIDEO WITH CIRCULAR LOADER */}
        <div className="flex justify-center items-center relative group">
          <div className="relative w-full aspect-[4/3] ring-1 ring-gray-100  rounded-2xl">
            <video
              ref={videoRef}
              src="https://storage.googleapis.com/gweb-workspace-assets/uploads/7uffzv9dk4sn-2OatdVfBoMyW0INXNXSExr-87ca16a2fc29ea9c70d098fcb1780114-23582_Docs_Help_Me_Create_Video_04.compressed.mp4"
              className={`w-full h-full object-cover cursor-pointer transition-transform duration-1000 ease-out ${
                isPlaying ? "scale-110" : "scale-100"
              }`}
              autoPlay
              muted
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
            />

           
          </div>
        </div>

        {/* RIGHT COLUMN: TEXT CONTENT */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 tracking-tight leading-tight">
            Get more done
            <br /> <span className="text-gray-900"> with Gemini in Docs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
            Using a few simple prompts, create professional, stylized, and
            structured documents with images, tables, and more. Get help
            refining your content, see the latest summary of your work, and ask
            questions to improve and finalize your document.
            <span className="ml-2">
                <a
                  href="#"
                  className="text-blue-400 text-lg md:text-xl font-light underline  decoration-2 hover:text-blue-600 transition-all cursor-pointer"
                >
                  Try Google Workspace with Gemini today
                </a>
            </span>
          </p>
        </div>
      </div>
    </section>
    {/* CIRCULAR LOADER BUTTON */}
        <div className=" flex justify-center ">
            <button 
            onClick={togglePlay}
            className="relative flex items-center justify-center w-12 h-12 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label={isPlaying ? "Pause" : "Play"}
            >
            {/* SVG Progress Ring */}
            <svg className="absolute w-full h-full -rotate-90" viewBox="0 0 44 44">
                {/* Background Circle */}
                <circle
                cx="22"
                cy="22"
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
                />
                {/* Progress Circle */}
                <circle
                cx="22"
                cy="22"
                r={radius}
                fill="none"
                stroke="#2563eb" /* Blue-600 */
                strokeWidth="3"
                strokeDasharray={circumference}
                style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.1s linear' }}
                strokeLinecap="round"
                />
            </svg>

            {/* Play/Pause Icons */}
            {isPlaying ? (
                <svg className="w-4 h-4 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
                </svg>
            ) : (
                <svg className="w-4 h-4 text-gray-800 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
                </svg>
            )}
            </button>
        </div>
    </div>
  );
};

export default DocsFeatureSection;