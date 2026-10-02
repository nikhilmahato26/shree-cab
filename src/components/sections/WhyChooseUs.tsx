import React from 'react';
import { Wind, CarFront, MapPin, MessageSquare, Compass, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Wind className="w-6 h-6 text-amber-600" />,
      title: 'AC Vehicles',
      description: 'All listed vehicles are available as AC vehicles, ensuring cool and relaxing journeys across the Gujarat climate.',
    },
    {
      icon: <CarFront className="w-6 h-6 text-amber-600" />,
      title: 'Multiple Vehicle Options',
      description: 'Choose from cars and larger group-travel vehicles — from comfortable sedans to MPVs, Tempo Travellers, and Urbania vans.',
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-600" />,
      title: 'Local Bhuj-Kutch Location',
      description: 'Conveniently located on Mirjapar Road, Bhuj-Kutch, offering responsive on-ground service and local route familiarity.',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-amber-600" />,
      title: 'Easy Enquiry',
      description: 'Customers can quickly call, email or send an instant WhatsApp enquiry for rapid assistance and clear communication.',
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-600" />,
      title: 'Travel-Focused Service',
      description: 'Cab rental and travel agency services under one business, assisting you with smooth transportation planning.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Our Commitment"
          title="Why Travel With Shree Cab Kutch?"
          subtitle="Clear, verified, and service-oriented travel solutions built for individual travelers, families, and tour groups."
          centered
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, idx) => (
            <div
              key={point.title}
              className={`bg-[#FAF8F5] rounded-2xl p-7 border border-amber-900/10 hover:border-amber-400 hover:shadow-lg transition-all duration-300 ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-5">
                {point.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {point.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
