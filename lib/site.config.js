// ============================================================================
//  SUPER PET GROOMING SERVICES — SINGLE SOURCE OF TRUTH
//  Edit business details here. Every component reads from this file.
// ============================================================================

export const site = {
  name: 'Super Pet Grooming Services',
  tagline: 'Professional pet grooming with care, patience and a whole lot of love.',
  category: 'Pet Grooming Services',

  // --- Contact -------------------------------------------------------------
  phoneDisplay: '+91 98495 38601',
  phoneRaw: '+919849538601',        // used in tel: links
  whatsappNumber: '919849538601',   // country code + number, no +, no spaces

  whatsappMessage:
    "Hi Super Pet Grooming Services! I'd like to book a grooming appointment for my pet.",

  // --- Location ------------------------------------------------------------
  address: {
    line1: 'Sardar Patel Nagar X Road, near Community Hall',
    line2: 'Kukatpally Housing Board Colony',
    line3: 'Dharma Reddy Colony Phase II',
    city: 'Nizampet, Hyderabad',
    state: 'Telangana',
    pincode: '500085',
    country: 'IN',
  },

  openingHours: 'Opens at 10:00 AM',

  serviceArea: [
    'Nizampet', 'Kukatpally', 'KPHB', 'Pragathi Nagar',
    'JNTU', 'Bachupally',
  ],

  // --- Reputation ----------------------------------------------------------
  rating: '4.8',
  reviewCount: '227+',

  // --- Configurable external links (leave blank to hide) -------------------
  links: {
    // Paste your Google Maps embed URL and profile URL here.
    googleMapsEmbed:
      'https://www.google.com/maps?q=Super+Pet+Grooming+Services+Nizampet+Hyderabad&output=embed',
    googleMapsDirections:
      'https://www.google.com/maps/dir/?api=1&destination=Super+Pet+Grooming+Services+Nizampet+Hyderabad',
    googleReviews:
      'https://www.google.com/search?q=Super+Pet+Grooming+Services+Nizampet+reviews',
    instagram: '', // e.g. 'https://instagram.com/yourhandle' — leave blank to hide
    facebook: '',  // leave blank to hide
  },

  // --- SEO -----------------------------------------------------------------
  seo: {
    title: 'Super Pet Grooming Services | Pet Grooming in Nizampet, Hyderabad',
    description:
      'Professional dog and pet grooming services in Nizampet, Hyderabad. Gentle handling, hygienic grooming and experienced staff. Call Super Pet Grooming Services today.',
    keywords: [
      'Pet grooming Nizampet', 'Dog grooming Nizampet', 'Cat grooming Nizampet',
      'Pet salon Nizampet', 'Dog grooming Kukatpally', 'Pet grooming Kukatpally',
      'Pet grooming Hyderabad', 'Dog haircut Hyderabad', 'Pet grooming near me',
    ],
    url: 'https://superpetgrooming.example.com', // replace with real domain on deploy
  },
};

export const trustHighlights = [
  { icon: '🐾', label: 'Experienced Groomers' },
  { icon: '🛁', label: 'Professional Grooming' },
  { icon: '❤️', label: 'Gentle Pet Handling' },
  { icon: '⭐', label: '4.8/5 Rated' },
];

export const services = [
  {
    id: 'full-grooming',
    icon: '🐩',
    title: 'Full Grooming',
    description: "Complete grooming session tailored to your pet's breed and coat.",
  },
  {
    id: 'bath-blow-dry',
    icon: '🛁',
    title: 'Bath & Blow Dry',
    description: 'Thorough bathing followed by professional drying for a clean, fresh coat.',
  },
  {
    id: 'haircut-styling',
    icon: '✂️',
    title: 'Haircut & Styling',
    description: 'Breed-appropriate trimming and styling for a neat, comfortable appearance.',
  },
  {
    id: 'nail-clipping',
    icon: '🐾',
    title: 'Nail Clipping',
    description: 'Safe and careful nail trimming.',
  },
  {
    id: 'ear-cleaning',
    icon: '👂',
    title: 'Ear Cleaning',
    description: 'Gentle cleaning to maintain ear hygiene.',
  },
  {
    id: 'paw-hygiene',
    icon: '🧼',
    title: 'Paw & Hygiene Care',
    description: 'Detailed cleaning and grooming of paws and other hygiene-sensitive areas.',
  },
  {
    id: 'de-shedding',
    icon: '🪮',
    title: 'De-shedding',
    description: 'Professional removal of loose undercoat and excess shedding.',
  },
  {
    id: 'puppy-grooming',
    icon: '🐕',
    title: 'Puppy Grooming',
    description: 'Gentle grooming sessions designed specifically for young pets.',
  },
];

export const whyUs = [
  { icon: '❤️', title: 'Gentle Handling', text: "Your pet's comfort comes first." },
  { icon: '✂️', title: 'Professional Grooming', text: 'Careful grooming tailored to your pet.' },
  { icon: '🧼', title: 'Clean & Hygienic', text: 'A clean environment for every grooming session.' },
  { icon: '👨‍👩‍👧', title: 'Pet-Friendly Team', text: 'Experienced staff who understand pets.' },
  { icon: '💰', title: 'Reasonable Pricing', text: 'Quality grooming without unnecessary expense.' },
  { icon: '📍', title: 'Convenient Nizampet Location', text: 'Easy access for pet parents nearby.' },
];

// Real snippets only — do not fabricate testimonials.
export const reviews = [
  { text: 'Here well trained staff good experience', source: 'Google Review' },
  { text: 'Nice hair cut, very reasonable prices', source: 'Google Review' },
];

export const faqs = [
  {
    q: 'Do I need to book an appointment?',
    a: 'We recommend booking in advance so we can reserve a slot for your pet and keep wait times short. You can request an appointment through this website, by phone, or on WhatsApp.',
  },
  {
    q: 'What breeds of dogs do you groom?',
    a: 'We groom dogs of all breeds and coat types, from small breeds to large ones. If you have questions about your specific breed, please contact us and we will be happy to help.',
  },
  {
    q: 'Do you groom cats too?',
    a: 'Yes, we groom cats as well as dogs. Please let us know your pet type when you request an appointment so we can prepare accordingly.',
  },
  {
    q: 'How long does grooming take?',
    a: 'Grooming time depends on your pet\u2019s size, coat and the services chosen. Please contact us for an estimate for your pet.',
  },
  {
    q: 'Can you handle nervous or difficult pets?',
    a: 'Our team focuses on gentle, patient handling to keep pets as comfortable as possible. If your pet is anxious, let us know in advance so we can plan the session with extra care.',
  },
  {
    q: "What should I bring for my pet's grooming session?",
    a: 'Please contact us before your visit and we will let you know anything specific to bring for your pet.',
  },
  {
    q: 'How much does grooming cost?',
    a: 'Pricing varies by pet, coat and services. Please contact us for current pricing and availability.',
  },
  {
    q: 'Do you provide puppy grooming?',
    a: 'Yes. We offer gentle grooming sessions designed specifically for young pets. Please contact us for current pricing and availability.',
  },
];

export const petTypes = ['Dog', 'Cat', 'Other'];

export const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
];

// Gallery images — replace src with your own /gallery/*.jpg files any time.
export const gallery = [
  { src: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&q=70', alt: 'Freshly groomed fluffy dog', tall: true },
  { src: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?w=800&q=70', alt: 'Happy dog after grooming' },
  { src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=70', alt: 'Groomed dog portrait' },
  { src: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=70', alt: 'Fluffy cat after grooming', tall: true },
  { src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=70', alt: 'Golden retriever clean coat' },
  { src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=800&q=70', alt: 'Well-groomed dog smiling' },
  { src: 'https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800&q=70', alt: 'Small dog freshly bathed' },
  { src: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=800&q=70', alt: 'Cat being groomed gently', tall: true },
];

// Before / After pairs — swap for real business photos when available.
export const beforeAfter = [
  {
    before: 'https://images.unsplash.com/photo-1587764379873-97837921fd44?w=900&q=70',
    after: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=70',
    label: 'Fluffy coat, freshly styled',
  },
  {
    before: 'https://images.unsplash.com/photo-1544568100-847a948585b9?w=900&q=70',
    after: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=900&q=70',
    label: 'Long-haired to neatly trimmed',
  },
];
