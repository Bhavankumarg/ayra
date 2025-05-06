"use client"
import React, { useState, useEffect } from "react"
import { HiChevronDown } from "react-icons/hi"
import Image from "next/image"

const FadeComponent = () => {
  const messages = [
    "What does the perfect university feel like to you?",
    "What kind of learning experience are you looking for?",
    "How will you shape your future?",
  ]

  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length)
        setVisible(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div
        className="flex items-center justify-center h-80 bg-white relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/Home-imges/bg-image-home.png')",
        }}
      >
        <h1
          key={index}
          className={`text-3xl md:text-5xl font-bold text-[#002561] text-center transition-all duration-500 ease-in-out transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {messages[index]}
        </h1>
      </div>

      {/* SECTION 3 */}

      <div className="w-full lg:h-[45vh] bg-[#0052B8] text-white flex items-center justify-center">
        <div className="container mx-auto lg:px-6 px-4 py-5">
          <div className="flex flex-col items-center text-center space-y-5 ">
            <p className="text-[24px] lg:text-[40px] font-thin leading-relaxed">
              At AYRA, these answers aren't given to you—you create them.
            </p>
            <p className="text-[24px] lg:text-[40px] font-thin leading-relaxed">
              A place where your education is an open canvas, your ambitions
              define your path, and your potential unfolds on your own terms.
            </p>
            
          </div>
        </div>
      </div>

      {/* SECTION 4 */}

      <div className="relative w-full lg:h-[70vh] bg-[#FFFFFF] overflow-hidden container mx-auto">
        <div className="flex items-center justify-center h-full">
          <Image
            src="/Home-imges/Home-text-02.png"
            alt="The Future of Learning is Unfolding"
            className="w-full h-[40vh] object-contain p-5"
            width={1384}
            height={884}
          />
        </div>
      </div>

      {/* SECTION 5 */}

      <div className="bg-blue-950 lg:min-h-screen flex flex-col items-center justify-center text-center lg:py-14 px-4 lg:px-1 ">
        <div className="container mx-auto">
          <div className="flex items-center justify-center lg:h-full">
            <Image
              src="/Home-imges/Home-text-03.png"
              alt="The Future of Learning is Unfolding"
              className="w-full lg:h-[70vh] object-contain p-5"
              width={1384}
              height={884}
            />
          </div>

          <div className="text-white lg:pt-20 pt-5">
            <h2 className="text-3xl md:text-[48px] font-bold mb-8">
              Future-Focused UG & PG Programs —
            </h2>
            <p className="text-xl md:text-[40px] font-thin tracking-wide">
              A curriculum built to equip you with in-demand skills
            </p>
          </div>
          <div className="text-white lg:pt-20 pt-5">
            <h2 className="text-3xl md:text-[48px] font-bold mb-8">
              A Campus Built for Innovation –
            </h2>
            <p className="text-xl md:text-[40px] font-thin tracking-wide">
              Modern learning spaces designed for collaboration and creativity
            </p>
          </div>
          <div className="text-white lg:pt-20 pt-5">
            <h2 className="text-3xl md:text-[48px] font-bold mb-8">
              Your Education, Your Way –
            </h2>
            <p className="text-xl md:text-[40px] font-thin tracking-wide">
              Flexible, interdisciplinary learning paths tailored to your
              ambitions
            </p>
          </div>
        </div>

       
      </div>

      {/* SECTION 6 */}

      <div className="relative w-full  bg-[#E2E2EB] overflow-hidden py-14">
        <div className="flex items-center justify-center h-full container mx-auto">
          <Image
            src="/Home-imges/Home-text-04.png"
            alt="The Future of Learning is Unfolding"
            className="w-full lg:h-[70vh] object-contain p-5"
            width={1384}
            height={884}
          />
        </div>
      </div>
    </>
  )
}

export default FadeComponent
