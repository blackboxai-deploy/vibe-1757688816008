"use client"

import { useState } from "react"
import { personalInfo } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    projectType: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        company: '',
        budget: '',
        message: '',
        projectType: ''
      })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const projectTypes = [
    "UGC Video Content",
    "Product Photography", 
    "Content Package",
    "Long-term Partnership",
    "Brand Consultation",
    "Other"
  ]

  const budgetRanges = [
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000+",
    "Let's discuss"
  ]

  if (submitted) {
    return (
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-12 border border-pink-100">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">✓</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-lg text-gray-600 mb-6">
              Your message has been received. I'll get back to you within 24 hours to discuss your project.
            </p>
            <Button 
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-pink-700 bg-clip-text text-transparent font-poppins">
            Let's Work Together
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to create authentic content that drives results? Let's discuss your project and bring your brand's story to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm border-pink-100 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Start Your Project
              </CardTitle>
              <p className="text-gray-600">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Company and Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company/Brand
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => handleChange(e as any)}
                      className="w-full p-3 border border-pink-200 rounded-lg focus:border-pink-500 focus:ring-pink-500 bg-white"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map(type => (
                      <Button
                        key={type}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => setFormData(prev => ({ ...prev, projectType: type }))}
                        className={`rounded-full ${
                          formData.projectType === type 
                            ? 'bg-pink-100 border-pink-500 text-pink-700' 
                            : 'border-pink-200 text-gray-600 hover:bg-pink-50'
                        }`}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border-pink-200 focus:border-pink-500 focus:ring-pink-500"
                    placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:from-pink-600 hover:to-rose-600 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin mr-2">⏳</span>
                      Sending Message...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Get In Touch Directly
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-pink-600 text-xl">📧</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <a href={`mailto:${personalInfo.email}`} className="text-pink-600 hover:underline">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-pink-600 text-xl">📱</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Phone</div>
                    <a href={`tel:${personalInfo.phone}`} className="text-pink-600 hover:underline">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-pink-600 text-xl">📍</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Location</div>
                    <span className="text-gray-600">{personalInfo.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white/80 backdrop-blur-sm border-pink-100 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800">
                  Follow My Work
                </CardTitle>
                <p className="text-gray-600">
                  Check out my latest content and behind-the-scenes moments
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="#instagram"
                    className="flex items-center p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-2xl mr-3">📸</span>
                    <div>
                      <div className="font-medium text-gray-800">Instagram</div>
                      <div className="text-sm text-pink-600">{personalInfo.socialMedia.instagram}</div>
                    </div>
                  </a>
                  
                  <a 
                    href="#tiktok"
                    className="flex items-center p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-2xl mr-3">🎵</span>
                    <div>
                      <div className="font-medium text-gray-800">TikTok</div>
                      <div className="text-sm text-pink-600">{personalInfo.socialMedia.tiktok}</div>
                    </div>
                  </a>
                  
                  <a 
                    href="#youtube"
                    className="flex items-center p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-2xl mr-3">📺</span>
                    <div>
                      <div className="font-medium text-gray-800">YouTube</div>
                      <div className="text-sm text-pink-600">{personalInfo.socialMedia.youtube}</div>
                    </div>
                  </a>
                  
                  <a 
                    href="#linkedin"
                    className="flex items-center p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="text-2xl mr-3">💼</span>
                    <div>
                      <div className="font-medium text-gray-800">LinkedIn</div>
                      <div className="text-sm text-pink-600">Connect</div>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-lg font-bold mb-2">Quick Response Time</h3>
                <p className="opacity-90">
                  I typically respond to all inquiries within 24 hours, often sooner!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-12">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Most UGC projects are completed within 5-7 business days, depending on complexity and scope."
              },
              {
                question: "Do you provide usage rights?",
                answer: "Yes, all content comes with commercial usage rights included in the project price."
              },
              {
                question: "Can you work with products from any industry?",
                answer: "I specialize in beauty, lifestyle, and wellness, but I'm open to discussing other industries."
              },
              {
                question: "Do you offer revisions?",
                answer: "Yes, up to 3 rounds of revisions are included with every project to ensure you're completely satisfied."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/60 p-6 rounded-2xl border border-pink-100">
                <h4 className="font-semibold text-gray-800 mb-3">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}