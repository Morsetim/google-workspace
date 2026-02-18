import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import SplitButton from './Reusable/SplitButton';

const GoogleWorkspaceNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Solutions', href: '#' },
    { name: 'Products', href: '#', hasDropdown: true },
    { name: 'Industries', href: '#' },
    { name: 'AI', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Resources', href: '#' },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm w-full sticky top-0 z-50">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Section */}
          <div className="flex items-center">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 mr-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl md:text-2xl font-normal">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
                <span className="text-gray-600 ml-1">Workspace</span>
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-700 hover:text-blue-600 px-1 py-2 text-sm font-medium flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </a>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Hidden SplitButton on very small screens to prevent overlap */}
            <div className="hidden sm:block">
              <SplitButton label="Try Docs" />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md md:rounded-full px-4 md:px-6 py-2 text-sm font-medium whitespace-nowrap">
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Drawer) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
  <div className="px-2 pt-2 pb-3 space-y-1">
    {navLinks.map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 border-b border-gray-50"
      >
        {/* Changed item.name to link.name below */}
        {link.name} 
      </a>
    ))}
    <div className="p-4 sm:hidden">
      <SplitButton label="Try Docs for work" />
    </div>
  </div>
</div>
    </nav>
  );
};

export default GoogleWorkspaceNavbar;