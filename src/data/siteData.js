// Centralized site content for Makeover by Renu Rani (RR Makeup Studio & Academy)
// Sourced from: client price-list, award photographs, and the client requirements PDF.
// Fields marked (placeholder) are written to be replaced once the client supplies real copy.

export const business = {
  brandName: "Makeover by Renu Rani",
  studioName: "RR Makeup Studio & Academy",
  ownerName: "Renu Rani",
  ownerTitle: "Celebrity Makeup Artist & Beauty Expert",
  tagline: "Beauty is our Passion, Perfection is our Promise",
  taglineAlt: "Beauty Is Power, A Smile Is Its Sword",
  taglineShort: "Beauty. Confidence. You.",
  phones: ["9907139205", "9165533830", "7987225556"],
  whatsapp: "9907139205",
  address: {
    line1: "CMD Chock E Plaza",
    line2: "Near Tarbahar Thana",
    city: "Bilaspur, Chhattisgarh 495001",
  },
  instagram: "https://www.instagram.com/makeover_by_renurani",
  instagramSecondary: {
    handle: "rrlehenga_studio",
    label: "Lehenga Studio (sister boutique)",
    url: "https://www.instagram.com/rrlehenga_studio",
  },
  mapsQuery: "CMD Chowk E Plaza, Near Tarbahar Thana, Bilaspur, Chhattisgarh 495001",
};

export const offers = {
  grandOpening: {
    badge: "Limited Period Offer",
    title: "Grand Opening Offer",
    subtitle: "Any Hair Length",
    price: "2999",
    priceNote: "One price for all lengths",
    chooseNote: "Choose any one hair treatment",
    treatments: [
      "Keratin Treatment",
      "Smoothening",
      "Botox Treatment",
      "Protein Treatment",
      "Nanoplastia",
      "Hair Spa & More",
    ],
    resultNote: "Beautiful, Healthy & Frizz-Free Hair",
  },
  haircut: {
    badge: "Limited Time Offer",
    title: "Hair Cut Offer",
    price: "99",
    priceNote: "Level, V, U cuts only",
    advanceCut: { label: "Advance Cut — Layer, Step", price: "199" },
  },
};

export const packages = [
  {
    tier: "Silver",
    price: "499",
    items: ["Eyebrow + Upper Lips", "Hair Cut (Level, V, U)", "Hair Wash", "Hand Wax (Normal)"],
  },
  {
    tier: "Gold",
    price: "999",
    featured: true,
    items: ["Eyebrow + Upper Lips", "Hair Cut (Layer)", "Blow Dryer", "Hair Spa", "Hand Wax (Normal)"],
  },
  {
    tier: "Diamond",
    price: "1299",
    items: [
      "Bleach",
      "Facial (Naturals, Herbal)",
      "Hair Cut (Layer / Step Cut)",
      "Hand Wax",
      "Eyebrow",
      "Upper Lips",
    ],
  },
];

export const award = {
  title: "Best Make-up Artist",
  event: "Beauty Expo & Fashion Runway Show — Season 9",
  date: "20th May 2026",
  organizer: "Savita Singh",
  location: "Ambikapur, Chhattisgarh",
  presenter: "Parth Events",
};

// (placeholder) — founding year, full story and mission/vision wording still to be confirmed by client
export const about = {
  intro:
    "Renu Rani, Celebrity Makeup Artist & Beauty Expert, built this studio on a simple belief: every face has its own kind of beauty, and the artist's job is to reveal it, not replace it. What began as a single chair has grown into a full studio and academy trusted by brides, families and performers across Bilaspur.",
  mission:
    "To give every client — bridal, party or everyday — a look that feels unmistakably their own, delivered with technique, hygiene and care worthy of the occasion.",
  highlights: [
    { label: "Best Make-up Artist", detail: "Beauty Expo & Fashion Runway Show, Season 9" },
    { label: "Studio & Academy", detail: "Makeup services plus hands-on training" },
    { label: "Bilaspur, CG", detail: "CMD Chock E Plaza, near Tarbahar Thana" },
  ],
};

export const serviceCategories = [
  {
    id: "threading-cleanup",
    label: "Threading & Cleanup",
    groups: [
      {
        title: "Threading",
        items: [
          { name: "Eyebrow", price: "30" },
          { name: "Upper Lips", price: "10" },
          { name: "Chin", price: "10" },
          { name: "Face", price: "70" },
        ],
      },
      {
        title: "Cleanup",
        items: [
          { name: "Herbal (Papaya)", price: "300" },
          { name: "Nature's Diamond", price: "400" },
          { name: "O3+ Whitening", price: "800" },
        ],
      },
      {
        title: "Bleach & Tan",
        items: [
          { name: "Bleach", price: "250" },
          { name: "D-Tan", price: "250" },
        ],
      },
    ],
  },
  {
    id: "facial",
    label: "Facial",
    groups: [
      {
        title: "Facial",
        items: [
          { name: "Herbal", price: "600" },
          { name: "Dr. Rashel", price: "600" },
          { name: "O3 Whitening", price: "1600" },
          { name: "Bio Reach Premium (Golden Glow)", price: "1200" },
          { name: "Nature's Gold", price: "900" },
          { name: "O3 Bridal Kit", price: "2600" },
          { name: "Sensitive Skin", price: "1400" },
        ],
      },
    ],
  },
  {
    id: "waxing",
    label: "Waxing",
    groups: [
      {
        title: "Normal Wax",
        items: [
          { name: "Hand Wax", price: "200" },
          { name: "Underarms", price: "100" },
          { name: "Half Leg Wax", price: "200" },
          { name: "Full Leg Wax", price: "400" },
        ],
      },
      {
        title: "Rica Wax",
        items: [
          { name: "Hand Wax", price: "350" },
          { name: "Underarms", price: "100" },
          { name: "Half Leg Wax", price: "350" },
          { name: "Full Leg Wax", price: "600" },
        ],
      },
      {
        title: "Full Body Wax & Bleach",
        items: [
          { name: "Body Wax (Rica)", price: "1500" },
          { name: "Body Wax (Normal)", price: "1300" },
          { name: "Body Bleach", price: "1500" },
          { name: "Body Polishing (Spa)", price: "1700" },
        ],
      },
    ],
  },
  {
    id: "hair",
    label: "Hair",
    groups: [
      {
        title: "Hair Wash",
        items: [
          { name: "Normal Shampoo", price: "200" },
          { name: "L'Oreal", price: "250" },
        ],
      },
      {
        title: "Hair Cut",
        items: [
          { name: "Level Cut", price: "100" },
          { name: "V / U Cut", price: "200" },
        ],
      },
      {
        title: "Hair Cut With Wash",
        items: [
          { name: "Layer Cut", price: "300" },
          { name: "Step Cut", price: "300" },
        ],
      },
      {
        title: "Hair Spa",
        items: [
          { name: "Botox", price: "399" },
          { name: "L'Oreal", price: "799" },
          { name: "Matrix", price: "599" },
        ],
      },
      {
        title: "Colour",
        items: [
          { name: "Root Touch Up", price: "700" },
          { name: "Global Hair Colour", price: "1500 – 2000" },
        ],
      },
    ],
  },
  {
    id: "hair-treatment",
    label: "Hair Treatment",
    groups: [
      {
        title: "Hair Treatment",
        items: [
          { name: "Keratin Treatment", price: "On request" },
          { name: "Smoothing", price: "On request" },
          { name: "Botox", price: "On request" },
          { name: "Protein Treatment", price: "On request" },
          { name: "Nanoplastia", price: "On request" },
        ],
      },
    ],
  },
  {
    id: "spa-mani-pedi",
    label: "Nails & Spa",
    groups: [
      {
        title: "Hands & Feet",
        items: [
          { name: "Manicure", price: "600" },
          { name: "Pedicure", price: "600" },
        ],
      },
      {
        title: "Massage",
        items: [
          { name: "Body Massage (Olive Oil)", price: "1500" },
          { name: "Head Massage (Olive Oil)", price: "349" },
        ],
      },
    ],
  },
];

// (placeholder) — client to supply 20+ real reviews per requirements doc
export const testimonials = [
  {
    name: "Client review pending",
    rating: 5,
    text: "This spot is reserved for a real client testimonial — send over names, ratings and quotes and they'll replace this card.",
    placeholder: true,
  },
  {
    name: "Client review pending",
    rating: 5,
    text: "Add Google review text here, or collect fresh ones from bridal and party clients.",
    placeholder: true,
  },
  {
    name: "Client review pending",
    rating: 5,
    text: "Aim for a mix of bridal, party and everyday-service reviews for variety.",
    placeholder: true,
  },
];

export const portfolioPlaceholders = Array.from({ length: 7 }).map((_, i) => ({
  id: `portfolio-slot-${i + 2}`,
  label: "Portfolio photo needed",
}));

export const galleryNeeds = [
  { category: "Hero Banner Images", qty: "3–5" },
  { category: "Reception Area", qty: "3–5" },
  { category: "Styling Stations", qty: "4–6" },
  { category: "Bridal Room", qty: "3–5" },
  { category: "Waiting Area", qty: "2–3" },
  { category: "Product Display", qty: "2–3" },
  { category: "Full Salon View", qty: "2–3" },
  { category: "Decoration & Ambience", qty: "4–6" },
  { category: "Staff Working", qty: "3–5" },
  { category: "Portfolio Photos", qty: "40+" },
  { category: "Team Photos", qty: "1 per staff" },
];
