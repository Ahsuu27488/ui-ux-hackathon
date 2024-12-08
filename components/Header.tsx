"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="bg-[#FFFFFF] shadow-md box-border sticky top-0 z-50">
      <div className="flex items-center gap-40 justify-between px-4 md:mx-14 py-5">
        <div className="flex items-center gap-2">
          <Link href="/">
            <img src="/images/logo.png" alt="Logo" className="w-8 md:w-10" />
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold font-montserrat">
            <Link href="/">Furniro</Link>
          </h1>
        </div>

        <div className="hidden md:flex justify-between items-center flex-1">
          <ul className="flex gap-6 md:gap-20 font-poppins text-sm md:text-[18px] font-medium items-center">
            <li className="cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/contact">About</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/contact"> Contact</Link>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-4 md:gap-12 sm:gap-1">
            <Link href="/contact">
              <img
                src="/images/icons/help.png"
                alt="help"
                className="w-5 md:w-6"
              />
            </Link>
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
            <button onClick={toggleCart}>
              <Link href="/cart">
                <img
                  src="/images/icons/cart.png"
                  alt="cart"
                  className="w-5 md:w-6"
                />
              </Link>
            </button>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className={`block md:hidden focus:outline-none transition-all ease-in-out ${
            isMenuOpen ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          <img src="/images/icons/hamburger.png" alt="menu" className="w-6" />
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 transition-all ease-in-out scroll-smooth">
            <ul className="flex flex-col items-center gap-4 py-4 font-poppins text-sm font-medium">
              <li className="cursor-pointer">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">
                <Link href="/contact"> Contact</Link>
              </li>
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
              <button onClick={toggleCart}>
                <img
                  src="/images/icons/cart.png"
                  alt="cart"
                  className="w-5 md:w-6"
                />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-60">
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-white w-4/5 md:w-1/3 rounded-lg shadow-lg p-4">
            <button
              onClick={toggleCart}
              className="absolute top-2 right-2 text-xl font-bold text-gray-500"
            >
              ✖
            </button>
            <h3 className="text-xl font-bold mb-4">Your Cart</h3>
            {/* Add Cart Item Components here */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <p>Product 1</p>
                <p>$20.00</p>
              </div>
              <div className="flex justify-between">
                <p>Product 2</p>
                <p>$15.00</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>$35.00</span>
            </div>
            <div className="mt-4 flex justify-between gap-4">
              <button className="bg-yellow-500 text-white py-2 px-4 rounded-full">
                Checkout
              </button>
              <button
                onClick={toggleCart}
                className="bg-gray-300 text-black py-2 px-4 rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
