import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CalendarCheck, Wind, MapPin, ArrowRight } from 'lucide-react';
import heroImg from '../../assets/images/hero-kutch.jpg';
import { BUSINESS_INFO } from '../../utils/contact';
import { Button } from '../ui/Button';

interface HeroProps {
  onBookClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  const handleBookClick = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      const bookingEl = document.getElementById('booking');
      if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with warm gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Comfortable cab travel across scenic Kutch Gujarat highway"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
        />
        {/* Multilayered subtle overlays for high contrast and readability */}
        <div className="absolute inset-0 bg-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-12">
        {/* Location / verified badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wide text-amber-300 mb-6 shadow-md"
        >
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Mirjapar Road, Bhuj-Kutch, Gujarat</span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span className="text-white/90">Cabs on Rent & Travel Agency</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15]"
        >
          Explore Kutch With{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
            Comfort & Confidence
          </span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-base sm:text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed"
        >
          Reliable AC cab rentals and travel services in Bhuj-Kutch for local travel, sightseeing, outstation journeys and group transportation.
        </motion.p>

        {/* Key trust pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 inline-flex items-center gap-2 px-4 py-1 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-medium"
        >
          <Wind className="w-4 h-4 text-amber-400" />
          <span>All listed vehicles are AC vehicles</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={handleBookClick}
            icon={<CalendarCheck className="w-5 h-5" />}
            className="w-full sm:w-auto font-bold shadow-lg shadow-amber-600/30 hover:shadow-amber-600/50"
          >
            Book a Cab
          </Button>

          <Button
            variant="call"
            size="lg"
            href={`tel:${BUSINESS_INFO.primaryPhone}`}
            icon={<Phone className="w-5 h-5 text-amber-400" />}
            className="w-full sm:w-auto font-bold bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md"
          >
            Call Now
          </Button>
        </motion.div>
      </div>

      {/* Decorative bottom curve / fade to warm page */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none" />
    </section>
  );
};
