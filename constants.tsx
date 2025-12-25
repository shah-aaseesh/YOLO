
import React from 'react';
import { TrekPackage, Blog, DestinationCategory } from './types';

export interface Testimonial {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  avatar?: string;
}

export const TREK_PACKAGES: TrekPackage[] = [
  // --- INBOUND PACKAGES ---
  {
    id: 'p1',
    title: '1 Day Janakpurdham Heritage Tour',
    image: 'https://images.unsplash.com/photo-1623067309489-011244247565?auto=format&fit=crop&q=80&w=800',
    days: 1,
    altitude: 74,
    rating: 5,
    bookedCount: 124,
    tourType: 'Religious & Cultural Tour',
    groupSize: 'Private or Group',
    languages: 'Hindi & English',
    category: 'Inbound',
    overview: "This one-day heritage tour of Janakpurdham offers an immersive spiritual and historical journey through the sacred city of Goddess Sita’s birthplace. Visit the majestic Janaki Mandir, explore spiritual sites like Ram Mandir, Dhanush Sagar, and Swarg Dwar, and witness the grandeur of Ganga Aarti. Ideal for all age groups, this guided tour includes local cultural experiences like Janakpuriya Lassi, Pan, and visits to significant Ramayan-related landmarks.",
    included: [
      "Private AC SUV for full-day sightseeing",
      "Guided tour of Janakpur’s temples and historical sites",
      "Airport transfers in Janakpur",
      "Lunch and snacks at a pure vegetarian restaurant",
      "Visits to temples, ponds, ritual sites, and cultural landmarks"
    ],
    excluded: [
      "Flight tickets to/from Janakpur",
      "Personal expenses and tips",
      "Any items not specifically mentioned"
    ],
    highlights: [
      "Spiritual immersion in Janaki Mandir and Ram Mandir",
      "Historical insights into Ram-Sita’s wedding and sacred sites",
      "Cultural experiences like Ganga Aarti, Janakpuriya Pan & Lassi",
      "Visit to Dhanusha Dham, a vital part of the Ramayan trail"
    ],
    itinerary: [
      { day: 1, title: 'Janakpur Heritage & Pilgrimage Tour', content: '● Early morning flight to Janakpurdham.\n● Visit Ram Mandir for Darshan.\n● Explore Dhanush Sagar, Swarg Dwar, and witness Ganga Aarti at the Ghats.\n● Visit the magnificent Janaki Mandir and Biwaha Mandap.\n● Explore Rangbhumi Maidan.\n● Afternoon excursion to Dhanusha Dham (30 KM from city).\n● Return to Janakpur for evening exploration.' }
    ]
  },
  {
    id: 'p3',
    title: '4 Day Muktinath Tour – Jomsom & Pokhara',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800',
    days: 4,
    altitude: 3800,
    rating: 5,
    bookedCount: 42,
    tourType: 'Pilgrimage & Scenic Adventure',
    groupSize: 'Min. 7 Pax',
    languages: 'Hindi & English',
    category: 'Inbound',
    overview: "A sacred pilgrimage to Muktinath Temple, nestled at 3,800 meters in Nepal’s Mustang region.",
    highlights: [
      "Holy visit to Muktinath Temple",
      "Scenic exploration of Jomsom, Kagbeni, and Dhumba Lake",
      "Suspension bridges and river gorges in Kushma",
      "Cultural and natural sightseeing in Pokhara"
    ],
    included: ["Ground transportation", "Hotel accommodation", "All meals"],
    excluded: ["Personal expenses", "13% VAT"],
    itinerary: [{ day: 1, title: 'Janakpur to Kushma', content: 'Drive via Prithivi Highway' }]
  },
  {
    id: 'p5',
    title: '12 Day Everest Base Camp Trek',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    days: 12,
    altitude: 5364,
    rating: 5,
    bookedCount: 312,
    tourType: 'Classic Trekking',
    groupSize: 'Small Group',
    languages: 'English',
    category: 'Inbound',
    overview: "The legendary trek to the base of the world's highest peak.",
    highlights: ["Namche Bazaar", "Tengboche Monastery", "Everest Base Camp"],
    included: ["Flights to Lukla", "Trekking permits", "Full board meals", "Sherpa guide"],
    itinerary: [{ day: 1, title: 'Flight to Lukla', content: 'Scenic flight and trek to Phakding.' }]
  },

  // --- OUTBOUND PACKAGES FROM PDF ---
  {
    id: 'out1',
    title: '4 Night 5 Day Baku Heritage & Adventure Tour – Azerbaijan',
    image: 'https://images.unsplash.com/photo-1528642463365-22ceea2a7330?auto=format&fit=crop&q=80&w=800',
    days: 5,
    altitude: 0,
    rating: 5,
    bookedCount: 56,
    tourType: 'Cultural, City & Nature Tour',
    groupSize: 'Flexible Group Size',
    languages: 'English',
    category: 'Outbound',
    overview: "Explore the vibrant culture and futuristic architecture of Baku, the capital of Azerbaijan, with this perfectly curated 4N/5D package. From the flame towers to old city bazaars, this journey blends history with modernity. Discover historical palaces, walk along the Caspian Sea, indulge in local cuisine, and enjoy panoramic mountain views—all in one unforgettable tour of the Land of Fire.",
    included: [
      "4 nights accommodation in Baku (twin/triple sharing)",
      "Daily breakfast and dinner as per itinerary",
      "Airport transfers and sightseeing transfers",
      "Guided city tours of Baku and surrounding attractions",
      "Entry fees to listed monuments and sites",
      "Local English-speaking tour guide"
    ],
    excluded: [
      "International airfare",
      "Visa fees and processing (unless otherwise stated)",
      "Travel insurance",
      "Personal expenses and shopping",
      "Tips for guide and driver",
      "Meals and drinks not mentioned in inclusions"
    ],
    highlights: [
      "Historic walks through Baku Old City",
      "Witness eternal flames at Ateshgah Temple and Yanar Dag",
      "Modern marvels like the Heydar Aliyev Center",
      "Day trip to picturesque Gabala (optional)",
      "Local cuisine, vibrant bazaars, and seafront strolls"
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Baku', content: '● Arrival at Heydar Aliyev International Airport\n● Meet and greet at the airport, transfer to hotel\n● Free time to relax and explore nearby areas\n● Stay: Hotel in Baku' },
      { day: 2, title: 'Baku City Tour', content: '● Breakfast at hotel\n● Visit: Highland Park, Flame Towers, Baku Boulevard, Nizami Street, and Old City\n● Explore Shirvanshah’s Palace and Maiden Tower\n● Stay: Hotel in Baku' },
      { day: 3, title: 'Absheron Peninsula & Fire Temple Tour', content: '● Breakfast at hotel\n● Visit Ateshgah Fire Temple, Yanar Dag (Burning Mountain)\n● Explore Heydar Aliyev Cultural Center (from outside)\n● Evening free for shopping\n● Stay: Hotel in Baku' },
      { day: 4, title: 'Gabala Day Excursion (Optional)', content: '● Breakfast at hotel\n● Full-day optional excursion to Gabala: Tufandag Mountain Resort, Nohur Lake, Yeddi Gozel Waterfall\n● Return to Baku in the evening\n● Stay: Hotel in Baku' },
      { day: 5, title: 'Departure', content: '● Breakfast and check-out from hotel\n● Transfer to airport for return flight\n● End of tour with sweet memories of Azerbaijan' }
    ]
  },
  {
    id: 'out2',
    title: '4 Night 5 Day Dubai Tour – Arabian Hub Experience',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
    days: 5,
    altitude: 0,
    rating: 5,
    bookedCount: 142,
    tourType: 'Luxury, Adventure & City Experience',
    groupSize: 'Flexible Group Size',
    languages: 'English',
    category: 'Outbound',
    overview: "Discover the glitz, glamour, and grandeur of Dubai, the dazzling Arabian metropolis known for its sky-high architecture, thrilling desert landscapes, cultural heritage, and world-class shopping. From cruising under the stars on a traditional Dhow, to thrilling desert safaris, city tours, and leisure time for shopping, this 5-day itinerary ensures a balanced mix of adventure, relaxation, and exploration. Perfect for couples, families, and friend groups looking for a complete Dubai getaway.",
    included: [
      "Round trip economy class airfare (subject to availability)",
      "Accommodation in a 3-star hotel",
      "Daily breakfast and meals as mentioned in the itinerary",
      "Half-day Dubai city tour (coach)",
      "Desert Safari with BBQ dinner and transfers (coach)",
      "Dhow Cruise Dinner with transfers (coach)",
      "Round-trip airport transfers",
      "Dubai Visa fees"
    ],
    excluded: [
      "Personal expenses (shopping, drinks, additional meals)",
      "Travel insurance",
      "Any items not explicitly listed in inclusions",
      "Early check-in or late check-out at the hotel"
    ],
    highlights: [
      "Iconic city tour with views of Burj Khalifa, Palm Island, and Dubai Marina",
      "Traditional Dhow Cruise Dinner with night views of the Dubai skyline",
      "Thrilling Desert Safari with dune bashing, entertainment & BBQ",
      "Ample leisure time to explore malls, souks, and attractions",
      "Visa assistance and complete logistics managed"
    ],
    itinerary: [
      { day: 1, title: 'Arrive in Dubai', content: '● Arrival at Dubai International Airport\n● Meet and greet by our representative\n● Transfer to hotel and check-in\n● Stay: Hotel in Dubai' },
      { day: 2, title: 'Dubai City Tour + Dhow Cruise Dinner', content: '● Morning: Half-day city tour visiting Jumeirah Mosque, Burj Khalifa (exterior), Palm Island, Dubai Museum, and more\n● Evening: Dhow Cruise Dinner on Dubai Creek with buffet and live entertainment\n● Stay: Hotel in Dubai' },
      { day: 3, title: 'Desert Safari Experience', content: '● Morning at leisure\n● Afternoon: Head into the golden desert for dune bashing, camel rides, sandboarding\n● Evening: Enjoy Belly dancing, Henna painting, and BBQ Dinner\n● Stay: Hotel in Dubai' },
      { day: 4, title: 'Free Day (Leisure)', content: '● Explore Dubai on your own\n● Optional activities: Burj Khalifa Top, Dubai Mall, Atlantis Aquaventure, or shopping at local souks and malls\n● Stay: Hotel in Dubai' },
      { day: 5, title: 'Departure', content: '● Breakfast at hotel\n● Transfer to Dubai International Airport\n● Depart with memories of a magical desert city' }
    ]
  },
  {
    id: 'out3',
    title: '7 Night 8 Day India Corporate Group Tour',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=800',
    days: 8,
    altitude: 0,
    rating: 4.8,
    bookedCount: 27,
    tourType: 'Corporate & Leisure Tour',
    groupSize: 'Group (6–22 Pax)',
    languages: 'Hindi & English',
    category: 'Outbound',
    overview: "This curated luxury corporate getaway blends spiritual immersion, coastal relaxation, and urban exploration. Begin in Chennai with a sacred visit to Tirupati Balaji Temple, unwind on Goa's famous beaches, explore Mumbai's iconic landmarks, and end with a blissful escape to the turquoise waters of the Maldives. Premium hotels, cultural experiences, and leisure time make this an ideal balance of business and pleasure.",
    included: [
      "Round-trip airfare and domestic flights",
      "Accommodation in 4–5 star hotels (triple/double sharing)",
      "All intercity transfers via Innova Crysta or Tempo Traveller",
      "Daily breakfast and dinner",
      "Guided sightseeing in each destination",
      "Airport pick-up and drop-off",
      "Maldives resort stay with transfers"
    ],
    excluded: [
      "Meals not specified",
      "Personal expenses and tips",
      "Travel insurance",
      "Any services not mentioned under “Included”",
      "13% VAT on package (if applicable)"
    ],
    highlights: [
      "Sacred visit to Tirupati Balaji Temple",
      "Scenic and cultural immersion in Goa’s beaches and churches",
      "Urban discovery of Mumbai’s iconic landmarks",
      "Corporate sessions for networking or training",
      "Luxury resort stay in the Maldives"
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Chennai', content: '● Flights: KTM – DEL – MAA\n● Transfer to Ramada Plaza Chennai or Regenta Central RS\n● Leisure time and group dinner\n● Stay: Chennai (5★ or 4★)' },
      { day: 2, title: 'Tirupati Balaji Darshan or Chennai Sightseeing', content: '● Full-day excursion to Tirupati Balaji Temple (optional)\n● Alternative: Visit Marina Beach, San Thome Basilica, Kapaleeshwarar Temple, Fort St. George\n● Evening leisure or New Year celebration\n● Stay: Chennai' },
      { day: 3, title: 'Fly to Goa', content: '● Flight: MAA – GOI\n● Check-in at River Deck Baga or Sun City Resort\n● Beach relaxation at Baga Beach\n● Stay: Goa (4★ or 3★)' },
      { day: 4, title: 'Goa Sightseeing', content: '● Visit Aguada Fort, Chapora Fort, Anjuna, Vagator, and Calangute Beaches\n● Old Goa Churches: Bom Jesus Basilica, Se Cathedral\n● Sunset views and dinner at the resort\n● Stay: Goa' },
      { day: 5, title: 'Fly to Mumbai', content: '● Flight: GOI – BOM\n● Transfer to Sun N Sand Juhu / IRA by Orchid\n● Evening stroll at Juhu Beach\n● Stay: Mumbai (5★ or 4★)' },
      { day: 6, title: 'Mumbai Sightseeing or Training Session', content: '● Morning corporate session (optional)\n● Visits to Gateway of India, Marine Drive, Siddhivinayak Temple, Haji Ali, Fashion Street, Bandra-Worli Sea Link\n● Drive past celebrity homes\n● Stay: Mumbai' },
      { day: 7, title: 'Fly to Maldives or Return to Kathmandu', content: '● Flight: BOM – MLE or BOM – KTM\n● For Maldives group: Transfer to Hard Rock Maldives Resort, enjoy leisure and luxury\n● For return group: Depart to Kathmandu\n● Stay: Maldives or End of Tour' },
      { day: 8, title: 'Leisure / Return from Maldives', content: '● Free day in Maldives for relaxation or water sports\n● Optional: Spa, snorkeling, island hopping\n● Flight: MLE – BOM – KTM\n● End of Tour' }
    ]
  },
  {
    id: 'out4',
    title: '8 Night 9 Day Thailand, Vietnam & Cambodia Tour',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800',
    days: 9,
    altitude: 0,
    rating: 4.9,
    bookedCount: 89,
    tourType: 'International Multi-Country Tour',
    groupSize: 'Flexible Group Size',
    languages: 'English & Hindi',
    category: 'Outbound',
    overview: "Embark on a thrilling 3-country journey through Thailand, Vietnam, and Cambodia. From vibrant city life in Bangkok and relaxing beaches in Pattaya, to the rich heritage of Hanoi and the natural wonders of Halong Bay, and finally to the mystical temples of Angkor Wat in Siem Reap—this tour is packed with culture, adventure, and beauty. Perfect for travelers looking to explore Southeast Asia in a short, curated journey.",
    included: [
      "3 nights in Bangkok (4★ hotel: Bangkok Palace or similar)",
      "2 nights in Hanoi (4★ hotel: Anatole or similar)",
      "1 night Halong Bay cruise (Peony Cruise or similar)",
      "3 nights in Siem Reap (4★ hotel: City River Hotel or similar)",
      "Daily breakfast",
      "Full sightseeing per itinerary",
      "Airport transfers",
      "Visa fees for Thailand, Vietnam & Cambodia",
      "Vietnam visa approval letter",
      "English-speaking guides",
      "All taxes",
      "Round-trip international airfare"
    ],
    excluded: [
      "Personal expenses",
      "Meals not mentioned",
      "Travel insurance",
      "Tips or donations",
      "Anything not listed in the 'Included' section"
    ],
    highlights: [
      "Relaxing beach time at Coral Island (Pattaya)",
      "Golden temples and shrines in Bangkok",
      "Cultural immersion in Hanoi’s Old Quarter",
      "Cruise through the majestic Halong Bay",
      "Explore ancient wonders of Angkor Wat",
      "Boat ride through Cambodia’s floating villages"
    ],
    itinerary: [
      { day: 1, title: 'Arrive in Bangkok, Transfer to Pattaya', content: '● Arrival in Bangkok\n● Transfer to the beach city of Pattaya\n● Free evening at leisure\n● Stay: Pattaya' },
      { day: 2, title: 'Coral Island Tour (Koh Larn)', content: '● Speedboat ride to Coral Island\n● Relax on the beach, swim, snorkel or explore coral formations\n● Indian lunch included\n● Stay: Pattaya' },
      { day: 3, title: 'Transfer to Bangkok + City Tour', content: '● Drive to Bangkok\n● Half-day Bangkok city and temple tour (Wat Trimitr, Wat Pho)\n● Stay: Bangkok' },
      { day: 4, title: 'Fly to Hanoi + City Tour', content: '● Flight from Bangkok to Hanoi\n● Visit: Temple of Literature, Ho Chi Minh Mausoleum, One Pillar Pagoda, Dong Xuan Market\n● Evening free at Old Quarter Night Market\n● Stay: Hanoi' },
      { day: 5, title: 'Halong Bay Cruise', content: '● Drive to Halong Bay\n● Cruise on traditional boat, seafood lunch\n● Visit floating village by sampan, cooking class, sunset on deck\n● Stay: On Cruise' },
      { day: 6, title: 'Return to Hanoi', content: '● Morning Tai Chi session, cave exploration\n● Brunch on board\n● Return to Hanoi\n● Stay: Hanoi' },
      { day: 7, title: 'Fly to Siem Reap + City Tour', content: '● Flight to Siem Reap, Cambodia\n● Panoramic city tour: Preah Ang Chek, Ang Chorm Shrines, Siem Reap River Walk\n● Stay: Siem Reap' },
      { day: 8, title: 'Angkor Temples + Sunset Tour', content: '● Visit: Angkor Thom, Bayon Temple, Terrace of Elephants, Ta Prohm, Angkor Wat\n● Sunset from Pre Rup Temple\n● Stay: Siem Reap' },
      { day: 9, title: 'Floating Village Tour + Departure', content: '● Morning boat ride on Tonle Sap Lake, visit Kampong Phluk Floating Village\n● Transfer to airport for departure' }
    ]
  },
  {
    id: 'out5',
    title: 'Europe 9 Night 10 Day Tour – Spain, Switzerland & France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800',
    days: 10,
    altitude: 3000,
    rating: 5,
    bookedCount: 34,
    tourType: 'European Cultural Tour',
    groupSize: 'Flexible Group Size',
    languages: 'English',
    category: 'Outbound',
    overview: "Celebrate the New Year with an unforgettable journey across Spain, Switzerland, and France. This 10-day European adventure covers everything from historic cities and breathtaking mountains to world-famous art, architecture, and cuisine. Visit vibrant cities like Madrid, Barcelona, Paris, explore Alpine gems like Lucerne, Geneva, and Leysin, and discover the romantic countryside of Provence and the Swiss Riviera.",
    included: [
      "Return airfare from Kathmandu",
      "Schengen Visa & Medical Insurance",
      "Accommodation in quality European hotels",
      "Daily breakfast buffet",
      "City tours in Madrid, Barcelona, and Paris",
      "Transport in a deluxe coach with English-speaking guide",
      "Admission tickets to: Las Ventas Bullring, Eiffel Tower (2nd floor), Poblet Monastery, Carrieres de Lumiere, Chillon Castle, Cailler Chocolate Factory",
      "Montserrat rack train",
      "Glacier 3000 cable car & funicular ride",
      "Seine River boat cruise",
      "1 lunch/dinner in Leysin",
      "Airport transfers in Europe",
      "Basic travel insurance"
    ],
    excluded: [
      "Beverages and personal expenses",
      "Additional meals not mentioned",
      "Any services not listed in the itinerary"
    ],
    highlights: [
      "Eiffel Tower + Seine Cruise in Paris",
      "Rack train to Montserrat, Gaudí architecture in Barcelona",
      "Digital art show at Carrieres de Lumiere in France",
      "Glacier 3000 adventure and Cailler chocolate tasting",
      "City tours in Madrid, Paris, Barcelona",
      "One meal included in scenic Leysin"
    ],
    itinerary: [
      { day: 1, title: 'Arrive in Madrid (Spain)', content: '● Airport pickup & transfer to hotel\n● Evening visit to Gran Via, Temple of Debod, and Plaza de España\n● Stay: Madrid' },
      { day: 2, title: 'Madrid City Tour', content: '● Visit: Prado Boulevard, Plaza Mayor, Retiro Park, Las Ventas Bullring\n● Free time in the afternoon\n● Evening transfer to Plaza de Oriente\n● Stay: Madrid' },
      { day: 3, title: 'Madrid → Zaragoza → Poblet → Montserrat → Barcelona', content: '● Short stop in Zaragoza\n● Tour of Poblet Monastery (entry included)\n● Rack train ride up to Montserrat Monastery\n● Arrive in Barcelona\n● Stay: Barcelona' },
      { day: 4, title: 'Barcelona City Tour → Girona', content: '● Visit: Las Ramblas, Gaudí’s landmarks, Olympic stadium\n● Afternoon transfer to Girona\n● Explore historic center, Jewish quarter, and colorful houses\n● Stay: Girona' },
      { day: 5, title: 'Girona → Arles → Carrieres de Lumière → Chambery (France)', content: '● Visit Arles, Van Gogh’s city, Roman ruins\n● Entry to Carrieres de Lumiere digital art show\n● Evening in Chambery\n● Stay: Chambery' },
      { day: 6, title: 'Chambery → Geneva → Gruyère → Chillon → Leysin (Switzerland)', content: '● Visit UN HQ Geneva, English Garden, Jet d’Eau\n● Explore Gruyère village, chocolate tasting at Cailler Factory\n● Tour of Chillon Castle (entry included)\n● Scenic drive to Leysin\n● Stay: Leysin | Dinner included' },
      { day: 7, title: 'Leysin → Glacier 3000 → Interlaken → Lucerne → Zurich', content: '● Ride to Glacier 3000: Ice Cathedral, Suspension Bridge, Fun Park\n● Stop in Interlaken and Lucerne for sightseeing\n● Evening arrival in Zurich\n● Stay: Zurich' },
      { day: 8, title: 'Zurich → Bern → Paris (France)', content: '● Morning tour of Bern, capital of Switzerland\n● Scenic drive to Paris, arrive by evening\n● Stay: Paris' },
      { day: 9, title: 'Paris City Tour & Versailles', content: '● Morning transfer to Versailles Palace\n● Afternoon tour of Montmartre (funicular ride included)\n● Scenic guided city tour of Paris\n● Stay: Paris' },
      { day: 10, title: 'Eiffel Tower & Seine River Cruise → Departure', content: '● Entry to 2nd floor of Eiffel Tower\n● Enjoy Seine River Cruise\n● Free time in the afternoon\n● Departure according to your flight schedule' }
    ]
  }
];

export const BLOGS: Blog[] = [
  {
    id: 'b1',
    title: 'The Sacred Ponds of Janakpur',
    image: 'https://images.unsplash.com/photo-1623067309489-011244247565?auto=format&fit=crop&q=80&w=800',
    date: 'Jan 12, 2024',
    author: 'YOLO Team',
    excerpt: 'Explore the mystical waters of Janakpurdham, where history and spirituality meet in every ripple.'
  },
  {
    id: 'b2',
    title: 'Trekking to Muktinath: A Beginner\'s Guide',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800',
    date: 'Feb 05, 2024',
    author: 'Dhurba Bhandari',
    excerpt: 'Everything you need to know about preparing for one of Nepal\'s most sacred high-altitude pilgrimage journeys.'
  },
  {
    id: 'b3',
    title: 'Crossing Borders: The Janakpur Train Experience',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=800',
    date: 'Mar 20, 2024',
    author: 'Rajesh Neupane',
    excerpt: 'A first-hand account of the scenic cross-border rail journey between Nepal and India.'
  }
];

export const DESTINATIONS: DestinationCategory[] = [
  { name: 'Nepal', icon: '🇳🇵', count: 15, color: 'bg-red-50 text-red-600' },
  { name: 'India', icon: '🇮🇳', count: 8, color: 'bg-orange-50 text-orange-600' },
  { name: 'Bhutan', icon: '🇧🇹', count: 4, color: 'bg-yellow-50 text-yellow-600' },
  { name: 'Tibet', icon: '🏔️', count: 3, color: 'bg-blue-50 text-blue-600' }
];

export const GOOGLE_REVIEWS: Testimonial[] = [
  {
    id: 'r1',
    author: 'Aarav Mishra',
    rating: 5,
    text: 'Absolutely amazing experience with YOLO Tourism! We booked the Janakpur heritage tour, and everything was perfectly organized. The guide was knowledgeable about the history of Janaki Mandir. Highly recommended!',
    date: '2 weeks ago',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjU3yR3j_X5x5x5x5x5x5x5x5x5x5x5x5x5x5x5=s40-c-rp-mo-br100'
  },
  {
    id: 'r2',
    author: 'Sarah Jenkins',
    rating: 5,
    text: 'I did the Muktinath trek with them. It was a challenging but rewarding journey. The team took great care of us, especially with the altitude. The jeep ride to Jomsom was an adventure in itself!',
    date: '1 month ago',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjW_X5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5=s40-c-rp-mo-br100'
  },
  {
    id: 'r3',
    author: 'Rajesh Yadav',
    rating: 5,
    text: 'Best travel agency in Janakpur. They helped us plan a customized family trip to Pokhara and Chitwan. The hotels were excellent and the driver was very safe. Will definitely book again.',
    date: '3 weeks ago',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjV_X5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5=s40-c-rp-mo-br100'
  },
  {
    id: 'r4',
    author: 'Priya Sharma',
    rating: 4,
    text: 'Great service and very responsive team. We had a small issue with our hotel booking in Kathmandu, but they resolved it quickly. The rest of the trip was smooth. Thanks YOLO team!',
    date: '2 months ago',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjT_X5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5=s40-c-rp-mo-br100'
  },
  {
    id: 'r5',
    author: 'David Smith',
    rating: 5,
    text: 'Incredible hospitality! From the airport pickup to the farewell dinner, we felt welcomed. The cultural tour of Mithila art was a highlight. A must-do if you are visiting Nepal.',
    date: '1 week ago',
    avatar: 'https://lh3.googleusercontent.com/a-/ALV-UjS_X5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5x5=s40-c-rp-mo-br100'
  }
];
