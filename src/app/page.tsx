import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Products from '@/components/Products'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Projects />
      <Testimonials />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}
