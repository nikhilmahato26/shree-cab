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
    sedanFare: '₹6,500',
    suvFare: '₹9,000',
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
    sedanFare: '₹6,500',
    suvFare: '₹9,000',
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
  nights: number;
  days: number;
  price: number;
  priceFormatted: string;
  priceNote: string;
  tagline: string;
  hindiSlogan: string;
  badge: string;
  posterImage: string;
  inclusions: string[];
  destinations: string[];
  servicesIncluded: string[];
  featured?: boolean;
}

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'rann-utsav-1n-2d',
    title: 'Rann Utsav Kutch Package',
    duration: '1 Night | 2 Days',
    nights: 1,
    days: 2,
    price: 8000,
    priceFormatted: '₹8,000/-',
    priceNote: 'Per Person',
    tagline: "India's Largest Desert Cultural Festival",
    hindiSlogan: 'कच्छ नही देखा तो कुछ नही देखा!!!',
    badge: 'Popular Choice',
    posterImage: package1n2dImg,
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
      'Kala Dungar (Sunset Point)',
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
    featured: false,
  },
  {
    id: 'rann-utsav-2n-3d',
    title: 'Grand Rann Utsav & Kutch Tour',
    duration: '2 Nights | 3 Days',
    nights: 2,
    days: 3,
    price: 12450,
    priceFormatted: '₹12,450/-',
    priceNote: 'Per Person',
    tagline: 'Complete Kutch Holiday • Desert, Heritage & Coastline',
    hindiSlogan: 'If you haven\'t seen Kutch, you haven\'t seen anything.',
    badge: 'All-Inclusive Value',
    posterImage: package2n3dImg,
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
      'Rann of Kutch (White Salt Desert)',
      'Road to Heaven (Dholavira Highway)',
      'Vijay Vilas Palace (Mandvi)',
      'Mandvi Beach & Watersports',
      'Kala Dungar (Magnetic Hill View)',
      'Bhuj City Heritage Bazaars',
    ],
    servicesIncluded: [
      'Breakfast In Dinner Unlimited',
      'Sightseeing Through Pvt AC Cab',
      '3 Star Hotel Accommodation',
      'Pick Up And Drop Bhuj To Bhuj',
    ],
    featured: true,
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
    title: 'Toyota Innova Crysta AC Premium',
    category: 'SUVs',
    caption: 'Executive 7-seater AC SUV for Rann Utsav & VIP outstation travel.',
    vehicleName: 'Toyota Innova Crysta',
  },
  {
    id: 'gallery-02',
    src: gallery02,
    title: 'Force Urbania Luxury Van',
    category: 'Traveller',
    caption: 'Ultra-luxurious high-roof passenger van for family & group trips in Kutch.',
    vehicleName: 'Force Urbania Van',
  },
  {
    id: 'gallery-03',
    src: gallery03,
    title: 'Tempo Traveller Tourist Fleet',
    category: 'Traveller',
    caption: '12 to 20-seater spacious AC traveller for pilgrimage & wedding groups.',
    vehicleName: 'Tempo Traveller',
  },
  {
    id: 'gallery-04',
    src: gallery04,
    title: 'Maruti Suzuki Ertiga Family SUV',
    category: 'SUVs',
    caption: 'Comfortable 7-seater family car for Kutch sightseeing & airport transfers.',
    vehicleName: 'Maruti Suzuki Ertiga',
  },
  {
    id: 'gallery-05',
    src: gallery05,
    title: 'Maruti Suzuki Dzire AC Sedan',
    category: 'Sedans',
    caption: 'Clean, efficient, and pocket-friendly sedan for local & outstation rides.',
    vehicleName: 'Maruti Suzuki Dzire',
  },
  {
    id: 'gallery-06',
    src: gallery06,
    title: 'White Desert Rann Tour Cab',
    category: 'Trips',
    caption: 'On-location at Dhordo White Rann during evening sunset hours.',
    vehicleName: 'Sightseeing Tour',
  },
  {
    id: 'gallery-07',
    src: gallery07,
    title: 'Highway Outstation Cruiser',
    category: 'Sedans',
    caption: 'Ready for long-distance Ahmedabad, Rajkot & Gujarat expressways.',
    vehicleName: 'Hyundai Aura / Dzire',
  },
  {
    id: 'gallery-08',
    src: gallery08,
    title: 'Premium Fleet at Mandvi Beach',
    category: 'Trips',
    caption: 'Coastal tour and palace excursion trip with family travelers.',
    vehicleName: 'Mandvi Sightseeing',
  },
  {
    id: 'gallery-09',
    src: gallery09,
    title: 'Clean & Sanitized Cabin Interiors',
    category: 'SUVs',
    caption: 'Plush reclining captain seats, ambient cooling, and pristine cleanliness.',
    vehicleName: 'Innova Crysta Interior',
  },
  {
    id: 'gallery-10',
    src: gallery10,
    title: 'Road to Heaven Dholavira Expedition',
    category: 'Trips',
    caption: 'Scenic drive along the salt desert highway heading to UNESCO Dholavira.',
    vehicleName: 'Road to Heaven Tour',
  },
  {
    id: 'gallery-11',
    src: gallery11,
    title: 'Kia Carens Premium Family MUV',
    category: 'SUVs',
    caption: 'Spacious and smooth long-haul tour vehicle with ample luggage room.',
    vehicleName: 'Kia Carens',
  },
  {
    id: 'gallery-12',
    src: gallery12,
    title: 'Wedding & Event Luxury Convoy',
    category: 'Traveller',
    caption: 'Coordinated guest pickup & drop services for functions across Bhuj.',
    vehicleName: 'Wedding Fleet',
  },
  {
    id: 'gallery-13',
    src: gallery13,
    title: 'Temple Pilgrimage Tour Cab',
    category: 'Trips',
    caption: 'Devotional trip to Mata no Madh, Narayan Sarovar & Koteshwar Mahadev.',
    vehicleName: 'Pilgrimage Circuit',
  },
  {
    id: 'gallery-14',
    src: gallery14,
    title: 'Airport & Railway Station Pickup Fleet',
    category: 'Sedans',
    caption: 'Punctual 24×7 transfer service at Bhuj Railway Station & Airport.',
    vehicleName: 'Airport Transfer',
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
