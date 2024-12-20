import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" py-6 px-5 font-poppins ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 md:space-x-20">
        <div>
          <div className="flex items-center mb-4">
            <Image src={Logo} alt="TechStore Logo" className="h-10 w-14 mr-2" />
            <span className=" text-2xl font-bold">FLlNT.</span>
          </div>
          <p className=" text-gray-400 text-sm mb-2">
            Find your dream job with Flint
          </p>
          <p className=" text-gray-400 text-sm mb-2">flint@gmail.com</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/">Jobs</Link>
            </li>
            <li>
              <Link href="/">Profile</Link>
            </li>
            <li>
              <Link href="/">Plans</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className=" font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Support</Link>
            </li>
            <li>
              <Link href="/">Terms & Conditions</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className=" font-semibold mb-4">Follow Us</h4>
          <ul
            className=" flex justify-start
           items-center space-x-4 text-sm "
          >
            <li className="hover:-translate-y-2 duration-500 ease-in-out">
              <Link href="/">
                <AiFillTwitterCircle size={20} color="gray" />
              </Link>
            </li>
            <li className="hover:-translate-y-2 duration-500 ease-in-out">
              <Link href="/">
                <FaFacebook size={20} color="gray" />
              </Link>
            </li>
            <li className="hover:-translate-y-2 duration-500 ease-in-out">
              <Link href="/">
                <RiInstagramFill size={20} color="gray" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t  mx-10 mt-10"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-5 text-sm text-gray-400">
        <p>© 2024 Flint. All rights reserved.</p>
        <p>
          <Link href="/" className=" mr-2">
            Privacy Policy
          </Link>
          <Link href="/">Cookies</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
