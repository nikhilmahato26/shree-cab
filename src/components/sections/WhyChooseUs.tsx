import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/cabData';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A1F44] overflow-hidden relative">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#003B95]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD200]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#FFD200]/20 text-[#FFD200] font-black text-xs sm:text-sm px-4 py-1.5 rounded-full mb-4 border border-[#FFD200]/30 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 fill-current" />
            Why Choose Shree Cab
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
            The Shree Cab <span className="text-[#FFD200]">Difference</span>
          </h2>

          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just drive you — we take care of your entire travel experience across Kutch and Gujarat.
          </p>
        </motion.div>

        {/* 6 Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 hover:border-[#FFD200]/40 transition-all duration-300 backdrop-blur-sm group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 group-hover:bg-[#FFD200] group-hover:shadow-[0_4px_20px_rgba(255,210,0,0.4)] transition-all duration-300">
                <span>{item.icon}</span>
              </div>

              <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-[#FFD200] transition-colors">
                {item.title}
              </h3>

              <p className="text-blue-100/90 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
