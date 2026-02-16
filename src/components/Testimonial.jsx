import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    subLogoImg: "https://lh3.googleusercontent.com/j5tcmPeeLBciwFkxM6evermaLoRDyA0Xr4B5C-BsOOHBYfRy5NJLu5Y2LEQLczGbIlgAYiSnVxPOy_MRvYkTc8aXbHWCmht6Fk5spQ=e365-pa-nu-rw-w300",
    subLogoText: "Formerly LeaseQuery",
    quote: "Google Workspace with Gemini is becoming a part of our way of life. I personally leveraged Gemini in Google Docs to create a one-page summary and observability and What Gemini gave me was CTO Ready.",
    author: "Amanda Taylor",
    role: "Former Vice President of Infrastructure, FinQuery",
  },
  {
    id: 2,
    subLogoImg: "https://lh3.googleusercontent.com/YZwTT2SGBtMxIYlMBIs9_yTckpGGIsf1bhG6d2SIx0sGN_0J-D3H_LyHaiolIpyrHpOloO8vpM3ihwA2RBXZtugfBADonDNV9Qzb=e365-pa-nu-rw-w360",
    subLogoText: "Global Partners",
    quote: "The integration of AI into our daily document workflow has saved our engineering team over 20 hours a week in documentation alone.",
    author: "James Chen",
    role: "Director of Engineering, GlobalTech",
  },
  {
    id: 3,
    subLogoImg: "https://storage.googleapis.com/gweb-workspace-assets/uploads/7uffzv9dk4sn-Y2BCqt8S1riVx97qa19HW-e9f562be23354788950cfb4539869b61-finquery-logo.webp",
    subLogoText: "Global Partners",
    quote: "Google Workspace with Gemini is becoming a part of our way of life. I personally leveraged Gemini in Google Docs to create a one-page summary of observability and monitoring tools. What Gemini gave me was CTO Ready. The time I get back from Gemini helps me spend more focus hours doing the things that really need my attention.",
    author: "Amanda Taylor",
    role: " Former Vice President of Infrastructure, FinQuery",
  }
];

const TestimonialCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    const nextStep = page + newDirection;
    if (nextStep < 0) {
      setPage([testimonials.length - 1, newDirection]);
    } else if (nextStep >= testimonials.length) {
      setPage([0, newDirection]);
    } else {
      setPage([nextStep, newDirection]);
    }
  };

  const variants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 100 : -100, opacity: 0 })
  };

  const current = testimonials[page];

  return (
    <section className="bg-gray-50 py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        <h2 className="text-3xl font-medium text-gray-900 mb-16">
          Learn why organizations use Docs
        </h2>

        <div className="relative min-h-[500px] flex items-center justify-center">
          {/* Controls */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-20 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all"
          >
            <ChevronLeft size={24} className="text-gray-600" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-0 z-20 p-3 rounded-full bg-white shadow-md hover:bg-gray-100 transition-all"
          >
            <ChevronRight size={24} className="text-gray-600" />
          </button>

          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full flex flex-col items-center"
            >
              {/* Branding Section with Image */}
              <div className="flex flex-col items-center mb-8">
                <h3 className="text-2xl font-bold text-cyan-800 mb-1">
                  {current.logo}
                </h3>
                {current.subLogoImg && (
                  <img
                    src={current.subLogoImg}
                    alt={current.subLogoText}
                    className="h-18 w-8 w-auto object-contain opacity-80"
                  />
                )}
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
                  {current.subLogoText}
                </p>
              </div>

              <blockquote className="text-2xl md:text-3xl text-gray-800 leading-snug mb-10 max-w-3xl italic">
                "{current.quote}"
              </blockquote>

              <div className="mb-12">
                <p className="font-bold text-gray-900">{current.author}, <span className="text-gray-500 text-sm">{current.role}</span></p>
                
              </div>

              <a
                href="#"
                className="px-8 py-2 border border-gray-300 rounded-full text-blue-600 font-medium hover:bg-blue-50 transition-colors"
              >
                Learn more
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              // Trigger the slide change on click
              onClick={() => {
                const direction = index > page ? 1 : -1;
                setPage([index, direction]);
              }}
              className="p-2 group focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  page === index
                    ? "bg-gray-800 w-6" // Active state
                    : "bg-gray-300 w-2 group-hover:bg-gray-400" // Inactive state
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;