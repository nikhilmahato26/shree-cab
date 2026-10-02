import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Car, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/contact';
import { Button } from '../ui/Button';

interface NavbarProps {
  onBookClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Travel', href: '#travel' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookingTrigger = () => {
    setIsMobileMenuOpen(false);
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-amber-900/10 py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo / Treatment */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="Shree Cab Kutch Home"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-amber-500 shadow-sm border border-slate-800 group-hover:scale-105 transition-transform">
                <Car className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none group-hover:text-amber-600 transition-colors">
                  Shree Cab <span className="text-amber-600">Kutch</span>
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-500 mt-0.5">
                  Bhuj • Cabs & Travel
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg hover:bg-amber-50/60 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right side Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="flex items-center gap-2 text-xs font-bold text-slate-700 hover:text-amber-600 transition-colors py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200/80"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>{BUSINESS_INFO.primaryPhoneDisplay}</span>
              </a>

              <Button
                variant="primary"
                size="sm"
                onClick={handleBookingTrigger}
                className="font-bold text-sm"
              >
                Book a Cab
              </Button>
            </div>

            {/* Mobile Menu & Call buttons */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href={`tel:${BUSINESS_INFO.primaryPhone}`}
                className="p-2 rounded-xl bg-amber-50 text-amber-700 border border-amber-200/60 focus:outline-none"
                aria-label="Call Shree Cab Kutch"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-900" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu Drawer */}
          <div className="fixed top-[65px] left-0 right-0 bg-white border-b border-slate-200 p-6 shadow-2xl space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top duration-200">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={handleBookingTrigger}
              >
                Book a Cab
              </Button>

              <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-600 flex items-center justify-between">
                <span className="font-semibold text-slate-900">Direct Helpline:</span>
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="font-bold text-amber-600 hover:underline"
                >
                  {BUSINESS_INFO.primaryPhoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
