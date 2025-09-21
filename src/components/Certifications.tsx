'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronLeft, ChevronRight, Award, Shield, CheckCircle } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: "ISO 28000:2022",
    description: "Supply Chain Security Management",
    category: "Security Management",
    image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1758469969/ISO_28000_2022_page-0001_1_fyyv4t.jpg",
    year: "2022",
    issuedBy: "International Organization for Standardization"
  },
  {
    id: 2,
    title: "ISO 9001:2015",
    description: "Quality Management Systems",
    category: "Quality Management",
    image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1758469969/ISO_9001_2015_page-0001_1_ozeta5.jpg",
    year: "2015",
    issuedBy: "International Organization for Standardization"
  },
  {
    id: 3,
    title: "ISO 14001:2015",
    description: "Environmental Management Systems",
    category: "Environmental Management",
    image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1758469969/ISO_14001_2015_page-0001_1_qya5pz.jpg",
    year: "2015",
    issuedBy: "International Organization for Standardization"
  },
  {
    id: 4,
    title: "ISO 45001:2018",
    description: "Occupational Health & Safety Management",
    category: "Safety Management",
    image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1758469969/ISO_45001_2018_page-0001_1_celx1l.jpg",
    year: "2018",
    issuedBy: "International Organization for Standardization"
  }
]

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setDirection(1)
      setActiveIndex((prev) => (prev + 1) % certificates.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [autoPlay])

  const nextCertificate = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % certificates.length)
    setAutoPlay(false) // Pause auto-play when user manually navigates
  }

  const prevCertificate = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length)
    setAutoPlay(false) // Pause auto-play when user manually navigates
  }

  const goToSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
    setAutoPlay(false) // Pause auto-play when user manually navigates
  }

  const currentCertificate = certificates[activeIndex]

  return (
    <section 
      id="certifications" 
      className="py-20 relative"
      style={{
        backgroundImage: 'url(https://wallpapers.com/images/hd/white-texture-pictures-9c27sac284jgqqwk.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white/30" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            <Award className="w-4 h-4 inline-block mr-2" />
            Our Certifications
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quality Standards & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated by international certifications that ensure the highest standards in quality, safety, and environmental management.
          </p>
        </motion.div>

        {/* Main Certificate Display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Certificate Image */}
              <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 p-8 flex items-center justify-center min-h-[400px]">
                <motion.div
                  key={currentCertificate.id}
                  initial={{ opacity: 0, x: direction * 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -direction * 50, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full max-w-sm"
                >
                  <div className="bg-white rounded-2xl shadow-lg p-4 h-full">
                    <img 
                      src={currentCertificate.image} 
                      alt={`${currentCertificate.title} Certificate`}
                      className="w-full h-full object-contain rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  {/* Certificate Badge */}
                  <div className="absolute -top-3 -right-3 bg-amber-500 text-white rounded-full p-3 shadow-lg">
                    <Shield className="w-6 h-6" />
                  </div>
                </motion.div>
              </div>
              
              {/* Certificate Information */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  key={`info-${currentCertificate.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
                      {currentCertificate.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {currentCertificate.title}
                  </h3>
                  
                  <p className="text-xl text-gray-700 mb-6">
                    {currentCertificate.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Certified since {currentCertificate.year}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Issued by {currentCertificate.issuedBy}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Regularly audited and maintained</span>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="bg-amber-50 rounded-lg p-4">
                      <p className="text-sm text-amber-800 font-medium">
                        🏆 This certification demonstrates our commitment to maintaining the highest international standards in our operations and services.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certificate Navigation */}
        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center space-x-6">
            <button 
              onClick={prevCertificate}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-amber-50 hover:shadow-xl transition-all duration-300"
              aria-label="Previous certificate"
            >
              <ChevronLeft className="w-6 h-6 text-amber-600" />
            </button>
            
            <div className="flex space-x-3">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-amber-600 w-8' 
                      : 'bg-gray-300 hover:bg-amber-300'
                  }`}
                  aria-label={`Go to certificate ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextCertificate}
              className="p-3 rounded-full bg-white shadow-lg hover:bg-amber-50 hover:shadow-xl transition-all duration-300"
              aria-label="Next certificate"
            >
              <ChevronRight className="w-6 h-6 text-amber-600" />
            </button>
          </div>
        </div>

        {/* All Certificates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
                index === activeIndex ? 'ring-2 ring-amber-500 shadow-xl' : ''
              }`}
              onClick={() => goToSlide(index)}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-50 to-gray-100 p-4 flex items-center justify-center">
                <img 
                  src={certificate.image} 
                  alt={`${certificate.title} Certificate Thumbnail`}
                  className="w-full h-full object-contain rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {certificate.title}
                </h4>
                <p className="text-xs text-gray-600 mb-2">
                  {certificate.category}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-600 font-medium">
                    Since {certificate.year}
                  </span>
                  <Award className="w-4 h-4 text-amber-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Quality You Can Trust
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our internationally recognized certifications ensure that every project meets the highest standards of quality, safety, and environmental responsibility.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Start Your Certified Project
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
