import React from 'react';
import { MapPin, Wind, CheckCircle2, ShieldCheck, Car } from 'lucide-react';
import aboutImg from '../../assets/images/about-kutch.jpg';
import { BUSINESS_INFO } from '../../utils/contact';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={aboutImg}
                alt="Scenic cab trip across Kutch Gujarat White Rann road"
                loading="lazy"
                className="w-full h-[360px] sm:h-[460px] object-cover object-center hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />

              {/* Floating Location Badge on Image */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-amber-600">
                    Business Location
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    Mirjapar Road, Bhuj-Kutch, Gujarat
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-200/50 rounded-full blur-3xl -z-10 pointer-events-none" />
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              badge="About Shree Cab Kutch"
              title="Your Travel Partner in Bhuj-Kutch"
              centered={false}
            />

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Shree Cab Kutch provides cab rental and travel agency services from Bhuj-Kutch, Gujarat. With a range of AC vehicles including sedans, family cars and larger group-travel vehicles, customers can enquire for transportation suited to their journey.
            </p>

            <div className="pt-2 space-y-3.5">
              <div className="flex items-start gap-3 text-slate-800">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">AC Vehicles Only</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    All listed fleet options are well-maintained air-conditioned vehicles for comfortable desert & highway journeys.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-800">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Cabs on Rent & Travel Agency</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Local sightseeing in Bhuj, Kutch desert trips, airport transfers, and outstation transportation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-slate-800">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Sedans, Family Cars & Group Vehicles</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Options ranging from Maruti Dzire and Ertiga to Innova Crysta, Tempo Traveller, and Force Urbania.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                href="#fleet"
                icon={<Car className="w-4 h-4" />}
              >
                View Vehicle Fleet
              </Button>

              <Button
                variant="outline"
                size="md"
                href="#contact"
              >
                Contact Information
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
