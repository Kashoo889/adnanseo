import type { StaticImageData } from "next/image";
import heroImg from "@/assets/hero-main.jpg";
import householdImg from "@/assets/service-household.jpg";
import villaImg from "@/assets/service-villa.jpg";
import officeImg from "@/assets/service-office.jpg";
import teamImg from "@/assets/team.jpg";

export type BlogAuthor = {
  name: string;
  role: string;
  avatar?: StaticImageData;
};

export type BlogCallout = {
  type: "tip" | "info" | "warning";
  title: string;
  text: string;
};

export type BlogTable = {
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  callout?: BlogCallout;
  bulletPoints?: string[];
  image?: StaticImageData;
  imageAlt?: string;
  imageCaption?: string;
  table?: BlogTable;
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Guides & Tips" | "Moving & Tenancy" | "Villa & Garden" | "Commercial & Office" | "Eco & Recycling";
  coverImage: StaticImageData;
  coverImageAlt: string;
  publishedAt: string; // ISO date string "YYYY-MM-DD"
  modifiedAt?: string;
  readingTime: string;
  author: BlogAuthor;
  tags: string[];
  keyTakeaways?: string[];
  sections: BlogSection[];
  faqs?: BlogFaq[];
  relatedSlugs?: string[];
  seoTitle?: string;
  seoDescription?: string;
};

export const defaultAuthor: BlogAuthor = {
  name: "Dubai Junk Collection Editorial Team",
  role: "Operations & Pricing Specialists",
  avatar: teamImg,
};

export const blogCategories = [
  "All",
  "Guides & Tips",
  "Moving & Tenancy",
  "Villa & Garden",
  "Commercial & Office",
  "Eco & Recycling",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

// Active blog posts
export const blogPosts: BlogPost[] = [
  {
    slug: "dubai-junk-removal-cost-guide",
    title: "Dubai Junk Removal Cost Guide: Realistic Pricing & Truck Load Rates",
    excerpt:
      "Understand how junk removal pricing works in Dubai. From single sofa pickups to full 3-ton truckloads, explore realistic rate breakdowns, access factors, and how to avoid hidden disposal fees.",
    category: "Guides & Tips",
    coverImage: householdImg,
    coverImageAlt: "Residential junk removal truck loading furniture and household items in Dubai",
    publishedAt: "2026-08-30",
    readingTime: "7 min read",
    author: defaultAuthor,
    tags: ["Junk Removal Cost", "Pricing Guide", "Dubai Clearance", "Truck Load Rates", "Furniture Disposal Cost"],
    seoTitle: "Dubai Junk Removal Cost Guide: Realistic Pricing & Truck Load Rates",
    seoDescription:
      "How much does junk removal cost in Dubai? Get realistic pricing for single furniture pickups, half-truck loads, and full villa clearances with zero hidden fees.",
    keyTakeaways: [
      "Junk removal in Dubai is priced primarily by truck load volume (quarter, half, or full 3-ton truck) rather than hourly rates.",
      "Single-item pickups (such as a sofa or mattress) typically range from AED 150 to AED 250 across central Dubai communities.",
      "Full 3-ton truck clearances for apartments or villas range between AED 850 and AED 1,400, including labor, disassembly, and disposal.",
      "Reputable clearance companies provide fixed upfront quotes via WhatsApp photos, eliminating on-site price renegotiations.",
    ],
    sections: [
      {
        heading: "How Much Does Junk Removal Cost in Dubai?",
        paragraphs: [
          "Junk removal in Dubai typically costs between AED 150 for a single bulky item and AED 850 to AED 1,400 for a full 3-ton truckload. Pricing is determined by total volume, crew labor for dismantling, building access logistics, and municipal disposal fees.",
          "Unlike standard moving companies that charge by the hour, professional junk collection teams operate on fixed volume tiers. This transparent structure ensures that whether a clearance takes 45 minutes or two hours, your agreed price remains unchanged.",
        ],
        callout: {
          type: "tip",
          title: "Upfront Pricing Guarantee",
          text: "Always request an all-inclusive quote covering crew labor, stairs/service elevator transit, vehicle transportation, and legal municipality disposal fees before booking.",
        },
      },
      {
        heading: "Average Junk Removal Price Tiers by Volume",
        paragraphs: [
          "To help budget your upcoming home handover, office relocation, or seasonal decluttering, the table below outlines typical volume tiers, load capacities, and average market pricing across Dubai:",
        ],
        table: {
          caption: "Estimated Dubai Junk Removal Costs by Truck Load Capacity",
          headers: ["Truck Load Tier", "Approximate Volume", "Typical Items Included", "Estimated Cost (AED)"],
          rows: [
            ["Single Bulky Item", "1–2 cubic yards", "1 Mattress, 2-seater sofa, or washing machine", "AED 150 – 250"],
            ["Quarter Truck (1/4)", "3–4 cubic yards", "Dining table with chairs + 4–6 storage boxes", "AED 300 – 450"],
            ["Half Truck (1/2)", "6–8 cubic yards", "1 Bedroom set (bed frame, mattress, wardrobe, dresser)", "AED 500 – 750"],
            ["Three-Quarter (3/4)", "9–11 cubic yards", "2-Bedroom apartment partial cleanout + appliances", "AED 750 – 950"],
            ["Full 3-Ton Truck", "12–15 cubic yards", "Complete multi-room apartment or garden & garage cleanout", "AED 850 – 1,400+"],
          ],
        },
      },
      {
        heading: "Key Factors That Influence Clearance Costs",
        paragraphs: [
          "While volume forms the foundation of any estimate, four specific operational factors directly influence the final quote for jobs in Dubai:",
        ],
        bulletPoints: [
          "Item Weight & Material Density: Dense construction timber, concrete rubble, and heavy metal safes require specialized handling compared to lightweight flatpack furniture.",
          "Dismantling & Technical Disassembly: Multi-door built-in wardrobes, complex bunk beds, and wall-anchored consoles requiring power tools add labor time.",
          "Building Access & Lift Availability: Tower access requiring long basement corridor pushes or walk-ups without a service elevator can affect crew allocation.",
          "Community Location & Gate Permits: Properties located in gated master developments (such as Arabian Ranches or Damac Hills) require advance security gate registration.",
        ],
        image: teamImg,
        imageAlt: "Uniformed Dubai Junk Collection crew dismantling and wrapping bulky furniture for safe transit",
        imageCaption: "Professional crews arrive with protective blankets and cordless power tools to dismantle oversized items on-site.",
      },
      {
        heading: "The Real Truth About 'Free Junk Removal' Services in Dubai",
        paragraphs: [
          "You have likely encountered advertisements offering 'free junk collection' across Dubai. While appealing at first glance, free services operate on a strict resale model. These operators only take items with immediate secondhand resale value (like working high-end refrigerators or mint-condition solid wood tables).",
          "When free collectors arrive, they frequently cherry-pick the valuable items and leave damaged mattresses, broken wardrobes, and general rubbish behind. Worse, unlicensed scavengers have been known to dump unwanted leftovers in open desert plots, exposing property owners to steep municipal fines under local environmental regulations.",
          "A licensed, fixed-price clearance service guarantees 100% removal of everything you specify, followed by responsible recycling and charitable donation.",
        ],
        callout: {
          type: "warning",
          title: "Avoid Illegal Dumping Penalties",
          text: "Under Dubai Municipality Order No. 11/2003, illegal dumping of bulky waste in public areas or empty plots carries fines starting from AED 500 up to AED 50,000.",
        },
      },
      {
        heading: "How to Get an Instant Fixed Quote via WhatsApp",
        paragraphs: [
          "Getting an accurate quote does not require waiting for an on-site visit. The fastest and most convenient method is sending photos or a short video of the items you need removed directly to our team via WhatsApp.",
          "Within a few minutes, our dispatch coordinators assess the required truck capacity and reply with a transparent, fixed price. Once confirmed, you can choose a convenient morning, afternoon, or evening slot, including same-day service across all 49 Dubai communities.",
        ],
      },
    ],
    faqs: [
      {
        question: "How is junk removal priced in Dubai?",
        answer:
          "Junk removal is priced primarily by volume (the portion of a 3-ton truck your items occupy), starting from AED 150 for single items up to AED 1,400 for full truckloads, including labor and disposal fees.",
      },
      {
        question: "Are there extra charges for stairs or elevator transit?",
        answer:
          "No. Reputable services provide all-inclusive fixed quotes that account for elevator transit, hallway carrying, and loading without adding surprise surcharges on completion.",
      },
      {
        question: "Can I get a same-day junk removal pickup in Dubai?",
        answer:
          "Yes. Same-day pickups are available throughout Dubai. Messaging clear photos of your items on WhatsApp allows the dispatch team to allocate the nearest active truck immediately.",
      },
      {
        question: "What happens to the items collected?",
        answer:
          "Usable furniture and working appliances are separated for charity donation, metals and plastics are routed to certified UAE recyclers, and non-recyclables are processed at licensed municipal facilities.",
      },
      {
        question: "Do I need to dismantle furniture before the team arrives?",
        answer:
          "No. Uniformed clearance crews arrive equipped with power tools and handle the complete dismantling of wardrobes, bed frames, and tables directly inside your home.",
      },
    ],
    relatedSlugs: [],
  },
];

// Helper Functions
export const getAllPosts = (): BlogPost[] => {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((p) => p.slug === slug);
};

export const getAllPostSlugs = (): string[] => {
  return blogPosts.map((p) => p.slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return getAllPosts();
  return getAllPosts().filter((p) => p.category === category);
};

export const getRelatedPosts = (currentSlug: string, limit = 2): BlogPost[] => {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const explicit = current.relatedSlugs
      .map((slug) => getPostBySlug(slug))
      .filter((p): p is BlogPost => Boolean(p));
    if (explicit.length > 0) return explicit.slice(0, limit);
  }

  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
};
