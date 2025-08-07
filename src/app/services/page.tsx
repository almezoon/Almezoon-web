'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Scissors, Wrench, Truck, CheckCircle, Factory, Clock, Award, Users } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ServicesPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const mainServices = [
    {
      icon: Scissors,
      title: "Kitchen Countertops",
      description: "Transform your kitchen with premium marble and granite countertops. From elegant islands to functional work surfaces, we create the heart of your home.",
      features: [
        "Custom measurements and design",
        "Premium quality marble, granite, and quartz",
        "Professional edge finishing",
        "Integrated sinks and appliances",
        "Heat and stain resistant options",
        "25-year craftsmanship warranty"
      ],
      process: [
        "Free consultation and measurement",
        "Material selection and design approval",
        "Precision cutting and fabrication",
        "Quality control and finishing",
        "Professional installation"
      ],
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925956/AVI_4406-min_hrhyjx.jpg",
      gallery: [
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925319/AVI_40412_y15pfe.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925267/AVI_4293_vwttcw.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925183/AVI_4333_tzeyuq.jpg"
      ]
    },
    {
      icon: Wrench,
      title: "Bathroom Vanities",
      description: "Create luxurious bathroom spaces with our premium stone vanities. Water-resistant materials perfect for UAE's climate conditions.",
      features: [
        "Moisture-resistant stone selection",
        "Custom sizing for any bathroom",
        "Integrated basin options",
        "Anti-bacterial surface treatment",
        "Modern and classic design styles",
        "Complete installation service"
      ],
      process: [
        "Bathroom assessment and planning",
        "Waterproofing consultation",
        "Stone selection and customization",
        "Precision fabrication",
        "Professional installation with plumbing coordination"
      ],
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926112/AVI_4157-min_qmxp4s.jpg",
      gallery: [
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924630/AVI_4448_zisizr.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924684/AVI_4400_v2dtbt.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924667/AVI_4435_et2vgc.jpg"
      ]
    },
    {
      icon: Factory,
      title: "Flooring Solutions",
      description: "Premium marble and granite flooring that combines durability with elegance. Perfect for residential and commercial spaces across the UAE.",
      features: [
        "Slip-resistant surface options",
        "Climate-appropriate stone selection",
        "Large format tiles and slabs",
        "Decorative pattern designs",
        "Commercial-grade durability",
        "Expert installation team"
      ],
      process: [
        "Site survey and floor planning",
        "Stone selection and layout design",
        "Surface preparation",
        "Precision installation",
        "Sealing and finishing"
      ],
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925707/AVI_4413_copy-min_hafwmp.jpg",
      gallery: [
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924935/AVI_4420_yazfsh.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926427/AVI_4278-min_c7ljxa-min_ws3j0g.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926425/AVI_4205_cwtbg4-min_umyvyc.jpg"
      ]
    },
    {
      icon: Truck,
      title: "Wall Cladding",
      description: "Stunning wall cladding solutions for interior and exterior applications. Transform any space with the natural beauty of stone.",
      features: [
        "Interior and exterior applications",
        "Weather-resistant materials",
        "3D textured options",
        "Custom pattern designs",
        "Fire-resistant stone options",
        "Professional mounting systems"
      ],
      process: [
        "Wall assessment and design",
        "Material selection consultation",
        "Custom cutting and preparation",
        "Mounting system installation",
        "Final finishing and sealing"
      ],
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926426/AVI_4146_kxza4d-min_jfp1hw.jpg",
      gallery: [
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750923021/008_jrceqq.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925319/AVI_40412_y15pfe.jpg",
        "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925267/AVI_4293_vwttcw.jpg"
      ]
    }
  ]

  const additionalServices = [
    {
      title: "Custom Stone Fabrication",
      description: "Bespoke stone solutions for unique architectural requirements",
      icon: Scissors
    },
    {
      title: "Stone Restoration",
      description: "Professional restoration and maintenance of existing stone installations",
      icon: Wrench
    },
    {
      title: "Commercial Projects",
      description: "Large-scale stone installations for hotels, offices, and retail spaces",
      icon: Factory
    },
    {
      title: "Design Consultation",
      description: "Expert advice on stone selection and design integration",
      icon: Award
    }
  ]

  const stats = [
    { icon: Factory, number: "1800", label: "SqM Facility" },
    { icon: Users, number: "3000+", label: "Annual Projects" },
    { icon: Clock, number: "25+", label: "Years Experience" },
    { icon: Award, number: "100%", label: "Quality Guarantee" }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925956/AVI_4406-min_hrhyjx.jpg)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-amber-600 text-white text-sm font-semibold rounded-full mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Complete Stone Solutions
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              From fabrication to installation, we provide comprehensive stone solutions with precision craftsmanship and exceptional quality for every application.
            </p>
            <a
              href="#services"
              className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Explore Our Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized stone solutions for every area of your home or business
            </p>
          </motion.div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Process:</h4>
                    <div className="space-y-2">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center space-x-3">
                          <div className="w-6 h-6 bg-amber-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                            {stepIndex + 1}
                          </div>
                          <span className="text-sm text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="/#contact"
                    className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Quote for {service.title}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Image Gallery */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    {/* Main Image */}
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="text-lg font-semibold">{service.title}</h4>
                        <p className="text-sm opacity-90">Professional Installation</p>
                      </div>
                    </div>

                    {/* Gallery Thumbnails */}
                    <div className="grid grid-cols-3 gap-2">
                      {service.gallery.map((image, imageIndex) => (
                        <div key={imageIndex} className="relative overflow-hidden rounded-lg group cursor-pointer">
                          <img
                            src={image}
                            alt={`${service.title} Example ${imageIndex + 1}`}
                            className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-xs font-medium">View Project</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Additional Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized solutions for unique requirements and ongoing maintenance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Service Excellence by Numbers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and precision drives everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-amber-600 to-amber-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              Contact our experts for a free consultation and discover the perfect stone solution for your project
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
              >
                Get Free Consultation
              </a>
              <a
                href="tel:+97165311778"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                📞 Call +971 6 531 1778
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 