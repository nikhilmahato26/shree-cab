import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import confetti from 'canvas-confetti';
import {
  CalendarCheck,
  Send,
  MessageCircle,
  Phone,
  CheckCircle2,
  Car,
  MapPin,
  Calendar,
  User,
  Mail,
  FileText,
  Clock,
} from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { BUSINESS_INFO } from '../../utils/contact';
import { getBookingWhatsAppUrl, BookingEnquiryPayload } from '../../utils/whatsapp';

const bookingSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  phone: z
    .string()
    .min(10, 'Please enter a valid 10-digit mobile number')
    .max(15, 'Mobile number is too long'),
  email: z.string().email('Please enter a valid email address').optional().or(z.literal('')),
  pickupLocation: z.string().min(2, 'Please enter pickup location'),
  destination: z.string().min(2, 'Please enter destination'),
  travelDate: z.string().optional(),
  vehicle: z.string().min(1, 'Please select a vehicle'),
  journeyType: z.string().min(1, 'Please select a journey type'),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  selectedVehicle?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ selectedVehicle }) => {
  const [submittedData, setSubmittedData] = useState<BookingEnquiryPayload | null>(null);

  const vehicleOptions = [
    'Maruti Suzuki Dzire',
    'Maruti Suzuki Ertiga',
    'Toyota Innova Crysta',
    'Tempo Traveller',
    'Force Urbania Van',
    'Any Vehicle',
  ];

  const journeyOptions = [
    'Local Travel',
    'Outstation Travel',
    'Airport Transfer',
    'Sightseeing',
    'Group Travel',
    'Other',
  ];

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      pickupLocation: '',
      destination: '',
      travelDate: '',
      vehicle: selectedVehicle || 'Maruti Suzuki Dzire',
      journeyType: 'Local Travel',
      message: '',
    },
  });

  useEffect(() => {
    if (selectedVehicle) {
      setValue('vehicle', selectedVehicle);
    }
  }, [selectedVehicle, setValue]);

  const onSubmit = (data: BookingFormValues) => {
    const payload: BookingEnquiryPayload = {
      name: data.name,
      phone: data.phone,
      email: data.email,
      pickupLocation: data.pickupLocation,
      destination: data.destination,
      travelDate: data.travelDate,
      vehicle: data.vehicle,
      journeyType: data.journeyType,
      message: data.message,
    };

    setSubmittedData(payload);

    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
      });
    } catch {
      // ignore
    }

    const whatsappUrl = getBookingWhatsAppUrl(payload);
    // Open WhatsApp in new tab for immediate delivery
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    reset();
  };

  return (
    <section id="booking" className="py-20 sm:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Quick & Direct Enquiry"
          title="Plan Your Journey"
          subtitle="Fill in your travel details to send your cab enquiry directly to Shree Cab Kutch."
          centered
        />

        <div className="mt-12 bg-[#FAF8F5] rounded-3xl border border-amber-900/10 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          {submittedData ? (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Enquiry Prepared Successfully!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-lg mx-auto">
                  WhatsApp has opened with your travel details. If it did not open automatically, click the button below to send your enquiry now.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-slate-200 text-left max-w-md mx-auto text-sm space-y-2">
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Traveler:</span>
                  <span className="font-semibold text-slate-900">{submittedData.name} ({submittedData.phone})</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Route:</span>
                  <span className="font-semibold text-slate-900">{submittedData.pickupLocation} → {submittedData.destination}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Vehicle:</span>
                  <span className="font-semibold text-slate-900">{submittedData.vehicle}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Journey:</span>
                  <span className="font-semibold text-slate-900">{submittedData.journeyType}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Button
                  variant="whatsapp"
                  size="md"
                  href={getBookingWhatsAppUrl(submittedData)}
                  target="_blank"
                  icon={<MessageCircle className="w-5 h-5" />}
                  className="w-full sm:w-auto"
                >
                  Send on WhatsApp
                </Button>

                <Button
                  variant="call"
                  size="md"
                  href={`tel:${BUSINESS_INFO.primaryPhone}`}
                  icon={<Phone className="w-5 h-5" />}
                  className="w-full sm:w-auto"
                >
                  Call +91 97278 62635
                </Button>

                <Button
                  variant="ghost"
                  size="md"
                  onClick={handleResetForm}
                  className="w-full sm:w-auto text-slate-600"
                >
                  New Enquiry
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="name"
                      type="text"
                      placeholder="e.g. Rajesh Patel"
                      {...register('name')}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-200 focus:border-amber-500 focus:ring-amber-500/20'
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      {...register('phone')}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-200 focus:border-amber-500 focus:ring-amber-500/20'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* Email (Optional) */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. rajesh@example.com"
                      {...register('email')}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Travel Date (Optional) */}
                <div>
                  <label htmlFor="travelDate" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Travel Date <span className="text-slate-400 font-normal lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="travelDate"
                      type="date"
                      {...register('travelDate')}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Pickup Location */}
                <div>
                  <label htmlFor="pickupLocation" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Pickup Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="pickupLocation"
                      type="text"
                      placeholder="e.g. Bhuj Airport / Mirjapar Road"
                      {...register('pickupLocation')}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.pickupLocation
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-200 focus:border-amber-500 focus:ring-amber-500/20'
                      }`}
                    />
                  </div>
                  {errors.pickupLocation && (
                    <p className="text-xs text-red-500 mt-1">{errors.pickupLocation.message}</p>
                  )}
                </div>

                {/* Destination */}
                <div>
                  <label htmlFor="destination" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Destination <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      id="destination"
                      type="text"
                      placeholder="e.g. White Rann / Mandvi / Ahmedabad"
                      {...register('destination')}
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        errors.destination
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-slate-200 focus:border-amber-500 focus:ring-amber-500/20'
                      }`}
                    />
                  </div>
                  {errors.destination && (
                    <p className="text-xs text-red-500 mt-1">{errors.destination.message}</p>
                  )}
                </div>

                {/* Vehicle Dropdown */}
                <div>
                  <label htmlFor="vehicle" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Vehicle <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Car className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <select
                      id="vehicle"
                      {...register('vehicle')}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all appearance-none cursor-pointer"
                    >
                      {vehicleOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt} (AC Vehicle)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Journey Type Dropdown */}
                <div>
                  <label htmlFor="journeyType" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Journey Type <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                    <select
                      id="journeyType"
                      {...register('journeyType')}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all appearance-none cursor-pointer"
                    >
                      {journeyOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message (Optional) */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message / Special Notes <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Enter any additional requirements, passenger count, or return trip details..."
                    {...register('message')}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all resize-y"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={<Send className="w-5 h-5" />}
                  className="font-bold py-3.5 text-base sm:text-lg"
                >
                  Send Enquiry
                </Button>
                <p className="text-center text-xs text-slate-500 mt-2.5">
                  Submitting directly connects you to our WhatsApp with your entered travel details.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
