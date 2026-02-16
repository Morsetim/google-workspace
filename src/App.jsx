import React, { useState, useEffect } from 'react';
import FeatureSection from "./components/Collaborate"
import SmartCanvasList from "./components/Create"
import FAQSection from "./components/FaqData"
import GoogleDocsHero from "./components/GoogleDocs"
import MiniNavbar from "./components/MiniNavBar"
import GoogleWorkspaceNavbar from "./components/NavBar"
import TestimonialCarousel from "./components/Testimonial"
import DocsFeatureSection from "./components/VideoSection"
import './index.css'

function App() {
  const [activeSection, setActiveSection] = useState('gemini-in-docs');

  useEffect(() => {
    const sectionIds = ['gemini-in-docs', 'create', 'collaborate', 'security', 'customers', 'faqs'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -70% 0px', // Adjusts when the link highlights
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="sticky top-0 z-50 h-16 bg-white border-b"> 
        <GoogleWorkspaceNavbar />
      </div>

      <div id="gemini-in-docs"><GoogleDocsHero /></div>
      
      <div className="sticky top-20 z-40 my-4"> 
        <MiniNavbar activeSection={activeSection} />
      </div>

      <div id="create"><DocsFeatureSection /></div>
      <div id="collaborate"><SmartCanvasList /></div>
      <div id="security"><FeatureSection /></div>
      <div id="customers" className="space-y-4"><TestimonialCarousel /></div>
      <div id="faqs"><FAQSection /></div>
    </div>
  );
}

export default App;