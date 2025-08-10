'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    content: "Al Mezoon delivered exceptional quality for our luxury villa. The Calacatta marble looks stunning and their installation was flawless. Their team was professional, punctual, and provided excellent service from selection to installation.",
    author: "Sarah Al-Rashid",
    position: "Palm Jumeirah Villa Owner",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    project: "Residential Villa Marble Installation"
  },
  {
    id: 2,
    content: "Professional service and outstanding granite work for our hotel project. Always delivered on time and within budget. Their attention to detail and commitment to quality made them the perfect partner for our luxury hotel renovation.",
    author: "Mohammed Hassan",
    position: "Hotel Project Manager",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    project: "Commercial Hotel Renovation"
  },
  {
    id: 3,
    content: "Best marble company in UAE! Their expertise in UAE climate conditions saved us from costly mistakes. The team provided valuable guidance on material selection that would withstand our local environment while maintaining aesthetic appeal.",
    author: "Ahmed Al-Mansouri",
    position: "Interior Designer, Studio 971",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    project: "Multiple Design Projects"
  },
  {
    id: 4,
    content: "We've partnered with Al Mezoon on over 30 kitchen projects, and their consistency in quality and service is remarkable. Their craftsmanship with quartz countertops is unmatched in the UAE market.",
    author: "Fatima Al-Suwaidi",
    position: "Kitchen Design Specialist, IKEA",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    project: "Kitchen Countertop Partnership"
  },
  {
    id: 5,
    content: "Our office lobby transformation using Al Mezoon's marble flooring has received countless compliments. Their team worked after hours to minimize disruption to our business operations, which we greatly appreciated.",
    author: "Khalid Al-Zarooni",
    position: "Facilities Manager, Emirates Tower",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    project: "Commercial Office Renovation"
  }
]

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Get featured testimonials (active + next two)
  const getFeaturedTestimonials = () => {
    const featured = []
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length
      featured.push(testimonials[index])
    }
    return featured
  }

  const featuredTestimonials = getFeaturedTestimonials()

  return (
    <section 
      id="testimonials" 
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
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about our marble and granite solutions.
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Testimonial Content */}
              <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-amber-200" />
                </div>
                
                <motion.p 
                  key={featuredTestimonials[0].id}
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 50 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-2xl text-gray-700 font-light italic mb-8"
                >
                  {featuredTestimonials[0].content}
                </motion.p>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
                    <img 
                      src={featuredTestimonials[0].image} 
                      alt={featuredTestimonials[0].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{featuredTestimonials[0].author}</h4>
                    <p className="text-gray-600">{featuredTestimonials[0].position}</p>
                    <div className="flex mt-1">
                      {[...Array(featuredTestimonials[0].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Image */}
              <div className="lg:col-span-2 bg-amber-50 p-8 flex flex-col justify-center items-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Project Highlight</h4>
                <p className="text-gray-600 text-center mb-6">{featuredTestimonials[0].project}</p>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Project Image</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-md hover:bg-amber-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-amber-600" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeIndex ? 1 : -1)
                  setActiveIndex(index)
                }}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-amber-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-md hover:bg-amber-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-amber-600" />
          </button>
        </div>

        {/* Additional Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {featuredTestimonials.slice(1, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start mb-4">
                <Quote className="w-8 h-8 text-amber-200 mr-4 flex-shrink-0" />
                <p className="text-gray-700 italic">
                  {testimonial.content.length > 150 
                    ? `${testimonial.content.substring(0, 150)}...` 
                    : testimonial.content}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Join our growing list of satisfied clients across the UAE.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Contact Us Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 