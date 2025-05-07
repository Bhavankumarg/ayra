import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const FadeComponent = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const scrollRef = useRef(null);
  const outerRef = useRef(null);
  const [scrollUnlocked, setScrollUnlocked] = useState(true);
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState([]);

  const messages = [
    "What does the perfect university feel like to you?",
    "What kind of learning experience are you looking for?",
    "How will you shape your future?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newVisibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.dataset.index);
        setVisibleSections(newVisibleSections);
      },
      {
        threshold: 0.5,
        root: scrollRef.current,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* SECTION 1 */}
      <div
        className="flex items-center justify-center lg:h-80 h-[200px] px-1 bg-white relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/Home-imges/bg-image-home.png')" }}
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
     <div className="w-full lg:h-[45vh] bg-[#0052B8] text-white flex items-center justify-center animate-fadeZoomIn">
  <div className="container mx-auto lg:px-6 px-4 py-8">
    <div className="flex flex-col items-center text-center space-y-5">
      <p className="text-[24px] lg:text-[40px] font-thin leading-relaxed">
        At AYRA, these answers aren't given to you—you create them.
      </p>
      <p className="text-[24px] lg:text-[40px] font-thin leading-relaxed">
        A place where your education is an open canvas, your ambitions define your path, and your potential unfolds on your own terms.
      </p>
    </div>
  </div>
</div>


      {/* SECTION 4 */}
      <div className="relative w-full lg:h-[70vh] bg-[#FFFFFF] overflow-hidden container mx-auto">
        <div className="flex items-center justify-center h-full">
          <Image
            src="/Home-imges/Home-text-02.png"
            alt="Home text"
            className="w-full h-[40vh] object-contain p-5"
            width={1384}
            height={884}
          />
        </div>
      </div>

      {/* SECTION 5 - INNER SCROLL SECTION WITH FADE */}
      <div className="bg-blue-950 flex flex-col items-center justify-center text-center lg:py-24 py-10 px-4 lg:px-1 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-center">
            <Image
              src="/Home-imges/Home-text-03.png"
              alt="Home Text 03"
              className="w-full lg:h-[70vh] object-contain p-5"
              width={1384}
              height={884}
            />
          </div>

          <section className="h-[45vh]">
            <div
              ref={scrollRef}
              className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth"
            >
              {[
                {
                  title: "Future-Focused UG & PG Programs —",
                  desc: "A curriculum built to equip you with in-demand skills",
                },
                {
                  title: "A Campus Built for Innovation –",
                  desc: "Modern learning spaces designed for collaboration and creativity",
                },
                {
                  title: "Your Education, Your Way –",
                  desc: "Flexible, interdisciplinary learning paths tailored to your ambitions",
                },
              ].map((section, i) => (
                <div
                  key={i}
                  data-index={i}
                  ref={(el) => (sectionRefs.current[i] = el)}
                  className={`text-white snap-start flex flex-col items-center justify-center min-h-[50vh] transition-opacity duration-700 transform ${
                    visibleSections.includes(i.toString())
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <h2 className="text-3xl md:text-[48px] font-bold mb-4">{section.title}</h2>
                  <p className="text-xl md:text-[40px] font-thin tracking-wide">{section.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* SECTION 6 */}
      <div
        ref={outerRef}
        className="relative w-full bg-[#E2E2EB] overflow-hidden py-14"
      >
        <div className="flex items-center justify-center h-full container mx-auto">
          <Image
            src="/Home-imges/Home-text-04.png"
            alt="Home Text 04"
            className="w-full lg:h-[70vh] object-contain p-5"
            width={1384}
            height={884}
          />
        </div>
      </div>
    </>
  );
};

export default FadeComponent;
