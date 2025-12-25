
export interface ItineraryItem {
  day: number | string;
  title: string;
  content: string;
}

export interface TrekPackage {
  id: string;
  title: string;
  image: string;
  price?: number;
  days: number | string;
  altitude: number;
  rating: number;
  reviewsCount?: number;
  bookedCount?: number;
  overview?: string;
  included?: string[];
  excluded?: string[];
  itinerary?: ItineraryItem[];
  highlights?: string[];
  tourType?: string;
  groupSize?: string;
  languages?: string;
  category: 'Inbound' | 'Outbound';
}

export interface Blog {
  id: string;
  title: string;
  image: string;
  date: string;
  author: string;
  excerpt: string;
}

export interface DestinationCategory {
  name: string;
  icon: string;
  count: number;
  color: string;
}
