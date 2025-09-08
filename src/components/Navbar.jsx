import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between lg:px-[94px] py-[27px] transition-all duration-1000 ease-in-out ${
            isScrolled 
                ? 'bg-white shadow-lg backdrop-blur-sm' 
                : 'bg-transparent'
        }`}>
            {/* Logo */}
            <Link to="/">
                <div className="flex items-center">
                    <img
                        src="/logo.svg"
                        alt="Capilarity"
                        className="h-[50px] w-[162px]"
                    />
                </div>
            </Link>
            {/* Navigation Menu */}
            <div className="hidden lg:flex">
                <div className="flex gap-8 lg:gap-[13px] bg-white px-[20px] py-[12px] rounded-full">
                    {[
                        { label: "Why Us", link: "/why-us" },
                        { 
                            label: "Services", 
                            hasDropdown: true,
                            dropdownItems: [
                                { label: "Observability", link: "/services/observability" },
                            ]
                        },
                        { label: "Partners", link: "/partners" },
                        { label: "Insights", link: "/insights" },
                        { label: "About Us", link: "/about-us" }
                    ].map((item, index) => (
                        <div key={index} className="relative">
                            {item.hasDropdown ? (
                                <div
                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                >
                                    <button className="relative text-gray-800 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-gray-100 focus:outline-none">
                                        <div className="flex items-center gap-1">
                                            {item.label}
                                            <svg
                                                className="w-3 h-3 text-gray-500"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </button>
                                    
                                    {/* Dropdown Menu */}
                                    {isServicesOpen && (
                                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                            {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                                <Link
                                                    key={dropdownIndex}
                                                    to={dropdownItem.link}
                                                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                                                    onClick={() => setIsServicesOpen(false)}
                                                >   
                                                    {dropdownItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to={item.link}
                                    className="relative text-gray-800 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 hover:bg-gray-100 focus:outline-none block"
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex">
                <Link
                    to="/get-in-touch"
                    className="group flex items-center justify-center px-6 py-[14px] bg-orange-500 hover:bg-orange-400 rounded-full hover:scale-105 border-2 border-orange-500 hover:border-orange-400 transition-all duration-300 ease-out">
                    <span className="text-white font-inter text-base font-bold leading-[150%] transition-colors duration-300">
                        Get Started
                    </span>
                </Link>

                {/* Mobile menu button */}
                <button className={`lg:hidden transition-colors duration-300 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                }`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
