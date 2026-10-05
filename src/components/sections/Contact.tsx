import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Send, Clock, ShieldCheck } from 'lucide-react';
import { COMPANY } from '../../data/cabData';
import { useToast } from '../ui/Toast';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Rann of Kutch Desert Tour',
    message: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.match(/^[6-9]\d{9}$/)) {
      newErrors.phone = 'Enter valid 10-digit mobile number';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const messageText = [
      `🚕 *New Shree Cab Inquiry* 🚕`,
      ``,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      `*Service Required:* ${formData.service}`,
      `*Message:* ${formData.message || 'N/A'}`,
      ``,
      `Please provide vehicle options and quote.`,
    ].join('\n');

    setTimeout(() => {
      window.open(
        `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(messageText)}`,
        '_blank',
        'noopener,noreferrer'
      );
      showToast('Booking request sent to WhatsApp!', 'success');
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        service: 'Rann of Kutch Desert Tour',
        message: '',
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">
            <Phone className="w-4 h-4 text-[#003B95]" />
            Contact Us
          </span>
          <h2 className="section-title mb-4">
            Get in Touch <span className="text-[#003B95]">with Us</span>
          </h2>
          <p className="section-sub mx-auto">
            We are available 24 hours a day, 7 days a week for all your travel requirements across Kutch and Gujarat.
          </p>
        </motion.div>

        {/* 5-Column Grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left 2 Columns: Contact Information & Google Maps */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#003B95]" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0A1F44] text-sm mb-0.5">Call Us Directly (24×7)</h4>
                <a
                  href={`tel:+91${COMPANY.phone}`}
                  className="text-[#003B95] font-black text-base hover:underline block"
                >
                  +91 {COMPANY.phone}
                </a>
                <a
                  href={`tel:+91${COMPANY.phoneAlt}`}
                  className="text-gray-500 font-bold text-xs hover:underline block"
                >
                  Alt: +91 {COMPANY.phoneAlt}
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0">
                <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0A1F44] text-sm mb-0.5">Quick WhatsApp Booking</h4>
                <a
                  href={`https://wa.me/${COMPANY.whatsapp}?text=Hi Shree Cab, I want to book a cab.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 font-black text-sm hover:underline block"
                >
                  Chat on WhatsApp &rarr;
                </a>
                <p className="text-gray-400 text-xs">Replies within minutes</p>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-card flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h4 className="font-extrabold text-[#0A1F44] text-sm mb-0.5">Head Office</h4>
                <p className="text-gray-600 text-xs sm:text-sm font-semibold leading-relaxed">
                  {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.line3}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 mt-1">
                  <Clock className="w-3 h-3" /> Open 24 Hours / 365 Days
                </div>
              </div>
            </div>

            {/* Social Media Profiles Card */}
            <div className="bg-white rounded-3xl p-5 border border-gray-100 shadow-card">
              <h4 className="font-extrabold text-[#0A1F44] text-sm mb-3 flex items-center gap-2">
                <span className="text-base">📱</span> Social Media Channels
              </h4>

              {/* Facebook */}
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-2xl bg-blue-50/70 hover:bg-blue-100/70 transition-colors text-xs font-bold text-[#1877F2] mb-2 group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-xs">
                    f
                  </span>
                  <span className="group-hover:underline">{COMPANY.socials.facebookName}</span>
                </div>
                <span className="text-[10px] font-bold text-[#003B95] uppercase bg-white px-2 py-0.5 rounded-full shadow-xs">
                  Facebook Page
                </span>
              </a>

              {/* Instagram Accounts */}
              <div className="space-y-1.5">
                {COMPANY.socials.instagramProfiles.map((acc) => (
                  <a
                    key={acc.handle}
                    href={acc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-2xl bg-gradient-to-r from-rose-50/60 to-orange-50/60 hover:from-rose-100/70 hover:to-orange-100/70 transition-colors text-xs group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4] text-white flex items-center justify-center text-[10px]">
                        📸
                      </span>
                      <span className="font-extrabold text-[#0A1F44] group-hover:text-[#E1306C] transition-colors">
                        {acc.handle}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold text-gray-500">
                      {acc.role}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-3xl overflow-hidden shadow-card border border-gray-100 h-52 sm:h-60 mt-1">
              <iframe
                title="Shree Cab Office Location in Bhuj"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117466.86211244458!2d69.58988636250002!3d23.253018899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39511e604f5b5b0d%3A0x7d6a59b2a7ef813!2sBhuj%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right 3 Columns: Interactive WhatsApp Booking Form */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#003B95] tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" /> Instant WhatsApp Form
              </div>
              <h3 className="text-2xl font-black text-[#0A1F44] tracking-tight mb-2">
                Send Booking Inquiry
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                Fill in the details below and we will automatically prepare your WhatsApp message to book with Shree Cab.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Patel"
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm font-semibold text-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-[#003B95]"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Mobile Number (10 Digits) *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9727862635"
                      className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm font-semibold text-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-[#003B95]"
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Select Service / Package *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 text-sm font-extrabold text-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-[#003B95] cursor-pointer"
                  >
                    <option value="Rann of Kutch Desert Tour">Rann of Kutch & White Desert Tour</option>
                    <option value="Outstation Highway Cabs">Outstation Highway Cabs (Ahmedabad / Rajkot)</option>
                    <option value="Mandvi Beach & Palaces">Mandvi Beach & Vijay Vilas Palace</option>
                    <option value="Dholavira Heritage Tour">Dholavira UNESCO Harappan Tour</option>
                    <option value="Temple Pilgrimage Tour">Temple Pilgrimage (Mata no Madh / Koteshwar)</option>
                    <option value="Airport / Railway Transfer">Airport / Railway Station Transfer</option>
                    <option value="Wedding / Event Fleet">Wedding & Event Transportation</option>
                    <option value="24×7 Hospital Cab & Tempo Traveller">24×7 Hospital Cab & Tempo Traveller</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Pickup Location & Travel Dates (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter pickup point, travel dates, number of passengers, or any specific requirements..."
                    className="w-full p-4 rounded-xl border border-gray-200 text-sm font-semibold text-[#0A1F44] focus:outline-none focus:ring-2 focus:ring-[#003B95]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-xs sm:text-sm uppercase font-black tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Opening WhatsApp...' : 'Send Booking via WhatsApp'}
                </button>
              </form>
            </div>

            <p className="text-center text-xs text-gray-400 mt-4">
              🔒 Your contact information is kept strictly confidential and used solely for booking your cab.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
