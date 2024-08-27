import React, { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaCloud,
  FaExternalLinkAlt,
  FaBook,
  FaCogs,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      megaMenuRef.current &&
      !megaMenuRef.current.contains(event.target as Node) &&
      servicesButtonRef.current &&
      !servicesButtonRef.current.contains(event.target as Node)
    ) {
      setIsMegaMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsMegaMenuOpen(false);
    }, 300); // Adjust the delay as needed
    setTimeoutId(id);
  };

  return (
    <nav
      className="bg-[var(--navbar-background)] border-[var(--box-shadow-color)] relative"
      style={{ boxShadow: "0 4px 8px var(--box-shadow-color)" }}
    >
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/logo/Thay_Tech-Logo.png"
            className="h-10"
            alt="Thay Technologies"
          />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Thay Technologies
          </span> */}
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mega-menu-full-image"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "flex" : "hidden"
          }`}
          id="mega-menu-full-image"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li className="w-full md:w-1/4">
              <button
                ref={servicesButtonRef}
                id="mega-menu-full-cta-image-button"
                className="flex items-center justify-between w-full py-2 px-3 font-medium heading border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 navbar-hover-text md:p-0"
                onClick={toggleMegaMenu}
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                // onMouseLeave={handleMouseLeave}
              >
                Services
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li className="w-full md:w-1/4 hidden md:block">
              <a
                href="#"
                className="block py-2 px-3 heading border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 navbar-hover-text md:p-0 whitespace-nowrap"
              >
                About
              </a>
            </li>
            <li className="w-full md:w-1/4">
              <a
                href="#"
                className="block py-2 px-3 heading border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 navbar-hover-text md:p-0"
              >
                Technology
              </a>
            </li>
            <li className="w-full md:w-1/4 hidden md:block">
              <a
                href="#"
                className="block py-2 px-3 heading border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 navbar-hover-text md:p-0"
              >
                Clients
              </a>
            </li>
            <li className="w-full md:w-1/4 hidden md:block">
              <a
                href="#"
                className="block py-2 px-3 heading border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 navbar-hover-text md:p-0 whitespace-nowrap"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={megaMenuRef}
        className={`absolute top-full left-1/2 transform -translate-x-1/2 w-3/4 border-gray-200 shadow-lg border-y ${
          isMegaMenuOpen ? "block" : "hidden"
        } z-50 rounded-lg`}
        style={{
          marginTop: "5px",
          paddingTop: "0px",
          backgroundColor: "#f0f4f8" /* Popular gray with a blue finish */,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)" /* Shadow only below */,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-wrap max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500">
          <div className="w-full md:w-1/3 space-y-4">
            <a
              href="/development"
              className="flex items-center space-x-2 group navbar-hover-text"
            >
              <h3 className="text-lg font-medium flex items-center group-hover:text-[#00D1F9]">
                <FaCode className="mr-2 text-gray-500 group-hover:text-[#00D1F9]" />{" "}
                Development
              </h3>
            </a>
            <ul className="space-y-2">
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9]"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="/softwaredevelopment"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Software development
                </a>
              </li>
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9]"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="/productdevelopment"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Product development
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 space-y-4">
            <a
              href="/outsourcing"
              className="flex items-center space-x-2 group"
            >
              <h3 className="text-lg font-medium text-gray-900 flex items-center group-hover:text-[#00D1F9] transition-colors duration-200">
                <FaCogs className="mr-2 glow-icon" /> Outsourcing
              </h3>
            </a>
            <ul className="space-y-2">
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Infrastructure Outsourcing
                </a>
              </li>
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Staff Outsourcing
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 space-y-4">
            <a
              href="/it-consulting"
              className="flex items-center space-x-2 group"
            >
              <h3 className="text-lg font-medium text-gray-900 flex items-center group-hover:text-[#00D1F9] transition-colors duration-200">
                <FaExternalLinkAlt className="mr-2 glow-icon" /> IT consulting
              </h3>
            </a>
            <ul className="space-y-2">
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Tech Integration
                </a>
              </li>
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Security Solutions
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 space-y-4 mt-8">
            <a
              href="/cloud-support"
              className="flex items-center space-x-2 group"
            >
              <h3 className="text-lg font-medium text-gray-900 flex items-center group-hover:text-[#00D1F9] transition-colors duration-200">
                <FaCloud className="mr-2 glow-icon" /> Cloud Support
              </h3>
            </a>
            <ul className="space-y-2">
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Application support
                </a>
              </li>
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Database support
                </a>
              </li>
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Operating System
                </a>
              </li>
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Network support
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 space-y-4 mt-8">
            <a
              href="/software-training"
              className="flex items-center space-x-2 group"
            >
              <h3 className="text-lg font-medium text-gray-900 flex items-center group-hover:text-[#00D1F9] transition-colors duration-200">
                <FaBook className="mr-2 glow-icon" /> Software Training
              </h3>
            </a>
            <ul className="space-y-2">
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Corporate Training
                </a>
              </li>
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  On-Job Training
                </a>
              </li>
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Project Training
                </a>
              </li>
              <li className="flex items-center group">
                <svg
                  className="w-3 h-3 mr-2 text-gray-500 transition-transform duration-200 group-hover:text-[#00D1F9] glow-icon"
                  style={{ transform: "rotate(270deg)" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="text-gray-900 group-hover:text-[#00D1F9]"
                >
                  Online & Offline Training
                </a>
              </li>
            </ul>
          </div>

          <a
  className="relative w-full md:w-1/3 p-8 rounded-lg mt-8 overflow-hidden border-2 border-[var(--heading-text)]"
  style={{
    backgroundImage: "url(/development/img9.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  <div className="relative p-4 rounded-lg bg-opacity-70">
    <p className="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-[var(--heading-text)] text-xl">
      Unlock Your Business Potential
    </p>
    <button
      type="button"
      onClick={() => {
        window.location.href = "#";
      }}
      className="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white bg-[var(--heading-text)] rounded-lg hover:bg-[var(--primary-button-icon)] hover:text-[var(--heading-text)] focus:ring-4 focus:outline-none focus:ring-gray-700"
    >
      Learn More
      <svg
        className="w-3 h-3 ms-2 rtl:rotate-180"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </button>
  </div>
</a>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
