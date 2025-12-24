
export interface TrekPackage {
  id: string;
  title: string;
  image: string;
  price: number;
  days: number;
  altitude: number;
  rating: number;
  reviewsCount?: number;
  bookedCount?: number;
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
