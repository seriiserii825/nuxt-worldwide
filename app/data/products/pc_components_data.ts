export interface Category {
  label: string
  slug: string
  img: string
  count: number
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
  { label: 'Cases',               slug: 'cases',     img: '/img/photo-1591488320449.jpg', count: 42 },
  { label: 'Memory',              slug: 'memory',    img: '/img/photo-1562976540.jpg',    count: 38 },
  { label: 'CPU & AIO Coolers',   slug: 'cooling',   img: '/img/cooling.jpg',             count: 27 },
  { label: 'Case Fans',           slug: 'fans',      img: '/img/fans.jpg',                count: 31 },
  { label: 'Power Supply Units',  slug: 'psu',       img: '/img/psu.jpg',                 count: 19 },
  { label: 'SSDs & Storage',      slug: 'ssd',       img: '/img/ssd.jpg',                 count: 24 },
  { label: 'Hubs & Docks',        slug: 'hubs',      img: '/img/photo-1518770660439.jpg', count: 12 },
  { label: 'Accessories',         slug: 'acc',       img: '/img/photo-1542751371.jpg',    count: 55 },
]

export const pcProducts: Product[] = [
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
    name: 'Vengeance DDR5-6000 32GB',
    category: 'Memory',
    price: 129.99,
    rating: 5,
    reviews: 1872,
    img: '/img/photo-1562976540.jpg',
  },
  {
    id: 3,
    name: 'iCUE H150i ELITE LCD AIO',
    category: 'CPU & AIO Coolers',
    price: 219.99,
    rating: 4,
    reviews: 986,
    img: '/img/cooling.jpg',
    badge: 'New',
  },
  {
    id: 4,
    name: 'iCUE LINK RX120 RGB Fan',
    category: 'Case Fans',
    price: 44.99,
    rating: 5,
    reviews: 2104,
    img: '/img/fans.jpg',
  },
  {
    id: 5,
    name: 'RM1000x SHIFT ATX 3.0 PSU',
    category: 'Power Supply Units',
    price: 189.99,
    rating: 5,
    reviews: 743,
    img: '/img/psu.jpg',
    badge: 'New',
  },
  {
    id: 6,
    name: 'MP600 PRO LPX 2TB NVMe SSD',
    category: 'SSDs & Storage',
    price: 149.99,
    rating: 4,
    reviews: 1328,
    img: '/img/ssd.jpg',
  },
  {
    id: 7,
    name: '5000X RGB Mid-Tower Case',
    category: 'Cases',
    price: 174.99,
    rating: 5,
    reviews: 2890,
    img: '/img/photo-1555680202.jpg',
  },
  {
    id: 8,
    name: 'Vengeance DDR5-5600 64GB',
    category: 'Memory',
    price: 219.99,
    rating: 4,
    reviews: 654,
    img: '/img/photo-1562976540.jpg',
    badge: 'Sale',
  },
]
