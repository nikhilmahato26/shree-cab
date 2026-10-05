import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, SquarePen, X } from 'lucide-react';
import { COMPANY } from '../../data/cabData';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FloatingActions: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after 1.5 seconds
    const btnTimer = setTimeout(() => setShowButton(true), 1500);

    // Show tooltip bubble after 3.5 seconds, auto-hide after 8 seconds
    const tipShowTimer = setTimeout(() => setShowTooltip(true), 3500);
    const tipHideTimer = setTimeout(() => setShowTooltip(false), 9000);

    return () => {
      clearTimeout(btnTimer);
      clearTimeout(tipShowTimer);
      clearTimeout(tipHideTimer);
    };
  }, []);

  const handleEnquiryClick = () => {
    const el = document.getElementById('booking') || document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating WhatsApp Widget with Speech Bubble (Desktop & Mobile) */}
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-20 md:bottom-6 right-5 md:right-6 z-50 flex items-end gap-3"
          >
            {/* Interactive Speech Bubble */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.9 }}
                  className="hidden sm:flex items-center gap-2 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,59,149,0.18)] px-4 py-2.5 border border-gray-100"
                >
                  <div>
                    <p className="text-[#0A1F44] font-black text-xs sm:text-sm whitespace-nowrap">
                      Book via WhatsApp! 🚕
                    </p>
                    <p className="text-gray-400 text-[10px] font-semibold">
                      Instant cab confirmation
                    </p>
                  </div>
                  <button
                    onClick={() => setShowTooltip(false)}
                    className="text-gray-300 hover:text-gray-500 p-0.5 ml-1"
                    aria-label="Close tooltip"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulsing WhatsApp Action Button with authentic WhatsApp logo */}
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hi Shree Cab! I want to book a cab in Kutch.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:scale-108 transition-all animate-whatsapp focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
              aria-label="Chat with Shree Cab on WhatsApp"
            >
              <WhatsAppIcon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom Action Bar matching user screenshot: Call | WhatsApp | Enquiry */}
      <div className="fixed bottom-0 left-0 right-0 z-40 block md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 py-1.5 px-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="grid grid-cols-3 divide-x divide-gray-200 max-w-md mx-auto">
          {/* Call Button */}
          <a
            href={`tel:+91${COMPANY.phone}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 text-[#0A1F44] active:scale-95 transition-transform"
            aria-label="Call Shree Cab"
          >
            <Phone className="w-5 h-5 text-[#D48B00] mb-0.5" />
            <span className="text-xs font-semibold text-gray-800">Call</span>
          </a>

          {/* WhatsApp Button with official WhatsApp icon */}
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hi Shree Cab! I want to book a cab.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 text-[#0A1F44] active:scale-95 transition-transform"
            aria-label="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#D48B00] mb-0.5" />
            <span className="text-xs font-semibold text-gray-800">WhatsApp</span>
          </a>

          {/* Enquiry Button */}
          <button
            type="button"
            onClick={handleEnquiryClick}
            className="flex flex-col items-center justify-center py-1.5 px-2 text-[#0A1F44] active:scale-95 transition-transform cursor-pointer"
            aria-label="Enquiry Form"
          >
            <SquarePen className="w-5 h-5 text-[#D48B00] mb-0.5" />
            <span className="text-xs font-semibold text-gray-800">Enquiry</span>
          </button>
        </div>
      </div>
    </>
  );
};
