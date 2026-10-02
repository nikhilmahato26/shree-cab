import React from 'react';
import { Car, Navigation, MapPin, Compass, Users, Bus, ArrowUpRight } from 'lucide-react';
import { SERVICES, ServiceItem } from '../../data/services';
import { SectionHeading } from '../ui/SectionHeading';

const iconMap = {
  Car: Car,
  Navigation: Navigation,
  MapPin: MapPin,
  Compass: Compass,
  Users: Users,
  Bus: Bus,
};

export const Services: React.FC = () => {
  const handleEnquireService = (serviceTitle: string) => {
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What We Provide"
          title="Our Travel Services"
          subtitle="Dedicated transportation and travel solutions tailored for individual, family, and group journeys across Bhuj-Kutch and Gujarat."
          centered
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service: ServiceItem) => {
            const IconComponent = iconMap[service.iconName] || Car;

            return (
              <div
                key={service.id}
                className="group relative bg-[#FAF8F5] hover:bg-white rounded-2xl p-7 border border-amber-900/10 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 group-hover:border-amber-200 group-hover:text-amber-800 transition-colors">
                      {service.featureBadge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">AC Fleet Available</span>
                  <button
                    onClick={() => handleEnquireService(service.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 group-hover:translate-x-1 transition-all"
                  >
                    <span>Enquire Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
