import React from 'react';
import { 
  Twitter, Youtube, Linkedin, Instagram, Facebook, 
  Search, Globe, HelpCircle, MessageSquare 
} from 'lucide-react';

const footerData = {
  "Included applications": ["Gmail", "Meet", "Chat", "Calendar", "Drive", "Docs", "Sheets", "Slides", "Forms", "Sites", "Keep", "Apps Script"],
  "Security and management": ["Admin", "Endpoint", "Vault", "Work Insights"],
  "Solutions": ["New Business", "Small Business", "Enterprise", "Retail", "Manufacturing", "Professional Services", "Technology", "Healthcare", "Government", "Education", "Nonprofits", "Artificial Intelligence"],
  "Pricing": ["Compare pricing plans"],
  "Add-ons": ["Meet hardware", "Google Voice", "AppSheet"],
  "Resources": ["Working remotely", "Security", "Customer Stories", "FAQs", "Partners", "Marketplace", "Integrations", "Training & Certification", "Refer Google Workspace"],
  "Learning and support": ["Admin Help", "Setup and Deployment Center", "Learning Center for Users", "Forums for Admins", "Google Workspace Dashboard", "What's New in Google Workspace", "Find a Google Workspace Partner", "Join the community of IT Admins", "Press"],
  "More from Google": ["Google Cloud", "Google Domains", "Chrome Enterprise", "Google Business Solutions", "Google Ads", "Business Messages"]
};

const GoogleFooter = () => {
  return (
    <footer className="bg-[#F8F9FA] pt-12 pb-8 px-6 font-sans text-[#5F6368]">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Bar: Social & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-8 mb-12 gap-6">
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium">Follow our <a href="#" className="underline">Blog</a></span>
            <div className="h-4 w-[1px] bg-gray-400 mx-2 hidden md:block" />
            <div className="flex gap-5">
              <Twitter size={20} className="cursor-pointer hover:text-black" />
              <Youtube size={20} className="cursor-pointer hover:text-black" />
              <Linkedin size={20} className="cursor-pointer hover:text-black" />
              <Instagram size={20} className="cursor-pointer hover:text-black" />
              <Facebook size={20} className="cursor-pointer hover:text-black" />
              <span className="font-bold text-lg cursor-pointer hover:text-black">d</span>
            </div>
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search this site" 
              className="w-full bg-[#EBEEF1] py-2 pl-10 pr-4 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16">
          {Object.entries(footerData).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <h4 className="text-gray-900 font-medium text-sm mb-1">{category}</h4>
              {links.map(link => (
                <a key={link} href="#" className="text-xs hover:text-black transition-colors">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Bar: Brand & Legal */}
        <div className="border-t border-gray-300 pt-8 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4">
            <span className="text-2xl font-semibold text-gray-600 mr-4">Google</span>
            {["Privacy", "Terms", "About Google", "Google Products", "Help"].map(item => (
              <a key={item} href="#" className="text-xs font-medium hover:text-black">{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-8 text-xs font-medium">
            <a href="#" className="flex items-center gap-2 hover:text-black">
              <HelpCircle size={16} /> Help
            </a>
            <div className="relative group cursor-pointer flex items-center gap-2 hover:text-black">
              <Globe size={16} />
              <span>English</span>
              <ChevronDown size={12} className="ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-6 right-6 bg-[#4285F4] text-white p-4 rounded-full shadow-2xl hover:bg-blue-600 transition-all z-50">
        <MessageSquare size={24} fill="white" />
      </button>
    </footer>
  );
};

// Helper for the language dropdown arrow
const ChevronDown = ({ size, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6"/>
  </svg>
);

export default GoogleFooter;