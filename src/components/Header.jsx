import React, { useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#E3B577] font-semibold"
      : "text-[#C7B299] hover:text-[#E3B577]";

  const closeMenu = () => setOpen(false);

  const links = (
    <>
      <NavLink to="/" onClick={closeMenu} className={navLinkClass}>
        Home
      </NavLink>
      <NavLink to="about" onClick={closeMenu} className={navLinkClass}>
        About
      </NavLink>
      <NavLink to="products" onClick={closeMenu} className={navLinkClass}>
        Popular Products
      </NavLink>
      <NavLink to="/addCoffee" onClick={closeMenu} className={navLinkClass}>
        Add Product
      </NavLink>
      <NavLink to="/testimonial" onClick={closeMenu} className={navLinkClass}>
        Testimonial
      </NavLink>
      <NavLink to="/gallery" onClick={closeMenu} className={navLinkClass}>
        Gallery
      </NavLink>
      <NavLink to="/users" onClick={closeMenu} className={navLinkClass}>
        Users
      </NavLink>
    </>
  );

  return (
    <header className="bg-[#0e0d0d] sticky top-0 z-50 shadow-md">
      <div className="lg:container mx-auto px-4 ">
        {/* NAVBAR */}
        <div className="navbar">
          {/* LEFT → Logo */}
          <div className="navbar-start">
            <Link to="/" className="flex items-center gap-2">
              <GiCoffeeCup className="text-4xl text-[#E3B577]" />
              <h2 className="text-2xl font-bold text-[#E3B577]">Casci Ami</h2>
            </Link>
          </div>

          {/* CENTER → Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-6">{links}</ul>
          </div>

          {/* RIGHT → Buttons / Menu Icon */}
          <div className="navbar-end flex items-center gap-3">
            {/* Desktop Sign In */}
            <Link
              to="signin"
              className="hidden lg:block py-2 px-5 rounded border-none bg-[#E3B577] text-[#331A15] hover:bg-[#d4a764] font-bold"
            >
              Sign In
            </Link>

            {/* Mobile / Tab Menu Toggle */}
            <button
              className="lg:hidden text-[#E3B577] text-3xl"
              onClick={() => setOpen(!open)}
              aria-label="Toggle Menu"
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* MOBILE / TAB MENU */}
        {open && (
          <div className="lg:hidden bg-black border-t border-[#333]">
            <ul className="flex flex-col gap-4 p-5">
              {links}

              {/* Mobile / Tab Sign In */}
              <Link
                to="signin"
                className="lg:hidden btn w-full border-none bg-[#E3B577] text-[#331A15] hover:bg-[#d4a764] font-bold mt-3"
              >
                Sign In
              </Link>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
