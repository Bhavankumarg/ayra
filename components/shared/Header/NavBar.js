"use client"
import React from "react"
import Link from "next/link"
import Image from "next/image"

const NavBar = ({ scrollToFooter }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#172554] text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-2">
        <div className="flex items-center px-1 ">
          <Link href="/" onClick={() => window.scrollTo(0, 0)}>
            <Image
              src="/ayra-logo.svg"
              className="h-20  lg:h-20"
              alt="AYRA Logo"
              width={150}
              height={45}
              priority
            />
          </Link>
        </div>

        <div className="group inline-block">
          <button
            type="submit"
            onClick={scrollToFooter}
            className="relative px-5 py-1 text-xl font-thin leading-relaxed bg-[#66A4F9] hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300"
          >
            Enquire Now
            <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-[#172554] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
            <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
