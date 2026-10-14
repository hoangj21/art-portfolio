export interface GalleryPiece {
  cat: "digital" | "sequential" | "ink" | "photography" | "animation";
  src: string;
  w: number;
  h: number;
  title?: string;
  video?: boolean;
}

export const pieces: GalleryPiece[] = [
  // ── Comics / Sequential Art ──────────────────────────────────────
  {
    cat: "sequential",
    src: "/gallery/Comics/HayesCyrus_pg1_5_8_23_compress.webp",
    w: 2000, h: 2500,
    title: "Hayes pg. 1",
  },
  {
    cat: "sequential",
    src: "/gallery/Comics/HayesCyrus_pg2_5_11_23_compress.webp",
    w: 2000, h: 2500,
    title: "Hayes pg. 2",
  },

  // ── Digital Illustration ─────────────────────────────────────────
  {
    cat: "digital",
    src: "/gallery/Illustration/HayesCity.webp",
    w: 4000, h: 4000,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Xeno_8_27_24_r.webp",
    w: 1080, h: 1310,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/CyrusRound2_7_6_23 compress.webp",
    w: 1080, h: 1080,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Alina_3-17-25_preprocess.webp",
    w: 1856, h: 2464,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Alina_12_21_24.webp",
    w: 1080, h: 1376,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Marcin_12_27_24_post.webp",
    w: 1920, h: 2400,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/FleshWoman_7-20-26.webp",
    w: 3000, h: 3750,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Curly_11_22_24_1080.webp",
    w: 1080, h: 1209,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Mirror_10_9_24_1080.webp",
    w: 1080, h: 1209,
  },
  {
    cat: "sequential",
    src: "/gallery/Comics/Catpaku 1 edit.webp",
    w: 1080, h: 1350,
    title: "Star Girl 1",
  },
  {
    cat: "sequential",
    src: "/gallery/Comics/Catpaku 2 edit.webp",
    w: 1080, h: 1350,
    title: "Star Girl 2",
  },
  {
    cat: "sequential",
    src: "/gallery/Comics/Catpaku 3 edit alt.webp",
    w: 1080, h: 1350,
    title: "Star Girl 3",
  },
  {
    cat: "sequential",
    src: "/gallery/Comics/6_14_23_Cyrus_Round1_compress.webp",
    w: 1080, h: 1279,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Opposites_11_6_23_WIPFlats.webp",
    w: 3889, h: 5000,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/OppositesBack_11_6_23.webp",
    w: 3889, h: 5000,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/RoveltanTestF_10_21_23.webp",
    w: 3281, h: 4219,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Telephone_9_17_23_finished_edit.webp",
    w: 1945, h: 2500,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/SecretSanta_Mocch.webp",
    w: 2647, h: 3299,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Maizie.webp",
    w: 1734, h: 1950,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Anatoly military portrait red.webp",
    w: 1080, h: 1259,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/AutumnDays.webp",
    w: 1080, h: 1350,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Freiska.webp",
    w: 1080, h: 1080,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/CyrusExpressions_3-6-25.webp",
    w: 2347, h: 2435,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/CyrusExpressions_3-8-25.webp",
    w: 900, h: 1237,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/CyrusRefFlats.webp",
    w: 4039, h: 2813,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/OvSulfur_3_7_24.webp",
    w: 1099, h: 1491,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Umi_BG_PipelineTests_Joanna-2-02-25_riverWIP.webp",
    w: 1920, h: 1080,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/BgPipelineTests_Joanna_Jungle1_combinedlayers.webp",
    w: 5740, h: 1080,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Madoka_2_3_26.webp",
    w: 1080, h: 1350,
  },
  {
    cat: "digital",
    src: "/gallery/Illustration/Mami_3-16-26.webp",
    w: 1856, h: 2464,
  },

  // ── Animation & Process ───────────────────────────────────────────
  {
    cat: "animation",
    src: "/gallery/Illustration/AlinaBlink_8-10-25.mp4",
    w: 1280, h: 1230,
    video: true,
  },
  {
    cat: "animation",
    src: "/gallery/Illustration/Alina_9-12-25.mp4",
    w: 1080, h: 1432,
    video: true,
  },

  // ── Ink & Traditional ────────────────────────────────────────────
  {
    cat: "ink",
    src: "/gallery/Ink/MentalCruelty_3_6_24.webp",
    w: 1890, h: 2415,
  },
  {
    cat: "ink",
    src: "/gallery/Ink/OvSulfur_3_7_24.webp",
    w: 1099, h: 1491,
  },
  {
    cat: "ink",
    src: "/gallery/Ink/PleinAirApril_2026.webp",
    w: 3184, h: 4000,
  },

  // ── Photography ──────────────────────────────────────────────────
  {
    cat: "photography",
    src: "/gallery/Photos/20260502-IMG_0440 (1).webp",
    w: 5352, h: 3568,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/20260502-IMG_1568.webp",
    w: 6000, h: 4000,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/20260502-IMG_1704 (1).webp",
    w: 4000, h: 6000,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/20260502-IMG_1853 (1).webp",
    w: 4000, h: 6000,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_0411.webp",
    w: 4272, h: 2848,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_0458.webp",
    w: 3940, h: 3940,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_0536-Edit.webp",
    w: 4175, h: 3022,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_0607.webp",
    w: 2806, h: 3487,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_0677.webp",
    w: 4147, h: 2765,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_0853.webp",
    w: 4050, h: 2748,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_1940-2.webp",
    w: 2848, h: 3953,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2041.webp",
    w: 4267, h: 2827,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2048.webp",
    w: 4272, h: 2848,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2124.webp",
    w: 4272, h: 2848,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2214.webp",
    w: 4219, h: 2813,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2366.webp",
    w: 4272, h: 2848,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2378.webp",
    w: 4272, h: 2848,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2399.webp",
    w: 4272, h: 2848,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2407.webp",
    w: 4226, h: 2817,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2427.webp",
    w: 4272, h: 2848,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2506-2.webp",
    w: 4272, h: 2848,
  },
  {
    cat: "photography",
    src: "/gallery/Photos/IMG_2520.webp",
    w: 3508, h: 3508,
  },
];

export const catLabels: Record<GalleryPiece["cat"], string> = {
  digital: "Digital Illustration",
  sequential: "Sequential Art",
  ink: "Ink & Traditional",
  photography: "Photography",
  animation: "Animation & Process",
};

export type CategoryFilter = GalleryPiece["cat"] | "all";
