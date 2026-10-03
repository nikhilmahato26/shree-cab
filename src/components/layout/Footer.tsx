import { Phone, Mail, MapPin, Clock, Heart } from 'lucide-react';
import { COMPANY, FOOTER_LINKS } from '../../data/cabData';

export const Footer: React.FC = () => {
  const scrollTo = (href: string) => {
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = window.innerWidth >= 768 ? 76 : 64;
      const pos = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0A1F44] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Bio */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 inline-flex items-center gap-2.5 rounded-xl bg-white px-3.5 py-2">
              <span className="text-2xl">🚕</span>
              <div>
                <span className="font-black text-lg text-[#0A1F44] tracking-tight block leading-tight">
                  SHREE<span className="text-[#003B95]">CAB</span>
                </span>
                <span className="text-[9px] font-black uppercase text-gray-500 tracking-wider">
                  BHUJ • KUTCH
                </span>
              </div>
            </div>

            <p className="text-blue-100 text-sm leading-relaxed mb-5 max-w-xs">
              Kutch's premier cab service and travel agency based in Bhuj. Providing safe, reliable, and affordable AC car rentals for Rann of Kutch tours, outstation travel, and local sightseeing.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-emerald-400 transition-colors shadow-sm"
                aria-label="WhatsApp"
              >
                <span className="text-white font-black text-sm">💬</span>
              </a>
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <span className="text-white font-bold text-xs">f</span>
              </a>
              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] rounded-full flex items-center justify-center hover:opacity-90 transition-opacity shadow-sm"
                aria-label="Instagram"
              >
                <span className="text-white font-bold text-xs">📸</span>
              </a>
              <a
                href={COMPANY.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-[#FF0000] rounded-full flex items-center justify-center hover:bg-red-500 transition-colors shadow-sm"
                aria-label="YouTube"
              >
                <span className="text-white font-bold text-xs">▶</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFD200] mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-blue-100 hover:text-[#FFD200] text-sm font-semibold transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#FFD200] text-xs">›</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFD200] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-blue-100 hover:text-[#FFD200] text-sm font-semibold transition-colors flex items-center gap-1.5 text-left"
                  >
                    <span className="text-[#FFD200] text-xs">›</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-wider text-[#FFD200] mb-4">
              Contact Shree Cab
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD200] shrink-0 mt-1" />
                <span className="text-blue-100 leading-snug">
                  {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.line3}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD200] shrink-0" />
                <a
                  href={`tel:+91${COMPANY.phone}`}
                  className="text-blue-100 hover:text-[#FFD200] font-bold transition-colors"
                >
                  +91 {COMPANY.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD200] shrink-0" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-blue-100 hover:text-[#FFD200] text-xs truncate transition-colors"
                >
                  {COMPANY.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-blue-200 bg-white/5 p-2 rounded-xl border border-white/10 mt-3">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Available 24×7 Across Kutch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200">
          <p>© 2026 Shree Cab Kutch. All Rights Reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in{' '}
            <span className="text-[#FFD200] font-bold">Bhuj, Kutch</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
