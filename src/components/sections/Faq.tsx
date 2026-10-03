import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, PhoneCall } from 'lucide-react';
import { FAQS, COMPANY } from '../../data/cabData';

export const Faq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">
            <HelpCircle className="w-4 h-4 text-[#003B95]" />
            FAQ
          </span>
          <h2 className="section-title mb-4">
            Frequently Asked <span className="text-[#003B95]">Questions</span>
          </h2>
          <p className="section-sub mx-auto">
            Everything you need to know about booking, vehicles, permits, and traveling with Shree Cab.
          </p>
        </motion.div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#003B95] shadow-card bg-blue-50/20'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-[#0A1F44] text-base sm:text-lg pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#003B95] text-white rotate-180'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 text-sm sm:text-base leading-relaxed border-t border-gray-100/60 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="text-center mt-12 p-6 bg-blue-50 rounded-3xl border border-blue-100">
          <p className="text-[#0A1F44] font-extrabold text-base mb-1">
            Still have questions? We're just a call away!
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mb-4">
            Our friendly customer support is active 24 hours a day, 7 days a week.
          </p>
          <a
            href={`tel:+91${COMPANY.phone}`}
            className="btn-primary text-xs uppercase font-extrabold tracking-wider px-6 py-2.5 inline-flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" /> Call +91 {COMPANY.phone}
          </a>
        </div>
      </div>
    </section>
  );
};
