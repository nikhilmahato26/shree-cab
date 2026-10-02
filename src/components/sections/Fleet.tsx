import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FLEET, FLEET_CATEGORIES, VehicleCategory, Vehicle } from '../../data/fleet';
import { SectionHeading } from '../ui/SectionHeading';
import { VehicleCard } from '../ui/VehicleCard';

interface FleetProps {
  onSelectVehicle?: (vehicleName: string) => void;
}

export const Fleet: React.FC<FleetProps> = ({ onSelectVehicle }) => {
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>('All');

  const filteredFleet = activeCategory === 'All'
    ? FLEET
    : FLEET.filter((v: Vehicle) => v.category === activeCategory);

  return (
    <section id="fleet" className="py-20 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Verified Fleet"
          title="Choose Your Ride"
          subtitle="AC vehicles for comfortable local, outstation and group travel."
          centered
        />

        {/* Fleet Filter Tabs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FLEET_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 select-none ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/15 scale-102'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Fleet Cards Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredFleet.map((vehicle: Vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onSelectVehicle={onSelectVehicle}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Reassurance note */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            * All listed vehicles in the fleet are AC vehicles. Contact us directly for availability and tailored travel arrangements.
          </p>
        </div>
      </div>
    </section>
  );
};
