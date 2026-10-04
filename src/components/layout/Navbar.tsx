import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CalendarCheck, Menu, X, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../../data/cabData';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Packages', href: '#packages' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'One-Way', href: '#oneway' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Routes', href: '#routes' },
  { label: 'About', href: '#about' },
  { label: 'Payment', href: '#payment' },
  { label: 'Contact', href: '#contact' },
];

const SECTION_IDS = ['home', 'packages', 'fleet', 'oneway', 'gallery', 'services', 'routes', 'about', 'payment', 'contact'];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy
      let current = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = window.innerWidth >= 768 ? 76 : 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      window.history.replaceState(null, '', href);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,59,149,0.1)]'
          : 'bg-white'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[4.75rem]">
          {/* Brand Logo */}
          <button
            type="button"
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[#003B95]/40 rounded-lg group"
            aria-label="Shree Cab Home"
          >
            <img src="/logo.png" alt="Shree Cab Logo" className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-xl shadow-md group-hover:scale-105 transition-transform" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0A1F44]">
                  SHREE<span className="text-[#003B95]">CAB</span>
                </span>
                <span className="bg-[#FFD200] text-[#0A1F44] text-[10px] font-black uppercase px-1.5 py-0.5 rounded">
                  KUTCH
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#003B95]" /> 24×7 Cab Service
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3.5 py-2 text-sm font-bold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#003B95]/30 ${
                    isActive
                      ? 'text-[#003B95]'
                      : 'text-gray-600 hover:text-[#003B95]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#FFD200] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:+91${COMPANY.phone}`}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-gray-200 bg-gray-50 text-xs font-bold text-[#0A1F44] hover:bg-gray-100 hover:border-gray-300 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <Phone className="w-3.5 h-3.5 text-[#003B95]" />
              <span>+91 {COMPANY.phone}</span>
            </a>

            <button
              type="button"
              onClick={() => handleNavClick('#home')}
              className="btn-primary text-xs uppercase px-5 py-2.5 font-extrabold tracking-wider"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Cab</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:+91${COMPANY.phone}`}
              className="p-2 rounded-full bg-[#EFF6FF] text-[#003B95] focus:outline-none"
              aria-label="Call Shree Cab"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-gray-100 bg-white shadow-xl overflow-hidden px-4 py-4"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <button
                    key={link.label}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                      isActive
                        ? 'bg-[#EFF6FF] text-[#003B95]'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={`tel:+91${COMPANY.phone}`}
                className="btn-outline text-center py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" /> Call +91 {COMPANY.phone}
              </a>
              <button
                type="button"
                onClick={() => handleNavClick('#home')}
                className="btn-primary text-center py-2.5 text-xs font-bold uppercase tracking-wider"
              >
                <CalendarCheck className="w-4 h-4" /> Book Cab Online
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
