import React from 'react';
import { Car, Compass, Wind, MapPin } from 'lucide-react';

export const QuickContactBar: React.FC = () => {
  const items = [
    {
      icon: <Car className="w-5 h-5 text-amber-600" />,
      title: 'Cab Rentals',
      subtitle: 'Local & Outstation',
    },
    {
      icon: <Compass className="w-5 h-5 text-amber-600" />,
      title: 'Travel Agency',
      subtitle: 'Complete Assistance',
    },
    {
      icon: <Wind className="w-5 h-5 text-amber-600" />,
      title: 'AC Vehicles',
      subtitle: 'All Vehicles Air Conditioned',
    },
    {
      icon: <MapPin className="w-5 h-5 text-amber-600" />,
      title: 'Bhuj-Kutch',
      subtitle: 'Mirjapar Road, Gujarat',
    },
  ];

  return (
    <section className="relative z-20 -mt-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl shadow-slate-900/5 border border-amber-900/10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {items.map((item, idx) => (
          <div
            key={item.title}
            className={`flex items-center gap-3.5 ${
              idx > 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''
            }`}
          >
            <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
