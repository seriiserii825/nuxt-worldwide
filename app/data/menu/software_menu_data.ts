import type { MenuColumn } from './product_menu_data'

export const softwareMenuData: MenuColumn[] = [
  {
    title: 'iCUE Software',
    items: [
      { label: 'About iCUE',    href: '#' },
      { label: 'Download iCUE', href: '#' },
      { label: 'iCUE Murals',   href: '#' },
    ],
  },
  {
    title: 'Integrations',
    items: [
      { label: 'Nanoleaf',    href: '#' },
      { label: 'Philips Hue', href: '#' },
      { label: 'NVIDIA',      href: '#' },
      { label: 'Govee',       href: '#' },
    ],
  },
  {
    title: 'Web Hub',
    description: 'Configure onboard profiles and update settings for select CORSAIR devices.',
    cta: { label: 'Web Hub', href: '#' },
  },
  {
    title: 'Firmware Update Utility',
    description: 'Check for the latest CORSAIR firmware updates for your device.',
    cta: { label: 'Check My Device', href: '#' },
  },
  {
    title: 'Drivers & Software',
    description: 'Download drivers and software.',
    cta: { label: 'View Downloads', href: '#' },
  },
]
