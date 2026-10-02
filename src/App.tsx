import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { Home } from './pages/Home';

export const App: React.FC = () => {
  const handleBookClick = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-slate-800 selection:bg-amber-500 selection:text-white relative">
        <Helmet>
          <title>Shree Cab Kutch | Cab Rental & Travel Agency in Bhuj, Kutch</title>
          <meta
            name="description"
            content="Shree Cab Kutch provides AC cab rental and travel agency services in Bhuj-Kutch, Gujarat. Choose from Dzire, Ertiga, Innova Crysta, Tempo Traveller and Force Urbania for your travel needs."
          />
        </Helmet>

        {/* Top Sticky Navbar */}
        <Navbar onBookClick={handleBookClick} />

        {/* Main Content */}
        <div className="flex-1 w-full">
          <Home />
        </div>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp Action Button */}
        <WhatsAppButton />

        {/* Mobile Sticky Bottom Action Bar */}
        <MobileBottomBar onBookClick={handleBookClick} />
      </div>
    </HelmetProvider>
  );
};

export default App;
