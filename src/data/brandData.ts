export const brandColors = {
  navy: '#1A365D',
  teal: '#0EA5E9',
  gold: '#D4AF37',
  white: '#FFFFFF',
  darkBg: '#0F172A',
  lightBg: '#F8FAFC',
} as const;

export const tabs = ['Logo', 'Concept', 'Details'] as const;

export type TabId = (typeof tabs)[number];

export const brandInfo = {
  name: 'Sri Guru Optics',
  tagline: 'Clarity Through Wisdom',
  description:
    'A trusted optical store offering premium spectacles, precision eye checkups, and comprehensive vision care services. Rooted in the wisdom of traditional care and powered by modern optometry.',
  services: [
    'Spectacles & Eyewear Sales',
    'Eye Power Measurement',
    'Comprehensive Eye Checkups',
    'Lens Fitting & Adjustments',
    'Prescription Glasses',
    'Sunglasses & Blue-cut Lenses',
  ],
};

export const conceptData = {
  concept: 'Clarity Through Wisdom',
  symbolism: [
    {
      element: 'Spectacles Frame',
      meaning:
        'Represents clarity of vision — both literal and metaphorical. The dual lenses symbolize precision and balance.',
    },
    {
      element: 'Om-Infinity Bridge',
      meaning:
        'The curved bridge blends "Guru" (spiritual teacher/wisdom) with "Optics" (science). The infinity loop suggests endless care and timeless knowledge.',
    },
    {
      element: 'Lens Flare / Gleam',
      meaning:
        'A spark of insight and the light of understanding. Represents the moment vision becomes clear.',
    },
    {
      element: 'Gold Accent',
      meaning:
        'Gold symbolizes premium quality, trust, and the precious nature of eyesight — "Guru" as a treasure of wisdom.',
    },
    {
      element: 'Navy & Teal',
      meaning:
        'Navy = trust, stability, professionalism (healthcare). Teal = clarity, modernity, healing.',
    },
  ],
};
