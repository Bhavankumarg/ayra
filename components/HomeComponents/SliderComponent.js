import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos"
import "aos/dist/aos.css"

const SlidingContent = () => {
  const sliderRef = useRef(null); // Create a reference to the slider
  const slides = [
    {
      title: 'Future-Focused UG & PG Programs —',
      description: 'A curriculum built to equip you with in-demand skills',
      image: '/Home-imges/Home-text-03.png',
    },
    {
      title: 'A Campus Built for Innovation –',
      description: 'Modern learning spaces designed for collaboration and creativity',
      image: '/Home-imges/Home-text-03.png',
    },
    {
      title: 'Your Education, Your Way –',
      description: 'Flexible, interdisciplinary learning paths tailored to your ambitions',
      image: '/Home-imges/Home-text-03.png',
    },
  ];
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      })
    }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    arrows: false, 
    fade: false, 
    rtl: false, 
  };

  return (
    <div className="bg-blue-950 flex flex-col items-center justify-center text-center lg:py-24 py-10 px-4 lg:px-1 overflow-hidden">
      <div className="container mx-auto">
        {/* Static Image */}
        <div className="flex items-center justify-center mb-10 ">
          <Image
            src="/Home-imges/Home-text-03.png"
            alt="The Future of Learning is Unfolding"
            className="w-full lg:h-[70vh] object-contain p-5"
            data-aos="zoom-in" 
            width={1384}
            height={884}
          />
        </div>

        {/* Slick Slider for Text Content */}
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="text-white flex flex-col gap-20">
              {/* Text Block */}
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-[48px] font-bold mb-8 mt-3">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-[40px] font-thin tracking-wide mb-10">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SlidingContent;
