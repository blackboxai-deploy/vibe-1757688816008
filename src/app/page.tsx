import Hero from "@/components/Hero"
import About from "@/components/About" 
import Portfolio from "@/components/Portfolio"
import Brands from "@/components/Brands"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Portfolio Section */}
      <Portfolio />
      
      {/* Brands & Collaborations Section */}
      <Brands />
      
      {/* Services Section */}
      <Services />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}