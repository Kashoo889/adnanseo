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

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  callout?: BlogCallout;
  bulletPoints?: string[];
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
  relatedSlugs?: string[];
  seoTitle?: string;
  seoDescription?: string;
};

export const defaultAuthor: BlogAuthor = {
  name: "Dubai Junk Collection Editorial Team",
  role: "Operations & Sustainability Specialists",
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

// Sample posts for template & routing verification (actual articles will be written subsequently)
export const blogPosts: BlogPost[] = [
  {
    slug: "dubai-move-out-junk-removal-guide",
    title: "The Complete Dubai Move-Out Clearance Guide: Landlord Handover Checklist",
    excerpt:
      "Avoid deposit deductions and last-minute handover delays. Learn how to plan your apartment or villa decluttering step-by-step before end-of-lease inspections.",
    category: "Moving & Tenancy",
    coverImage: householdImg,
    coverImageAlt: "Apartment move-out junk collection and furniture clearance in Dubai",
    publishedAt: "2025-01-15",
    readingTime: "5 min read",
    author: defaultAuthor,
    tags: ["Move-Out", "Tenancy Handover", "Dubai Apartments", "Furniture Clearance"],
    seoTitle: "Dubai Move-Out Clearance & Junk Removal Guide — Landlord Handover Tips",
    seoDescription:
      "A step-by-step guide to clearing your Dubai apartment or villa before handover. Learn how to book service lifts, dispose of bulky furniture, and protect your deposit.",
    keyTakeaways: [
      "Book building freight elevators at least 24–48 hours prior to handover.",
      "Landlords require all non-inventory items removed before final utility clearance.",
      "Coordinate appliance disconnects with certified technicians to prevent plumbing leaks.",
      "Schedule clearances before painting or move-out deep cleaning teams arrive.",
    ],
    sections: [
      {
        heading: "1. Timing Your Move-Out Clearance",
        paragraphs: [
          "Moving in Dubai often involves coordinated timelines between building facilities management, security desks, moving teams, and painting contractors. Leaving large furniture or unwanted household items until the final day is the most common reason tenants experience handover delays.",
          "We recommend scheduling your junk clearance 24 to 48 hours before your painting and deep cleaning contractors arrive. This provides empty, unobstructed rooms for wall inspections and touch-ups.",
        ],
        callout: {
          type: "tip",
          title: "Building Permit Tip",
          text: "Most high-rise towers in Dubai Marina, Downtown, and Business Bay require an official Move-Out Permit issued by the developer portal before security allows large clearance trucks on-site.",
        },
      },
      {
        heading: "2. Handling Bulky Furniture & Dismantling",
        paragraphs: [
          "Large flatpack wardrobes, king-size bed frames, and modular sectionals cannot be transported down passenger elevators in one piece. Trying to force oversized furniture through building corridors often leads to scuffed walls and security deposit penalties.",
          "Our clearance crew arrives equipped with cordless power tools to unbolt and dismantle multi-door wardrobes directly inside the bedroom before loading.",
        ],
        bulletPoints: [
          "Dismantle bed headboards and bed frames into manageable segments.",
          "Wrap glass table tops and mirrors in protective blankets.",
          "Unbolt wall-mounted floating consoles and TV brackets.",
          "Remove mattresses in sanitary protective covers.",
        ],
      },
      {
        heading: "3. Responsible Disposal & Donation",
        paragraphs: [
          "In alignment with Dubai Municipality's green waste diversion goals, items collected are inspected for reuse. Usable furniture in good structural condition is separated for charitable donation, while unrepairable materials are sent to certified recycling facilities.",
        ],
      },
    ],
    relatedSlugs: ["how-to-prepare-villa-garden-clearance", "responsible-e-waste-recycling-dubai"],
  },
  {
    slug: "how-to-prepare-villa-garden-clearance",
    title: "How to Prepare for a Large Villa & Garden Clearance in Dubai",
    excerpt:
      "From palm fronds and broken pergolas to garage decluttering, discover how to efficiently clear large villa plots across Dubai's gated communities.",
    category: "Villa & Garden",
    coverImage: villaImg,
    coverImageAlt: "Luxury villa garden clearance and outdoor furniture removal in Dubai",
    publishedAt: "2025-01-22",
    readingTime: "6 min read",
    author: defaultAuthor,
    tags: ["Villa Clearance", "Garden Waste", "Garage Decluttering", "Arabian Ranches", "Dubai Hills"],
    seoTitle: "How to Prepare for Villa & Garden Clearance in Dubai — Practical Guide",
    seoDescription:
      "Expert tips for clearing villa gardens, garages, and outdoor pergolas across Dubai communities like Arabian Ranches, Emirates Hills, and Al Barari.",
    keyTakeaways: [
      "Group organic garden foliage separately from treated timber and metal scrap.",
      "Notify gated community security of incoming clearance vehicles in advance.",
      "Inspect double garages for hazardous chemicals or paints requiring municipal disposal.",
      "Take advantage of high-tonnage flatbed vehicles for single-trip cleanouts.",
    ],
    sections: [
      {
        heading: "1. Managing Large Volumes of Green Garden Waste",
        paragraphs: [
          "Dubai's hot summer months and periodic winter pruning produce massive volumes of date palm fronds, bougainvillea cuttings, and dry tree limbs. Leaving organic waste piled near property walls can attract pests and violates community guidelines in Emaar, Nakheel, and Damac estates.",
          "A dedicated high-capacity green waste truck can clear multiple cubic yards of foliage in a single visit, hauling it directly to municipal green composting stations.",
        ],
      },
      {
        heading: "2. Teardown of Weathered Pergolas & Patio Sets",
        paragraphs: [
          "Years of intense sun exposure often warp wooden gazebos, crack composite decking, and rust metal barbecue grills. Our technicians safely unbolt and disassemble outdoor shade structures on-site.",
        ],
        callout: {
          type: "info",
          title: "Community Gate Pass Note",
          text: "When booking a villa clearance in gated enclaves like Arabian Ranches, Jumeirah Golf Estates, or Damac Hills, provide your sub-community name and villa number so our drivers register seamlessly at security gates.",
        },
      },
    ],
    relatedSlugs: ["dubai-move-out-junk-removal-guide", "responsible-e-waste-recycling-dubai"],
  },
  {
    slug: "responsible-e-waste-recycling-dubai",
    title: "Responsible Electronic Waste (E-Waste) & Appliance Disposal in Dubai",
    excerpt:
      "What happens to old computers, washing machines, and obsolete office tech? A guide to safe, certified electronics recycling across the UAE.",
    category: "Eco & Recycling",
    coverImage: officeImg,
    coverImageAlt: "Electronic waste disposal and computer recycling in Dubai",
    publishedAt: "2025-02-05",
    readingTime: "4 min read",
    author: defaultAuthor,
    tags: ["E-Waste", "Recycling", "Office Decommissioning", "Appliances", "Sustainability"],
    seoTitle: "E-Waste & Appliance Recycling in Dubai — Responsible Electronics Disposal",
    seoDescription:
      "Learn how old computers, servers, and household appliances are safely recycled in Dubai in accordance with Dubai Municipality environmental standards.",
    keyTakeaways: [
      "Electronics contain hazardous heavy metals that must never enter general municipal landfills.",
      "Certified e-waste recyclers recover precious metals and raw polymers for reuse.",
      "Commercial entities receive formal destruction certificates for IT audits.",
      "Kitchen appliances must be safely disconnected from water and electrical mains prior to transport.",
    ],
    sections: [
      {
        heading: "1. Why Certified E-Waste Recycling Matters",
        paragraphs: [
          "Electronic devices contain a mix of valuable materials (copper, aluminum, gold) and potentially harmful elements (lead, mercury, cadmium). Disposing of old screens, computer towers, and household white goods in general trash bins is illegal in Dubai and harmful to local ecology.",
          "Dubai Junk Collection partners with licensed UAE recycling facilities to guarantee zero-landfill diversion for obsolete technology and broken appliances.",
        ],
      },
      {
        heading: "2. Corporate IT Asset Decommissioning",
        paragraphs: [
          "For financial firms in DIFC, tech companies in Dubai Internet City, and design studios in d3, discarding redundant server hardware requires documented chain-of-custody. We provide destruction manifests to assist IT compliance teams.",
        ],
        callout: {
          type: "tip",
          title: "Data Security First",
          text: "Always perform a cryptographic wipe or physical drive removal before releasing corporate laptops and storage arrays for e-waste recycling.",
        },
      },
    ],
    relatedSlugs: ["dubai-move-out-junk-removal-guide", "how-to-prepare-villa-garden-clearance"],
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
