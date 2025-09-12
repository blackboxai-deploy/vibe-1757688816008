"use client"

import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data"

export default function Hero() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fce1b0eb-981c-49c0-9b49-0940f88bfe21.png"
                alt="Sarah Mitchell - UGC Creator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-pink-500 rounded-full border-2 border-white flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
            </div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent font-poppins">
          {personalInfo.name}
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6 font-medium">
          {personalInfo.title}
        </h2>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* Bio */}
        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          {personalInfo.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToPortfolio}
            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 border-2 border-transparent"
          >
            View My Portfolio
          </Button>
          
          <Button 
            onClick={scrollToContact}
            variant="outline"
            className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Proof */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-pink-600 mb-1">50+</div>
            <div className="text-sm text-gray-600">Brand Partners</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-pink-600 mb-1">2.5M+</div>
            <div className="text-sm text-gray-600">Total Reach</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-pink-600 mb-1">8.2%</div>
            <div className="text-sm text-gray-600">Avg Engagement</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-pink-600 mb-1">500+</div>
            <div className="text-sm text-gray-600">Content Pieces</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}