import React from 'react';
import { Hero } from '../components/sections/Hero';
import { BillingStrip } from '../components/sections/BillingStrip';
import { HowItWorks } from '../components/sections/HowItWorks';
import { About } from '../components/sections/About';
import { Fleet } from '../components/sections/Fleet';
import { Services } from '../components/sections/Services';
import { PopularRoutes } from '../components/sections/PopularRoutes';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { Testimonials } from '../components/sections/Testimonials';
import { Faq } from '../components/sections/Faq';
import { PaymentSection } from '../components/sections/PaymentSection';
import { Contact } from '../components/sections/Contact';
import { CtaStrip } from '../components/sections/CtaStrip';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Hero Section with dynamic carousel & booking form */}
      <Hero />

      {/* 2. Billing / Minimum km strip */}
      <BillingStrip />

      {/* 3. Simple Process (How It Works) */}
      <HowItWorks />

      {/* 4. About Shree Cab */}
      <About />

      {/* 5. Fleet Showcase */}
      <Fleet />

      {/* 6. Rides for Every Occasion (Services) */}
      <Services />

      {/* 7. Popular Routes & Transparent Fares */}
      <PopularRoutes />

      {/* 8. Why Choose Shree Cab (Dark Blue Feature Section) */}
      <WhyChooseUs />

      {/* 9. Customer Testimonials Carousel */}
      <Testimonials />

      {/* 10. Frequently Asked Questions */}
      <Faq />

      {/* 11. Payment Options & QR Code */}
      <PaymentSection />

      {/* 12. Contact Us & WhatsApp Booking Request */}
      <Contact />

      {/* 13. Dynamic CTA Banner */}
      <CtaStrip />
    </div>
  );
};
