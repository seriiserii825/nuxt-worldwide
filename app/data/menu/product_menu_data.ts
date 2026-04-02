export interface MenuItem {
  label: string
  href: string
  badge?: string
}

export interface MenuCta {
  label: string
  href: string
}

export interface MenuColumn {
  title: string
  href?: string
  items?: MenuItem[]
  description?: string
  cta?: MenuCta
}

export const productMenuData: MenuColumn[] = [
  {
    title: 'PC Components',
    href: '/products/pc-components',
    items: [
      { label: 'Cases',             href: '/products/cases' },
      { label: 'iCUE LINK',         href: '/products/icue-link' },
      { label: 'CPU & AIO Coolers', href: '/products/cpu-aio-coolers' },
    ],
  },
  {
    title: 'Gaming Gear',
    items: [
      { label: 'CORSAIR Custom Lab', href: '#' },
      { label: 'Keyboards',          href: '#' },
      { label: 'Headsets',           href: '#' },
    ],
  },
  {
    title: 'Gaming PCs',
    items: [
      { label: 'All Gaming PCs',   href: '#' },
      { label: 'CORSAIR ONE PCs',  href: '#' },
      { label: 'Vengeance PCs',    href: '#' },
    ],
  },
  {
    title: 'Gaming Furniture',
    items: [
      { label: 'Desks',  href: '#' },
      { label: 'Chairs', href: '#' },
    ],
  },
  {
    title: 'AI Workstation',
    items: [
      { label: 'AI Workstation 300',  href: '#' },
      { label: 'WS3000 Power Supply', href: '#' },
      { label: 'FRAME 5000D WS',      href: '#' },
    ],
  },
  {
    title: 'Shop Corsair',
    items: [
      { label: 'New Products',   href: '#' },
      { label: 'Special Offers', href: '#' },
      { label: 'PC Builder',     href: '#' },
    ],
  },
]
