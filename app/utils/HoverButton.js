'use client';

import React from 'react';

// First Button with Folding Corner Effect
const HoverButton = ({ text }) => {
    return (
        <div className="flex justify-center items-center">
            <button className="relative w-auto px-3 bg-[#002561] text-white py-3 font-semibold rounded-md overflow-hidden group">
                {text}
                {/* Folded corner effect */}
                <span className="absolute top-0 right-0 w-12 h-12 bg-white rotate-45 translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 ease-out origin-top-right" />
                {/* Additional fold shadow */}
                <span className="absolute top-0 right-0 w-8 h-8 bg-black/10 rotate-45 translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all duration-300 ease-out origin-top-right delay-75" />
            </button>
        </div>
    );
};

// Second Button with Slide Effect
const HoverButton2 = ({ text }) => {
    return (
        <div className="flex justify-center items-center">
            <button className="relative w-auto px-1 bg-[#1a4c8b] text-white py-3 font-semibold rounded-md group">
                <span className="relative z-10">{text}</span>
                {/* Slide effect */}
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                {/* Border glow effect */}
                <span className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-md transition-all duration-300 ease-out" />
            </button>
        </div>
    );
};

// Third Button with Corner Fold Effect
const HoverButton3 = ({ text }) => {
    return (
        <div className="group inline-block">
            <button className="relative px-5 py-1 bg-blue-500 group-hover:bg-blue-400 text-white overflow-hidden cursor-pointer transition-colors duration-300">
                {text}
                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            </button>
        </div>
    );
};

// Fourth Button with Corner Fold Effect (Orange)
const HoverButton4 = ({ text }) => {
    return (
        <div className="group inline-block">
            <button className="relative px-5 py-1 bg-[#F2A73B] group-hover:bg-[#f4b455] text-black overflow-hidden cursor-pointer transition-colors duration-300">
                {text}
                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#c78016] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            </button>
        </div>
    );
};

// Fifth Button with Corner Fold Effect (Light Blue)
const HoverButton5 = ({ text }) => {
    return (
        <div className="group inline-block">
            <button className="relative px-5 py-1 bg-[#66A4F9] group-hover:bg-[#7db1fa] text-white overflow-hidden cursor-pointer transition-colors duration-300">
                {text}
                <span className="absolute top-0 right-0 w-[12px] h-[12px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#4b89e8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            </button>
        </div>
    );
};

// Sixth Button with Corner Fold Effect (White bg with red text)
const HoverButton6 = ({ text }) => {
    return (
        <div className="group inline-block">
            <button className="relative px-5 py-1 bg-white text-[#FF4D48] border border-dashed border-[#FF4D48] overflow-hidden cursor-pointer transition-colors duration-300">
                {text}
                <span className="absolute top-0 right-0 w-[12px] h-[12px]  opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                <span className="absolute top-0 right-0 w-0 h-0 border-t-[12px] border-l-[12px] border-t-transparent border-l-[#707070] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            </button>
        </div>
    );
};

// Seventh Button with Corner Fold Effect (Transparent bg with red text)
const HoverButton7 = ({ text }) => {
    return (
        <div className="group inline-block">
            <button className="relative px-5 py-1 bg-transparent group-hover:bg-white text-[#FF4D48] border border-dashed border-[#707070] group-hover:border-[#FF4D48] overflow-hidden cursor-pointer transition-all duration-300">
                {text}
            </button>
        </div>
    );
};

export { HoverButton, HoverButton2, HoverButton3, HoverButton4, HoverButton5, HoverButton6, HoverButton7 };
