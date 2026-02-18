import React from 'react';

const MiniNavbar = ({ activeSection }) => {
  const navItems = [
    { name: 'Gemini', id: 'gemini-in-docs' }, // Shortened for mobile space
    { name: 'Create', id: 'create' },
    { name: 'Collaborate', id: 'collaborate' },
    { name: 'Security', id: 'security' },
    { name: 'Customers', id: 'customers' },
    { name: 'FAQs', id: 'faqs' },
  ];

  return (
    <div className="flex justify-center px-4 w-full">
      <nav className="flex items-center bg-white px-2 md:px-8 py-3 md:py-4 rounded-full shadow-lg border border-gray-100 transition-all max-w-full overflow-hidden">
        {/* scrollbar-hide utility prevents the ugly scrollbar from showing */}
        <ul className="flex items-center space-x-6 md:space-x-12 overflow-x-auto no-scrollbar scroll-smooth px-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="flex-shrink-0">
                <a
                  href={`#${item.id}`}
                  className={`text-sm md:text-lg transition-all duration-300 relative py-1 block ${
                    isActive 
                      ? 'text-blue-600 font-bold scale-105' 
                      : 'text-gray-500 hover:text-black font-medium'
                  }`}
                >
                  {item.name}
                  {/* Underline indicator */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0'
                    }`} 
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default MiniNavbar;