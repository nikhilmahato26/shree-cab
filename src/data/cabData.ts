import etiosImg from '../assets/cars/etios.png';
import dzireImg from '../assets/cars/hero-sedan.png';
import ertigaImg from '../assets/cars/hero-mpv.png';
import carensImg from '../assets/cars/kia-carens.png';
import innovaImg from '../assets/cars/innova-crysta.png';
import travellerImg from '../assets/cars/hero-traveller.png';

import heroBg1 from '../assets/hero/hero-bg-1.png';
import heroBg2 from '../assets/hero/hero-bg-2.png';
import heroBg3 from '../assets/hero/hero-bg-3.png';

import serviceHospitalImg from '../assets/pecab/service-hospital.jpeg';
import serviceTempleImg from '../assets/pecab/service-temple.jpeg';
import serviceWeddingImg from '../assets/pecab/service-wedding.jpeg';
import serviceLocalImg from '../assets/pecab/service-local.jpeg';
import paymentQrImg from '../assets/pecab/payment-qr.jpeg';

import rannImg from '../assets/images/travel-rann.jpg';
import bhujImg from '../assets/images/travel-bhuj.jpg';
import outstationImg from '../assets/images/travel-outstation.jpg';

export const COMPANY = {
  name: 'Shree Cab Kutch',
  shortName: 'Shree Cab',
  tagline: 'Book Your Ride in Kutch! Safe, Reliable & Affordable',
  phone: '9727862635',
  phoneAlt: '9979368035',
  whatsapp: '919727862635',
  email: 'shreetourstravels4@gmail.com',
  address: {
    line1: 'Mirjapar Road',
    line2: 'Bhuj, Kutch',
    line3: 'Gujarat – 370001',
    state: 'Gujarat',
  },
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
  payment: {
    name: 'SHREE TOURS & TRAVELS',
    phone: '9727862635',
    upiId: '9727862635@upi',
    methods: ['PhonePe', 'Google Pay', 'Paytm', 'UPI', 'Cash'],
    qr: paymentQrImg,
  },
};

export const HERO_SLIDES = [
  {
    src: heroBg1,
    alt: 'Shree Cab reliable pickup service across Bhuj and Kutch',
  },
  {
    src: heroBg2,
    alt: 'Families enjoying safe and comfortable cab travel in Kutch',
  },
  {
    src: heroBg3,
    alt: 'Shree Cab city and outstation taxi service in Gujarat',
  },
];

export interface HeroVehicleOption {
  name: string;
  type: string;
  seats: number;
  image: string;
}

export const HERO_VEHICLES: HeroVehicleOption[] = [
  { name: 'Toyota Etios', type: 'Sedan', seats: 5, image: etiosImg },
  { name: 'Maruti Suzuki Dzire', type: 'Compact Sedan', seats: 5, image: dzireImg },
  { name: 'Maruti Suzuki Ertiga', type: 'MUV', seats: 7, image: ertigaImg },
  { name: 'Kia Carens', type: 'MUV Prime', seats: 7, image: carensImg },
  { name: 'Toyota Innova Crysta', type: 'Premium SUV', seats: 7, image: innovaImg },
  { name: 'Tempo Traveller', type: 'Traveller', seats: 12, image: travellerImg },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    icon: 'location',
    title: 'Enter Destination',
    desc: 'Share your pickup location and destination in Kutch or Gujarat.',
  },
  {
    step: '02',
    icon: 'phone',
    title: 'Book a Ride',
    desc: 'Call or WhatsApp Shree Cab to confirm your booking instantly.',
  },
  {
    step: '03',
    icon: 'car',
    title: 'Enjoy the Ride',
    desc: 'Travel safely and comfortably with our polite, experienced drivers.',
  },
];

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  images: string[];
  btnText: string;
  btnColor: 'primary' | 'yellow';
  badge: string;
  routes: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'rann-tour',
    category: 'Sightseeing',
    title: 'Rann of Kutch & Desert Tours',
    desc: 'Explore the White Desert, Dhordo Rann Utsav, sunset at Kala Dungar, and cultural handicraft villages with complete comfort.',
    images: [rannImg, serviceLocalImg],
    btnText: 'Book Rann Tour',
    btnColor: 'yellow',
    badge: 'Popular',
    routes: ['Bhuj → White Desert (Dhordo)', 'Bhuj → Kala Dungar & Gandhi nu Gam'],
  },
  {
    id: 'outstation',
    category: 'Outstation',
    title: 'Outstation & Intercity Cabs',
    desc: 'Affordable one-way and round-trip highway cabs connecting Bhuj to Ahmedabad, Rajkot, Jamnagar, Vadodara, and Surat.',
    images: [outstationImg, serviceLocalImg],
    btnText: 'Book Outstation Ride',
    btnColor: 'primary',
    badge: 'Affordable',
    routes: ['Bhuj → Ahmedabad (Airport/City)', 'Bhuj → Rajkot / Jamnagar'],
  },
  {
    id: 'temple',
    category: 'Devotional',
    title: 'Pilgrimage & Temple Tours',
    desc: 'Comfortable spiritual tour packages for families and senior devotees to sacred shrines across Kutch and Saurashtra.',
    images: [serviceTempleImg, bhujImg],
    btnText: 'Book Temple Trip',
    btnColor: 'yellow',
    badge: 'Special',
    routes: ['Mata no Madh (Ashapura)', 'Narayan Sarovar & Koteshwar', 'Dwarka & Somnath'],
  },
  {
    id: 'hospital',
    category: 'Healthcare',
    title: '24×7 Hospital & Emergency Cab',
    desc: 'Immediate, reliable transportation for hospital visits, doctor appointments, emergency transfers, and night medical travel.',
    images: [serviceHospitalImg],
    btnText: 'Book Emergency Cab',
    btnColor: 'primary',
    badge: '24×7',
    routes: ['Bhuj Local Hospitals', 'Bhuj → Rajkot / Ahmedabad Hospitals'],
  },
  {
    id: 'wedding',
    category: 'Events',
    title: 'Wedding & Event Transportation',
    desc: 'Dedicated fleet coordination for marriage processions, guest pickup & drop, corporate conferences, and VIP travel.',
    images: [serviceWeddingImg],
    btnText: 'Book Wedding Fleet',
    btnColor: 'primary',
    badge: 'Special',
    routes: ['Bhuj City & Resorts', 'Mandvi Beach Resorts & Palaces'],
  },
  {
    id: 'heritage',
    category: 'Heritage',
    title: 'Mandvi & Dholavira Heritage Cabs',
    desc: 'Scenic day tours to Mandvi Beach, Vijay Vilas Palace, 72 Jinalaya, and the ancient UNESCO Harappan site at Dholavira.',
    images: [bhujImg, rannImg],
    btnText: 'Book Heritage Tour',
    btnColor: 'yellow',
    badge: 'Must Visit',
    routes: ['Bhuj → Mandvi Beach & Palace', 'Bhuj → Dholavira (Road to Heaven)'],
  },
];

export interface FleetVehicle {
  name: string;
  type: string;
  image: string;
  seats: number;
  ac: boolean;
  pricePerKm: number;
  icon: string;
  suitableFor: string[];
  specs: string[];
  featured?: boolean;
}

export const FLEET_DATA: FleetVehicle[] = [
  {
    name: 'Toyota Etios',
    type: 'Comfort Sedan',
    image: etiosImg,
    seats: 5,
    ac: true,
    pricePerKm: 11,
    icon: '🚗',
    suitableFor: ['Local Travel', 'Airport Transfers', 'Business Trips'],
    specs: ['5 Seater (4+1)', 'Air Conditioned', 'Spacious Boot Space'],
    featured: false,
  },
  {
    name: 'Maruti Suzuki Dzire',
    type: 'Compact Sedan',
    image: dzireImg,
    seats: 5,
    ac: true,
    pricePerKm: 12,
    icon: '🚗',
    suitableFor: ['Daily Travel', 'City Rides', 'Family Trips'],
    specs: ['5 Seater (4+1)', 'Air Conditioned', 'Smooth Suspension'],
    featured: false,
  },
  {
    name: 'Maruti Suzuki Ertiga',
    type: 'Family MUV',
    image: ertigaImg,
    seats: 7,
    ac: true,
    pricePerKm: 13,
    icon: '🚐',
    suitableFor: ['Family Tours', 'Small Groups', 'Airport Pickups'],
    specs: ['7 Seater (6+1)', 'Dual AC Vents', 'Foldable Seats for Luggage'],
    featured: false,
  },
  {
    name: 'Kia Carens',
    type: 'Premium MUV',
    image: carensImg,
    seats: 7,
    ac: true,
    pricePerKm: 15,
    icon: '🚐',
    suitableFor: ['Long Distance', 'Luxury Comfort', 'Corporate Travel'],
    specs: ['7 Seater (6+1)', 'Plush Cabin Interiors', 'Individual AC Louvers'],
    featured: false,
  },
  {
    name: 'Toyota Innova Crysta',
    type: 'Executive SUV',
    image: innovaImg,
    seats: 7,
    ac: true,
    pricePerKm: 18,
    icon: '🚙',
    suitableFor: ['Rann of Kutch Tours', 'Outstation Travel', 'VIP & NRI Travel'],
    specs: ['7 Seater (6+1)', 'Captain Seats & Recliner', 'Large Trunk Capacity', 'Climate Control'],
    featured: true,
  },
  {
    name: 'Tempo Traveller & Urbania',
    type: 'Group Passenger Vehicle',
    image: travellerImg,
    seats: 12,
    ac: true,
    pricePerKm: 24,
    icon: '🚌',
    suitableFor: ['Group Sightseeing', 'Temple Yatras', 'Weddings & Events'],
    specs: ['12 to 20 Seater', 'Pushback Recliner Seats', 'High Roof & Big Luggage Carrier'],
    featured: false,
  },
];

export const POPULAR_ROUTES = [
  {
    from: 'Bhuj',
    to: 'White Desert (Dhordo / Rann Utsav)',
    distance: '85 km',
    duration: '1.5 hrs',
    sedanFare: '₹2,200',
    suvFare: '₹3,200',
    popular: true,
  },
  {
    from: 'Bhuj',
    to: 'Mandvi Beach & Vijay Vilas Palace',
    distance: '60 km',
    duration: '1 hr',
    sedanFare: '₹1,800',
    suvFare: '₹2,600',
    popular: true,
  },
  {
    from: 'Bhuj',
    to: 'Dholavira (Road to Heaven)',
    distance: '215 km',
    duration: '3.5 hrs',
    sedanFare: '₹4,500',
    suvFare: '₹6,000',
    popular: true,
  },
  {
    from: 'Bhuj',
    to: 'Mata no Madh & Narayan Sarovar',
    distance: '140 km',
    duration: '2.5 hrs',
    sedanFare: '₹3,200',
    suvFare: '₹4,500',
    popular: false,
  },
  {
    from: 'Bhuj',
    to: 'Ahmedabad (City / Airport)',
    distance: '335 km',
    duration: '6 hrs',
    sedanFare: '₹6,500',
    suvFare: '₹9,000',
    popular: true,
  },
  {
    from: 'Bhuj',
    to: 'Rajkot (City / AIIMS / Airport)',
    distance: '230 km',
    duration: '4 hrs',
    sedanFare: '₹4,800',
    suvFare: '₹6,800',
    popular: false,
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: '🕐',
    title: '24×7 Availability',
    desc: 'Always ready when you need transportation in Bhuj & Kutch, day or night.',
  },
  {
    icon: '👨‍✈️',
    title: 'Professional Drivers',
    desc: 'Experienced, polite, police-verified drivers with profound local Kutch knowledge.',
  },
  {
    icon: '🛡️',
    title: 'Safe & Clean Cabs',
    desc: 'Well-maintained, sanitized, and fully Air-Conditioned vehicles for peace of mind.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    desc: 'Clear, budget-friendly fares with zero hidden charges or surprise extras.',
  },
  {
    icon: '⚡',
    title: 'Quick WhatsApp Booking',
    desc: 'Instant cab confirmation via WhatsApp or phone call in under 60 seconds.',
  },
  {
    icon: '📍',
    title: 'Desert & Permit Guidance',
    desc: 'Expert route assistance for Rann of Kutch permits, checkposts, and photography spots.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Hardik Patel',
    location: 'Ahmedabad',
    rating: 5,
    review:
      'Booked Shree Cab for our 4-day Rann Utsav trip from Bhuj. The Innova Crysta was spotless and the driver was extremely polite and knowledgeable about local spots. Best cab service in Kutch!',
    type: 'Rann of Kutch Tour',
  },
  {
    name: 'Pooja Sharma',
    location: 'Mumbai',
    rating: 5,
    review:
      'We hired Shree Cab for our family trip covering Mandvi beach, Vijay Vilas palace, and Mata no Madh. Seamless booking on WhatsApp, on-time pickup, and very fair pricing!',
    type: 'Sightseeing Tour',
  },
  {
    name: 'Jignesh Thakkar',
    location: 'Bhuj',
    rating: 5,
    review:
      'Called Shree Cab at 2 AM for an emergency medical trip to Rajkot. They reached our home in 15 minutes. Very grateful for their prompt 24×7 service!',
    type: 'Emergency Trip',
  },
  {
    name: 'Dr. Ramesh Nair',
    location: 'Bengaluru',
    rating: 5,
    review:
      'Booked a Tempo Traveller for our college alumni group trip to Dholavira and the White Desert. The vehicle was extremely comfortable for all 14 of us. Smooth highway drive throughout!',
    type: 'Group Trip',
  },
  {
    name: 'Mehul Mehta',
    location: 'Surat',
    rating: 5,
    review:
      'Excellent one-way cab service from Bhuj to Ahmedabad Airport. Driver was punctual, courteous, and drove very safely on the expressway. Will book again!',
    type: 'Airport Transfer',
  },
  {
    name: 'Kavita Joshi',
    location: 'Gandhidham',
    rating: 5,
    review:
      'Used Shree Cab for our daughter’s wedding in Bhuj. Clean Dzire and Ertiga cabs for all guest movements. Courteous coordination by the owner.',
    type: 'Wedding Fleet',
  },
];

export const FAQS = [
  {
    q: 'How do I book a cab with Shree Cab Kutch?',
    a: 'You can book a cab instantly by calling or WhatsApp messaging us at +91 97278 62635. Share your pickup point, destination, date, and preferred vehicle, and we will confirm your ride in minutes.',
  },
  {
    q: 'Is Shree Cab available 24×7?',
    a: 'Yes! Shree Cab operates 24 hours a day, 7 days a week including all holidays and peak Rann Utsav festival dates. We are always available for emergency travel, early morning trains, and late night flights.',
  },
  {
    q: 'What areas and tourist attractions do you serve?',
    a: 'We serve Bhuj, White Desert (Dhordo), Mandvi Beach, Dholavira, Kala Dungar, Mata no Madh, Narayan Sarovar, Koteshwar, Gandhidham, Kandla, Ahmedabad, Rajkot, and all destinations across Gujarat.',
  },
  {
    q: 'What types of vehicles are available in your fleet?',
    a: 'Our AC fleet includes Maruti Suzuki Dzire, Toyota Etios, Maruti Suzuki Ertiga, Kia Carens, Toyota Innova Crysta, and Force Tempo Traveller (12 to 20 seats) for large families and groups.',
  },
  {
    q: 'Are your fares transparent with no hidden charges?',
    a: 'Yes, absolutely. We provide upfront, transparent rate calculations. Fares are clearly discussed at booking. Toll gate charges, state tax permits, and parking are payable as per actuals without markup.',
  },
  {
    q: 'Do you arrange White Desert (Rann Utsav) tour packages?',
    a: 'Yes! We customize 1-day, 2-day, and 3-day Kutch tour packages covering the White Desert sunset/moonlight view, craft villages like Bhujodi and Nirona, Mandvi palace, and Dholavira.',
  },
  {
    q: 'Do you provide airport pickup and drop services?',
    a: 'Yes, we provide reliable airport transfers for Bhuj Airport, Kandla Airport, Ahmedabad (Sardar Vallabhbhai Patel International) Airport, and Rajkot Airport with advance booking.',
  },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Vehicle Fleet', href: '#fleet' },
    { label: 'Popular Routes', href: '#routes' },
    { label: 'Payment Options', href: '#payment' },
    { label: 'Contact Us', href: '#contact' },
  ],
  services: [
    { label: 'Rann of Kutch Desert Tour', href: '#services' },
    { label: 'Outstation Highway Cabs', href: '#services' },
    { label: 'Mandvi Beach & Palaces', href: '#services' },
    { label: 'Temple & Pilgrimage Yatras', href: '#services' },
    { label: 'Airport & Railway Transfers', href: '#services' },
    { label: '24×7 Emergency Cabs', href: '#services' },
  ],
};
