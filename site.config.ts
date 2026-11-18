import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Butter & Pearls",
  tagline: "Scratch made buttercream cakes and desserts for Durham and the GTA.",
  category: "Custom cakes",
  schemaType: "Bakery",
  area: "Durham Region and GTA, ON",
  siteUrl: "https://butter-and-pearls-ca.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#5b5e58" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Cakes and desserts in Durham Region",
    headline: "Scratch made buttercream cakes, finished with care",
    subhead: "Butter & Pearls bakes celebration cakes and desserts from scratch, in buttercream only, for Durham Region and parts of the GTA. Send an Instagram message to order.",
    images: [
      { src: "/images/post-1.jpg", alt: "A buttercream celebration cake from Butter & Pearls", width: 1080, height: 1303 },
      { src: "/images/post-3.jpg", alt: "A pearl detailed cake from Butter & Pearls", width: 1080, height: 1080 },
      { src: "/images/post-4.jpg", alt: "An elegant classic buttercream cake from Butter & Pearls", width: 1080, height: 1440 },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Made from scratch, buttercream only",
    "Celebration cakes with pearl details",
    "Serving Durham Region and parts of the GTA",
    "Order by Instagram DM",
  ],

  about: {
    title: "Welcome to Butter & Pearls",
    body: [
      "Butter & Pearls bakes cakes and desserts from scratch, in buttercream only, for life's sweetest moments. Recent work has included pearl detailed celebration cakes, a classic elegant buttercream cake, a 4 layer lemon cake filled with lemon curd, and vanilla and vanilla chocolate cupcakes.",
      "Orders are being accepted by Instagram DM for Durham Region and parts of the GTA.",
    ],
    image: { src: "/images/post-3.jpg", alt: "A pearl detailed cake from Butter & Pearls", width: 1080, height: 1080 },
  },

  menu: {
    label: "Menu",
    title: "What we bake",
    variant: "list",
    showPrices: false,
    priceNote: "Send an Instagram message for a quote on your date and order.",
    groups: [
      {
        title: "Cakes",
        items: [
          { name: "Buttercream celebration cakes", description: "Including cakes with pearl details." },
          { name: "4 layer lemon cake", description: "Filled with lemon curd." },
        ],
      },
      {
        title: "Cupcakes",
        items: [
          { name: "Vanilla cupcakes" },
          { name: "Vanilla chocolate cupcakes" },
        ],
      },
    ],
    footnote: "All cakes and desserts are made from scratch, in buttercream only.",
  },

  gallery: {
    title: "Recent bakes",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1303, alt: "A buttercream celebration cake from Butter & Pearls", caption: "A celebration cake", href: "https://www.instagram.com/p/DfqU_QxpkU5/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1080, alt: "A pearl detailed cake from Butter & Pearls", caption: "Pearl details", href: "https://www.instagram.com/p/DfGEkbxm2hG/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "An elegant classic buttercream cake from Butter & Pearls", caption: "An elegant classic cake", href: "https://www.instagram.com/p/DfGEBU1m43I/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1377, alt: "A vintage style birthday cake from Butter & Pearls", caption: "Now accepting orders", href: "https://www.instagram.com/p/DfqM17uvMSc/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1080, alt: "A 4 layer lemon cake from Butter & Pearls", caption: "Lemon cake with lemon curd", href: "https://www.instagram.com/p/DbKCM6BtbVV/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1080, alt: "Vanilla and vanilla chocolate cupcakes from Butter & Pearls", caption: "Buttercream cupcakes", href: "https://www.instagram.com/p/DbJ8OcTCeXR/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "butter_and_pearls",
    embeds: ["https://www.instagram.com/p/DfqU_QxpkU5/", "https://www.instagram.com/p/DfGEkbxm2hG/", "https://www.instagram.com/p/DfGEBU1m43I/"],
  },

  order: {
    label: "How to order",
    title: "Order by Instagram DM",
    intro: "Send an Instagram message with your date and what you would like to order. Butter & Pearls serves Durham Region and parts of the GTA.",
    dmMessage: "Hi Butter & Pearls! I would like to order.\nDate needed:\nCake or desserts:",
    links: [
      { label: "Order by Instagram DM", href: "https://ig.me/m/butter_and_pearls" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I order?", a: "Send an Instagram message with your date and what you would like to order." },
    { q: "Where do you deliver or serve?", a: "Butter & Pearls is accepting orders for Durham Region and parts of the GTA." },
    { q: "What kind of cakes do you make?", a: "Cakes and desserts are made from scratch, in buttercream only. Recent work has included pearl detailed celebration cakes, a 4 layer lemon cake with lemon curd, and vanilla and vanilla chocolate cupcakes." },
  ],

  contact: {
    title: "Contact",
    area: "Durham Region and parts of the GTA, ON",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/butter_and_pearls/" }],
  },

  seo: {
    title: "Butter & Pearls | Buttercream cakes in Durham Region",
    description: "Scratch made buttercream cakes and desserts for Durham Region and parts of the GTA. Order by Instagram DM.",
    keywords: ["buttercream cakes Durham", "custom cakes GTA", "Butter and Pearls"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
