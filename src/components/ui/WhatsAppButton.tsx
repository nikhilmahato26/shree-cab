import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex items-end flex-col select-none">
      {/* Tooltip speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            className="mb-3 p-3 bg-white text-slate-800 text-xs sm:text-sm rounded-2xl shadow-xl border border-slate-200/80 max-w-xs flex items-start gap-2"
          >
            <div className="flex-1">
              <p className="font-semibold text-slate-900">Need a Cab in Bhuj-Kutch?</p>
              <p className="text-slate-600 mt-0.5">Chat with us on WhatsApp for quick assistance.</p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Shree Cab Kutch on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 transition-colors focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        <span className="sr-only">Contact Shree Cab Kutch on WhatsApp</span>

        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/25 animate-ping pointer-events-none opacity-75" />

        <MessageCircle className="w-7 h-7 relative z-10 transition-transform group-hover:rotate-6" />
      </motion.a>
    </div>
  );
};
