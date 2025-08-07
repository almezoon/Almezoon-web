'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, User, Clock, Search, BookOpen, Lightbulb } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function BlogPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const articles = [
    {
      id: 1,
      slug: "choose-granite-uae-climate",
      title: "How to Choose the Right Granite for Your Kitchen in the UAE Climate",
      excerpt: "Discover the best granite options that can withstand UAE's hot and humid climate while maintaining their beauty and functionality for years to come.",
      content: `Living in the UAE means dealing with extreme temperatures and humidity levels that can affect natural stone installations. When choosing granite for your kitchen, consider these climate-specific factors:

**Heat Resistance**: UAE kitchens experience intense heat, making granite an excellent choice due to its superior heat resistance. Unlike other materials, granite can handle hot pots and pans without damage.

**Humidity Considerations**: The coastal humidity in Dubai and Abu Dhabi requires proper sealing. We recommend darker granites like Absolute Black or Kashmir White that naturally resist moisture absorption.

**Best Granite Types for UAE Kitchens**:
1. **Absolute Black**: Perfect for modern UAE homes, this granite is non-porous and extremely durable
2. **Kashmir White**: Light-colored option that reflects heat and stays cool to touch
3. **Black Galaxy**: Stunning appearance with golden speckles, ideal for luxury UAE properties

**Maintenance Tips**:
- Seal your granite every 12-18 months in UAE climate
- Use pH-neutral cleaners specifically designed for natural stone
- Avoid acidic substances like lemon juice on unsealed granite

**Why Choose Al Mezoon**: With 25+ years of experience in UAE climate conditions, we understand which granite types perform best in your specific location.`,
      author: "Ahmed Al-Rashid",
      authorRole: "Senior Stone Consultant",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Granite Guide",
      tags: ["granite", "kitchen", "UAE climate", "maintenance"],
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925319/AVI_40412_y15pfe.jpg",
      featured: true
    },
    {
      id: 2,
      slug: "marble-vs-quartzite-dubai-guide",
      title: "Marble vs. Quartzite: A Complete Guide for Dubai Homeowners",
      excerpt: "Compare the pros and cons of marble and quartzite for your Dubai home. Learn which material suits your lifestyle and budget best.",
      content: `When renovating your Dubai home, choosing between marble and quartzite can be challenging. Both materials offer unique benefits suited to different preferences and lifestyles.

**Marble: The Classic Choice**
Natural marble has been a symbol of luxury for centuries, and it's particularly popular in UAE's high-end properties.

*Advantages*:
- Unparalleled beauty with unique veining
- Cool surface temperature (important in hot climates)
- Excellent for baking and pastry preparation
- Timeless aesthetic that adds property value

*Considerations*:
- Requires regular maintenance and sealing
- Susceptible to etching from acidic substances
- Higher maintenance cost over time

**Quartzite: The Durable Alternative**
Quartzite combines natural beauty with enhanced durability, making it increasingly popular among Dubai residents.

*Advantages*:
- Extremely durable and scratch-resistant
- Lower maintenance requirements
- Heat resistant (perfect for UAE kitchens)
- Available in marble-like patterns

*Considerations*:
- Higher initial cost than some marbles
- Limited color options compared to marble
- Requires professional installation

**Best Choice for Dubai Homes**:
- **For luxury kitchens with dedicated maintenance**: Calacatta or Carrara marble
- **For busy families**: White quartzite with marble-like veining
- **For outdoor kitchens**: Quartzite for superior weather resistance

**Al Mezoon's Recommendation**: We help you choose based on your specific needs, lifestyle, and budget. Our experts can show you samples and explain long-term maintenance requirements for your Dubai property.`,
      author: "Fatima Hassan",
      authorRole: "Interior Design Specialist",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Material Comparison",
      tags: ["marble", "quartzite", "comparison", "Dubai homes"],
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925267/AVI_4293_vwttcw.jpg",
      featured: true
    },
    {
      id: 3,
      slug: "natural-stone-design-trends-2024",
      title: "Design Trends: 5 Ways to Use Natural Stone in 2024",
      excerpt: "Explore the latest natural stone design trends that are transforming UAE homes and commercial spaces this year.",
      content: `Natural stone design trends in 2024 focus on sustainability, bold statements, and seamless integration with modern technology. Here are the top trends we're seeing in UAE projects:

**1. Waterfall Edge Islands**
The waterfall edge trend continues to dominate luxury UAE kitchens. This design creates a stunning visual impact by extending the countertop material vertically to the floor.

*Best Materials*: Calacatta Gold marble, White Quartzite, or dramatic black granite
*Why It Works in UAE*: Creates a focal point that complements minimalist design preferences

**2. Mixed Material Combinations**
Combining different natural stones creates depth and visual interest while maintaining sophistication.

*Popular Combinations*:
- White marble countertops with dark granite backsplash
- Quartzite island with marble perimeter counters
- Granite flooring with marble wall accents

**3. Large Format Slabs**
UAE homeowners are choosing larger slabs to minimize seams and create cleaner lines.

*Benefits*:
- Reduced maintenance at seam lines
- More dramatic veining patterns
- Modern, sophisticated appearance

**4. Natural Edge Features**
Incorporating natural stone edges adds organic beauty to contemporary spaces.

*Applications*:
- Bathroom vanity edges
- Coffee table tops
- Feature wall elements

**5. Sustainable Stone Sourcing**
Environmentally conscious choices are becoming more important to UAE residents.

*Eco-Friendly Options*:
- Locally sourced stone when possible
- Recycled granite options
- Stones with minimal processing

**Al Mezoon's 2024 Projects**: We've implemented these trends in over 50 projects this year, from luxury villas in Palm Jumeirah to commercial spaces in DIFC.`,
      author: "Omar Al-Mansouri",
      authorRole: "Design Consultant",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Design Trends",
      tags: ["design trends", "2024", "natural stone", "UAE homes"],
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925183/AVI_4333_tzeyuq.jpg",
      featured: false
    },
    {
      id: 4,
      slug: "marble-care-dubai-climate",
      title: "How to Care for Your Marble Countertops in Dubai's Climate",
      excerpt: "Essential maintenance tips to keep your marble countertops looking pristine in Dubai's challenging climate conditions.",
      content: `Dubai's unique climate presents specific challenges for marble maintenance. High temperatures, humidity, and fine desert sand require special care approaches to maintain your marble's beauty.

**Daily Maintenance Routine**

*Morning Care*:
- Wipe surfaces with a microfiber cloth to remove overnight moisture
- Use coasters for all beverages, especially citrus drinks
- Clean spills immediately to prevent staining

*Evening Care*:
- Deep clean with pH-neutral stone cleaner
- Dry thoroughly to prevent water spots
- Apply protective spray if needed

**Weekly Deep Cleaning**

*Materials Needed*:
- pH-neutral stone cleaner (we recommend StoneTech or Granite Gold)
- Microfiber cloths
- Soft-bristled brush for textured areas
- Clean water for rinsing

*Process*:
1. Remove all items from countertops
2. Apply stone cleaner according to manufacturer directions
3. Let sit for 2-3 minutes for deep cleaning
4. Scrub gently with microfiber cloth
5. Rinse thoroughly with clean water
6. Dry completely with clean cloth

**Monthly Maintenance**

*Sealing Schedule*:
- Check seal integrity monthly using water droplet test
- Reseal every 12-18 months in UAE climate
- Professional sealing recommended for best results

*Professional Maintenance*:
- Annual professional cleaning and inspection
- Polish restoration if needed
- Chip and crack repair

**Climate-Specific Challenges**

*Humidity Issues*:
- Use exhaust fans during cooking
- Maintain indoor humidity levels between 30-50%
- Address condensation immediately

*Sand and Dust*:
- Daily dusting prevents abrasive buildup
- Use door mats to reduce tracked sand
- Regular HVAC filter changes

**Warning Signs to Watch For**:
- Dull appearance (needs polishing)
- Water absorption (needs resealing)
- Visible scratches (professional restoration needed)
- Discoloration (may indicate damage)

**Al Mezoon's Maintenance Services**: We offer comprehensive maintenance programs for all our installations, including annual inspections and professional cleaning services tailored to Dubai's climate.`,
      author: "Layla Abdulrahim",
      authorRole: "Stone Care Specialist",
      date: "2023-12-28",
      readTime: "8 min read",
      category: "Maintenance Guide",
      tags: ["marble care", "maintenance", "Dubai climate", "cleaning tips"],
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925956/AVI_4406-min_hrhyjx.jpg",
      featured: false
    },
    {
      id: 5,
      slug: "granite-commercial-kitchens-uae",
      title: "Benefits of Granite Countertops for UAE Commercial Kitchens",
      excerpt: "Discover why granite is the preferred choice for commercial kitchens in the UAE's hospitality and restaurant industry.",
      content: `The UAE's thriving hospitality and restaurant industry demands countertop materials that can withstand intense commercial use while maintaining hygienic conditions. Granite has emerged as the gold standard for these demanding environments.

**Why Granite Excels in Commercial Settings**

*Durability Under Pressure*:
- Withstands heavy equipment and constant use
- Resists chips and cracks from commercial activities
- Maintains appearance despite high-volume operations

*Heat Resistance for Commercial Cooking*:
- Handles extreme temperatures from commercial ovens
- Won't burn or discolor from hot cookware
- Maintains structural integrity under thermal stress

*Hygiene and Food Safety*:
- Non-porous surface when properly sealed
- Resists bacterial growth
- Easy to sanitize according to UAE health standards

**Best Granite Types for Commercial Use**

*Absolute Black Granite*:
- Maximum durability and stain resistance
- Professional appearance for open kitchens
- Minimal maintenance requirements

*Kashmir White Granite*:
- Light color shows cleanliness easily
- Reflects light for better working conditions
- Popular in bakeries and pastry kitchens

*Steel Grey Granite*:
- Industrial appearance suits modern kitchens
- Excellent durability for heavy use
- Coordinates well with stainless steel equipment

**UAE Health Department Compliance**

*Required Specifications*:
- Smooth, non-absorbent surface
- Easy to clean and sanitize
- No cracks or crevices that harbor bacteria
- Proper edge finishing to prevent contamination

*Al Mezoon's Commercial Certification*:
- All our commercial installations meet UAE health standards
- We provide certification documentation for health inspections
- Ongoing maintenance support to ensure compliance

**Cost-Benefit Analysis**

*Initial Investment*:
- Higher upfront cost than laminate alternatives
- Competitive with other natural stone options
- Long-term value through durability

*Operating Savings*:
- Reduced replacement costs
- Lower maintenance expenses
- Decreased downtime for repairs

*ROI Considerations*:
- 20+ year lifespan with proper care
- Maintains property value
- Professional appearance attracts customers

**Case Studies from Our Commercial Projects**

*Five-Star Hotel, Dubai Marina*:
- 150 sqm of Absolute Black granite
- Two years of heavy use with minimal maintenance
- Consistently passes health department inspections

*Restaurant Chain, Mall of the Emirates*:
- Kashmir White granite for display kitchen
- Increased customer confidence in food safety
- Easy cleaning saves 2 hours daily

**Installation Considerations**

*Professional Requirements*:
- Precise measurements for equipment integration
- Proper sealing for food safety compliance
- Coordinated installation with other trades

*Al Mezoon's Commercial Services*:
- 24/7 emergency repair service
- Scheduled maintenance programs
- Health department liaison support

**Maintenance for Commercial Success**

*Daily Requirements*:
- Sanitize with approved commercial cleaners
- Inspect for chips or damage
- Document cleaning for health inspections

*Professional Maintenance*:
- Monthly deep cleaning and sealing inspection
- Quarterly professional assessment
- Annual resealing as needed

The investment in quality granite countertops pays dividends in durability, hygiene, and professional appearance for UAE commercial kitchens.`,
      author: "Khalid Al-Zaabi",
      authorRole: "Commercial Projects Manager",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "Commercial Guide",
      tags: ["commercial kitchens", "granite", "hospitality", "UAE restaurants"],
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926112/AVI_4157-min_qmxp4s.jpg",
      featured: false
    },
    {
      id: 6,
      slug: "bathroom-stone-selection-uae",
      title: "Choosing the Perfect Stone for Your Bathroom Vanity in the UAE",
      excerpt: "Navigate the options for bathroom stone selection with consideration for UAE's humidity, style preferences, and maintenance requirements.",
      content: `Bathroom vanities in the UAE face unique challenges from coastal humidity, frequent use, and style expectations. Choosing the right stone ensures both beauty and longevity in these demanding conditions.

**Understanding UAE Bathroom Environments**

*Humidity Challenges*:
- Coastal areas: 60-80% humidity levels
- Inland areas: 40-60% humidity levels
- Daily temperature fluctuations affect stone

*Usage Patterns*:
- Multiple daily users in family homes
- Frequent cleaning and sanitizing
- Exposure to cosmetics and personal care products

**Top Stone Choices for UAE Bathrooms**

*Granite Options*:

**Absolute Black Granite**
- Pros: Non-porous, stain-resistant, sophisticated appearance
- Cons: Shows water spots, requires regular cleaning
- Best for: Master bathrooms, contemporary designs

**Kashmir White Granite**
- Pros: Light color brightens space, good stain resistance
- Cons: May show wear in high-use areas
- Best for: Guest bathrooms, traditional designs

*Marble Selections*:

**Carrara White Marble**
- Pros: Classic beauty, cool surface, timeless appeal
- Cons: Requires sealing, susceptible to etching
- Best for: Luxury master suites with dedicated maintenance

**Emperador Brown Marble**
- Pros: Rich color hides minor stains, sophisticated appearance
- Cons: Requires regular maintenance, higher cost
- Best for: Spa-style bathrooms, hotel projects

*Quartzite Alternatives*:

**White Quartzite**
- Pros: Marble appearance with granite durability
- Cons: Higher initial cost, limited color options
- Best for: Busy family bathrooms, low-maintenance preference

**Design Considerations for UAE Homes**

*Style Preferences*:
- Contemporary: Clean lines with Absolute Black or White Quartzite
- Traditional: Warm tones with Kashmir White or Emperador
- Luxury: Dramatic veining with Calacatta or Statuario marble

*Practical Considerations*:
- Integrated sinks reduce seams and maintenance
- Rounded edges improve safety and cleaning
- Adequate lighting shows stone beauty while ensuring functionality

**Installation Best Practices**

*Moisture Protection*:
- Proper waterproofing behind vanity
- Sealed edges and penetrations
- Adequate ventilation planning

*Professional Installation Requirements*:
- Precise measurements for plumbing integration
- Proper support for stone weight
- Quality sealing for humid conditions

**Maintenance in UAE Climate**

*Daily Care*:
- Wipe dry after each use
- Use coasters for toiletries
- Immediate spill cleanup

*Weekly Maintenance*:
- Deep clean with appropriate stone cleaner
- Check and clean around faucet areas
- Inspect seals and caulking

*Annual Professional Service*:
- Resealing as needed
- Polishing to restore shine
- Assessment of wear and damage

**Cost Considerations**

*Budget-Friendly Options*:
- Kashmir White granite: AED 150-200 per sqm
- Local marble varieties: AED 200-300 per sqm

*Premium Choices*:
- Imported marble: AED 400-800 per sqm
- High-end quartzite: AED 500-700 per sqm

*Long-term Value*:
- Quality stone increases property value
- Reduced replacement costs over time
- Lower maintenance with proper selection

**Al Mezoon's Bathroom Vanity Services**

*Design Consultation*:
- Material selection based on usage and style
- Integration with existing bathroom design
- Maintenance requirement explanation

*Installation Excellence*:
- Experienced bathroom installation team
- Coordination with plumbing and electrical trades
- Quality assurance and warranty support

*Ongoing Support*:
- Maintenance guidance and training
- Annual inspection and care services
- Repair and restoration when needed

The right stone choice for your UAE bathroom vanity balances beauty, durability, and maintenance requirements to create a space you'll love for years to come.`,
      author: "Mariam Al-Hashimi",
      authorRole: "Bathroom Design Specialist",
      date: "2023-12-15",
      readTime: "9 min read",
      category: "Bathroom Guide",
      tags: ["bathroom vanity", "stone selection", "UAE humidity", "maintenance"],
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924630/AVI_4448_zisizr.jpg",
      featured: false
    }
  ]

  const categories = ['All', 'Granite Guide', 'Material Comparison', 'Design Trends', 'Maintenance Guide', 'Commercial Guide', 'Bathroom Guide']

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = articles.filter(article => article.featured)

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925319/AVI_40412_y15pfe.jpg)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-amber-600 text-white text-sm font-semibold rounded-full mb-6">
              Stone Care & Design Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Stone Insights
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Professional guidance, maintenance tips, and design inspiration for marble, granite, and natural stone in the UAE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'All' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Articles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Essential reading for UAE homeowners and professionals
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{article.author}</div>
                          <div className="text-sm text-gray-500">{article.authorRole}</div>
                        </div>
                      </div>

                      <Link 
                        href={`/blog/${article.slug}`}
                        className="text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1"
                      >
                        Read More
                        <BookOpen className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {selectedCategory === 'All' ? 'All Articles' : selectedCategory}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional insights and expert advice for your stone projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      By {article.author}
                    </div>

                    <Link 
                      href={`/blog/${article.slug}`}
                      className="text-amber-600 hover:text-amber-700 font-medium text-sm flex items-center gap-1"
                    >
                      Read
                      <BookOpen className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No articles found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-amber-100" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Expert Stone Advice
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Have a specific question about stone selection, maintenance, or installation? Our experts are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
              >
                Ask Our Experts
              </a>
              <a
                href="tel:+97165311778"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Call for Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 