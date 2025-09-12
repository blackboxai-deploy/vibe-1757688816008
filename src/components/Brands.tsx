"use client"

import { brands, testimonials } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Brands() {
  return (
    <section id="brands" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent font-poppins">
            Brand Collaborations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading brands across beauty, lifestyle, fashion, and wellness to create authentic content that drives engagement and conversions.
          </p>
        </div>

        {/* Brand Logos Grid */}
        <div className="mb-20">
          <h3 className="text-center text-xl font-semibold text-gray-700 mb-8">
            Brands I've Worked With
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-50"
              >
                <div className="flex items-center justify-center h-16">
                  <img 
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-12 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="text-center mt-3">
                  <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                    {brand.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            What Brands Say About Working With Me
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  {/* Quote */}
                  <div className="mb-6">
                    <div className="text-4xl text-pink-300 mb-2">"</div>
                    <p className="text-gray-700 leading-relaxed italic">
                      {testimonial.content}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage 
                        src={testimonial.image} 
                        alt={testimonial.name}
                      />
                      <AvatarFallback className="bg-pink-100 text-pink-600 font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-800">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-pink-600 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Partnership Success Metrics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">40%</div>
              <div className="opacity-90">Average Engagement Increase</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="opacity-90">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">72%</div>
              <div className="opacity-90">Return Client Rate</div>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Ready to see these results for your brand? Let's discuss how we can create content that drives real business outcomes.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Our Partnership
            </button>
          </div>
        </div>

        {/* Partnership Process */}
        <div className="mt-20">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            My Collaboration Process
          </h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-pink-200">
                <span className="text-2xl font-bold text-pink-600">1</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Discovery Call</h4>
              <p className="text-gray-600 text-sm">
                We discuss your brand, goals, and content requirements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-pink-200">
                <span className="text-2xl font-bold text-pink-600">2</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Content Strategy</h4>
              <p className="text-gray-600 text-sm">
                I create a tailored content plan that aligns with your objectives
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-pink-200">
                <span className="text-2xl font-bold text-pink-600">3</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Creation & Delivery</h4>
              <p className="text-gray-600 text-sm">
                Professional content creation with revisions included
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-pink-200">
                <span className="text-2xl font-bold text-pink-600">4</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Performance Review</h4>
              <p className="text-gray-600 text-sm">
                We analyze results and optimize for future collaborations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}