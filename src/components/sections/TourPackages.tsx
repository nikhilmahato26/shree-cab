import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Eye, X, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { TOUR_PACKAGES, TourPackage, COMPANY } from '../../data/cabData';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { useToast } from '../ui/useToast';

export const TourPackages: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(null);
  const { showToast } = useToast();

  const handleBookWhatsApp = (pkg: TourPackage) => {
    const text = [
      `🐪 *Kutch Tour Package Booking Enquiry* 🐪`,
      ``,
      `*Package:* ${pkg.duration} (${pkg.subtitle})`,
      `*Starting Price:* ${pkg.priceFormatted} ${pkg.priceNote}`,
      `*Key Sightseeing:*`,
      pkg.highlights.map((h) => `• ${h}`).join('\n'),
      ``,
      `Hi Shree Cab! I want to book this holiday package. Please share available dates, customized cab options, and stay details.`,
    ].join('\n');

    showToast(`Opening WhatsApp for ${pkg.duration}...`, 'info');
    window.open(
      `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="packages" className="py-14 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          {/* Subtitle / Tag */}
          <span className="block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#D48B00] mb-1.5 sm:mb-2">
            FIXED PACKAGES
          </span>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A1F44] tracking-tight mb-2.5 sm:mb-3">
            Kutch tour packages
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
            Ready-made trips covering the White Rann, Dholavira, Mandvi and the craft villages — vehicle, driver and stay arranged together.
          </p>
        </motion.div>

        {/* 2-Column on Mobile, 4-Column on Desktop Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {TOUR_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-[#D48B00]/40"
            >
              <div>
                {/* Package Cover Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={pkg.image}
                    alt={`${pkg.duration} - ${pkg.subtitle}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {pkg.badge && (
                    <span className="absolute top-2 left-2 bg-[#0A1F44]/85 backdrop-blur-xs text-[#FFD200] text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow-xs">
                      {pkg.badge}
                    </span>
                  )}
                  {pkg.posterImage && (
                    <button
                      type="button"
                      onClick={() => setSelectedPoster(pkg.posterImage)}
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-white/90 text-gray-700 hover:text-[#003B95] hover:bg-white shadow-xs transition-colors"
                      title="View Official Flyer"
                      aria-label="View Official Flyer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-3 sm:p-4 md:p-5">
                  <h3 className="text-sm sm:text-base md:text-xl font-bold text-[#0A1F44] tracking-tight leading-snug">
                    {pkg.duration}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-[#D48B00] mt-0.5 mb-2.5 sm:mb-3">
                    {pkg.subtitle}
                  </p>

                  {/* Bullet points with distinct amber dots */}
                  <ul className="space-y-1 sm:space-y-1.5 mb-3 text-[11px] sm:text-xs md:text-sm text-gray-700 font-medium">
                    {pkg.highlights.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-1 sm:gap-1.5">
                        <span className="text-[#D48B00] font-black text-sm sm:text-base leading-none select-none mt-0.5">
                          •
                        </span>
                        <span className="leading-snug">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer with Price & Actions */}
              <div className="p-3 sm:p-4 pt-0 border-t border-gray-100 bg-gray-50/50 mt-auto">
                <div className="pt-2.5 flex items-center justify-between gap-1 flex-wrap">
                  <div>
                    <span className="text-[10px] text-gray-400 block font-semibold uppercase tracking-wider">
                      From
                    </span>
                    <span className="text-xs sm:text-sm md:text-base font-extrabold text-[#003B95]">
                      {pkg.priceFormatted}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSelectedPackage(pkg)}
                      className="px-2 py-1.5 rounded-lg border border-gray-300 text-[10px] sm:text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors"
                      title="View Details"
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      onClick={() => handleBookWhatsApp(pkg)}
                      className="inline-flex items-center gap-1 bg-[#25D366] hover:bg-[#20bd5a] text-white px-2.5 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold shadow-xs transition-transform active:scale-95"
                      aria-label="Book on WhatsApp"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                      <span className="hidden sm:inline">Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Group & Corporate Package Notice */}
        <div className="mt-10 sm:mt-12 bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FFD200] rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-xs">
              🐪
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-extrabold text-[#0A1F44]">
                Looking for a Custom Kutch Itinerary or Large Group Tour?
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-0.5">
                We organize custom AC Tempo Traveller & Urbania packages with Tent City / resort bookings.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 flex-wrap justify-center">
            <a
              href={`tel:+91${COMPANY.phone}`}
              className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl border-2 border-[#003B95] text-[#003B95] text-xs font-bold hover:bg-[#003B95] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> Call Driver
            </a>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hi Shree Cab! I want to plan a custom Kutch tour itinerary.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-sm transition-transform active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Package Details Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPackage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-lg w-full bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 bg-[#0A1F44] text-white">
                <div>
                  <h3 className="font-extrabold text-base sm:text-lg">
                    {selectedPackage.duration} — {selectedPackage.subtitle}
                  </h3>
                  <p className="text-xs text-[#FFD200] font-semibold">{selectedPackage.tagline}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPackage(null)}
                  className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6 max-h-[75vh] overflow-y-auto space-y-4">
                <div className="rounded-xl overflow-hidden aspect-[16/9] w-full bg-gray-100">
                  <img
                    src={selectedPackage.image}
                    alt={selectedPackage.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1F44] mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D48B00]" /> Sightseeing Highlights
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedPackage.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <span className="text-[#D48B00] font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1F44] mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Inclusions
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedPackage.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase font-semibold">Pricing</span>
                    <p className="text-base font-black text-[#003B95]">{selectedPackage.priceFormatted} <span className="text-xs font-medium text-gray-500">{selectedPackage.priceNote}</span></p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const pkg = selectedPackage;
                      setSelectedPackage(null);
                      handleBookWhatsApp(pkg);
                    }}
                    className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-3.5 py-2 rounded-xl text-xs font-bold shadow-xs"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" /> Enquire on WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal for Full Poster View */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedPoster(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 bg-[#0A1F44] text-white">
                <span className="font-extrabold text-sm sm:text-base flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FFD200]" />
                  Shree Tours & Travels Brochure
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedPoster(null)}
                  className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="max-h-[80vh] overflow-y-auto p-2 bg-gray-100 flex items-center justify-center">
                <img
                  src={selectedPoster}
                  alt="Kutch Tour Package Flyer"
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow"
                />
              </div>

              <div className="p-4 bg-white flex items-center justify-between border-t border-gray-100">
                <div className="text-xs font-bold text-gray-600">
                  Call / WhatsApp: <span className="text-[#003B95] font-black">+91 {COMPANY.phone}</span>
                </div>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent('Hi Shree Cab! I want to book a Kutch tour package.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-extrabold px-4 py-2 rounded-xl"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" /> Inquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
