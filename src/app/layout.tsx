import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Sarah Mitchell - UGC Creator & Content Strategist",
  description: "Professional UGC creator specializing in beauty, lifestyle, and wellness content. Partner with me to create authentic, engaging content that drives results for your brand.",
  keywords: "UGC creator, user generated content, content creator, brand partnerships, social media marketing, influencer",
  authors: [{ name: "Sarah Mitchell" }],
  openGraph: {
    title: "Sarah Mitchell - UGC Creator & Content Strategist",
    description: "Professional UGC creator specializing in beauty, lifestyle, and wellness content. Partner with me to create authentic, engaging content that drives results for your brand.",
    url: "https://sarahmitchell-ugc.com",
    siteName: "Sarah Mitchell UGC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarah Mitchell - UGC Creator Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Mitchell - UGC Creator & Content Strategist",
    description: "Professional UGC creator specializing in beauty, lifestyle, and wellness content.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 min-h-screen`}>
        <div className="relative">
          {/* Background gradient overlay */}
          <div className="fixed inset-0 bg-gradient-to-br from-pink-50/50 via-transparent to-rose-100/30 pointer-events-none z-0" />
          
          {/* Main content */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}