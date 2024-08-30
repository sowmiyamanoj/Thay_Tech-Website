import React, { useState } from "react";
import { ChevronDownIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface SubMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ isOpen, onClose }) => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen((prev) => (prev === menu ? null : menu));
  };

  return (
    <div className={`flex flex-col flex-1 ${isOpen ? "block" : "hidden"} w-full`}>
      <div className="flex justify-between items-center p-4 border-b">
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-[#001442]">Services</h2>
        </div>
        <button onClick={onClose} className="text-[#00D1F9] focus:outline-none" aria-label="Back">
          <ArrowLeftIcon className="w-8 h-8" />
        </button>
      </div>
      <div className="flex flex-col items-start p-4 mt-2 space-y-6 text-xl w-full">
        <a
          href="/services/it-consulting"
          className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
        >
          <span className="flex-grow">IT Consulting</span>
        </a>
        <a
          href="/services/cloud-support"
          className="flex items-center py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded shadow-sm"
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
        >
          <span className="flex-grow">Cloud Support</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("cloud-support");
            }}
            className="text-[#00D1F9] hover:text-[#001442] transition-colors"
          >
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
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
        >
          <span className="flex-grow">Outsourcing</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("outsourcing");
            }}
            className="text-[#00D1F9] hover:text-[#001442] transition-colors"
          >
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
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
        >
          <span className="flex-grow">Development</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("development");
            }}
            className="text-[#00D1F9] hover:text-[#001442] transition-colors"
          >
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
          style={{ boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)" }}
        >
          <span className="flex-grow">Software Training</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown("software-training");
            }}
            className="text-[#00D1F9] hover:text-[#001442] transition-colors"
          >
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
      {/* Promotional content */}
      <div className="flex flex-col items-center p-4 mt-6 bg-[#F2F9F9] rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold text-[#001442] mb-2">Limited Time Offer!</h3>
        <p className="text-lg text-[#001442] mb-4">
          Get 20% off on all our services until the end of this month. Don't miss out!
        </p>
        <a
          href="/promotions"
          className="bg-[#00D1F9] text-white py-2 px-4 rounded-lg font-medium hover:bg-[#00A3C4] transition-colors"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default SubMenu;
