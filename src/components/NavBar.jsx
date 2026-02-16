import React from 'react';
import { ChevronDown } from 'lucide-react';
import SplitButton from './Reusable/SplitButton';


const GoogleWorkspaceNavbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm pb-2 w-full ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between h-16 ">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl ">
                <span className="text-blue-500">G</span>
                <span className="text-red-500">o</span>
                <span className="text-yellow-500">o</span>
                <span className="text-blue-500">g</span>
                <span className="text-green-500">l</span>
                <span className="text-red-500">e</span>
                <span className="text-gray-600 ml-1">Workspace</span>
              </span>
            </div>

            <div className="hidden md:ml-10 md:flex md:items-center md:space-x-8">
              <a
                href="#"
                className="text-slate-950 hover:text-gray-900 px-1 pt-1 font-thin"
              >
                Solutions
              </a>
              <div className=" flex flex-col items-center justify-center">
                <a
                  href="#"
                  className="text-slate-950 hover:text-gray-900 px-1 pt-7 font-thin flex items-center"
                >
                  Products
                </a>
                <span className="">
                  <ChevronDown />
                </span>
              </div>
              <a
                href="#"
                className="text-slate-950 hover:text-gray-900 px-1 pt-1 font-thin"
              >
                Industries
              </a>
              <a
                href="#"
                className="text-slate-950 hover:text-gray-900 px-1 pt-1 font-thin"
              >
                AI
              </a>
              <a
                href="#"
                className="text-slate-950 hover:text-gray-900 px-1 pt-1 font-thin"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-slate-950 hover:text-gray-900 px-1 pt-1 font-thin"
              >
                Resources
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center">
            <SplitButton label="Try Docs for work" />
            <div className="ml-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-medium">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default GoogleWorkspaceNavbar;