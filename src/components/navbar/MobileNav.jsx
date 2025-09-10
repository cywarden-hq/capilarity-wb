import React, { useState } from "react";
import { Link } from "react-router";
import { menuItems } from "./menuItems";

const MobileNav = ({ isOpen, onClose }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    if (!isOpen) return null;

    return (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose}>
            <div className="fixed left-0 top-0 h-full w-full bg-white shadow-xl" onClick={(e) => e.stopPropagation()}>
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <Link to="/" onClick={onClose}>
                        <img
                            src="/logo.svg"
                            alt="Capilarity"
                            className="h-8 w-auto"
                        />
                    </Link>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu Items */}
                <div className="p-6 h-full overflow-y-auto">
                    <nav className="space-y-2">
                        {menuItems.map((item, index) => (
                            <div key={index}>
                                {item.hasDropdown ? (
                                    <div>
                                        <button
                                            className="w-full flex items-center justify-between py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                            onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                                        >
                                            <span className="font-medium">{item.label}</span>
                                            <svg 
                                                className={`w-4 h-4 transition-transform duration-200 ${
                                                    openDropdown === item.label ? 'rotate-180' : ''
                                                }`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        
                                        {/* Mobile Dropdown */}
                                        {openDropdown === item.label && (
                                            <div className="ml-4 mt-2 space-y-1">
                                                {item.dropdownItems?.map((dropdownItem, dropdownIndex) => (
                                                    <Link
                                                        key={dropdownIndex}
                                                        to={dropdownItem.link}
                                                        className="block py-2 px-4 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors duration-200"
                                                        onClick={() => {
                                                            onClose();
                                                            setOpenDropdown(null);
                                                        }}
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
                                        className="block py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                                        onClick={onClose}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile CTA Button */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <Link
                            to="/get-in-touch"
                            className="block w-full text-center py-3 px-6 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-lg transition-colors duration-200"
                            onClick={onClose}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
