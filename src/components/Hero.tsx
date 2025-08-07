'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Award, MapPin, Users } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
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
      desktop: baseUrlWithoutParams.replace('/upload/', '/upload/f_auto,q_auto,w_1920,c_fill/')
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

  // Define slide type
  type Slide = {
    title: string;
    subtitle: string;
    image: string;
    responsiveImages: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };

  // Get appropriate image URL based on window width
  const getResponsiveImage = (slide: Slide): string => {
    if (windowWidth === 0) return slide.image; // Default for SSR
    if (windowWidth < 768) return slide.responsiveImages.mobile;
    if (windowWidth < 1280) return slide.responsiveImages.tablet;
    return slide.responsiveImages.desktop;
  };

  const slides = [
    {
      title: "Premium Stone Craftsmanship",
      subtitle: "Luxury marble installations for elite projects",
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750923021/008_jrceqq.jpg",
      responsiveImages: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750923021/008_jrceqq.jpg")
    },
    {
      title: "Expert Fabrication",
      subtitle: "State-of-the-art manufacturing facility",
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926427/AVI_4278-min_c7ljxa-min_ws3j0g.jpg",
      responsiveImages: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926427/AVI_4278-min_c7ljxa-min_ws3j0g.jpg")
    },
    {
      title: "Professional Installation",
      subtitle: "Precision fitting by skilled craftsmen",
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926425/AVI_4205_cwtbg4-min_umyvyc.jpg",
      responsiveImages: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926425/AVI_4205_cwtbg4-min_umyvyc.jpg")
    },
    {
      title: "Quality Assurance",
      subtitle: "25+ years of excellence in UAE",
      image: "https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926426/AVI_4146_kxza4d-min_jfp1hw.jpg",
      responsiveImages: getResponsiveImageUrl("https://res.cloudinary.com/dmfrfsnro/image/upload/v1750926426/AVI_4146_kxza4d-min_jfp1hw.jpg")
    }
  ]

  const stats = [
    {
      icon: Award,
      title: "25+ Years Experience",
      subtitle: "Trusted expertise in the natural stone industry"
    },
    {
      icon: Users,
      title: "3000+ Kitchens/Year",
      subtitle: "Precision crafted with natural elegance"
    },
    {
      icon: MapPin,
      title: "Sharjah Factory Location",
      subtitle: "Al Sajja Industrial Area, UAE"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${getResponsiveImage(slides[currentSlide])})`,
              }}
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-amber-600 text-white text-sm font-semibold rounded-full">
                Premium Marble & Granite Fittings in UAE – Quality, Durability, Elegance
              </span>
            </motion.div>

            {/* Main Headlines */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Transform Your Space with Premium Stone
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-8"
            >
              UAE&apos;s Leading Marble & Granite Specialists Since 2000
            </motion.p>

            {/* Dynamic Slide Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg text-gray-300">
                  {slides[currentSlide].subtitle}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Main Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-300 max-w-4xl mx-auto mb-12"
            >
              From luxury kitchens to stunning floors, we fabricate and install premium marble, granite, quartz, and porcelain across the UAE. 25+ years of expertise, 3000+ projects completed, and a commitment to perfection in every detail.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <a
                href="#contact"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get Free Quote</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/#products"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
              >
                View Our Premium Collection
              </a>
              <a
                href="tel:+97165311778"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>📞 Call Now</span>
              </a>
            </motion.div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-300 text-sm">{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 