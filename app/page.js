import React from "react"
import Image from "next/image"
import { HiChevronDown } from "react-icons/hi"
import FadeComponent from "@/components/HomeComponents/FadeComponent"
import FormComponent from "@/components/HomeComponents/FormComponent"
const page = () => {
  return (
    <>
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
        <div className="absolute inset-0 flex items-end justify-center">
          {/* Optional arrow animation */}
          <div className="mb-5 animate-bounce">
            <HiChevronDown className="w-10 h-10 text-[#4EA6FF]" />
          </div>
        </div>
      </div>

      <FadeComponent />
      <FormComponent />
    </>
  )
}

export default page
