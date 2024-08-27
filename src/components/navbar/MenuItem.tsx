// MenuItem.tsx
import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  label: string;
  href: string;
  showIcon?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, href, showIcon = true }) => {
  return (
    <div className="flex items-center space-x-2">
      {showIcon && (
        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      )}
      <Link to={href} className="text-gray-900 hover:text-blue-600">
        {label}
      </Link>
    </div>
  );
};

export default MenuItem;
