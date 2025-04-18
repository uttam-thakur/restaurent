"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block bg-black text-white py-2 w-full">
        <div className="container flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>CALL +440 555 077</span>
            <span className="text-amber-500">★</span>
            <span>14 MAIN ROAD, NEW YORK 1001</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>MON-WED: 11A-9P</span>
            <span className="text-amber-500">★</span>
            <span>THURS-SAT: 11A-10P</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`w-full py-4 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container flex justify-between items-center">
          {/* Cart icon */}
          <div className="w-[100px]">
            <Link href="/shop" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="ml-2">CART(0)</span>
            </Link>
          </div>

          {/* Navigation menu */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="uppercase text-sm font-medium tracking-wider hover:text-amber-700 transition"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="uppercase text-sm font-medium tracking-wider hover:text-amber-700 transition"
            >
              Menu
            </Link>
            <Link
              href="/reservations"
              className="uppercase text-sm font-medium tracking-wider hover:text-amber-700 transition"
            >
              Reservations
            </Link>
          </nav>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
              <Image
                src="/images/logo-dark.png"
                alt="Rolanda"
                width={160}
                height={40}
                className="h-auto"
              />
            </Link>
          </div>

          {/* Right nav */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/pages"
              className="uppercase text-sm font-medium tracking-wider hover:text-amber-700 transition"
            >
              Pages
            </Link>
            <Link
              href="/shop"
              className="uppercase text-sm font-medium tracking-wider hover:text-amber-700 transition"
            >
              Shop
            </Link>
            <Link
              href="/landing"
              className="uppercase text-sm font-medium tracking-wider hover:text-amber-700 transition"
            >
              Landing
            </Link>
          </nav>

          {/* Book button */}
          <div className="w-[100px] flex justify-end">
            <Button
              variant="outline"
              className="border-black hover:bg-black hover:text-white transition-all uppercase text-xs"
            >
              Book a Table
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
