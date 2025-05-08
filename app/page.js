"use client"
import React, { useRef } from "react"
import Image from "next/image"
import { HiChevronDown } from "react-icons/hi"
import FadeComponent from "@/components/HomeComponents/FadeComponent"
import FormComponent from "@/components/HomeComponents/FormComponent"
import Header from "@/components/shared/Header"
import EnquiryForm2 from "@/components/HomeComponents/EnquiryForm2"

const Page = () => {
  const footerRef = useRef(null)

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header scrollToFooter={scrollToFooter} />

      {/* SECTION 1 */}
      <div className="relative lg:h-screen w-full bg-[#172554] overflow-hidden pt-10 lg:pt-5">
        <div className="flex items-center justify-center h-full container mx-auto animate-fadeIn">
          <Image
            src="/Home-imges/ayrabg-img.png"
            alt="The Future of Learning is Unfolding"
            className="w-full h-[70vh] object-contain p-5"
            width={1384}
            height={884}
          />
        </div>

        {/* Scroll Arrow */}
        <div className="absolute inset-0 flex items-end justify-center">
          <div className="mb-5 animate-bounce">
            <HiChevronDown
              className="w-10 h-10 text-[#4EA6FF] cursor-pointer"
          
            />
          </div>
        </div>
      </div>

      <FadeComponent />

      {/* Target Section */}

      <EnquiryForm2 innerRef={footerRef} />
      {/* <FormComponent innerRef={footerRef} /> */}
    </>
  )
}

export default Page
