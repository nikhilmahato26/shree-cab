import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ToastProvider } from './components/ui/Toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/ui/FloatingActions';
import { Home } from './pages/Home';

export const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ToastProvider>
        <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#FFD200] selection:text-[#0A1F44] relative">
          <Helmet>
            <title>Shree Cab – Book Your Ride in Kutch! | 24×7 Cab Service Bhuj</title>
            <meta
              name="description"
              content="Safe, reliable & affordable cab service in Bhuj and Kutch. White Desert, Mandvi, Dholavira, temple tours & outstation travel. Available 24×7. Call/WhatsApp: +91 97278 62635"
            />
          </Helmet>

          {/* Accessible Skip Link */}
          <a
            href="#home"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-[#FFD200] focus:text-[#0A1F44] focus:font-extrabold focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
          >
            Skip to main content
          </a>

          {/* Sticky Top Navbar */}
          <Navbar />

          {/* Main Content */}
          <main id="home" className="flex-1 w-full">
            <Home />
          </main>

          {/* Dark Footer */}
          <Footer />

          {/* Floating Actions & Mobile Bottom Bar */}
          <FloatingActions />
        </div>
      </ToastProvider>
    </HelmetProvider>
  );
};

export default App;
