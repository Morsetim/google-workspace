
const SplitButton = ({ label, onClick, className = "" }) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      <button 
        onClick={onClick}
        className="flex items-center bg-white border border-gray-300 rounded-full text-blue-600 hover:bg-gray-50 transition-colors overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {/* Main Action Label */}
        <span className="pl-5 pr-3 py-2 text-sm font-medium">
          {label}
        </span>
        
        {/* Vertical Divider & Arrow */}
        <span className="border-l border-gray-300 pl-2 pr-4 py-2 flex items-center h-full">
          <span className="text-[10px] transform group-hover:translate-y-0.5 transition-transform">
            ▼
          </span>
        </span>
      </button>
      
      {/* Dropdown slot - can be passed as children if needed */}
    </div>
  );
};

export default SplitButton;