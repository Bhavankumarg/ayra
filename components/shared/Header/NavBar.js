"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaBars, FaTimes } from "react-icons/fa"

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0052B8] text-white font-['TT_Hoves_Pro'] shadow-md ">
      <div className="container mx-auto flex justify-between items-center p-3">
        <div className="flex items-center">
          <Link href="/" onClick={closeMobileMenu}>
            <Image
              src="/ayra-logo.svg"
              className="h-12 md:h-14 lg:h-16"
              alt="AYRA Logo"
              width={150}
              height={45}
              priority
            />
          </Link>
        </div>

        <div className="">
          {/* Added 'hidden' to hide by default (mobile) */}
          {/* Added 'lg:block' to show it on large screens (desktop) */}
          <div className="group hidden lg:block">
            {" "}
            {/* Apply responsive classes here */}
            <Link
              href="#"
              // Cleaned up classes on Link - positioning is better handled by parent flex container
              // and spacing/margins by the button or the outer div if needed.
              className="relative inline-block"
            >
              <button className="relative px-5 py-2 bg-[#66A4F9] group-hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300 ">
                Enquire Now
                {/* Triangle effect spans */}
                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button - Hidden on lg breakpoint and up */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 focus:outline-none text-2xl"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        // Positioned absolutely below the navbar
        <div className="lg:hidden bg-[#002561] absolute top-full left-0 w-full z-40 shadow-lg">
          <div className="flex flex-col items-start px-4 py-4 space-y-3">
            <Link
              href="#"
              className="relative inline-block w-full px-5 mt-6 justify-start"
            >
              <button className="relative px-5 py-2 bg-[#66A4F9] group-hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300">
                Enquire Now
                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
