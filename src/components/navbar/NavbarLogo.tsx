import React from "react";

interface NavbarLogoProps {
  className?: string; // Add className to the props interface
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ className }) => (
  <a href="/" className={`flex items-center space-x-3 rtl:space-x-reverse ${className}`}>
    <img src="/logo/Thay_Tech-Logo.png" className="h-10" alt="Thay Technologies" />
  </a>
);

export default NavbarLogo;
