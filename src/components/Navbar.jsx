import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-blue-100 h-16 md:h-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                    <div className="flex justify-between items-center h-full">

                        {/* Logo */}
                        <div className="flex items-center space-x-3 h-full">
                            <div className="flex items-center">
                                <img
                                    src={logo}
                                    alt="TOKOR"
                                    className="h-14 md:h-20 w-auto object-contain drop-shadow-md"
                                />
                            </div>
                            <div className="leading-tight">
                                <span className="block text-xl md:text-2xl font-extrabold tracking-tight text-[#0A2A6B]">
                                    TOKOR
                                </span>
                                <span className="hidden md:block text-xs text-gray-500 font-serif italic tracking-wide">
                                    The Open Kitchen
                                </span>
                            </div>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8 h-full">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className="text-gray-700 hover:text-[#0A2A6B] text-lg font-semibold transition duration-200 relative group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F4B400] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            ))}
                            <Link
                                to="/book-a-slot"
                                className="px-5 py-2 rounded-full text-base font-bold text-white bg-[linear-gradient(90deg,#001F6B_0%,#0A3DA8_55%,#FFC107_100%)] border border-[#FFD54F] shadow-[0_0_18px_rgba(255,193,7,0.5)] hover:shadow-[0_0_28px_rgba(255,193,7,0.7)] hover:-translate-y-0.5 transition-all duration-300"
                            >
                                Book a Slot
                            </Link>
                        </div>

                        {/* Mobile Hamburger Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-[#0A2A6B] focus:outline-none"
                            >
                                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Slide-in Menu — nav ke bahar, amber-50 background */}
            <div
                className={`md:hidden sticky top-16 z-40 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="bg-amber-50 border-t border-amber-200 px-4 pb-4 pt-3 space-y-1 shadow-lg">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="block py-3 px-3 text-gray-700 hover:bg-amber-100 hover:text-[#0A2A6B] rounded-md text-lg font-medium border-b border-amber-200 last:border-b-0 transition-colors duration-150"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Link
                            to="/slotbooking"
                            className="block text-center px-6 py-2.5 rounded-full text-lg font-bold text-white bg-[linear-gradient(135deg,#0A2A6B_0%,#163C8C_45%,#F4B400_100%)] shadow-lg hover:scale-105 transition-all duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            Book a Slot
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;