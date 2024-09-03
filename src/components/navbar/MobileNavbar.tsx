import React, { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import SubMenu from "./SubMenu";
import { Transition } from "@headlessui/react";
import { HomeIcon, UserIcon, CogIcon, UsersIcon, PhoneIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const openSubMenu = (menu: string) => {
    setIsSubMenuOpen(menu);
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(null);
  };

  const handleCloseOrBack = () => {
    if (isSubMenuOpen) {
      closeSubMenu();
    } else if (isMenuOpen) {
      toggleMenu();
    }
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#F2F9F9] fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex justify-between items-center p-4 bg-[#F2F9F9]">
        <NavbarLogo className="ml-4" />
        <button onClick={toggleMenu} className="text-[#00D1F9] focus:outline-none" aria-label="Toggle menu">
          <svg className={`w-8 h-8 transform transition-transform ${isMenuOpen ? "rotate-90" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <Transition
        show={isMenuOpen}
        enter="transition-transform duration-300 ease-in-out"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition-transform duration-300 ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed inset-0 bg-white flex flex-col w-full">
          <div className={`flex flex-col flex-1 ${isSubMenuOpen ? "hidden" : "block"}`}>
            <div className="flex justify-between items-center p-4 border-b">
              <NavbarLogo className="ml-4" />
              <button onClick={handleCloseOrBack} className="text-[#00D1F9] focus:outline-none" aria-label="Close menu">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col space-y-6 text-xl w-full p-4">
              <li>
                <a
                  href="/services"
                  className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
                >
                  <HomeIcon className="w-6 h-6 text-[#001442] mr-3" />
                  <span className="flex-grow">Services</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      openSubMenu("services");
                    }}
                    className="text-[#00D1F9] hover:text-[#001442] transition-colors focus:outline-none"
                  >
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="flex items-center justify-between py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
                >
                  <UserIcon className="w-6 h-6 text-[#001442] mr-3" />
                  <span className="flex-grow">About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="/technology"
                  className="flex items-center justify-between py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
                >
                  <CogIcon className="w-6 h-6 text-[#001442] mr-3" />
                  <span className="flex-grow">Technology</span>
                </a>
              </li>
              <li>
                <a
                  href="/clients"
                  className="flex items-center justify-between py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
                >
                  <UsersIcon className="w-6 h-6 text-[#001442] mr-3" />
                  <span className="flex-grow">Clients</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="flex items-center justify-between py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
                >
                  <PhoneIcon className="w-6 h-6 text-[#001442] mr-3" />
                  <span className="flex-grow">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          <SubMenu
            isOpen={isSubMenuOpen === "services"}
            onClose={handleCloseOrBack}
          />
        </div>
      </Transition>
    </nav>
  );
};

export default MobileNavbar;
