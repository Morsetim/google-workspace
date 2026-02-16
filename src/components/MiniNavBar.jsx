import React from 'react';

const MiniNavbar = ({ activeSection }) => {
  const navItems = [
    { name: 'Gemini in Docs', id: 'gemini-in-docs' },
    { name: 'Create', id: 'create' },
    { name: 'Collaborate', id: 'collaborate' },
    { name: 'Security', id: 'security' },
    { name: 'Customers', id: 'customers' },
    { name: 'FAQs', id: 'faqs' },
  ];

  return (
    <div className="flex justify-center">
      <nav className="flex items-center bg-white px-8 py-4 rounded-full shadow-lg border border-gray-100 transition-all">
        <ul className="flex items-center space-x-12">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-lg font-medium transition-all duration-300 hover:text-black relative ${
                    isActive ? 'text-black font-bold scale-105' : 'text-gray-400'
                  }`}
                >
                  {item.name}
                  {/* Subtle underline for the active item */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 rounded-full" />
                  )}
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