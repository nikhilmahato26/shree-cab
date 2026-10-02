import dzireImg from '../assets/images/dzire.jpg';
import ertigaImg from '../assets/images/ertiga.jpg';
import innovaImg from '../assets/images/innova-crysta.jpg';
import tempoImg from '../assets/images/tempo-traveller.jpg';
import urbaniaImg from '../assets/images/force-urbania.jpg';

export type VehicleCategory = 'All' | 'Cars' | 'Family' | 'Group Travel';

export interface Vehicle {
  id: string;
  name: string;
  category: 'Cars' | 'Family' | 'Group Travel';
  tag: string;
  image: string;
  altText: string;
}

export const FLEET_CATEGORIES: VehicleCategory[] = [
  'All',
  'Cars',
  'Family',
  'Group Travel',
];

export const FLEET: Vehicle[] = [
  {
    id: 'maruti-suzuki-dzire',
    name: 'Maruti Suzuki Dzire',
    category: 'Cars',
    tag: 'AC Vehicle',
    image: dzireImg,
    altText: 'Maruti Suzuki Dzire AC sedan cab rental in Bhuj Kutch',
  },
  {
    id: 'maruti-suzuki-ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'Family',
    tag: 'AC Vehicle',
    image: ertigaImg,
    altText: 'Maruti Suzuki Ertiga AC family cab rental in Bhuj Kutch',
  },
  {
    id: 'toyota-innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Family',
    tag: 'AC Vehicle',
    image: innovaImg,
    altText: 'Toyota Innova Crysta AC premium MPV cab rental in Bhuj Kutch',
  },
  {
    id: 'tempo-traveller',
    name: 'Tempo Traveller',
    category: 'Group Travel',
    tag: 'AC Vehicle',
    image: tempoImg,
    altText: 'Force Tempo Traveller AC tourist passenger van rental in Bhuj Kutch',
  },
  {
    id: 'force-urbania-van',
    name: 'Force Urbania Van',
    category: 'Group Travel',
    tag: 'AC Vehicle',
    image: urbaniaImg,
    altText: 'Force Urbania Van AC luxury group travel rental in Bhuj Kutch',
  },
];
