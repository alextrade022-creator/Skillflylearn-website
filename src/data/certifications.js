/** Certification logos, grouped by track for the home page and flattened for the about page. */
const dmCerts = ['Google', 'SEMrush', 'HubSpot', 'Skillfly', 'Google Ads', 'Ahrefs'].map(
  (name, i) => ({ name, slot: `cert-dm-${i + 1}` }),
);

const hrCerts = ['EGAC', 'IAF', 'Kerala Startup Mission', 'Startup India', 'ISO'].map(
  (name, i) => ({ name, slot: `cert-hr-${i + 1}` }),
);

export const CERT_GROUPS = [
  { title: 'Digital Marketing certifications', items: dmCerts },
  { title: 'HR certifications', items: hrCerts },
];

export const ALL_CERTS = [...dmCerts, ...hrCerts].map((cert, i) => ({
  name: cert.name,
  slot: `cert-a-${i + 1}`,
}));
