export interface Ballroom {
  id: string;
  name: string;
  tag: string;
  subtitle: string;
  description: string;
  capacity: string;
  style: string;
  bestFor: string[];
  features: string[];
  image: string;
  ctaText: string;
  isUpcoming?: boolean;
}

export interface VenueService {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDesc: string;
  heroHeadline: string;
  description: string;
  capacity: string;
  highlights: string[];
  image: string;
}

export const venueConfig = {
  name: "Burbank Banquet Hall",
  tagline: "Luxury Wedding & Event Venue in Burbank, CA",
  phone: "(818) 918-2519",
  phoneRaw: "8189182519",
  email: "events@burbankbanquethall.com",
  address: {
    street: "1110 N San Fernando Blvd",
    city: "Burbank",
    state: "CA",
    zip: "91504",
    county: "Los Angeles County",
    country: "US"
  },
  operatingHours: "Monday - Sunday: 9:00 AM - 10:00 PM (By Appointment & Event Hours)",
  serviceAreas: [
    "Burbank",
    "Glendale",
    "North Hollywood",
    "Pasadena",
    "Studio City",
    "Sherman Oaks",
    "Toluca Lake",
    "San Fernando Valley",
    "Los Angeles"
  ],
  highways: ["Interstate 5 (I-5)", "Ventura Freeway (CA-134)", "Hollywood Freeway (US-101)"],
  landmarks: ["Downtown Burbank", "Burbank Town Center", "Warner Bros. Studios", "Hollywood Burbank Airport"],
  ratings: {
    score: "4.9",
    reviewCount: 96,
    platform: "Google Reviews",
    awards: ["WeddingWire Couples' Choice", "The Knot Best of Weddings", "Luxury Event Venue Burbank"]
  }
};

export const ballrooms: Ballroom[] = [
  {
    id: "white-ballroom",
    name: "The Grand White Ballroom",
    tag: "White Ballroom",
    subtitle: "A breathtaking space designed for grand celebrations.",
    description: "From captivating crystal aesthetics and enthralling lighting to renowned in-house catering and individualized attention — every detail crafted for an unparalleled sensory journey in Burbank.",
    capacity: "Up to 340 Guests",
    style: "Grand & Elegant",
    bestFor: [
      "Large Weddings",
      "Quinceañeras",
      "Birthday Parties",
      "Corporate Galas",
      "Sweet 16",
      "Bar & Bat Mitzvahs"
    ],
    features: [
      "Crystal Chandeliers & Custom Ceiling Drapery",
      "State-of-the-Art LED Lighting & Sound System",
      "Expansive Hardwood Dance Floor & Staging",
      "Private Bridal Suite & VIP Dressing Rooms"
    ],
    image: "/images/venue/burbank-hall-dancefloor-1.jpg",
    ctaText: "Check Availability"
  },
  {
    id: "modern-ballroom",
    name: "The Modern Ballroom",
    tag: "Modern Ballroom",
    subtitle: "A sleek, stylish space intertwining avant-garde with timeless elegance.",
    description: "Captivating interiors, award-winning cuisine, and tailor-made service where intimacy meets Burbank sophistication. Designed for memories that last a lifetime.",
    capacity: "Up to 150 Guests",
    style: "Sleek & Intimate",
    bestFor: [
      "Intimate Weddings",
      "Birthday Parties",
      "Sweet Sixteen",
      "Christenings & Baptisms",
      "Bridal Showers",
      "Anniversary Celebrations"
    ],
    features: [
      "Contemporary Architectural Accents",
      "Atmospheric Ambient Uplighting",
      "Integrated Multimedia & Projection Screens",
      "Customizable Cocktail Bar Area"
    ],
    image: "/images/venue/burbank-hall-interior-setup-5.jpg",
    ctaText: "Check Availability"
  },
  {
    id: "sky-lounge",
    name: "The Sky Lounge",
    tag: "Opening Soon",
    subtitle: "An extraordinary open-air rooftop experience in the heart of Burbank.",
    description: "Enchanting outdoor aesthetics, open-air catering, and personalized hospitality. Where the fresh California sky meets everlasting sophistication.",
    capacity: "Up to 180 Guests",
    style: "Open-Air Skyline",
    bestFor: [
      "Outdoor Ceremonies",
      "Cocktail Hours",
      "Engagement Parties",
      "Milestone Birthdays",
      "Corporate Mixers"
    ],
    features: [
      "Panoramic Burbank & Verdugo Mountains Views",
      "Lush Floral Installations & Fire Pits",
      "Outdoor Bar & Gourmet Bites Station",
      "Under-the-Stars Lounge Seating"
    ],
    image: "/images/venue/burbank-hall-banquet-tables-3.jpg",
    ctaText: "Join the Waitlist",
    isUpcoming: true
  }
];

export const keyServices: VenueService[] = [
  {
    slug: "weddings",
    title: "Weddings in Burbank",
    metaTitle: "Luxury Wedding Venue in Burbank CA | Burbank Banquet Hall",
    metaDescription: "Host your dream wedding in Burbank, CA at Burbank Banquet Hall. Two grand ballrooms, all-inclusive packages, award-winning catering and personal coordinator.",
    shortDesc: "Timeless elegance, royal banquet tables, and personalized wedding packages under one roof.",
    heroHeadline: "Unforgettable Luxury Weddings in Burbank, California",
    description: "Your wedding day deserves perfection. At Burbank Banquet Hall, we transform romantic visions into breathtaking realities with majestic crystal chandeliers, exquisite cuisine, and dedicated day-of coordination.",
    capacity: "50 to 340 Guests",
    highlights: ["Complimentary Bridal Suite", "All-Inclusive Décor & Floral Options", "Multi-Course Gourmet Catering", "Custom Ceremony & Reception Layouts"],
    image: "/images/venue/burbank-hall-wedding-stage-2.jpg"
  },
  {
    slug: "birthday-parties",
    title: "Birthday Parties in Burbank",
    metaTitle: "Birthday Party Banquet Hall in Burbank CA | Private Venue Rental",
    metaDescription: "Celebrate milestone birthdays in Burbank CA. From 30th, 40th, 50th galas to lavish celebrations with DJ, customized lighting and premier catering.",
    shortDesc: "Vibrant celebrations with high-energy dance floors, custom cocktails, and full party styling.",
    heroHeadline: "Celebrate Life's Greatest Milestones in Burbank",
    description: "Whether you are celebrating a 30th, 50th, 75th, or any milestone in between, Burbank Banquet Hall sets the stage for an electrifying party with gourmet food, custom lighting, and dedicated staff.",
    capacity: "50 to 340 Guests",
    highlights: ["State-of-the-Art DJ & Lighting Booth", "Cocktail Bar & Custom Mixology", "Themed Backdrop & Photo Booth Space", "Flexible Seating & Lounge Configurations"],
    image: "/images/venue/burbank-hall-banquet-tables-3.jpg"
  },
  {
    slug: "quinceaneras",
    title: "Quinceañeras in Burbank",
    metaTitle: "Quinceañera Banquet Hall in Burbank CA | Elegant Ballrooms",
    metaDescription: "Make her 15th birthday royal at Burbank Banquet Hall. Grand entrance staircase, valses staging, court of honor seating, LED dance floors and bilingual staff.",
    shortDesc: "Royal 15th birthday galas featuring majestic entrance staging, waltz dance floors, and full coordination.",
    heroHeadline: "Royal Quinceañera Celebrations in Burbank, CA",
    description: "Celebrate the cherished transition into young womanhood with a royal quinceañera in Burbank. Our ballrooms provide the grandeur required for the grand entrance, father-daughter waltz, and an unforgettable fiesta.",
    capacity: "Up to 340 Guests",
    highlights: ["Royal Entrance & Court of Honor Staging", "Custom Color-Coded LED Uplighting", "Traditional & Contemporary Hispanic Catering", "Bilingual Event Coordinators & Staff"],
    image: "/images/venue/burbank-hall-lighting-party-4.jpg"
  },
  {
    slug: "sweet-sixteen",
    title: "Sweet Sixteen in Burbank",
    metaTitle: "Sweet 16 Banquet Hall in Burbank CA | Teen Birthday Venue",
    metaDescription: "Glamorous Sweet 16 venues in Burbank, CA. Club-level sound, intelligent lighting, custom mocktails, red carpet entrance and photo backdrops.",
    shortDesc: "Glamorous, chic Sweet 16 celebrations with nightclub lighting, red carpets, and VIP lounges.",
    heroHeadline: "Chic & Glamorous Sweet 16 Celebrations in Burbank",
    description: "Give your teen the celebration of their dreams with a high-fashion, high-energy Sweet Sixteen. Featuring red-carpet photo arrivals, custom mocktail bars, and top-tier sound systems.",
    capacity: "50 to 300 Guests",
    highlights: ["Club-Style Lighting & Fog Effects", "Red Carpet Arrival & Step-and-Repeat", "Custom Mocktail & Dessert Bars", "Dedicated Security & Chaperone Services"],
    image: "/images/venue/burbank-hall-dancefloor-1.jpg"
  }
];

export const allEventTypes = [
  { name: "Weddings in Burbank", slug: "weddings", icon: "ring" },
  { name: "Birthday Parties in Burbank", slug: "birthday-parties", icon: "cake" },
  { name: "Quinceañeras in Burbank", slug: "quinceaneras", icon: "crown" },
  { name: "Sweet Sixteen in Burbank", slug: "sweet-sixteen", icon: "sparkles" },
  { name: "Christenings & Baptisms", slug: "christenings", icon: "dove" },
  { name: "Bridal Showers", slug: "bridal-showers", icon: "champagne" },
  { name: "Baby Showers", slug: "baby-showers", icon: "baby" },
  { name: "Anniversaries", slug: "anniversaries", icon: "heart" },
  { name: "Corporate Events & Galas", slug: "corporate-events", icon: "briefcase" },
  { name: "Bar & Bat Mitzvahs", slug: "bar-mitzvah", icon: "star" },
  { name: "Engagements", slug: "engagements", icon: "gem" },
  { name: "Graduations & Proms", slug: "graduations", icon: "academic" },
  { name: "Film & Photo Shoots", slug: "filming", icon: "camera" }
];

export const whyChooseUs = [
  {
    title: "Award-Winning Burbank Venue",
    description: "Recognized across Southern California for impeccable hospitality, glamorous ballroom decor, and 5-star guest satisfaction."
  },
  {
    title: "Dedicated Personal Coordinator",
    description: "A private event specialist assigned to your celebration, ensuring prompt same-day responses and seamless day-of execution."
  },
  {
    title: "Renowned In-House Catering",
    description: "Culinary masters preparing gourmet multi-course banquets, tailored family-style menus, and authentic cultural cuisine options."
  },
  {
    title: "All-Inclusive Packages",
    description: "Linens, chiavari chairs, ambient LED uplighting, state-of-the-art audio, tableware, and event setup all managed under one roof."
  },
  {
    title: "Serving Burbank & San Fernando Valley",
    description: "Conveniently situated near I-5 & CA-134, providing hassle-free access and abundant parking for guests from Glendale, NoHo, and LA."
  },
  {
    title: "Free Private Walkthrough Tour",
    description: "Experience our two grand ballrooms in person with a zero-obligation, guided walkthrough with our lead event designer."
  }
];

export const quotes = [
  {
    quote: "Everything was perfectly organized from start to finish. Our wedding reception in Burbank was pure royalty.",
    author: "Elena & David M.",
    event: "Wedding Reception",
    rating: 5
  },
  {
    quote: "A truly stress-free experience for my daughter's Quinceañera. The hall, the lighting, and the food blew all our guests away.",
    author: "Rosa & Carlos G.",
    event: "Quinceañera Celebration",
    rating: 5
  },
  {
    quote: "The venue felt luxurious and warm at the same time. The best banquet hall in Burbank and the San Fernando Valley by far.",
    author: "Jonathan K.",
    event: "50th Birthday Gala",
    rating: 5
  }
];

export const faqs = [
  {
    question: "What is Burbank Banquet Hall?",
    answer: "Burbank Banquet Hall is a premier full-service event venue and banquet hall located in Burbank, California. The venue features two indoor ballrooms, an upcoming open-air sky lounge, in-house gourmet catering, dedicated event coordination, custom lighting, and complete décor packages for weddings, quinceañeras, birthdays, and corporate celebrations."
  },
  {
    question: "Where is Burbank Banquet Hall located?",
    answer: "We are centrally located at 1110 N San Fernando Blvd in Burbank, CA 91504, minutes from Interstate 5 and CA-134. Our prime location offers quick, stress-free access and dedicated parking for guests traveling from Glendale, North Hollywood, Pasadena, Studio City, and throughout Los Angeles County."
  },
  {
    question: "How many guests can your Burbank ballrooms accommodate?",
    answer: "The Grand White Ballroom hosts up to 340 seated guests with a spacious dance floor and staging, making it ideal for grand weddings and quinceañeras. The Modern Ballroom accommodates up to 150 guests for more intimate celebrations, while our rooftop Sky Lounge accommodates up to 180 guests."
  },
  {
    question: "What types of events do you host in Burbank?",
    answer: "We specialize in luxury weddings, quinceañeras, sweet sixteen parties, milestone birthdays, christenings, baptisms, bridal showers, baby showers, anniversary celebrations, corporate galas, holiday parties, and studio production filming in Burbank and the San Fernando Valley."
  },
  {
    question: "Do you offer all-inclusive event and catering packages?",
    answer: "Yes. Our customizable all-inclusive packages include gourmet in-house catering, luxury tableware, chiavari chairs, custom table linens, intelligent LED uplighting, sound systems, staging, dedicated event coordination, and full setup and cleanup so you enjoy a seamless, stress-free celebration."
  },
  {
    question: "How can I schedule a private tour and check date availability?",
    answer: "You can check date availability and request pricing online through our instant form or by calling our event team directly at (818) 918-2519. We offer complimentary private walkthroughs seven days a week by appointment."
  }
];

export const galleryImages = [
  {
    url: "/images/venue/burbank-hall-dancefloor-1.jpg",
    alt: "The Grand White Ballroom white dance floor and luxury ceiling in Burbank",
    span: "col-span-2 row-span-2"
  },
  {
    url: "/images/venue/burbank-hall-wedding-stage-2.jpg",
    alt: "Wedding sweetheart table and floral arch stage at Burbank Banquet Hall",
    span: "col-span-1 row-span-1"
  },
  {
    url: "/images/venue/burbank-hall-banquet-tables-3.jpg",
    alt: "Banquet dinner tables with silver chiavari chairs and crystal chandelier in Burbank",
    span: "col-span-1 row-span-1"
  },
  {
    url: "/images/venue/burbank-hall-lighting-party-4.jpg",
    alt: "Vibrant party dance floor and ambient lighting at Burbank Banquet Hall",
    span: "col-span-1 row-span-2"
  },
  {
    url: "/images/venue/burbank-hall-interior-setup-5.jpg",
    alt: "Spacious ballroom setup with elegant banquet tables and modern lighting in Burbank",
    span: "col-span-1 row-span-1"
  },
  {
    url: "/images/venue/burbank-hall-dancefloor-1.jpg",
    alt: "Grand wedding reception setup with royal white dance floor in Burbank",
    span: "col-span-1 row-span-1"
  }
];
