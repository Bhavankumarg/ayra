import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#002561] text-white font-['TT_Hoves_Pro']">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-dashed border-white/20 pb-8">
                    {/* Location Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Location</h3>
                        <p className="text-gray-300 text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor i
                        </p>
                    </div>

                    {/* Get In Touch Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/maps-directions" className="text-gray-300 hover:text-white transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                                    Maps & Directions
                                </Link>
                            </li>
                            <li>
                                <Link href="/email" className="text-gray-300 hover:text-white transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                                    Email
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Login Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Login</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/staff-login" className="text-gray-300 hover:text-white transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                                    Staff Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/student-login" className="text-gray-300 hover:text-white transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                                    Student Login
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/programs" className="text-gray-300 hover:text-white transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/admissions" className="text-gray-300 hover:text-white transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                                    Admissions
                                </Link>
                            </li>
                            <li>
                                <Link href="/school-of-hospitality" className="text-gray-300 hover:text-white transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                                    School of Hospitality
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    {/* Social Links */}
                    <div className="flex space-x-4">
                        <Link href="https://linkedin.com" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <FaLinkedin className="text-[#002561] w-5 h-5" />
                        </Link>
                        <Link href="https://instagram.com" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <FaInstagram className="text-[#002561] w-5 h-5" />
                        </Link>
                        <Link href="https://facebook.com" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <FaFacebook className="text-[#002561] w-5 h-5" />
                        </Link>
                        <Link href="https://twitter.com" className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors">
                            <FaTwitter className="text-[#002561] w-5 h-5" />
                        </Link>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center justify-center">
                        <Image
                            src="/ayra-logo.svg"
                            alt="AYRA Logo"
                            width={120}
                            height={40}
                        />
                    </div>

                    {/* Terms and Privacy */}
                    <div className="flex space-x-4">
                        <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                            Terms and Conditions
                        </Link>
                        <span className="text-gray-300">|</span>
                        <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-[14px] 2xl:text-[18px] leading-[27px] font-normal">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="fixed bottom-8 right-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-white p-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                        <svg
                            className="w-5 h-5 text-[#002561]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 