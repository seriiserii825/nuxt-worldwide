export interface Category {
  label: string
  slug: string
  img: string
}

export interface Product {
  id: number
  name: string
  category: string
  price: number
  rating: number
  reviews: number
  img: string
  badge?: string
}

export const pcCategories: Category[] = [
  { label: 'Cases',              slug: 'cases',   img: '/img/photo-1591488320449.jpg' },
  { label: 'Memory',             slug: 'memory',  img: '/img/photo-1562976540.jpg'   },
  { label: 'CPU & AIO Coolers',  slug: 'cooling', img: '/img/cooling.jpg'            },
  { label: 'Case Fans',          slug: 'fans',    img: '/img/fans.jpg'               },
  { label: 'Power Supply Units', slug: 'psu',     img: '/img/psu.jpg'                },
  { label: 'SSDs & Storage',     slug: 'ssd',     img: '/img/ssd.jpg'                },
  { label: 'Hubs & Docks',       slug: 'hubs',    img: '/img/photo-1518770660439.jpg'},
  { label: 'Accessories',        slug: 'acc',     img: '/img/photo-1542751371.jpg'   },
]

export const pcProducts: Product[] = [
  // ── Cases ──────────────────────────────────────────────────────────────────
  {
    id: 1,
    name: '4000D Airflow Mid-Tower Case',
    category: 'Cases',
    price: 94.99,
    rating: 5,
    reviews: 3241,
    img: '/img/photo-1591488320449.jpg',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: '5000X RGB Mid-Tower Case',
    category: 'Cases',
    price: 174.99,
    rating: 5,
    reviews: 2890,
    img: '/img/photo-1555680202.jpg',
  },
  {
    id: 3,
    name: '3000D Airflow Mid-Tower Case',
    category: 'Cases',
    price: 74.99,
    rating: 4,
    reviews: 1530,
    img: '/img/photo-1591488320449.jpg',
    badge: 'Sale',
  },

  // ── Memory ─────────────────────────────────────────────────────────────────
  {
    id: 4,
    name: 'Vengeance DDR5-6000 32GB',
    category: 'Memory',
    price: 129.99,
    rating: 5,
    reviews: 1872,
    img: '/img/photo-1562976540.jpg',
    badge: 'Best Seller',
  },
  {
    id: 5,
    name: 'Vengeance DDR5-5600 64GB',
    category: 'Memory',
    price: 219.99,
    rating: 4,
    reviews: 654,
    img: '/img/photo-1562976540.jpg',
    badge: 'Sale',
  },
  {
    id: 6,
    name: 'Dominator Titanium DDR5-6400 32GB',
    category: 'Memory',
    price: 189.99,
    rating: 5,
    reviews: 421,
    img: '/img/photo-1562976540.jpg',
    badge: 'New',
  },

  // ── CPU & AIO Coolers ──────────────────────────────────────────────────────
  {
    id: 7,
    name: 'iCUE H150i ELITE LCD AIO',
    category: 'CPU & AIO Coolers',
    price: 219.99,
    rating: 4,
    reviews: 986,
    img: '/img/cooling.jpg',
    badge: 'New',
  },
  {
    id: 8,
    name: 'iCUE H100i ELITE CAPELLIX',
    category: 'CPU & AIO Coolers',
    price: 159.99,
    rating: 5,
    reviews: 2103,
    img: '/img/cooling.jpg',
    badge: 'Best Seller',
  },
  {
    id: 9,
    name: 'iCUE LINK H170i LCD',
    category: 'CPU & AIO Coolers',
    price: 269.99,
    rating: 4,
    reviews: 312,
    img: '/img/cooling.jpg',
  },

  // ── Case Fans ──────────────────────────────────────────────────────────────
  {
    id: 10,
    name: 'iCUE LINK RX120 RGB Fan',
    category: 'Case Fans',
    price: 44.99,
    rating: 5,
    reviews: 2104,
    img: '/img/fans.jpg',
    badge: 'Best Seller',
  },
  {
    id: 11,
    name: 'iCUE LINK RX140 RGB Fan',
    category: 'Case Fans',
    price: 49.99,
    rating: 5,
    reviews: 876,
    img: '/img/fans.jpg',
  },
  {
    id: 12,
    name: 'LL120 RGB Triple Fan Kit',
    category: 'Case Fans',
    price: 79.99,
    rating: 4,
    reviews: 1543,
    img: '/img/fans.jpg',
    badge: 'Sale',
  },

  // ── Power Supply Units ─────────────────────────────────────────────────────
  {
    id: 13,
    name: 'RM1000x SHIFT ATX 3.0 PSU',
    category: 'Power Supply Units',
    price: 189.99,
    rating: 5,
    reviews: 743,
    img: '/img/psu.jpg',
    badge: 'New',
  },
  {
    id: 14,
    name: 'HX1000i Platinum PSU',
    category: 'Power Supply Units',
    price: 229.99,
    rating: 5,
    reviews: 1024,
    img: '/img/psu.jpg',
  },
  {
    id: 15,
    name: 'RM850e Fully Modular PSU',
    category: 'Power Supply Units',
    price: 129.99,
    rating: 4,
    reviews: 2341,
    img: '/img/psu.jpg',
    badge: 'Best Seller',
  },

  // ── SSDs & Storage ─────────────────────────────────────────────────────────
  {
    id: 16,
    name: 'MP600 PRO LPX 2TB NVMe SSD',
    category: 'SSDs & Storage',
    price: 149.99,
    rating: 4,
    reviews: 1328,
    img: '/img/ssd.jpg',
  },
  {
    id: 17,
    name: 'MP600 ELITE 1TB NVMe SSD',
    category: 'SSDs & Storage',
    price: 99.99,
    rating: 5,
    reviews: 891,
    img: '/img/ssd.jpg',
    badge: 'Best Seller',
  },
  {
    id: 18,
    name: 'MP700 PRO 2TB PCIe 5.0 SSD',
    category: 'SSDs & Storage',
    price: 199.99,
    rating: 5,
    reviews: 247,
    img: '/img/ssd.jpg',
    badge: 'New',
  },

  // ── Hubs & Docks ───────────────────────────────────────────────────────────
  {
    id: 19,
    name: 'USB-C 100W PD Hub 7-in-1',
    category: 'Hubs & Docks',
    price: 59.99,
    rating: 4,
    reviews: 432,
    img: '/img/photo-1518770660439.jpg',
  },
  {
    id: 20,
    name: '4-Port USB 3.2 Hub',
    category: 'Hubs & Docks',
    price: 34.99,
    rating: 4,
    reviews: 718,
    img: '/img/photo-1518770660439.jpg',
    badge: 'Sale',
  },
  {
    id: 21,
    name: 'TBT4 Thunderbolt 4 Dock',
    category: 'Hubs & Docks',
    price: 149.99,
    rating: 5,
    reviews: 189,
    img: '/img/photo-1518770660439.jpg',
    badge: 'New',
  },

  // ── Accessories ────────────────────────────────────────────────────────────
  {
    id: 22,
    name: 'iCUE LINK System Hub',
    category: 'Accessories',
    price: 29.99,
    rating: 5,
    reviews: 3102,
    img: '/img/photo-1542751371.jpg',
    badge: 'Best Seller',
  },
  {
    id: 23,
    name: 'PCIE 5.0 600W Power Adapter',
    category: 'Accessories',
    price: 19.99,
    rating: 4,
    reviews: 874,
    img: '/img/photo-1542751371.jpg',
  },
  {
    id: 24,
    name: 'Fan Speed Controller Node',
    category: 'Accessories',
    price: 24.99,
    rating: 4,
    reviews: 1230,
    img: '/img/photo-1542751371.jpg',
    badge: 'New',
  },
]
