import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

type HeaderProps = {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
};

const Header = ({ isMobileMenuOpen, toggleMobileMenu }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        className={`fixed top-0 left-0 right-0 z-40 bg-[#121212] backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? 'bg-opacity-90 shadow-md' : 'bg-opacity-80'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-condensed font-bold tracking-wider text-light">
              LENS<span className="text-[#E0E0E0]">CRAFT</span>
            </a>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider">
            <Link href="/">
              <a className={`hover:text-[#E0E0E0] transition-colors duration-300 ${
                location === '/' ? 'text-[#E0E0E0]' : 'text-light'
              }`}>
                Portfolio
              </a>
            </Link>
            <Link href="/about">
              <a className={`hover:text-[#E0E0E0] transition-colors duration-300 ${
                location === '/about' ? 'text-[#E0E0E0]' : 'text-light'
              }`}>
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className={`hover:text-[#E0E0E0] transition-colors duration-300 ${
                location === '/contact' ? 'text-[#E0E0E0]' : 'text-light'
              }`}>
                Contact
              </a>
            </Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            aria-label="Toggle mobile menu"
            className="md:hidden text-light hover:text-[#E0E0E0] focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </motion.header>
      
      <MobileMenu isOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
    </>
  );
};

export default Header;
