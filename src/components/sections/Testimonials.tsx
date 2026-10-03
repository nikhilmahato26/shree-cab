import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/cabData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 4500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleManualNav = (action: () => void) => {
    if (timerRef.current) clearInterval(timerRef.current);
    action();
    timerRef.current = setInterval(nextSlide, 4500);
  };

  // Get 3 visible testimonials for desktop view
  const visibleCards = Array.from({ length: 3 }, (_, i) => TESTIMONIALS[(currentIndex + i) % TESTIMONIALS.length]);

  return (
    <section className="py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <MessageSquareQuote className="w-4 h-4 text-[#003B95]" />
            Testimonials
          </span>
          <h2 className="section-title mb-4">
            What Our Travelers <span className="text-[#003B95]">Say</span>
          </h2>
          <p className="section-sub mx-auto">
            Genuine experiences from families, tourists, and corporate travelers who toured Kutch with Shree Cab.
          </p>
        </motion.div>

        {/* Desktop 3-Card Carousel View */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((item, idx) => (
              <motion.div
                key={`${item.name}-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className={`bg-white rounded-3xl p-6 sm:p-7 border flex flex-col justify-between ${
                  idx === 0
                    ? 'border-[#FFD200] shadow-yellow'
                    : 'border-gray-100 shadow-card'
                }`}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, sIdx) => (
                      <Star key={sIdx} className="w-4 h-4 text-[#FFD200] fill-[#FFD200]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    "{item.review}"
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-[#0A1F44] text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-400 font-semibold">
                      {item.location}
                    </p>
                  </div>
                  <span className="text-[11px] font-bold text-[#003B95] bg-[#EFF6FF] px-2.5 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Single Card Carousel */}
        <div className="block md:hidden mb-8">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-6 border-2 border-[#FFD200] shadow-yellow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, sIdx) => (
                  <Star key={sIdx} className="w-4 h-4 text-[#FFD200] fill-[#FFD200]" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                "{TESTIMONIALS[currentIndex].review}"
              </p>
            </div>

            <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-[#0A1F44] text-sm">
                  {TESTIMONIALS[currentIndex].name}
                </h4>
                <p className="text-xs text-gray-400 font-semibold">
                  {TESTIMONIALS[currentIndex].location}
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#003B95] bg-[#EFF6FF] px-2 py-0.5 rounded-full">
                {TESTIMONIALS[currentIndex].type}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => handleManualNav(prevSlide)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white text-[#0A1F44] flex items-center justify-center hover:bg-[#FFD200] hover:border-[#FFD200] transition-colors shadow-sm focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleManualNav(() => setCurrentIndex(idx))}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all focus:outline-none ${
                  idx === currentIndex
                    ? 'w-6 bg-[#FFD200]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleManualNav(nextSlide)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white text-[#0A1F44] flex items-center justify-center hover:bg-[#FFD200] hover:border-[#FFD200] transition-colors shadow-sm focus:outline-none"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
