import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Phone, CalendarCheck, Award, Heart } from 'lucide-react';
import { COMPANY } from '../../data/cabData';
import aboutImage from '../../assets/pecab/about-child.jpeg';

export const About: React.FC = () => {
  const trustPoints = [
    'All India Tourist Permit – travel anywhere across Gujarat & India',
    'Clean, sanitized, and well-maintained AC vehicles',
    'Experienced, polite & police-verified local drivers',
    'Transparent pricing – 100% no hidden charges or surprise costs',
    'Serving 10+ major tourist circuits across Kutch & Saurashtra',
    '24×7 emergency support, night rides & instant cab replacement',
  ];

  const handleBookClick = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Floating Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover border border-gray-100">
              <img
                src={aboutImage}
                alt="Shree Cab family-friendly and safe service"
                className="w-full h-[460px] sm:h-[480px] object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F44]/50 via-transparent to-transparent" />

              {/* Bottom Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 flex items-center gap-4 shadow-lg border border-white/40">
                  <div className="w-11 h-11 bg-[#FFD200] rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                    <Heart className="w-6 h-6 text-[#0A1F44] fill-current" />
                  </div>
                  <div>
                    <div className="font-extrabold text-[#0A1F44] text-sm">
                      Family-Friendly Service
                    </div>
                    <div className="text-gray-500 text-xs">
                      Safe, respectful & comfortable rides for families in Kutch
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-[#003B95] rounded-2xl p-5 shadow-blue text-white hidden sm:block border-2 border-white"
            >
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-[#FFD200]" />
                <span className="text-3xl font-black text-[#FFD200]">10+</span>
              </div>
              <div className="text-xs text-blue-100 font-semibold mt-1">
                Years of Trusted Cab Service
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Content & Trust Points */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              <ShieldCheck className="w-4 h-4 text-[#003B95]" />
              About Shree Cab
            </span>

            <h2 className="section-title mb-5">
              Your Most Trusted Cab Service in{' '}
              <span className="text-[#003B95]">Bhuj & Kutch</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
              Shree Cab Kutch (Shree Tours & Travels) is your premier car rental agency headquartered in Bhuj.
              We specialize in delivering spotless, fully air-conditioned, and comfortable rides for tourists exploring the White Desert (Rann of Kutch), heritage explorers visiting Mandvi and Dholavira, corporate executives, and local travelers.
            </p>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6">
              Whether you require a quick airport transfer, a multi-day family holiday package, an urgent midnight emergency ride, or a fleet of luxury wedding cars, our polite and licensed chauffeurs ensure punctuality, safety, and utmost convenience.
            </p>

            {/* Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-gray-700">
                  <CheckCircle2 className="w-4 h-4 text-[#003B95] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleBookClick}
                className="btn-primary text-xs uppercase px-7 py-3 font-extrabold tracking-wider"
              >
                <CalendarCheck className="w-4 h-4" /> Book a Ride Now
              </button>

              <a
                href={`tel:+91${COMPANY.phone}`}
                className="btn-outline text-xs uppercase px-6 py-3 font-extrabold tracking-wider"
              >
                <Phone className="w-4 h-4" /> Call +91 {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
