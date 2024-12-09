"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="bg-[#FFFFFF] shadow-md box-border sticky top-0 z-50">
      <div className="flex items-center gap-40 justify-between px-4 md:mx-14 py-5">
        <div className="flex items-center gap-2">
          <Link href="/" onClick={closeMenu}>
            <Image
              width={50}
              height={33}
              src="/images/logo.png"
              alt="Logo"
              className="w-8 md:w-10"
            />
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold font-montserrat">
            <Link href="/" onClick={closeMenu}>
              Furniro
            </Link>
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
              <Link href="/blog">Blog</Link>
            </li>
            <li className="cursor-pointer">
              <a href="/contact"> Contact</a>
            </li>
          </ul>
          <div className="flex items-center justify-center gap-4 md:gap-12 sm:gap-1">
            <Link href="/contact">
              <Image
                width={24}
                height={20}
                src="/images/icons/help.png"
                alt="help"
                className="w-5 md:w-6"
              />
            </Link>
            <Image
              width={25}
              height={25}
              src="/images/icons/search.png"
              alt="search"
              className="w-5 md:w-6"
            />
            <Image
              width={26}
              height={24}
              src="/images/icons/like.png"
              alt="wishlist"
              className="w-5 md:w-6"
            />
            <button onClick={toggleCart}>
              <Image
                width={26}
                height={23}
                src="/images/icons/cart.png"
                alt="cart"
                className="w-5 md:w-6"
              />
            </button>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className={`block md:hidden focus:outline-none transition-all ease-in-out ${
            isMenuOpen ? "animate-slideIn" : "animate-slideOut"
          }`}
        >
          <Image
            width={512}
            height={512}
            src="/images/icons/hamburger.png"
            alt="menu"
            className="w-6"
          />
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 transition-all ease-in-out scroll-smooth">
            <ul className="flex flex-col items-center gap-4 py-4 font-poppins text-sm font-medium">
              <li className="cursor-pointer" onClick={closeMenu}>
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer" onClick={closeMenu}>
                <Link href="/shop">Shop</Link>
              </li>
              <li className="cursor-pointer" onClick={closeMenu}>
                <Link href="/blog">Blog</Link>
              </li>
              <li className="cursor-pointer" onClick={closeMenu}>
                <a href="/contact">Contact</a>
              </li>
            </ul>

            <div className="flex items-center justify-center gap-8 pb-5 md:gap-12 sm:gap-1">
              <Link href="/contact" onClick={closeMenu}>
                <Image
                  width={24}
                  height={20}
                  src="/images/icons/help.png"
                  alt="help"
                  className="w-5 md:w-6"
                />
              </Link>
              <Image
                width={25}
                height={25}
                src="/images/icons/search.png"
                alt="search"
                className="w-5 md:w-6"
                onClick={closeMenu}
              />
              <Image
                width={26}
                height={24}
                src="/images/icons/like.png"
                alt="wishlist"
                className="w-5 md:w-6"
                onClick={closeMenu}
              />
              <button
                onClick={() => {
                  toggleCart();
                  closeMenu();
                }}
              >
                <Image
                  width={26}
                  height={23}
                  src="/images/icons/cart.png"
                  alt="cart"
                  className="w-5 md:w-6"
                />
              </button>
            </div>
          </div>
        )}

        {isCartOpen && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-50 z-60">
            <div className="absolute top-0 right-0 bg-white w-4/5 md:w-1/3 max-sm:w-full max-sm:h-full rounded-lg shadow-lg p-4">
              <button
                onClick={toggleCart}
                className="absolute top-2 right-2 text-xl font-bold text-gray-500"
              >
                ✖
              </button>
              <h3 className="text-xl font-bold mb-4 border-b border-b-gray-400 pb-4">
                <a href="/cart">Shopping Cart</a>
              </h3>
              <div className="space-y-4 max-sm:overflow-y-auto max-sm:max-h-[60vh]">
                <div className="flex justify-between max-sm:flex-col max-sm:gap-4">
                  <div className="flex justify-between items-center gap-5 max-sm:flex-col max-sm:items-start">
                    <Image
                      width={108}
                      height={105}
                      src="/images/cart3.png"
                      alt=""
                      className="max-sm:w-full max-sm:max-w-[200px]"
                    />
                    <Image
                      width={130}
                      height={56}
                      src="/images/cart2.png"
                      alt=""
                      className="max-sm:w-full max-sm:max-w-[200px]"
                    />
                    <Image
                      width={20}
                      height={20}
                      src="/images/cart1.png"
                      alt=""
                      className="max-sm:w-[30px]"
                    />
                  </div>
                  <p className="max-sm:text-right">Rs. 250,000.00</p>
                </div>
                <div className="flex justify-between max-sm:flex-col max-sm:gap-4">
                  <div className="flex justify-between items-center gap-5 max-sm:flex-col max-sm:items-start">
                    <Image
                      width={108}
                      height={105}
                      src="/images/cart4.png"
                      alt=""
                      className="max-sm:w-full max-sm:max-w-[200px]"
                    />
                    <Image
                      width={136}
                      height={56}
                      src="/images/cart5.png"
                      alt=""
                      className="max-sm:w-full max-sm:max-w-[200px]"
                    />
                    <Image
                      width={20}
                      height={20}
                      src="/images/cart6.png"
                      alt=""
                      className="max-sm:w-[30px]"
                    />
                  </div>
                  <p className="max-sm:text-right">Rs. 270,000.00</p>
                </div>
              </div>
              <div className="mt-4 flex justify-between font-bold text-lg pb-32 max-sm:pb-4">
                <span>Subtotal:</span>
                <span className="font-semibold text-[#B88E2F]">
                  Rs. 520,000.00
                </span>
              </div>
              <div className="mt-4 flex justify-center gap-1 border-t border-t-gray-400 pt-4 max-sm:flex-col max-sm:gap-2">
                <button className="bg-transparent text-black py-2 px-4 rounded-full border border-black max-sm:w-full">
                  <a href="/cart">Go to Cart</a>
                </button>
                <button className="bg-transparent text-black py-2 px-4 rounded-full border border-black max-sm:w-full">
                  <a href="/checkout">Checkout</a>
                </button>
                <button className="bg-transparent text-black py-2 px-4 rounded-full border border-black max-sm:w-full">
                  <a href="/comparison">Comparison</a>
                </button>
                <button
                  onClick={toggleCart}
                  className="bg-transparent text-black py-2 px-4 rounded-full border border-black max-sm:w-full"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
