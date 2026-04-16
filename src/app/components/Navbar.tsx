import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Menu, X, Code, Calendar } from 'lucide-react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-12 h-12 bg-[#D9A20E] rounded-xl flex items-center justify-center">
              <Code className="w-6 h-6 text-[#123458]" />
            </div>
            <div>
              <h1 className="text-[#123458] font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                CTI Junior
              </h1>
              <p className="text-xs text-[#123458]/60">Where Future Begins</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
              }`}
            >
              About
            </Link>
            <Link
              to="/zones"
              className={`font-medium transition-colors ${
                isActive('/zones') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
              }`}
            >
              Zones
            </Link>
            <Link
              to="/programs"
              className={`font-medium transition-colors ${
                isActive('/programs') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
              }`}
            >
              Programs
            </Link>
            <Link
              to="/gallery"
              className={`font-medium transition-colors ${
                isActive('/gallery') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
              }`}
            >
              Contact
            </Link>
            <motion.Link
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D9A20E] text-[#123458] px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book a Visit
            </motion.Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#123458]"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-4"
          >
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className={`py-2 font-medium transition-colors ${
                  isActive('/') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`py-2 font-medium transition-colors ${
                  isActive('/about') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/zones"
                className={`py-2 font-medium transition-colors ${
                  isActive('/zones') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Zones
              </Link>
              <Link
                to="/programs"
                className={`py-2 font-medium transition-colors ${
                  isActive('/programs') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs
              </Link>
              <Link
                to="/gallery"
                className={`py-2 font-medium transition-colors ${
                  isActive('/gallery') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className={`py-2 font-medium transition-colors ${
                  isActive('/contact') ? 'text-[#D9A20E]' : 'text-[#123458] hover:text-[#D9A20E]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-[#D9A20E] text-[#123458] px-6 py-2.5 rounded-full font-bold mt-2 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Visit
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
