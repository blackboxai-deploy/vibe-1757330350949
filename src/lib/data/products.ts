import { Product } from '../types';

export const products: Product[] = [
  // Electronics - Smartphones
  {
    id: 'smartphone-pro-max',
    name: 'ProMax Smartphone 256GB',
    description: 'Latest flagship smartphone with advanced camera system, powerful processor, and all-day battery life.',
    price: 999.99,
    originalPrice: 1199.99,
    discount: 17,
    category: 'electronics',
    subcategory: 'smartphones',
    brand: 'TechPro',
    images: [
      'https://placehold.co/600x600?text=Premium+flagship+smartphone+with+triple+camera+system',
      'https://placehold.co/600x600?text=Smartphone+back+view+showing+camera+module+design',
      'https://placehold.co/600x600?text=Smartphone+side+profile+showing+sleek+design'
    ],
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    stockCount: 45,
    tags: ['flagship', 'premium', 'camera', '5G'],
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Storage': '256GB',
      'RAM': '8GB',
      'Camera': '48MP Triple Camera',
      'Battery': '4000mAh',
      'OS': 'Latest Mobile OS'
    },
    features: [
      'Advanced camera system with night mode',
      'Water and dust resistant',
      '5G connectivity',
      'Wireless charging support',
      'Face ID and fingerprint security'
    ],
    createdAt: '2024-01-15T08:30:00Z',
    updatedAt: '2024-01-20T14:45:00Z'
  },
  {
    id: 'smartphone-lite',
    name: 'EcoLite Smartphone 128GB',
    description: 'Affordable smartphone with essential features and reliable performance for everyday use.',
    price: 299.99,
    category: 'electronics',
    subcategory: 'smartphones',
    brand: 'EcoTech',
    images: [
      'https://placehold.co/600x600?text=Affordable+smartphone+with+modern+design+and+features',
      'https://placehold.co/600x600?text=Budget+phone+showing+display+and+camera+quality'
    ],
    rating: 4.2,
    reviewCount: 586,
    inStock: true,
    stockCount: 78,
    tags: ['affordable', 'reliable', 'everyday'],
    specifications: {
      'Display': '6.1" HD+ Display',
      'Storage': '128GB',
      'RAM': '6GB',
      'Camera': '16MP Dual Camera',
      'Battery': '3500mAh',
      'OS': 'Android 14'
    },
    features: [
      'Long-lasting battery life',
      'Expandable storage',
      'Dual SIM support',
      'Fast charging',
      'Lightweight design'
    ],
    createdAt: '2024-01-10T10:15:00Z',
    updatedAt: '2024-01-18T16:20:00Z'
  },

  // Electronics - Laptops
  {
    id: 'laptop-gaming-pro',
    name: 'GameMaster Pro 15 Gaming Laptop',
    description: 'High-performance gaming laptop with dedicated graphics card and advanced cooling system.',
    price: 1799.99,
    originalPrice: 1999.99,
    discount: 10,
    category: 'electronics',
    subcategory: 'laptops',
    brand: 'GameTech',
    images: [
      'https://placehold.co/600x600?text=High+performance+gaming+laptop+with+RGB+lighting',
      'https://placehold.co/600x600?text=Gaming+laptop+keyboard+with+backlit+keys+detail',
      'https://placehold.co/600x600?text=Laptop+side+view+showing+ports+and+cooling+vents'
    ],
    rating: 4.7,
    reviewCount: 423,
    inStock: true,
    stockCount: 12,
    tags: ['gaming', 'high-performance', 'RGB', 'dedicated-graphics'],
    specifications: {
      'Processor': 'Intel Core i7 12th Gen',
      'RAM': '16GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Graphics': 'NVIDIA GeForce RTX 4060',
      'Display': '15.6" FHD 144Hz',
      'Weight': '2.3kg'
    },
    features: [
      '144Hz high refresh rate display',
      'Advanced cooling system',
      'RGB backlit keyboard',
      'Multiple connectivity ports',
      'VR ready performance'
    ],
    createdAt: '2024-01-12T09:45:00Z',
    updatedAt: '2024-01-22T11:30:00Z'
  },
  {
    id: 'laptop-ultrabook',
    name: 'UltraSlim Business Laptop',
    description: 'Lightweight business laptop with premium build quality and all-day battery life.',
    price: 899.99,
    category: 'electronics',
    subcategory: 'laptops',
    brand: 'ProWork',
    images: [
      'https://placehold.co/600x600?text=Premium+ultrabook+laptop+with+sleek+aluminum+design',
      'https://placehold.co/600x600?text=Business+laptop+open+showing+clean+workspace+setup'
    ],
    rating: 4.5,
    reviewCount: 298,
    inStock: true,
    stockCount: 24,
    tags: ['business', 'lightweight', 'premium', 'portable'],
    specifications: {
      'Processor': 'Intel Core i5 12th Gen',
      'RAM': '8GB DDR4',
      'Storage': '512GB SSD',
      'Graphics': 'Intel Iris Xe',
      'Display': '14" FHD IPS',
      'Weight': '1.2kg'
    },
    features: [
      'Ultra-lightweight design',
      'Premium aluminum build',
      '12-hour battery life',
      'Fast SSD storage',
      'Fingerprint security'
    ],
    createdAt: '2024-01-08T14:20:00Z',
    updatedAt: '2024-01-19T09:15:00Z'
  },

  // Fashion - Men's Clothing
  {
    id: 'mens-casual-shirt',
    name: 'Classic Cotton Casual Shirt',
    description: 'Comfortable cotton shirt perfect for casual wear and office environments.',
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    category: 'clothing',
    subcategory: 'mens-clothing',
    brand: 'StyleCo',
    images: [
      'https://placehold.co/600x600?text=Classic+mens+cotton+casual+shirt+in+navy+blue',
      'https://placehold.co/600x600?text=Shirt+detail+showing+fabric+texture+and+buttons',
      'https://placehold.co/600x600?text=Model+wearing+casual+shirt+with+chinos'
    ],
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    stockCount: 89,
    tags: ['casual', 'cotton', 'comfortable', 'versatile'],
    specifications: {
      'Material': '100% Cotton',
      'Fit': 'Regular Fit',
      'Sleeve': 'Long Sleeve',
      'Pattern': 'Solid',
      'Care': 'Machine Washable',
      'Origin': 'Made in USA'
    },
    features: [
      'Breathable cotton fabric',
      'Classic button-down design',
      'Chest pocket detail',
      'Wrinkle-resistant finish',
      'Available in multiple colors'
    ],
    createdAt: '2024-01-05T16:30:00Z',
    updatedAt: '2024-01-17T12:45:00Z'
  },
  {
    id: 'mens-leather-jacket',
    name: 'Genuine Leather Biker Jacket',
    description: 'Premium leather jacket with classic biker styling and durable construction.',
    price: 299.99,
    category: 'clothing',
    subcategory: 'mens-clothing',
    brand: 'LeatherCraft',
    images: [
      'https://placehold.co/600x600?text=Premium+genuine+leather+biker+jacket+black',
      'https://placehold.co/600x600?text=Leather+jacket+detail+showing+zippers+and+styling'
    ],
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    stockCount: 15,
    tags: ['leather', 'premium', 'biker', 'durable'],
    specifications: {
      'Material': 'Genuine Leather',
      'Lining': 'Polyester',
      'Style': 'Biker Jacket',
      'Closure': 'Asymmetric Zip',
      'Pockets': '4 External, 2 Internal',
      'Care': 'Professional Leather Care'
    },
    features: [
      'Genuine cowhide leather',
      'Classic biker styling',
      'Multiple zippered pockets',
      'Quilted shoulder panels',
      'Adjustable waist belts'
    ],
    createdAt: '2024-01-03T11:15:00Z',
    updatedAt: '2024-01-16T15:30:00Z'
  },

  // Home & Living - Furniture
  {
    id: 'modern-dining-table',
    name: 'Modern Oak Dining Table',
    description: 'Elegant solid oak dining table perfect for family gatherings and dinner parties.',
    price: 799.99,
    originalPrice: 999.99,
    discount: 20,
    category: 'home',
    subcategory: 'furniture',
    brand: 'HomeElegance',
    images: [
      'https://placehold.co/600x600?text=Modern+oak+dining+table+with+elegant+design',
      'https://placehold.co/600x600?text=Dining+table+detail+showing+wood+grain+and+finish',
      'https://placehold.co/600x600?text=Dining+room+setup+with+table+and+chairs'
    ],
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    stockCount: 8,
    tags: ['furniture', 'dining', 'oak', 'modern'],
    specifications: {
      'Material': 'Solid Oak Wood',
      'Dimensions': '180cm x 90cm x 75cm',
      'Seating': '6-8 People',
      'Finish': 'Natural Oak Stain',
      'Weight': '65kg',
      'Assembly': 'Minimal Assembly Required'
    },
    features: [
      'Solid oak construction',
      'Water-resistant finish',
      'Seats up to 8 people',
      'Timeless modern design',
      'Sturdy pedestal base'
    ],
    createdAt: '2024-01-01T09:00:00Z',
    updatedAt: '2024-01-14T13:20:00Z'
  },
  {
    id: 'comfort-office-chair',
    name: 'Ergonomic Office Chair',
    description: 'Professional office chair with lumbar support and adjustable features for all-day comfort.',
    price: 249.99,
    category: 'home',
    subcategory: 'furniture',
    brand: 'ErgoWork',
    images: [
      'https://placehold.co/600x600?text=Ergonomic+office+chair+with+lumbar+support+mesh',
      'https://placehold.co/600x600?text=Office+chair+side+view+showing+adjustment+features'
    ],
    rating: 4.3,
    reviewCount: 267,
    inStock: true,
    stockCount: 32,
    tags: ['office', 'ergonomic', 'comfortable', 'adjustable'],
    specifications: {
      'Material': 'Mesh Back, Fabric Seat',
      'Height': 'Adjustable 42-52cm',
      'Armrests': 'Adjustable',
      'Base': '5-Point Caster Base',
      'Weight Capacity': '150kg',
      'Warranty': '3 Years'
    },
    features: [
      'Breathable mesh backrest',
      'Adjustable lumbar support',
      'Height adjustable seat',
      'Smooth-rolling casters',
      '360-degree swivel'
    ],
    createdAt: '2023-12-28T14:45:00Z',
    updatedAt: '2024-01-11T10:30:00Z'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return products.filter(product => product.subcategory === subcategory);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.brand.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.rating >= 4.5).slice(0, 8);
};

export const getDiscountedProducts = (): Product[] => {
  return products.filter(product => product.discount && product.discount > 0);
};