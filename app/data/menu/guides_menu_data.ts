import type { MenuColumn } from './product_menu_data'

export const guidesMenuData: MenuColumn[] = [
  {
    title: 'Guides & Articles',
    items: [
      { label: 'DIY Builder',         href: '#' },
      { label: 'Gaming & Furniture',  href: '#' },
      { label: 'Setup Tips',          href: '#' },
    ],
  },
  {
    title: 'Software',
    items: [
      { label: 'iCUE Guides',           href: '#' },
      { label: 'iCUE Lighting Profiles', href: '#' },
      { label: 'Firmware Updates',       href: '#' },
    ],
  },
  {
    title: 'Featured',
    items: [
      { label: 'RS Max Performance Fans', href: '#' },
      { label: 'Xeneon Edge Review',      href: '#' },
      { label: 'Build of the Month',      href: '#' },
    ],
  },
]
