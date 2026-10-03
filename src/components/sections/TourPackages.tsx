import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Compass,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Sparkles,
  Eye,
  X,
  Utensils,
  Hotel,
  Car,
  ShieldCheck,
} from 'lucide-react';
import { TOUR_PACKAGES, TourPackage, COMPANY } from '../../data/cabData';
import { useToast } from '../ui/useToast';

export const TourPackages: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<string | null>(null);
  const { showToast } = useToast();

  const handleBookWhatsApp = (pkg: TourPackage) => {
    const text = [
      `🐪 *Rann Utsav Tour Package Booking* 🐪`,
      ``,
      `*Package:* ${pkg.title} (${pkg.duration})`,
      `*Price:* ${pkg.priceFormatted} ${pkg.priceNote}`,
      `*Destinations:* ${pkg.destinations.slice(0, 3).join(', ')}`,
      ``,
      `Hi Shree Cab! I want to book this holiday package. Please share available dates and hotel options.`,
    ].join('\n');

    showToast(`Opening WhatsApp for ${pkg.title}...`, 'info');
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="packages" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">
            <Compass className="w-4 h-4 text-[#003B95]" />
            Special Holiday Packages
          </span>
          <h2 className="section-title mb-3">
            Rann Utsav <span className="text-[#003B95]">Tour Packages</span>
          </h2>
          <div className="inline-block bg-[#FFD200]/25 border border-[#FFD200] px-4 py-1.5 rounded-full text-xs sm:text-sm font-black text-[#0A1F44] tracking-wide mb-3">
            "कच्छ नही देखा तो कुछ नही देखा!!!" — India's Largest Desert Cultural Festival
          </div>
          <p className="section-sub mx-auto">
            All-inclusive holiday packages with 3-star resort stays, delicious unlimited meals, dedicated private AC cabs, and local guided sightseeing.
          </p>
        </motion.div>

        {/* 2-Column Packages Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {TOUR_PACKAGES.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-white rounded-[2rem] overflow-hidden border-2 card-hover flex flex-col justify-between ${
                pkg.featured
                  ? 'border-[#FFD200] shadow-[0_12px_45px_rgba(255,210,0,0.35)] ring-4 ring-[#FFD200]/20'
                  : 'border-gray-200 shadow-card'
              }`}
            >
              <div>
                {/* Header Banner */}
                <div className="bg-[#0A1F44] text-white p-6 sm:p-7 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#003B95]/40 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-[#FFD200] text-[#0A1F44] text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                          {pkg.duration}
                        </span>
                        <span className="text-xs font-bold text-blue-200">
                          {pkg.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                        {pkg.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-blue-200 font-semibold mt-1">
                        {pkg.tagline}
                      </p>
                    </div>

                    {/* Price Tag */}
                    <div className="text-right shrink-0 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/10">
                      <span className="text-[10px] font-bold text-white/70 block uppercase tracking-wider">
                        Package Rate
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-[#FFD200] tracking-tight">
                        {pkg.priceFormatted}
                      </span>
                      <span className="text-[10px] font-bold text-blue-200 block">
                        {pkg.priceNote}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Package Body */}
                <div className="p-6 sm:p-7">
                  {/* Poster Thumbnail Strip with click to zoom */}
                  <div className="mb-6 p-3 rounded-2xl bg-[#F8FAFC] border border-gray-200 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-20 rounded-xl overflow-hidden shadow-sm shrink-0 border border-gray-200 group">
                        <img
                          src={pkg.posterImage}
                          alt={`${pkg.title} official flyer poster`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform cursor-pointer"
                          onClick={() => setSelectedPoster(pkg.posterImage)}
                        />
                        <button
                          type="button"
                          onClick={() => setSelectedPoster(pkg.posterImage)}
                          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white"
                          aria-label="View poster full size"
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                      </div>

                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-black uppercase text-[#003B95]">
                          <Sparkles className="w-3.5 h-3.5 text-[#FFD200] fill-[#FFD200]" />
                          Official Brochure Poster
                        </div>
                        <p className="text-xs text-gray-500 font-semibold mt-0.5">
                          Tap to view complete flyer and full itinerary breakdown.
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedPoster(pkg.posterImage)}
                      className="inline-flex items-center gap-1 text-xs font-black text-[#003B95] hover:text-[#0A1F44] bg-white px-3 py-1.5 rounded-lg border border-gray-200 hover:border-[#003B95] transition-colors shrink-0 cursor-pointer shadow-xs"
                    >
                      <Eye className="w-3.5 h-3.5" /> View Flyer
                    </button>
                  </div>

                  {/* Highlights Bar */}
                  <div className="grid grid-cols-3 gap-2 text-center mb-6">
                    <div className="p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col items-center justify-center">
                      <Hotel className="w-4 h-4 text-[#003B95] mb-1" />
                      <span className="text-[11px] font-bold text-[#0A1F44]">
                        {pkg.nights === 1 ? 'Resort Stay' : '3-Star Resort'}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-100 flex flex-col items-center justify-center">
                      <Utensils className="w-4 h-4 text-amber-600 mb-1" />
                      <span className="text-[11px] font-bold text-[#0A1F44]">
                        {pkg.nights === 1 ? 'Meals Option' : 'Unlimited Food'}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex flex-col items-center justify-center">
                      <Car className="w-4 h-4 text-emerald-600 mb-1" />
                      <span className="text-[11px] font-bold text-[#0A1F44]">
                        Pvt AC Cab
                      </span>
                    </div>
                  </div>

                  {/* Inclusions Checklist */}
                  <div className="mb-6">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1F44] mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Package Inclusions:
                    </h4>
                    <div className="space-y-2">
                      {pkg.inclusions.map((inc, iIdx) => (
                        <div key={iIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Destinations Covered */}
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#0A1F44] mb-2.5 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#003B95]" />
                      Sightseeing Highlights:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.destinations.map((dest, dIdx) => (
                        <span
                          key={dIdx}
                          className="bg-gray-100 text-gray-700 text-xs font-bold px-2.5 py-1 rounded-lg border border-gray-200"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 sm:p-7 pt-0 border-t border-gray-100 mt-4 bg-gray-50/40">
                <div className="pt-4 grid sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:+91${COMPANY.phone}`}
                    className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full border-2 border-[#003B95] text-xs font-black uppercase text-[#003B95] hover:bg-[#003B95] hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" /> Call +91 {COMPANY.phone}
                  </a>

                  <button
                    type="button"
                    onClick={() => handleBookWhatsApp(pkg)}
                    className="btn-primary py-3 px-4 text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#0A1F44]" /> Book via WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Group & Corporate Package Notice */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#FFD200] rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-xs">
              🎪
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-black text-[#0A1F44]">
                Planning a School, College or Corporate Group Tour?
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-0.5">
                We organize customized Tempo Traveller and Force Urbania tour packages with tent city bookings. Contact: <span className="text-[#003B95] font-bold">9727862635 / 9979368035</span>
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi Shree Cab! I want to enquire about customized group Rann Utsav packages.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-xs uppercase font-extrabold px-6 py-3 shrink-0"
          >
            Custom Group Quote
          </a>
        </div>
      </div>

      {/* Lightbox Modal for Full Poster View */}
      <AnimatePresence>
        {selectedPoster && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
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
                  <Compass className="w-4 h-4 text-[#FFD200]" />
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
                  alt="Rann Utsav Brochure Flyer"
                  className="max-w-full max-h-[75vh] object-contain rounded-lg shadow"
                />
              </div>

              <div className="p-4 bg-white flex items-center justify-between border-t border-gray-100">
                <div className="text-xs font-bold text-gray-600">
                  Call / WhatsApp: <span className="text-[#003B95] font-black">+91 {COMPANY.phone}</span>
                </div>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=Hi Shree Cab! I am interested in this Rann Utsav tour package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs uppercase font-extrabold px-4 py-2"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
