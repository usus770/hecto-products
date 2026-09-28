export type ProductSize = {
  label: string;
  mrp: number | null;
};

export type ProductVariant = {
  name: string;
  colorHex?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  features: string[];
  sizes: ProductSize[];
  variants?: ProductVariant[];
  image: string;
  badges?: string[];
  warning?: string;
};

export const products: Product[] = [
  {
    id: 'bathroom-cleaner',
    slug: 'bathroom-cleaner',
    name: 'Bathroom Cleaner',
    category: 'Bathroom Cleaners',
    shortDescription: 'Removes tough stains and kills 99.9% germs with a fresh fragrance.',
    features: [
      'Removes tough stains (tiles, floor, toilet, wash basin)',
      'Kills 99.9% germs',
      'Eliminates bad odors',
      'Safe for all surfaces (tiles, ceramic, marble)'
    ],
    sizes: [{ label: '5 Litre', mrp: 1200 }],
    image: '/products/bathroom-cleaner.jpeg',
    badges: ['Germ Protection', 'Powerful Cleaning'],
  },
  {
    id: 'toilet-bowl-cleaner',
    slug: 'toilet-bowl-cleaner',
    name: 'Toilet Bowl Cleaner',
    category: 'Toilet Cleaners',
    shortDescription: 'Powerful toilet cleaner that kills 99.9% germs with a fresh fragrance. (टॉयलेट बाउल क्लीनर)',
    features: [
      'Removes tough stains',
      'Kills 99.9% germs',
      'Fresh fragrance',
      'Safe for Indian & Western toilets'
    ],
    sizes: [{ label: '5 Litre', mrp: 899 }],
    image: '/products/toilet-bowl-cleaner.jpeg',
    warning: 'Corrosive',
    badges: ['Germ Protection', 'Powerful Cleaning'],
  },
  {
    id: 'power-plus-10x',
    slug: 'power-plus-10x',
    name: 'Toilet Cleaner "Power Plus 10X Total Clean"',
    category: 'Toilet Cleaners',
    shortDescription: '5 Min Action, Original Fresh. Har Ghar Ka Trusted Cleaner.',
    features: [
      'Removes tough stains',
      'Kills 99.99% germs',
      'Long-lasting freshness',
      'Keeps toilet hygienic'
    ],
    sizes: [
      { label: '250ml', mrp: null },
      { label: '500ml', mrp: null },
      { label: '1000ml', mrp: null }
    ],
    image: '/products/power-plus-10x.jpeg',
    badges: ['Germ Protection', 'Fresh Fragrance'],
  },
  {
    id: 'glass-cleaner',
    slug: 'glass-cleaner',
    name: 'Glass Cleaner',
    category: 'Glass Cleaners',
    shortDescription: 'Streak-free shine for your glass and windows.',
    features: [
      'Streak-free shine',
      'Removes dirt & grease',
      'Quick drying',
      'Fresh fragrance'
    ],
    sizes: [{ label: '5 Litre', mrp: 499 }],
    image: '/products/glass-cleaner.jpeg',
    badges: ['Powerful Cleaning'],
  },
  {
    id: 'mirror-shine-glass',
    slug: 'mirror-shine-glass',
    name: 'Mirror Shine Glass & Multisurface Cleaner (Spray)',
    category: 'Glass Cleaners',
    shortDescription: 'Streak-free multisurface spray for glass, windows, and car surfaces.',
    features: [
      'Streak-free',
      'Shines glass & windows',
      'Cleans car surfaces',
      'Works on multiple surfaces'
    ],
    sizes: [{ label: '500ml', mrp: 100 }],
    image: '/products/mirror-shine-glass.jpeg',
    badges: ['Safe on Hands & Surfaces'],
  },
  {
    id: 'ultra-shine-floor',
    slug: 'ultra-shine-floor',
    name: 'Ultra Shine Floor Cleaner',
    category: 'Floor Cleaners',
    shortDescription: 'Brings out natural shine while killing 99.9% germs.',
    features: [
      'Kills 99.9% germs',
      'Long-lasting freshness',
      'Brings out natural shine',
      'Safe for daily use'
    ],
    sizes: [{ label: '5 Litre', mrp: 499 }],
    variants: [
      { name: 'Rose', colorHex: '#F4C2C2' },
      { name: 'Lime', colorHex: '#BFFF00' }
    ],
    image: '/products/ultra-shine-floor.jpeg',
    badges: ['Germ Protection', 'Fresh Fragrance'],
  },
  {
    id: 'dish-wash',
    slug: 'dish-wash',
    name: 'Dish Wash',
    category: 'Dishwash',
    shortDescription: 'Powerful cleaning removes tough grease. Lime flavour.',
    features: [
      'Powerful cleaning',
      'Removes tough grease',
      'Hygienic & safe',
      'Gentle on hands'
    ],
    sizes: [{ label: '5 Litre', mrp: 1100 }],
    variants: [
      { name: 'Lime', colorHex: '#BFFF00' }
    ],
    image: '/products/dish-wash.jpeg',
    badges: ['Safe on Hands & Surfaces', 'Powerful Cleaning'],
  },
  {
    id: 'air-freshener',
    slug: 'air-freshener',
    name: 'Air Freshener',
    category: 'Air Fresheners',
    shortDescription: 'Eliminates odours and provides long-lasting freshness.',
    features: [
      'Eliminates odours',
      'Long-lasting freshness',
      'Suitable for all spaces'
    ],
    sizes: [{ label: '5 Litre', mrp: 3000 }],
    variants: [
      { name: 'Rose', colorHex: '#F4C2C2' },
      { name: 'Lavender', colorHex: '#E6E6FA' },
      { name: 'Jasmine', colorHex: '#FFFDD0' },
      { name: 'Morning Breeze', colorHex: '#87CEEB' }
    ],
    image: '/products/air-freshener.jpeg',
    badges: ['Fresh Fragrance'],
  },
  {
    id: 'gentle-hand-cleanser',
    slug: 'gentle-hand-cleanser',
    name: 'Gentle Hand Cleanser',
    category: 'Hand Washes',
    shortDescription: 'Gentle on hands, pH balanced hand wash. (जेंटल हैंड क्लीनर)',
    features: [
      'Gentle on hands',
      'Kills 99.9% germs',
      'Keeps hands fresh',
      'pH balanced'
    ],
    sizes: [{ label: '5 Litre', mrp: null }],
    variants: [
      { name: 'Honey Glow', colorHex: '#FFC30B' },
      { name: 'Lime', colorHex: '#BFFF00' },
      { name: 'Lavender', colorHex: '#E6E6FA' },
      { name: 'Aqua Sky', colorHex: '#00FFFF' }
    ],
    image: '/products/gentle-hand-cleanser.jpeg',
    badges: ['Safe on Hands & Surfaces', 'Germ Protection'],
  },
  {
    id: 'foaming-handwash',
    slug: 'foaming-handwash',
    name: 'Foaming Handwash',
    category: 'Hand Washes',
    shortDescription: '10x better germ protection with rich foam.',
    features: [
      '10x better germ protection',
      'Rich foam',
      'Gentle on hands',
      'Long-lasting freshness'
    ],
    sizes: [{ label: '250ml', mrp: 90 }],
    variants: [
      { name: 'Honey Glow', colorHex: '#FFC30B' },
      { name: 'Lemon', colorHex: '#FFF700' },
      { name: 'Aqua', colorHex: '#00FFFF' },
      { name: 'Lavender', colorHex: '#E6E6FA' }
    ],
    image: '/products/foaming-handwash.jpeg',
    badges: ['Germ Protection', 'Safe on Hands & Surfaces'],
  },
  {
    id: 'white-phenyl',
    slug: 'white-phenyl',
    name: 'White Phenyl Concentrated Disinfectant',
    category: 'White Phenyl',
    shortDescription: 'Kills 99.9% germs and keeps home fresh and clean.',
    features: [
      'Kills 99.9% germs',
      'Keeps home fresh & clean',
      'Safe for daily use',
      'Removes bad odour',
      'Suitable for all surfaces'
    ],
    sizes: [
      { label: '1 Litre', mrp: null },
      { label: '5 Litre', mrp: null }
    ],
    variants: [
      { name: 'White Pine', colorHex: '#FFFFFF' },
      { name: 'Rose Pink', colorHex: '#F4C2C2' },
      { name: 'Green Lemon', colorHex: '#BFFF00' }
    ],
    image: '/products/white-phenyl.jpeg',
    badges: ['Germ Protection', 'Powerful Cleaning'],
  }
];

export const categories = [
  'Toilet Cleaners',
  'Bathroom Cleaners',
  'Glass Cleaners',
  'Floor Cleaners',
  'Dishwash',
  'Hand Washes',
  'Air Fresheners',
  'White Phenyl'
];

export const comingSoonCategories = [
  'Surface Cleaners',
  'Laundry Care',
  'Bathroom & Tile Cleaners'
];
