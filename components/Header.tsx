"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import CartDialogue from "./CartDialogue";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
    if (!isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsSearchOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-5 md:mx-14">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" passHref>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <h1 className="text-2xl font-bold">FurniVerse</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-lg font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className="flex gap-4 items-center">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button
                onClick={toggleSearch}
                aria-label="Toggle search"
                className="p-2"
              >
                <Image src="/images/icons/search.png" alt="Search" width={24} height={24} />
              </button>
              {isSearchOpen && (
                <div className="absolute top-10 right-0 bg-white shadow-md p-4 rounded-lg">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search products..."
                    className="w-64 px-4 py-2 border rounded-md"
                  />
                </div>
              )}
            </div>
            {/* Cart */}
            <button
              onClick={toggleCart}
              aria-label="Toggle cart"
              className="p-2"
            >
              <Image src="/images/icons/cart.png" alt="Cart" width={24} height={24} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden"
        >
          <Image src="/images/icons/hamburger.png" alt="Menu" width={24} height={24} />
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md">
            <ul className="flex flex-col items-center gap-4 py-4">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-end z-50">
          <div className="bg-white w-80 h-full p-4 shadow-lg">
            <button
              onClick={toggleCart}
              className="text-xl absolute top-2 right-2"
            >
              ✖
            </button>
            <h2 className="text-lg font-bold">Your Cart</h2>
            {/* Dynamic cart content */}
            <CartDialogue/>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
