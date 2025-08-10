'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Import products data
import { products } from '@/data/products'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default function ProductDetailPage({ params }: PageProps) {
  // Unwrap params Promise with React.use()
  const unwrappedParams = use(params)
  const id = parseInt(unwrappedParams.id, 10)
  const product = products.find(p => p.id === id)
  
  if (!product) {
    notFound()
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="flex items-center text-sm text-gray-500">
              <Link href="/" className="hover:text-amber-600 transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/#products" className="hover:text-amber-600 transition-colors">
                Products
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>

          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/#products" 
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Products
            </Link>
          </div>

          {/* Product Detail */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden h-full"
                ref={ref}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                    {product.type}
                  </span>
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8"
              >
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full mb-4">
                  {product.category}
                </span>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center mb-6">
                  <div className="flex items-center mr-4">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">Premium Selection</span>
                </div>
                
                <p className="text-gray-700 mb-8">
                  {product.description}
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Material Origin</h3>
                    <p className="text-gray-700">{product.origin}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Standards</h3>
                    <p className="text-gray-700">{product.quality}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Applications</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {product.applications.map((app, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Maintenance</h3>
                    <p className="text-gray-700">{product.maintenance}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Certifications</h3>
                    <p className="text-gray-700">{product.certifications}</p>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <Link 
                    href="/#contact" 
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
                  >
                    Request Quote for {product.name}
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related {product.category} Products</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relProduct) => (
                  <Link href={`/products/${relProduct.id}`} key={relProduct.id}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
                      {/* Product Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={relProduct.image}
                          alt={relProduct.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Product Content */}
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {relProduct.name}
                        </h3>
                        <div className="flex items-center mt-1">
                          {[...Array(relProduct.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 bg-white rounded-2xl p-8 text-center shadow-md"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need help choosing the right stone?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our stone experts can help you select the perfect material for your project based on your specific requirements and preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
              >
                Contact Our Experts
              </Link>
              <Link href="/#products" className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Explore More Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 