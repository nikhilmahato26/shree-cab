import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Navigation, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/contact';
import { getGeneralWhatsAppUrl } from '../../utils/whatsapp';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const whatsappUrl = getGeneralWhatsAppUrl();

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Direct Contact"
          title="Get In Touch"
          subtitle="Reach out to Shree Cab Kutch directly via phone, email, or WhatsApp for reservations and travel queries."
          centered
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-amber-900/10 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                  {BUSINESS_INFO.tagline}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Ready to serve your travel needs across Bhuj, Kutch, and Gujarat.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Primary Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/50 border border-amber-100 hover:border-amber-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Primary Phone
                    </p>
                    <a
                      href={`tel:${BUSINESS_INFO.primaryPhone}`}
                      className="text-base sm:text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.primaryPhoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Secondary Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Alternate Phone
                    </p>
                    <a
                      href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                      className="text-base sm:text-lg font-bold text-slate-900 hover:text-amber-600 transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.secondaryPhoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-slate-900 hover:text-amber-600 transition-colors block mt-0.5 truncate"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Office Address
                    </p>
                    <p className="text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action buttons */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <Button
                variant="whatsapp"
                size="md"
                href={whatsappUrl}
                target="_blank"
                icon={<MessageCircle className="w-4 h-4" />}
                className="w-full text-xs sm:text-sm font-bold"
              >
                WhatsApp Us
              </Button>

              <Button
                variant="outline"
                size="md"
                href={`mailto:${BUSINESS_INFO.email}`}
                icon={<Mail className="w-4 h-4" />}
                className="w-full text-xs sm:text-sm font-bold"
              >
                Email Us
              </Button>
            </div>
          </div>

          {/* Interactive Google Map embed card */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-amber-900/10 shadow-md flex flex-col justify-between">
            <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Location in Bhuj-Kutch
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Mirjapar Road, Bhuj-Kutch, Gujarat – 370001
                </p>
              </div>

              <Button
                variant="primary"
                size="sm"
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                icon={<Navigation className="w-4 h-4" />}
                className="shrink-0 font-bold"
              >
                Get Directions
              </Button>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="relative w-full h-[380px] sm:h-[460px] bg-slate-100">
              <iframe
                title="Shree Cab Kutch Office Location"
                src="https://maps.google.com/maps?q=Mirjapar+Road,+Bhuj,+Gujarat+370001&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Conveniently accessible in Bhuj for city and outstation departures.</span>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-amber-700 hover:underline"
              >
                <span>View Full Map</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
