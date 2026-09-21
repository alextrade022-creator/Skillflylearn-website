/**
 * Global site metadata: navigation, contact details and social links.
 * Kept in one place so header, footer and contact page stay in sync.
 */

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Placements', to: '/placements' },
  { label: 'Courses', to: '/courses' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

export const CONTACT = {
  address: 'First floor, Kidson Building, East Nadakkavu, Calicut - 673011',
  email: 'skillflylearn@gmail.com',
  phones: ['+91 9447 489 309', '7034 339 390', '7356 741 944'],
  whatsapp: '+91 94961 22938',
  whatsappLink: 'https://wa.me/919496122938',
  mapEmbed:
    'https://www.google.com/maps?q=East+Nadakkavu,+Kozhikode,+Kerala+673011&output=embed',
};

export const SOCIALS = [
  { label: 'Instagram', short: 'IG', url: 'https://www.instagram.com/skillflylearn' },
  { label: 'YouTube', short: 'YT', url: 'https://www.youtube.com/@skillflylearn' },
  { label: 'WhatsApp', short: 'WA', url: 'https://wa.me/919496122938' },
];
