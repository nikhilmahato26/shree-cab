import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Send } from 'lucide-react';
import { COMPANY, HERO_SLIDES, HERO_VEHICLES } from '../../data/cabData';
import { useToast } from '../ui/Toast';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
}

const HeroInput: React.FC<FormInputProps> = ({
  name,
  placeholder,
  type = 'text',
  className = '',
  ...props
}) => {
  return (
    <label className={className}>
      <span className={type === 'date' ? 'mb-1 block text-xs font-black text-[#0A1F44]' : 'sr-only'}>
        {type === 'date' ? 'Travel Date *' : placeholder}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        {...props}
        className="h-13 sm:h-14 w-full rounded-xl border-0 bg-white px-4 text-sm font-bold text-[#0A1F44] outline-none placeholder:text-gray-500 focus:ring-4 focus:ring-[#003B95]/20 shadow-sm"
      />
    </label>
  );
};

const TODAY_DATE = new Date().toISOString().split('T')[0];

export const Hero: React.FC = () => {
  const [selectedVehicleIdx, setSelectedVehicleIdx] = useState(1); // Default: Dzire
  const [currentSlide, setCurrentSlide] = useState(0);
  const { showToast } = useToast();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, []);

  const selectedVehicle = HERO_VEHICLES[selectedVehicleIdx];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const vehicleName = selectedVehicle.name;
    const name = formData.get('name');
    const mobile = formData.get('mobile');
    const pickup = formData.get('pickup');
    const drop = formData.get('drop');
    const date = formData.get('date');
    const tripPackage = formData.get('package');

    const whatsappMessage = [
      `🚕 *Shree Cab Booking Request* 🚕`,
      ``,
      `*Vehicle:* ${vehicleName}`,
      `*Package:* ${tripPackage}`,
      `*Customer Name:* ${name}`,
      `*Phone Number:* ${mobile}`,
      `*Travel Date:* ${date}`,
      `*Pickup Location:* ${pickup}`,
      `*Destination/Drop:* ${drop}`,
      ``,
      `Please confirm cab availability and fare details. Thank you!`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    showToast('Redirecting to WhatsApp for instant confirmation...', 'info');
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#080808] pt-16 md:pt-[4.75rem]"
    >
      {/* Background Image Carousel with Ken Burns subtle scale */}
      <AnimatePresence mode="sync">
        <motion.img
          key={HERO_SLIDES[currentSlide].src}
          src={HERO_SLIDES[currentSlide].src}
          alt={HERO_SLIDES[currentSlide].alt}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.92, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1 },
            scale: { duration: 5, ease: 'linear' },
          }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </AnimatePresence>

      {/* Hero Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/60 sm:bg-gradient-to-r sm:from-black/15 sm:via-black/30 sm:to-black/50" />

      {/* Hero Main Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-8 sm:min-h-[760px] sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <motion.form
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="w-full rounded-[1.75rem] bg-[#FFD200] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:max-w-[620px] sm:p-7 lg:p-8"
        >
          {/* Header Title & Subtitle */}
          <div className="text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.28em] text-[#0A1F44]/75">
              Fast & Easy Booking
            </span>
            <h1 className="mt-1 text-2xl font-black uppercase tracking-tight text-[#0A1F44] sm:text-3xl">
              Get Cab Online
            </h1>
            <motion.p
              animate={{ opacity: [1, 0.45, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-1 text-2xl font-black uppercase tracking-tight text-black sm:text-3xl"
            >
              BHUJ – KUTCH
            </motion.p>
          </div>

          <input type="hidden" name="vehicle" value={selectedVehicle.name} />

          {/* 3-Column Vehicle Selector Grid */}
          <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
            {HERO_VEHICLES.map((vehicle, idx) => {
              const isSelected = idx === selectedVehicleIdx;
              return (
                <button
                  key={vehicle.name}
                  type="button"
                  onClick={() => setSelectedVehicleIdx(idx)}
                  aria-pressed={isSelected}
                  className={`group rounded-xl border-2 px-1.5 py-2 text-center transition-all focus:outline-none focus:ring-4 focus:ring-[#003B95]/20 cursor-pointer ${
                    isSelected
                      ? 'border-[#0A1F44] bg-white shadow-[0_8px_20px_rgba(10,31,68,0.22)] scale-102'
                      : 'border-transparent bg-white/50 hover:bg-white/80'
                  }`}
                >
                  <span className="block h-13 sm:h-15">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </span>
                  <span className="mt-1 block text-[10px] sm:text-[11px] font-black leading-tight text-[#0A1F44]">
                    {vehicle.name}
                  </span>
                  <span className="mt-0.5 block text-[8px] sm:text-[9px] font-bold uppercase leading-tight text-[#0A1F44]/70">
                    {vehicle.type}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Form Inputs Grid */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="sr-only">Trip package (required)</span>
              <select
                name="package"
                defaultValue="Rann of Kutch Desert Tour"
                required
                className="h-13 sm:h-14 w-full rounded-xl border-0 bg-white px-4 text-sm font-extrabold text-[#0A1F44] outline-none focus:ring-4 focus:ring-[#003B95]/20 shadow-sm cursor-pointer"
              >
                <option value="Rann of Kutch Desert Tour">Rann of Kutch & White Desert Tour</option>
                <option value="Outstation Trip">Outstation Highway Trip</option>
                <option value="Bhuj Local Package">Bhuj Local City Package</option>
                <option value="Mandvi Beach & Palace">Mandvi Beach & Palace Tour</option>
                <option value="Dholavira Heritage Tour">Dholavira Road to Heaven Tour</option>
                <option value="Airport / Railway Transfer">Airport / Railway Station Transfer</option>
                <option value="Mata no Madh Temple Tour">Mata no Madh & Koteshwar Tour</option>
                <option value="Emergency Hospital Ride">24×7 Emergency Hospital Ride</option>
              </select>
            </label>

            <HeroInput name="name" placeholder="Your Name *" />
            <HeroInput
              name="mobile"
              placeholder="Mobile No. *"
              type="tel"
              inputMode="numeric"
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit mobile number"
            />
            <HeroInput name="pickup" placeholder="Pickup From *" />
            <HeroInput name="drop" placeholder="Drop Location *" />
            <HeroInput
              name="date"
              type="date"
              className="sm:col-span-2"
              defaultValue={TODAY_DATE}
            />
          </div>

          {/* Action Buttons Grid */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={`tel:+91${COMPANY.phone}`}
              className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full border-2 border-[#0A1F44] px-3 text-center text-xs font-black uppercase text-[#0A1F44] transition hover:bg-[#0A1F44] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#003B95]/20 sm:text-sm shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" /> Book by Call
            </a>

            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full bg-[#0A1F44] px-3 text-xs font-black uppercase text-white shadow-[0_10px_24px_rgba(10,31,68,0.28)] transition hover:-translate-y-0.5 hover:bg-[#003B95] focus:outline-none focus:ring-4 focus:ring-[#003B95]/25 sm:text-sm cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" /> Get Cab Online
            </button>
          </div>
        </motion.form>
      </div>

      {/* Hero Bottom Slide Indicators */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-2 sm:bottom-6 sm:right-6">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Show hero slide ${idx + 1}`}
            className={`h-2.5 rounded-full shadow transition-all focus:outline-none focus:ring-4 focus:ring-white/40 cursor-pointer ${
              idx === currentSlide
                ? 'w-8 bg-[#FFD200]'
                : 'w-2.5 bg-white/70 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
