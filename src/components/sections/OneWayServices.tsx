import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Navigation, Phone, CheckCircle2, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { ONE_WAY_SERVICES, COMPANY } from '../../data/cabData';
import { useToast } from '../ui/Toast';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const OneWayServices: React.FC = () => {
  const { showToast } = useToast();

  const handleBookOneWay = (serviceTitle: string, fromCity: string, toCity: string) => {
    const text = `Hi Shree Cab! 🚕 I need ONE WAY CAB daily service: ${serviceTitle}. Please share cab availability, driver details and confirm booking.`;
    showToast(`Opening WhatsApp for ${fromCity} ➜ ${toCity}...`, 'info');
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="oneway" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD200]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003B95]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#FFD200] text-[#0A1F44] px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-[#0A1F44]" />
            ONE WAY CABS DAILY SERVICES
          </div>

          <h2 className="section-title mb-4">
            Daily Guaranteed <span className="text-[#003B95]">One-Way Intercity Cabs</span>
          </h2>
          <p className="section-sub mx-auto">
            Doorstep pickup and drop between Ahmedabad, Rajkot & Bhuj-Kutch. Pay only for one-way distance with zero return charges!
          </p>
        </motion.div>

        {/* 4 One-Way Routes Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {ONE_WAY_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-100 hover:border-[#003B95]/40 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Daily Service Badge */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[#003B95] text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {service.badge}
                </span>

                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5" /> No Return Fare
                </span>
              </div>

              {/* Prominent Route Title */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-black text-[#0A1F44] tracking-tight flex items-center gap-2 group-hover:text-[#003B95] transition-colors">
                  <span>{service.title}</span>
                </h3>
                <p className="text-xs font-semibold text-gray-500 mt-1">
                  {service.description}
                </p>
              </div>

              {/* Distance & Duration Pills */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#0A1F44]">
                  <Navigation className="w-4 h-4 text-[#003B95]" />
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-extrabold">Distance</span>
                    <span>{service.distance}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-[#0A1F44]">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-extrabold">Travel Time</span>
                    <span>~{service.duration}</span>
                  </div>
                </div>
              </div>

              {/* Highlights Checklist */}
              <div className="space-y-1.5 mb-5">
                {service.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Pricing Breakdown & Instant CTA Buttons */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <div className="grid grid-cols-2 gap-3 mb-4 p-3 rounded-2xl bg-[#EFF6FF]/60 border border-blue-100">
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 block uppercase">
                      AC Sedan (Dzire / Aura)
                    </span>
                    <span className="text-xl font-black text-[#003B95]">
                      {service.sedanFare}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-gray-500 block uppercase">
                      AC SUV (Innova / Ertiga)
                    </span>
                    <span className="text-xl font-black text-[#0A1F44]">
                      {service.suvFare}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`tel:+91${COMPANY.phone}`}
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl border-2 border-[#003B95] text-xs font-black uppercase text-[#003B95] hover:bg-[#003B95] hover:text-white transition-colors text-center"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Now
                  </a>

                  <button
                    type="button"
                    onClick={() => handleBookOneWay(service.title, service.fromCity, service.toCity)}
                    className="inline-flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl bg-[#003B95] text-white text-xs font-black uppercase tracking-wider hover:bg-[#0A1F44] transition-colors shadow-sm cursor-pointer"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" /> Book One-Way
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-[#0A1F44] text-white rounded-3xl p-6 sm:p-8 shadow-xl"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white/10 rounded-xl shrink-0 text-[#FFD200]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-sm text-white">Zero Return Fare</h4>
                <p className="text-xs text-white/75 mt-0.5">Pay strictly for one-way distance. Never pay for the cab's empty return.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white/10 rounded-xl shrink-0 text-[#FFD200]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-sm text-white">Doorstep Pickup</h4>
                <p className="text-xs text-white/75 mt-0.5">Direct pickup from your home, hotel, railway station or airport.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white/10 rounded-xl shrink-0 text-[#FFD200]">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-sm text-white">Daily 24×7 Departures</h4>
                <p className="text-xs text-white/75 mt-0.5">Morning, afternoon or night departures timed perfectly with flights & trains.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 bg-white/10 rounded-xl shrink-0 text-[#FFD200]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-sm text-white">Premium Clean Cabs</h4>
                <p className="text-xs text-white/75 mt-0.5">Well-maintained AC sedans, SUVs & tempo travellers with vetted drivers.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
