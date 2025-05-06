"use client"
import React, { useRef } from "react"
import Image from "next/image"
import { HiChevronDown } from "react-icons/hi"
import FadeComponent from "@/components/HomeComponents/FadeComponent"
import FormComponent from "@/components/HomeComponents/FormComponent"
import Header from "@/components/shared/Header"

const Page = () => {
  const formRef = useRef(null)

  const handleScroll = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Header handleScroll={handleScroll} />
      {/* SECTION 1 */}
      <div className="relative lg:h-screen w-full bg-[#0052B8] overflow-hidden pt-10 lg:pt-5 ">
        <div className="flex items-center justify-center h-full container mx-auto">
          <Image
            src="/Home-imges/Home-text-01.png"
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
              onClick={handleScroll}
            />
          </div>
        </div>
      </div>

      <FadeComponent />

      {/* Target Section */}
      <div ref={formRef} id="contactForm">
        <FormComponent />
      </div>
    </>
  )
}

export default Page
