import React from 'react';
import { AlertCircle, Info } from 'lucide-react';

export const BillingStrip: React.FC = () => {
  return (
    <aside className="bg-[#0A1F44] px-4 py-5 text-white border-y border-white/10 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-6">
        <p className="font-extrabold text-sm sm:text-base flex items-center gap-2">
          <Info className="w-4 h-4 text-[#FFD200]" />
          Minimum billing:{' '}
          <span className="text-[#FFD200] font-black underline decoration-2 underline-offset-4">
            300 km/day
          </span>
        </p>

        <span className="hidden h-5 w-px bg-white/30 sm:block" aria-hidden="true" />

        <p className="text-xs sm:text-sm font-semibold text-white/90 flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-gray-300" />
          Driver payment, parking charges and toll gate charges are to be paid by the customer.
        </p>
      </div>
    </aside>
  );
};
