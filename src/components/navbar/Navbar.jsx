import React from "react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { menuItems } from "./menuItems";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (openDropdown) {
                // Check if the click is outside the dropdown
                const dropdown = document.querySelector(`[data-dropdown="${openDropdown.toLowerCase()}"]`);
                if (dropdown && !dropdown.contains(event.target)) {
                    setOpenDropdown(null);
                }
            }
        };

        if (openDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [openDropdown]);

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-[74px] transition-all duration-1000 ease-in-out ${isScrolled
                    ? 'bg-black shadow-lg backdrop-blur-sm py-[2px]'
                    : 'bg-transparent py-[15px]'
                }`}>
                {/* Logo */}
                <Link to="/">
                    <div className="flex items-center justify-center">
                        <img
                            src="/logo.svg"
                            alt="Capilarity"
                            className={'h-[40px] w-[130px] sm:h-[45px] sm:w-[145px] md:h-[50px] md:w-[162px]'}
                        />
                    </div>
                </Link>
                {/* Navigation Menu */}
                <div className="hidden md:flex">
                    <div className="flex gap-4 md:gap-6 lg:gap-[13px] bg-gray-900/10 shadow-xl backdrop-blur-sm rounded-2xl px-4 md:px-6 lg:px-[20px] py-2 md:py-3 lg:py-[12px]">
                        {menuItems.map((item, index) => (
                            <div key={index} className="relative">
                                {item.hasDropdown ? (
                                    <div
                                        data-dropdown={item.label.toLowerCase()}
                                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                                    >
                                        <button className="relative text-white text-sm md:text-md font-medium px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-full transition-all duration-200 hover:text-orange-500 focus:outline-none group">
                                            <div className="flex items-center gap-1">
                                                {item.label}
                                                <svg
                                                    className="w-3 h-3 text-white/70 group-hover:text-orange-500 transition-colors duration-300"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                            {/* Animated underline */}
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 ease-out group-hover:w-[70%]"></div>
                                        </button>

                                        {/* Dropdown Menu */}
                                        {openDropdown === item.label && (
                                            <div className="absolute top-13 left-0 mt-2 w-56 md:w-64 pl-3 bg-gray-700 backdrop-blur-md rounded-4xl shadow-lg border border-white/30 py-2 z-50">
                                                {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                                    <Link
                                                        key={dropdownIndex}
                                                        to={dropdownItem.link}
                                                        className="block px-4 py-3 text-sm text-white hover:text-orange-500 transition-colors duration-200"
                                                        onClick={() => setOpenDropdown(null)}
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
                                        className="relative text-white text-sm md:text-md font-medium px-2 md:px-3 lg:px-4 py-1 md:py-2 rounded-full transition-all duration-200 hover:text-orange-500 focus:outline-none block group"
                                    >
                                        {item.label}
                                        {/* Animated underline */}
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-500 transition-all duration-300 ease-out group-hover:w-[70%]"></div>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex">
                    <Link
                        to="/get-in-touch"
                        className="hidden md:flex group items-center justify-center px-4 md:px-6 lg:px-8 py-[6px] md:py-[8px] bg-orange-500 hover:bg-orange-400 rounded-full hover:scale-105 border-2 border-orange-500 hover:border-orange-400 transition-all duration-300 ease-out">
                        <span className="text-white text-sm md:text-base font-bold leading-[150%] transition-colors duration-300">
                            Get Started
                        </span>
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden transition-colors duration-300 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <div className="relative">
                {/* Mobile Navigation */}
                <MobileNav
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                />
            </div>
        </>
    );
}
