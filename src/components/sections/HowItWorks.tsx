import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, PhoneCall, Car, Zap } from 'lucide-react';
import { HOW_IT_WORKS } from '../../data/cabData';

export const HowItWorks: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'location':
        return <MapPin className="w-8 h-8 text-[#003B95]" />;
      case 'phone':
        return <PhoneCall className="w-8 h-8 text-[#003B95]" />;
      case 'car':
        return <Car className="w-8 h-8 text-[#003B95]" />;
      default:
        return <MapPin className="w-8 h-8 text-[#003B95]" />;
    }
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <Zap className="w-4 h-4 fill-current text-[#003B95]" />
            Simple Process
          </span>
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="section-sub mx-auto">
            Get from A to B across Kutch with just a quick call or WhatsApp message.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting gradient line on desktop */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#FFD200] via-[#003B95] to-[#FFD200] z-0" />

          {HOW_IT_WORKS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* Step Icon & Number Badge */}
              <div className="relative mb-6">
                <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#FFD200] rounded-full flex items-center justify-center z-10 shadow-sm">
                  <span className="text-[#0A1F44] font-extrabold text-xs">{item.step}</span>
                </div>
                <div className="w-20 h-20 bg-white rounded-2xl shadow-card flex items-center justify-center group-hover:scale-110 group-hover:shadow-card-hover transition-all duration-300 border border-gray-100">
                  {getIcon(item.icon)}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-[#0A1F44] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
