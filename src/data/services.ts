export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Car' | 'Navigation' | 'MapPin' | 'Compass' | 'Users' | 'Bus';
  featureBadge: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'cab-rental',
    title: 'Cab Rental',
    description: 'Comfortable AC vehicles available for rental.',
    iconName: 'Car',
    featureBadge: 'AC Fleet',
  },
  {
    id: 'local-travel',
    title: 'Local Travel',
    description: 'Transportation for travel within Bhuj and surrounding areas.',
    iconName: 'Navigation',
    featureBadge: 'City & Sightseeing',
  },
  {
    id: 'outstation-travel',
    title: 'Outstation Travel',
    description: 'Cab services for journeys outside Bhuj.',
    iconName: 'MapPin',
    featureBadge: 'Intercity Trips',
  },
  {
    id: 'travel-agency',
    title: 'Travel Agency',
    description: 'Travel assistance and transportation arrangements.',
    iconName: 'Compass',
    featureBadge: 'Complete Assistance',
  },
  {
    id: 'family-travel',
    title: 'Family Travel',
    description: 'Comfortable vehicle options for family journeys.',
    iconName: 'Users',
    featureBadge: 'Comfort & Safety',
  },
  {
    id: 'group-transportation',
    title: 'Group Transportation',
    description: 'Larger vehicles available for group travel.',
    iconName: 'Bus',
    featureBadge: 'Tempo & Urbania',
  },
];
