import React, { useRef, useEffect, useState } from "react";
import SliderComponent from "@/components/HomeComponents/SliderComponent";
import Image from "next/image";
const FadeComponent = () => {
  const messages = [
    "What does the perfect university feel like to you?",
    "What kind of learning experience are you looking for?",
    "How will you shape your future?",
  ];

  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const outerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = -rect.top;
      setScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getOpacity = (index) => {
    const sectionHeight = window.innerHeight;
    const position = scrollY - index * sectionHeight;
    if (position < 0 || position > sectionHeight) return 0;
    return 1 - Math.abs(position / sectionHeight - 1) * 0; // peak at center
  };

  const getTranslateY = (index) => {
    const sectionHeight = window.innerHeight;
    const position = scrollY - index * sectionHeight;
    return Math.max(Math.min(position * -0.2, 30), 0);
  };

  return (
    <>
    <div className="relative" ref={containerRef}>
      {/* ⬇️ Add +1 to ensure last message can center before scroll ends */}
      <div style={{ height: `${(messages.length + 1) * 100}vh` }}>
        <div className="sticky top-80 h-[20vh] flex items-center justify-center bg-white overflow-hidden">
          <div className="relative w-full h-full">
            {messages.map((message, index) => {
              const opacity = getOpacity(index);
              return (
                <h1
                  key={index}
                  className="absolute text-3xl md:text-5xl font-bold text-[#002561] text-center transition-all duration-300 ease-in-out w-full px-4"
                  style={{
                    opacity,
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, calc(-50% + ${getTranslateY(index)}px))`,
                    zIndex: opacity > 0.5 ? 10 : 1,
                    pointerEvents: opacity > 0.1 ? "auto" : "none",
                  }}
                >
                  {message}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
     {/* SECTION 3 */}
     <div className="w-full lg:h-[45vh] bg-[#172554] text-white flex items-center justify-center">
     <div
       className="container mx-auto lg:px-6 px-4 py-14"
       data-aos="zoom-in"
     >
       <div className="flex flex-col items-center text-center space-y-5">
         <p className="text-[24px] lg:text-[40px] font-thin leading-relaxed">
           At AYRA, these answers aren't given to you—you create them.
         </p>
         <p className="text-[24px] lg:text-[40px] font-thin leading-normal">
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
         data-aos="zoom-out" // 👈 AOS animation added here
       />
     </div>
   </div>

   {/* SLIDER SECTION */}
   <SliderComponent />

   {/* SECTION 6 */}
   <div
     ref={outerRef}
     className="relative w-full bg-[#E2E2EB] overflow-hidden py-14"
   >
     <div className="flex items-center justify-center h-full container mx-auto ">
       <Image
         src="/Home-imges/Home-text-04.png"
         alt="The Future of Learning is Unfolding"
         className="w-full lg:h-[70vh] object-contain p-5"
         width={1384}
         height={884}
         data-aos="zoom-out"
       />
     </div>
   </div>
   </>
  );
};

export default FadeComponent;
