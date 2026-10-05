import React from 'react';
import { Phone, SquarePen } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/contact';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

interface MobileBottomBarProps {
  onBookClick?: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onBookClick }) => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  const handleBookClick = () => {
    if (onBookClick) {
      onBookClick();
    } else {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2.5">
      <div className="grid grid-cols-3 divide-x divide-gray-200 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 text-[#0A1F44] active:scale-95 transition-transform"
          aria-label="Call Shree Cab Kutch"
        >
          <Phone className="w-5 h-5 text-[#D48B00] mb-0.5" />
          <span className="text-xs font-semibold text-gray-800">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 text-[#0A1F44] active:scale-95 transition-transform"
          aria-label="Enquire on WhatsApp"
        >
          <WhatsAppIcon className="w-5 h-5 text-[#D48B00] mb-0.5" />
          <span className="text-xs font-semibold text-gray-800">WhatsApp</span>
        </a>

        {/* Enquiry */}
        <button
          type="button"
          onClick={handleBookClick}
          className="flex flex-col items-center justify-center py-1.5 px-2 text-[#0A1F44] active:scale-95 transition-transform cursor-pointer"
          aria-label="Enquiry Form"
        >
          <SquarePen className="w-5 h-5 text-[#D48B00] mb-0.5" />
          <span className="text-xs font-semibold text-gray-800">Enquiry</span>
        </button>
      </div>
    </div>
  );
};
