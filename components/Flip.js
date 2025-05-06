"use client"
import React, { useEffect, useState } from "react"
import { RiArrowRightUpFill } from "react-icons/ri"

const FoldOnHoverHorizontal = () => {
  const [visible, setVisible] = useState(false)
  const [showSecond, setShowSecond] = useState(false)
  const [showThird, setShowThird] = useState(false)

  const panelWidth = 320
  const panelHeight = "h-[50vh]"

  const sections = [
    {
      title: "HOW DO YOU WANT TO APPROACH YOUR STUDIES?",
      points: [
        "Focusing deeply on one field and becoming an expert",
        "Blending different subjects to create a unique career path",
        "Balancing academics with hands-on, industry-driven learning",
      ],
      bgColor: "bg-[#D7DEEB]",
    },
    {
      title: "WHAT KIND OF FLEXIBILITY DO YOU NEED IN YOUR ACADEMIC JOURNEY?",
      points: [
        "The ability to mix and match courses from different disciplines",
        "The option to switch paths or specialise later in my studies",
        "A combination of academic depth and practical skills that prepare me for different career paths",
      ],
      bgColor: "bg-[#A9B8D5]",
    },
    {
      title: "DO YOU SEE YOURSELF PURSUING AN UNCONVENTIONAL CAREER PATH?",
      points: [
        "Yes, I want to explore non-traditional careers that combine multiple skills",
        "I have a clear career goal and want to tailor my studies to match it",
        "I'm interested in entrepreneurship and want to build something of my own",
      ],
      bgColor: "bg-[#D8DEEA]",
    },
  ]

  // Animation sequencing
  useEffect(() => {
    let t1, t2

    if (visible) {
      t1 = setTimeout(() => setShowSecond(true), 300)
      t2 = setTimeout(() => setShowThird(true), 600)
    } else {
      setShowThird(false)
      t1 = setTimeout(() => setShowSecond(false), 300)
    }

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [visible])


  return (
    <div className="flex justify-center">
      <div
        className="relative mt-10 mb-10 overflow-visible"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        style={{
          perspective: "2000px",
          width: `${3 * panelWidth}px`,
          height: "50vh",
        }}
      >
        {/* Panel 1 - Always visible */}
        <div
          className={`absolute w-80 ${panelHeight} ${sections[0].bgColor} shadow-xl p-5 transform-gpu origin-left transition-all duration-700 z-50`}
          style={{ left: 0, transform: "rotateY(0deg)" }}
        >
          <h3 className="font-bold text-blue-800 mb-12 text-xl">
            {sections[0].title}
          </h3>
          <ul className="space-y-2">
            {sections[0].points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-800 text-md">
                <RiArrowRightUpFill className="text-blue-800 mt-1 w-10" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* Panel 2 - Connected to Panel 1 */}
        <div
          className={`absolute w-80 ${panelHeight} ${sections[1].bgColor} shadow-xl p-5 transform-gpu origin-left transition-all duration-700 ${showSecond ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          style={{
            left: `${panelWidth}px`,
            transform: showSecond ? "rotateY(0deg)" : "rotateY(-160deg)",
            zIndex: showSecond ? 40 : 20,
          }}
        >
          <h3 className="font-bold text-blue-800 mb-12 text-xl">
            {sections[1].title}
          </h3>
          <ul className="space-y-2">
            {sections[1].points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-800 text-md">
                <RiArrowRightUpFill className="text-blue-800 mt-1 w-10" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Panel 3 - Connected to Panel 2 */}
        <div
          className={`absolute w-80 ${panelHeight} ${sections[2].bgColor} shadow-xl p-5 transform-gpu origin-left transition-all duration-700 ${showThird ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          style={{
            left: `${panelWidth * 2}px`,
            transform: showThird ? "rotateY(0deg)" : "rotateY(-160deg)",
            zIndex: showThird ? 30 : 10,
          }}
        >
          <h3 className="font-bold text-blue-800 mb-12 text-xl">
            {sections[2].title}
          </h3>
          <ul className="space-y-2">
            {sections[2].points.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-800 text-md">
                <RiArrowRightUpFill className="text-blue-800 mt-1 w-10" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative w-full h-32 bg-blue-500 overflow-hidden">
        <div
          className="absolute top-0 w-full h-full bg-white"
          style={{
            clipPath: "ellipse(100% 50% at 50% 0%)",
          }}
        ></div>
      </div>

    </div>
  )
}

export default FoldOnHoverHorizontal
