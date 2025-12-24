
import React from 'react';
import { TrekPackage, Blog, DestinationCategory } from './types';

export const TREK_PACKAGES: TrekPackage[] = [
  {
    id: '1',
    title: 'Chitwan Tour Package: 3-Day and 2 Nights Tour',
    image: 'https://picsum.photos/seed/chitwan/600/400',
    price: 200,
    days: 3,
    altitude: 189,
    rating: 5,
    bookedCount: 24
  },
  {
    id: '2',
    title: 'Everest Base Camp short Trek heli return- 9 Days',
    image: 'https://picsum.photos/seed/everest/600/400',
    price: 2400,
    days: 9,
    altitude: 5500,
    rating: 5,
    reviewsCount: 1,
    bookedCount: 4
  },
  {
    id: '3',
    title: 'Everest Heli Tour',
    image: 'https://picsum.photos/seed/heli/600/400',
    price: 1300,
    days: 1,
    altitude: 5555,
    rating: 5,
    bookedCount: 0
  },
  {
    id: '4',
    title: 'Kanchenjunga North to South Trek',
    image: 'https://picsum.photos/seed/kanchenjunga/600/400',
    price: 1850,
    days: 17,
    altitude: 5160,
    rating: 5,
    bookedCount: 23
  },
  {
    id: '5',
    title: 'Langtang Gosaikunda Trek 11 Days',
    image: 'https://picsum.photos/seed/langtang/600/400',
    price: 880,
    days: 11,
    altitude: 4380,
    rating: 5,
    bookedCount: 54
  },
  {
    id: '6',
    title: 'Everest Base Camp Trek 12 Days',
    image: 'https://picsum.photos/seed/ebc12/600/400',
    price: 1299,
    days: 12,
    altitude: 5555,
    rating: 5,
    reviewsCount: 1,
    bookedCount: 5
  }
];

export const BLOGS: Blog[] = [
  {
    id: 'b1',
    title: 'Makalu Base Camp Trek Cost',
    image: 'https://picsum.photos/seed/blog1/600/400',
    date: '24th Nov, 2025',
    author: 'Rajesh Neupane',
    excerpt: 'Makalu Base Camp Trek Cost: Complete Guide to Budget, Inclusions, and Money-Saving Tips The Makalu Base Camp trek is one...'
  },
  {
    id: 'b2',
    title: 'Kanchenjunga Trek Cost',
    image: 'https://picsum.photos/seed/blog2/600/400',
    date: '13th Aug, 2025',
    author: 'Rajesh Neupane',
    excerpt: 'The Himalayas, a land of mystical peaks and ancient cultures, hold countless treasures for the intrepid traveller. Among...'
  },
  {
    id: 'b3',
    title: 'Kanchenjunga trek in April',
    image: 'https://picsum.photos/seed/blog3/600/400',
    date: '10th Aug, 2025',
    author: 'Rajesh Neupane',
    excerpt: 'The Himalayas are a world of extremes, and for the seasoned trekker, few names hold as much mystique as the Kanchenjunga...'
  }
];

export const DESTINATIONS: DestinationCategory[] = [
  { name: 'Nepal', icon: '🏔️', count: 65, color: 'bg-blue-600' },
  { name: 'Bhutan', icon: '🏰', count: 2, color: 'bg-green-600' },
  { name: 'Tibet', icon: '🕌', count: 4, color: 'bg-orange-500' }
];
