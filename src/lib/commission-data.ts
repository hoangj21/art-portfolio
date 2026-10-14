export interface CommissionExample {
  src: string;
  w: number;
  h: number;
}

export interface Commission {
  name: string;
  price: string;
  desc: string;
  includes: string;
  addons?: string;
  examples: CommissionExample[];
}

export const commissions: Commission[] = [
  {
    name: "Sketch & Line Art",
    price: "$20 – $45",
    desc: "Cleaned-up digital sketch or line art — expression sheets, character studies, single-figure portraits. Great for quick OC references.",
    includes: "Includes: rough approval, final cleaned file (digital scan or original)",
    examples: [
      { src: "/gallery/Sketches/Madoka_2_3_26.webp", w: 1080, h: 1350 },
      { src: "/gallery/Sketches/Mami_3-16-26.webp", w: 1080, h: 1350 },
    ],
  },
  {
    name: "Colored Bust",
    price: "$30 – $55",
    desc: "Portrait/head shot with a solid color or gradient background. If you want a profile picture/icon commission, this may be the option for you.",
    includes: "Includes: sketch approval, final high-res file",
    examples: [
      { src: "/gallery/Illustration/Alina_3-17-25_preprocess.webp", w: 1856, h: 2464 },
      { src: "/gallery/Illustration/CyrusExpressions_3-8-25.webp", w: 900, h: 1237 },
    ],
  },
  {
    name: "Colored Half Body",
    price: "$55 – $85",
    desc: "Colored half body shot with either solid color, gradient, or simple background.",
    includes: "Includes: sketch approval, final high-res file",
    examples: [
      { src: "/gallery/Illustration/RoveltanTestF_10_21_23.webp", w: 3281, h: 4219 },
      { src: "/gallery/Illustration/Freiska.webp", w: 1080, h: 1080 },
    ],
  },
  {
    name: "Full Illustration",
    price: "$120 – $200+",
    desc: "Full character in environment. Describe the setting, action, or pose. Price varies by complexity and commercial use.",
    includes: "Includes: sketch approval, color comp, final high-res file",
    addons: "+$30 complex backgrounds",
    examples: [
      { src: "/gallery/Illustration/Mirror_10_9_24_1080.webp", w: 1080, h: 1209 },
      { src: "/gallery/Illustration/Marcin_12_27_24_post.webp", w: 1920, h: 2400 },
      { src: "/gallery/Illustration/SecretSanta_Mocch.webp", w: 2647, h: 3299 },
      { src: "/gallery/Illustration/AutumnDays.webp", w: 1080, h: 1350 },
    ],
  },
  {
    name: "Poster / Graphic Illustration",
    price: "$80 – $150",
    desc: "Stylized poster or graphic illustration — gig posters, cover art, editorial illustrations, or bold graphic compositions. Heavy on mood, typography integration, and visual impact.",
    includes: "Includes: concept sketch, color comp, final high-res file (print-ready on request)",
    addons: "+$25 custom lettering/typography · +$30 additional figures · +$20 print-ready CMYK conversion",
    examples: [
      { src: "/gallery/Illustration/Xeno_8_27_24_r.webp", w: 1080, h: 1310 },
      { src: "/gallery/Ink/OvSulfur_3_7_24.webp", w: 1099, h: 1491 },
    ],
  },
  {
    name: "Comic Page(s)",
    price: "$80 – $150",
    desc: "Price per page. Base rate for b/w linework. Discount packages available for multi-page orders.",
    includes: "Includes: thumbnail layout, pencils, final inks",
    addons: "+$20 simple coloring · +$45 complex coloring · +$30 complex backgrounds",
    examples: [
      { src: "/gallery/Comics/HayesCyrus_pg1_5_8_23_compress.webp", w: 2000, h: 2500 },
      { src: "/gallery/Comics/HayesCyrus_pg2_5_11_23_compress.webp", w: 2000, h: 2500 },
      { src: "/gallery/Comics/Catpaku 1 edit.webp", w: 1080, h: 1350 },
      { src: "/gallery/Comics/Catpaku 2 edit.webp", w: 1080, h: 1350 },
    ],
  },
  {
    name: "Environment / Background",
    price: "$60 – $110",
    desc: "Environments with no characters. Cityscapes, interiors, landscapes, sci-fi settings. For character inclusion, see Full Illustration.",
    includes: "Includes: rough comp, final high-res file",
    examples: [
      { src: "/gallery/Illustration/BgPipelineTests_Joanna_Jungle1_combinedlayers.webp", w: 5740, h: 1080 },
    ],
  },
];
