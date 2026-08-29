import type { StaticImageData } from "next/image";
import skylineImg from "@/assets/dubai-skyline.jpg";
import villaImg from "@/assets/service-villa.jpg";
import officeImg from "@/assets/service-office.jpg";
import householdImg from "@/assets/service-household.jpg";
import furnitureImg from "@/assets/service-furniture.jpg";
import warehouseImg from "@/assets/service-warehouse.jpg";
import gardenImg from "@/assets/service-garden.jpg";

export type AreaDetail = {
  slug: string;
  name: string;
  shortName?: string;
  group: string;
  tagline: string;
  intro: string;
  image: StaticImageData;
  heroHighlights: string[];
  localContext: {
    propertyTypes: string;
    accessLogistics: string;
    popularItems: string[];
  };
  keyServices: {
    title: string;
    description: string;
  }[];
  localTips: string[];
  faqs: { q: string; a: string }[];
  seoDescription: string;
  nearbyAreas: { name: string; slug: string }[];
};

export const areaDetails: Record<string, AreaDetail> = {
  "jumeirah-village-circle": {
    slug: "jumeirah-village-circle",
    name: "Jumeirah Village Circle",
    shortName: "JVC",
    group: "New Dubai & Suburbs",
    tagline: "Fast, discreet junk removal across all 19 JVC districts",
    intro:
      "Whether you are vacating a townhouse near Circle Mall or decluttering an apartment in Bloom Heights, our uniformed JVC junk removal crew arrives on schedule with the right truck and tools. We handle building move-out paperwork, basement parking height limits, and tight lift access across all JVC communities.",
    image: householdImg,
    heroHighlights: [
      "Same-day pickups across Districts 10–19",
      "Building security & loading bay protocols handled",
      "Full furniture disassembly & floor protection",
    ],
    localContext: {
      propertyTypes:
        "Modern mid-rise apartment buildings, townhouses, and private villa clusters across JVC's radial street grid.",
      accessLogistics:
        "JVC properties frequently feature underground basement parking with 2.2m height clearances. We dispatch right-sized low-profile clearance vans that access residential basement loading bays directly, keeping corridors clear and lift reservations smooth.",
      popularItems: [
        "Balcony furniture, artificial grass & planters",
        "Bed frames, wardrobes & flatpack furniture",
        "End-of-tenancy rubbish & boxed household items",
        "Old appliances (fridges, washing machines, dryers)",
      ],
    },
    keyServices: [
      {
        title: "Apartment & Flat Clearouts in JVC",
        description:
          "Full or partial apartment clearances before lease handovers. We remove everything from unwanted sofas to old kitchen appliances without scratching hallway walls or stalling shared elevators.",
      },
      {
        title: "JVC Townhouse Junk Collection",
        description:
          "Clearing out storage rooms, private garages, back gardens, and rooftop terraces across JVC townhouse communities. We load everything into our spacious trucks in one efficient visit.",
      },
      {
        title: "Same-Day Bulky Item Removal",
        description:
          "Need an old mattress, broken dining table, or gym equipment gone today? Book before noon on WhatsApp and our local team will collect it that afternoon.",
      },
    ],
    localTips: [
      "Book service lifts with your building security 24 hours prior if clearing a large multi-room apartment.",
      "Send WhatsApp photos of bulky wardrobes so our crew brings matching hex and power tools for rapid disassembly.",
      "We sort reusable furniture for local UAE donation partners, keeping landfill waste to a minimum.",
    ],
    faqs: [
      {
        q: "How fast can you reach my building in JVC?",
        a: "Our clearance vans operate daily across JVC, Al Barsha South, and Motor City. Same-day bookings are typically fulfilled within 2 to 4 hours of confirming your WhatsApp quote.",
      },
      {
        q: "Do you handle building security permits for JVC towers?",
        a: "Yes. We coordinate with building management and security desks, providing our trade license and crew Emirates IDs when required for gate or loading dock entry.",
      },
      {
        q: "Can you dismantle IKEA or custom wardrobes in my apartment?",
        a: "Yes, our crew brings all necessary disassembly tools. Wardrobe and bed frame dismantling is included in our agreed fixed price with no hidden add-ons.",
      },
    ],
    seoDescription:
      "Reliable junk removal in Jumeirah Village Circle (JVC), Dubai. Same-day apartment clearouts, furniture disposal, appliance removal, and fixed upfront pricing across all JVC districts.",
    nearbyAreas: [
      { name: "Al Furjan", slug: "al-furjan" },
      { name: "Dubai Sports City", slug: "dubai-sports-city" },
      { name: "Dubai Motor City", slug: "dubai-motor-city" },
      { name: "The Springs", slug: "the-springs" },
    ],
  },

  "dubai-marina": {
    slug: "dubai-marina",
    name: "Dubai Marina",
    shortName: "Dubai Marina",
    group: "Waterfront & Islands",
    tagline: "High-rise clearance specialists for Dubai Marina towers",
    intro:
      "Clearing junk from high-rise towers in Dubai Marina requires precision, promptness, and seamless coordination with tower management. From Marina Gate and Princess Tower to waterfront promenades, our uniformed crew provides respectful, quiet clearances with complete wall and elevator protection.",
    image: skylineImg,
    heroHighlights: [
      "Specialized in tower freight lifts & security NOCs",
      "Same-day collection across Marina Promenade & Walk",
      "Padded wraps & trolley handling to protect marble lobbies",
    ],
    localContext: {
      propertyTypes:
        "High-rise luxury residential towers, penthouses, serviced apartments, and waterfront commercial suites.",
      accessLogistics:
        "Dubai Marina towers strictly enforce designated move-in/move-out hours, service elevator bookings, and security passes. We handle the paperwork requirements and arrive with protective blankets and rubber-wheeled dollies to prevent floor marks.",
      popularItems: [
        "Oversized sofas, sectionals & L-shape couches",
        "King & queen mattresses and upholstered beds",
        "Old TVs, audio units & electrical equipment",
        "Move-out tenant rubbish and decluttering boxes",
      ],
    },
    keyServices: [
      {
        title: "High-Rise Apartment Clearance",
        description:
          "Quick and respectful junk removal from any floor in Dubai Marina. We navigate service corridors and freight lifts discreetly so building neighbors and concierges are never disturbed.",
      },
      {
        title: "Move-Out & Tenancy Handover Removal",
        description:
          "Ensure your full security deposit refund by leaving your Marina apartment completely empty and broom-clean. We remove left-behind tenant items, obsolete decor, and damaged furniture.",
      },
      {
        title: "Furniture Disassembly & Disposal",
        description:
          "Large modular furniture, walk-in closets, and heavy dining suites disassembled on-site and safely carried down service elevators.",
      },
    ],
    localTips: [
      "Reserve the service elevator with your building concierge in advance for fast clearance during designated tower working hours.",
      "Check with security if an Move-Out NOC is needed; we provide our company documents and vehicle registration details instantly via WhatsApp.",
      "Our team covers furniture in transit to avoid scuffing elevator interiors or hallway wallpaper.",
    ],
    faqs: [
      {
        q: "What tower clearance hours do you work in Dubai Marina?",
        a: "We accommodate your building's specific service lift timings — typically 8:00 AM to 6:00 PM on weekdays and Saturdays, adhering to residential community rules.",
      },
      {
        q: "Can you remove large furniture that does not fit in the passenger elevator?",
        a: "Yes. We dismantle furniture into manageable components inside your apartment before moving it via the designated freight elevator or service stairwell.",
      },
      {
        q: "How does pricing work for Marina high-rise buildings?",
        a: "We give a fixed, all-inclusive quote based on photos of your items on WhatsApp. There are no surcharges for high floors, service elevator transit, or weekend bookings.",
      },
    ],
    seoDescription:
      "Discreet junk removal in Dubai Marina. High-rise apartment clearouts, furniture removal, sofa & mattress disposal with service lift and tower security management handled.",
    nearbyAreas: [
      { name: "JBR (Jumeirah Beach Residence)", slug: "jumeirah-beach-residence" },
      { name: "Palm Jumeirah", slug: "palm-jumeirah" },
      { name: "Bluewaters Island", slug: "bluewaters-island" },
      { name: "Dubai Internet City", slug: "dubai-internet-city" },
    ],
  },

  "business-bay": {
    slug: "business-bay",
    name: "Business Bay",
    shortName: "Business Bay",
    group: "Downtown & City Core",
    tagline: "Commercial office & residential clearance along Dubai Canal",
    intro:
      "Operating at the heart of Dubai's commercial district, our Business Bay junk collection team handles corporate office refits, commercial decommissioning, and luxury canal-side apartment cleanouts with total speed and discretion.",
    image: officeImg,
    heroHighlights: [
      "After-hours & weekend commercial office clearances",
      "Executive apartment & penthouse cleanouts",
      "Full Dubai Canal & Marasi Drive coverage",
    ],
    localContext: {
      propertyTypes:
        "Commercial office towers, executive co-working hubs, luxury residential towers, and hotel apartments overlooking Dubai Canal.",
      accessLogistics:
        "Business Bay properties require strict contractor passes, loading dock access permits, and coordination with tower facilities management. We provide full trade documentation and can work after business hours (evenings/weekends) so your staff never loses a working hour.",
      popularItems: [
        "Office desks, ergonomic chairs, cubicles & dividers",
        "Decommissioned computers, monitors, printers & cabling",
        "Filing cabinets, document storage units & whiteboards",
        "Executive apartment furniture and home appliances",
      ],
    },
    keyServices: [
      {
        title: "Office Decommissioning & Junk Removal",
        description:
          "Full floor cleanouts, workstation removal, and electronic waste handling for companies moving, downsizing, or upgrading their Business Bay workspace.",
      },
      {
        title: "Residential Apartment Clearouts",
        description:
          "End-of-lease clearances for high-rise flats along Marasi Drive and Al Khail Road. We remove all unwanted furniture, old white goods, and household clutter.",
      },
      {
        title: "Secure Data & Electronics Disposal",
        description:
          "Safe collection and responsible recycling of obsolete monitors, servers, printer units, and IT peripherals in compliance with local regulations.",
      },
    ],
    localTips: [
      "For commercial cleanouts, book an evening or Saturday slot to avoid peak elevator traffic and office disruptions.",
      "We provide written item clearance confirmations for corporate asset write-offs and landlord handover records.",
      "Send a WhatsApp video walkthrough for large office floors for an accurate, binding fixed-rate estimate.",
    ],
    faqs: [
      {
        q: "Can you perform office cleanouts overnight or on weekends?",
        a: "Yes. Most commercial removals in Business Bay take place after 6:00 PM or during weekends so regular business operations remain completely uninterrupted.",
      },
      {
        q: "Do you supply documentation for commercial building management?",
        a: "Yes, we provide trade license copies, public liability insurance details, and staff ID lists to your building management office ahead of arrival.",
      },
      {
        q: "Do you handle single items in Business Bay apartments?",
        a: "Absolutely. Whether it is one desk, an old refrigerator, or a broken sofa bed, we offer fast same-day single-item pickups.",
      },
    ],
    seoDescription:
      "Professional junk removal and office clearance in Business Bay, Dubai. After-hours commercial clearances, furniture disposal, apartment cleanouts, and fixed pricing.",
    nearbyAreas: [
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "DIFC", slug: "difc" },
      { name: "Dubai Design District", slug: "dubai-design-district" },
      { name: "Meydan", slug: "meydan" },
    ],
  },

  "palm-jumeirah": {
    slug: "palm-jumeirah",
    name: "Palm Jumeirah",
    shortName: "Palm Jumeirah",
    group: "Waterfront & Islands",
    tagline: "White-glove junk removal for Palm villas, fronds & luxury residences",
    intro:
      "Palm Jumeirah properties demand the highest standard of care, discretion, and presentation. Our uniformed team specializes in luxury Frond villa clearances, Shoreline apartment decluttering, and Crescent penthouse handovers, delivering meticulous care for every floor, garden, and driveway.",
    image: villaImg,
    heroHighlights: [
      "Frond security gate access & community pass coordination",
      "Private garden waste & outdoor terrace furniture removal",
      "Careful floor, marble & door frame protection",
    ],
    localContext: {
      propertyTypes:
        "Signature & Garden villas along Fronds A to N, luxury Shoreline and Golden Mile apartments, and exclusive Crescent hotel-residences.",
      accessLogistics:
        "Frond villa entries require security clearance at the access checkpoint. Our vehicles and team are fully registered for seamless entry into Palm Jumeirah residential communities, arriving in clean, branded uniforms and dedicated trucks.",
      popularItems: [
        "Outdoor teak, rattan & sunbed patio sets",
        "Large villa sofas, designer dining sets & chandeliers",
        "Palm fronds, landscaping cuttings & oversized planters",
        "Gym machines, treadmills & pool loungers",
      ],
    },
    keyServices: [
      {
        title: "Palm Villa Cleanouts & Handover Clearance",
        description:
          "Complete property clearances for villa sales, tenancy move-outs, and post-renovation stages. We clear interior rooms, maid's quarters, garages, and landscaped gardens in one seamless visit.",
      },
      {
        title: "Shoreline & Golden Mile Apartment Junk Removal",
        description:
          "Discreet removal of old beds, wardrobes, appliances, and tenant clutter from Palm Jumeirah apartment buildings with complete lift and corridor protection.",
      },
      {
        title: "Garden & Beach Terrace Waste Collection",
        description:
          "Rapid removal of heavy planters, discarded sun loungers, pergolas, and garden cuttings, keeping your private waterfront pristine.",
      },
    ],
    localTips: [
      "Let us know your Frond letter or building number so we verify security gate pre-clearance prior to arrival.",
      "We can coordinate directly with your move-out cleaning team or interior designer for a smooth same-day handover.",
      "Heavy marble, glass tables, and delicate items are padded and carried by a dedicated two-person crew.",
    ],
    faqs: [
      {
        q: "How do you access Palm Jumeirah Frond villas?",
        a: "We present our driver details, Emirates IDs, and company vehicle pass at the Frond security gate. We can also provide vehicle registration ahead of time if your community requires an entry permit.",
      },
      {
        q: "Can you clear both the villa interior and outdoor garden in one visit?",
        a: "Yes. Our multi-crew trucks can clear household furniture, garage storage, and green garden waste simultaneously.",
      },
      {
        q: "What happens to high-value or reusable furniture?",
        a: "Quality reusable furniture is routed to licensed charitable donation organizations in the UAE, while damaged materials are responsibly recycled.",
      },
    ],
    seoDescription:
      "Discreet, premium junk removal on Palm Jumeirah, Dubai. Luxury villa clearances, Shoreline apartment cleanouts, patio furniture and garden waste collection with Frond security access.",
    nearbyAreas: [
      { name: "Dubai Marina", slug: "dubai-marina" },
      { name: "Jumeirah Beach Residence", slug: "jumeirah-beach-residence" },
      { name: "Bluewaters Island", slug: "bluewaters-island" },
      { name: "Jumeirah", slug: "jumeirah" },
    ],
  },

  "dubai-hills-estate": {
    slug: "dubai-hills-estate",
    name: "Dubai Hills Estate",
    shortName: "Dubai Hills",
    group: "Villa Communities",
    tagline: "Premier junk removal for Sidra, Maple & Dubai Hills communities",
    intro:
      "Living in Dubai's premier master-planned green community means expecting punctual, pristine, and well-coordinated service. From Sidra and Maple villas to Park Heights and Golf Suites apartments, our crew handles all junk removal quietly and efficiently with full Emaar community compliance.",
    image: villaImg,
    heroHighlights: [
      "Emaar Community Management (ECM) access compliance",
      "Garage, storeroom & landscape green waste clearouts",
      "Same-day pickup for Sidra, Maple, Club Villas & Apartments",
    ],
    localContext: {
      propertyTypes:
        "Modern luxury villas (Sidra, Maple, Fairways, Parkway Vistas), Club Villas, and mid-rise residential apartment towers overlooking the golf course and Central Park.",
      accessLogistics:
        "Emaar Community Management guidelines require courteous vehicle parking, no blocking of shared driveways, and respectful working hours. Our crews arrive with clean trucks, park within designated bays, and keep community walkways spotless.",
      popularItems: [
        "Kids' playhouses, trampolines & outdoor sports gear",
        "Garage shelving, storage totes & renovation leftovers",
        "Garden clippings, tree branches & ceramic pots",
        "Bed frames, modular wardrobes & living room sets",
      ],
    },
    keyServices: [
      {
        title: "Villa Garage & Storeroom Cleanouts",
        description:
          "Transform your cluttered Dubai Hills garage or storage room back into a clean, functional space. We haul away broken tools, shipping boxes, old toys, and redundant furniture.",
      },
      {
        title: "Dubai Hills Apartment Move-Out Clearances",
        description:
          "Smooth, quiet clearances for Park Heights, Park Point, and Golf Suites residents. We protect lobby elevators and leave rooms broom-clean for landlord inspection.",
      },
      {
        title: "Garden & Landscaping Waste Removal",
        description:
          "After garden landscaping or palm trimming, we clear away hedge clippings, palm branches, soil sacks, and outdated patio sets in a single trip.",
      },
    ],
    localTips: [
      "Book before 12:00 PM for same-afternoon slots across Sidra, Maple, and Dubai Hills Park towers.",
      "Tell us if you have heavy gym equipment or multi-piece play sets so we bring specialized dismantling tools.",
      "Our team wears clean uniforms and shoe covers upon request to keep your villa flooring immaculate.",
    ],
    faqs: [
      {
        q: "Do you serve all sub-communities within Dubai Hills Estate?",
        a: "Yes, we regularly clear properties across Maple 1, 2 & 3, Sidra 1, 2 & 3, Golf Grove, Parkway, Club Villas, and all park-facing apartment buildings.",
      },
      {
        q: "Can you dismantle large outdoor trampolines or play equipment?",
        a: "Yes. Our team carries power tools and wrenches to safely disassemble metal play structures, pergolas, and outdoor climbing frames.",
      },
      {
        q: "How clean do you leave the villa after removal?",
        a: "We sweep all cleared areas, pick up stray packaging, and ensure no debris is left on driveways or community paths.",
      },
    ],
    seoDescription:
      "Professional junk removal in Dubai Hills Estate. Villa cleanouts, apartment move-out clearance, furniture removal, and garden waste collection in Sidra, Maple & Park Heights.",
    nearbyAreas: [
      { name: "Arabian Ranches", slug: "arabian-ranches" },
      { name: "Al Barari", slug: "al-barari" },
      { name: "The Springs", slug: "the-springs" },
      { name: "Business Bay", slug: "business-bay" },
    ],
  },

  "arabian-ranches": {
    slug: "arabian-ranches",
    name: "Arabian Ranches",
    shortName: "Arabian Ranches",
    group: "Villa Communities",
    tagline: "Spacious villa & garden junk collection across all Ranches enclaves",
    intro:
      "From Saheel and Savannah to Palmera, Al Reem and Mirador, our uniformed crew provides respectful, dependable villa junk removal across Arabian Ranches. We clear garages, landscaped backyards, wooden pergolas, and full family villas with total care.",
    image: gardenImg,
    heroHighlights: [
      "Emaar Community Management gate permits coordinated",
      "Spacious trucks for large villa garage & garden clearouts",
      "Full patio furniture, gazebo & play structure dismantling",
    ],
    localContext: {
      propertyTypes:
        "Large detached 2 to 6 bedroom luxury villas and townhouses surrounded by landscaped gardens, desert parks, and community walkways.",
      accessLogistics:
        "Arabian Ranches gated enclaves have 24/7 security gatehouses. Our registered clearance vehicles provide driver IDs and details at the gatehouse for swift entry. We park respectfully on private driveways without impeding neighborhood circulation.",
      popularItems: [
        "Desert landscaping waste, palm branches & soil bags",
        "Weathered teak, metal & wicker patio furniture",
        "Large sectional sofas, king bed sets & dining tables",
        "Trampolines, barbecue grills & outdoor play structures",
      ],
    },
    keyServices: [
      {
        title: "Full Villa & Tenancy Handover Cleanouts",
        description:
          "Emptying entire Arabian Ranches villas prior to handover, renovation, or sale. We sweep all rooms and leave premises ready for landlord inspection.",
      },
      {
        title: "Garden & Landscape Waste Removal",
        description:
          "Prompt collection of palm tree cuttings, hedge trimmings, old planters, and damaged outdoor sheds after garden maintenance.",
      },
      {
        title: "Ranches Garage & Storage Decluttering",
        description:
          "Clear out years of accumulated storage boxes, sports equipment, redundant tools, and broken appliances.",
      },
    ],
    localTips: [
      "Provide your community gate name (e.g., Saheel Gate 2, Al Reem 1) for fastest navigation by our driver.",
      "We can coordinate directly with your move-out maintenance contractor or gardener for unified cleanouts.",
      "Heavy BBQ units, stone fire pits, and bulky pergolas can be disassembled by our on-site team.",
    ],
    faqs: [
      {
        q: "Do you service all communities within Arabian Ranches 1?",
        a: "Yes, we cover Saheel, Savannah, Mirador, Al Mahra, Terra Nova, Palmera, Al Reem, Alma, and Golf Homes.",
      },
      {
        q: "Can you clear large volumes of garden waste after tree pruning?",
        a: "Yes. Our high-capacity trucks can haul multiple cubic yards of green waste, branches, and soil bags in a single run.",
      },
      {
        q: "Do I need to be present throughout the clearance?",
        a: "You can walk through with our supervisor at the start, confirm the items to remove, and inspect upon completion — or approve via WhatsApp photos.",
      },
    ],
    seoDescription:
      "Discreet junk removal in Arabian Ranches, Dubai. Villa cleanouts, garage decluttering, garden waste pickup, and furniture removal in Saheel, Savannah, Mirador & Al Reem.",
    nearbyAreas: [
      { name: "Arabian Ranches 2", slug: "arabian-ranches-2" },
      { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
      { name: "Mudon", slug: "mudon" },
      { name: "Damac Hills", slug: "damac-hills" },
    ],
  },

  jumeirah: {
    slug: "jumeirah",
    name: "Jumeirah",
    shortName: "Jumeirah",
    group: "Jumeirah & Coastal Residential",
    tagline: "Discreet clearance for independent coastal villas & private compounds",
    intro:
      "Serving Dubai's historic coastal residential quarter, our crew provides discreet, attentive clearance services for standalone villas, private family compounds, and embassies across Jumeirah 1, 2, and 3 along Jumeirah Beach Road and Al Wasl Road.",
    image: householdImg,
    heroHighlights: [
      "Private compound & standalone villa clearance specialists",
      "Large Majlis, courtyard & poolside furniture removal",
      "Careful handling with padded wraps & floor protection",
    ],
    localContext: {
      propertyTypes:
        "Expansive independent luxury villas, private multi-villa family compounds, coastal residences, and boutique commercial villas.",
      accessLogistics:
        "Jumeirah properties offer wide driveways and private courtyards allowing our trucks direct parking access close to entrances. Our crew respects private household privacy, works quietly, and operates clean, branded vehicles.",
      popularItems: [
        "Traditional & contemporary Majlis seating sets",
        "Marble-top dining tables, ornate sideboards & credenzas",
        "Poolside sun loungers, pergolas & patio dining sets",
        "Old white goods, standalone freezers & extra refrigerators",
      ],
    },
    keyServices: [
      {
        title: "Majlis & Living Area Refresh",
        description:
          "Clear out heavy traditional seating, carpets, custom upholstery, and large decor pieces with careful lifting and zero wall scuffs.",
      },
      {
        title: "Private Villa & Outbuilding Clearances",
        description:
          "Clearances of guest houses, maid's quarters, external driver rooms, service kitchens, and storage sheds.",
      },
      {
        title: "Home Renovation & Strip-Out Waste",
        description:
          "Removal of old cabinetry, bathroom fixtures, packaging, and non-structural renovation debris.",
      },
    ],
    localTips: [
      "Let us know if your villa has interior courtyards or multiple floor levels so we allocate additional team members.",
      "Working appliances in good condition can be tagged for donation to registered UAE charity partners.",
      "We provide same-day pickups throughout Jumeirah 1, 2, and 3 when booked before midday.",
    ],
    faqs: [
      {
        q: "Can you clear items from both main villas and annex buildings?",
        a: "Yes, our team clears main living quarters, secondary service kitchens, laundry rooms, and garden outbuildings.",
      },
      {
        q: "Do you take large ornate wooden and marble furniture?",
        a: "Yes. Our team is trained in heavy two-person and four-person lifts with protective straps and padded blankets.",
      },
      {
        q: "How quickly can your truck arrive in Jumeirah?",
        a: "With our operational base near Al Quoz, our trucks can often be on-site in Jumeirah within 60 to 90 minutes.",
      },
    ],
    seoDescription:
      "Premium junk removal in Jumeirah, Dubai. Standalone villa clearances, Majlis furniture disposal, appliance removal, and courtyard cleanouts across Jumeirah 1, 2, and 3.",
    nearbyAreas: [
      { name: "Jumeirah 1", slug: "jumeirah-1" },
      { name: "Jumeirah 2", slug: "jumeirah-2" },
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Al Quoz", slug: "al-quoz" },
    ],
  },

  "al-furjan": {
    slug: "al-furjan",
    name: "Al Furjan",
    shortName: "Al Furjan",
    group: "New Dubai & Suburbs",
    tagline: "Reliable junk removal for Quortaj & Dubai Style villas and townhouses",
    intro:
      "Located between Sheikh Zayed Road and Sheikh Mohammed Bin Zayed Road, Al Furjan is a bustling family community where we provide same-day junk removal for Quortaj and Dubai Style villas, townhouses, and residential apartment buildings near Al Furjan Pavilion.",
    image: furnitureImg,
    heroHighlights: [
      "Full coverage across East & West Al Furjan",
      "Townhouse garage, rooftop & garden clearances",
      "Fast furniture dismantling & move-out pickups",
    ],
    localContext: {
      propertyTypes:
        "Nakheel master-planned community featuring 3 to 6 bedroom Quortaj and Dubai Style villas, townhouses, and low-rise modern apartment complexes.",
      accessLogistics:
        "Wide community streets and private garage driveways allow quick truck positioning. For apartments near the metro and pavilions, we utilize building loading zones and service elevators efficiently.",
      popularItems: [
        "Terrace seating, rooftop planters & artificial turf",
        "Modular wardrobes, study desks & bunk beds",
        "Washing machines, dishwashers & built-in kitchen units",
        "Move-out tenant boxes, packing crates & unwanted decor",
      ],
    },
    keyServices: [
      {
        title: "Al Furjan Townhouse Decluttering",
        description:
          "Reclaim valuable living space in your townhouse by clearing accumulated storage from under-stair closets, utility rooms, and garages.",
      },
      {
        title: "End-of-Tenancy Furniture Disposal",
        description:
          "Quick turnaround clearances for departing tenants and landlords preparing properties for new handovers.",
      },
      {
        title: "Appliance & Bulky Item Collection",
        description:
          "Safe disconnection and transport of heavy kitchen white goods, large refrigerators, and sectional sofas.",
      },
    ],
    localTips: [
      "Let us know if you reside in an apartment near Al Furjan Pavilion or a gated villa cluster for optimal arrival coordination.",
      "We provide fixed pricing with no extra fuel or distance surcharges for Al Furjan South.",
      "Send photos of wardrobes or beds in advance so our technicians arrive equipped with cordless drivers and hex sets.",
    ],
    faqs: [
      {
        q: "How fast can you collect furniture in Al Furjan?",
        a: "We offer same-day collection across Al Furjan and Discovery Gardens, often arriving within 2 hours of quote confirmation.",
      },
      {
        q: "Can you disconnect and remove our old washing machine and fridge?",
        a: "Yes, we isolate electrical and water lines safely, cap drainage connections, and carry units on rubber-wheeled dollies.",
      },
      {
        q: "Do you dismantle multi-piece beds and bunk beds?",
        a: "Yes, full disassembly is included in our agreed upfront rate.",
      },
    ],
    seoDescription:
      "Dependable junk removal in Al Furjan, Dubai. Townhouse cleanouts, furniture disposal, appliance removal, and villa garage clearance in Quortaj & Dubai Style homes.",
    nearbyAreas: [
      { name: "Discovery Gardens", slug: "discovery-gardens" },
      { name: "Jumeirah Village Circle", slug: "jumeirah-village-circle" },
      { name: "Dubai Investment Park", slug: "dubai-investment-park" },
      { name: "The Springs", slug: "the-springs" },
    ],
  },

  "the-springs": {
    slug: "the-springs",
    name: "The Springs",
    shortName: "The Springs",
    group: "Villa Communities",
    tagline: "Quiet, careful townhouse & garden clearances across Springs 1 to 15",
    intro:
      "The Springs is one of Dubai's most established gated townhouse neighborhoods. Our uniformed crews are familiar with every cul-de-sac from Springs 1 through Springs 15, clearing narrow townhouse staircases, back gardens, and storage rooms with quiet professionalism.",
    image: householdImg,
    heroHighlights: [
      "Full coverage across all 15 Springs sub-communities",
      "Emaar Community Management security gate compliance",
      "Careful handling on narrow townhouse stairwells",
    ],
    localContext: {
      propertyTypes:
        "Gated Emaar community featuring 2 to 4 bedroom two-storey terraced townhouses (Type 1M, 2M, 3M, 4M, 4E, 3E, 2E) situated around scenic lakes and parks.",
      accessLogistics:
        "Townhouse interiors in The Springs have compact staircases and tight turns to second-floor bedrooms. Our experienced movers pad banisters, disassemble larger bed frames and wardrobes in the room, and maneuver pieces safely without wall marks.",
      popularItems: [
        "Back garden hedge cuttings, palm fronds & wooden garden sheds",
        "King/queen mattress sets, bed frames & kids' bunk beds",
        "Storage room shelving, sports gear & plastic storage bins",
        "L-shaped sofas, armchairs & coffee tables",
      ],
    },
    keyServices: [
      {
        title: "Springs Townhouse Move-Out Clearance",
        description:
          "Complete handover cleanout ensuring your property meets Emaar and landlord move-out condition standards.",
      },
      {
        title: "Garden & Patio Clutter Removal",
        description:
          "Clear away weathered garden tables, broken patio chairs, rusted BBQ sets, and green trimmings from back gardens.",
      },
      {
        title: "Upstairs Bedroom & Storage Room Clears",
        description:
          "We carry heavy furniture down internal stairs with dedicated lifting straps and floor protection.",
      },
    ],
    localTips: [
      "Inform security at your Springs gate (e.g. Springs 7 Gate) that Dubai Junk Collection is scheduled for your address.",
      "If removing items from the back garden, confirm whether side-gate access is available or if transit is through the ground floor.",
      "We offer flexible evening pickup slots so you don't need to take time off work.",
    ],
    faqs: [
      {
        q: "Do you service all 15 Springs communities?",
        a: "Yes, we regularly service Springs 1 through 15, as well as The Souk and surrounding community centers.",
      },
      {
        q: "Can you navigate the narrow stairs in Type 4M and 3E townhouses?",
        a: "Yes, our crew has cleared hundreds of homes in The Springs. We dismantle large furniture upstairs and use protective padding throughout.",
      },
      {
        q: "What do you do with garden cuttings and old planters?",
        a: "Green garden waste is sorted and delivered to municipal composting facilities whenever possible.",
      },
    ],
    seoDescription:
      "Professional junk removal in The Springs, Dubai. Townhouse cleanouts, garden waste collection, furniture removal, and upstairs clearances across Springs 1 to 15.",
    nearbyAreas: [
      { name: "The Meadows", slug: "the-meadows" },
      { name: "The Lakes", slug: "the-lakes" },
      { name: "Emirates Hills", slug: "emirates-hills" },
      { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
    ],
  },

  "emirates-hills": {
    slug: "emirates-hills",
    name: "Emirates Hills",
    shortName: "Emirates Hills",
    group: "Villa Communities",
    tagline: "Ultra-discreet, white-glove clearance for luxury golf course mansions",
    intro:
      "Widely regarded as Dubai's premier ultra-luxury gated community, Emirates Hills demands the highest standard of presentation, discretion, and property protection. Our uniformed crew caters to private estates, golf-course mansions, and VIP residences with custom floor runners and white-glove care.",
    image: villaImg,
    heroHighlights: [
      "Private estate & mansion clearance with strict non-disclosure",
      "Full floor, marble staircase & doorway protective shielding",
      "Large estate basements, home cinemas & gym decommissioning",
    ],
    localContext: {
      propertyTypes:
        "Custom-built multi-million dollar luxury mansions, private palaces, and gated estates surrounding the Montgomerie 18-hole championship golf course.",
      accessLogistics:
        "Emirates Hills maintains strict private security access. Our crew and vehicles undergo checkpoint verification. We utilize protective neoprene floor runners, shoe covers, and corner guards to safeguard Italian marble floors and custom woodwork.",
      popularItems: [
        "Custom-built basements, wine cellar racks & home theater recliners",
        "Commercial-grade gym treadmills, weights & multi-station racks",
        "Oversized outdoor luxury loungers, cabanas & poolside pavilions",
        "Large custom sectional seating, antique armoires & oversized mirrors",
      ],
    },
    keyServices: [
      {
        title: "Full Estate Cleanout & Pre-Sale Clearance",
        description:
          "Comprehensive property clearance for estate sales, extensive architectural renovations, or executive handovers.",
      },
      {
        title: "Basement, Wine Cellar & Entertainment Suite Clears",
        description:
          "Discreet removal of redundant electronics, heavy sound equipment, luxury theater seating, and storage racking.",
      },
      {
        title: "Private Grounds & Landscaping Waste Removal",
        description:
          "Multi-truck clearance capacity for large manicured private grounds, fallen palm branches, and replaced outdoor fixtures.",
      },
    ],
    localTips: [
      "Coordinate access with your private security team or estate manager prior to our scheduled arrival time.",
      "We provide non-disclosure agreements (NDAs) and written chain-of-custody documentation on request.",
      "Our senior project lead oversees the entire clearance on-site from start to immaculate finish.",
    ],
    faqs: [
      {
        q: "How do you protect luxury marble and hardwood flooring in Emirates Hills estates?",
        a: "We lay down padded heavy-duty floor runners from the clearance rooms all the way to our vehicles, and our team wears protective booties.",
      },
      {
        q: "Can you handle high-capacity multi-truck clearances for Emirates Hills mansions?",
        a: "Yes. For large mansions and grounds in Emirates Hills, we can deploy multiple dedicated trucks and a 6-to-8 person team simultaneously.",
      },
      {
        q: "Are your staff trained and vetted?",
        a: "Yes, every team member is a full-time, direct employee of Dubai Junk Collection with verified background checks and professional uniform standards.",
      },
    ],
    seoDescription:
      "White-glove junk removal in Emirates Hills, Dubai. Ultra-discreet mansion cleanouts, basement clearances, gym equipment removal, and estate grounds clearance.",
    nearbyAreas: [
      { name: "The Meadows", slug: "the-meadows" },
      { name: "The Lakes", slug: "the-lakes" },
      { name: "The Springs", slug: "the-springs" },
      { name: "Dubai Marina", slug: "dubai-marina" },
    ],
  },

  "dubai-investment-park": {
    slug: "dubai-investment-park",
    name: "Dubai Investment Park",
    shortName: "DIP",
    group: "New Dubai & Suburbs",
    tagline: "Industrial warehouse, commercial & residential junk collection across DIP 1 & 2",
    intro:
      "Operating across both industrial sectors and residential enclaves in DIP 1 and DIP 2, our specialized crew handles large-scale commercial warehouse strip-outs, pallet removals, and residential apartment clearances in Green Community, Ewan Residences, and Dunes Village.",
    image: warehouseImg,
    heroHighlights: [
      "Dual industrial warehouse & residential community coverage",
      "Pallets, metal racking & commercial packaging disposal",
      "Same-day service across DIP 1, DIP 2 & Green Community",
    ],
    localContext: {
      propertyTypes:
        "Light industrial warehouses, logistics depots, commercial showrooms, alongside residential complexes like Ewan Residences, Dunes Village, and Green Community villas.",
      accessLogistics:
        "Industrial units feature wide loading bays and roll-up shutter doors suited for high-tonnage trucks. For residential complexes, our drivers use designated visitor parking and ground-level service access points without disrupting gated security.",
      popularItems: [
        "Wooden cargo pallets, shrink wrap & heavy packaging",
        "Industrial shelving, metal racking & dismantled workbenches",
        "Apartment furniture, washing machines & bed frames",
        "Decommissioned office electronics & staff accommodation bunks",
      ],
    },
    keyServices: [
      {
        title: "Warehouse & Commercial Strip-Outs",
        description:
          "Clearing redundant inventory, broken pallet racking, packaging materials, and surplus logistics supplies from industrial units across DIP.",
      },
      {
        title: "Residential Apartment & Villa Clearances",
        description:
          "Fast turnarounds for tenants vacating apartments in Ewan Residences, Dunes Village, and surrounding residential clusters.",
      },
      {
        title: "Staff Accommodation Decommissioning",
        description:
          "Bulk removal of metal bunk beds, lockers, mattresses, and communal dining furniture with full disposal documentation.",
      },
    ],
    localTips: [
      "Specify whether your DIP unit is in Industrial 1 or 2 to ensure our nearest dispatch vehicle is routed via the quickest gate.",
      "We provide formal clearance certificates and itemized waste manifests for corporate ESG compliance.",
      "Heavy industrial racking is unbolted and dismantled on-site by our trained technicians.",
    ],
    faqs: [
      {
        q: "Can you handle large-volume commercial clearances in DIP warehouses?",
        a: "Yes. We operate multiple heavy-duty trucks and can mobilize full loading teams for high-capacity warehouse cleanouts.",
      },
      {
        q: "Do you clear residential apartments in DIP 1 & 2?",
        a: "Yes, we regularly service residential buildings across Dunes Village, Ewan Residences, Ritaj, and Green Community.",
      },
      {
        q: "Do you provide certified metal and electronic recycling?",
        a: "Yes, all metals, electronics, and cardboard are routed to licensed Dubai recycling facilities.",
      },
    ],
    seoDescription:
      "Commercial warehouse & residential junk removal in Dubai Investment Park (DIP). Industrial racking, pallet disposal, apartment cleanouts, and office clearances in DIP 1 & 2.",
    nearbyAreas: [
      { name: "Green Community Village", slug: "green-community-village" },
      { name: "Dubai South", slug: "dubai-south" },
      { name: "Al Furjan", slug: "al-furjan" },
      { name: "Jumeirah Golf Estates", slug: "jumeirah-golf-estates" },
    ],
  },

  "dubai-motor-city": {
    slug: "dubai-motor-city",
    name: "Dubai Motor City",
    shortName: "Motor City",
    group: "New Dubai & Suburbs",
    tagline: "Spacious apartment & townhouse clearances across Uptown & Green Community",
    intro:
      "With its European-style cobblestone streets, high ceilings, and oversized balconies, Dubai Motor City is a vibrant residential community. Our crew provides hassle-free junk removal across Uptown Motor City (Shakespeare, Fox Hill, Dickens Circus) and Green Community Motor City villas.",
    image: householdImg,
    heroHighlights: [
      "Full coverage across Uptown Motor City & Fox Hill",
      "Oversized balcony furniture, planters & barbecue removal",
      "Underground parking loading bay coordination",
    ],
    localContext: {
      propertyTypes:
        "Generous low-to-mid rise apartments with large wrap-around terraces, duplex penthouses, and spacious standalone townhouses.",
      accessLogistics:
        "Motor City residential buildings feature basement parking with lift lobbies and wide pedestrian walkways. We coordinate with building security (Union Properties management) for visitor clearance and use padded carts along corridor carpets.",
      popularItems: [
        "Deep-seat terrace sectionals, rattan chairs & umbrella stands",
        "King-size bedroom suites, heavy wardrobes & bookshelves",
        "Kids' go-karts, bicycles & sports equipment",
        "Renovation tile debris, packaging & old kitchen white goods",
      ],
    },
    keyServices: [
      {
        title: "Large Balcony & Terrace Clearances",
        description:
          "Clear overgrown planters, artificial turf, rusted barbecues, and weathered outdoor sets from Motor City's signature expansive terraces.",
      },
      {
        title: "Duplex & Apartment Move-Out Clears",
        description:
          "Complete end-of-tenancy removals ensuring your handover inspection with landlord or property manager passes with zero issues.",
      },
      {
        title: "Garage & Workshop Decluttering",
        description:
          "Remove unwanted automotive equipment, tool racks, tires, and storage boxes from townhouses and garage bays.",
      },
    ],
    localTips: [
      "Let us know your Circus name and building number (e.g. Fox Hill 4, Shakespeare Circus 2) for direct basement loading bay access.",
      "We bring protective blankets for large wooden furniture to prevent scuffs along wide apartment hallways.",
      "Take advantage of our same-day morning booking slots for fast afternoon clearances.",
    ],
    faqs: [
      {
        q: "Can you carry heavy terrace furniture down from top-floor duplexes?",
        a: "Yes, our team is equipped with lifting straps and dollies to safely transport heavy terrace sets down internal stairs and through elevators.",
      },
      {
        q: "Do you service Green Community Motor City villas?",
        a: "Yes, we clear villas, townhouses, and bungalows across all of Green Community Motor City.",
      },
      {
        q: "What happens to reusable furniture collected in Motor City?",
        a: "Reusable items in good condition are sorted and donated to registered UAE humanitarian partners.",
      },
    ],
    seoDescription:
      "Reliable junk removal in Dubai Motor City. Apartment move-out cleanouts, large terrace furniture disposal, and garage clearance across Uptown Motor City & Fox Hill.",
    nearbyAreas: [
      { name: "Dubai Sports City", slug: "dubai-sports-city" },
      { name: "Arabian Ranches", slug: "arabian-ranches" },
      { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
      { name: "Damac Hills", slug: "damac-hills" },
    ],
  },

  "dubai-south": {
    slug: "dubai-south",
    name: "Dubai South",
    shortName: "Dubai South",
    group: "New Dubai & Suburbs",
    tagline: "Complete residential & logistics junk removal near Al Maktoum Airport",
    intro:
      "As Dubai's flagship aviation, logistics, and master-planned residential hub, Dubai South is rapidly expanding. We provide prompt junk collection for The Pulse, Residential District apartments, South Bay villas, and commercial logistics hubs near DWC.",
    image: villaImg,
    heroHighlights: [
      "Same-day coverage across The Pulse & Residential District",
      "New handover packaging, furniture & appliance removals",
      "Commercial logistics & airport corridor clearance capability",
    ],
    localContext: {
      propertyTypes:
        "Modern townhouses, contemporary apartment complexes (The Pulse, Sakany), new waterfront villas (South Bay), and expansive commercial logistics parks.",
      accessLogistics:
        "Dubai South's wide avenues and spacious property driveways allow rapid vehicle maneuvering. For apartment buildings, security desks require standard contractor check-in, which our licensed crew completes promptly.",
      popularItems: [
        "New property move-in carton boxes, foam & wooden crates",
        "Replaced tenant furniture, sofa beds & wardrobes",
        "Washing machines, dishwashers & kitchen small appliances",
        "Logistics pallets, shipping cartons & commercial racking",
      ],
    },
    keyServices: [
      {
        title: "New Villa & Townhouse Move-In Debris Removal",
        description:
          "Clear mountains of cardboard cartons, Styrofoam, wooden pallets, and protective plastic left behind after furnishing your new home.",
      },
      {
        title: "The Pulse Apartment Tenancy Clearouts",
        description:
          "End-of-lease clearances for departing tenants and landlords seeking quick turnarounds for new lease listings.",
      },
      {
        title: "Commercial Facility & Office Waste Clearance",
        description:
          "Removal of outdated office equipment, breakroom appliances, and redundant warehouse storage in Dubai South Business Park.",
      },
    ],
    localTips: [
      "Tell us if you are in a newly handed-over cluster so our driver takes the latest opened community access roads.",
      "We bundle cardboard, bubble wrap, and polystyrene for clean eco-friendly recycling.",
      "Fixed quotes are confirmed upfront via WhatsApp with no distance surcharges for Dubai South.",
    ],
    faqs: [
      {
        q: "How quickly can your trucks reach Dubai South?",
        a: "We have daily dedicated dispatch routes covering Dubai South, DIP, and JVC, offering arrival windows within 2 to 3 hours.",
      },
      {
        q: "Do you collect construction and snagging leftovers?",
        a: "We remove non-hazardous leftover tiles, packaging materials, carpet scraps, and discarded fixtures from new properties.",
      },
      {
        q: "Can you clear both residential and commercial units?",
        a: "Yes, we handle residential townhouses in The Pulse as well as commercial offices in the Business Park.",
      },
    ],
    seoDescription:
      "Fast junk removal in Dubai South. New home move-in packaging clearance, apartment cleanouts, furniture disposal, and commercial waste pickup in The Pulse & DWC area.",
    nearbyAreas: [
      { name: "Dubai Investment Park", slug: "dubai-investment-park" },
      { name: "Remraam", slug: "remraam" },
      { name: "Al Furjan", slug: "al-furjan" },
      { name: "Dubai Sports City", slug: "dubai-sports-city" },
    ],
  },

  "dubai-internet-city": {
    slug: "dubai-internet-city",
    name: "Dubai Internet City",
    shortName: "DIC",
    group: "Business & Tech Districts",
    tagline: "Specialized corporate IT, office & tech park junk removal",
    intro:
      "As the region's foremost tech hub, Dubai Internet City (DIC) demands secure, fast, and compliant corporate office clearances. We work around your tech team's schedule, removing workstations, server room clutter, and obsolete IT equipment during evenings and weekends.",
    image: officeImg,
    heroHighlights: [
      "TECOM Group building security & permit protocols handled",
      "Certified data hardware, server rack & e-waste disposal",
      "After-hours & weekend commercial office clearances",
    ],
    localContext: {
      propertyTypes:
        "Commercial tech office towers, multi-tenant corporate headquarters, innovation hubs, and media-tech campuses.",
      accessLogistics:
        "DIC office towers require strict TECOM contractor gate passes, security method statements, and loading bay reservations. We submit all required trade license details in advance and operate during off-peak hours to avoid shared lift congestion.",
      popularItems: [
        "Office desks, ergonomic mesh chairs & collaborative booths",
        "Decommissioned server cabinets, cables & network switches",
        "Monitors, PCs, laptops, printer units & display screens",
        "Conference tables, acoustic dividers & breakroom furniture",
      ],
    },
    keyServices: [
      {
        title: "Corporate Office Decommissioning",
        description:
          "Full floor and multi-unit office clearances for tech startups and multinationals relocating or adopting hybrid workspaces.",
      },
      {
        title: "Secure Electronic Waste (E-Waste) Recycling",
        description:
          "Responsible collection and certified recycling of computer towers, monitors, cabling, and peripherals in compliance with Dubai Municipality standards.",
      },
      {
        title: "Workstation & Partition Dismantling",
        description:
          "Disassembly of modular cubicles, acoustic wall panels, and heavy conference tables with clean removal and sweeping.",
      },
    ],
    localTips: [
      "Book an evening slot (after 6:00 PM) or weekend clearout so your staff experience zero downtime.",
      "We provide asset disposal certificates for corporate accounting and IT department sign-offs.",
      "Send a quick video walkthrough of the office floor on WhatsApp for a firm, fixed commercial quotation.",
    ],
    faqs: [
      {
        q: "Do you work with TECOM building security in DIC?",
        a: "Yes, we regularly provide insurance certificates, crew Emirates IDs, and vehicle details to TECOM facilities management.",
      },
      {
        q: "How do you handle confidential electronic hardware & e-waste in DIC?",
        a: "We offer physical destruction confirmations and transport all electronics directly to licensed UAE recycling plants.",
      },
      {
        q: "Can you clear a single meeting room or small office suite?",
        a: "Yes, we cater to single-room office cleanups as well as multi-story corporate headquarters.",
      },
    ],
    seoDescription:
      "Corporate office junk removal and e-waste disposal in Dubai Internet City (DIC). Workstation dismantling, server room cleanouts, and after-hours commercial clearances.",
    nearbyAreas: [
      { name: "The Greens", slug: "the-greens" },
      { name: "Dubai Marina", slug: "dubai-marina" },
      { name: "Palm Jumeirah", slug: "palm-jumeirah" },
      { name: "Al Barsha", slug: "al-barsha" },
    ],
  },

  "the-greens": {
    slug: "the-greens",
    name: "The Greens",
    shortName: "The Greens",
    group: "Business & Tech Districts",
    tagline: "Tranquil apartment clearances across Al Sidir, Al Ghaf & Al Samar",
    intro:
      "Nestled around shaded courtyards and tranquil lakes, The Greens is a quiet residential sanctuary. Our uniformed team navigates Emaar's established low-rise buildings with quiet care, ensuring peaceful neighbor relations and spotless building corridors.",
    image: householdImg,
    heroHighlights: [
      "Emaar Community Management low-rise building compliance",
      "Same-day apartment move-out & furniture clearances",
      "Careful handling in tight courtyard corridors & elevators",
    ],
    localContext: {
      propertyTypes:
        "Established 4 to 7 storey low-rise residential apartment buildings (Al Sidir, Al Ghaf, Al Dhafrah, Al Jaz, Al Samar, Al Nakheel) and contemporary high-rise towers in The Views.",
      accessLogistics:
        "The Greens features shared inner courtyards and dedicated underground resident parking. We park in designated loading bays, protect carpeted corridors with soft-wheeled trolleys, and adhere to quiet community hours.",
      popularItems: [
        "Balcony bistro sets, potted plants & sunshades",
        "Sectional sofas, bed frames & memory foam mattresses",
        "Old washing machines, compact fridges & microwaves",
        "End-of-lease boxed rubbish, clothes racks & storage bins",
      ],
    },
    keyServices: [
      {
        title: "The Greens Apartment Move-Out Clearance",
        description:
          "Full end-of-tenancy clearances ensuring departing tenants receive their full security deposit without landlord deductions.",
      },
      {
        title: "Balcony & Courtyard Clutter Removal",
        description:
          "Clear away weathered planter boxes, balcony turf, rusted tables, and neglected outdoor furniture.",
      },
      {
        title: "Single-Item & Sofa Removal",
        description:
          "Quick same-day collection for old sofas, broken dining sets, or redundant appliances that need to go immediately.",
      },
    ],
    localTips: [
      "Let us know your cluster name (e.g. Al Ghaf 2, Al Samar 4) for direct arrival at the nearest service lobby.",
      "Our team uses padded wraps to prevent elevator handrail marks during furniture transport.",
      "We provide afternoon and early evening slots convenient for working professionals.",
    ],
    faqs: [
      {
        q: "Do you service both The Greens and The Views?",
        a: "Yes, we clear low-rise buildings in The Greens as well as high-rise towers in The Views (e.g. Golf Towers, Travo, Arno).",
      },
      {
        q: "How do you handle elevator reservations in Emaar buildings?",
        a: "We coordinate with on-site building security upon arrival, showing our trade license to use the service elevator smoothly.",
      },
      {
        q: "Can you take away bulky mattresses and sofas on the same day?",
        a: "Yes, single-item and multi-item pickups in The Greens are routinely completed on the same day if booked before noon.",
      },
    ],
    seoDescription:
      "Quiet, dependable junk removal in The Greens, Dubai. Apartment cleanouts, balcony furniture removal, and move-out clearances across Al Sidir, Al Ghaf & The Views.",
    nearbyAreas: [
      { name: "The Springs", slug: "the-springs" },
      { name: "Dubai Internet City", slug: "dubai-internet-city" },
      { name: "Dubai Marina", slug: "dubai-marina" },
      { name: "Emirates Hills", slug: "emirates-hills" },
    ],
  },

  "damac-hills": {
    slug: "damac-hills",
    name: "Damac Hills",
    shortName: "Damac Hills",
    group: "Villa Communities",
    tagline: "Villa, townhouse & apartment junk removal around Trump International Golf Club",
    intro:
      "Covering the expansive luxury golf development of Damac Hills (Akoya), our crew clears standalone villas in Silver Springs, Richmond, and Rockwood, townhouses in Pelham, and modern apartments in Loreto and Golf Horizon with total care and Damac community gate compliance.",
    image: villaImg,
    heroHighlights: [
      "Damac community management security clearance coordinated",
      "Spacious multi-truck capacity for large golf course villas",
      "Poolside sun loungers, pergolas & garden waste removals",
    ],
    localContext: {
      propertyTypes:
        "Luxury 3 to 6 bedroom standalone villas (Silver Springs, Topanga, Queens Meadows), modern townhouses (Pelham, Trinity), and mid-rise golf-view apartments (Loreto, Bellavista, Golf Panorama).",
      accessLogistics:
        "Damac Hills features strict 24/7 security gatehouses across its multiple community clusters. Our licensed vehicles provide driver credentials at the gatehouse for swift access, parking respectfully on private driveways or dedicated apartment loading bays.",
      popularItems: [
        "Weathered outdoor patio loungers, daybeds & umbrella sets",
        "Kids' trampolines, basketball hoops & garden climbing frames",
        "King-size bedroom furniture, dressing tables & large wardrobes",
        "Storage room boxes, gym treadmills & redundant white goods",
      ],
    },
    keyServices: [
      {
        title: "Damac Hills Villa Handover Cleanouts",
        description:
          "Complete move-out and pre-renovation clearances for luxury villas, ensuring all rooms, garages, and landscaped areas are left spotless.",
      },
      {
        title: "Golf-Facing Apartment Clearances",
        description:
          "Fast turnarounds for apartments in Loreto, Golf Horizon, and Bellavista with protective elevator padding and quiet handling.",
      },
      {
        title: "Garden, Pool & Landscape Clearance",
        description:
          "Removal of fallen palm fronds, soil bags, broken garden furniture, and poolside loungers after garden revamps.",
      },
    ],
    localTips: [
      "Let us know your specific cluster name (e.g. Richmond Gate, Silver Springs 2) for direct GPS routing.",
      "We provide power tools on-site to disassemble large outdoor pergolas and multi-piece play sets.",
      "Book before midday for same-afternoon clearance across all Damac Hills clusters.",
    ],
    faqs: [
      {
        q: "Do you service all sub-communities within Damac Hills 1?",
        a: "Yes, we cover Silver Springs, Richmond, Rockwood, Topanga, Pelham, Queens Meadows, Loreto, Golf Panorama, Bellavista, and surrounding enclaves.",
      },
      {
        q: "Can you clear heavy gym equipment and multi-gyms?",
        a: "Yes, our team is experienced in dismantling and transporting commercial and home gym equipment safely.",
      },
      {
        q: "Do you handle building security permits for Damac Hills apartments?",
        a: "Yes, we submit our company registration and trade license details to building security desks upon arrival.",
      },
    ],
    seoDescription:
      "Premium junk removal in Damac Hills, Dubai. Luxury villa cleanouts, apartment furniture removal, garden waste collection, and garage decluttering across all Damac clusters.",
    nearbyAreas: [
      { name: "Mudon", slug: "mudon" },
      { name: "Arabian Ranches 2", slug: "arabian-ranches-2" },
      { name: "Damac Hills 2", slug: "damac-hills-2" },
      { name: "Dubai Motor City", slug: "dubai-motor-city" },
    ],
  },

  mudon: {
    slug: "mudon",
    name: "Mudon",
    shortName: "Mudon",
    group: "Villa Communities",
    tagline: "Family-friendly villa & townhouse junk collection across Arabella & Rahat",
    intro:
      "Located in the heart of Dubailand, Mudon is a thriving family neighborhood. Our uniformed team provides quiet, dependable junk removal across Arabella 1, 2, and 3, Rahat, Naseem, and Mudon Views apartments, helping families declutter without stress.",
    image: householdImg,
    heroHighlights: [
      "Full coverage across Arabella 1–3, Rahat & Naseem",
      "Dubai Properties Community Management security compliance",
      "Garage, storage room & children's play equipment removal",
    ],
    localContext: {
      propertyTypes:
        "Spacious 3 to 5 bedroom family townhouses and detached villas (Arabella, Rahat, Naseem, Al Salam) and mid-rise apartments in Mudon Views.",
      accessLogistics:
        "Mudon's gated sub-communities operate security barrier checkpoints. Our registered vans present team Emirates IDs and job locations for hassle-free entry, parking neatly on villa driveways to keep community lanes open.",
      popularItems: [
        "Children's playhouses, bunk beds, study desks & toy chests",
        "Garden trimmings, artificial grass roll-ups & outdoor furniture",
        "Large sectional sofas, dining tables & TV consoles",
        "Garage shelving units, storage boxes & redundant appliances",
      ],
    },
    keyServices: [
      {
        title: "Arabella Townhouse Decluttering",
        description:
          "Clear out under-stair storage, kids' rooms, utility closets, and private garages to reclaim spacious family living areas.",
      },
      {
        title: "Mudon Villa Move-Out Clearance",
        description:
          "Full handover cleanouts for families relocating or upgrading, leaving the property broom-clean for tenancy inspections.",
      },
      {
        title: "Backyard & Garden Waste Removal",
        description:
          "Prompt collection of hedge trimmings, palm branches, broken patio sets, and play structures.",
      },
    ],
    localTips: [
      "Specify whether your home is in Arabella 1, 2, 3, Rahat, or Naseem for exact gate entry coordination.",
      "Our team can safely dismantle large wooden and metal bunk beds inside bedrooms before transport.",
      "We provide upfront fixed rates with zero hidden call-out fees for all Mudon addresses.",
    ],
    faqs: [
      {
        q: "How fast can you arrive in Mudon?",
        a: "We have clearance teams operating along Al Qudra Road daily and can typically reach Mudon within 2 to 3 hours of quote confirmation.",
      },
      {
        q: "Can you clear both the Mudon garage and backyard in one visit?",
        a: "Yes, our spacious trucks easily accommodate mixed loads of household furniture, garage storage, and green garden waste.",
      },
      {
        q: "Are your staff trained to protect interior walls and doors?",
        a: "Yes, our crew uses padded moving blankets and protective corner wraps on all large furniture items.",
      },
    ],
    seoDescription:
      "Reliable junk removal in Mudon, Dubai. Townhouse cleanouts, furniture disposal, garden waste collection, and garage clearance across Arabella, Rahat & Naseem.",
    nearbyAreas: [
      { name: "Damac Hills", slug: "damac-hills" },
      { name: "Arabian Ranches 2", slug: "arabian-ranches-2" },
      { name: "Remraam", slug: "remraam" },
      { name: "Dubai Motor City", slug: "dubai-motor-city" },
    ],
  },

  remraam: {
    slug: "remraam",
    name: "Remraam",
    shortName: "Remraam",
    group: "New Dubai & Suburbs",
    tagline: "Tranquil apartment clearances across Al Thamam & Al Ramth clusters",
    intro:
      "Set amidst peaceful landscaped lawns in Dubailand, Remraam is known for its spacious community living. Our crew provides efficient junk collection and apartment move-out clearances across both Al Thamam and Al Ramth clusters with courteous, quiet service.",
    image: furnitureImg,
    heroHighlights: [
      "Full coverage across Al Thamam & Al Ramth low-rise buildings",
      "Same-day apartment move-out & furniture clearances",
      "Experienced handling for walk-up buildings and podium levels",
    ],
    localContext: {
      propertyTypes:
        "Low-to-mid rise Moorish-inspired apartment buildings featuring generous terrace layouts, surrounded by shaded community parks and walkways.",
      accessLogistics:
        "Remraam properties utilize podium-level walkways and perimeter parking lots. Our team utilizes heavy-duty rubber-wheeled dollies and lifting harnesses to transport bulky furniture safely from upper floors down to our collection vans.",
      popularItems: [
        "Balcony furniture, privacy screens & outdoor planters",
        "Living room sofas, coffee tables & TV units",
        "Bed frames, spring mattresses & modular wardrobes",
        "Used washing machines, refrigerators & kitchen appliances",
      ],
    },
    keyServices: [
      {
        title: "Remraam Apartment Move-Out Clears",
        description:
          "Complete end-of-lease clearances ensuring departing tenants leave the apartment empty and clean for landlord handovers.",
      },
      {
        title: "Balcony & Terrace Junk Removal",
        description:
          "Clearing overgrown potted plants, damaged patio tables, and unwanted storage from Remraam's spacious balconies.",
      },
      {
        title: "Single-Item Furniture Pickups",
        description:
          "Same-day removal of old mattresses, broken sofas, or redundant refrigerators without heavy lifting on your part.",
      },
    ],
    localTips: [
      "Let us know your cluster and building number (e.g. Al Ramth 12, Al Thamam 45) so our driver parks in the closest loading bay.",
      "We provide floor protection and dismantle large wardrobes on-site for easy navigation through apartment corridors.",
      "Morning bookings on WhatsApp ensure swift afternoon clearance.",
    ],
    faqs: [
      {
        q: "Do you service both Al Thamam and Al Ramth in Remraam?",
        a: "Yes, our clearance vans cover every building across both Al Thamam and Al Ramth.",
      },
      {
        q: "Can you handle clearances from upper floors without large service lifts?",
        a: "Yes, our experienced movers use specialized carrying straps and team lifts to safely navigate building stairwells and elevators.",
      },
      {
        q: "Do you safely disconnect washing machines and appliances in Remraam?",
        a: "Yes, safe disconnection of water and drainage pipes is included at no extra charge.",
      },
    ],
    seoDescription:
      "Affordable, professional junk removal in Remraam, Dubai. Apartment cleanouts, furniture removal, sofa disposal, and appliance collection across Al Thamam & Al Ramth.",
    nearbyAreas: [
      { name: "Mudon", slug: "mudon" },
      { name: "Damac Hills", slug: "damac-hills" },
      { name: "Dubai South", slug: "dubai-south" },
      { name: "Arabian Ranches 2", slug: "arabian-ranches-2" },
    ],
  },

  "dubai-creek-harbour": {
    slug: "dubai-creek-harbour",
    name: "Dubai Creek Harbour",
    shortName: "Creek Harbour",
    group: "Waterfront & Islands",
    tagline: "Ultra-modern waterfront tower clearances overlooking the Dubai skyline",
    intro:
      "As Emaar's premier futuristic waterfront destination, Dubai Creek Harbour features stunning luxury high-rises. Our uniformed crew provides discreet, high-standard clearances for Creek Horizon, Creek Gate, The Cove, and Dubai Creek Residences with meticulous care for floor-to-ceiling glass and designer finishes.",
    image: skylineImg,
    heroHighlights: [
      "Emaar waterfront luxury tower compliance & service lift booking",
      "Floor-to-ceiling glass & marble corridor protective shielding",
      "Same-day designer furniture, mattress & appliance removals",
    ],
    localContext: {
      propertyTypes:
        "Luxury high-rise waterfront apartment towers, branded penthouses (Address Grand Creek Harbour), and modern island podium residences.",
      accessLogistics:
        "Dubai Creek Harbour towers enforce strict move-in/move-out guidelines, service elevator reservations, and loading dock access rules. Our team submits all trade documentation and utilizes padded wraps and rubber-wheeled dollies for quiet, smooth transit.",
      popularItems: [
        "Modern designer sofas, accent armchairs & marble tables",
        "King-size upholstered beds & luxury mattresses",
        "Balcony lounge seating overlooking the Creek and Downtown skyline",
        "Move-out packing boxes, excess decor & redundant home tech",
      ],
    },
    keyServices: [
      {
        title: "Waterfront Tower Apartment Clearances",
        description:
          "Discreet, pristine removal of unwanted furniture and tenant items before lease handovers or interior redesigns.",
      },
      {
        title: "Balcony Lounge & Terrace Decluttering",
        description:
          "Clearing luxury outdoor seating, bar sets, and oversized decorative planters from expansive Creek-view balconies.",
      },
      {
        title: "Creek Harbour Designer Furniture Removal",
        description:
          "Safe dismantling of delicate modular wardrobes, custom credenzas, and oversized bed frames without wall contact.",
      },
    ],
    localTips: [
      "Book your building's service elevator with concierge 24 hours in advance to guarantee your preferred clearance time slot.",
      "We provide digital copies of our company trade license and driver IDs instantly via WhatsApp for fast security gate pass approval.",
      "Our team wears shoe covers and uses padded covers for all large items in transit.",
    ],
    faqs: [
      {
        q: "Do you service all towers across Dubai Creek Harbour?",
        a: "Yes, we regularly clear residences in Dubai Creek Residences, Creek Horizon, Creek Gate, The Cove, Harbour Views, Creek Rise, and Address Harbour Point.",
      },
      {
        q: "How do you protect luxury elevator interiors and marble lobbies?",
        a: "We wrap all large pieces in heavy moving blankets and use rubber-wheeled trolleys to prevent scuffs or marks.",
      },
      {
        q: "Can you handle same-day single-item pickups in Creek Harbour?",
        a: "Yes, if booked before noon, our team can collect individual mattresses, sofas, or appliances that same afternoon.",
      },
    ],
    seoDescription:
      "Luxury junk removal in Dubai Creek Harbour. High-rise apartment clearouts, designer furniture disposal, and move-out clearances across Creek Horizon, The Cove & Creek Gate.",
    nearbyAreas: [
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Business Bay", slug: "business-bay" },
      { name: "Dubai Design District", slug: "dubai-design-district" },
      { name: "Meydan", slug: "meydan" },
    ],
  },

  "dubai-sports-city": {
    slug: "dubai-sports-city",
    name: "Dubai Sports City",
    shortName: "Sports City",
    group: "New Dubai & Suburbs",
    tagline: "Fast junk collection for Victory Heights villas & Canal Residence towers",
    intro:
      "Whether clearing a luxury golf villa in Victory Heights or an apartment along Canal Residence West, our crew provides prompt, professional junk removal across Dubai Sports City with full community security compliance and transparent pricing.",
    image: villaImg,
    heroHighlights: [
      "Dual Victory Heights golf villa & residential tower coverage",
      "Gym equipment, treadmills & sports gear removal specialists",
      "Same-day apartment move-out & furniture clearances",
    ],
    localContext: {
      propertyTypes:
        "Prestigious Victory Heights golf course villas (Carmen, Esmeralda, Novelia, Estella, Calida) and residential apartment towers (Canal Residence, Elite Sports Residence, Champions Tower, Royal Residence).",
      accessLogistics:
        "Victory Heights villas require checkpoint security passes which our registered drivers obtain smoothly. For apartment towers, we use designated basement loading bays and service elevators to keep main lobbies clear.",
      popularItems: [
        "Heavy gym treadmills, weight benches & rowing machines",
        "Victory Heights garden cuttings, patio tables & barbecues",
        "Sectional sofas, king beds & flatpack wardrobes",
        "End-of-tenancy apartment boxes, packaging & appliances",
      ],
    },
    keyServices: [
      {
        title: "Victory Heights Villa & Garden Cleanouts",
        description:
          "Complete clearances for golf course villas, including garage decluttering, garden pruning waste, and patio furniture disposal.",
      },
      {
        title: "Sports City Apartment Move-Out Clearances",
        description:
          "Fast turnarounds for tenants vacating towers along the Canal and surrounding residential clusters.",
      },
      {
        title: "Home Gym & Fitness Equipment Removal",
        description:
          "Specialized dismantling and transport of bulky treadmills, elliptical trainers, and multi-gym structures.",
      },
    ],
    localTips: [
      "Specify whether your address is in Victory Heights (village name) or an apartment tower for exact dispatch routing.",
      "Send WhatsApp photos of heavy exercise machinery so our crew arrives with proper unbolting wrenches and dollies.",
      "We offer same-day collection slots across Sports City seven days a week.",
    ],
    faqs: [
      {
        q: "Do you clear all villages within Victory Heights?",
        a: "Yes, we service Carmen, Esmeralda, Novelia, Estella, Calida, Morella, and Oliva villages.",
      },
      {
        q: "Can you disassemble and remove a heavy treadmill from an upstairs room?",
        a: "Yes, our technicians dismantle the console, frame, and motor base upstairs and carry components down safely.",
      },
      {
        q: "What are your arrival timings in Dubai Sports City?",
        a: "We offer convenient 2-hour arrival windows throughout the day, including evenings and weekends at no extra charge.",
      },
    ],
    seoDescription:
      "Reliable junk removal in Dubai Sports City. Victory Heights villa cleanouts, apartment move-out clearance, gym equipment disposal, and furniture collection.",
    nearbyAreas: [
      { name: "Dubai Motor City", slug: "dubai-motor-city" },
      { name: "Jumeirah Village Circle", slug: "jumeirah-village-circle" },
      { name: "Damac Hills", slug: "damac-hills" },
      { name: "Arabian Ranches", slug: "arabian-ranches" },
    ],
  },

  "arabian-ranches-2": {
    slug: "arabian-ranches-2",
    name: "Arabian Ranches 2",
    shortName: "Ranches 2",
    group: "Villa Communities",
    tagline: "Dependable villa & garden junk collection across Casa, Palma, Lila & Camelia",
    intro:
      "Arabian Ranches 2 is an established desert-themed family haven. Our uniformed crew clears modern Spanish and contemporary villas across Casa, Palma, Lila, Rasha, Rosa, Yasmin, Samara, Azalea, and Camelia with total respect for community quiet hours and manicured gardens.",
    image: villaImg,
    heroHighlights: [
      "Full coverage across all 9 Ranches 2 sub-communities",
      "Emaar Community Management security gatehouse access",
      "Backyard pergola, patio furniture & garden waste clearance",
    ],
    localContext: {
      propertyTypes:
        "Contemporary 3 to 6 bedroom luxury detached villas (Casa, Palma, Lila, Rosa, Rasha, Yasmin, Samara, Azalea) and modern townhouses in Camelia.",
      accessLogistics:
        "Arabian Ranches 2 operates 24/7 security gatehouses across its tree-lined avenues. Our registered vehicles present driver IDs at security check-in for smooth entry and park directly on private paved driveways.",
      popularItems: [
        "Backyard wooden pergolas, teak patio sets & sun umbrellas",
        "Children's wooden playhouses, trampolines & swing sets",
        "Large family sectional sofas, king bed sets & wardrobes",
        "Desert landscaping cuttings, palm branches & soil bags",
      ],
    },
    keyServices: [
      {
        title: "Full Villa Handover & Move-Out Clearances",
        description:
          "Complete property cleanouts before lease handovers, sales, or major interior refits, leaving rooms broom-clean.",
      },
      {
        title: "Garden, Patio & Pergola Clearance",
        description:
          "Prompt dismantling and removal of weathered wooden shade pergolas, patio dining sets, and landscaping green waste.",
      },
      {
        title: "Garage Decluttering & Storage Organization",
        description:
          "Clearing out stored shipping boxes, redundant tools, sports gear, and old household appliances.",
      },
    ],
    localTips: [
      "Let us know your specific community gate (e.g. Casa Gate, Camelia 1) for the fastest arrival.",
      "We provide battery-powered unbolting tools to take down large pergolas and metal swing sets safely.",
      "Book before midday for same-day afternoon pickup across Ranches 2.",
    ],
    faqs: [
      {
        q: "Do you service all sub-communities in Arabian Ranches 2?",
        a: "Yes, we regularly service Casa, Palma, Lila, Rasha, Rosa, Yasmin, Samara, Azalea, and Camelia.",
      },
      {
        q: "Can you dismantle and haul away a large wooden garden pergola?",
        a: "Yes, our team brings reciprocating saws and wrenches to dismantle wooden and metal shade structures safely.",
      },
      {
        q: "What do you do with reusable family furniture?",
        a: "Items in good condition are routed to UAE charity partners for donation, while broken items are responsibly recycled.",
      },
    ],
    seoDescription:
      "Professional junk removal in Arabian Ranches 2, Dubai. Villa cleanouts, pergola dismantling, garden waste pickup, and garage decluttering in Casa, Palma, Lila & Camelia.",
    nearbyAreas: [
      { name: "Arabian Ranches", slug: "arabian-ranches" },
      { name: "Mudon", slug: "mudon" },
      { name: "Damac Hills", slug: "damac-hills" },
      { name: "The Sustainable City", slug: "dubai-motor-city" },
    ],
  },

  "al-barari": {
    slug: "al-barari",
    name: "Al Barari",
    shortName: "Al Barari",
    group: "Villa Communities",
    tagline: "Ultra-luxury botanical sanctuary & private estate clearances",
    intro:
      "Renowned as Dubai's greenest botanical enclave, Al Barari demands quiet discretion, immaculate presentation, and eco-conscious waste handling. Our uniformed crew clears luxury villas in The Residences and The Nest, as well as luxury residences in Seventh Heaven and Ashjar.",
    image: gardenImg,
    heroHighlights: [
      "Discreet white-glove clearance for luxury botanical estates",
      "High-capacity green garden & exotic foliage waste removal",
      "Marble floor runner protection & strict resident privacy",
    ],
    localContext: {
      propertyTypes:
        "Expansive 4 to 7 bedroom bespoke luxury villas (The Residences, The Nest, The Reserve) set in private botanical gardens, alongside luxury apartments in Seventh Heaven and Ashjar.",
      accessLogistics:
        "Al Barari enforces strict private security protocols. Our team undergoes security registration at the main gatehouse. We lay down heavy-duty floor protection to safeguard exotic timber flooring and natural stone driveways.",
      popularItems: [
        "Exotic garden foliage cuttings, palm branches & heavy stone planters",
        "Custom-made luxury patio daybeds, cabanas & poolside loungers",
        "Oversized Italian furniture, marble-top credenzas & king beds",
        "Private gym machinery, home theater electronics & basement storage",
      ],
    },
    keyServices: [
      {
        title: "Private Estate & Villa Cleanouts",
        description:
          "Comprehensive clearances for estate sales, tenancy handovers, or full interior redesigns with white-glove care throughout.",
      },
      {
        title: "Botanical Garden & Landscape Foliage Removal",
        description:
          "Multi-truck capacity to haul away heavy palm fronds, pruned trees, soil sacks, and outdoor water feature fixtures.",
      },
      {
        title: "Seventh Heaven & Ashjar Apartment Clearances",
        description:
          "Quiet, careful removal of high-end furniture and tenant items through residential service elevators.",
      },
    ],
    localTips: [
      "Coordinate gate clearance with your estate manager or Al Barari security desk prior to arrival.",
      "We provide written non-disclosure agreements (NDAs) for high-profile estate clearances.",
      "All garden green waste is routed to certified municipal composting facilities in alignment with Al Barari's eco-philosophy.",
    ],
    faqs: [
      {
        q: "Do you service both villas and apartments in Al Barari?",
        a: "Yes, we clear standalone mansions in The Residences and The Nest, as well as luxury residences in Seventh Heaven and Ashjar.",
      },
      {
        q: "How do you protect luxury timber and stone flooring in Al Barari residences?",
        a: "We use padded floor runners, corner guards, and team lifting straps to ensure zero contact with floors or walls.",
      },
      {
        q: "Can you handle high-volume garden foliage after major landscaping?",
        a: "Yes, we can dispatch multiple high-capacity flatbed trucks to remove large quantities of botanical waste in one day.",
      },
    ],
    seoDescription:
      "White-glove junk removal in Al Barari, Dubai. Luxury estate cleanouts, botanical garden waste removal, furniture disposal, and Seventh Heaven apartment clearances.",
    nearbyAreas: [
      { name: "The Villa", slug: "the-villa" },
      { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
      { name: "Arabian Ranches", slug: "arabian-ranches" },
      { name: "Nad Al Sheba", slug: "nad-al-sheba" },
    ],
  },

  "damac-hills-2": {
    slug: "damac-hills-2",
    name: "Damac Hills 2",
    shortName: "Damac Hills 2",
    group: "Villa Communities",
    tagline: "Affordable, fast villa & townhouse junk removal across all DH2 clusters",
    intro:
      "Located along the scenic Al Qudra road network, Damac Hills 2 (formerly Akoya Oxygen) is a vibrant community of modern villas and townhouses. We provide fast, reliable junk collection across Vardon, Amazonia, Claret, Janusia, Victoria, Pacifica, Aster, and Coursetia.",
    image: householdImg,
    heroHighlights: [
      "Full coverage across all 25+ Damac Hills 2 residential clusters",
      "New move-in packaging, cardboard & wooden crate clearances",
      "Garden green waste, patio sets & storage room decluttering",
    ],
    localContext: {
      propertyTypes:
        "Contemporary 3 to 6 bedroom townhouses and standalone villas situated in themed nature-oriented clusters (Water Town, Down Town, Sports Town).",
      accessLogistics:
        "Damac Hills 2 clusters feature barrier-controlled security gates. Our licensed dispatch vehicles check in at the main gate and sub-cluster gates, parking cleanly on private driveways for quick loading.",
      popularItems: [
        "Move-in furniture packaging, flatpack carton boxes & foam",
        "Bed frames, spring mattresses & modular wardrobes",
        "Garden lawn clippings, palm cuttings & outdoor seating",
        "Broken washing machines, dishwashers & small household tech",
      ],
    },
    keyServices: [
      {
        title: "New Home Move-In Packaging Removal",
        description:
          "Fast removal of large volumes of cardboard boxes, bubble wrap, Styrofoam, and wooden pallets following new home move-ins.",
      },
      {
        title: "Damac Hills 2 Townhouse Handover Clears",
        description:
          "Complete end-of-tenancy clearances ensuring departing tenants leave properties empty and clean.",
      },
      {
        title: "Garden, Patio & Backyard Waste Collection",
        description:
          "Clearing old barbecues, broken patio tables, artificial turf roll-offs, and garden cuttings.",
      },
    ],
    localTips: [
      "Provide your exact cluster name (e.g. Claret, Amazonia, Pacifica) for direct GPS gate navigation.",
      "We provide fixed, upfront pricing with no distance surcharges for Damac Hills 2.",
      "Combine household clutter and garden green waste into a single convenient truck pickup.",
    ],
    faqs: [
      {
        q: "Do you service all clusters in Damac Hills 2?",
        a: "Yes, we cover every cluster including Vardon, Claret, Amazonia, Janusia, Victoria, Pacifica, Aster, Coursetia, and Aquilegia.",
      },
      {
        q: "How quickly can your trucks arrive in Damac Hills 2?",
        a: "We operate dedicated daily runs along Al Qudra Road and Jebel Ali-Lehbab Road, offering arrival windows within 2 to 4 hours.",
      },
      {
        q: "Can you dismantle large wardrobes and beds?",
        a: "Yes, our crew brings full cordless tool sets to dismantle bedroom furniture quickly and safely.",
      },
    ],
    seoDescription:
      "Fast, affordable junk removal in Damac Hills 2 (Akoya Oxygen), Dubai. Townhouse cleanouts, furniture disposal, packaging recycling, and garden waste pickup.",
    nearbyAreas: [
      { name: "Damac Hills", slug: "damac-hills" },
      { name: "Mudon", slug: "mudon" },
      { name: "The Villa", slug: "the-villa" },
      { name: "Dubai South", slug: "dubai-south" },
    ],
  },

  "jumeirah-2": {
    slug: "jumeirah-2",
    name: "Jumeirah 2",
    shortName: "Jumeirah 2",
    group: "Jumeirah & Coastal Residential",
    tagline: "Discreet clearances for prestigious central Jumeirah coastal residences",
    intro:
      "Located in the heart of Jumeirah between Boxpark and the Arabian Gulf coast, Jumeirah 2 features high-end standalone villas, beachfront estates, and private family compounds. Our uniformed crew provides quiet, respectful clearances tailored to private residences.",
    image: householdImg,
    heroHighlights: [
      "Central coastal villa & private family compound specialists",
      "Majlis seating, luxury dining suites & courtyard clearouts",
      "Discreet handling with full floor, wall & gate protection",
    ],
    localContext: {
      propertyTypes:
        "Grand standalone luxury villas, private compound clusters, coastal estates, and boutique commercial clinics along Jumeirah Beach Road and Al Wasl Road.",
      accessLogistics:
        "Properties in Jumeirah 2 feature private gated boundary walls and wide interior paved courtyards. Our trucks park inside private gates for concealed loading, ensuring maximum household privacy.",
      popularItems: [
        "Traditional and modern Majlis sofa sets & custom carpets",
        "Heavy marble-top tables, solid wood buffets & display cabinets",
        "Poolside sun loungers, outdoor umbrellas & terrace heaters",
        "Old kitchen white goods, freezers & outbuilding storage",
      ],
    },
    keyServices: [
      {
        title: "Villa Majlis & Living Room Refreshes",
        description:
          "Clear out heavy traditional seating, carpets, custom upholstery, and large decor pieces with zero wall scuffs.",
      },
      {
        title: "Full Property & Outbuilding Clearances",
        description:
          "Clear guest villas, maid's quarters, driver annexes, external laundry rooms, and garden storage sheds.",
      },
      {
        title: "Renovation & Fixture Strip-Outs",
        description:
          "Removal of old kitchen cabinetry, bathroom vanity units, discarded tiles, and packaging materials.",
      },
    ],
    localTips: [
      "Let us know if parking is inside the private courtyard so our driver positions the vehicle close to the service entrance.",
      "We provide shoe covers and padded moving blankets for delicate indoor flooring.",
      "Same-day morning bookings on WhatsApp allow swift afternoon clearances.",
    ],
    faqs: [
      {
        q: "Can you clear items from multiple buildings inside one family compound?",
        a: "Yes, our team can clear the main villa, guest house, and external service quarters in a single coordinated visit.",
      },
      {
        q: "Do you take large, heavy marble and solid hardwood furniture?",
        a: "Yes, our movers are trained in heavy-lift team techniques with protective straps and padded blankets.",
      },
      {
        q: "How quickly can you arrive in Jumeirah 2?",
        a: "With our operational depot near Al Quoz, our trucks can be at your Jumeirah 2 doorstep within 60 to 90 minutes.",
      },
    ],
    seoDescription:
      "Discreet junk removal in Jumeirah 2, Dubai. Luxury villa cleanouts, Majlis furniture disposal, appliance collection, and courtyard clearances near Boxpark & Beach Road.",
    nearbyAreas: [
      { name: "Jumeirah 1", slug: "jumeirah-1" },
      { name: "Jumeirah", slug: "jumeirah" },
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Al Quoz", slug: "al-quoz" },
    ],
  },

  "jumeirah-1": {
    slug: "jumeirah-1",
    name: "Jumeirah 1",
    shortName: "Jumeirah 1",
    group: "Jumeirah & Coastal Residential",
    tagline: "Coastal villa, compound & commercial boutique clearances near La Mer",
    intro:
      "Bordering La Mer, Mercato Mall, and Dubai Marine Beach Resort, Jumeirah 1 is an iconic coastal quarter. Our crew provides dependable junk removal for heritage villas, private residences, boutique commercial villas, and embassies along Jumeirah Beach Road.",
    image: householdImg,
    heroHighlights: [
      "Coastal villa, clinic & commercial boutique clearance coverage",
      "Fast removal of old white goods, sofas, beds & storage clutter",
      "Close proximity to our central Al Quoz operations hub",
    ],
    localContext: {
      propertyTypes:
        "Standalone coastal residences, heritage family compounds, boutique medical clinics, design studios, and beachfront villas near La Mer and Dubai Marine.",
      accessLogistics:
        "Wide residential streets and spacious private villa driveways permit easy truck parking. For commercial villas and clinics along Jumeirah Beach Road, we coordinate early morning or evening collections to avoid customer parking congestion.",
      popularItems: [
        "Boutique clinic & office desks, waiting area chairs & cabinetry",
        "Coastal outdoor dining sets, sun loungers & beach gear",
        "Wardrobes, king mattresses & bulky bedroom suites",
        "Old refrigerators, chest freezers, ovens & washing machines",
      ],
    },
    keyServices: [
      {
        title: "Coastal Villa Handover & Move-Out Clearances",
        description:
          "Complete property cleanouts ensuring villas are handed back in pristine condition for new tenants or owners.",
      },
      {
        title: "Commercial Villa & Boutique Studio Clearouts",
        description:
          "Removal of old display units, office desks, waiting room furniture, and surplus inventory.",
      },
      {
        title: "Bulky White Goods & Appliance Removal",
        description:
          "Safe electrical and plumbing disconnection and eco-friendly disposal of large kitchen appliances.",
      },
    ],
    localTips: [
      "For commercial villas along Jumeirah Beach Road, evening pickup slots keep your daytime parking free for clients.",
      "Send WhatsApp photos of bulky items for an instant, firm fixed quotation.",
      "All working household appliances in good condition are routed to licensed UAE charities.",
    ],
    faqs: [
      {
        q: "Do you clear commercial villas and medical clinics in Jumeirah 1?",
        a: "Yes, we clear boutique offices, dental/aesthetic clinics, salons, and design studios along Jumeirah Beach Road.",
      },
      {
        q: "Can you remove old outdoor beach gear, pergolas, and patio furniture?",
        a: "Yes, we haul away weathered outdoor sets, pergolas, kayaks, surfboards, and garden storage sheds.",
      },
      {
        q: "How does pricing work for Jumeirah 1 villa cleanouts?",
        a: "We quote a transparent fixed price based on photos of your items on WhatsApp with zero hidden travel charges.",
      },
    ],
    seoDescription:
      "Reliable junk removal in Jumeirah 1, Dubai. Coastal villa cleanouts, boutique commercial clearance, furniture disposal, and appliance collection near La Mer & Mercato.",
    nearbyAreas: [
      { name: "Jumeirah 2", slug: "jumeirah-2" },
      { name: "Jumeirah", slug: "jumeirah" },
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Al Quoz", slug: "al-quoz" },
    ],
  },

  "dubai-design-district": {
    slug: "dubai-design-district",
    name: "Dubai Design District",
    shortName: "d3",
    group: "Business & Tech Districts",
    tagline: "Bespoke studio, showroom & exhibition junk removal in d3",
    intro:
      "At the epicentre of Dubai's creative and design scene, Dubai Design District (d3) hosts world-class design houses, fashion showrooms, and architectural studios. We provide discreet, after-hours clearances for temporary exhibition sets, showroom fixtures, studio mockups, and corporate office refits.",
    image: officeImg,
    heroHighlights: [
      "TECOM Group d3 security, permit & loading dock compliance",
      "Design studio, showroom & exhibition fixture dismantling",
      "After-hours & weekend clearances with zero disruption",
    ],
    localContext: {
      propertyTypes:
        "Contemporary commercial design buildings (Buildings 1 through 11), high-end fashion showrooms, creative agency suites, and concept retail spaces.",
      accessLogistics:
        "d3 enforces strict facility management rules, subterranean loading dock reservations, and service lift access passes. Our crew submits insurance documents in advance and operates during evening or weekend windows to keep creative work uninterrupted.",
      popularItems: [
        "Custom display plinths, mannequin stands & event backdrops",
        "Architectural model materials, foam boards & timber scraps",
        "High-end designer desks, ergonomic chairs & meeting tables",
        "Packaging cartons, bubble wrap & redundant sample stock",
      ],
    },
    keyServices: [
      {
        title: "Exhibition & Event Strip-Outs",
        description:
          "Rapid teardown and removal of temporary event installations, runway sets, exhibition pop-ups, and brand activations.",
      },
      {
        title: "Creative Studio & Office Clearances",
        description:
          "Clear out outdated design materials, excess prototype samples, broken lighting rigs, and unwanted office workstations.",
      },
      {
        title: "Eco-Friendly Material Recycling",
        description:
          "Segregating and recycling wood, acrylic, metals, and textiles at registered Dubai Municipality recovery plants.",
      },
    ],
    localTips: [
      "Book an after-hours slot (after 6:00 PM) or weekend morning for smooth, unhindered loading dock access.",
      "Send photo previews of custom exhibition builds so we bring proper power tools for clean dismantling.",
      "We provide itemized disposal manifests for corporate audits and sustainability reporting.",
    ],
    faqs: [
      {
        q: "Do you handle TECOM building security permits in d3?",
        a: "Yes, our company trade license, driver Emirates IDs, and vehicle registrations are pre-cleared for d3 loading dock access.",
      },
      {
        q: "Can you dismantle custom wooden, metal, and acrylic exhibition structures?",
        a: "Yes, our team is equipped with reciprocating saws, cordless drills, and pry bars to take down custom displays safely.",
      },
      {
        q: "Do you clear small design suites as well as full-building floors?",
        a: "Yes, we handle single-room studio cleanouts up to multi-floor agency decommissions.",
      },
    ],
    seoDescription:
      "Bespoke junk removal in Dubai Design District (d3). Showroom cleanouts, exhibition dismantling, creative studio clearance, and office waste disposal.",
    nearbyAreas: [
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Business Bay", slug: "business-bay" },
      { name: "Dubai Creek Harbour", slug: "dubai-creek-harbour" },
      { name: "Meydan", slug: "meydan" },
    ],
  },

  "jumeirah-golf-estates": {
    slug: "jumeirah-golf-estates",
    name: "Jumeirah Golf Estates",
    shortName: "JGE",
    group: "Villa Communities",
    tagline: "Luxury estate & golf course villa junk removal across Earth & Fire courses",
    intro:
      "Host to world championship golf tournaments, Jumeirah Golf Estates (JGE) represents elite luxury living. Our uniformed team caters to luxury golf villas across Flame Tree Ridge, Whispering Pines, Wildflower, Lime Tree Valley, and contemporary apartments in Al Andalus with white-glove care.",
    image: villaImg,
    heroHighlights: [
      "JGE Community Management security & gate clearance handled",
      "White-glove floor runner protection for luxury golf estates",
      "Landscaping green waste, golf cart garage & basement cleanouts",
    ],
    localContext: {
      propertyTypes:
        "Ultra-luxury custom-built 4 to 6 bedroom villas (Flame Tree Ridge, Redwood, Whispering Pines, Wildflower) and Mediterranean-style apartments and townhouses in Al Andalus.",
      accessLogistics:
        "JGE maintains strict security checkpoints at all gatehouses. Our registered fleet registers driver IDs upon entry and parks neatly on private villa driveways or underground Al Andalus parking bays without disturbing neighbors.",
      popularItems: [
        "Custom golf cart garage shelving, sports gear & tool racks",
        "Expansive outdoor patio loungers, daybeds & luxury umbrellas",
        "Palatial living room sectionals, marble dining sets & chandeliers",
        "Mature palm fronds, garden hedge trimmings & soil sacks",
      ],
    },
    keyServices: [
      {
        title: "Luxury Golf Villa Handover Clears",
        description:
          "Complete property cleanouts before major renovations, estate sales, or tenancy transfers, leaving all floors immaculate.",
      },
      {
        title: "Golf Garage & Basement Decluttering",
        description:
          "Clear out years of accumulated storage, golf equipment, obsolete electronics, and redundant appliances.",
      },
      {
        title: "Estate Garden & Foliage Waste Collection",
        description:
          "High-capacity collection of heavy garden waste, palm branches, and broken outdoor stone or teak furniture.",
      },
    ],
    localTips: [
      "Let us know your specific village name (e.g. Whispering Pines Gate, Wildflower) for direct GPS gate navigation.",
      "Our team uses heavy neoprene floor runners and padded corner wraps inside luxury residences.",
      "Book before 12:00 PM for same-afternoon clearance anywhere in JGE.",
    ],
    faqs: [
      {
        q: "Do you service both Earth and Fire course communities in JGE?",
        a: "Yes, we clear properties across Flame Tree Ridge, Whispering Pines, Wildflower, Lime Tree Valley, Redwood, Sanctuary Falls, and Al Andalus.",
      },
      {
        q: "Can you handle high-capacity multi-truck clearances for large estates?",
        a: "Yes, we can deploy multiple dedicated trucks and an expanded crew for multi-day estate clearances.",
      },
      {
        q: "What do you do with usable designer furniture from JGE?",
        a: "High-quality reusable furniture can be routed to registered UAE charities upon client request.",
      },
    ],
    seoDescription:
      "White-glove junk removal in Jumeirah Golf Estates (JGE), Dubai. Luxury villa cleanouts, golf garage decluttering, garden waste pickup, and Al Andalus apartment clearances.",
    nearbyAreas: [
      { name: "Dubai Sports City", slug: "dubai-sports-city" },
      { name: "Dubai Investment Park", slug: "dubai-investment-park" },
      { name: "Damac Hills", slug: "damac-hills" },
      { name: "Jumeirah Village Circle", slug: "jumeirah-village-circle" },
    ],
  },

  "dubai-production-city": {
    slug: "dubai-production-city",
    name: "Dubai Production City",
    shortName: "IMPZ",
    group: "New Dubai & Suburbs",
    tagline: "Fast junk collection for Midtown, Lakeside & media-industrial units",
    intro:
      "Blending dynamic media production facilities with lively residential communities like Midtown by Deyaar and Lakeside Towers, Dubai Production City (IMPZ) is a bustling hub. We provide prompt junk removal for residential apartments, studios, and commercial production units.",
    image: householdImg,
    heroHighlights: [
      "Full coverage across Midtown, Lakeside, Centrium & Crescent Towers",
      "Commercial printing, studio & packaging waste disposal",
      "Same-day apartment move-out & bulky furniture removal",
    ],
    localContext: {
      propertyTypes:
        "Modern residential apartment complexes (Midtown, Lakeside, Centrium, The Crescent, Lago Vista) alongside media production warehouses and commercial printing hubs.",
      accessLogistics:
        "Residential buildings have dedicated basement parking and service elevators near City Centre Me'aisem. Our teams coordinate with building security desks and use soft-trolleys to navigate corridors quietly.",
      popularItems: [
        "Apartment sofas, queen/king beds & study workstations",
        "Broken washing machines, refrigerators & microwaves",
        "Commercial packaging boxes, wooden pallets & paper waste",
        "Balcony storage, clothes racks & obsolete home electronics",
      ],
    },
    keyServices: [
      {
        title: "Midtown & Lakeside Apartment Move-Out Clears",
        description:
          "Full end-of-lease clearances helping departing tenants secure complete security deposit refunds from landlords.",
      },
      {
        title: "IMPZ Furniture & Mattress Disposal",
        description:
          "Same-day collection and eco-friendly disposal of old sofas, mattresses, and flatpack wardrobes.",
      },
      {
        title: "Commercial Studio & Packaging Clearances",
        description:
          "Prompt removal of heavy cardboard cartons, packaging foam, surplus print stock, and broken display units.",
      },
    ],
    localTips: [
      "Mention your tower name (e.g. Lakeside Tower B, Midtown Noor) for direct basement loading bay access.",
      "Our technicians safely disconnect kitchen appliances on-site with zero hassle.",
      "Send photos on WhatsApp for an immediate upfront quote with no hidden extras.",
    ],
    faqs: [
      {
        q: "Do you service all residential towers in IMPZ?",
        a: "Yes, we regularly clear apartments in Midtown (Afnan, Dania, Noor), Lakeside, Centrium, The Crescent, and Lago Vista.",
      },
      {
        q: "How quickly can your trucks arrive in Dubai Production City?",
        a: "With our proximity along Sheikh Mohammed Bin Zayed Road (E311), we can be on-site within 60 to 90 minutes.",
      },
      {
        q: "Do you dismantle multi-door wardrobes and beds in IMPZ apartments?",
        a: "Yes, full disassembly and room sweeping are included in our upfront rate.",
      },
    ],
    seoDescription:
      "Affordable junk removal in Dubai Production City (IMPZ). Apartment move-out cleanouts, furniture disposal, appliance removal, and commercial studio clearances in Midtown & Lakeside.",
    nearbyAreas: [
      { name: "Jumeirah Village Triangle", slug: "jumeirah-village-triangle" },
      { name: "Jumeirah Village Circle", slug: "jumeirah-village-circle" },
      { name: "Dubai Sports City", slug: "dubai-sports-city" },
      { name: "Dubai Investment Park", slug: "dubai-investment-park" },
    ],
  },

  "green-community-village": {
    slug: "green-community-village",
    name: "Green Community Village",
    shortName: "Green Community",
    group: "Villa Communities",
    tagline: "Tranquil villa, bungalow & apartment clearances in DIP's lush oasis",
    intro:
      "With its leafy pedestrian boulevards, stone-paved lanes, and tranquil lake, Green Community in DIP offers a serene lifestyle. Our uniformed crew clears luxury family villas, single-storey bungalows, and Lakeview/Terrace apartments with utmost respect for quiet community life.",
    image: gardenImg,
    heroHighlights: [
      "Coverage across Green Community East, West & Motor City",
      "Single-storey bungalow & large family villa cleanouts",
      "Mature garden pruning foliage, patio & pergola removals",
    ],
    localContext: {
      propertyTypes:
        "Expansive 4 to 6 bedroom luxury family villas, standalone single-storey bungalows, townhouses, and lakeside apartments (Lakeview, Terrace Apartments).",
      accessLogistics:
        "Green Community features gated security barriers at East and West entrances. Our crew registers at the gatehouse and parks on wide private driveways, ensuring community roads and pedestrian pathways stay completely clear.",
      popularItems: [
        "Mature garden foliage cuttings, palm fronds & terracotta pots",
        "Weathered wooden pergolas, teak patio tables & benches",
        "Large family dining tables, sectional sofas & king bed sets",
        "Bungalow garage storage, tool cabinets & outdoor sporting gear",
      ],
    },
    keyServices: [
      {
        title: "Bungalow & Villa Handover Clearances",
        description:
          "Full-house clearances for relocating families, ensuring properties are handed over clean and clear for inspections.",
      },
      {
        title: "Garden, Patio & Pergola Dismantling",
        description:
          "Removing overgrown garden cuttings, hedge trimmings, damaged outdoor pergolas, and rusted BBQ sets.",
      },
      {
        title: "Terrace & Lakeview Apartment Decluttering",
        description:
          "Quiet, careful removal of furniture, mattresses, and household appliances via building service lifts.",
      },
    ],
    localTips: [
      "Specify whether your home is in Green Community East or West for fastest gate access.",
      "Our team brings specialized pruning tools and reciprocating saws to dismantle heavy garden structures.",
      "We provide evening and weekend collection slots for working residents.",
    ],
    faqs: [
      {
        q: "Do you service both Green Community East and Green Community West?",
        a: "Yes, our clearance vans cover both East and West enclaves as well as Green Community Motor City.",
      },
      {
        q: "Can you clear large volumes of garden waste from mature bungalow plots?",
        a: "Yes, our high-capacity trucks can haul multiple tons of green waste and overgrown foliage in a single run.",
      },
      {
        q: "How do you protect home interiors during furniture transport?",
        a: "We use padded moving blankets and rubber-wheeled dollies to protect wooden flooring and doorways.",
      },
    ],
    seoDescription:
      "Peaceful junk removal in Green Community Village, Dubai. Villa cleanouts, bungalow decluttering, garden foliage disposal, and Terrace apartment clearances in DIP East & West.",
    nearbyAreas: [
      { name: "Dubai Investment Park", slug: "dubai-investment-park" },
      { name: "Jumeirah Golf Estates", slug: "jumeirah-golf-estates" },
      { name: "Dubai South", slug: "dubai-south" },
      { name: "Al Furjan", slug: "al-furjan" },
    ],
  },

  "the-villa": {
    slug: "the-villa",
    name: "The Villa",
    shortName: "The Villa",
    group: "Villa Communities",
    tagline: "Spanish-style luxury villa, courtyard & garden junk collection",
    intro:
      "Inspired by classic Spanish architecture with sun-drenched courtyards and expansive plots, The Villa in Dubailand is a premier family haven. We provide dependable, courteous junk removal across The Centro, The Aldea, The Ponderosa, and The Hacienda communities.",
    image: villaImg,
    heroHighlights: [
      "Full coverage across The Centro, The Aldea, The Ponderosa & The Hacienda",
      "Dubai Properties Community Management gate check-in",
      "Large Spanish courtyard, garage & desert garden clearouts",
    ],
    localContext: {
      propertyTypes:
        "Custom and developer-built 4 to 7 bedroom Spanish-style luxury villas featuring internal courtyards, large multi-car garages, and extensive private gardens.",
      accessLogistics:
        "The Villa's gated sub-communities operate 24/7 security barrier checkpoints. Our registered clearance vehicles provide driver IDs at the gate for rapid entry, parking easily on wide private driveways.",
      popularItems: [
        "Spanish courtyard potted trees, stone benches & water features",
        "Solid wood dining suites, heavy armoires & ornate headboards",
        "Desert landscaping branches, palm cuttings & garden soil",
        "Multi-car garage storage, kids' go-karts & redundant appliances",
      ],
    },
    keyServices: [
      {
        title: "Full Villa Handover & Move-Out Cleanouts",
        description:
          "Complete property clearances for tenancy handovers or home sales, leaving villas broom-clean and ready for inspection.",
      },
      {
        title: "Courtyard & Backyard Green Waste Removal",
        description:
          "Prompt collection of fallen palm fronds, hedge clippings, broken garden furniture, and weathered wooden pergolas.",
      },
      {
        title: "Multi-Car Garage Decluttering",
        description:
          "Clear out accumulated shipping boxes, unwanted automotive gear, old bicycles, and broken tools.",
      },
    ],
    localTips: [
      "Let us know your specific village gate (e.g. The Centro Gate 1, The Aldea 2) for direct arrival.",
      "We bring heavy-duty straps and dollies to safely move oversized solid wood furniture from upstairs master suites.",
      "Upfront fixed prices are confirmed via WhatsApp with no unexpected distance surcharges.",
    ],
    faqs: [
      {
        q: "Do you service all villages within The Villa?",
        a: "Yes, we regularly clear properties in The Centro, The Aldea, The Ponderosa, and The Hacienda.",
      },
      {
        q: "Can you clear both the garage and the backyard in one visit?",
        a: "Yes, our high-capacity trucks easily accommodate mixed loads of furniture, garage clutter, and garden green waste.",
      },
      {
        q: "What time slots are available in The Villa?",
        a: "We offer flexible 2-hour arrival windows seven days a week, including mornings, afternoons, and weekends.",
      },
    ],
    seoDescription:
      "Reliable junk removal in The Villa, Dubailand. Spanish villa cleanouts, courtyard clearances, garden waste pickup, and garage decluttering in The Centro, Aldea & Hacienda.",
    nearbyAreas: [
      { name: "Al Barari", slug: "al-barari" },
      { name: "Arabian Ranches", slug: "arabian-ranches" },
      { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
      { name: "Mudon", slug: "mudon" },
    ],
  },

  "town-square": {
    slug: "town-square",
    name: "Town Square Dubai",
    shortName: "Town Square",
    group: "New Dubai & Suburbs",
    tagline: "Fast, family-focused junk removal across Zahra, Hayat, Noor & Rawda",
    intro:
      "With its lively central park, trails, and active community spirit, Nshama Town Square is home to thousands of families. We provide fast, reliable junk collection across Zahra, Hayat, and Noor townhouses, as well as Rawda, Warda, Safi, and UNA apartment buildings.",
    image: householdImg,
    heroHighlights: [
      "Full coverage across all Nshama townhouse & apartment clusters",
      "Kids' play furniture, bunk bed & toy storage decluttering",
      "Same-day apartment move-out & bulky furniture removal",
    ],
    localContext: {
      propertyTypes:
        "Modern 3 to 4 bedroom townhouses (Zahra, Hayat, Noor, Naseem, Saria, Maha) and mid-rise contemporary apartment buildings (Jenna, Warda, Rawda, Safi, UNA).",
      accessLogistics:
        "Town Square features dedicated residential parking bays and underground apartment garages. Our low-profile vans navigate apartment basement height clearances, while for townhouses we park directly on private paved driveways.",
      popularItems: [
        "Kids' beds, bunk beds, study desks & toy storage units",
        "Balcony lounge sets, artificial grass & outdoor planters",
        "Modular wardrobes, memory foam mattresses & sofa beds",
        "Old washing machines, dishwashers & compact refrigerators",
      ],
    },
    keyServices: [
      {
        title: "Town Square Apartment Move-Out Clears",
        description:
          "Complete end-of-tenancy clearances ensuring departing tenants receive 100% of their deposit back during handover inspections.",
      },
      {
        title: "Family Townhouse Decluttering",
        description:
          "Clear out under-stair storage, kids' playrooms, utility spaces, and private garages.",
      },
      {
        title: "Balcony & Garden Clutter Removal",
        description:
          "Removing weathered garden sets, plastic playhouses, broken patio tables, and green garden trimmings.",
      },
    ],
    localTips: [
      "Specify your building or townhouse cluster (e.g. Rawda 2, Noor Townhouses Street 4) for direct gate entry.",
      "Our technicians carry cordless power tools to dismantle complex kids' bunk beds on-site.",
      "Take advantage of same-day pickup slots by booking before 12:00 PM on WhatsApp.",
    ],
    faqs: [
      {
        q: "Do you service both townhouses and apartment buildings in Town Square?",
        a: "Yes, we regularly clear properties across Zahra, Hayat, Noor, Safi, Rawda, Warda, UNA, and surrounding buildings.",
      },
      {
        q: "How quickly can your trucks reach Town Square?",
        a: "We have daily dedicated dispatch routes covering Al Qudra Road, reaching Town Square within 1 to 2 hours.",
      },
      {
        q: "Can you safely disconnect and remove our old washing machine?",
        a: "Yes, safe disconnection of water and drainage pipes is included in our agreed price.",
      },
    ],
    seoDescription:
      "Fast junk removal in Town Square Dubai (Nshama). Townhouse cleanouts, apartment move-out clearance, kids' furniture disposal, and sofa removal in Zahra, Hayat & Rawda.",
    nearbyAreas: [
      { name: "Mudon", slug: "mudon" },
      { name: "Damac Hills", slug: "damac-hills" },
      { name: "Arabian Ranches 2", slug: "arabian-ranches-2" },
      { name: "Dubai South", slug: "dubai-south" },
    ],
  },

  villanova: {
    slug: "villanova",
    name: "Villanova",
    shortName: "Villanova",
    group: "Villa Communities",
    tagline: "Mediterranean villa & townhouse junk collection across Amaranta & La Quinta",
    intro:
      "Located in Dubailand along Emirates Road (E611), Villanova is a vibrant Mediterranean-inspired master community. Our uniformed team clears modern family townhouses in Amaranta and La Rosa, as well as spacious standalone villas in La Quinta with total care.",
    image: villaImg,
    heroHighlights: [
      "Full coverage across Amaranta 1–4, La Quinta & La Rosa 1–6",
      "Dubai Properties Community Management security compliance",
      "New move-in packaging, cardboard, pallets & garage decluttering",
    ],
    localContext: {
      propertyTypes:
        "Mediterranean-style 2 to 5 bedroom family townhouses (Amaranta, La Rosa) and spacious detached villas (La Quinta) with private backyards and double garages.",
      accessLogistics:
        "Villanova's gated sub-communities operate 24/7 security gatehouses. Our licensed clearance vehicles register driver details at the gatehouse for swift entry, parking respectfully on private driveways.",
      popularItems: [
        "New home move-in cardboard boxes, bubble wrap & wooden crates",
        "Backyard artificial turf roll-offs, patio sets & BBQ grills",
        "Double garage storage racking, bicycles & broken tools",
        "Large living room sectionals, dining tables & bed frames",
      ],
    },
    keyServices: [
      {
        title: "New Home Move-In Debris Removal",
        description:
          "Clearing mountains of packaging boxes, Styrofoam, and wooden pallets left behind after furnishing your new Villanova home.",
      },
      {
        title: "Villanova Townhouse Handover Clearances",
        description:
          "Full end-of-tenancy clearances ensuring departing tenants leave properties empty and clean for inspections.",
      },
      {
        title: "Backyard & Garage Storage Decluttering",
        description:
          "Removing weathered garden sets, plastic playhouses, broken patio tables, and green garden trimmings.",
      },
    ],
    localTips: [
      "Let us know whether you are in Amaranta 1, 2, 3, 4, La Quinta, or La Rosa for direct GPS gate navigation.",
      "We provide power tools on-site to disassemble large wardrobes and outdoor pergolas.",
      "Upfront fixed prices are confirmed via WhatsApp with zero hidden travel charges.",
    ],
    faqs: [
      {
        q: "Do you service all phases within Villanova?",
        a: "Yes, we cover Amaranta 1 through 4, La Quinta, and La Rosa 1 through 6.",
      },
      {
        q: "How quickly can your trucks arrive in Villanova?",
        a: "With our proximity to Emirates Road (E611), our clearance vans can arrive within 2 hours of booking.",
      },
      {
        q: "Can you clear both the garage and backyard in one visit?",
        a: "Yes, our spacious trucks easily accommodate mixed loads of furniture, garage clutter, and garden green waste.",
      },
    ],
    seoDescription:
      "Reliable junk removal in Villanova, Dubailand. Townhouse cleanouts, new move-in packaging removal, furniture disposal, and garage clearance in Amaranta & La Quinta.",
    nearbyAreas: [
      { name: "Serena", slug: "serena" },
      { name: "The Villa", slug: "the-villa" },
      { name: "Mudon", slug: "mudon" },
      { name: "Arabian Ranches 2", slug: "arabian-ranches-2" },
    ],
  },

  serena: {
    slug: "serena",
    name: "Serena",
    shortName: "Serena",
    group: "Villa Communities",
    tagline: "Spanish-style townhouse & patio clearances across Bella Casa, Casa Dora & Casa Viva",
    intro:
      "With its charming Mediterranean and Portuguese architecture, Serena is one of Dubailand's favorite family communities. We provide dependable, courteous junk removal across Bella Casa, Casa Dora, and Casa Viva townhouses, helping families keep their homes and backyards clutter-free.",
    image: householdImg,
    heroHighlights: [
      "Full coverage across Bella Casa, Casa Dora & Casa Viva",
      "Dubai Properties Community Management gate check-in",
      "Townhouse staircase maneuvering & backyard furniture removals",
    ],
    localContext: {
      propertyTypes:
        "Charming 2 and 3 bedroom Spanish-influenced townhouses and semi-detached villas surrounded by pedestrian green trails and community parks.",
      accessLogistics:
        "Serena's gated clusters operate barrier security checkpoints. Our registered vans present driver IDs at security for hassle-free entry, parking neatly on private villa driveways to keep community lanes clear.",
      popularItems: [
        "Backyard bistro sets, patio umbrellas & garden planters",
        "Under-stair storage clutter, storage bins & sports equipment",
        "Kids' single beds, bunk beds, study desks & toy chests",
        "Old washing machines, dishwashers & built-in microwaves",
      ],
    },
    keyServices: [
      {
        title: "Serena Townhouse Move-Out Clears",
        description:
          "Complete end-of-tenancy clearances ensuring departing tenants leave the townhouse clean and clear for landlord handover.",
      },
      {
        title: "Backyard & Patio Junk Removal",
        description:
          "Clearing old barbecues, broken patio tables, artificial turf roll-offs, and garden cuttings.",
      },
      {
        title: "Under-Stair & Storage Room Decluttering",
        description:
          "Reclaiming valuable living space by hauling away years of accumulated household clutter.",
      },
    ],
    localTips: [
      "Specify whether your home is in Bella Casa, Casa Dora, or Casa Viva for fastest gate access.",
      "Our team uses padded blankets to protect narrow townhouse staircases during furniture removal.",
      "Morning bookings on WhatsApp guarantee same-afternoon clearance.",
    ],
    faqs: [
      {
        q: "Do you service all three Serena communities?",
        a: "Yes, we regularly clear homes in Bella Casa, Casa Dora, and Casa Viva.",
      },
      {
        q: "Can you navigate narrow internal stairs in Serena townhouses?",
        a: "Yes, our experienced movers use team lifting straps and dismantle large furniture upstairs to avoid wall marks.",
      },
      {
        q: "Do you take green garden waste and lawn clippings?",
        a: "Yes, we haul away all types of non-hazardous garden waste and landscaping cuttings.",
      },
    ],
    seoDescription:
      "Affordable junk removal in Serena, Dubailand. Townhouse cleanouts, furniture disposal, patio clearance, and appliance removal in Bella Casa, Casa Dora & Casa Viva.",
    nearbyAreas: [
      { name: "Villanova", slug: "villanova" },
      { name: "Mudon", slug: "mudon" },
      { name: "Arabian Ranches 2", slug: "arabian-ranches-2" },
      { name: "Damac Hills", slug: "damac-hills" },
    ],
  },

  "living-legends": {
    slug: "living-legends",
    name: "Living Legends",
    shortName: "Living Legends",
    group: "Villa Communities",
    tagline: "Spacious golf villa & apartment junk removal in Dubailand",
    intro:
      "Surrounding a 9-hole golf course in Dubailand adjacent to Al Barari, Living Legends features 500 spacious standalone villas and 12 residential towers. Our crew provides dependable junk collection for villas (Queen, King, Princess) and apartments in Hercules, Caesar, and Cleopatra towers.",
    image: villaImg,
    heroHighlights: [
      "Dual coverage across 500 standalone villas & 12 apartment towers",
      "Large plot garden foliage, palm cuttings & patio set removal",
      "Villa garage, maid's annex & multi-room cleanouts",
    ],
    localContext: {
      propertyTypes:
        "Generous 4 to 6 bedroom standalone golf-course villas (Queen, King, Princess, Prince, Shakespeare, Raphael) and 12 residential apartment towers (Hercules, Caesar, Cleopatra, etc.).",
      accessLogistics:
        "Living Legends features security barrier gatehouses at its main entrances. Our high-capacity trucks check in smoothly and park on long private driveways, providing direct access to villa main entrances and rear gardens.",
      popularItems: [
        "Large garden foliage trimmings, palm branches & soil bags",
        "Oversized sectional sofas, dining tables & solid wood buffets",
        "King/queen bed frames, mattresses & kids' bedroom sets",
        "Garage storage shelving, toolboxes & redundant white goods",
      ],
    },
    keyServices: [
      {
        title: "Living Legends Villa Handover Clearances",
        description:
          "Full-house clearances before lease handovers, sales, or major interior refurbishments, leaving properties broom-clean.",
      },
      {
        title: "Large Garden & Landscaping Foliage Removal",
        description:
          "High-capacity trucks to remove massive volumes of green waste, palm cuttings, and broken outdoor pergolas.",
      },
      {
        title: "Tower Apartment Move-Out Clears",
        description:
          "Smooth furniture and tenant clutter removal through building service elevators in Hercules, Caesar, and Cleopatra towers.",
      },
    ],
    localTips: [
      "Tell us your villa type (e.g. Queen Villa, Princess Villa) or tower name for direct routing.",
      "We bring heavy-duty team lifting straps for solid hardwood furniture on upper villa floors.",
      "Book before 12:00 PM for same-day afternoon pickup across Living Legends.",
    ],
    faqs: [
      {
        q: "Do you service both villas and apartment towers in Living Legends?",
        a: "Yes, we cover all standalone villa types as well as all 12 residential apartment towers.",
      },
      {
        q: "Can you handle large amounts of palm fronds and garden waste?",
        a: "Yes, our high-capacity trucks can haul multiple tons of green garden waste in a single visit.",
      },
      {
        q: "Are clearance prices fixed upfront for Living Legends villas?",
        a: "Yes, send us photos of what you need cleared on WhatsApp and we will provide a binding, fixed quotation.",
      },
    ],
    seoDescription:
      "Reliable junk removal in Living Legends, Dubailand. Golf villa cleanouts, garden waste collection, furniture removal, and apartment clearances near Al Barari.",
    nearbyAreas: [
      { name: "Al Barari", slug: "al-barari" },
      { name: "The Villa", slug: "the-villa" },
      { name: "Arabian Ranches", slug: "arabian-ranches" },
      { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
    ],
  },

  meydan: {
    slug: "meydan",
    name: "Meydan",
    shortName: "Meydan",
    group: "Luxury Enclaves",
    tagline: "Discreet, white-glove clearances for luxury equestrian & racecourse residences",
    intro:
      "Synonymous with world-class horse racing and refined luxury living, Meydan demands an elite standard of care and discretion. Our uniformed team caters to luxury residences across Millennium Estates, Meydan Heights, Polo Townhouses, and luxury residences along Meydan Avenue.",
    image: villaImg,
    heroHighlights: [
      "Prestige equestrian villa, townhouse & racecourse residence coverage",
      "White-glove floor runner & marble wall protective shielding",
      "Large Majlis, luxury designer furniture & terrace clearouts",
    ],
    localContext: {
      propertyTypes:
        "Grand standalone luxury villas (Millennium Estates, Meydan Heights), contemporary townhouses (Polo Townhouses, Grand Views), and upscale mid-rise residences along Meydan Avenue and District 11.",
      accessLogistics:
        "Meydan communities enforce strict private security checkpoints. Our crew presents driver credentials at the gatehouse and uses heavy neoprene floor runners to protect polished marble floors and custom architectural finishes.",
      popularItems: [
        "Luxury Italian sectionals, bespoke Majlis seating & custom rugs",
        "Marble-top dining tables, crystal chandeliers & credenzas",
        "Expansive terrace loungers, daybeds & luxury umbrellas",
        "Multi-car garage storage, home gym gear & redundant appliances",
      ],
    },
    keyServices: [
      {
        title: "Millennium Estates Luxury Villa Clearances",
        description:
          "Comprehensive property cleanouts for estate sales, renovations, or tenancy handovers with white-glove care throughout.",
      },
      {
        title: "Grand Views & Polo Townhouse Clearouts",
        description:
          "Quiet, careful removal of high-end furniture, terrace sets, and household items.",
      },
      {
        title: "Private Majlis & Living Suite Refreshes",
        description:
          "Dismantling and hauling away heavy custom upholstery and large designer pieces with zero wall scuffs.",
      },
    ],
    localTips: [
      "Coordinate gate clearance with your estate security or concierge prior to scheduled arrival.",
      "We provide written non-disclosure agreements (NDAs) on request for VIP residences.",
      "Our team wears shoe covers and uses padded covers for all large items in transit.",
    ],
    faqs: [
      {
        q: "Do you service all communities within Meydan City?",
        a: "Yes, we regularly clear properties in Millennium Estates, Meydan Heights, Polo Townhouses, Grand Views, Meydan Avenue, and District 11.",
      },
      {
        q: "How do you protect luxury marble and hardwood floors in Meydan residences?",
        a: "We lay down padded heavy-duty floor runners from the clearance rooms all the way to our vehicles.",
      },
      {
        q: "Can you handle high-capacity clearances for large Meydan equestrian estates?",
        a: "Yes, we can deploy multiple dedicated trucks and an expanded crew for large mansion cleanouts.",
      },
    ],
    seoDescription:
      "White-glove junk removal in Meydan, Dubai. Luxury villa cleanouts, designer furniture disposal, Majlis removal, and townhouse clearance near Meydan Racecourse.",
    nearbyAreas: [
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Business Bay", slug: "business-bay" },
      { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
      { name: "Dubai Design District", slug: "dubai-design-district" },
    ],
  },

  "downtown-dubai": {
    slug: "downtown-dubai",
    name: "Downtown Dubai",
    shortName: "Downtown",
    group: "Luxury Enclaves",
    tagline: "Prestige high-rise tower clearances in the heart of Dubai",
    intro:
      "Living at the Center of Now demands a flawless standard of service. From Burj Residences, Standpoint, and 29 Boulevard to Address Downtown and Opera District penthouses, our uniformed crew handles high-rise clearances with full building security compliance, service elevator booking, and padded transit wraps.",
    image: skylineImg,
    heroHighlights: [
      "Emaar luxury tower security clearance & service lift booking",
      "Low-profile vans for 2.1m basement loading docks",
      "Padded blankets & marble lobby floor protection",
    ],
    localContext: {
      propertyTypes:
        "Iconic luxury high-rise towers (Burj Residences, The Address, Boulevard Point, Forte, Act One Act Two), low-rise Arabic residences in Old Town, and ultra-prime penthouses.",
      accessLogistics:
        "Downtown towers enforce strict contractor check-ins, security deposit forms, and tight 2.1m/2.2m basement height restrictions. We dispatch low-profile clearance vans that access underground loading bays directly, utilizing padded service elevators during reserved slots.",
      popularItems: [
        "Designer velvet and leather sectionals & marble coffee tables",
        "King-size upholstered bed frames & luxury mattresses",
        "Boulevard-facing balcony loungers, bistro tables & planters",
        "High-end kitchen appliances, wine chillers & home entertainment tech",
      ],
    },
    keyServices: [
      {
        title: "Downtown Penthouse & Apartment Handover Clears",
        description:
          "Pristine end-of-tenancy clearances ensuring departing executives and tenants receive full security deposits back.",
      },
      {
        title: "Downtown Designer Furniture Disassembly",
        description:
          "Safe dismantling and white-glove transport of delicate modular wardrobes, custom buffets, and oversized dining tables.",
      },
      {
        title: "Old Town Low-Rise Clearances",
        description:
          "Quiet, careful navigation through pedestrian courtyards and traditional Old Town corridors.",
      },
    ],
    localTips: [
      "Reserve your building's service elevator with concierge 24 hours prior to our scheduled arrival.",
      "We provide our company trade license and driver Emirates IDs instantly on WhatsApp for rapid security gate pass clearance.",
      "Our team uses padded wraps and rubber-wheeled dollies to ensure zero contact with walls or elevators.",
    ],
    faqs: [
      {
        q: "Do you service all towers across Downtown Dubai?",
        a: "Yes, we regularly clear residences in Burj Residences, 29 Boulevard, Standpoint, The Address, Boulevard Point, Forte, Old Town, and Opera Grand.",
      },
      {
        q: "How do you navigate low basement parking garages in Downtown?",
        a: "We dispatch custom low-profile clearance vans specifically measured to clear 2.1m basement garage heights.",
      },
      {
        q: "Can you handle single-item pickups like an old mattress or sofa?",
        a: "Yes, we offer fast same-day collection for individual furniture pieces and appliances.",
      },
    ],
    seoDescription:
      "Luxury junk removal in Downtown Dubai. High-rise apartment cleanouts, designer furniture disposal, and move-out clearances in Burj Residences, Old Town & Opera District.",
    nearbyAreas: [
      { name: "Business Bay", slug: "business-bay" },
      { name: "Dubai Design District", slug: "dubai-design-district" },
      { name: "Dubai Creek Harbour", slug: "dubai-creek-harbour" },
      { name: "Jumeirah", slug: "jumeirah" },
    ],
  },

  "jumeirah-village-triangle": {
    slug: "jumeirah-village-triangle",
    name: "Jumeirah Village Triangle",
    shortName: "JVT",
    group: "New Dubai & Suburbs",
    tagline: "Spacious plot villa & townhouse junk collection across Districts 1 to 9",
    intro:
      "Known for its oversized private garden plots and peaceful family atmosphere, JVT is a prime residential community. Our uniformed crew clears standalone villas and townhouses across Districts 1 through 9, clearing expansive backyards, storage sheds, and garages with total efficiency.",
    image: gardenImg,
    heroHighlights: [
      "Full coverage across all 9 JVT residential districts",
      "Large private garden foliage, lawn clippings & pergola removal",
      "Townhouse & villa garage decluttering specialists",
    ],
    localContext: {
      propertyTypes:
        "Mediterranean and Arabian 1 to 2 bedroom standalone villas situated on massive private plots (up to 7,000+ sq. ft.), 2 bedroom townhouses, and low-to-mid rise apartments.",
      accessLogistics:
        "JVT's wide street grid and spacious private driveways permit easy truck positioning right outside villa entrances and back gates, enabling rapid loading with zero traffic blockage.",
      popularItems: [
        "Massive garden foliage trimmings, palm branches & soil bags",
        "Weathered wooden pergolas, gazebos & patio dining sets",
        "Large sectional sofas, wardrobes & bedroom sets",
        "Garage shelving, sports equipment & children's play structures",
      ],
    },
    keyServices: [
      {
        title: "JVT Villa Handover & Move-Out Clearances",
        description:
          "Full-house clearances before property handovers, sales, or major interior extensions, leaving premises spotless.",
      },
      {
        title: "Expansive Backyard & Garden Foliage Removal",
        description:
          "High-capacity trucks to haul away heavy palm cuttings, pruned bushes, broken garden sheds, and rusted BBQ pits.",
      },
      {
        title: "JVT Garage & Outbuilding Clearance",
        description:
          "Decluttering garage workbenches, bicycles, redundant tools, and garden storage sheds.",
      },
    ],
    localTips: [
      "Tell us your District number and Street (e.g. District 4, Street 2) for direct GPS arrival.",
      "Let us know if your garden has a side access gate so we load garden waste directly into our truck without entering the villa.",
      "We provide power tools to dismantle wooden pergolas and metal storage sheds on-site.",
    ],
    faqs: [
      {
        q: "Do you service all 9 Districts within JVT?",
        a: "Yes, our clearance vans cover Districts 1 through 9 as well as all residential apartment complexes along Al Khail Road.",
      },
      {
        q: "Can you clear large volumes of green waste from JVT's oversized plots?",
        a: "Yes, our high-capacity trucks can haul multiple tons of green waste and tree branches in a single trip.",
      },
      {
        q: "What do you do with usable furniture collected in JVT?",
        a: "Usable furniture in good condition is routed to registered UAE charities for donation.",
      },
    ],
    seoDescription:
      "Reliable junk removal in Jumeirah Village Triangle (JVT), Dubai. Villa cleanouts, large garden waste removal, pergola dismantling, and garage clearance across Districts 1 to 9.",
    nearbyAreas: [
      { name: "Jumeirah Village Circle", slug: "jumeirah-village-circle" },
      { name: "The Springs", slug: "the-springs" },
      { name: "The Meadows", slug: "the-meadows" },
      { name: "Dubai Production City", slug: "dubai-production-city" },
    ],
  },

  "the-meadows": {
    slug: "the-meadows",
    name: "The Meadows",
    shortName: "The Meadows",
    group: "Villa Communities",
    tagline: "Established family villa & garden junk collection across Meadows 1 to 9",
    intro:
      "With its mature tree-lined streets, scenic lakes, and tranquil parks, The Meadows is one of Dubai's most beloved villa communities. Our uniformed crew clears luxury family villas (Types 1 to 14) across Meadows 1 through 9 with quiet professionalism and full Emaar compliance.",
    image: villaImg,
    heroHighlights: [
      "Full coverage across all 9 Meadows sub-communities",
      "Emaar Community Management security gate compliance",
      "Double garage, garden green waste & bedroom suite clearouts",
    ],
    localContext: {
      propertyTypes:
        "Established 3 to 7 bedroom luxury detached villas (Types 1 to 14) set in mature landscaped gardens surrounding community lakes and parks.",
      accessLogistics:
        "The Meadows sub-communities operate 24/7 security gatehouses. Our registered clearance vehicles provide driver credentials at the gatehouse for swift entry, parking respectfully on private double driveways.",
      popularItems: [
        "Mature garden palm trimmings, hedge cuttings & terracotta planters",
        "Heavy wooden dining suites, solid buffets & large wardrobes",
        "Kids' trampolines, swings & outdoor patio lounge sets",
        "Double garage storage boxes, golf bags & broken appliances",
      ],
    },
    keyServices: [
      {
        title: "Meadows Villa Handover & Move-Out Clearances",
        description:
          "Complete property cleanouts ensuring departing families leave their villas immaculate for tenancy handovers or new buyers.",
      },
      {
        title: "Mature Garden & Foliage Waste Collection",
        description:
          "Prompt collection of fallen palm fronds, pruned trees, old barbecues, and weathered wooden garden furniture.",
      },
      {
        title: "Double Garage & Storeroom Decluttering",
        description:
          "Reclaiming garage parking space by removing accumulated storage boxes, gym equipment, and redundant appliances.",
      },
    ],
    localTips: [
      "Let us know your Meadows number and Street (e.g. Meadows 4, Street 8) for the fastest gate navigation.",
      "Our team brings heavy-duty lifting straps and furniture dollies to move large solid wood furniture safely.",
      "Book before midday for same-afternoon clearance across all Meadows neighborhoods.",
    ],
    faqs: [
      {
        q: "Do you service all 9 Meadows communities?",
        a: "Yes, we regularly service Meadows 1 through 9, as well as The Meadows Village and surrounding community centers.",
      },
      {
        q: "Can you handle high-volume garden foliage after tree pruning?",
        a: "Yes, our high-capacity trucks can haul multiple tons of green garden waste and palm branches in a single run.",
      },
      {
        q: "Do you dismantle large multi-door wardrobes in upstairs bedrooms?",
        a: "Yes, full on-site disassembly and carrying down stairs are included in our upfront rate.",
      },
    ],
    seoDescription:
      "Professional junk removal in The Meadows, Dubai. Luxury villa cleanouts, double garage decluttering, garden waste pickup, and furniture removal in Meadows 1 to 9.",
    nearbyAreas: [
      { name: "The Springs", slug: "the-springs" },
      { name: "The Lakes", slug: "the-lakes" },
      { name: "Emirates Hills", slug: "emirates-hills" },
      { name: "Jumeirah Islands", slug: "jumeirah-islands" },
    ],
  },

  "the-lakes": {
    slug: "the-lakes",
    name: "The Lakes",
    shortName: "The Lakes",
    group: "Villa Communities",
    tagline: "Serene lakefront villa & garden clearances across Deema, Forat & Maeen",
    intro:
      "Set between two world-class golf courses, The Lakes is an exclusive gated community of waterfront villas. Our uniformed crew clears luxury family residences across Deema, Forat, Maeen, Zulal, and Ghadeer with quiet discretion and meticulous care for serene neighborhood life.",
    image: villaImg,
    heroHighlights: [
      "Full coverage across Deema, Forat, Maeen, Zulal & Ghadeer",
      "Emaar Community Management security gate clearance",
      "Lake-facing terrace furniture, patio loungers & garage decluttering",
    ],
    localContext: {
      propertyTypes:
        "Detached 3 to 6 bedroom luxury family villas and townhouses situated directly on tranquil waterways, surrounded by private landscaped gardens.",
      accessLogistics:
        "The Lakes features strict 24/7 security gatehouse checkpoints. Our licensed vehicles check in at the barrier and park on private villa driveways, ensuring community roads and lakeside walkways remain completely unobstructed.",
      popularItems: [
        "Lakefront patio dining sets, teak sun loungers & umbrellas",
        "Large family sectionals, display cabinets & king bed sets",
        "Garden hedge trimmings, palm branches & ceramic pots",
        "Garage storage bins, sports gear & redundant home tech",
      ],
    },
    keyServices: [
      {
        title: "The Lakes Villa Handover Clears",
        description:
          "Full-house clearances for relocating families, ensuring properties are handed over in pristine condition.",
      },
      {
        title: "Lakefront Patio & Terrace Decluttering",
        description:
          "Removing weathered teak furniture, rusted BBQ units, damaged sunshades, and garden green waste.",
      },
      {
        title: "Garage & Storage Room Cleanouts",
        description:
          "Hauling away accumulated household clutter, exercise bikes, and redundant white goods.",
      },
    ],
    localTips: [
      "Specify your community enclave (e.g. Deema 2, Maeen 3) for direct gate entry.",
      "Our movers use padded blankets on staircases to protect polished timber and paintwork.",
      "We offer flexible morning and afternoon pickup windows seven days a week.",
    ],
    faqs: [
      {
        q: "Do you service all five communities within The Lakes?",
        a: "Yes, we regularly clear homes in Deema, Forat, Maeen, Zulal, and Ghadeer.",
      },
      {
        q: "Can you clear both the garage and the back terrace in one visit?",
        a: "Yes, our spacious trucks easily accommodate mixed loads of furniture, garage clutter, and garden green waste.",
      },
      {
        q: "Are your prices fixed upfront?",
        a: "Yes, send us photos of what needs clearing on WhatsApp for a firm, transparent quote with zero hidden fees.",
      },
    ],
    seoDescription:
      "Quiet, dependable junk removal in The Lakes, Dubai. Lakefront villa cleanouts, terrace furniture removal, garden waste pickup, and garage decluttering in Deema, Forat & Maeen.",
    nearbyAreas: [
      { name: "The Meadows", slug: "the-meadows" },
      { name: "The Springs", slug: "the-springs" },
      { name: "Emirates Hills", slug: "emirates-hills" },
      { name: "The Greens", slug: "the-greens" },
    ],
  },

  "jumeirah-islands": {
    slug: "jumeirah-islands",
    name: "Jumeirah Islands",
    shortName: "Jumeirah Islands",
    group: "Luxury Enclaves",
    tagline: "White-glove junk removal for luxury island villas & waterfront estates",
    intro:
      "Set on 50 private island clusters surrounded by azure man-made lakes, Jumeirah Islands is one of Dubai's most exclusive gated sanctuaries. Our uniformed team clears luxury waterfront villas across European, Islamic, Mediterranean, Oasis, and Tropical clusters with white-glove care.",
    image: villaImg,
    heroHighlights: [
      "Nakheel island security gate clearance & strict resident privacy",
      "White-glove floor runner & marble staircase protection",
      "Infinity pool patio furniture, cabanas & garden foliage removal",
    ],
    localContext: {
      propertyTypes:
        "Prestigious 4 to 6 bedroom waterfront mansions (736 villas across 50 island clusters) featuring private infinity pools, manicured gardens, and private lakeside access.",
      accessLogistics:
        "Jumeirah Islands maintains strict 24/7 security gatehouses. Our registered clearance vehicles provide driver credentials at the barrier and park directly on private paved multi-car driveways, utilizing heavy neoprene floor runners inside the residence.",
      popularItems: [
        "Luxury poolside daybeds, teak loungers, umbrellas & cabanas",
        "Custom Italian living room sectionals, marble dining tables & credenzas",
        "Mature palm fronds, landscaping green waste & heavy stone planters",
        "Private basement storage, commercial gym gear & wine room racks",
      ],
    },
    keyServices: [
      {
        title: "Full Island Estate Cleanout & Pre-Sale Clearance",
        description:
          "Comprehensive property clearances for estate sales, extensive architectural renovations, or executive handovers.",
      },
      {
        title: "Poolside, Cabana & Waterfront Terrace Clears",
        description:
          "Discreet removal of weathered luxury outdoor sets, poolside loungers, and damaged pergolas.",
      },
      {
        title: "Basement & Multi-Car Garage Decluttering",
        description:
          "Clear out redundant home electronics, luxury fitness equipment, and accumulated storage racking.",
      },
    ],
    localTips: [
      "Let us know your island cluster number (e.g. Cluster 12, European Cluster) for direct GPS gate navigation.",
      "We provide written non-disclosure agreements (NDAs) for VIP estate clearances.",
      "Our team wears shoe covers and uses padded covers for all large items in transit.",
    ],
    faqs: [
      {
        q: "Do you service all 50 island clusters in Jumeirah Islands?",
        a: "Yes, we cover every cluster across European, Islamic, Mediterranean, Oasis, Tropical, and Mansions enclaves.",
      },
      {
        q: "How do you protect luxury Italian marble and hardwood floors in Jumeirah Islands?",
        a: "We lay down padded heavy-duty floor runners from the clearance rooms all the way to our vehicles, and our crew wears protective booties.",
      },
      {
        q: "Can you handle high-capacity multi-truck clearances across Jumeirah Islands?",
        a: "Yes, we can deploy multiple dedicated trucks and a specialized crew for large mansion cleanouts.",
      },
    ],
    seoDescription:
      "White-glove junk removal in Jumeirah Islands, Dubai. Luxury waterfront villa cleanouts, infinity pool furniture disposal, marble protection, and estate clearances.",
    nearbyAreas: [
      { name: "The Meadows", slug: "the-meadows" },
      { name: "The Springs", slug: "the-springs" },
      { name: "Jumeirah Village Triangle", slug: "jumeirah-village-triangle" },
      { name: "Dubai Marina", slug: "dubai-marina" },
    ],
  },

  "bluewaters-island": {
    slug: "bluewaters-island",
    name: "Bluewaters Island",
    shortName: "Bluewaters",
    group: "Waterfront & Islands",
    tagline: "Ultra-modern island residences & Ain Dubai waterfront clearances",
    intro:
      "Home to Ain Dubai and premier luxury residences by Meraas, Bluewaters Island offers an exclusive pedestrianized island lifestyle. Our uniformed crew provides discreet, high-standard clearances for luxury apartments, townhouses, and penthouses with complete island security coordination and protective transit wraps.",
    image: skylineImg,
    heroHighlights: [
      "Meraas Bluewaters security permit & loading bay clearance",
      "Subterranean vehicular tunnel access & service elevator bookings",
      "Designer island apartment furniture & sea-facing terrace sets",
    ],
    localContext: {
      propertyTypes:
        "Luxury low-rise residential apartment buildings (Buildings 1 to 10), waterfront townhouses, and luxury penthouses overlooking Ain Dubai and the Arabian Gulf.",
      accessLogistics:
        "Bluewaters Island features underground vehicular roadways and loading docks below the pedestrian podium. Our team obtains security clearance, parks in assigned subterranean loading zones, and reserves service lifts to keep public areas clear.",
      popularItems: [
        "Designer outdoor terrace loungers, daybeds & teak dining sets",
        "Italian leather sofas, marble side tables & barstools",
        "King-size memory foam beds, headboards & luxury mattresses",
        "Move-out packing cartons, excess decor & redundant home electronics",
      ],
    },
    keyServices: [
      {
        title: "Bluewaters Apartment Handover Clears",
        description:
          "High-end end-of-tenancy clearances ensuring departing residents and landlords complete seamless handovers.",
      },
      {
        title: "Terrace & Balcony Clutter Removal",
        description:
          "Clearing weathered sun loungers, outdoor bar setups, and oversized decorative planters from sea-facing terraces.",
      },
      {
        title: "Designer Furniture Disassembly",
        description:
          "Careful dismantling and removal of bespoke modular wardrobes, media units, and dining suites.",
      },
    ],
    localTips: [
      "Coordinate service elevator reservation with building management 24 hours in advance.",
      "We provide company trade license and driver Emirates IDs immediately via WhatsApp for security gate pass approval.",
      "Our team wears shoe covers and uses padded wraps on all large furniture in transit.",
    ],
    faqs: [
      {
        q: "Do you service all residential buildings on Bluewaters Island?",
        a: "Yes, we clear residences across Buildings 1 through 10 as well as waterfront townhouses.",
      },
      {
        q: "How do you access the loading bay on Bluewaters?",
        a: "We access the subterranean service road directly from the bridge connecting Sheikh Zayed Road.",
      },
      {
        q: "Can you handle same-day single-item pickups?",
        a: "Yes, if booked before noon, our team can collect individual mattresses, sofas, or appliances that same afternoon.",
      },
    ],
    seoDescription:
      "Luxury junk removal on Bluewaters Island, Dubai. Waterfront apartment cleanouts, designer furniture disposal, and terrace clearances near Ain Dubai.",
    nearbyAreas: [
      { name: "Dubai Marina", slug: "dubai-marina" },
      { name: "Jumeirah Beach Residence", slug: "jumeirah-beach-residence" },
      { name: "Palm Jumeirah", slug: "palm-jumeirah" },
      { name: "Jumeirah Islands", slug: "jumeirah-islands" },
    ],
  },

  difc: {
    slug: "difc",
    name: "DIFC",
    shortName: "DIFC",
    group: "Downtown & City Core",
    tagline: "Executive corporate office & luxury residential tower clearances in DIFC",
    intro:
      "As the Middle East's premier global financial center, DIFC demands supreme discretion, strict compliance, and precision timing. We cater to multinational corporate headquarters, private equity firms, law practices, and luxury residences across Gate Village, Index Tower, Sky Gardens, and Burj Daman.",
    image: officeImg,
    heroHighlights: [
      "DIFC Authority & building facility management security compliance",
      "Certified corporate e-waste, IT server & office furniture disposal",
      "After-hours, weekend & overnight commercial clearances",
    ],
    localContext: {
      propertyTypes:
        "Iconic commercial office towers (The Gate, Gate Precinct, Index Tower, Emirates Financial Towers) and luxury executive residential towers (Sky Gardens, Limestone House, Central Park Towers).",
      accessLogistics:
        "DIFC facilities require DIFC Authority permits, contractor gate passes, and security method statements. We dispatch crews during evening and weekend windows with all pre-approved documentation to utilize freight elevators without disrupting corporate trading.",
      popularItems: [
        "Executive desks, ergonomic mesh chairs & board meeting tables",
        "Decommissioned server cabinets, network switches & cable trays",
        "Secure computers, monitors, printers & digital screens",
        "Luxury apartment living sets, upholstered beds & appliances",
      ],
    },
    keyServices: [
      {
        title: "DIFC Corporate Office Decommissioning",
        description:
          "Full floor and executive office clearances for financial institutions relocating or adopting new office layouts.",
      },
      {
        title: "Certified Electronic Waste (E-Waste) Recycling",
        description:
          "Secure collection and certified recycling of computer hardware, server racks, and peripherals in compliance with municipal regulations.",
      },
      {
        title: "Executive Residential Move-Out Clears",
        description:
          "Discreet clearances of luxury apartments in Index Tower, Sky Gardens, and Central Park Towers.",
      },
    ],
    localTips: [
      "Book an evening slot (after 6:00 PM) or weekend morning for unhindered loading dock access.",
      "We provide formal certificates of disposal and destruction manifests for corporate auditing.",
      "Send a video walkthrough of the office floor on WhatsApp for a firm, fixed commercial quotation.",
    ],
    faqs: [
      {
        q: "Do you work with DIFC Authority security and loading docks?",
        a: "Yes, we regularly provide insurance certificates, crew Emirates IDs, and vehicle details to DIFC facilities management.",
      },
      {
        q: "How do you handle confidential corporate electronic hardware & e-waste in DIFC?",
        a: "We provide certified destruction confirmations and transport all electronics directly to licensed UAE recycling plants.",
      },
      {
        q: "Can you clear both corporate offices and residential apartments in DIFC?",
        a: "Yes, we handle office towers across Gate Precinct as well as residences in Index Tower and Sky Gardens.",
      },
    ],
    seoDescription:
      "Executive junk removal in DIFC (Dubai International Financial Centre). Corporate office decommissioning, e-waste recycling, and luxury apartment clearances.",
    nearbyAreas: [
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Business Bay", slug: "business-bay" },
      { name: "Dubai Design District", slug: "dubai-design-district" },
      { name: "Jumeirah", slug: "jumeirah" },
    ],
  },

  "jumeirah-beach-residence": {
    slug: "jumeirah-beach-residence",
    name: "Jumeirah Beach Residence",
    shortName: "JBR",
    group: "Waterfront & Islands",
    tagline: "Coastal high-rise apartment & holiday home junk removal in JBR",
    intro:
      "Overlooking the vibrant beachfront of The Walk, Jumeirah Beach Residence (JBR) is one of Dubai's most bustling residential destinations. Our crew clears high-rise apartments across Shams, Amwaj, Rimal, Bahar, Sadaf, and Murjan clusters with expert service lift coordination and padded transit.",
    image: skylineImg,
    heroHighlights: [
      "Full coverage across Shams, Amwaj, Rimal, Bahar, Sadaf & Murjan",
      "Podium level & basement service parking navigation",
      "Holiday home turnover, move-out furniture & mattress removals",
    ],
    localContext: {
      propertyTypes:
        "High-rise Mediterranean-style residential towers across 6 distinct clusters, beachfront duplex penthouses, and serviced holiday homes along The Walk.",
      accessLogistics:
        "JBR towers enforce strict building security check-ins and dedicated service elevator reservations via Dubai Community Management (Taziz). We utilize underground basement loading zones and padded trolleys along carpeted corridors.",
      popularItems: [
        "Bulky living room sectionals, coffee tables & TV consoles",
        "King/queen mattresses, bed frames & holiday home linens",
        "Balcony beach loungers, patio tables & sunshades",
        "Old washing machines, dishwashers, fridges & kitchen appliances",
      ],
    },
    keyServices: [
      {
        title: "JBR Apartment Move-Out Clears",
        description:
          "Complete end-of-tenancy clearances ensuring departing tenants receive full security deposits back.",
      },
      {
        title: "Holiday Home & Airbnb Furniture Turnovers",
        description:
          "Rapid turnaround clearances for short-term rental operators refurnishing or upgrading beachside apartments.",
      },
      {
        title: "JBR Bulky Furniture & Mattress Disposal",
        description:
          "Same-day collection and eco-friendly disposal of old sofas, mattresses, and flatpack wardrobes.",
      },
    ],
    localTips: [
      "Specify your cluster and tower number (e.g. Rimal 4, Sadaf 2) for direct basement loading bay access.",
      "Reserve your service elevator with building management 24 hours prior to our scheduled arrival.",
      "We provide shoe covers and padded moving blankets for delicate indoor flooring.",
    ],
    faqs: [
      {
        q: "Do you service all 6 clusters across JBR?",
        a: "Yes, our clearance vans cover Shams, Amwaj, Rimal, Bahar, Sadaf, and Murjan.",
      },
      {
        q: "Can you handle same-day furniture removals for holiday homes in JBR?",
        a: "Yes, we offer fast turnaround slots between guest checkout and check-in times.",
      },
      {
        q: "How do you navigate JBR's tight basement parking?",
        a: "We dispatch right-sized low-profile clearance vans that access underground loading bays directly.",
      },
    ],
    seoDescription:
      "Fast junk removal in Jumeirah Beach Residence (JBR), Dubai. High-rise apartment cleanouts, holiday home furniture turnover, mattress disposal, and appliance collection.",
    nearbyAreas: [
      { name: "Dubai Marina", slug: "dubai-marina" },
      { name: "Bluewaters Island", slug: "bluewaters-island" },
      { name: "Palm Jumeirah", slug: "palm-jumeirah" },
      { name: "Jumeirah Islands", slug: "jumeirah-islands" },
    ],
  },

  "dubai-silicon-oasis": {
    slug: "dubai-silicon-oasis",
    name: "Dubai Silicon Oasis",
    shortName: "DSO",
    group: "New Dubai & Suburbs",
    tagline: "Complete residential & tech park junk collection across Silicon Oasis",
    intro:
      "As Dubai's flagship integrated technology park and residential community, Dubai Silicon Oasis (DSO) is home to tech enterprises, Cedre and Semmer villas, and hundreds of apartment towers. We provide prompt junk removal for residential homes, tech offices, and commercial spaces.",
    image: householdImg,
    heroHighlights: [
      "Dual Cedre & Semmer villa and apartment tower coverage",
      "Tech park commercial office & electronic waste (e-waste) disposal",
      "Same-day apartment move-out & bulky furniture removal",
    ],
    localContext: {
      propertyTypes:
        "Gated family villa communities (Cedre Villas, Semmer Villas), modern residential apartment towers (Silicon Gates, Axis Residences, Binghatti Point), and technology business park headquarters.",
      accessLogistics:
        "DSO offers wide avenues and clear property parking. For apartment towers, security desks require standard contractor check-in, which our licensed crew completes promptly, parking in designated loading bays.",
      popularItems: [
        "Sectional sofas, king beds & flatpack wardrobes",
        "Broken washing machines, refrigerators & microwaves",
        "Cedre/Semmer villa garden trimmings, patio sets & storage boxes",
        "Decommissioned office desks, chairs & computer electronics",
      ],
    },
    keyServices: [
      {
        title: "DSO Apartment Move-Out Clears",
        description:
          "Complete end-of-lease clearances helping departing tenants secure complete security deposit refunds.",
      },
      {
        title: "Cedre & Semmer Villa Decluttering",
        description:
          "Full-house and garage clearances for family villas, removing old storage, garden cuttings, and play equipment.",
      },
      {
        title: "Tech Park Commercial & E-Waste Removal",
        description:
          "Responsible collection and certified recycling of computer hardware, monitors, cabling, and office furniture.",
      },
    ],
    localTips: [
      "Specify whether you are in Cedre Villas, Semmer Villas, or a specific apartment tower for exact dispatch routing.",
      "Our technicians safely disconnect kitchen appliances on-site with zero hassle.",
      "Send photos on WhatsApp for an immediate upfront quote with no hidden extras.",
    ],
    faqs: [
      {
        q: "Do you service both villas and apartments in DSO?",
        a: "Yes, we clear standalone villas in Cedre and Semmer as well as all residential apartment buildings across Silicon Oasis.",
      },
      {
        q: "How quickly can your trucks arrive in Dubai Silicon Oasis?",
        a: "We have daily routes covering DSO and Academic City, offering arrival windows within 1 to 2 hours.",
      },
      {
        q: "Do you dismantle multi-door wardrobes and beds?",
        a: "Yes, full disassembly and room sweeping are included in our upfront rate.",
      },
    ],
    seoDescription:
      "Reliable junk removal in Dubai Silicon Oasis (DSO). Villa cleanouts in Cedre & Semmer, apartment move-out clearance, e-waste recycling, and office furniture disposal.",
    nearbyAreas: [
      { name: "The Villa", slug: "the-villa" },
      { name: "Academic City", slug: "dubai-south" },
      { name: "Nad Al Sheba", slug: "nad-al-sheba" },
      { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
    ],
  },

  "al-quoz": {
    slug: "al-quoz",
    name: "Al Quoz",
    shortName: "Al Quoz",
    group: "New Dubai & Suburbs",
    tagline: "Industrial warehouse, creative gallery & commercial clearances in Al Quoz",
    intro:
      "Located in central Dubai between Sheikh Zayed Road and Al Khail Road, Al Quoz is the city's vibrant industrial and creative heart. Operating near our central depot, our crew provides rapid clearances for industrial warehouses, art galleries along Alserkal Avenue, automotive workshops, and residential villas.",
    image: warehouseImg,
    heroHighlights: [
      "Immediate dispatch from our central Al Quoz operational depot",
      "Industrial warehouse racking, pallet & heavy scrap disposal",
      "Creative gallery, showroom & event installation strip-outs",
    ],
    localContext: {
      propertyTypes:
        "Commercial warehouses across Al Quoz 1, 2, 3, and 4, art galleries, creative studios (Alserkal Avenue), automotive workshops, and residential villas in Al Quoz 1 & 2.",
      accessLogistics:
        "Wide industrial loading bays and high-ceiling warehouse shutter doors allow our high-tonnage trucks to park right inside units for fast, weather-protected loading.",
      popularItems: [
        "Industrial pallet racking, steel shelving & workbenches",
        "Wooden shipping pallets, crates, cardboard & packaging foam",
        "Art gallery display plinths, partitions & exhibition mockups",
        "Commercial scrap metal, redundant machinery & obsolete tech",
      ],
    },
    keyServices: [
      {
        title: "Warehouse Decommissioning & Strip-Outs",
        description:
          "Clearing redundant inventory, broken pallet racking, packaging materials, and surplus logistics supplies.",
      },
      {
        title: "Gallery & Creative Studio Clearouts",
        description:
          "Rapid teardown of temporary art exhibitions, stage sets, event backdrops, and showroom displays.",
      },
      {
        title: "Commercial Metal & E-Waste Recycling",
        description:
          "Responsible collection and certified recycling of industrial scrap metal and obsolete commercial equipment.",
      },
    ],
    localTips: [
      "Because our main depot is located in Al Quoz, we can offer immediate on-site arrival within 30 to 45 minutes.",
      "We provide formal waste manifests and clearance certificates for municipal and commercial compliance.",
      "Heavy industrial racking is unbolted and dismantled on-site by our trained technicians.",
    ],
    faqs: [
      {
        q: "How quickly can your trucks arrive in Al Quoz?",
        a: "With our central hub located right here in Al Quoz, our trucks can be at your facility in under 30 minutes.",
      },
      {
        q: "Can you handle high-tonnage industrial scrap and heavy racking?",
        a: "Yes, our team is equipped with heavy power tools, forklifts, and high-capacity trucks for large industrial clearances.",
      },
      {
        q: "Do you clear art galleries and studios in Alserkal Avenue?",
        a: "Yes, we regularly clear temporary exhibition structures, sculpture bases, and packaging for Alserkal creative spaces.",
      },
    ],
    seoDescription:
      "Fast industrial & commercial junk removal in Al Quoz, Dubai. Warehouse strip-outs, pallet disposal, art gallery clearances, and scrap metal collection across Al Quoz 1–4.",
    nearbyAreas: [
      { name: "Al Barsha", slug: "al-barsha" },
      { name: "Business Bay", slug: "business-bay" },
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Jumeirah", slug: "jumeirah" },
    ],
  },

  "nad-al-hamar": {
    slug: "nad-al-hamar",
    name: "Nad Al Hamar",
    shortName: "Nad Al Hamar",
    group: "New Dubai & Suburbs",
    tagline: "Traditional Emirati villa, Majlis & compound junk clearances",
    intro:
      "Located in eastern Dubai near Ras Al Khor, Nad Al Hamar is an established, peaceful residential neighborhood of traditional family villas. Our uniformed crew provides discreet, respectful clearances for standalone villas, private multi-family compounds, and commercial retail villas near Nad Al Hamar Avenues.",
    image: householdImg,
    heroHighlights: [
      "Standalone villa & private family compound clearances",
      "Traditional Majlis seating, carpets & heavy solid wood furniture",
      "Courtyard garden palm waste & outbuilding storage clearouts",
    ],
    localContext: {
      propertyTypes:
        "Expansive traditional standalone Emirati family villas, multi-villa compounds, and boutique commercial villas along Nad Al Hamar Road.",
      accessLogistics:
        "Nad Al Hamar villas feature private boundary walls and wide paved interior courtyards. Our trucks park directly inside private gates for concealed loading, preserving complete household privacy.",
      popularItems: [
        "Traditional and modern Majlis seating sets, heavy cushions & rugs",
        "Solid wood dining tables, ornate display cabinets & bed sets",
        "Outdoor courtyard palm trimmings, planters & fountain debris",
        "Old refrigerators, deep chest freezers & kitchen white goods",
      ],
    },
    keyServices: [
      {
        title: "Majlis & Living Room Refreshes",
        description:
          "Dismantling and removing heavy traditional seating, custom upholstery, and large decor pieces with zero wall scuffs.",
      },
      {
        title: "Villa Compound & Outbuilding Clears",
        description:
          "Clearing maid's quarters, driver annexes, secondary service kitchens, and external storage sheds.",
      },
      {
        title: "Garden Foliage & Palm Frond Removal",
        description:
          "High-capacity collection of heavy date palm cuttings, tree trimmings, and soil sacks.",
      },
    ],
    localTips: [
      "Let us know if parking is inside the private courtyard so our driver positions the vehicle close to service doors.",
      "We provide shoe covers and padded moving blankets for delicate indoor flooring.",
      "Same-day morning bookings on WhatsApp allow swift afternoon clearances.",
    ],
    faqs: [
      {
        q: "Can you clear items from both the main villa and external annexes?",
        a: "Yes, our team can clear the main living areas, service kitchens, and external storage sheds in one coordinated visit.",
      },
      {
        q: "Do you take large ornate wooden and traditional Majlis furniture in Nad Al Hamar?",
        a: "Yes, our team is trained in heavy two-person and four-person lifts with protective straps and padded blankets.",
      },
      {
        q: "How quickly can your trucks arrive in Nad Al Hamar?",
        a: "With easy access via Ras Al Khor Road (E44), our trucks can be on-site within 60 to 90 minutes.",
      },
    ],
    seoDescription:
      "Respectful junk removal in Nad Al Hamar, Dubai. Traditional villa cleanouts, Majlis furniture disposal, appliance removal, and courtyard clearances.",
    nearbyAreas: [
      { name: "Nad Al Sheba", slug: "nad-al-sheba" },
      { name: "Dubai Creek Harbour", slug: "dubai-creek-harbour" },
      { name: "Downtown Dubai", slug: "downtown-dubai" },
      { name: "Dubai Silicon Oasis", slug: "dubai-silicon-oasis" },
    ],
  },

  "nad-al-sheba": {
    slug: "nad-al-sheba",
    name: "Nad Al Sheba",
    shortName: "Nad Al Sheba",
    group: "Luxury Enclaves",
    tagline: "Prestige equestrian estate & luxury family villa junk collection",
    intro:
      "Famed for its prestigious equestrian lifestyle, expansive palaces, and luxury residential enclaves, Nad Al Sheba is one of Dubai's elite addresses. Our uniformed team caters to grand villas and estates across Nad Al Sheba 1, 2, 3, 4, and Nad Al Sheba Gardens with white-glove care.",
    image: villaImg,
    heroHighlights: [
      "Grand family villa & equestrian estate clearance capability",
      "Floor runner & marble protection for luxury residences",
      "Large plot garden foliage, palm cuttings & gym equipment removal",
    ],
    localContext: {
      propertyTypes:
        "Palatial standalone Emirati family villas, equestrian estates, modern master-planned villas in Nad Al Sheba Gardens, and luxury residences near Meydan Racecourse.",
      accessLogistics:
        "Nad Al Sheba estates feature wide private driveways and gated compounds. Our licensed vehicles park inside private grounds, deploying heavy neoprene floor runners to safeguard marble floors and ornate woodwork.",
      popularItems: [
        "Custom Italian living room sectionals, crystal chandeliers & dining suites",
        "Mature date palm fronds, landscaping green waste & heavy stone planters",
        "Commercial gym treadmills, weight racks & private sports equipment",
        "Multi-car garage storage, chest freezers & redundant appliances",
      ],
    },
    keyServices: [
      {
        title: "Nad Al Sheba Villa Handover & Pre-Sale Clears",
        description:
          "Comprehensive property cleanouts for estate sales, renovations, or tenancy handovers with white-glove care throughout.",
      },
      {
        title: "Private Majlis & Living Suite Clearances",
        description:
          "Discreet removal of heavy custom upholstery, large carpets, and solid wood display units.",
      },
      {
        title: "Estate Grounds & Landscaping Waste Removal",
        description:
          "Multi-truck clearance capacity for large manicured private grounds, fallen palm branches, and replaced outdoor fixtures.",
      },
    ],
    localTips: [
      "Coordinate access with your private estate security team prior to scheduled arrival.",
      "We provide written non-disclosure agreements (NDAs) for high-profile estate clearances.",
      "Our senior project lead oversees the entire clearance on-site from start to immaculate finish.",
    ],
    faqs: [
      {
        q: "Do you service all four zones of Nad Al Sheba?",
        a: "Yes, we regularly clear properties in Nad Al Sheba 1, 2, 3, 4, as well as Nad Al Sheba Gardens and Meydan South.",
      },
      {
        q: "How do you protect luxury marble and hardwood flooring in Nad Al Sheba villas?",
        a: "We lay down padded heavy-duty floor runners from the clearance rooms all the way to our vehicles.",
      },
      {
        q: "Can you handle multi-truck clearances for grand Nad Al Sheba estates?",
        a: "Yes, we can deploy multiple dedicated trucks and an expanded crew for large estate cleanouts.",
      },
    ],
    seoDescription:
      "White-glove junk removal in Nad Al Sheba, Dubai. Luxury villa cleanouts, Majlis furniture disposal, palm waste pickup, and estate clearances across Nad Al Sheba 1–4.",
    nearbyAreas: [
      { name: "Meydan", slug: "meydan" },
      { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
      { name: "Nad Al Hamar", slug: "nad-al-hamar" },
      { name: "Al Barari", slug: "al-barari" },
    ],
  },

  "al-barsha": {
    slug: "al-barsha",
    name: "Al Barsha",
    shortName: "Al Barsha",
    group: "New Dubai & Suburbs",
    tagline: "Fast junk collection for Al Barsha 1 apartments & Barsha 2/3 villas",
    intro:
      "Centrally positioned around Mall of the Emirates, Al Barsha blends bustling mid-rise apartment communities in Barsha 1 with tranquil standalone family villas in Barsha 2, 3, and Barsha South. Our crew provides rapid same-day junk removal across all Barsha sectors.",
    image: householdImg,
    heroHighlights: [
      "Dual Barsha 1 apartment & Barsha 2/3 standalone villa coverage",
      "Fast sofa, mattress & washing machine disposal",
      "Same-day apartment move-out & villa garage clearances",
    ],
    localContext: {
      propertyTypes:
        "Mid-rise apartment buildings in Al Barsha 1 (near MOE and Mashreq Metro), spacious 3 to 6 bedroom standalone villas and family compounds in Al Barsha 2 & 3, and modern villas in Barsha South.",
      accessLogistics:
        "Al Barsha 1 buildings have basement parking and service lifts. For Barsha 2 and 3 villas, wide residential streets and private driveways allow direct truck loading.",
      popularItems: [
        "Sectional sofas, king beds & modular flatpack wardrobes",
        "Broken refrigerators, washing machines & dishwashers",
        "Villa garage storage clutter, tool racks & bicycles",
        "Garden lawn clippings, palm cuttings & terrace patio sets",
      ],
    },
    keyServices: [
      {
        title: "Al Barsha 1 Apartment Move-Out Clears",
        description:
          "Complete end-of-lease clearances helping departing tenants secure complete security deposit refunds from landlords.",
      },
      {
        title: "Barsha 2 & 3 Villa Decluttering",
        description:
          "Full-house and garage clearances for family villas, removing old storage, garden cuttings, and furniture.",
      },
      {
        title: "Bulky Appliance & Furniture Collection",
        description:
          "Fast same-day removal of old mattresses, sectional sofas, and kitchen appliances with safe disconnection.",
      },
    ],
    localTips: [
      "Specify whether you are in Al Barsha 1, 2, 3, or Barsha South for exact dispatch routing.",
      "Our technicians safely disconnect kitchen appliances on-site with zero hassle.",
      "Send photos on WhatsApp for an immediate upfront quote with no hidden extras.",
    ],
    faqs: [
      {
        q: "Do you service all areas of Al Barsha?",
        a: "Yes, we cover Al Barsha 1, Al Barsha 2, Al Barsha 3, and Al Barsha South.",
      },
      {
        q: "How quickly can your trucks arrive in Al Barsha?",
        a: "With our proximity along Sheikh Zayed Road and Umm Suqeim Road, we can be at your address in under 60 minutes.",
      },
      {
        q: "Do you dismantle multi-door wardrobes and beds in Al Barsha apartments?",
        a: "Yes, full disassembly and room sweeping are included in our upfront rate.",
      },
    ],
    seoDescription:
      "Reliable junk removal in Al Barsha, Dubai. Apartment cleanouts in Barsha 1, villa decluttering in Barsha 2 & 3, furniture disposal, and appliance collection.",
    nearbyAreas: [
      { name: "Al Quoz", slug: "al-quoz" },
      { name: "The Greens", slug: "the-greens" },
      { name: "Dubai Marina", slug: "dubai-marina" },
      { name: "Dubai Hills Estate", slug: "dubai-hills-estate" },
    ],
  },

  "discovery-gardens": {
    slug: "discovery-gardens",
    name: "Discovery Gardens",
    shortName: "Discovery Gardens",
    group: "New Dubai & Suburbs",
    tagline: "Affordable, fast apartment junk collection across all 6 themed clusters",
    intro:
      "Set amidst lush landscaped garden courtyards near Ibn Battuta Mall, Discovery Gardens is a bustling residential favorite. We provide prompt, affordable junk removal across Zen, Mediterranean, Contemporary, Mogul, Mesoamerican, and Cactus building clusters.",
    image: furnitureImg,
    heroHighlights: [
      "Full coverage across all 6 Discovery Gardens themed clusters",
      "Same-day apartment move-out & bulky furniture removal",
      "Experienced handling for 6-storey building walk-ups & elevator lobbies",
    ],
    localContext: {
      propertyTypes:
        "Low-to-mid rise 6-storey residential apartment buildings surrounded by lush communal gardens and pedestrian walkways.",
      accessLogistics:
        "Discovery Gardens buildings feature surface resident parking and elevator lobbies. Our crew uses heavy-duty rubber-wheeled dollies and lifting straps to navigate corridors and elevators quietly and cleanly.",
      popularItems: [
        "Queen/king bed frames, spring mattresses & wooden wardrobes",
        "Fabric sofas, coffee tables & dining chair sets",
        "Used washing machines, refrigerators & microwaves",
        "Study desks, shoe racks & end-of-lease boxed clutter",
      ],
    },
    keyServices: [
      {
        title: "Discovery Gardens Apartment Move-Out Clears",
        description:
          "Complete end-of-tenancy clearances ensuring departing tenants leave apartments empty and clean for landlord handovers.",
      },
      {
        title: "Discovery Gardens Furniture & Mattress Disposal",
        description:
          "Same-day collection and eco-friendly disposal of old sofas, mattresses, and flatpack wardrobes.",
      },
      {
        title: "Kitchen Appliance Collection",
        description:
          "Safe electrical and water disconnection and haul-away of old washing machines, fridges, and cookers.",
      },
    ],
    localTips: [
      "Let us know your cluster name and building number (e.g. Zen Cluster Building 24, Mediterranean 12) for direct parking.",
      "Our team brings cordless power tools to dismantle complex wardrobes inside bedrooms before transport.",
      "Morning bookings on WhatsApp guarantee same-afternoon clearance.",
    ],
    faqs: [
      {
        q: "Do you service all clusters in Discovery Gardens?",
        a: "Yes, we regularly clear apartments across Zen, Mediterranean, Contemporary, Mogul, Mesoamerican, and Cactus clusters.",
      },
      {
        q: "Can you handle clearances from upper floors without service lifts?",
        a: "Yes, our experienced movers use specialized carrying straps and team lifts to safely navigate building elevators and stairwells.",
      },
      {
        q: "Do you disconnect washing machines and appliances?",
        a: "Yes, safe disconnection of water and drainage pipes is included at no extra charge.",
      },
    ],
    seoDescription:
      "Affordable junk removal in Discovery Gardens, Dubai. Apartment cleanouts, furniture disposal, mattress removal, and appliance collection across Zen, Mediterranean & Mogul clusters.",
    nearbyAreas: [
      { name: "Al Furjan", slug: "al-furjan" },
      { name: "Dubai Investment Park", slug: "dubai-investment-park" },
      { name: "Jumeirah Village Circle", slug: "jumeirah-village-circle" },
      { name: "Dubai Marina", slug: "dubai-marina" },
    ],
  },
};

export const getAreaDetail = (slug: string): AreaDetail | undefined => {
  return areaDetails[slug];
};

export const getAllAreaSlugs = (): string[] => {
  return Object.keys(areaDetails);
};
