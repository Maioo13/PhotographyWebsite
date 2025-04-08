import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-[#121212] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link 
              href="/" 
              className="text-2xl font-condensed font-bold tracking-wider text-light"
            >
              LENS<span className="text-[#E0E0E0]">CRAFT</span>
            </Link>
            <p className="text-sm text-light opacity-70 mt-2">© {new Date().getFullYear()} · All Rights Reserved</p>
          </div>
          
          <div className="flex flex-wrap gap-8 text-sm font-medium uppercase tracking-wider">
            <Link 
              href="/" 
              className="text-light hover:text-[#E0E0E0] transition-colors duration-300"
            >
              Portfolio
            </Link>
            <Link 
              href="/about" 
              className="text-light hover:text-[#E0E0E0] transition-colors duration-300"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-light hover:text-[#E0E0E0] transition-colors duration-300"
            >
              Contact
            </Link>
            <Link 
              href="/privacy-policy" 
              className="text-light hover:text-[#E0E0E0] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
