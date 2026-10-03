import React from 'react';
import { motion } from 'framer-motion';
import { Navigation, Clock, MapPin, ArrowRight, Shield } from 'lucide-react';
import { POPULAR_ROUTES, COMPANY } from '../../data/cabData';
import { useToast } from '../ui/Toast';

export const PopularRoutes: React.FC = () => {
  const { showToast } = useToast();

  const handleBookRoute = (route: typeof POPULAR_ROUTES[0]) => {
    const text = `Hi Shree Cab! 🚕 I want to book a cab for the route: ${route.from} to ${route.to} (${route.distance}). Please confirm pricing & pickup.`;
    showToast(`Opening WhatsApp to book ${route.from} → ${route.to}...`, 'info');
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="routes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <Navigation className="w-4 h-4 text-[#003B95]" />
            Popular Routes & Fares
          </span>
          <h2 className="section-title mb-4">
            Top Kutch & <span className="text-[#003B95]">Gujarat Routes</span>
          </h2>
          <p className="section-sub mx-auto">
            Fixed and transparent pricing with zero surprise charges. AC Sedan and SUV options available on all routes.
          </p>
        </motion.div>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_ROUTES.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`bg-white rounded-3xl p-6 border-2 card-hover flex flex-col justify-between ${
                route.popular
                  ? 'border-[#003B95]/20 shadow-card'
                  : 'border-gray-100 shadow-sm'
              }`}
            >
              <div>
                {/* Route Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-[#003B95] bg-[#EFF6FF] px-2.5 py-1 rounded-full">
                    <MapPin className="w-3 h-3" /> One-Way / Return
                  </span>
                  {route.popular && (
                    <span className="text-[10px] font-black uppercase text-[#0A1F44] bg-[#FFD200] px-2 py-0.5 rounded-full">
                      Trending
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    From {route.from}
                  </div>
                  <h3 className="text-lg font-black text-[#0A1F44] leading-snug">
                    {route.to}
                  </h3>
                </div>

                {/* Distance & Duration Pills */}
                <div className="flex items-center gap-3 mb-5 text-xs font-bold text-gray-600 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-1">
                    <Navigation className="w-3.5 h-3.5 text-[#003B95]" />
                    <span>{route.distance}</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>~{route.duration}</span>
                  </div>
                </div>

                {/* Pricing Table / Breakdown */}
                <div className="grid grid-cols-2 gap-3 mb-5 p-3 rounded-2xl bg-[#F8FAFC] border border-gray-100">
                  <div>
                    <span className="text-[10px] font-black uppercase text-gray-400 block">
                      AC Sedan (Dzire)
                    </span>
                    <span className="text-lg font-black text-[#003B95]">
                      {route.sedanFare}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-gray-400 block">
                      AC SUV (Innova/Ertiga)
                    </span>
                    <span className="text-lg font-black text-[#0A1F44]">
                      {route.suvFare}
                    </span>
                  </div>
                </div>
              </div>

              {/* Book Route Button */}
              <button
                type="button"
                onClick={() => handleBookRoute(route)}
                className="btn-outline w-full py-2.5 text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 group-hover:bg-[#003B95] group-hover:text-white transition-all"
              >
                <span>Book This Route</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Route Customization Strip */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#003B95] text-white flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-[#FFD200]" />
            </div>
            <div>
              <h4 className="font-extrabold text-[#0A1F44] text-sm sm:text-base">
                Need a multi-day custom tour or outstation circuit?
              </h4>
              <p className="text-xs sm:text-sm text-gray-600">
                We design personalized sightseeing itineraries across Kutch, Saurashtra, and Gujarat.
              </p>
            </div>
          </div>
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi Shree Cab! I want to plan a custom Kutch tour itinerary.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs uppercase font-extrabold px-6 py-2.5 shrink-0"
          >
            Custom Tour Inquiry
          </a>
        </div>
      </div>
    </section>
  );
};
