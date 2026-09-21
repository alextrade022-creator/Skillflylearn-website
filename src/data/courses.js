/** Course data — a compact preview list for the home page and full detail for the courses page. */

export const COURSE_PREVIEWS = [
  {
    title: 'AI-Integrated Digital Marketing',
    sub: 'Advanced diploma — brand building to performance marketing',
    duration: '3 Months | Online & Offline',
    bullets: [
      'WordPress Development & Web Basics',
      'Search Engine Optimization (SEO + AEO/GEO)',
      'Google Ads, Meta Ads & Performance Marketing',
      'Social Media, Content Creation & LinkedIn',
      'Email Marketing, E-Commerce & Automation',
      'AI Tools for Marketing + Live Client Project',
    ],
  },
  {
    title: 'HR Management',
    sub: 'ISO-certified HR training with mock interviews and mentorship',
    duration: '6 Months | Online & Offline',
    bullets: [
      'Introduction to HRM & HR Life Mastery',
      'Recruitment & Tracking Recruitment Success',
      'Payroll & Employee Transition',
      'Labour Laws, Complaints & Compliance',
      'Employee Relations & Better Workplaces',
      'Excel, HR Analytics & Digital HR Tools',
    ],
  },
  {
    title: 'Foreign Accounting & Taxation',
    sub: 'CFAT — Indian and GCC accounting, taxation and ERP tools',
    duration: '4 Months + 2 Month Internship',
    bullets: [
      'Manual Accounting & Book Keeping',
      'Tally Prime (14 modules) & Adjustment Entries',
      'GST Practical Workshop — registration, returns, e-invoicing',
      'GCC VAT for UAE, Saudi, Oman & Bahrain',
      'QuickBooks, Zoho Books & Odoo',
      'MS Excel, Power BI, TDS, IFRS & Finance Management',
    ],
  },
];

export const COURSES_FULL = [
  {
    title: 'AI-Integrated Advanced Diploma in Digital Marketing',
    sub: 'Brand building, performance marketing and marketing automation — with a mandatory agency internship.',
    tags: ['3 Months', 'Online & Offline', 'Agency internship', 'International certifications'],
    modules: [
      {
        name: '01 · WordPress Development',
        text: 'Domain purchase and hosting basics, wireframing and project setup, WordPress plugins, page design with Elementor, navigation, forms and theme customisation.',
      },
      {
        name: '02 · Search Engine Optimization',
        text: "SEO foundations and Google's algorithm, manual and AI-driven keyword research, on-page implementation, SERP features and schema, technical SEO and Core Web Vitals, off-page and link building, local and social SEO, AEO/VEO/GEO — closing with a full audit, strategy and dashboard project.",
      },
      {
        name: '03 · Google Ads',
        text: 'Campaign structure and ad rank, keyword match types, campaign objectives and conversion tracking — built in a live ad account.',
      },
      {
        name: '04 · Social Media Marketing',
        text: 'Content calendars, copywriting, Meta pages and Business Suite, practical content creation for YouTube, Instagram and Facebook, plus design and branding.',
      },
      {
        name: '05 · Meta Ads',
        text: 'Organic and paid fundamentals, platform setup across Facebook, Instagram, LinkedIn and YouTube, Ads Manager objectives, audience segmentation and retargeting, Business Manager setup, and performance analysis on CTR, CPC and ROAS with Pixel and events.',
      },
      {
        name: '06 · Email Marketing',
        text: 'Campaign types and list management, tools such as Mailchimp, campaign design, segmentation and analysis.',
      },
      {
        name: '07 · LinkedIn Organic Marketing',
        text: 'Profile creation and optimisation, content frameworks and an engagement strategy that attracts recruiters and clients.',
      },
      {
        name: '08 · Content Creation',
        text: 'Scripting and reels planning, filming and production fundamentals, editing, platform preparation and presentation.',
      },
      {
        name: '09 · E-Commerce',
        text: 'E-commerce and dropshipping basics, Shopify store setup, product and collection optimisation.',
      },
      {
        name: '10 · Special Sessions',
        text: 'Marketing automation tools, strategy building and client reporting, LinkedIn masterclass, AI tools class, CV preparation, interview day and a final theory plus practical assessment.',
      },
    ],
    who: 'Students, career switchers, working professionals, entrepreneurs, sales and marketing professionals, creators and homemakers returning to work.',
    eligibility: 'Plus Two or above. No marketing background needed — the diploma starts from fundamentals.',
    cert: 'Skillfly advanced diploma, agency-based internship certificate and international platform certifications (Google, Google Ads, HubSpot, SEMrush, Ahrefs).',
    roles: 'Digital Marketing Executive · SEO Specialist · SEM/PPC Specialist · Social Media Expert · Content Strategist · Copywriter · Email Marketing Specialist',
  },
  {
    title: 'HR Management Training Programme',
    sub: 'ISO-certified, expert HR-led training with one-on-one mentorship and 100% placement assistance.',
    tags: ['6 Months', 'Online & Offline', 'Mock interview panels', 'ISO-certified'],
    modules: [
      {
        name: '01 · Introduction to HRM',
        text: 'The HR function end to end — structures, roles, policies and where an HR executive fits into a growing company.',
      },
      {
        name: '02 · HR Life Mastery',
        text: 'The day-to-day working life of an HR professional: documentation, stakeholder handling, ethics and professional communication.',
      },
      {
        name: '03 · Building Better Workplaces',
        text: 'Culture, engagement programmes, onboarding design and the practices that keep good people from leaving.',
      },
      {
        name: '04 · Handling Complaints & Concerns',
        text: 'Grievance procedures, disciplinary process, POSH awareness and difficult conversations — practised through case studies.',
      },
      {
        name: '05 · Building Strong Relationships in HRM',
        text: 'Employee relations, manager coaching, negotiation and internal communication.',
      },
      {
        name: '06 · Tracking Recruitment Success',
        text: 'Sourcing channels, screening, structured interviews, offer management and recruitment metrics like cost-per-hire and time-to-fill.',
      },
      {
        name: '07 · Payroll & Employee Transition',
        text: 'Salary structuring, PF and ESI, attendance and leave, payroll processing on real worksheets, plus exits, settlements and transitions.',
      },
      {
        name: '08 · Digital Meet Essentials',
        text: 'Excel and Google Sheets mastery, HR dashboards and reporting, LinkedIn strategy and AI tools for HR work.',
      },
    ],
    who: 'Graduates and MBA students targeting HR roles, admin professionals moving into HR, and business owners building their first HR process.',
    eligibility: 'Any degree or final-year student. Beginners welcome.',
    cert: 'ISO-certified Skillfly programme certificate, with modules aligned to EGAC/IAF-accredited HR credential standards.',
    roles: 'HR Executive · Recruiter / Talent Acquisition Executive · Payroll Assistant · HR Generalist · HR Operations Executive',
  },
  {
    title: 'CFAT — Certificate in Foreign Accounting & Taxation',
    sub: 'Practical Indian and GCC accounting, taxation and ERP training, with an industry internship.',
    tags: ['4 Months + 2 Month Internship', 'Online & Offline', 'Industrial visit', 'Live audit data'],
    modules: [
      {
        name: '01 · Manual Accounting',
        text: 'Book keeping procedures, cash book management, accurate documentation and financial report preparation — the foundation before any software.',
      },
      {
        name: '02 · Tally Prime',
        text: 'Fourteen practical modules: accounts and inventory, multiple price levels, manufacturing, location transfer, cost centres, bank reconciliation, payroll, GST implementation, statutory and financial reporting, adjustment entries and user creation.',
      },
      {
        name: '03 · GST Practical Workshop',
        text: 'GST registration on the portal, GSTR return filing, e-way bill and e-invoicing, and LUT submission for export without payment of GST.',
      },
      {
        name: '04 · GCC VAT',
        text: 'GCC VAT fundamentals and statutory laws, VAT registration and return filing across UAE, Saudi Arabia, Oman and Bahrain, reverse charge mechanism and designated-zone VAT.',
      },
      {
        name: '05 · ERP & Foreign Accounting Software',
        text: 'QuickBooks, Zoho Books and Odoo — handling the finance modules the way businesses abroad actually run them.',
      },
      {
        name: '06 · MS Excel & Power BI',
        text: 'Advanced formulas (VLOOKUP, XLOOKUP, SUMIF, COUNTIF), data validation, pivot tables and charts, sales dashboards in Excel and Power BI, plus macros and VB automation.',
      },
      {
        name: '07 · IFRS & Finance Management',
        text: 'International Financial Reporting Standards, cash flow and fund flow statements, working capital management, risk and investment management.',
      },
      {
        name: '08 · TDS',
        text: 'Tax Deducted at Source on salary, rent, interest, commission and contractor payments — computation and filing practice.',
      },
      {
        name: '09 · Practical Project & Industrial Visit',
        text: 'Previous-year audit data and real business documents to work on, plus an industrial visit covering how a live entity runs inventory, manufacturing and accounts.',
      },
    ],
    who: 'Commerce graduates and students, accountants aiming for Gulf roles, and working professionals who need practical taxation and ERP skills.',
    eligibility: 'B.Com, M.Com, BBA or any commerce background; final-year students welcome.',
    cert: 'CFAT certificate with internship certificate, plus practical proficiency in Tally Prime, Zoho Books, QuickBooks and Odoo.',
    roles: 'Junior Accountant · Accounts Executive · GST / Taxation Assistant · Payroll Executive · Audit Assistant · Gulf accounting roles',
  },
];

export const COURSE_INCLUDES = [
  'AI mastery training',
  'One-on-one mentorship',
  'Mock interview sessions',
  'English & communication practice',
  'Expert-led live sessions',
  'LinkedIn profile & strategy',
  'Excel & Google Sheets mastery',
  'Case study-based learning',
  'Recorded session access',
  'Module-wise assessments',
  'Comprehensive study materials',
  'Entrepreneur-led classes',
  'Exclusive alumni community',
  '100% placement assistance',
  'Internship certificate',
  'Lifetime doubt-clearing access',
];

export const COURSE_COMPARISON = [
  { k: 'Duration', a: '3 months', b: '6 months', c: '4 months + 2 month internship' },
  { k: 'Mode', a: 'Online & offline', b: 'Online & offline', c: 'Online & offline' },
  {
    k: 'Best for',
    a: 'Marketing, ads, content and SEO roles',
    b: 'Recruitment, payroll and HR generalist roles',
    c: 'Accounting, taxation and Gulf finance roles',
  },
  {
    k: 'Practical work',
    a: 'Live ad accounts, website audits, agency internship',
    b: 'Real payroll sheets and mock interview panels',
    c: 'Previous-year audit data, GST portal, industrial visit',
  },
  {
    k: 'Tools',
    a: 'WordPress, GA4, Ads Manager, AI tools',
    b: 'Excel, Google Sheets, HR dashboards, LinkedIn',
    c: 'Tally Prime, Zoho Books, QuickBooks, Odoo, Power BI',
  },
  {
    k: 'Starting roles',
    a: 'SEO Executive, Performance Marketer, Social Media Executive',
    b: 'HR Executive, Recruiter, Payroll Assistant',
    c: 'Junior Accountant, GST Assistant, Audit Assistant',
  },
];
