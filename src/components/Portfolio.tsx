"use client"

import { useState } from "react"
import { portfolioItems, portfolioCategories } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent font-poppins">
            My Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent UGC work across beauty, lifestyle, wellness, and more. Each piece is crafted to engage audiences and drive results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {portfolioCategories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg hover:from-pink-600 hover:to-rose-600" 
                  : "border-pink-200 text-pink-700 hover:bg-pink-50 bg-white/80 backdrop-blur-sm"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Card 
              key={item.id}
              className="group overflow-hidden bg-white/80 backdrop-blur-sm border-pink-100 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                        {item.platform}
                      </Badge>
                      <span className="text-sm font-medium">{item.engagement}</span>
                    </div>
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0">
                    {item.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800 text-lg group-hover:text-pink-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium">Brand:</span> {item.brand}
                  </div>
                  <div className="flex items-center text-pink-600">
                    <span className="text-sm font-medium">{item.engagement}</span>
                  </div>
                </div>

                {/* View Project Button (appears on hover) */}
                <div className={`mt-4 transition-all duration-300 ${
                  hoveredItem === item.id 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-2'
                }`}>
                  <Button 
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 rounded-full"
                    onClick={() => window.open(`#project-${item.id}`, '_blank')}
                  >
                    View Content
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                <span className="text-2xl">📁</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No content found
            </h3>
            <p className="text-gray-500">
              Try selecting a different category to see more content.
            </p>
          </div>
        )}

        {/* Portfolio CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-100">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Like What You See?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              This is just a sample of my work. I'd love to create custom content that perfectly fits your brand's unique voice and aesthetic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:from-pink-600 hover:to-rose-600 shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Let's Collaborate
              </Button>
              <Button 
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-3 rounded-full font-semibold"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}