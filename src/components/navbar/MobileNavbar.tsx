import React, { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import { Transition } from "@headlessui/react";
import { HomeIcon, UserIcon, CogIcon, UsersIcon, PhoneIcon, ArrowRightIcon, ArrowLeftIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const openSubMenu = (menu: string) => {
    setIsSubMenuOpen(menu);
    setDropdownOpen(null); // Close all dropdowns when opening a new submenu
  };

  const closeSubMenu = () => {
    setIsSubMenuOpen(null);
    setDropdownOpen(null);
  };

  const handleCloseOrBack = () => {
    if (isSubMenuOpen) {
      closeSubMenu();
    } else if (isMenuOpen) {
      toggleMenu();
    }
  };

  const toggleDropdown = (menu: string) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
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
        leaveTo="-translate-x-full">
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
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }} // Box shadow applied here
                >
                  <HomeIcon className="w-6 h-6 text-[#001442] mr-3" />
                  <span className="flex-grow">Services</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      openSubMenu("services");
                    }}
                    className="text-[#00D1F9] hover:text-[#001442] transition-colors focus:outline-none">
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="flex items-center justify-between py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }} // Box shadow applied here
                >
                  <UserIcon className="w-6 h-6 text-[#001442] mr-3" />
                  <span className="flex-grow">About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="/technology"
                  className="flex items-center justify-between py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }} // Box shadow applied here
                >
                  <CogIcon className="w-6 h-6 text-[#001442] mr-3" />
                  <span className="flex-grow">Technology</span>
                </a>
              </li>
              <li>
                <a
                  href="/clients"
                  className="flex items-center justify-between py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }} // Box shadow applied here
                >
                  <UsersIcon className="w-6 h-6 text-[#001442] mr-3" />
                  <span className="flex-grow">Clients</span>
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="flex items-center justify-between py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }} // Box shadow applied here
                >
                  <PhoneIcon className="w-6 h-6 text-[#001442] mr-3" />
                  <span className="flex-grow">Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div className={`flex flex-col flex-1 ${isSubMenuOpen ? "block" : "hidden"} w-full`}>
            <div className="flex justify-between items-center p-4 border-b">
              <NavbarLogo className="ml-4" />
              <button onClick={handleCloseOrBack} className="text-[#00D1F9] focus:outline-none" aria-label="Back">
                <ArrowLeftIcon className="w-8 h-8" />
              </button>
            </div>
            {isSubMenuOpen === "services" && (
              <div className="flex flex-col items-start p-4 mt-2 space-y-6 text-xl w-full">
                <a
                  href="/services/it-consulting"
                  className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }} // Box shadow applied here
                >
                  <span className="flex-grow">IT Consulting</span>
                </a>
                <a
                  href="/services/cloud-support"
                  className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }} // Box shadow applied here
                >
                  <span className="flex-grow">Cloud Support</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("cloud-support");
                    }}
                    className="text-[#00D1F9] hover:text-[#001442] transition-colors">
                    <ChevronDownIcon className={`w-4 h-4 transform ${dropdownOpen === "cloud-support" ? "rotate-180" : ""}`} />
                  </button>
                </a>
                {dropdownOpen === "cloud-support" && (
                  <div className="flex flex-col mt-2 space-y-4 text-lg pl-6 w-full border-l-2 border-[#00D1F9]">
                    <a href="/services/cloud-support/application-support" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Application Support
                    </a>
                    <a href="/services/cloud-support/database-support" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Database Support
                    </a>
                    <a href="/services/cloud-support/operating-system" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Operating System
                    </a>
                    <a href="/services/cloud-support/network-support" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Network Support
                    </a>
                  </div>
                )}
                <a
                  href="/services/outsourcing"
                  className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }} // Box shadow applied here
                >
                  <span className="flex-grow">Outsourcing</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("outsourcing");
                    }}
                    className="text-[#00D1F9] hover:text-[#001442] transition-colors">
                    <ChevronDownIcon className={`w-4 h-4 transform ${dropdownOpen === "outsourcing" ? "rotate-180" : ""}`} />
                  </button>
                </a>
                {dropdownOpen === "outsourcing" && (
                  <div className="flex flex-col mt-2 space-y-4 text-lg pl-6 w-full border-l-2 border-[#00D1F9]">
                    <a href="/services/outsourcing/infrastructure" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Infrastructure Outsourcing
                    </a>
                    <a href="/services/outsourcing/staff" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Staff Outsourcing
                    </a>
                  </div>
                )}
                <a
                  href="/services/development"
                  className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }} // Box shadow applied here
                >
                  <span className="flex-grow">Development</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("development");
                    }}
                    className="text-[#00D1F9] hover:text-[#001442] transition-colors">
                    <ChevronDownIcon className={`w-4 h-4 transform ${dropdownOpen === "development" ? "rotate-180" : ""}`} />
                  </button>
                </a>
                {dropdownOpen === "development" && (
                  <div className="flex flex-col mt-2 space-y-4 text-lg pl-6 w-full border-l-2 border-[#00D1F9]">
                    <a href="/services/development/software" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Software Development
                    </a>
                    <a href="/services/development/product" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Product Development
                    </a>
                  </div>
                )}
                <a
                  href="/services/software-training"
                  className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
                  style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }} // Box shadow applied here
                >
                  <span className="flex-grow">Software Training</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleDropdown("software-training");
                    }}
                    className="text-[#00D1F9] hover:text-[#001442] transition-colors">
                    <ChevronDownIcon className={`w-4 h-4 transform ${dropdownOpen === "software-training" ? "rotate-180" : ""}`} />
                  </button>
                </a>
                {dropdownOpen === "software-training" && (
                  <div className="flex flex-col mt-2 space-y-4 text-lg pl-6 w-full border-l-2 border-[#00D1F9]">
                    <a href="/services/software-training/corporate" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Corporate Training
                    </a>
                    <a href="/services/software-training/on-job" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      On-Job Training
                    </a>
                    <a href="/services/software-training/project" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Project Training
                    </a>
                    <a href="/services/software-training/online-offline" className="text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors rounded py-2 px-3">
                      Online & Offline Training
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default MobileNavbar;
