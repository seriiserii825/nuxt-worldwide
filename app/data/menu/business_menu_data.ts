import type { MenuColumn } from './product_menu_data'

export const businessMenuData: MenuColumn[] = [
  {
    title: 'Industries',
    items: [
      { label: 'Architecture and Engineering', href: '#' },
      { label: 'Education',                    href: '#' },
      { label: 'Government',                   href: '#' },
      { label: 'Design and Manufacturing',     href: '#' },
    ],
  },
  {
    title: 'Business Solutions',
    items: [
      { label: 'High-Performance Computing', href: '#' },
      { label: 'Video Conferencing',         href: '#' },
      { label: 'Digital Workplace',          href: '#' },
      { label: 'AI Development',             href: '#' },
      { label: 'Custom',                     href: '#' },
    ],
  },
  {
    title: 'Explore',
    items: [
      { label: 'About',               href: '#' },
      { label: 'Partners & Resellers', href: '#' },
      { label: 'Events',              href: '#' },
      { label: 'Business Support',    href: '#' },
    ],
  },
]
