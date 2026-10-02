import React from 'react';
import { Phone, Mail, MapPin, Car, Shield, Wind, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../utils/contact';
import { FLEET } from '../../data/fleet';

export const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Travel', href: '#travel' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Column 1: Business info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 shadow-sm">
                <Car className="w-5 h-5 text-amber-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Cab rental and travel agency services in Bhuj-Kutch, Gujarat. Providing AC sedans, family vehicles, and group transportation for local and outstation travel.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-amber-400 font-semibold">
              <Wind className="w-3.5 h-3.5 text-amber-500" />
              <span>All listed vehicles are AC vehicles</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition-colors group-hover:translate-x-1" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Vehicles */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Vehicles
            </h3>
            <ul className="space-y-2.5">
              {FLEET.map((vehicle) => (
                <li key={vehicle.id}>
                  <a
                    href="#fleet"
                    onClick={(e) => handleSmoothScroll(e, '#fleet')}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 group-hover:scale-125 transition-transform" />
                    <span>{vehicle.name}</span>
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-900 text-amber-400 border border-slate-800">
                      AC
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3.5">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact
            </h3>

            <div className="flex items-start gap-3 text-sm text-slate-400">
              <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  className="hover:text-white font-medium transition-colors"
                >
                  {BUSINESS_INFO.primaryPhoneDisplay}
                </a>
                <a
                  href={`tel:${BUSINESS_INFO.secondaryPhone}`}
                  className="hover:text-white font-medium transition-colors mt-0.5"
                >
                  {BUSINESS_INFO.secondaryPhoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-400">
              <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="hover:text-white break-all transition-colors font-medium"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div className="flex items-start gap-3 text-sm text-slate-400">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                {BUSINESS_INFO.address}
              </span>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Shree Cab Kutch. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Mirjapar Road, Bhuj-Kutch, Gujarat 370001</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
