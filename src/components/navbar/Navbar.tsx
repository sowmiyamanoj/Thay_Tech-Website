import React from "react";
import LaptopNavbar from "./LaptopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <LaptopNavbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;
