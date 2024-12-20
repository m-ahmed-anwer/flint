"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="block lg:hidden focus:outline-none ">
        <RxHamburgerMenu onClick={toggleMenu} size={20} />
      </div>

      {menuOpen && (
        <div id="hamburger-menu">
          <ul className="hamburger-menu-ul">
            <li>
              <Link href={"/"}>Find a Job</Link>
            </li>
            <li>
              <Link href={"/"}>Companies</Link>
            </li>
            <li>
              <Link href={"/"}>Post a Job</Link>
            </li>
            <li>
              <Link href={"/"} className="text-green-500">
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
