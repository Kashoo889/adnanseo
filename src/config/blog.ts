import type { StaticImageData } from "next/image";
import heroImg from "@/assets/hero-main.jpg";
import householdImg from "@/assets/service-household.jpg";
import villaImg from "@/assets/service-villa.jpg";
import officeImg from "@/assets/service-office.jpg";
import furnitureImg from "@/assets/service-furniture.jpg";
import mattressImg from "@/assets/service-mattress.jpg";
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
    relatedSlugs: ["furniture-removal-cost-dubai", "villa-clearance-cost-dubai"],
  },
  {
    slug: "furniture-removal-cost-dubai",
    title: "How Much Does Old Furniture & Sofa Removal Cost in Dubai?",
    excerpt:
      "What it really costs to clear out old furniture in Dubai — from a single sofa to a whole apartment's worth. Honest price ranges for sofas, beds, wardrobes, and dining sets, plus the access and dismantling factors that move the number.",
    category: "Guides & Tips",
    coverImage: furnitureImg,
    coverImageAlt: "Old sofas, armchairs, and a dismantled wardrobe stacked in a Dubai living room ready for collection",
    publishedAt: "2026-08-31",
    readingTime: "7 min read",
    author: defaultAuthor,
    tags: ["Furniture Removal Cost", "Sofa Disposal", "Mattress Disposal Cost", "Dubai Pricing Guide", "Furniture Clearance"],
    seoTitle: "How Much Does Furniture Removal Cost in Dubai? (2026)",
    seoDescription:
      "Furniture removal cost in Dubai explained: real price ranges for sofas, beds, wardrobes, and full-home clearances, plus what pushes a quote up or down.",
    keyTakeaways: [
      "A single two- or three-seater sofa is usually removed for AED 150 to AED 250 across central Dubai.",
      "Furniture removal is priced by the space your items take on the truck plus dismantling labour, not by the hour.",
      "Floor level and service-lift access are the two factors most likely to move a quote — a lift-free walk-up costs more crew time.",
      "A whole apartment's worth of furniture on a shared truck typically lands between AED 600 and AED 950; a full villa needs a dedicated truck.",
    ],
    sections: [
      {
        heading: "How much does furniture removal cost in Dubai?",
        paragraphs: [
          "Removing old furniture in Dubai typically costs from AED 150 for a single sofa or bed up to AED 850–1,400 for a full apartment's worth on a dedicated truck. The price is set by how much truck space the items fill, how much dismantling they need, and how far the crew has to carry them.",
          "Established clearance teams quote a fixed figure upfront rather than charging by the hour. Whether the two-seater comes out in ten minutes or the wardrobe fights back for forty, the number you agreed on WhatsApp is the number you pay.",
        ],
      },
      {
        heading: "Sofa and couch removal: what actually changes the price",
        paragraphs: [
          "A standard fabric two-seater and a modular L-shaped sofa are not the same job. The L-shape usually splits into three or four sections, each needing two people to carry, and a sofa bed hides a steel folding mechanism that adds real weight. Solid teak or oak frames weigh far more than flat-pack pine.",
          "Access is the other half of the equation. A ground-floor villa with a wide door is quick. A fourth-floor apartment with no service lift means every section goes down the stairwell by hand, and that carry time is what you are paying for.",
        ],
        callout: {
          type: "tip",
          title: "One quote, all-in",
          text: "A proper furniture removal quote should already cover dismantling, stair or lift transit, wrapping, transport, and disposal fees. If any of those are listed as 'extra on the day', ask for a revised all-inclusive price before booking.",
        },
      },
      {
        heading: "Typical furniture removal prices in Dubai by item",
        paragraphs: [
          "The ranges below reflect what single items and small groups of furniture generally cost to clear across Dubai communities in 2026. Treat them as planning figures — a photo quote will confirm the exact price for your pieces and your building.",
        ],
        table: {
          caption: "Estimated 2026 furniture removal costs across Dubai",
          headers: ["Item or Group", "Notes", "Estimated Cost (AED)"],
          rows: [
            ["Two- or three-seater sofa", "Free-standing, lift access", "AED 150 – 250"],
            ["L-shaped or modular sofa", "Splits into 3–4 sections", "AED 250 – 450"],
            ["Armchair or recliner", "Recliner mechanism adds weight", "AED 120 – 200"],
            ["Bed frame + headboard", "Excludes mattress", "AED 150 – 300"],
            ["Wardrobe (2–3 door)", "Dismantled on-site", "AED 200 – 400"],
            ["Dining table + 6 chairs", "Table legs removed for transit", "AED 250 – 450"],
            ["One-bedroom apartment, full furniture", "Shared 3-ton truck", "AED 600 – 950"],
            ["Full villa's worth of furniture", "Dedicated truck, multi-room", "AED 1,200 – 2,500"],
          ],
        },
      },
      {
        heading: "Mattress disposal cost in Dubai",
        paragraphs: [
          "Mattress disposal in Dubai usually costs AED 100 to AED 180 for a single and AED 150 to AED 250 for a king, whether it goes on its own or with other items. Most communities will not let you leave a mattress beside the bins, and management fines for doing so often cost more than the pickup.",
          "If a mattress is the only thing you need gone, it falls under single bulky-item collection. When it comes out with a bed frame and wardrobe, it is simply folded into the bedroom-set price rather than charged twice. Our mattress and bulky-item removal service covers both.",
        ],
        image: teamImg,
        imageAlt: "Uniformed crew wrapping a large sofa in protective blankets before carrying it down a Dubai apartment stairwell",
        imageCaption: "Crews wrap upholstered pieces before the carry, which protects both the furniture and the building's hallways and lift doors.",
      },
      {
        heading: "Is furniture removal expensive in Dubai?",
        paragraphs: [
          "Set against the alternatives, it rarely is. A public-road skip needs a permit and still leaves you to load it in the heat. 'Free' collectors take the resale-worthy pieces and leave the broken wardrobe and stained mattress behind. Municipal fines for fly-tipping bulky items start in the hundreds of dirhams.",
          "A fixed-price crew clears everything you point at in one visit, dismantles as they go, and takes usable pieces toward donation. For most households the cost is a few hundred dirhams for a job that would otherwise eat a weekend and a friend's back.",
        ],
      },
      {
        heading: "How to get a fixed furniture removal quote",
        paragraphs: [
          "Send a wide photo of each room and a close-up of every large piece to our team on WhatsApp. Add your floor number, whether there is a service lift, and the community — gated developments such as Arabian Ranches or Damac Hills need the crew registered at the gate in advance.",
          "You will get a fixed price back within a few minutes, along with the next available morning, afternoon, or evening slot, including same-day where a truck is free nearby.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does it cost to remove a single sofa in Dubai?",
        answer:
          "A standard two- or three-seater sofa is usually removed for AED 150 to AED 250 in central Dubai, including the carry and disposal. A large modular or L-shaped sofa runs higher because it splits into several heavy sections that each need two people.",
      },
      {
        question: "Does furniture removal cost more without a service elevator?",
        answer:
          "Yes, modestly. A lift-free walk-up means every item is carried down the stairs by hand, which adds crew time. The difference is built into the fixed quote once you tell the team your floor number, so there is no surprise charge on the day.",
      },
      {
        question: "Do I pay extra for dismantling a built-in wardrobe?",
        answer:
          "Dismantling is included in a proper quote. Built-in and multi-door wardrobes take longer than free-standing ones because panels are often screwed or glued to the wall, so mention them when you send photos and the price will already account for the work.",
      },
      {
        question: "Is it better to sell or dispose of old furniture in Dubai?",
        answer:
          "If a piece is clean, current, and assembles easily, selling or donating it is worth the effort. Once furniture is marked, broken, or a discontinued flat-pack, resale interest drops fast and paid removal is usually the quicker route. Crews still separate anything usable for donation.",
      },
    ],
    relatedSlugs: ["dubai-junk-removal-cost-guide", "villa-clearance-cost-dubai"],
  },
  {
    slug: "villa-clearance-cost-dubai",
    title: "Villa Cleanout & Handover Clearance Cost in Dubai: A Full Breakdown",
    excerpt:
      "A room-by-room look at what villa and apartment handover clearances cost in Dubai, why the job is priced in truck loads, and the maid's rooms, storerooms, and gardens that quietly add another load.",
    category: "Moving & Tenancy",
    coverImage: villaImg,
    coverImageAlt: "Furniture and boxes staged on a Dubai villa driveway ready for a handover clearance crew to load",
    publishedAt: "2026-08-31",
    readingTime: "8 min read",
    author: defaultAuthor,
    tags: ["Villa Clearance Cost", "Handover Clearance", "End of Tenancy", "Truck Load Pricing", "Dubai Move-Out"],
    seoTitle: "Villa Clearance Cost in Dubai: Full Handover Breakdown",
    seoDescription:
      "What does a villa clearance cost in Dubai? Truck-load pricing for apartment, townhouse, and villa handovers, plus the rooms that quietly add loads and cost.",
    keyTakeaways: [
      "Villa clearances are priced by the number of 3-ton truck loads, not by the hour — one truck holds roughly one to one-and-a-half furnished rooms.",
      "An apartment handover typically runs AED 500 to AED 1,500; a large four- or five-bedroom villa with a garden can reach AED 3,000 to AED 5,000 or more.",
      "The maid's room, storeroom, garage, and garden are what usually turn a two-load job into a three- or four-load one.",
      "A tight handover deadline that forces a weekend or evening crew adds to the quote, so book as soon as your move-out date is fixed.",
    ],
    sections: [
      {
        heading: "How much does a villa clearance cost in Dubai?",
        paragraphs: [
          "A full villa clearance in Dubai generally costs from AED 500 for a small apartment handover up to AED 3,000–5,000 or more for a large four- or five-bedroom villa with outdoor areas. Pricing is built on truck loads: a 3-ton truck holds around one to one-and-a-half fully furnished rooms.",
          "Because the driver of the price is volume rather than time, the honest way to quote a villa is to count the loads first. That is why a walkthrough video — every room plus the garage, storeroom, maid's room, and garden — produces a far more accurate figure than a handful of photos.",
        ],
      },
      {
        heading: "What drives the number of truck loads",
        paragraphs: [
          "People estimate their clearance from the bedrooms and living room, then forget the parts of the house where things accumulate. Those spaces are what push a job into an extra load.",
        ],
        bulletPoints: [
          "Maid's room: often holds a spare bed, a wardrobe, and years of stored boxes.",
          "Storeroom or under-stair cupboard: suitcases, old electronics, paint tins, spare tiles from the fit-out.",
          "Garage: bikes, tools, shelving, tyres, and garden equipment.",
          "Garden and balcony: planters, outdoor sofas, a barbecue, bags of soil, and palm fronds if there are date palms.",
          "Built-in wardrobes in every bedroom: each one is a dismantling job, not a lift-and-carry.",
        ],
        image: teamImg,
        imageAlt: "Clearance crew loading wardrobes and boxes from a villa driveway into a 3-ton removal truck in a gated Dubai community",
        imageCaption: "In gated communities such as Arabian Ranches, Damac Hills, and Dubai Hills Estate, the truck and crew need to be registered at the security gate a day ahead.",
      },
      {
        heading: "Estimated villa and apartment clearance costs in Dubai",
        paragraphs: [
          "The table below gives planning ranges by property size for a standard furnished handover in 2026. A room-by-room video quote will confirm the load count and the fixed price for your property.",
        ],
        table: {
          caption: "Estimated 2026 villa and apartment clearance costs in Dubai",
          headers: ["Property", "Typical Truck Loads", "Usually Included", "Estimated Cost (AED)"],
          rows: [
            ["Studio / 1-bed apartment", "0.5 – 1", "Bed, wardrobe, sofa, white goods, boxes", "AED 500 – 900"],
            ["2-bed apartment", "1 – 2", "Two bedrooms, living/dining, appliances", "AED 900 – 1,500"],
            ["3-bed townhouse", "2 – 3", "Bedrooms, living areas, small yard, store", "AED 1,400 – 2,400"],
            ["4-bed villa", "3 – 4", "Bedrooms, maid's room, garage, garden", "AED 2,400 – 3,800"],
            ["5-bed+ villa with garden & outbuildings", "4 – 6+", "Whole house plus outdoor and storage areas", "AED 3,800 – 6,000+"],
          ],
        },
      },
      {
        heading: "Handover deadlines and why timing affects the quote",
        paragraphs: [
          "Most villa clearances are tied to a fixed date — the end of an Ejari term, a buyer's handover, or a landlord's inspection. If the property has to be empty by a specific morning, the crew often has a two-hour window between the movers leaving and the agent arriving.",
          "Meeting that window can mean a larger crew, a second truck running in parallel, or a Friday or evening slot. Those arrangements are reflected in the quote, so the earlier you confirm the date, the more standard-rate options stay open.",
        ],
      },
      {
        heading: "What a clearance quote usually does not include",
        paragraphs: [
          "Clearance means emptying the property and disposing of the contents responsibly. It is not the same as the move-out deep clean or the snagging repairs, both of which are separate trades.",
          "Our end-of-tenancy and villa handover clearance service can coordinate timing with your cleaners and handyman so the property moves from full to inspection-ready in the right order, but the cleaning and paint touch-ups are quoted and paid separately.",
        ],
        callout: {
          type: "warning",
          title: "Leave time for the clean",
          text: "Book the clearance to finish at least a day before the final inspection. A deep clean cannot start while furniture is still in the rooms, and agents rarely accept a property that has only been half-prepared.",
        },
      },
      {
        heading: "Getting an accurate villa clearance quote",
        paragraphs: [
          "Record one continuous video walking through every room, then the garage, storeroom, maid's room, balcony, and garden. Narrate what stays and what goes. Send it to our team on WhatsApp with your community name and handover date.",
          "You will get back a load count, a fixed total, and a slot that fits your deadline — including split-crew options when the property has to be cleared and cleaned inside a single day.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is villa clearance priced per hour or per truck load?",
        answer:
          "Per truck load. A 3-ton truck holds roughly one to one-and-a-half furnished rooms, and the quote counts how many loads your property fills. This keeps the price fixed regardless of how long the dismantling and carrying actually take on the day.",
      },
      {
        question: "Does an end-of-tenancy clearance include cleaning?",
        answer:
          "No. Clearance empties the property and disposes of the contents; the move-out deep clean is a separate service. A clearance crew can schedule around your cleaners so the rooms are empty before they arrive, but the cleaning is quoted and billed on its own.",
      },
      {
        question: "How far in advance should I book a villa handover clearance?",
        answer:
          "As soon as your move-out or handover date is confirmed, ideally a week or more ahead. Month-end and the summer moving season fill up quickly, and early booking keeps standard-rate weekday slots available instead of forcing a weekend or evening crew.",
      },
      {
        question: "Is garden and palm frond waste charged separately?",
        answer:
          "It is included in the load count rather than billed as a separate job, but green waste is bulky and bags of soil are heavy, so a large garden can add a load. Mention the garden in your walkthrough video so the quote reflects it.",
      },
    ],
    relatedSlugs: ["dubai-junk-removal-cost-guide", "furniture-removal-cost-dubai"],
  },
  {
    slug: "book-junk-removal-whatsapp-dubai",
    title: "How to Book Same-Day Junk Removal via WhatsApp in Dubai",
    excerpt:
      "A practical walkthrough of booking junk removal over WhatsApp in Dubai: the photos and details that lock in a fixed price, when same-day slots are realistic, and the lift and gate prep worth doing before the crew arrives.",
    category: "Guides & Tips",
    coverImage: teamImg,
    coverImageAlt: "Uniformed Dubai Junk Collection crew loading household items into a truck after a same-day WhatsApp booking",
    publishedAt: "2026-08-31",
    readingTime: "5 min read",
    author: defaultAuthor,
    tags: ["WhatsApp Booking", "Same-Day Junk Removal", "Junk Removal Quote", "Dubai Booking Guide"],
    seoTitle: "Book Junk Removal on WhatsApp in Dubai (Same-Day Guide)",
    seoDescription:
      "Book junk removal on WhatsApp in Dubai: what photos to send for a fixed quote, realistic same-day cutoffs, and how to prep your building before the crew arrives.",
    keyTakeaways: [
      "Send photos or a short video of the items, your area, your floor and lift access, and a preferred time — that is enough for a fixed quote.",
      "Message before midday for a realistic chance of same-day pickup in most Dubai communities; afternoon requests usually run to the next morning.",
      "The WhatsApp price is fixed once confirmed; it only changes if the items on arrival are clearly more than the photos showed.",
      "Booking the service lift and registering the crew at the community gate in advance is what keeps a same-day slot on schedule.",
    ],
    sections: [
      {
        heading: "How to book junk removal on WhatsApp in Dubai",
        paragraphs: [
          "Message the team a few photos or a short video of what you need gone, along with your community, your floor and whether there is a service lift, and a rough preferred time. Within a few minutes you get a fixed price and an available slot, often the same day. No site visit is needed first.",
          "The photo quote exists so a coordinator can match your items to a truck that already has capacity nearby. That is how a booking turns around in minutes rather than after a scheduled survey.",
        ],
      },
      {
        heading: "What to send so your quote does not change",
        paragraphs: [
          "The quote is only as accurate as what the coordinator can see. A short list of details removes the guesswork and keeps the price fixed on arrival.",
        ],
        bulletPoints: [
          "A wide shot of each room so the overall volume is visible, not just single items.",
          "A close-up of every bulky piece — sofas, beds, wardrobes, appliances.",
          "A note on which wardrobes are built-in versus free-standing, since built-ins need dismantling.",
          "Your floor number and whether the service lift is working.",
          "Your community, and whether it is gated and needs the crew registered at the gate.",
          "A rough time window that suits you — morning, afternoon, or evening up to 22:00.",
        ],
        image: householdImg,
        imageAlt: "Household furniture and boxes photographed in a Dubai apartment living room to send for a WhatsApp junk removal quote",
        imageCaption: "A wide room photo plus a close-up of each large item is enough for the coordinator to size the truck and fix the price.",
      },
      {
        heading: "Same-day junk pickup: realistic timing",
        paragraphs: [
          "Same-day works best when you message before midday. That gives dispatch time to slot you into a truck's afternoon run in most of Dubai. A request that lands mid-afternoon usually becomes a next-morning pickup instead.",
          "Month-end and the summer moving weeks are busier because move-outs cluster then, and Fridays fill faster than mid-week. Evening slots run to 22:00, which is useful when building management only allows bulky-item moves outside office hours.",
        ],
      },
      {
        heading: "Before the crew arrives",
        paragraphs: [
          "Two quick jobs protect your slot. Book the service elevator with building management for your time window — towers in Marina, Downtown, and Business Bay often require this in writing a day ahead. In a gated community, register the truck and crew at the security gate so they are not turned away.",
          "Then clear a walking path to the items and physically separate anything you are keeping, so nothing is loaded by mistake.",
        ],
      },
      {
        heading: "Payment and confirmation",
        paragraphs: [
          "You get the fixed price in writing on WhatsApp before the crew leaves the depot. Payment is on completion, once you have checked that everything you listed is gone and the space is clear. The team confirms the job as finished before they leave.",
          "If you find another few items before the crew arrives, send updated photos and the coordinator adjusts the quote — better to revise it in advance than to renegotiate at the door.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do I need to be home for the pickup?",
        answer:
          "Not necessarily. Many bookings are handled with a building concierge, a housekeeper, or a neighbour letting the crew in, as long as someone can confirm which items go. Payment can be arranged in advance or on completion by whoever is present.",
      },
      {
        question: "What if I have more items than my photos showed?",
        answer:
          "Send updated photos as soon as you know. The coordinator revises the fixed price before the crew is dispatched. Prices only shift on arrival when the volume is clearly well beyond what was quoted, and the crew will always confirm the new figure with you first.",
      },
      {
        question: "Is there a charge for the WhatsApp quote?",
        answer:
          "No. Sending photos and getting a fixed price and a slot back is free and carries no obligation. You only pay if you confirm the booking and the job is completed.",
      },
      {
        question: "Can someone else pay on my behalf?",
        answer:
          "Yes. Landlords, relocation agents, and family members routinely book and settle clearances for a tenant or relative. Share the property details and photos, approve the quote on WhatsApp, and arrange payment either before the visit or when the crew finishes.",
      },
    ],
    relatedSlugs: ["dubai-junk-removal-cost-guide", "furniture-removal-cost-dubai"],
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
