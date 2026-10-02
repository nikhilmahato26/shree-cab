import rannImg from '../assets/images/travel-rann.jpg';
import bhujImg from '../assets/images/travel-bhuj.jpg';
import sightseeingImg from '../assets/images/travel-sightseeing.jpg';
import outstationImg from '../assets/images/travel-outstation.jpg';

export interface TravelCategory {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
}

export const TRAVEL_CATEGORIES: TravelCategory[] = [
  {
    id: 'kutch',
    title: 'Kutch',
    tag: 'Desert & Cultural Circuit',
    image: rannImg,
    description: 'Experience the unique beauty of Kutch landscapes, White Desert, and regional culture with dedicated AC transportation.',
  },
  {
    id: 'bhuj',
    title: 'Bhuj',
    tag: 'Heritage & City Travel',
    image: bhujImg,
    description: 'Effortless travel across Bhuj city landmarks, historical palaces, bustling bazaars, and local points of interest.',
  },
  {
    id: 'local-sightseeing',
    title: 'Local Sightseeing',
    tag: 'Day Excursions',
    image: sightseeingImg,
    description: 'Comfortable day trips to prominent regional destinations including Mandvi coastal attractions and cultural craft villages.',
  },
  {
    id: 'outstation-travel',
    title: 'Outstation Travel',
    tag: 'Gujarat & Beyond',
    image: outstationImg,
    description: 'Smooth highway cab services connecting Bhuj and Kutch to major cities across Gujarat with experienced drivers.',
  },
];
