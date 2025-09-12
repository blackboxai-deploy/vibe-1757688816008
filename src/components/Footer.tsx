"use client"

import { personalInfo } from "@/lib/data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-pink-900 to-rose-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-200 to-rose-200 bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-pink-100 mb-6 leading-relaxed">
              Professional UGC creator specializing in authentic content that drives engagement and conversions. Let's bring your brand's story to life.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <span className="text-lg">📸</span>
              </a>
              <a 
                href="#tiktok"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="TikTok"
              >
                <span className="text-lg">🎵</span>
              </a>
              <a 
                href="#youtube"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <span className="text-lg">📺</span>
              </a>
              <a 
                href="#linkedin"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-200">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-pink-100 hover:text-white transition-colors duration-300"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-pink-100 hover:text-white transition-colors duration-300"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-pink-100 hover:text-white transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-pink-100 hover:text-white transition-colors duration-300"
                >
                  Brand Partners
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-pink-100 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-200">Get In Touch</h4>
            <div className="space-y-3">
              <div>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-pink-100 hover:text-white transition-colors duration-300 text-sm"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-pink-100 hover:text-white transition-colors duration-300 text-sm"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div className="text-pink-100 text-sm">
                {personalInfo.location}
              </div>
            </div>
            
            {/* Response Time Badge */}
            <div className="mt-4 bg-white/10 rounded-lg p-3 backdrop-blur-sm">
              <div className="text-sm font-medium text-pink-200">⚡ Quick Response</div>
              <div className="text-xs text-pink-100">Usually within 24 hours</div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 rounded-2xl p-6 mb-8 backdrop-blur-sm">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2 text-pink-200">Stay Updated</h4>
            <p className="text-pink-100 mb-4">
              Get the latest UGC tips, trends, and behind-the-scenes content delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-full bg-white/20 border border-white/30 text-white placeholder-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
              />
              <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-pink-200 text-sm mb-4 md:mb-0">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#privacy" className="text-pink-200 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-pink-200 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#media-kit" className="text-pink-200 hover:text-white transition-colors duration-300">
                Media Kit
              </a>
            </div>
          </div>
          
          {/* Professional Disclaimer */}
          <div className="mt-6 text-xs text-pink-200 text-center opacity-80">
            <p>
              Professional UGC services • All content created includes commercial usage rights • 
              Rates may vary based on scope and requirements
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center px-6 py-3 bg-white/10 rounded-full text-pink-200 hover:bg-white/20 hover:text-white transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            <span className="mr-2">↑</span>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}