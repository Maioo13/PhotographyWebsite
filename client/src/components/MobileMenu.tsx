import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

type MobileMenuProps = {
  isOpen: boolean;
  toggleMobileMenu: () => void;
};

const MobileMenu = ({ isOpen, toggleMobileMenu }: MobileMenuProps) => {
  const [location] = useLocation();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed top-0 left-0 bottom-0 w-64 bg-[#1A1A1A] z-50 p-6 pt-20 md:hidden"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 0.3 }}
        >
          <button 
            aria-label="Close mobile menu"
            className="absolute top-6 right-6 text-light hover:text-[#E0E0E0] focus:outline-none" 
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <nav className="flex flex-col space-y-6 text-base font-medium uppercase tracking-wider">
            <Link href="/">
              <a 
                className={`hover:text-[#E0E0E0] transition-colors duration-300 ${
                  location === '/' ? 'text-[#E0E0E0]' : 'text-light'
                }`}
                onClick={toggleMobileMenu}
              >
                Portfolio
              </a>
            </Link>
            <Link href="/about">
              <a 
                className={`hover:text-[#E0E0E0] transition-colors duration-300 ${
                  location === '/about' ? 'text-[#E0E0E0]' : 'text-light'
                }`}
                onClick={toggleMobileMenu}
              >
                About
              </a>
            </Link>
            <Link href="/contact">
              <a 
                className={`hover:text-[#E0E0E0] transition-colors duration-300 ${
                  location === '/contact' ? 'text-[#E0E0E0]' : 'text-light'
                }`}
                onClick={toggleMobileMenu}
              >
                Contact
              </a>
            </Link>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
