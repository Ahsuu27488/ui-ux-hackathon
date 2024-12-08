"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#FFFFFF] shadow-md box-border sticky top-0 z-50 ">
      <div className="flex items-center gap-40 justify-between px-4 md:mx-14 py-5 ">
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Logo" className="w-8 md:w-10" />
          <h1 className="text-2xl md:text-4xl font-bold font-montserrat">
            Furniro
          </h1>
        </div>

        <div className="hidden md:flex justify-between items-center flex-1">
          <ul className="flex gap-6 md:gap-20 font-poppins text-sm md:text-[18px] font-medium items-center">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
          <div className="flex items-center justify-center gap-4 md:gap-12 sm:gap-1">
            <img
              src="/images/icons/help.png"
              alt="help"
              className="w-5 md:w-6"
            />
            <img
              src="/images/icons/search.png"
              alt="search"
              className="w-5 md:w-6"
            />
            <img
              src="/images/icons/like.png"
              alt="wishlist"
              className="w-5 md:w-6"
            />
            <img
              src="/images/icons/cart.png"
              alt="cart"
              className="w-5 md:w-6"
            />
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="block md:hidden focus:outline-none transition-all ease-in-out scroll-smooth"
        >
          <img src="/images/icons/hamburger.png" alt="menu" className="w-6" />
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 transition-all ease-in-out scroll-smooth">
            <ul className="flex flex-col items-center gap-4 py-4 font-poppins text-sm font-medium">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Contact</li>
            </ul>

            <div className="flex items-center justify-center gap-8 pb-5 md:gap-12 sm:gap-1">
              <img
                src="/images/icons/help.png"
                alt="help"
                className="w-5 md:w-6"
              />
              <img
                src="/images/icons/search.png"
                alt="search"
                className="w-5 md:w-6"
              />
              <img
                src="/images/icons/like.png"
                alt="wishlist"
                className="w-5 md:w-6"
              />
              <img
                src="/images/icons/cart.png"
                alt="cart"
                className="w-5 md:w-6"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
