import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CalendarCheck, Wind, CheckCircle2 } from 'lucide-react';
import type { Vehicle } from '../../data/fleet';
import { getVehicleWhatsAppUrl } from '../../utils/whatsapp';
import { Button } from './Button';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectVehicle?: (vehicleName: string) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  vehicle,
  onSelectVehicle,
}) => {
  const whatsappUrl = getVehicleWhatsAppUrl(vehicle.name);

  const handleEnquireClick = () => {
    if (onSelectVehicle) {
      onSelectVehicle(vehicle.name);
    } else {
      const bookingEl = document.getElementById('booking');
      if (bookingEl) {
        bookingEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl overflow-hidden border border-amber-900/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={vehicle.image}
          alt={vehicle.altText}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Subtle gradient vignette at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* AC Vehicle Badge */}
        <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold shadow-sm border border-slate-200">
          <Wind className="w-3.5 h-3.5 text-amber-600" />
          <span>{vehicle.tag}</span>
        </div>

        {/* Category Pill */}
        <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide">
          {vehicle.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
            {vehicle.name}
          </h3>

          <div className="mt-2.5 flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-medium">All vehicles are AC vehicles</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <Button
            variant="primary"
            size="md"
            onClick={handleEnquireClick}
            icon={<CalendarCheck className="w-4 h-4" />}
            className="w-full text-sm font-semibold"
          >
            Enquire Now
          </Button>

          <Button
            variant="whatsapp"
            size="md"
            href={whatsappUrl}
            target="_blank"
            icon={<MessageCircle className="w-4 h-4" />}
            className="w-full text-sm font-semibold"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
