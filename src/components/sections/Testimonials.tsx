import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink, MessageCircle } from 'lucide-react';
import { TESTIMONIALS, COMPANY } from '../../data/cabData';

// Official Multi-Color Google "G" Logo
const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

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
    timerRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleManualNav = (action: () => void) => {
    if (timerRef.current) clearInterval(timerRef.current);
    action();
    timerRef.current = setInterval(nextSlide, 5000);
  };

  // Get 3 visible testimonials for desktop view
  const visibleCards = Array.from({ length: 3 }, (_, i) => TESTIMONIALS[(currentIndex + i) % TESTIMONIALS.length]);

  return (
    <section id="reviews" className="py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm mb-4">
            <GoogleIcon className="w-4 h-4" />
            <span className="text-xs font-black text-[#0A1F44] tracking-wide uppercase">
              Google Customer Reviews
            </span>
            <span className="flex items-center text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600 inline" />
              100% Verified
            </span>
          </div>

          <h2 className="section-title mb-4">
            Loved by Travelers on <span className="text-[#003B95]">Google</span>
          </h2>
          <p className="section-sub mx-auto">
            Real experiences from tourists, families, and emergency travelers who explored Kutch and Gujarat with Shree Tours & Travels.
          </p>
        </motion.div>

        {/* Google Rating Overview Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-card mb-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Score Box */}
            <div className="flex items-center gap-5 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-[#FFD200]/60 flex items-center justify-center shrink-0 shadow-sm">
                <GoogleIcon className="w-9 h-9" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#0A1F44] tracking-tight">5.0</span>
                  <div className="flex items-center text-[#FBBC05]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#FBBC05]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-bold text-gray-700">
                  <span className="text-[#003B95] font-black">Shree tours & travels</span> • Mirjapar, Bhuj
                </p>
                <p className="text-[11px] text-gray-500 font-semibold mt-0.5">
                  Verified Google Business Profile • 5.0 Star Rating
                </p>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={COMPANY.googleReviews.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#003B95] hover:bg-[#0A1F44] text-white px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Write a Review</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={COMPANY.googleReviews.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-[#0A1F44] px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer"
              >
                <GoogleIcon className="w-4 h-4" />
                <span>View on Google Maps</span>
              </a>
            </div>

          </div>
        </motion.div>

        {/* Desktop 3-Card Carousel View */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-10">
          {visibleCards.map((item, idx) => (
            <motion.div
              key={`${item.name}-${idx}-${currentIndex}`}
              initial={{ opacity: 0.8, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={`bg-white rounded-3xl p-6 sm:p-7 border flex flex-col justify-between ${
                idx === 0
                  ? 'border-[#FFD200] shadow-yellow ring-2 ring-[#FFD200]/20'
                  : 'border-gray-200 shadow-card'
              }`}
            >
                <div>
                  {/* Reviewer Header */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm`}
                      >
                        {item.initials}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#0A1F44] text-sm leading-snug">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 font-semibold">
                          {item.location}
                        </p>
                        {item.badge && (
                          <span className="inline-block text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 mt-0.5">
                            ★ {item.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <GoogleIcon className="w-5 h-5 shrink-0 opacity-80" />
                  </div>

                  {/* Rating Stars & Time */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-0.5 text-[#FBBC05]">
                      {Array.from({ length: item.rating }).map((_, sIdx) => (
                        <Star key={sIdx} className="w-4 h-4 fill-[#FBBC05]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-gray-400">
                      {item.timeAgo}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    "{item.review}"
                  </p>

                  {/* Owner Reply if present */}
                  {item.ownerReply && (
                    <div className="mb-4 bg-gray-50 rounded-2xl p-3 border-l-4 border-[#003B95] text-xs">
                      <div className="font-bold text-[#003B95] text-[11px] flex items-center gap-1.5 mb-1">
                        <span>Response from Shree tours & travels</span>
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      </div>
                      <p className="text-gray-600 italic text-[11px] leading-relaxed">
                        "{item.ownerReply}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Tag */}
                <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#003B95] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-blue-100">
                    {item.type}
                  </span>
                  <span className="text-[10px] font-semibold text-gray-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    Verified on Google
                  </span>
                </div>
              </motion.div>
            ))}
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
              {/* Reviewer Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-11 h-11 rounded-full ${TESTIMONIALS[currentIndex].avatarBg} text-white font-black text-sm flex items-center justify-center shrink-0 shadow-sm`}
                  >
                    {TESTIMONIALS[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#0A1F44] text-sm leading-snug">
                      {TESTIMONIALS[currentIndex].name}
                    </h4>
                    <p className="text-[11px] text-gray-500 font-semibold">
                      {TESTIMONIALS[currentIndex].location}
                    </p>
                    {TESTIMONIALS[currentIndex].badge && (
                      <span className="inline-block text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 mt-0.5">
                        ★ {TESTIMONIALS[currentIndex].badge}
                      </span>
                    )}
                  </div>
                </div>
                <GoogleIcon className="w-5 h-5 shrink-0 opacity-80" />
              </div>

              {/* Rating Stars & Time */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-0.5 text-[#FBBC05]">
                  {Array.from({ length: TESTIMONIALS[currentIndex].rating }).map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-[#FBBC05]" />
                  ))}
                </div>
                <span className="text-[11px] font-bold text-gray-400">
                  {TESTIMONIALS[currentIndex].timeAgo}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{TESTIMONIALS[currentIndex].review}"
              </p>

              {/* Owner Reply */}
              {TESTIMONIALS[currentIndex].ownerReply && (
                <div className="mb-4 bg-gray-50 rounded-2xl p-3 border-l-4 border-[#003B95] text-xs">
                  <div className="font-bold text-[#003B95] text-[11px] flex items-center gap-1.5 mb-1">
                    <span>Response from Shree tours & travels</span>
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  </div>
                  <p className="text-gray-600 italic text-[11px] leading-relaxed">
                    "{TESTIMONIALS[currentIndex].ownerReply}"
                  </p>
                </div>
              )}
            </div>

            {/* Footer Tag */}
            <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
              <span className="text-[11px] font-bold text-[#003B95] bg-[#EFF6FF] px-2.5 py-1 rounded-full border border-blue-100">
                {TESTIMONIALS[currentIndex].type}
              </span>
              <span className="text-[10px] font-semibold text-gray-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                Google Review
              </span>
            </div>
          </motion.div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            type="button"
            onClick={() => handleManualNav(prevSlide)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white text-[#0A1F44] flex items-center justify-center hover:bg-[#FFD200] hover:border-[#FFD200] transition-colors shadow-sm focus:outline-none cursor-pointer"
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
                className={`h-2 rounded-full transition-all focus:outline-none cursor-pointer ${
                  idx === currentIndex
                    ? 'w-6 bg-[#003B95]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => handleManualNav(nextSlide)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white text-[#0A1F44] flex items-center justify-center hover:bg-[#FFD200] hover:border-[#FFD200] transition-colors shadow-sm focus:outline-none cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Google Maps Callout Card */}
        <div className="text-center pt-2">
          <p className="text-xs font-semibold text-gray-500 mb-3">
            Want to see all real reviews or post your own trip experience?
          </p>
          <a
            href={COMPANY.googleReviews.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-black text-[#003B95] hover:text-[#0A1F44] bg-white px-5 py-2.5 rounded-full border border-gray-300 shadow-sm hover:shadow transition-all"
          >
            <GoogleIcon className="w-4 h-4" />
            <span>Read All Google Reviews for Shree tours & travels ➔</span>
          </a>
        </div>

      </div>
    </section>
  );
};
