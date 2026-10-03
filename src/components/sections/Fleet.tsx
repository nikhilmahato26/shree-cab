import React from 'react';
import { motion } from 'framer-motion';
import { Car, Check, Users, Wind, Briefcase, Phone, MessageCircle, Star } from 'lucide-react';
import { FLEET_DATA, COMPANY } from '../../data/cabData';
import { useToast } from '../ui/Toast';

export const Fleet: React.FC = () => {
  const { showToast } = useToast();

  const handleWhatsAppBook = (vehicleName: string) => {
    const text = `Hi Shree Cab! 🚕 I want to book the ${vehicleName} for my journey in Kutch. Please share details and availability.`;
    showToast(`Opening WhatsApp to book ${vehicleName}...`, 'info');
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="fleet" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <Car className="w-4 h-4 text-[#003B95]" />
            Our Fleet
          </span>
          <h2 className="section-title mb-4">
            Vehicles for <span className="text-[#003B95]">Every Journey</span>
          </h2>
          <p className="section-sub mx-auto">
            Comfortable, well-maintained, and sanitized AC vehicles tailored for every travel requirement.
          </p>
        </motion.div>

        {/* 3-Column Fleet Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FLEET_DATA.map((vehicle, index) => {
            return (
              <motion.div
                key={vehicle.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative bg-white rounded-3xl p-6 border-2 card-hover flex flex-col justify-between ${
                  vehicle.featured
                    ? 'border-[#FFD200] shadow-yellow ring-2 ring-[#FFD200]/30'
                    : 'border-gray-100 shadow-card hover:border-blue-100'
                }`}
              >
                {/* Featured Badge */}
                {vehicle.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FFD200] text-[#0A1F44] text-xs font-black px-4 py-1 rounded-full flex items-center gap-1 shadow-sm whitespace-nowrap">
                    <Star className="w-3.5 h-3.5 fill-[#0A1F44]" /> Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Title & Type */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-xl font-black text-[#0A1F44] tracking-tight">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs font-bold text-[#003B95] uppercase tracking-wider mt-0.5">
                        {vehicle.type}
                      </p>
                    </div>
                    <span className="text-2xl p-1 bg-gray-50 rounded-xl">{vehicle.icon}</span>
                  </div>

                  {/* Vehicle Image */}
                  <div className="h-44 sm:h-48 my-3 flex items-center justify-center p-2 group overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="max-h-full max-w-full object-contain transition-transform duration-400 group-hover:scale-108"
                      loading="lazy"
                    />
                  </div>

                  {/* Capacity & Specs Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 bg-[#EFF6FF] text-[#003B95] px-2.5 py-1 rounded-lg text-xs font-bold">
                      <Users className="w-3.5 h-3.5" /> {vehicle.seats} Seater
                    </span>
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-lg text-xs font-bold">
                      <Wind className="w-3.5 h-3.5" /> AC Cabin
                    </span>
                    <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2.5 py-1 rounded-lg text-xs font-bold">
                      <Briefcase className="w-3.5 h-3.5" /> Luggage Boot
                    </span>
                  </div>

                  {/* Specs List */}
                  <div className="space-y-1.5 mb-5 border-t border-gray-100 pt-3">
                    {vehicle.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                        <Check className="w-3.5 h-3.5 text-[#003B95] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Action Buttons */}
                <div className="border-t border-gray-100 pt-4 mt-auto">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-[11px] font-bold text-gray-400 block uppercase">
                        Starting Rate
                      </span>
                      <span className="text-2xl font-black text-[#003B95]">
                        ₹{vehicle.pricePerKm}
                        <span className="text-xs font-bold text-gray-500"> / km</span>
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold text-[#0A1F44] bg-[#FFD200]/30 border border-[#FFD200] px-2 py-0.5 rounded">
                      Best Value
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:+91${COMPANY.phone}`}
                      className="inline-flex items-center justify-center gap-1 py-2.5 px-3 rounded-full border-2 border-[#003B95] text-xs font-bold text-[#003B95] hover:bg-[#003B95] hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call
                    </a>

                    <button
                      type="button"
                      onClick={() => handleWhatsAppBook(vehicle.name)}
                      className="btn-primary py-2.5 px-3 text-xs uppercase font-extrabold tracking-wider"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
