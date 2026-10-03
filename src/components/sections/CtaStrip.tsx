import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { COMPANY } from '../../data/cabData';

export const CtaStrip: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dynamic Animated Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #003B95 0%, #0A1F44 50%, #003B95 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 6s ease infinite',
        }}
      />

      {/* Floating Animated Ambient Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FFD200]/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-blue-400/20 rounded-full blur-2xl pointer-events-none"
      />

      {/* Dot Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, #FFD200 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Pulsing Status Badge */}
          <span className="inline-flex items-center gap-2 bg-[#FFD200]/20 text-[#FFD200] font-black text-xs sm:text-sm px-4 py-1.5 rounded-full mb-6 border border-[#FFD200]/30 uppercase tracking-wider">
            <span className="w-2.5 h-2.5 bg-[#FFD200] rounded-full animate-pulse" />
            Available Right Now
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
            Ready to Book Your Ride in Kutch?
          </h2>

          <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Call or WhatsApp us right now to lock in your cab within minutes at the best transparent rates in Bhuj.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:+91${COMPANY.phone}`}
              className="btn-primary text-xs sm:text-sm uppercase px-8 py-4 font-black tracking-wider shadow-lg"
            >
              <Phone className="w-4 h-4" /> Call +91 {COMPANY.phone}
            </a>

            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=Hi Shree Cab! I want to book a cab right now.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 font-black text-xs sm:text-sm uppercase text-white hover:bg-white hover:text-[#0A1F44] transition-all tracking-wider shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Book via WhatsApp
            </a>
          </div>

          <p className="text-blue-200/80 text-xs sm:text-sm mt-6">
            Instant booking confirmation • Clean AC fleet • Polite verified drivers
          </p>
        </motion.div>
      </div>
    </section>
  );
};
