"use client";

import { Avatar, AvatarFallback } from "./ui/avatar";
import { useState } from "react";
import Link from "next/link";
import { IoHelp, IoSettingsOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { PiSignOut } from "react-icons/pi";

const AvtarDropDownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAvtarClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <Avatar className="size-10 cursor-pointer" onClick={handleAvtarClick}>
        <AvatarFallback>MA</AvatarFallback>
      </Avatar>

      {isOpen && (
        <div className="avatarmenu-dropdown">
          <div className="flex-center gap-3 p-4 border-b border-gray-200">
            <Avatar className="size-8">
              <AvatarFallback>AV</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Mohamed Asjedh</p>
            </div>
          </div>
          <ul className="text-sm font-light">
            <li className="avatarmenu-dropdown-item">
              <IoSettingsOutline size={18} />
              <Link href="/" className="avatarmenu-dropdown-link">
                Profile Settings
              </Link>
            </li>
            <li className="avatarmenu-dropdown-item">
              <IoHelp size={18} />
              <Link href="/" className="avatarmenu-dropdown-link">
                Help Center
              </Link>
            </li>
            <li className="avatarmenu-dropdown-item border-b">
              <BsCurrencyDollar size={18} />
              <Link href="/" className="avatarmenu-dropdown-link">
                Upgrade Plan
              </Link>
            </li>
            <li className="avatarmenu-dropdown-item">
              <PiSignOut size={18} />
              <Link href="/" className="avatarmenu-dropdown-link  text-red-600">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvtarDropDownMenu;
