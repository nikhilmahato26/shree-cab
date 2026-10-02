import React, { useState } from 'react';
import { Hero } from '../components/sections/Hero';
import { QuickContactBar } from '../components/sections/QuickContactBar';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Fleet } from '../components/sections/Fleet';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Travel } from '../components/sections/Travel';
import { BookingForm } from '../components/sections/BookingForm';
import { Contact } from '../components/sections/Contact';

export const Home: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<string>('Maruti Suzuki Dzire');

  const scrollToBooking = (vehicleName?: string) => {
    if (vehicleName) {
      setSelectedVehicle(vehicleName);
    }
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <Hero onBookClick={() => scrollToBooking()} />

      {/* 2. Quick Contact / Feature Strip */}
      <QuickContactBar />

      {/* 3. About Section */}
      <About />

      {/* 4. Services Section */}
      <Services />

      {/* 5. Fleet Section */}
      <Fleet onSelectVehicle={(v) => scrollToBooking(v)} />

      {/* 6. Why Choose Us Section */}
      <WhyChooseUs />

      {/* 7. Kutch Travel Section */}
      <Travel onPlanTrip={() => scrollToBooking()} />

      {/* 8. Booking / Plan Your Journey Form */}
      <BookingForm selectedVehicle={selectedVehicle} />

      {/* 9. Contact & Google Maps Section */}
      <Contact />
    </main>
  );
};
