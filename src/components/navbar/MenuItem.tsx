import React from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
  label: string;
  href: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
  textColor?: string; // Add textColor prop
}

const MenuItem: React.FC<MenuItemProps> = ({
  label,
  href,
  showIcon = true,
  icon,
  onClick,
  textColor = "text-[#001442]" // Default color
}) => {
  return (
    <div className="flex items-center space-x-3">
      {showIcon && icon && (
        <span className={`flex-shrink-0 ${textColor}`}>{icon}</span> // Apply textColor to icon
      )}
      <Link
        to={href}
        className={`text-base hover:text-[#00D1F9] ${textColor}`} // Apply textColor and hover color
        onClick={onClick}
      >
        {label}
      </Link>
    </div>
  );
};

export default MenuItem;
