'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, CheckCircle, Award, MapPin, Calendar, Users, Eye } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ProjectsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('All')

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Kitchen, Palm Jumeirah",
      category: "Residential",
      location: "Palm Jumeirah, Dubai",
      date: "2024",
      client: "Private Residence",
      materials: "Calacatta Gold Marble Island, Absolute Black Granite Countertops",
      scope: "Complete kitchen renovation with island fabrication and installation",
      area: "45 sqm",
      duration: "3 weeks",
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925319/AVI_40412_y15pfe.jpg",
      gallery: [
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925267/AVI_4293_vwttcw.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925183/AVI_4333_tzeyuq.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925956/AVI_4406-min_hrhyjx.jpg"
      ],
      description: "A stunning transformation featuring premium Calacatta Gold marble for the island and durable Absolute Black granite for work surfaces. The project included custom edge profiling and seamless integration with luxury appliances."
    },
    {
      id: 2,
      title: "Modern Office Reception, DIFC",
      category: "Commercial",
      location: "Dubai International Financial Centre",
      date: "2024",
      client: "Tech Corporation",
      materials: "Carrara White Marble Wall Cladding, Grey Granite Flooring",
      scope: "Reception area flooring and wall cladding installation",
      area: "120 sqm",
      duration: "2 weeks",
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926112/AVI_4157-min_qmxp4s.jpg",
      gallery: [
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924630/AVI_4448_zisizr.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924684/AVI_4400_v2dtbt.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924667/AVI_4435_et2vgc.jpg"
      ],
      description: "Contemporary office design featuring elegant Carrara marble wall cladding and sophisticated grey granite flooring. The project emphasized clean lines and professional aesthetics while maintaining durability for high-traffic areas."
    },
    {
      id: 3,
      title: "Luxury Hotel Bathroom Suites",
      category: "Hospitality",
      location: "Jumeirah Beach, Dubai",
      date: "2023",
      client: "5-Star Hotel Chain",
      materials: "Emperador Brown Marble, Travertine Accents",
      scope: "40 bathroom suites with vanities and wall installations",
      area: "800 sqm total",
      duration: "6 weeks",
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925707/AVI_4413_copy-min_hafwmp.jpg",
      gallery: [
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924935/AVI_4420_yazfsh.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926427/AVI_4278-min_c7ljxa-min_ws3j0g.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926425/AVI_4205_cwtbg4-min_umyvyc.jpg"
      ],
      description: "Luxurious hotel bathroom installations featuring rich Emperador Brown marble with travertine accents. Each suite was custom-designed to provide a spa-like experience while meeting commercial durability requirements."
    },
    {
      id: 4,
      title: "Residential Villa Flooring",
      category: "Residential",
      location: "Arabian Ranches, Dubai",
      date: "2023",
      client: "Villa Owner",
      materials: "Kashmir White Granite, Polished Finish",
      scope: "Complete villa flooring installation including stairs",
      area: "350 sqm",
      duration: "4 weeks",
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926426/AVI_4146_kxza4d-min_jfp1hw.jpg",
      gallery: [
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750923021/008_jrceqq.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925319/AVI_40412_y15pfe.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925267/AVI_4293_vwttcw.jpg"
      ],
      description: "Elegant villa flooring installation using premium Kashmir White granite throughout the main living areas and staircase. The polished finish creates a timeless, sophisticated look that complements the contemporary architecture."
    },
    {
      id: 5,
      title: "Restaurant Kitchen Counters",
      category: "Commercial",
      location: "Dubai Mall, Dubai",
      date: "2023",
      client: "Fine Dining Restaurant",
      materials: "Absolute Black Granite, Honed Finish",
      scope: "Commercial kitchen countertops and preparation areas",
      area: "80 sqm",
      duration: "2 weeks",
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925183/AVI_4333_tzeyuq.jpg",
      gallery: [
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925956/AVI_4406-min_hrhyjx.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926112/AVI_4157-min_qmxp4s.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924630/AVI_4448_zisizr.jpg"
      ],
      description: "Professional-grade kitchen countertops for a high-end restaurant featuring durable Absolute Black granite. The honed finish provides excellent slip resistance while maintaining the sophisticated appearance required for open kitchen designs."
    },
    {
      id: 6,
      title: "Spa Center Feature Wall",
      category: "Hospitality",
      location: "Atlantis Resort, Dubai",
      date: "2022",
      client: "Luxury Spa",
      materials: "Verde Guatemala Marble, Natural Edge",
      scope: "Statement feature wall with decorative elements",
      area: "25 sqm",
      duration: "1 week",
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924684/AVI_4400_v2dtbt.jpg",
      gallery: [
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924667/AVI_4435_et2vgc.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924935/AVI_4420_yazfsh.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926427/AVI_4278-min_c7ljxa-min_ws3j0g.jpg"
      ],
      description: "Dramatic spa feature wall using exotic Verde Guatemala marble with natural edge details. The unique green veining creates a calming, natural atmosphere perfect for the luxury spa environment."
    }
  ]

  const partners = [
    {
      name: "Cosentino",
      category: "Premium Surfaces",
      since: "2015",
      partnership: "8+ Years",
      projects: "30+",
      logo: "https://brandsofspain.com/wp-content/uploads/2011/07/cosengino-web-2023.jpg",
      description: "Long-standing partnership providing Silestone and Dekton surfaces for high-end projects across the UAE."
    },
    {
      name: "IKEA",
      category: "Furniture & Design",
      since: "2018",
      partnership: "5+ Years",
      projects: "45+",
      logo: "https://images.livemint.com/img/2021/08/23/original/IKEA_1629744378106.jpg",
      description: "Supplying premium countertops for IKEA kitchen installations throughout the UAE market."
    },
    {
      name: "Danube Homes",
      category: "Real Estate",
      since: "2016",
      partnership: "7+ Years",
      projects: "25+",
      logo: "https://np.naukimg.com/cphoto/l4t21Ww4iYfFln+hdYYFjjIk0pJUdnRmk43Tudt7ffiavVGzEkR2BZhEdcS7XA7jYu3gVYNkEloFZBMiNmQh+OynCtCuPHmCcA2EJava9zpK2gwOGj02+co4kbceNvQb9l",
      description: "Providing stone solutions for luxury residential developments and commercial properties."
    },
    {
      name: "Studio 971",
      category: "Interior Design",
      since: "2017",
      partnership: "6+ Years",
      projects: "35+",
      logo: "https://studio971.ae/wp-content/uploads/2018/08/Studio971-Show-Room-20-1024x684.jpg",
      description: "Collaborating on high-end interior design projects with custom stone installations."
    }
  ]

  const categories = ['All', 'Residential', 'Commercial', 'Hospitality']
  const stats = [
    { icon: Building2, number: "200+", label: "Completed Projects" },
    { icon: Users, number: "6+", label: "Partner Companies" },
    { icon: CheckCircle, number: "100%", label: "Client Satisfaction" },
    { icon: Award, number: "25+", label: "Years Experience" }
  ]

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

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
              Our Projects
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Portfolio of Excellence
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover our finest marble and granite installations across luxury residential, commercial, and hospitality projects in the UAE
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Portfolio */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each project showcases our commitment to quality, precision, and exceptional stone craftsmanship
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">View Details</span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-amber-600 text-sm font-medium">{project.date}</span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{project.location.split(',')[0]}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Materials:</span>
                      <span className="text-gray-700 font-medium">{project.materials.split(',')[0]}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Area:</span>
                      <span className="text-gray-700 font-medium">{project.area}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="text-gray-700 font-medium">{project.duration}</span>
                    </div>
                  </div>

                  {/* Gallery Preview */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {project.gallery.slice(0, 3).map((image, imageIndex) => (
                      <div key={imageIndex} className="relative overflow-hidden rounded-md group/gallery">
                        <img
                          src={image}
                          alt={`${project.title} Gallery ${imageIndex + 1}`}
                          className="w-full h-16 object-cover group-hover/gallery:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Trusted Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional stone solutions across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group text-center"
              >
                {/* Partner Logo */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2">
                    <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-800">
                      {partner.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                  {partner.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">{partner.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-2 bg-white rounded-lg">
                    <div className="text-xs text-gray-600 mb-1">Since</div>
                    <div className="font-bold text-gray-900">{partner.since}</div>
                  </div>
                  <div className="text-center p-2 bg-amber-50 rounded-lg">
                    <div className="text-xs text-amber-700 mb-1">Projects</div>
                    <div className="font-bold text-amber-600">{partner.projects}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Dream Project?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Join our portfolio of satisfied clients and experience the Al Mezoon difference in stone craftsmanship
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
              >
                Start Your Project
              </a>
              <a
                href="/services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 