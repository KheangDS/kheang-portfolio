import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Highlights', to: 'highlights' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-md py-4 border-b border-border-light' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="hero" smooth={true} duration={500} className="flex items-center gap-1.5 cursor-pointer">
          <span className="font-extrabold text-xl tracking-tight text-text-main">YENG</span>
          <span className="font-normal text-xl tracking-tight text-text-muted">Kheang</span>
          <div className="w-2 h-2 bg-primary rounded-full ml-0.5"></div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="!text-text-main"
                offset={-100}
                className="text-sm font-medium text-text-muted hover:text-text-main transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500} 
            className="btn btn-primary h-11 px-7 text-sm"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden bg-transparent border-none text-text-main cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-bg-card p-8 flex flex-col gap-6 border-b border-border-light shadow-lg"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="text-xl font-bold text-text-main no-underline cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                className="bg-primary text-white px-6 py-2.5 rounded-card font-bold text-center no-underline cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
