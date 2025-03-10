import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ setActivePage }) => {
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
                        <span className="hover:text-blue-400 transition-colors cursor-pointer">
                            <FaFacebook size={18} />
                        </span>
                        <span className="hover:text-blue-400 transition-colors cursor-pointer">
                            <FaTwitter size={18} />
                        </span>
                        <span className="hover:text-blue-400 transition-colors cursor-pointer">
                            <FaInstagram size={18} />
                        </span>
                        <span className="hover:text-blue-400 transition-colors cursor-pointer">
                            <FaLinkedin size={18} />
                        </span>
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
                        <span onClick={() => setActivePage('home')} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">Home</span>
                        <span onClick={() => setActivePage('about')} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">About</span>
                        <span onClick={() => setActivePage('service')} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">Services</span>
                        <span onClick={() => setActivePage('faq')} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">faq</span>
                        <span onClick={() => setActivePage('client')} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">client</span>
                        <span onClick={() => setActivePage('teams')} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">Teams</span>
                    </nav>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-main-light py-2 px-4">
                    <nav className="flex flex-col space-y-4">
                        <span onClick={() => { setActivePage('home'); setIsMenuOpen(!isMenuOpen); }} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">Home</span>
                        <span onClick={() => { setActivePage('about'); setIsMenuOpen(!isMenuOpen); }} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">About</span>
                        <span onClick={() => { setActivePage('service'); setIsMenuOpen(!isMenuOpen); }} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">Services</span>
                        <span onClick={() => { setActivePage('faq'); setIsMenuOpen(!isMenuOpen); }} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">faq</span>
                        <span onClick={() => { setActivePage('client'); setIsMenuOpen(!isMenuOpen); }} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">client</span>
                        <span onClick={() => { setActivePage('teams'); setIsMenuOpen(!isMenuOpen); }} className="text-gray-800 hover:text-white font-medium transition-colors cursor-pointer">Teams</span>
                    </nav>
                </div>
            )
            }
        </header >
    );
};

export default Navbar;