import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/contact';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';

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
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Now */}
        <a
          href={`tel:${BUSINESS_INFO.primaryPhone}`}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-slate-900 text-white font-semibold text-xs active:scale-95 transition-all shadow-sm"
          aria-label="Call Shree Cab Kutch"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs active:scale-95 transition-all shadow-sm"
          aria-label="Enquire on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Cab */}
        <button
          type="button"
          onClick={handleBookClick}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-xl bg-amber-600 text-white font-semibold text-xs active:scale-95 transition-all shadow-sm"
          aria-label="Book Cab Form"
        >
          <CalendarCheck className="w-4 h-4 mb-0.5" />
          <span>Book Cab</span>
        </button>
      </div>
    </div>
  );
};
