import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronsUpDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import NewsletterSignup from './NewsLetter';
import FooterData from './FooterData';

const faqData = [
  {
    question: "How much does Google Docs cost?",
    answer: (
      <>
        <p className="mb-4">Anyone with a Google Account can create in Docs.</p>
        <p>
          However, some features such as joining a Meet call from your documents are only available on Google Workspace plans. See <a href="#" className="text-blue-600 underline">plans and pricing for organizations</a> or <a href="#" className="text-blue-600 underline">Google Workspace Individual</a>.
        </p>
      </>
    )
  },
  {
    question: "Can I convert other documents to Google Docs?",
    answer: "Yes. You can upload and convert existing Microsoft Word, PDF, and text files into Google Docs format directly from Drive or within Docs."
  },
  {
    question: "How does co-editing work?",
    answer: "Multiple people can work on the same document at the same time. You can see their cursor movements and edits in real-time, and use the built-in chat or comments to communicate."
  }
];

const FAQSection = () => {
  // Track open items in an array to allow multiple items to be open at once
  const [openIndices, setOpenIndices] = useState([0]); // Default first one open

  const toggleItem = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  const expandAll = () => {
    if (openIndices.length === faqData.length) {
      setOpenIndices([]); // Collapse all if all are open
    } else {
      setOpenIndices(faqData.map((_, i) => i)); // Open all
    }
  };

  return (
    <div className='w-full'>

    <section className="max-w-7xl mx-auto py-20 px-6 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-medium text-gray-900 mb-4">Curious about Google Docs?</h2>
        <p className="text-gray-600">Take a look at our FAQs to learn more.</p>
      </div>

      {/* Expand All Control */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={expandAll}
          className="flex items-center gap-2 text-blue-600 font-medium hover:bg-blue-50 px-3 py-1 rounded transition-colors text-sm"
        >
          {openIndices.length === faqData.length ? 'Collapse all' : 'Expand all'}
          <ChevronsUpDown size={16} />
        </button>
      </div>

      <div className="border-t border-gray-200">
        {faqData.map((item, index) => {
          const isOpen = openIndices.includes(index);
          
          return (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center py-6 text-left hover:bg-gray-50 transition-colors group"
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                <span className={`text-blue-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown size={24} />
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-gray-600 leading-relaxed pr-12">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
      <NewsletterSignup />
      <FooterData />
    </div>
  );
};

export default FAQSection;