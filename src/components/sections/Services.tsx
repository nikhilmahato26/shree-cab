import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { SERVICES_DATA, ServiceItem, COMPANY } from '../../data/cabData';
import { useToast } from '../ui/Toast';

export const Services: React.FC = () => {
  const { showToast } = useToast();

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case '24×7':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Popular':
        return 'bg-[#FFD200]/25 text-[#0A1F44] border-[#FFD200] font-black';
      case 'Special':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Affordable':
        return 'bg-blue-50 text-[#003B95] border-blue-200';
      case 'Emergency':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-amber-100 text-amber-800 border-amber-200';
    }
  };

  const handleBookService = (service: ServiceItem) => {
    const text = `Hi Shree Cab! 🚕 I want to enquire and book your ${service.title} service. Please share package rates and details.`;
    showToast(`Opening WhatsApp for ${service.title}...`, 'info');
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <Sparkles className="w-4 h-4 text-[#003B95]" />
            Our Services
          </span>
          <h2 className="section-title mb-4">
            Rides for Every <span className="text-[#003B95]">Occasion</span>
          </h2>
          <p className="section-sub mx-auto">
            From White Desert sightseeing and temple pilgrimages to airport transfers and hospital emergencies — Shree Cab covers every journey across Kutch.
          </p>
        </motion.div>

        {/* 3-Column Services Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card card-hover border border-gray-100 flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 ${
                      service.id === 'wedding' ? 'object-[center_45%]' : 'object-center'
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Floating Badges */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm ${getBadgeStyle(
                        service.badge
                      )}`}
                    >
                      {service.badge}
                    </span>
                  </div>

                  {service.id === 'hospital' && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-[#0A1F44]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#FFD200]/50 shadow-md">
                      <span className="text-xs">🚐</span>
                      <span className="text-[11px] font-black text-[#FFD200] tracking-wide">
                        Traveller Available
                      </span>
                    </div>
                  )}

                  {service.id === 'wedding' && (
                    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-[#0A1F44]/90 backdrop-blur-md px-3 py-1 rounded-full border border-pink-400/50 shadow-md">
                      <span className="text-xs">💐</span>
                      <span className="text-[11px] font-black text-pink-300 tracking-wide">
                        Decorated Cars
                      </span>
                    </div>
                  )}

                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#FFD200] drop-shadow">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black text-[#0A1F44] tracking-tight mb-2 group-hover:text-[#003B95] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  {/* Traveller Special Feature for Hospital */}
                  {service.id === 'hospital' && (
                    <div className="mb-4 bg-emerald-50/90 border border-emerald-200 rounded-2xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 text-base shadow-sm">
                        🚐
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-black text-emerald-950">
                          Force Tempo Traveller Option
                        </div>
                        <p className="text-[11px] text-emerald-800 font-semibold leading-tight">
                          Spacious seats for patient comfort &amp; accompanying family to Rajkot / Ahmedabad
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Special Feature for Wedding */}
                  {service.id === 'wedding' && (
                    <div className="mb-4 bg-pink-50/90 border border-pink-200 rounded-2xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-pink-600 text-white flex items-center justify-center shrink-0 text-base shadow-sm">
                        🌸
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-black text-pink-950">
                          Decorated Innova Crysta &amp; Fleet
                        </div>
                        <p className="text-[11px] text-rose-800 font-semibold leading-tight">
                          Fresh flower decorations for Baraat, groom entry &amp; wedding guest coordination
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Routes Tags */}
                  <div className="space-y-2 mb-2 border-t border-gray-100 pt-3">
                    <div className="text-[11px] font-black uppercase tracking-wider text-gray-400">
                      Popular Routes:
                    </div>
                    {service.routes.map((route, rIdx) => (
                      <div
                        key={rIdx}
                        className="flex items-center gap-2 text-xs font-bold text-[#0A1F44] bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#003B95] shrink-0" />
                        <span>{route}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => handleBookService(service)}
                  className={`w-full py-3 px-4 rounded-full font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    service.btnColor === 'yellow'
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  <span>{service.btnText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
