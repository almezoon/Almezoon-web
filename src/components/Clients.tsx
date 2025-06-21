'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, CheckCircle, Users, Award } from 'lucide-react'

const Clients = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const clients = [
    {
      name: "Cosentino",
      category: "Premium Surfaces",
      since: "2015",
      partnership: "8+ Years",
      projects: "30+",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "IKEA",
      category: "Furniture & Design",
      since: "2018",
      partnership: "5+ Years",
      projects: "45+",
      logo: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Danube Homes",
      category: "Real Estate",
      since: "2016",
      partnership: "7+ Years",
      projects: "25+",
      logo: "https://images.unsplash.com/photo-1560472354-9988a7994b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sai Kitchen",
      category: "Kitchen Solutions",
      since: "2019",
      partnership: "4+ Years",
      projects: "18+",
      logo: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Studio 971",
      category: "Interior Design",
      since: "2017",
      partnership: "6+ Years",
      projects: "35+",
      logo: "https://images.unsplash.com/photo-1560472354-a62f7d5ae35f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Division Nine",
      category: "Architecture",
      since: "2014",
      partnership: "9+ Years",
      projects: "50+",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
    }
  ]

  const stats = [
    { icon: Building2, number: "6+", label: "Partner Companies" },
    { icon: CheckCircle, number: "50+", label: "Projects Completed" },
    { icon: Award, number: "100%", label: "Client Satisfaction" }
  ]

  return (
    <section 
      id="clients" 
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
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with industry leaders to deliver exceptional stone solutions across diverse sectors and premium projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              {/* Client Image/Logo */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-gray-900">{client.category}</span>
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                  {client.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600 mb-1">Since</div>
                    <div className="font-bold text-gray-900">{client.since}</div>
                  </div>
                  <div className="text-center p-3 bg-amber-50 rounded-lg">
                    <div className="text-sm text-amber-700 mb-1">Projects</div>
                    <div className="font-bold text-amber-600">{client.projects}</div>
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-sm text-gray-500">Partnership: </span>
                  <span className="text-sm font-medium text-gray-700">{client.partnership}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8"
            >
              <stat.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Clients 