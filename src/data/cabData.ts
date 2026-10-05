import auraImg from '../assets/cars/hyundai-aura.png';
import auraRealImg from '../assets/cars/hyundai-aura-real.jpg';
import dzireImg from '../assets/cars/hero-sedan.png';
import ertigaImg from '../assets/cars/hero-mpv.png';
import carensImg from '../assets/cars/kia-carens.png';
import innovaImg from '../assets/cars/innova-crysta.png';
import travellerImg from '../assets/cars/hero-traveller.png';
import urbaniaPng from '../assets/cars/force-urbania.png';

import fleetAuraImg from '../assets/fleet/fleet-aura.jpg';
import fleetDzireImg from '../assets/fleet/fleet-dzire.jpg';
import fleetErtigaImg from '../assets/fleet/fleet-ertiga.jpg';
import fleetUrbaniaImg from '../assets/fleet/fleet-urbania.jpg';
import fleetInnovaImg from '../assets/fleet/fleet-innova.jpg';
import fleetTravellerImg from '../assets/fleet/fleet-traveller.jpg';

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

import package1n2dImg from '../assets/packages/rann-utsav-1n2d.jpg';
import package2n3dImg from '../assets/packages/rann-utsav-2n3d.jpg';
import kutchWhiteRannImg from '../assets/packages/kutch-white-rann.jpg';
import kutchDholaviraImg from '../assets/packages/kutch-dholavira.jpg';
import kutchMandviImg from '../assets/packages/kutch-mandvi.jpg';

import gallery01 from '../assets/gallery/fleet-car-01.jpg';
import gallery02 from '../assets/gallery/fleet-car-02.jpg';
import gallery03 from '../assets/gallery/fleet-car-03.jpg';
import gallery04 from '../assets/gallery/fleet-car-04.jpg';
import gallery05 from '../assets/gallery/fleet-car-05.jpg';
import gallery06 from '../assets/gallery/fleet-car-06.jpg';
import gallery07 from '../assets/gallery/fleet-car-07.jpg';
import gallery08 from '../assets/gallery/fleet-car-08.jpg';
import gallery09 from '../assets/gallery/fleet-car-09.jpg';
import gallery10 from '../assets/gallery/fleet-car-10.jpg';
import gallery11 from '../assets/gallery/fleet-car-11.jpg';
import gallery12 from '../assets/gallery/fleet-car-12.jpg';
import gallery13 from '../assets/gallery/fleet-car-13.jpg';
import gallery14 from '../assets/gallery/fleet-car-14.jpg';

export const COMPANY = {
  name: 'Shree Cab Kutch',
  shortName: 'Shree Cab',
  tagline: 'Book Your Ride in Kutch! Safe, Reliable & Affordable',
  phone: '9727862635',
  phoneAlt: '9979368035',
  whatsapp: '919727862635',
  email: 'shreetourstravels4@gmail.com',
  emailAlt: 'chaneparlaxman@gmail.com',
  address: {
    line1: 'Mirjapar Road',
    line2: 'Bhuj, Kutch',
    line3: 'Gujarat – 370001',
    state: 'Gujarat',
  },
  socials: {
    facebook: 'https://www.facebook.com/search/top?q=shree%20tours%20travels%20bhuj',
    facebookName: 'shree tours travels bhuj',
    instagram: 'https://www.instagram.com/shree_tours_travels_bhuj/',
    instagramProfiles: [
      {
        name: 'Shree Tours Travels Bhuj',
        handle: '@shree_tours_travels_bhuj',
        url: 'https://www.instagram.com/shree_tours_travels_bhuj/',
        role: 'Official Business',
      },
      {
        name: 'Laxman Chanepar',
        handle: '@laxman_chanepar',
        url: 'https://www.instagram.com/laxman_chanepar/',
        role: 'Owner',
      },
      {
        name: 'Prem Chanepar',
        handle: '@prem_chanepar',
        url: 'https://www.instagram.com/prem_chanepar/',
        role: 'Co-Owner',
      },
    ],
    youtube: 'https://youtube.com',
  },
  googleReviews: {
    url: 'https://share.google/bB3Ayj3RetOqppwIM',
    webUrl: 'https://www.google.com/maps/place/Shree+tours+%26+travels/data=!4m7!3m6!1s0x39511f0044ce064d:0x529ba213364b0b95!8m2!3d23.2179531!4d69.6252578!16s%2Fg%2F11lcybvqrd!19sChIJTQbORAAfUTkRlQtLNhOim1I',
    businessName: 'Shree tours & travels',
    rating: 5.0,
    totalReviews: 48,
    placeAddress: 'Sahjanand nagar, Mirjapar, Bhuj, Gujarat 370040',
  },
  payment: {
    name: 'Laxman Chanepar',
    businessName: 'Shree Tours & Travels',
    phone: '9727862635',
    upiId: 'chaneparlaxman-2@okhdfcbank',
    bank: 'HDFC Bank (A/C ...5701)',
    methods: ['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI', 'Cash'],
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
  { name: 'Hyundai Aura', type: 'Sedan', seats: 5, image: auraImg },
  { name: 'Maruti Suzuki Dzire', type: 'Compact Sedan', seats: 5, image: dzireImg },
  { name: 'Maruti Suzuki Ertiga', type: 'SUV', seats: 7, image: ertigaImg },
  { name: 'Luxurious Urbania Vans', type: 'Luxury Van', seats: 12, image: urbaniaPng },
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
    category: 'Healthcare & Emergency',
    title: '24×7 Hospital Cab & Tempo Traveller',
    desc: 'Immediate, reliable transportation for hospital visits, doctor appointments, patient transfers, and emergency travel. AC Cabs & Force Tempo Traveller available 24×7 with spacious stretch-out seating for patients and accompanying family to Rajkot, Ahmedabad, Jamnagar, and local Bhuj hospitals.',
    images: [serviceHospitalImg, fleetTravellerImg],
    btnText: 'Book Hospital Cab / Traveller',
    btnColor: 'primary',
    badge: '24×7 Emergency',
    routes: [
      'Bhuj Local Hospitals & Clinics',
      'Bhuj → Rajkot / Ahmedabad Hospitals',
      'Force Tempo Traveller (Patient + Family Transfer)',
    ],
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
    name: 'Hyundai Aura',
    type: 'Executive Sedan',
    image: fleetAuraImg,
    seats: 5,
    ac: true,
    pricePerKm: 12,
    icon: '🚗',
    suitableFor: ['Local Travel', 'Airport Transfers', 'Outstation Trips'],
    specs: ['5 Seater (4+1)', 'Air Conditioned', 'Spacious Boot Space', 'Smooth Highway Ride'],
    featured: false,
  },
  {
    name: 'Maruti Suzuki Dzire',
    type: 'Compact Sedan',
    image: fleetDzireImg,
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
    type: 'Family SUV',
    image: fleetErtigaImg,
    seats: 7,
    ac: true,
    pricePerKm: 14,
    icon: '🚙',
    suitableFor: ['Family Tours', 'Small Groups', 'Airport Pickups'],
    specs: ['7 Seater (6+1)', 'Dual AC Vents', 'Foldable Seats for Luggage'],
    featured: false,
  },
  {
    name: 'Toyota Innova Crysta',
    type: 'Executive SUV',
    image: fleetInnovaImg,
    seats: 7,
    ac: true,
    pricePerKm: 20,
    icon: '🚙',
    suitableFor: ['Rann of Kutch Tours', 'Outstation Travel', 'VIP & NRI Travel'],
    specs: ['7 Seater (6+1)', 'Captain Seats & Recliner', 'Large Trunk Capacity', 'Climate Control'],
    featured: true,
  },
  {
    name: 'Tempo Traveller',
    type: 'Group Passenger Vehicle',
    image: fleetTravellerImg,
    seats: 12,
    ac: true,
    pricePerKm: 30,
    icon: '🚌',
    suitableFor: ['Group Sightseeing', 'Temple Yatras', 'Weddings & Events'],
    specs: ['12 to 20 Seater', 'Pushback Recliner Seats', 'High Roof & Big Luggage Carrier'],
    featured: false,
  },
  {
    name: 'Luxurious Urbania Vans',
    type: 'Luxury Passenger Van',
    image: fleetUrbaniaImg,
    seats: 12,
    ac: true,
    pricePerKm: 35,
    icon: '🚐',
    suitableFor: ['VIP Corporate Travel', 'Family Tours', 'Rann Utsav Luxury Trip'],
    specs: ['10 to 14 Seater', 'Plush Captain Recliners', 'High Roof Luxury Cabin', 'Individual AC & USB'],
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
    sedanFare: '₹4,650',
    suvFare: '₹5,650',
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

export interface OneWayDailyService {
  id: string;
  title: string;
  fromCity: string;
  toCity: string;
  distance: string;
  duration: string;
  badge: string;
  description: string;
  highlights: string[];
  sedanFare: string;
  suvFare: string;
  schedule: string;
}

export const ONE_WAY_SERVICES: OneWayDailyService[] = [
  {
    id: 'amdavad-bhuj',
    title: 'AMDAVAD ➜ BHUJ-KUTCH',
    fromCity: 'Amdavad',
    toCity: 'Bhuj-Kutch',
    distance: '335 km',
    duration: '6 hrs',
    badge: 'Daily Service',
    description: 'Direct highway one-way cab from anywhere in Ahmedabad (Airport, Railway Station, SG Highway) straight to your doorstep in Bhuj & Kutch.',
    highlights: ['Doorstep pickup across Ahmedabad', 'Flight & Train timed pickups', 'Zero return fare charges'],
    sedanFare: '₹4,650',
    suvFare: '₹5,650',
    schedule: '24×7 Daily Available',
  },
  {
    id: 'bhuj-amdavad',
    title: 'BHUJ-KUTCH ➜ AMDAVAD',
    fromCity: 'Bhuj-Kutch',
    toCity: 'Amdavad',
    distance: '335 km',
    duration: '6 hrs',
    badge: 'Daily Service',
    description: 'Daily reliable one-way cab from Bhuj, Gandhidham, Anjar or Mandvi to Ahmedabad Airport, hospitals, SG Highway & railway stations.',
    highlights: ['Scheduled for flights & business travel', 'Comfortable AC Sedan & SUV options', 'Safe highway night travel'],
    sedanFare: '₹4,650',
    suvFare: '₹5,650',
    schedule: '24×7 Daily Available',
  },
  {
    id: 'rajkot-bhuj',
    title: 'RAJKOT ➜ BHUJ-KUTCH',
    fromCity: 'Rajkot',
    toCity: 'Bhuj-Kutch',
    distance: '230 km',
    duration: '4 hrs',
    badge: 'Daily Service',
    description: 'Fast, smooth highway one-way transfer from Rajkot Hirasar Airport, AIIMS, bus stand or railway station directly into Bhuj & Kutch.',
    highlights: ['Hirasar Airport & AIIMS pickups', 'Express National Highway route', 'Experienced highway drivers'],
    sedanFare: '₹4,800',
    suvFare: '₹6,800',
    schedule: '24×7 Daily Available',
  },
  {
    id: 'bhuj-rajkot',
    title: 'BHUJ-KUTCH ➜ RAJKOT',
    fromCity: 'Bhuj-Kutch',
    toCity: 'Rajkot',
    distance: '230 km',
    duration: '4 hrs',
    badge: 'Daily Service',
    description: 'Daily one-way cab from anywhere in Bhuj-Kutch to Rajkot city, medical centers, commercial hubs or transit points.',
    highlights: ['Punctual doorstep pickup in Kutch', 'Direct point-to-point drop in Rajkot', 'Affordable fixed one-way tariff'],
    sedanFare: '₹4,800',
    suvFare: '₹6,800',
    schedule: '24×7 Daily Available',
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

export interface Testimonial {
  name: string;
  initials: string;
  avatarBg: string;
  badge?: string;
  location: string;
  rating: number;
  timeAgo: string;
  review: string;
  type: string;
  ownerReply?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Pritesh Vaghela',
    initials: 'PV',
    avatarBg: 'bg-[#1a73e8]',
    badge: 'Local Guide • 18 reviews',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    timeAgo: '2 weeks ago',
    type: 'White Rann & Kutch Tour',
    review:
      'Exceptional service by Shree Tours & Travels! Laxman bhai arranged a very comfortable Innova Crysta for our 4-day Kutch family trip covering Dhordo White Rann, Kala Dungar and Mandvi. The driver was extremely polite, punctual, and knew all the best local food and photography spots. 100% recommended!',
    ownerReply:
      'Thank you so much Pritesh bhai for your wonderful feedback! It was our pleasure hosting you and your family in Kutch. Look forward to serving you again!',
  },
  {
    name: 'Dhaval Bhanushali',
    initials: 'DB',
    avatarBg: 'bg-[#0f9d58]',
    badge: 'Verified Customer • 8 reviews',
    location: 'Bhuj, Gujarat',
    rating: 5,
    timeAgo: '3 weeks ago',
    type: '24×7 Hospital Emergency Transfer',
    review:
      'We urgently needed transport at 2:30 AM to shift a family patient from Bhuj to Rajkot hospital. Laxman bhai picked up our call immediately and dispatched a spacious Force Traveller with pushback seats within 20 minutes. The driver was calm, safe, and reached Rajkot without delay. Lifesaver service in emergency!',
    ownerReply:
      'Thank you Dhaval bhai. 24×7 medical emergency support is our top priority. We pray for your relative’s fast recovery and good health.',
  },
  {
    name: 'Anjali Soni',
    initials: 'AS',
    avatarBg: 'bg-[#ea4335]',
    badge: '14 reviews • 22 photos',
    location: 'Vadodara, Gujarat',
    rating: 5,
    timeAgo: '1 month ago',
    type: 'Tempo Traveller Group Tour',
    review:
      'Hired their 13-seater AC Tempo Traveller for our family group of 11 to Dholavira (Road to Heaven) and Rann Utsav. The vehicle was spotlessly clean, chilled AC throughout the desert heat, and super comfortable pushback seats. Fares were completely transparent with no hidden surprises.',
  },
  {
    name: 'Rajesh R. Patel',
    initials: 'RP',
    avatarBg: 'bg-[#fbbc04]',
    badge: 'Local Guide • 42 reviews',
    location: 'Rajkot, Gujarat',
    rating: 5,
    timeAgo: '1 month ago',
    type: 'Bhuj to Ahmedabad One-Way Cab',
    review:
      'Best cab service in Bhuj! Booked a one-way sedan from Bhuj to Ahmedabad airport. Punctual 5 AM pickup from our hotel, smooth highway driving, and a very courteous driver. Booking via WhatsApp was lightning fast. Will definitely choose Shree Cab again!',
    ownerReply:
      'Thank you Rajesh ji! Punctuality and passenger comfort on long expressway routes are our promise.',
  },
  {
    name: 'Sneha & Ketan Dave',
    initials: 'KD',
    avatarBg: 'bg-[#8e24aa]',
    badge: 'Verified Customer • 6 reviews',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    timeAgo: '2 months ago',
    type: 'Mandvi Beach & Heritage Trip',
    review:
      'We booked Shree Cab for our 2-day tour to Vijay Vilas Palace, Mandvi Beach, 72 Jinalaya, and Mata no Madh. The car was clean and fresh, and Laxman bhai gave us excellent local tips that saved us time and hassle. Very polite driver and reasonable rates.',
    ownerReply:
      'Thank you Sneha ji and Ketan bhai! We are delighted that you enjoyed your Mandvi and pilgrimage tour.',
  },
  {
    name: 'Mahesh K. Gadhvi',
    initials: 'MG',
    avatarBg: 'bg-[#00897b]',
    badge: 'Local Guide • 27 reviews',
    location: 'Gandhidham, Gujarat',
    rating: 5,
    timeAgo: '2 months ago',
    type: 'Wedding & Outstation Fleet',
    review:
      'We have booked Shree Tours & Travels multiple times for airport drops, corporate guests, and wedding functions in Bhuj and Gandhidham. Their fleet of Dzire, Ertiga, and Tempo Travellers is always in mint condition. The most reliable cab operator in Kutch!',
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
    a: 'Our AC fleet includes Maruti Suzuki Dzire, Hyundai Aura, Maruti Suzuki Ertiga, Luxurious Urbania Vans, Toyota Innova Crysta, and Force Tempo Traveller (12 to 20 seats) for large families and groups.',
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

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  subtitle: string;
  nights: number;
  days: number;
  price: number;
  priceFormatted: string;
  priceNote: string;
  tagline: string;
  hindiSlogan: string;
  badge: string;
  image: string;
  posterImage: string;
  highlights: string[];
  inclusions: string[];
  destinations: string[];
  servicesIncluded: string[];
  featured?: boolean;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'rann-utsav-1n-2d',
    title: '1 Night 2 Days',
    duration: '1 Night 2 Days',
    subtitle: 'White Rann & Bhuj',
    nights: 1,
    days: 2,
    price: 8000,
    priceFormatted: '₹8,000/-',
    priceNote: 'Per Person',
    tagline: "India's Largest Desert Cultural Festival",
    hindiSlogan: 'कच्छ नही देखा तो कुछ नही देखा!!!',
    badge: 'Popular Choice',
    image: kutchWhiteRannImg,
    posterImage: package1n2dImg,
    highlights: [
      'White Rann sunset at Dhordo',
      'Kalo Dungar viewpoint',
      'Bhuj city sightseeing',
    ],
    inclusions: [
      'Hotel & Resort Accommodation Booking',
      'Dedicated Private AC Cab for Entire Sightseeing',
      'Pick Up & Drop (Bhuj to Bhuj)',
      'Experienced Local Tourist Guide Support',
      'White Desert (Dhordo) Camel Safari Experience',
      'Sunset at White Rann & Cultural Craft Village Visit',
    ],
    destinations: [
      'White Desert (Dhordo)',
      'Kalo Dungar (Sunset Point)',
      'Gandhi nu Gam (Handicrafts)',
      'Bhuj Heritage Landmarks',
    ],
    servicesIncluded: [
      'Rann Utsav Package',
      'Kutch Tour Packages',
      'Hotel and Resort Booking',
      'Tourist Guide',
      'Car Rental Services',
    ],
    featured: true,
  },
  {
    id: 'rann-utsav-2n-3d',
    title: '2 Nights 3 Days',
    duration: '2 Nights 3 Days',
    subtitle: '+ Dholavira',
    nights: 2,
    days: 3,
    price: 12450,
    priceFormatted: '₹12,450/-',
    priceNote: 'Per Person',
    tagline: 'Ancient Harappan Civilization & Salt Highway Wonder',
    hindiSlogan: 'कच्छ नही देखा तो कुछ नही देखा!!!',
    badge: 'UNESCO Heritage',
    image: kutchDholaviraImg,
    posterImage: package2n3dImg,
    highlights: [
      'Harappan site at Dholavira',
      'Road to Heaven',
      'White Rann and Bhuj',
    ],
    inclusions: [
      'Breakfast & Dinner Unlimited',
      'Sightseeing Throughout in Dedicated Pvt AC Cab',
      '3-Star Hotel / Resort Accommodation',
      'Pick Up And Drop (Bhuj Railway Station / Airport To Bhuj)',
      'Road to Heaven (Dholavira Salt Highway) Excursion',
      'Mandvi Beach & Vijay Vilas Palace Tour',
      'All Driver Allowances, Tolls & Parking Covered',
    ],
    destinations: [
      'Harappan Site (Dholavira)',
      'Road to Heaven (Dholavira Highway)',
      'Rann of Kutch (White Salt Desert)',
      'Kalo Dungar (Magnetic Hill View)',
      'Bhuj City Heritage Bazaars',
    ],
    servicesIncluded: [
      'Breakfast & Dinner Unlimited',
      'Sightseeing Through Pvt AC Cab',
      '3 Star Hotel Accommodation',
      'Pick Up And Drop Bhuj To Bhuj',
    ],
    featured: true,
  },
  {
    id: 'kutch-tour-3n-4d',
    title: '3 Nights 4 Days',
    duration: '3 Nights 4 Days',
    subtitle: '+ Mandvi & Coast',
    nights: 3,
    days: 4,
    price: 16500,
    priceFormatted: '₹16,500/-',
    priceNote: 'Per Person',
    tagline: 'Desert, Harappan Ruins & Royal Coastal Palaces',
    hindiSlogan: 'कच्छ नही देखा तो कुछ नही देखा!!!',
    badge: 'Complete Circuit',
    image: kutchMandviImg,
    posterImage: package2n3dImg,
    highlights: [
      'Vijay Vilas Palace & Beach',
      'Harappan site & Road to Heaven',
      'White Rann & Kalo Dungar',
      'Bhuj city & craft villages',
    ],
    inclusions: [
      '3 Nights 3-Star Resort & Hotel Stay',
      'Unlimited Breakfast & Dinner Included',
      'Dedicated AC Cab with Chauffeur throughout',
      'Mandvi Coastal Beach & Windmills Excursion',
      'Vijay Vilas Heritage Palace & 72 Jinalaya Tour',
      'White Rann, Dholavira & Bhuj Sightseeing',
      'Pick & drop Bhuj Airport / Railway Station',
    ],
    destinations: [
      'Vijay Vilas Palace (Mandvi)',
      'Mandvi Beach & Watersports',
      'White Desert (Dhordo)',
      'Road to Heaven (Dholavira)',
      'Bhuj Heritage & Craft Bazaars',
    ],
    servicesIncluded: [
      'All Resort Stays Included',
      'Private AC Cab Throughout',
      'Sightseeing & Driver Allowance',
      'Station / Airport Pick & Drop',
    ],
    featured: false,
  },
  {
    id: 'kutch-tour-4n-5d',
    title: '4 Nights 5 Days',
    duration: '4 Nights 5 Days',
    subtitle: 'Complete Kutch Tour',
    nights: 4,
    days: 5,
    price: 21000,
    priceFormatted: '₹21,000/-',
    priceNote: 'Per Person',
    tagline: 'Grand Kutch Circuit • Desert, Temples, Heritage & Coast',
    hindiSlogan: 'कच्छ नही देखा तो कुछ नही देखा!!!',
    badge: 'Grand All-Inclusive',
    image: kutchWhiteRannImg,
    posterImage: package1n2dImg,
    highlights: [
      'White Rann, Dholavira & Mandvi',
      'Mata no Madh & Lakhpat Fort',
      'Nirona & Ajrakhpur craft villages',
      'Vehicle, driver & stay arranged',
    ],
    inclusions: [
      '4 Nights Resort & Heritage Hotel Accommodation',
      'Daily Breakfast & Dinner Buffet',
      'Full 5 Days Dedicated AC Cab with Chauffeur',
      'Pilgrimage to Mata no Madh & Narayan Sarovar',
      'Lakhpat Fort & Border Outpost Excursion',
      'Master Craftsmen Demo: Rogan Art & Bell Making',
    ],
    destinations: [
      'White Desert & Tent City',
      'Dholavira & Road to Heaven',
      'Mandvi Beach & Palaces',
      'Mata no Madh & Lakhpat',
      'Nirona & Ajrakhpur Villages',
    ],
    servicesIncluded: [
      'Complete 5-Day Transportation',
      'Resorts & Hotels All Arranged',
      'Experienced Chauffeur & Guide',
      'All-Inclusive Package Billing',
    ],
    featured: false,
  },
];

export interface GalleryItem {
  id: string;
  src: string;
  title: string;
  category: 'Sedans' | 'SUVs' | 'Traveller' | 'Trips';
  caption: string;
  vehicleName: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-aura',
    src: auraRealImg,
    title: 'Hyundai Aura Commercial Sedan (GJ18 BX 1309)',
    category: 'Sedans',
    caption: 'Official Shree Cab white Hyundai Aura commercial taxi ready for Bhuj local and Gujarat outstation travel.',
    vehicleName: 'Hyundai Aura',
  },
  {
    id: 'gallery-01',
    src: gallery01,
    title: 'Maruti Suzuki Dzire Tour S (GJ03 CU 6849)',
    category: 'Sedans',
    caption: 'Clean, AC-equipped white Maruti Suzuki Dzire Tour sedan for comfortable city and airport travel.',
    vehicleName: 'Maruti Suzuki Dzire',
  },
  {
    id: 'gallery-02',
    src: gallery02,
    title: 'Maruti Suzuki Dzire AC Sedan (GJ12 CT 6489)',
    category: 'Sedans',
    caption: 'Pristine condition Maruti Suzuki Dzire commercial cab with chilled AC for outstation trips.',
    vehicleName: 'Maruti Suzuki Dzire',
  },
  {
    id: 'gallery-03',
    src: gallery03,
    title: 'Maruti Suzuki Dzire Commercial Cab (GJ05 CY 6168)',
    category: 'Sedans',
    caption: 'Reliable and smooth Maruti Dzire cab for outstation tours, airport drops, and highway travel.',
    vehicleName: 'Maruti Suzuki Dzire',
  },
  {
    id: 'gallery-04',
    src: gallery04,
    title: 'Maruti Suzuki Ertiga 7-Seater (GJ12 CT 2817)',
    category: 'SUVs',
    caption: 'Spacious 7-seater family car for Kutch sightseeing, Dhordo Rann Utsav and airport transfers.',
    vehicleName: 'Maruti Suzuki Ertiga',
  },
  {
    id: 'gallery-05',
    src: gallery05,
    title: 'Maruti Suzuki Ertiga Rear Profile (GJ12 CT 2817)',
    category: 'SUVs',
    caption: 'Spacious boot capacity and rear profile of our 7-seater Ertiga fleet for family luggage and gear.',
    vehicleName: 'Maruti Suzuki Ertiga',
  },
  {
    id: 'gallery-06',
    src: gallery06,
    title: 'Maruti Suzuki Ertiga Silver Edition (GJ12 FE 3708)',
    category: 'SUVs',
    caption: 'Premium silver metallic Maruti Ertiga with dedicated Shree fleet branding for Kutch tours.',
    vehicleName: 'Maruti Suzuki Ertiga',
  },
  {
    id: 'gallery-07',
    src: gallery07,
    title: 'Maruti Suzuki Ertiga Outstation Cab',
    category: 'SUVs',
    caption: 'Well-maintained 7-seater Ertiga ready for long-distance highway travel and family outstation tours.',
    vehicleName: 'Maruti Suzuki Ertiga',
  },
  {
    id: 'gallery-08',
    src: gallery08,
    title: 'Toyota Innova Crysta Luxury SUV (GJ12 CV 3371)',
    category: 'SUVs',
    caption: 'Executive white Toyota Innova Crysta luxury SUV for VIP travel, corporate tours, and resort trips.',
    vehicleName: 'Toyota Innova Crysta',
  },
  {
    id: 'gallery-09',
    src: gallery09,
    title: 'Force Tempo Traveller Luxury Fleet (MH12 AB 6678)',
    category: 'Traveller',
    caption: 'Spacious AC Force Tempo Traveller for family functions, group tours, and wedding transportation.',
    vehicleName: 'Tempo Traveller',
  },
  {
    id: 'gallery-10',
    src: gallery10,
    title: 'Force Tempo Traveller Tourist Van',
    category: 'Traveller',
    caption: 'High-capacity Force Tempo Traveller tailored for Kutch pilgrimage tours and group expeditions.',
    vehicleName: 'Tempo Traveller',
  },
  {
    id: 'gallery-11',
    src: gallery11,
    title: 'Force Urbania Luxury Van (New Fleet Delivery)',
    category: 'Traveller',
    caption: 'Brand-new premium Force Urbania luxury passenger van joining the Shree Cab fleet at the dealership.',
    vehicleName: 'Force Urbania Van',
  },
  {
    id: 'gallery-12',
    src: gallery12,
    title: 'Force Urbania Executive Cruiser (DD02 H 8982)',
    category: 'Traveller',
    caption: 'Ultra-luxurious Force Urbania van with individual pushback seats, ambient cabin, and panoramic windows.',
    vehicleName: 'Force Urbania Van',
  },
  {
    id: 'gallery-13',
    src: gallery13,
    title: 'Force Urbania Pilgrimage Tour Van (DD03 Q 9596)',
    category: 'Traveller',
    caption: 'High-roof Force Urbania tourist van on devotional pilgrimage and heritage sightseeing tour in Gujarat.',
    vehicleName: 'Force Urbania Van',
  },
  {
    id: 'gallery-14',
    src: gallery14,
    title: 'Force Urbania Luxury Executive Van',
    category: 'Traveller',
    caption: 'Executive luxury tour van styled for high-end VIP travel, family vacations, and corporate groups.',
    vehicleName: 'Force Urbania Van',
  },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '#home' },
    { label: 'Tour Packages', href: '#packages' },
    { label: 'Photo Gallery', href: '#gallery' },
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
