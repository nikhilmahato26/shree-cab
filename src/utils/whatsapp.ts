import { BUSINESS_INFO } from './contact';

export const WHATSAPP_NUMBER = '919727862635';

export interface BookingEnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  pickupLocation: string;
  destination: string;
  travelDate?: string;
  vehicle: string;
  journeyType: string;
  message?: string;
}

export function getGeneralWhatsAppUrl(): string {
  const text = encodeURIComponent(
    'Hello Shree Cab Kutch, I would like to enquire about cab rental and travel services in Bhuj-Kutch.'
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getVehicleWhatsAppUrl(vehicleName: string): string {
  const message = `Hello Shree Cab Kutch, I am interested in renting the ${vehicleName}. Please share availability and rental details.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getBookingWhatsAppUrl(payload: BookingEnquiryPayload): string {
  const lines: string[] = [
    'Hello Shree Cab Kutch, I would like to enquire about cab rental.',
    '',
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
  ];

  if (payload.email && payload.email.trim() !== '') {
    lines.push(`Email: ${payload.email.trim()}`);
  }

  lines.push(`Pickup: ${payload.pickupLocation}`);
  lines.push(`Destination: ${payload.destination}`);

  if (payload.travelDate && payload.travelDate.trim() !== '') {
    lines.push(`Date: ${payload.travelDate}`);
  }

  lines.push(`Vehicle: ${payload.vehicle}`);
  lines.push(`Journey Type: ${payload.journeyType}`);

  if (payload.message && payload.message.trim() !== '') {
    lines.push(`Message: ${payload.message.trim()}`);
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}
