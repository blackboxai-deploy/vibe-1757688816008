"use client"

import { services } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent font-poppins">
            My Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional UGC services tailored to your brand's unique needs. From concept to delivery, I handle every aspect of content creation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0">
                    Popular
                  </Badge>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{service.turnaround}</div>
                  </div>
                </div>
                
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="relative z-10">
                {/* Features List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-600">
                        <span className="text-pink-500 mr-2 mt-1 flex-shrink-0">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing and CTA */}
                <div className="border-t border-pink-100 pt-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold text-pink-600">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-500">
                        Per project
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 rounded-full font-semibold transition-all duration-300 group-hover:shadow-lg"
                  >
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-100 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Additional Services Available
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Need something specific? I offer custom packages tailored to your unique requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-white/60 rounded-2xl">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="font-semibold text-gray-800 mb-2">Social Media Management</h4>
              <p className="text-sm text-gray-600">End-to-end social media strategy and execution</p>
            </div>
            
            <div className="text-center p-4 bg-white/60 rounded-2xl">
              <div className="text-3xl mb-3">🎬</div>
              <h4 className="font-semibold text-gray-800 mb-2">Video Editing</h4>
              <p className="text-sm text-gray-600">Professional post-production and editing services</p>
            </div>
            
            <div className="text-center p-4 bg-white/60 rounded-2xl">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold text-gray-800 mb-2">Analytics & Reporting</h4>
              <p className="text-sm text-gray-600">Detailed performance analysis and insights</p>
            </div>
            
            <div className="text-center p-4 bg-white/60 rounded-2xl">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold text-gray-800 mb-2">Brand Consultation</h4>
              <p className="text-sm text-gray-600">Strategic guidance for UGC campaigns</p>
            </div>
          </div>
        </div>

        {/* Process Timeline */}
        <div className="mb-16">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            My Creative Process
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-200 to-rose-200 hidden md:block" />
            
            <div className="space-y-12">
              {[
                {
                  step: "1",
                  title: "Brief & Planning",
                  description: "We discuss your goals, target audience, and content requirements in detail.",
                  duration: "1-2 days"
                },
                {
                  step: "2", 
                  title: "Content Creation",
                  description: "I create authentic, engaging content that aligns with your brand voice.",
                  duration: "3-5 days"
                },
                {
                  step: "3",
                  title: "Review & Revisions",
                  description: "You review the content and I make any necessary adjustments.",
                  duration: "1-2 days"
                },
                {
                  step: "4",
                  title: "Final Delivery",
                  description: "Final assets delivered in your preferred formats with usage rights.",
                  duration: "Same day"
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
                      <div className="flex items-center mb-3 md:justify-end md:flex-row-reverse">
                        <h4 className="font-bold text-gray-800 text-lg">{item.title}</h4>
                        <Badge className="bg-pink-100 text-pink-600 ml-3 md:mr-3 md:ml-0">
                          {item.duration}
                        </Badge>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-4 relative z-10 flex-shrink-0">
                    {item.step}
                  </div>
                  
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and create content that drives real results for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Book a Consultation
              </button>
              <a 
                href="mailto:hello@sarahmitchell.com"
                className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}