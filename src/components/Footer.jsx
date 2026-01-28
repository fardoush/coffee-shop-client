import React from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const link = (
    <>
      <Link
        to="about"
        className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300 cursor-pointer"
      >
        About
      </Link>
      <Link
        to="products"
        className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300 cursor-pointer"
      >
        Popular Products
      </Link>
      <Link
        to="addCoffee"
        className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300 cursor-pointer"
      >
        Add Products
      </Link>
      <Link
        to="users"
        className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300 cursor-pointer"
      >
        Users
      </Link>
    </>
  );
  return (
    <footer className="bg-[#181818] p-6 sm:p-10 text-[#D9B382] overflow-hidden">
      <div className="lg:container w-full mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
        {/* Column 1 */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center space-x-3 mb-5">
            <GiCoffeeCup className="text-5xl text-[#E3B577]" />
            <h2 className="text-3xl font-bold text-[#E3B577]">Casci Ami</h2>
          </Link>
          <p className="text-sm md:text-base text-[#C7B299]">
            Serving the best coffee in town since 2023.
            <br />
            Cozy ambiance & freshly brewed coffee every day.
          </p>
        </div>

        {/* Column 2 */}
        <div className="space-y-4 sm:space-y-6">
          <h6 className="font-bold mb-5 text-lg md:text-xl text-[#E3B577]">
            Services
          </h6>
          <ul className="space-y-2 text-sm md:text-base">
            <li className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300 cursor-pointer">
              Espresso Drinks
            </li>
            <li className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300 cursor-pointer">
              Cappuccino & Latte
            </li>
            <li className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300 cursor-pointer">
              Pastries & Snacks
            </li>
            <li className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300 cursor-pointer">
              Custom Orders
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-4 sm:space-y-6">
          <h6 className="font-bold mb-5 text-lg md:text-xl text-[#E3B577]">
            Company
          </h6>
          <ul className="space-y-2 text-sm md:text-base flex flex-col">
            {link}
          </ul>
        </div>

        {/* Column 4 */}
        <div className="space-y-4 sm:space-y-6 min-w-0">
          <h6 className="font-bold mb-5 text-lg md:text-xl text-[#E3B577]">
            Connect with Us
          </h6>
          <div className="flex space-x-4 mb-4 text-lg flex-wrap">
            <a
              href="#"
              className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-[#C7B299] hover:text-[#D9B382] transition-colors duration-300"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Newsletter Input */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 flex-wrap">
            <div className="flex-1 min-w-0">
              <label className="flex items-center border border-[#E3B577] rounded-l-md sm:rounded-l-md rounded-md sm:rounded-r-none bg-[#2a2a2a] w-full">
                <svg
                  className="h-5 w-5 opacity-50 text-[#D9B382] mx-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input
                  type="email"
                  placeholder="mail@site.com"
                  required
                  className="flex-1 bg-transparent text-[#D9B382] placeholder-[#C9A66B] focus:outline-none p-2 rounded-l-md sm:rounded-l-md rounded-md sm:rounded-r-none min-w-0"
                />
              </label>
              <div className="validator-hint hidden text-sm text-red-400 mt-1">
                Enter valid email address
              </div>
            </div>

            <button className="bg-[#E3B577] text-[#181818] font-semibold hover:bg-[#d4a960] transition-colors duration-300 px-4 py-2 rounded-r-md sm:rounded-r-md rounded-md sm:rounded-l-none flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 container mx-auto border-t border-[#C9A66B] opacity-30"></div>

      {/* Copyright */}
      <div className="mt-4 text-center text-sm md:text-base text-[#C9A66B]">
        &copy; {new Date().getFullYear()} Casci Ami Coffee Shop. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
