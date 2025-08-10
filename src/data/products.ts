// Product type definition
export interface Product {
  id: number;
  name: string;
  type: string;
  category: string;
  description: string;
  image: string;
  rating: number;
  origin: string;
  quality: string;
  applications: string[];
  maintenance: string;
  certifications: string;
}

// Products data
export const products: Product[] = [
  {
    id: 1,
    name: "Carrara White Marble",
    type: "Premium Marble",
    category: "Marble",
    description: "Classic white marble with elegant veining, perfect for luxury countertops and flooring.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 5,
    origin: "Carrara, Italy",
    quality: "Grade A, premium selection with consistent veining and minimal imperfections",
    applications: ["Kitchen countertops", "Bathroom vanities", "Flooring", "Wall cladding", "Fireplace surrounds"],
    maintenance: "Seal every 6-12 months. Clean with pH-neutral stone cleaner. Avoid acidic substances and harsh chemicals. Wipe spills immediately to prevent staining.",
    certifications: "Natural Stone Institute Certified, ISO 9001:2015 Quality Management"
  },
  {
    id: 2,
    name: "Black Galaxy Granite",
    type: "Premium Granite",
    category: "Granite",
    description: "Stunning black granite with golden speckles, ideal for modern kitchen countertops.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 5,
    origin: "Andhra Pradesh, India",
    quality: "Premium grade with consistent black background and gold flecks, 3cm thickness standard",
    applications: ["Kitchen countertops", "Commercial surfaces", "Bar tops", "Island counters", "High-traffic areas"],
    maintenance: "Seal annually. Resistant to heat and scratches. Clean with mild soap and water. Avoid bleach-based cleaners.",
    certifications: "ASTM C615 Standard, Greenguard Gold Certified for low chemical emissions"
  },
  {
    id: 3,
    name: "Emperador Brown Marble",
    type: "Luxury Marble",
    category: "Marble",
    description: "Rich brown marble with distinctive veining, perfect for elegant interior applications.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 5,
    origin: "Buixcarró region, Spain",
    quality: "Select grade with consistent coloration and minimal fissures, available in polished and honed finishes",
    applications: ["Luxury flooring", "Feature walls", "Bathroom surfaces", "Decorative elements", "Stair treads"],
    maintenance: "Seal every 6-8 months. Use specialized marble cleaners. Avoid abrasive materials. Regular dusting and damp mopping recommended.",
    certifications: "CE Marked, European Standard EN 12058 for flooring applications"
  },
  {
    id: 4,
    name: "Calacatta Gold Marble",
    type: "Premium Marble",
    category: "Marble",
    description: "Luxurious white marble with bold gold veining, the epitome of elegance.",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 5,
    origin: "Apuan Alps, Tuscany, Italy",
    quality: "Ultra-premium selection with dramatic gold veining, book-matched slabs available for seamless installation",
    applications: ["Luxury kitchen islands", "Statement walls", "High-end bathroom surfaces", "Designer furniture", "Exclusive residential projects"],
    maintenance: "Seal quarterly in high-use areas. Professional cleaning recommended annually. Use coasters and cutting boards. Immediate spill cleanup essential.",
    certifications: "Natural Stone Council Certification, Marble Institute of America Accredited"
  },
  {
    id: 5,
    name: "Kashmir White Granite",
    type: "Premium Granite",
    category: "Granite",
    description: "Light colored granite with subtle patterns, perfect for bright modern spaces.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4,
    origin: "Karnataka region, India",
    quality: "Superior grade with consistent white background and minimal color variation, 2-3cm thickness available",
    applications: ["Kitchen countertops", "Bathroom vanities", "Commercial surfaces", "Outdoor kitchens", "Heat-resistant applications"],
    maintenance: "Seal every 1-2 years. Highly stain-resistant. Clean with mild detergent. Safe for hot cookware but trivets recommended.",
    certifications: "ASTM C615 Standard for Granite Dimension Stone, NSF/ANSI 51 Food Zone Certified"
  },
  {
    id: 6,
    name: "Verde Guatemala Marble",
    type: "Exotic Marble",
    category: "Marble",
    description: "Striking green marble with white veining, perfect for statement pieces.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 5,
    origin: "Guatemala, Central America",
    quality: "Exotic grade with distinctive green tones and dramatic white veining, limited availability",
    applications: ["Accent walls", "Designer furniture", "Luxury bathrooms", "Feature elements", "Art installations"],
    maintenance: "Seal every 4-6 months. Use specialized stone cleaners. Avoid acidic substances. Professional maintenance recommended for restoration.",
    certifications: "Fair Trade Stone Certified, Sustainable Quarrying Practices Verified"
  },
  {
    id: 7,
    name: "Red Dragon Granite",
    type: "Premium Granite",
    category: "Granite",
    description: "Bold red granite with dynamic patterns, ideal for creating dramatic spaces.",
    image: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4,
    origin: "Fujian Province, China",
    quality: "Premium selection with vibrant red tones and consistent patterning, available in polished and flamed finishes",
    applications: ["Statement countertops", "Commercial installations", "Bar tops", "Accent pieces", "Outdoor features"],
    maintenance: "Seal annually. Highly resistant to stains and scratches. Clean with mild soap and water. Safe for hot cookware.",
    certifications: "ASTM C615 Granite Standard, ISO 14001 Environmental Management"
  },
  {
    id: 8,
    name: "Travertine Classic",
    type: "Natural Stone",
    category: "Natural Stone",
    description: "Classic travertine with natural texture, perfect for traditional and modern designs.",
    image: "https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 4,
    origin: "Denizli region, Turkey",
    quality: "Premium filled travertine with minimal pitting, available in honed, polished, and tumbled finishes",
    applications: ["Indoor flooring", "Outdoor patios", "Wall cladding", "Shower surrounds", "Pool decks"],
    maintenance: "Seal every 1-2 years. Regular cleaning with pH-neutral cleaner. Fill and repair natural pits as needed. Avoid acidic cleaners.",
    certifications: "ASTM C1527 Standard for Travertine, CE Marked for European compliance"
  },
  {
    id: 9,
    name: "Crystal Blue Quartzite",
    type: "Premium Quartzite",
    category: "Quartzite",
    description: "Stunning blue quartzite with crystalline structure, perfect for luxury applications.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    rating: 5,
    origin: "Bahia region, Brazil",
    quality: "Exclusive grade with rare blue tones and exceptional hardness (7-8 on Mohs scale), limited availability",
    applications: ["Luxury kitchen countertops", "High-end bathrooms", "Statement walls", "Designer furniture", "Commercial feature pieces"],
    maintenance: "Seal every 2 years. Extremely durable and heat-resistant. Clean with stone-safe products. Resistant to etching and scratching.",
    certifications: "ASTM C616 Standard for Quartzite, NSF/ANSI 51 Food Zone Certified"
  }
]; 