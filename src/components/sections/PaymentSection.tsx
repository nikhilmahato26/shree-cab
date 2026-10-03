import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, QrCode, Copy, CheckCircle2, Phone, HelpCircle } from 'lucide-react';
import { COMPANY } from '../../data/cabData';
import { useToast } from '../ui/Toast';

export const PaymentSection: React.FC = () => {
  const { showToast } = useToast();

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(COMPANY.payment.phone);
    showToast(`Copied ${COMPANY.payment.phone} to clipboard!`, 'success');
  };

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(COMPANY.payment.upiId);
    showToast(`Copied UPI ID (${COMPANY.payment.upiId}) to clipboard!`, 'success');
  };

  return (
    <section id="payment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label">
            <CreditCard className="w-4 h-4 text-[#003B95]" />
            Easy Payment
          </span>
          <h2 className="section-title mb-4">
            Pay with <span className="text-[#003B95]">Google Pay / PhonePe / UPI</span>
          </h2>
          <p className="section-sub mx-auto">
            Scan the QR code below or transfer directly to our registered UPI number once your booking is confirmed.
          </p>
        </motion.div>

        {/* 2-Column Payment Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: QR Code Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-card flex flex-col items-center justify-center text-center"
          >
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 shadow-sm w-full max-w-sm mx-auto">
              <div className="flex items-center justify-center gap-2 mb-3 text-xs font-black uppercase text-[#003B95] tracking-wider">
                <QrCode className="w-4 h-4" /> Official Payment QR
              </div>
              <img
                src={COMPANY.payment.qr}
                alt="Payment QR code for Shree Cab Kutch"
                className="w-full max-w-[260px] mx-auto rounded-xl object-contain border border-gray-100"
                loading="lazy"
              />
              <p className="text-[11px] font-bold text-gray-500 mt-3">
                Scan with PhonePe, Google Pay, Paytm, BHIM or any banking app
              </p>
            </div>
          </motion.div>

          {/* Right Column: Account Details & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Primary Details Card */}
            <div className="bg-[#0A1F44] rounded-3xl p-7 sm:p-8 text-white shadow-blue border border-white/10">
              <div className="text-xs font-black uppercase tracking-wider text-[#FFD200] mb-2">
                Verified Business Account
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-6 tracking-tight">
                {COMPANY.payment.name}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                  <div className="text-xs font-semibold text-white/70 mb-1">
                    GPay / PhonePe / Paytm No.
                  </div>
                  <div className="text-lg font-black text-[#FFD200]">
                    +91 {COMPANY.payment.phone}
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                  <div className="text-xs font-semibold text-white/70 mb-1">
                    Direct UPI ID
                  </div>
                  <div className="text-lg font-black text-[#FFD200]">
                    {COMPANY.payment.upiId}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyNumber}
                  className="btn-primary text-xs uppercase font-extrabold px-5 py-2.5 inline-flex items-center gap-2 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy Mobile Number
                </button>

                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white font-extrabold text-xs uppercase hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" /> Copy UPI ID
                </button>
              </div>
            </div>

            {/* Instruction Notice */}
            <div className="bg-[#EFF6FF] rounded-2xl p-5 border border-blue-100 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#003B95] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-extrabold text-[#0A1F44] text-sm">
                  Instant Confirmation After Payment
                </h4>
                <p className="text-xs text-gray-600 mt-0.5">
                  Share a screenshot of your successful transaction to our WhatsApp number{' '}
                  <span className="font-bold text-[#003B95]">+91 {COMPANY.phone}</span> for instant booking voucher receipt.
                </p>
              </div>
            </div>

            {/* Payment Help Support */}
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                <HelpCircle className="w-4 h-4 text-[#003B95]" />
                <span>Need assistance with billing or payment?</span>
              </div>
              <a
                href={`tel:+91${COMPANY.phone}`}
                className="text-xs font-black text-[#003B95] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" /> Call Support
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
