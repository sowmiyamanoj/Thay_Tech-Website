import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 z-40 bg-gray-900 bg-opacity-75 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-gray-700"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            <li><a href="#home" className="text-lg font-medium text-gray-900 hover:text-gray-700">Home</a></li>
            <li><a href="#about" className="text-lg font-medium text-gray-900 hover:text-gray-700">About</a></li>
            <li><a href="#services" className="text-lg font-medium text-gray-900 hover:text-gray-700">Services</a></li>
            <li><a href="#contact" className="text-lg font-medium text-gray-900 hover:text-gray-700">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
