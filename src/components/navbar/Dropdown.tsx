import React from "react";
import { Transition } from "@headlessui/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface DropdownProps {
  title: string;
  items: Array<{ label: string; href: string }>;
  isOpen: boolean;
  onToggle: () => void;
  onBack?: () => void;
  parentMenu?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  isOpen,
  onToggle,
  onBack,
  parentMenu = false,
}) => {
  return (
    <div className="w-full">
      {parentMenu && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onToggle();
          }}
          className="flex items-center justify-between py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded"
        >
          <span>{title}</span>
          <ArrowRightIcon className="w-4 h-4" />
        </a>
      )}

      <Transition
        show={isOpen}
        enter="animation-slideRightAndFade"
        enterFrom="opacity-0 translate-x-full"
        enterTo="opacity-100 translate-x-0"
        leave="animation-slideLeftAndFade"
        leaveFrom="opacity-100 translate-x-0"
        leaveTo="opacity-0 translate-x-full"
      >
        <div className="flex flex-col mt-2 space-y-6 text-xl w-full p-4">
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center text-[#00D1F9] mb-4"
            >
              <ArrowLeftIcon className="w-6 h-6 mr-2" />
              Back
            </button>
          )}
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-between py-2 px-3 font-medium text-[#001442] hover:bg-[#E0F7FF] hover:text-[#00D1F9] transition-colors w-full rounded"
            >
              {item.label}
            </a>
          ))}
        </div>
      </Transition>
    </div>
  );
};

export default Dropdown;
