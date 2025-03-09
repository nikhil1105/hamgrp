import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className=" shadow-md sticky top-0 z-[3000]">
            {/* Social Links Bar */}
            <div className="bg-main-dark text-white py-2">
                <div className="flex justify-start px-4 sm:px-[10vw] items-center gap-2">
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            <FaFacebook size={18} />
                        </a>
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            <FaTwitter size={18} />
                        </a>
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            <FaInstagram size={18} />
                        </a>
                        <a href="#" className="hover:text-blue-400 transition-colors">
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Main Navigation */}
            <div className=" w-full bg-main-light">
                <div className="flex justify-between items-center py-4 px-4 sm:px-[10vw]">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-gray-800">
                        <img src="/logo/logo.png" alt="Logo" className=" h-8 md:h-16 w-auto" />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <FaTimes size={24} className="text-gray-800" />
                            ) : (
                                <FaBars size={24} className="text-gray-800" />
                            )}
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors">Home</a>
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors">About</a>
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors">Services</a>
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors">Portfolio</a>
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors">Blog</a>
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors">Contact</a>
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-main-light py-2 px-4">
                    <nav className="flex flex-col space-y-4">
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors py-2 border-b border-gray-200">Home</a>
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors py-2 border-b border-gray-200">About</a>
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors py-2 border-b border-gray-200">Services</a>
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors py-2 border-b border-gray-200">Portfolio</a>
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors py-2 border-b border-gray-200">Blog</a>
                        <a href="#" className="text-gray-800 hover:text-white font-medium transition-colors py-2">Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;