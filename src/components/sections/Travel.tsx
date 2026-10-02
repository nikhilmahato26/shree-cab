import React from 'react';
import { TRAVEL_CATEGORIES, TravelCategory } from '../../data/travel';
import { SectionHeading } from '../ui/SectionHeading';
import { ArrowRight, Compass } from 'lucide-react';
import { Button } from '../ui/Button';

interface TravelProps {
  onPlanTrip?: () => void;
}

export const Travel: React.FC<TravelProps> = ({ onPlanTrip }) => {
  const handlePlanClick = () => {
    if (onPlanTrip) {
      onPlanTrip();
    } else {
      const bookingEl = document.getElementById('booking');
      if (bookingEl) bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="travel" className="py-20 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Explore Gujarat"
          title="Discover Kutch With Comfortable Travel"
          subtitle="Planning a journey around Kutch? Travel comfortably with an AC vehicle suited to your group and itinerary."
          centered
        />

        {/* Visual Travel Category Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAVEL_CATEGORIES.map((category: TravelCategory) => (
            <div
              key={category.id}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl border border-amber-900/10 transition-all duration-300 flex flex-col"
            >
              {/* Image with zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-900">
                  {category.tag}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Description & Action */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {category.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <button
                    onClick={handlePlanClick}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 group-hover:translate-x-1 transition-all"
                  >
                    <span>Plan Journey</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout box */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
              Personalized Travel Assistance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 text-white">
              Ready to travel across Bhuj and Kutch?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              Tell us your pickup location, destination, and vehicle preference. We will help arrange your AC travel smoothly.
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            onClick={handlePlanClick}
            className="shrink-0 font-bold w-full md:w-auto"
          >
            Enquire For Trip
          </Button>
        </div>
      </div>
    </section>
  );
};
