'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Factory, Users, Award, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentSlide, setCurrentSlide] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  // Helper function to get responsive image URL based on screen width
  const getResponsiveImageUrl = (baseUrl: string): { mobile: string; tablet: string; desktop: string } => {
    // Remove any existing transformation parameters
    const urlParts = baseUrl.split('/upload/');
    const baseUrlWithoutParams = urlParts[0] + '/upload/' + urlParts[1].split('/').slice(1).join('/');
    
    return {
      mobile: baseUrlWithoutParams.replace('/upload/', '/upload/f_auto,q_auto,w_640,c_fill/'),
      tablet: baseUrlWithoutParams.replace('/upload/', '/upload/f_auto,q_auto,w_1280,c_fill/'),
      desktop: baseUrlWithoutParams.replace('/upload/', '/upload/f_auto,q_auto,w_1600,c_fill/')
    };
  };

  // Update window width on client side
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Define carousel image type
  type CarouselImage = {
    url: string;
    title: string;
    description: string;
    responsiveImages: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };

  // Get appropriate image URL based on window width
  const getResponsiveImage = (image: CarouselImage): string => {
    if (windowWidth === 0) return image.url; // Default for SSR
    if (windowWidth < 768) return image.responsiveImages.mobile;
    if (windowWidth < 1280) return image.responsiveImages.tablet;
    return image.responsiveImages.desktop;
  };

  const carouselImages = [
    {
      url: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924630/AVI_4448_zisizr.jpg",
      title: "Manufacturing Facility",
      description: "State-of-the-art production floor",
      responsiveImages: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924630/AVI_4448_zisizr.jpg")
    },
    {
      url: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924684/AVI_4400_v2dtbt.jpg",
      title: "Precision Cutting",
      description: "Advanced stone cutting technology",
      responsiveImages: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924684/AVI_4400_v2dtbt.jpg")
    },
    {
      url: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924667/AVI_4435_et2vgc.jpg",
      title: "Quality Materials",
      description: "Premium stone selection",
      responsiveImages: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924667/AVI_4435_et2vgc.jpg")
    },
    {
      url: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924935/AVI_4420_yazfsh.jpg",
      title: "Finished Products",
      description: "Beautiful completed installations",
      responsiveImages: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750924935/AVI_4420_yazfsh.jpg")
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [carouselImages.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  const stats = [
    { number: "25+", label: "Years of Excellence", icon: Award },
    { number: "3000+", label: "Kitchens Annually", icon: Users },
    { number: "1800", label: "SqM Facility", icon: Factory },
    { number: "800", label: "SqM Warehouse", icon: CheckCircle },
  ]

  const features = [
    "Custom Cutting & Precision Finishing",
    "State-of-the-art Manufacturing",
    "Premium Quality Materials",
    "Expert Installation Team",
    "25+ Years Industry Experience",
    "Complete Project Management"
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            Leading Kitchen Countertop Fabricator in UAE Since 2000
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Al Mezoon
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Al Mezoon Marbles & Granites Industries LLC has been a leading kitchen countertop fabricator in the UAE since 2000. We are a team of professionals with deep expertise in marble, granite, quartz, and porcelain — specializing in supply, fabrication, and installation across the region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Founding Story</h4>
                <p className="text-gray-600">
                  Founded in 2000, Al Mezoon began with a small team and has grown into a trusted name with over two decades of experience. Today, we&apos;re known for premium-quality stones and exceptional craftsmanship across the UAE.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Facilities</h4>
                <p className="text-gray-600">
                  Our state-of-the-art 1800 sqm facility and 800 sqm warehouse allow us to produce 3000+ kitchens annually, meeting every client&apos;s unique style and needs through precision fabrication and flawless installation.
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl h-96 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={getResponsiveImage(carouselImages[currentSlide])}
                    alt={carouselImages[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {/* Image Info */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="text-lg font-semibold mb-1">{carouselImages[currentSlide].title}</h4>
                    <p className="text-sm opacity-90">{carouselImages[currentSlide].description}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Floating Badge - moved to top-left */}
            <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Factory className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Al Mezoon</p>
                  <p className="text-xs text-gray-600">Al Sajja Industrial Area</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <stat.icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Premium Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Premium Work</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Showcasing our finest marble and granite installations across luxury projects in the UAE
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                url: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925319/AVI_40412_y15pfe.jpg",
                responsive: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925319/AVI_40412_y15pfe.jpg")
              },
              {
                url: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925267/AVI_4293_vwttcw.jpg",
                responsive: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925267/AVI_4293_vwttcw.jpg")
              },
              {
                url: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925183/AVI_4333_tzeyuq.jpg",
                responsive: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750925183/AVI_4333_tzeyuq.jpg")
              }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
              >
                <img
                  src={windowWidth === 0 ? image.url : 
                       windowWidth < 768 ? image.responsive.mobile :
                       windowWidth < 1280 ? image.responsive.tablet :
                       image.responsive.desktop}
                  alt={`Premium Work ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 