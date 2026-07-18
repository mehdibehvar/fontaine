/**
 * Seed product data for the storefront shop and product detail pages.
 *
 * Fontaine sells RAW, WHOLE DRIED HERBS only — no pills, tinctures, blends,
 * or processed remedies. All copy is framed as traditional/historical use,
 * never definitive medical claims. Prices stored in EUR (already converted to
 * display units here for the storefront seed data).
 */

export interface ProductVariant {
  weight: string;
  priceCents: number;
}

export interface ProductSeed {
  id: string;
  slug: string;
  name: string;
  family: string;
  tagline: string;
  priceCents: number;
  image: string;
  imageAlt: string;
  badge?: string;
  variants?: ProductVariant[];
  description?: string;
  origin?: string;
  benefits?: string;
  brewing?: string;
  rating?: number;
  reviewCount?: number;
}

export const formatEur = (cents: number): string =>
  new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100);

export const products: ProductSeed[] = [
  {
    id: 'borage',
    slug: 'dried-borage-flower',
    name: 'Dried Borage Flower',
    family: 'Boraginaceae',
    tagline: 'Restorative',
    priceCents: 4200,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuANvey9TU2fH65sZifo8d4HlwP8i0gEPLIsVrrjeiY-cYEHCW8iq-PE0qoz4CGEaBFnB6s5nJP0806EiJMG9haYdB8zHVm3jV7V9dgpjMLg5AE1KOofa7qSaJZyNOCFNRy38_9xj2g1g_VXJelPswUvHrMtA8WvZ8Xq4IVkPN15ajFi5b3n7-hCsqY-7CwvCsBbjWu54sfaK9WoDxtcSiTWNh77myFd3_QTwp9jv8G0h_f_ugo4vXhopjAXtXJ_2LAQSWOMwhaUFJQ',
    imageAlt:
      'Close-up macro photography of dried borage flowers with deep purple and blue petals on a minimalist dark stone background.',
    badge: 'Rare Batch',
    variants: [
      { weight: '50g', priceCents: 4200 },
      { weight: '100g', priceCents: 7800 },
    ],
    description:
      'A celestial blue bloom known for its profound capacity to restore the spirit. Wild-harvested at peak potency, these flowers offer a gentle, grounding ritual for the heart and skin.',
    origin:
      'Wild-harvested in the high Alborz mountains at altitudes exceeding 2,000 meters. Hand-picked during the early morning dew to preserve the essential fatty acids and delicate aromatic profile.',
    benefits:
      'Traditional use for cardiovascular support and skin health. Rich in Gamma-Linolenic Acid (GLA), it is historically favored for its calming effect on the nervous system and inflammatory response.',
    brewing:
      'Steep 3 whole flowers in 200ml of 85°C water for 5 minutes. The infusion will transition from a delicate yellow to a faint blue-tinted gold. Excellent as a nightly restorative ritual.',
    rating: 4.9,
    reviewCount: 42,
  },
  {
    id: 'thyme',
    slug: 'whole-thyme',
    name: 'Whole Thyme',
    family: 'Lamiaceae',
    tagline: 'Clarifying',
    priceCents: 2800,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxQDvj2Lyt6MRjOBq2WLEadmDvWTb5M4l8D2ww7UKhs-0PgeE-L4yA59ZH3PK-9SO1P2UXqlgfZf5amMH6SmSLKe6ZMtmK6igxCCOL1u6ZwiAibsjqVM8ShpYPAPx2wSqxd6e15x3gMEN2oy_UUgSEi5DS0gQfCZboDs3p-M1rKQauzvD7-PsJVYrSFH8iFlWPvDGFXTGmXhmNgzJLrGqtU7b-HzTjYXXvdB0ESLaOeN4Vts_Ogry5d_e3NjTWRMhMspD7sVTotZM',
    imageAlt:
      'High-end studio shot of whole thyme sprigs with earthy textures on a dark charcoal background.',
    variants: [
      { weight: '30g', priceCents: 2800 },
      { weight: '50g', priceCents: 4200 },
    ],
  },
  {
    id: 'lavender',
    slug: 'dried-lavender',
    name: 'Dried Lavender',
    family: 'Lamiaceae',
    tagline: 'Deep Calm',
    priceCents: 3400,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDmJAxm63S9DXMDT176Udlm6VVVpxxa-Rf5gvY5g-gM5uMPYOXZm6B95owTbv4UzgB08m0QDqiH1b2XDEcDLksDlzPgc1LKVuvfsg_jWISvU5yEVRvWdY8bnM2z9F1mTZI9hgW5B_8HDAR3jqbP4_VoHWf0jpvizDhFmYttM_xRWwzGFMXUOAUXDC5mmBqYkXBTVs18I-KJ0aMf3HM5S_nkineHKUoAToas5CVkpIjS4h0zJHJbSjz9ycZjmG82O1caeysNUMrmCnc',
    imageAlt:
      'Exquisite dried lavender buds in a heap, vibrant violet and soft gray tones on a dark textured background.',
    variants: [
      { weight: '30g', priceCents: 3400 },
      { weight: '50g', priceCents: 5200 },
    ],
  },
  {
    id: 'sage',
    slug: 'wild-sage',
    name: 'Wild Sage',
    family: 'Lamiaceae',
    tagline: 'Sacred',
    priceCents: 3200,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAEx1luArzYiEtv5uJfTIVbNAI1FbIhkO2cuH_hb3ABYYRMlOgNaoBjTzi8htZ_tnGe0ZjWx7PPPaM-czOvFZgMST1E1J6hTOCj6sb_4UhfIY88sLHX-EVmbk4HkQGjrcR5SVQeZPxzcU2QZXm8ZZxxiaAxstb27GoidJaCV_wB_wN7_jonupOsgcX9lAiL-L8Iutqo0UhXAG5yq5tSLk-lOHhx5JtTCVhsnRXkU1Bdl7YdiQ34wnvNXlujvUWH9eNExEcCMqga-DI',
    imageAlt:
      'Cinematic macro of wild sage leaves, fuzzy silvery-green texture on a deep warm black background.',
    variants: [
      { weight: '30g', priceCents: 3200 },
      { weight: '50g', priceCents: 4800 },
    ],
  },
  {
    id: 'rose',
    slug: 'sacred-rose',
    name: 'Sacred Rose',
    family: 'Origin: Atlas',
    tagline: 'Heart-Opening',
    priceCents: 5600,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuANOuO1-4e9smXyph9yGBrsctAcYFc9Y2isgbYoTbqqku-QhV0DZq1QqjUW-oi_rkxY0HMRCiN-19_tSPNDrhJNV9wG3SLHNp_Qx6hB5Jrs_oTV-pVUQyRbhVf28FJ87IUQFK0vT1mCtW-xTm7td7gRHt1PIi8VbiVKtELUh-ajncW3VF3i6U1X3YS4RBIMKJyvdJrDS1Jc3WZK70RDIzBV_BkP_U4mxs3ykFvF-ddxrvdAFgBoHCJFNIsicR-44K62JEN3KnyzxZw',
    imageAlt:
      'Premium botanical packaging featuring a dark glass jar with a minimalist gold foil label in a moody workshop.',
    variants: [
      { weight: '30g', priceCents: 5600 },
      { weight: '50g', priceCents: 8200 },
    ],
  },
  {
    id: 'elderberry',
    slug: 'elderberry-cluster',
    name: 'Elderberry Cluster',
    family: 'Adoxaceae',
    tagline: 'Immunity',
    priceCents: 3800,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABbsQ0pRkmwINPYcj72lptbsNFP1CoXJ25M-tong-LYWLPcTqvrlLhtX-7SmnuFKODJvkyKQAK1IhWL6Vw1ogJ3Bex0LuJP95i8ee04ZiFzVDyo8UbhErA-RFxrJIVEj2zVy68UBimgb2gD2NoPWKXqTi55OcVcyfSA_qz4JcQOoqvf56WIn5FuQf25SS_cdQ8LOI5oRwXqglfVVm3PpchXuLQRnQsHabO_OiOPjw5LKdaR5kyzXfa3EtC2u85pXm7BnY8FWTIuoM',
    imageAlt:
      'Hand-harvested dried elderberry clusters on a dark slate surface, deep indigo almost black berries.',
    variants: [
      { weight: '50g', priceCents: 3800 },
      { weight: '100g', priceCents: 6800 },
    ],
  },
];

export const getProductBySlug = (slug: string): ProductSeed | undefined =>
  products.find((p) => p.slug === slug);

export const companions: Pick<
  ProductSeed,
  'slug' | 'name' | 'family' | 'priceCents' | 'image' | 'imageAlt'
>[] = [
  {
    slug: 'wild-roman-chamomile',
    name: 'Wild Roman Chamomile',
    family: 'Soothing',
    priceCents: 3800,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvSpGaJokZM1HHYqGjX47Enx2H4WX3y18w5f-lLMkLQhLWmauPptMjS7gBEZiLKMSJYr_KbL16FvDjjGyTnE6Ssd9QirmRHtrCbZVbptpZVGBYFm4rk489WHcXecjfHQeT4xXcTSgSbq6dQ8R1ZXd46MSPOd0anSDUNDX1gH7kOYVDgutZOVufsNG4LlGQYW2FzNQpS-qaHGTcmlaxWIE-fiCYM6Y_2YbclGH45NLotDaeTUR8Fk-wnGn2obKIKcnBXDMiYZtuiqc',
    imageAlt: 'Fontaine dried chamomile heads in a minimalist dark jar.',
  },
  {
    slug: 'damask-rose-buds',
    name: 'Damask Rose Buds',
    family: 'Heart-Opening',
    priceCents: 4500,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7PmpT83fkOgNVmo5FaIIvYi8Mi4rmFekKrVCaZBa2lFtbREOUsapG7VtR7-Js0N3DrUubUJ7Wh1SCe3vk0zQSzO7tnErh1x2cLx29wQeIQtz4JkmVTHcT8OTcaQlx037x5bvY_cDLzi3FVkMvGC4oYhO-hmWL1TVy37a9wgYCAj7D-DuufoI9xj7X_SFFbshxZyyhqKia2bSmPFIOgf3uNnSDkGsDWKo3n3GUnjxjWLbNoukO6ICmpY97D9R94EKoVL6AgrMNe7s',
    imageAlt: "Fontaine dried rose buds in a matte charcoal vessel.",
  },
  {
    slug: 'high-altitude-lavender',
    name: 'High Altitude Lavender',
    family: 'Deep Calm',
    priceCents: 3600,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuWWABf7fj5Xf-1E7qwrrrekfv98m4TRk-vVZGQHEOoKnBaobByeIXuJWQfEGmy3zVAE48seeyKF1JbmoSAhEUExH5OuEuMQ4qBiAUhpafaZ-edDmJO-X_I_BD4jc_Lkmp9QtRvQ9LJHXsJydWYlRA4OKsfdSUzmjy2c8tqxjrj0RM8obUx3r7zzyOFJofDKFCT7dRqUsEjLVJ2zoKeVDuJD2aJFOPwBfOQJA3yVJG6bkbSCY2YKjr3VQEiXZwkUxOqJoIMrqnGnM',
    imageAlt: "Fontaine lavender spike in a sleek black container.",
  },
  {
    slug: 'golden-calendula',
    name: 'Golden Calendula',
    family: 'Revitalizing',
    priceCents: 3400,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_8A7VbZqyb2J3tkSwovesTEMpqPU2LnuCG_PR4AXUkhYSC_vVmYu18jQbDjbD9dXEFiFiC_jEEXB7zIZWNEXpVxspYFzJeEQC-ONp2Zfa0E8xSyQx4_DEzcgdovPQRP-y3uvkaLUSUjYrbpVXYq9XcrDRftxjecRKdhSiV-yXiCyCddgohLIuz8KE0DvnIJqiICFXd87e40g6vVrsuJE3beyHHSUcSTcHN48mWl62cViXW-3k8mCGpBmVh27sAZKDYWTRRXzb0v0',
    imageAlt: "Fontaine calendula petals in a premium jar.",
  },
];

export interface ReviewSeed {
  name: string;
  role: string;
  rating: number;
  content: string;
}

export const borageReviews: ReviewSeed[] = [
  {
    name: 'Elena M.',
    role: 'Verified Ritualist',
    rating: 5,
    content:
      "The quality of these borage flowers is unlike anything I've found in a standard apothecary. The color remains so vibrant, and the calming effect is immediate.",
  },
  {
    name: 'Julian R.',
    role: 'Apothecary Member',
    rating: 5,
    content:
      "Part of my nightly routine now. I've noticed a significant improvement in my sleep quality and a general sense of heart-centered peace.",
  },
  {
    name: 'Sofia K.',
    role: 'Verified Buyer',
    rating: 4,
    content:
      'Beautiful packaging and even more beautiful herbs. I use them in skin-soothing steam baths as well as drinking them. Pure magic.',
  },
];
