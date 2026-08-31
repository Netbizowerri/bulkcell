export type ProductBrand = 'Apple' | 'Samsung' | 'HP' | 'Dell';

export interface Product {
  id: string;
  name: string;
  brand: ProductBrand;
  category: 'Smartphones' | 'Laptops';
  image: string;
  isTrending: boolean; // Used by the UI as trending/high-demand foreign used stock.
  reviews: number;
  specifications: {
    [key: string]: string;
  };
  features: string[];
  description: string;
  colors: string[];
  inStock: boolean;
  condition: 'Foreign Used';
}

type ProductSeed = {
  id: string;
  name: string;
  brand: ProductBrand;
  category: 'Smartphones' | 'Laptops';
  reviews: number;
  isTrending?: boolean;
  image?: string;
  colors?: string[];
  specifications?: Record<string, string>;
};

const brandImages: Record<ProductBrand, string> = {
  Apple: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=600&auto=format&fit=crop&q=80',
  Samsung: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80',
  HP: 'https://images.unsplash.com/photo-1496181130204-7552cc14ac1b?w=600&auto=format&fit=crop&q=80',
  Dell: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&auto=format&fit=crop&q=80',
};

const defaultColors: Record<ProductBrand, string[]> = {
  Apple: ['Black', 'White', 'Gold', 'Red'],
  Samsung: ['Black', 'Blue', 'Silver', 'Phantom Gray'],
  HP: ['Silver', 'Black'],
  Dell: ['Carbon Black', 'Silver'],
};

function productDescription(seed: ProductSeed) {
  if (seed.category === 'Smartphones') {
    return `${seed.name} is a foreign used smartphone, part of Bulkcell Trading Company's current verified inventory. It is ideal for retail buyers, resellers, and customers who want a dependable foreign used device with transparent availability.`;
  }

  return `${seed.name} is a foreign used laptop, part of Bulkcell Trading Company's current professional inventory. It is selected for students, office teams, resellers, and business buyers who need reliable performance.`;
}

function productFeatures(seed: ProductSeed) {
  if (seed.category === 'Smartphones') {
    return [
      'Foreign used device',
      'Verified network compatibility for Nigerian users',
      'Quality-checked display, camera, speaker, and charging port',
      'Retail and wholesale purchase support available',
      'Ready for pickup or delivery after stock confirmation',
    ];
  }

  return [
    'Foreign used device',
    'Business-ready performance for work and study',
    'Battery, keyboard, display, and ports inspected before dispatch',
    'Bulk laptop supply support for offices and resellers',
    'Ready for pickup or delivery after stock confirmation',
  ];
}

function defaultSpecifications(seed: ProductSeed) {
  return {
    Brand: seed.brand,
    Type: seed.category === 'Smartphones' ? 'Foreign Used smartphone' : 'Foreign Used laptop',
    Condition: 'Foreign Used',
    Warranty: 'Warranty/support available after confirmation',
    Reviews: `${seed.reviews} customer reviews`,
    Availability: 'In stock - subject to final confirmation',
  };
}

function makeProduct(seed: ProductSeed): Product {
  return {
    ...seed,
    image: seed.image ?? brandImages[seed.brand],
    isTrending: Boolean(seed.isTrending),
    specifications: seed.specifications ?? defaultSpecifications(seed),
    features: productFeatures(seed),
    description: productDescription(seed),
    colors: seed.colors ?? defaultColors[seed.brand],
    inStock: true,
    condition: 'Foreign Used',
  };
}

const productSeeds: ProductSeed[] = [
  // Apple - smartphones
  { id: 'apple-iphone-11', name: 'Apple iPhone 11', brand: 'Apple', category: 'Smartphones', reviews: 120, isTrending: true, image: 'https://i.ibb.co/5hZZGvTn/Apple-i-Phone-11-300x300.jpg', colors: ['Black', 'White', 'Green', 'Purple', 'Yellow'] },
  { id: 'apple-iphone-11-red', name: 'Apple iPhone 11 (Red)', brand: 'Apple', category: 'Smartphones', reviews: 45, image: 'https://i.ibb.co/VYBCqk9F/Apple-i-Phone-111-300x300.jpg', colors: ['Red'] },
  { id: 'apple-iphone-11-pro-max', name: 'Apple iPhone 11 Pro Max', brand: 'Apple', category: 'Smartphones', reviews: 150, isTrending: true, image: 'https://i.ibb.co/YFJv99kt/Apple-i-Phone-11-Pro-Max-300x300.jpg', colors: ['Midnight Green', 'Space Gray', 'Silver', 'Gold'] },
  { id: 'apple-iphone-12', name: 'Apple iPhone 12', brand: 'Apple', category: 'Smartphones', reviews: 95, image: 'https://i.ibb.co/wNKPZfZF/Apple-i-Phone-12-300x300.jpg', colors: ['Black', 'White', 'Blue', 'Green', 'Purple'] },
  { id: 'apple-iphone-12-pro', name: 'Apple iPhone 12 Pro', brand: 'Apple', category: 'Smartphones', reviews: 80, image: 'https://i.ibb.co/20sG6MbP/Apple-i-Phone-12-Pro-300x300.jpg', colors: ['Graphite', 'Silver', 'Gold', 'Pacific Blue'] },
  { id: 'apple-iphone-12-pro-max', name: 'Apple iPhone 12 Pro Max', brand: 'Apple', category: 'Smartphones', reviews: 110, isTrending: true, image: 'https://i.ibb.co/rR6T8B12/Apple-i-Phone-12-Pro-Max-300x300.jpg', colors: ['Graphite', 'Silver', 'Gold', 'Pacific Blue'] },
  { id: 'apple-iphone-13', name: 'Apple iPhone 13', brand: 'Apple', category: 'Smartphones', reviews: 60, isTrending: true, image: 'https://i.ibb.co/FkQHKVsq/Apple-i-Phone-13-300x300.jpg', colors: ['Midnight', 'Starlight', 'Blue', 'Pink', 'Red'] },
  { id: 'apple-iphone-13-pro', name: 'Apple iPhone 13 Pro', brand: 'Apple', category: 'Smartphones', reviews: 75, image: 'https://i.ibb.co/XrWSmNCX/Apple-i-Phone-13-Pro-300x300.jpg', colors: ['Graphite', 'Gold', 'Silver', 'Sierra Blue'] },
  { id: 'apple-iphone-13-pro-max', name: 'Apple iPhone 13 Pro Max', brand: 'Apple', category: 'Smartphones', reviews: 90, isTrending: true, image: 'https://i.ibb.co/C3DSc0Zr/Apple-i-Phone-13-Pro-Max-300x300.jpg', colors: ['Graphite', 'Gold', 'Silver', 'Sierra Blue'] },
  { id: 'apple-iphone-x', name: 'Apple iPhone X', brand: 'Apple', category: 'Smartphones', reviews: 200, image: 'https://i.ibb.co/WvYKhWLy/Apple-i-Phone-X-5-8-Super-Amoled-64-GB-Silver-300x300.jpg', colors: ['Space Gray', 'Silver'] },
  { id: 'apple-iphone-xs-max', name: 'Apple iPhone XS Max', brand: 'Apple', category: 'Smartphones', reviews: 180, isTrending: true, image: 'https://i.ibb.co/GvYFLhbH/Apple-i-Phone-XS-Max-300x300.jpg', colors: ['Space Gray', 'Silver', 'Gold'] },

  // Samsung - smartphones
  { id: 'samsung-galaxy-m53', name: 'Samsung Galaxy M53', brand: 'Samsung', category: 'Smartphones', reviews: 45, colors: ['Deep Ocean Blue', 'Mystique Green', 'Brown'] },
  { id: 'samsung-galaxy-note-20', name: 'Samsung Galaxy Note 20', brand: 'Samsung', category: 'Smartphones', reviews: 95, image: 'https://i.ibb.co/ym6Yt1Sv/Samsung-Galaxy-Note-20.jpg', colors: ['Mystic Bronze', 'Mystic Gray', 'Mystic Green'] },
  { id: 'samsung-galaxy-s8', name: 'Samsung Galaxy S8', brand: 'Samsung', category: 'Smartphones', reviews: 180, image: 'https://i.ibb.co/Q3LxXQtZ/Samsung-Galaxy-S8.jpg', colors: ['Midnight Black', 'Orchid Gray', 'Arctic Silver'] },
  { id: 'samsung-galaxy-s9', name: 'Samsung Galaxy S9', brand: 'Samsung', category: 'Smartphones', reviews: 150, image: 'https://i.ibb.co/DPFtzmQs/Samsung-Galaxy-S9.jpg', colors: ['Midnight Black', 'Lilac Purple', 'Coral Blue'] },
  { id: 'samsung-galaxy-s10', name: 'Samsung Galaxy S10', brand: 'Samsung', category: 'Smartphones', reviews: 130, image: 'https://i.ibb.co/22TN8yy/Samsung-Galaxy-S10-300x300.jpg', colors: ['Prism Black', 'Prism White', 'Prism Blue'] },
  { id: 'samsung-galaxy-s20', name: 'Samsung Galaxy S20', brand: 'Samsung', category: 'Smartphones', reviews: 110, image: 'https://i.ibb.co/fGD9bynB/Samsung-Galaxy-S20-300x300.jpg', colors: ['Cosmic Gray', 'Cloud Blue', 'Cloud Pink'] },
  { id: 'samsung-galaxy-s20-ultra', name: 'Samsung Galaxy S20 Ultra', brand: 'Samsung', category: 'Smartphones', reviews: 140, isTrending: true, image: 'https://i.ibb.co/5h5f2sVy/Samsung-Galaxy-S20-Ultra-300x300.jpg', colors: ['Cosmic Black', 'Cosmic Gray'] },
  { id: 'samsung-galaxy-s21', name: 'Samsung Galaxy S21', brand: 'Samsung', category: 'Smartphones', reviews: 115, isTrending: true, image: 'https://i.ibb.co/ZzgzMHcr/Samsung-Galaxy-S21.jpg', colors: ['Phantom Gray', 'Phantom White', 'Phantom Violet'] },
  { id: 'samsung-galaxy-s22-ultra', name: 'Samsung Galaxy S22 Ultra', brand: 'Samsung', category: 'Smartphones', reviews: 85, isTrending: true, colors: ['Phantom Black', 'Phantom White', 'Green', 'Burgundy'] },
  { id: 'samsung-galaxy-z-fold-4', name: 'Samsung Galaxy Z Fold 4', brand: 'Samsung', category: 'Smartphones', reviews: 65, isTrending: true, colors: ['Graygreen', 'Phantom Black', 'Beige'] },

  // HP - laptops
  { id: 'hp-elitebook-840-g3', name: 'HP EliteBook 840 G3', brand: 'HP', category: 'Laptops', reviews: 70, isTrending: true, image: 'https://i.ibb.co/nNndr9C2/Bulkcell-Trading-Company.jpg', colors: ['Silver'] },
  { id: 'hp-elitebook-1030-g2-x360', name: 'HP EliteBook 1030 G2 X360', brand: 'HP', category: 'Laptops', reviews: 35, isTrending: true, image: 'https://i.ibb.co/Y4Xm3h66/HP-Elite-Book-1030-G2-X360.jpg', colors: ['Silver'] },
  { id: 'hp-elitebook-1030-g2-x360-intel-core', name: 'HP EliteBook 1030 G2 X360 (Intel Core...)', brand: 'HP', category: 'Laptops', reviews: 20, image: 'https://i.ibb.co/s98FHXCx/HP-Elite-Book-1030-G2-X360-Intel-Core-i5-7th-Gen-8-GB-512-GB-SSD.webp', colors: ['Silver'] },
  { id: 'hp-elitebook-9470-folio', name: 'HP EliteBook 9470 Folio', brand: 'HP', category: 'Laptops', reviews: 85, image: 'https://i.ibb.co/DFwGcF9/HP-Elite-Book-9470-Folio-Intel-Core-i5-3rd-Gen-8-GB256-GB-SSD.webp', colors: ['Silver'] },
  { id: 'hp-elitebook-revolve-810', name: 'HP EliteBook Revolve 810', brand: 'HP', category: 'Laptops', reviews: 45, image: 'https://i.ibb.co/JRc3QGyL/HP-Elitebook-Revolve-810.jpg', colors: ['Silver'] },
  { id: 'hp-probook-450-g5', name: 'HP ProBook 450 G5', brand: 'HP', category: 'Laptops', reviews: 60, isTrending: true, image: 'https://i.ibb.co/N6FsTP1F/Probook-Bulkcell-TC.webp', colors: ['Silver', 'Black'] },
  { id: 'hp-probook-650-g1', name: 'HP ProBook 650 G1', brand: 'HP', category: 'Laptops', reviews: 90, image: 'https://i.ibb.co/4wjXys7m/Probook2-Bulkcell-TC.webp', colors: ['Black'] },

  // Dell - laptops
  { id: 'dell-latitude-7390', name: 'Dell Latitude 7390', brand: 'Dell', category: 'Laptops', reviews: 65, isTrending: true, image: 'https://i.ibb.co/fVVM1zhk/Dell-Latitude-7390-intel-core-i7-8th-Generation-16-GB-RAM-512-GB-SSD-13-3-Touchscreen-300x300.jpg', colors: ['Carbon Black'] },
  { id: 'dell-latitude-7480', name: 'Dell Latitude 7480', brand: 'Dell', category: 'Laptops', reviews: 55, image: 'https://i.ibb.co/MkPLZHbn/Dell-Latitude-Bulkcell-TC.jpg', colors: ['Carbon Black'] },
];

export const PRODUCTS: Product[] = productSeeds.map(makeProduct);
