"use client"

import { statistics, skills } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent font-poppins">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating authentic connections between brands and their audiences through compelling user-generated content.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              My UGC Journey
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              What started as sharing my favorite products with friends has evolved into a thriving career helping brands tell their stories authentically. I believe that genuine recommendations and real experiences create the most powerful connections.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              My approach focuses on understanding your brand's unique voice and values, then creating content that feels natural and trustworthy to your audience. Whether it's a skincare routine, fashion haul, or lifestyle moment, I ensure every piece of content serves both your marketing goals and your audience's interests.
            </p>

            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-2xl border border-pink-100">
              <h4 className="font-semibold text-gray-800 mb-3">What Sets Me Apart</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>3+ years of professional UGC creation experience</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Expertise across beauty, lifestyle, and wellness niches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>High engagement rates and authentic audience connection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  <span>Professional production quality with quick turnaround times</span>
                </li>
              </ul>
            </div>
          </div>

          {/* About Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d3ccf425-1c74-4934-b5c8-b3afd75f9222.png"
                alt="Sarah Mitchell creating content in her studio"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-pink-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">3+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <Card key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                  {stat.value}
                </div>
                <div className="font-semibold text-gray-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            My Expertise
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 text-pink-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100 transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Create Together?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how we can bring your brand's story to life through authentic UGC.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}