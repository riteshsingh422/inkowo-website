"use client"
import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

// ===== Import all images like in Home page =====
import jodhabai1 from "../assets/images/jodhabai1.jpg"
import jodhabai2 from "../assets/images/jodhabai2.jpg"
import jodhabai5 from "../assets/images/jodhabai5.jpg"
import jodhabaidetail from "../assets/images/jodhabaidetail.webp"
import jodhabaimain from "../assets/images/jodhabaimain.jpg"
import ranipadmavati1 from "../assets/images/ranipadmavati1.jpg"
import ranipadmavati2 from "../assets/images/ranipadmavati2.jpg"
import ranipadmavati5 from "../assets/images/ranipadmavati5.jpg"
import ranipadmavatidetail from "../assets/images/ranipadmavatidetail.jpg"
import ranipadmavatimain from "../assets/images/ranipadmavatimain.jpg"
import ranilaxmi1 from "../assets/images/ranilaxmi1.jpg"
import ranilaxmi2 from "../assets/images/ranilaxmi2.jpg"
import ranilaxmidetail from "../assets/images/ranilaxmidetail.jpeg"
import ranilaxmimain from "../assets/images/ranilaxmimain.jpg"
import video from "../assets/images/collection.mp4"

export default function Collection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // ===== Updated galleryItems with new names, dates, and text =====
  const galleryItems = [
    {
      id: 1,
      name: "Best Collection",
      subtitle: "19 November 2025",
      description: "This set embodies timeless elegance. It blends tradition with modern craftsmanship for all.",
      details: "Best Collection is a showcase of luxury, inspired by royal heritage and fine artistry.",
      images: [jodhabai1, jodhabai2, jodhabaimain, jodhabaidetail, jodhabai5],
    },
    {
      id: 2,
      name: "Latest Collection",
      subtitle: "18 November 2025",
      description: "Latest Collection shines with bold designs, reflecting beauty and modern sophistication.",
      details: "It captures the essence of today’s trends, blending innovation with timeless elegance always.",
      images: [ranipadmavati1, ranipadmavati2, ranipadmavatimain, ranipadmavatidetail, ranipadmavati5],
    },
    {
      id: 3,
      name: "Recent Premium Collection",
      subtitle: "23 November 2025",
      description: "Recent Premium Collection offers luxury, crafted with precision for those who value excellence.",
      details: "It reflects unmatched artistry and quality, inspired by regal splendor and modern finesse.",
      images: [ranilaxmi1, ranilaxmi2, ranilaxmimain, ranilaxmidetail],
    },
  ]

  return (
    <main className="bg-[#F5F1E8] min-h-screen">
      <Navbar />

      {/* ===== SINGLE SECTION (Showcase + Gallery) ===== */}
      <section className="py-24 bg-[#F5F1E8] min-h-[80vh] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?luxury')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A7A5E]/5 to-[#F5F1E8]/10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2
              className="text-5xl sm:text-6xl lg:text-7xl font-light text-[#333333] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              <span className="text-pretty">Discover</span>
              <br />
              <span className="text-pretty">World's Best Collections</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent mx-auto mt-6"></div>
          </div>

          {/* Showcase Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-12">
            {/* Left Small Images */}
            <div className="md:col-span-2 space-y-4 flex flex-col items-center">
                <div className="overflow-hidden rounded-lg w-[320px] h-[440px] cursor-pointer hover:opacity-80 transition-opacity shadow-md">
                  <img
                    src={jodhabai1 || "/placeholder.svg?height=400&width=300&query=luxury jewelry"}
                    alt="Jewelry collection 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-[#5A7A5E]/30 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-[#5A7A5E]/50"></div>
                  </div>
                </div>
              </div>
              
            {/* Center Large Image */}
            <div className="md:col-span-8 flex justify-center">
              <div className="overflow-hidden rounded-xl w-full max-w-md cursor-pointer hover:opacity-80 transition-opacity shadow-lg">
                <video
                  src={video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            {/* Right Small Images */}
            <div className="md:col-span-2 space-y-4 flex flex-col items-center">
              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#5A7A5E]/30 flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border border-[#5A7A5E]/50"></div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg w-[320px] h-[440px] cursor-pointer hover:opacity-80 transition-opacity shadow-md">
                <img
                  src={ranipadmavati1 || "/placeholder.svg?height=400&width=300&query=luxury jewelry"}
                  alt="Jewelry collection 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Description and CTA */}
          <div className="text-center space-y-6 mb-12">
            <p className="text-[#666666] text-sm tracking-widest font-light max-w-2xl mx-auto">
              EXPLORE OUR EXQUISITE COLLECTION
            </p>
            <p className="text-[#666666] text-base leading-relaxed max-w-2xl mx-auto">
              Discover timeless pieces inspired by legendary queens and royal heritage. Each collection tells a story of
              elegance, craftsmanship, and timeless beauty.
            </p>
            <button className="inline-block px-8 py-3 bg-[#5A7A5E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-[#333333] transition-all shadow-md hover:shadow-lg">
              SHOP NOW
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="w-8 h-8 rounded-full border border-[#5A7A5E]/20"></div>
            <div className="w-6 h-6 rounded-full border border-[#5A7A5E]/30"></div>
            <div className="w-8 h-8 rounded-full border border-[#5A7A5E]/20"></div>
          </div>

          {/* Gallery Items */}
          <div className="space-y-32">
            {galleryItems.map((item, index) => (
              <div key={item.id} className="gallery-item relative">
                <div
                  className={`grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center bg-[#F5F1E8]/80 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 shadow-xl ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Images Column (Left) */}
                  <div className={`space-y-4 ${index % 2 === 1 ? "md:col-start-3" : ""}`}>
                    <div className="grid grid-cols-2 gap-4">
                      {item.images.slice(0, 2).map((img, i) => (
                        <div key={i}>
                          <div className="overflow-hidden rounded-2xl aspect-square cursor-pointer transition-transform duration-300 hover:scale-105">
                            <div className="relative w-full h-full bg-gradient-to-br from-[#5A7A5E]/30 to-[#F5F1E8]/30 border-2 border-gradient-to-br from-[#5A7A5E]/50 to-[#F5F1E8]/50 shadow-md">
                              <img
                                src={img || "/placeholder.svg"}
                                alt={`${item.name} ${i + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="overflow-hidden rounded-2xl aspect-video cursor-pointer transition-transform duration-300 hover:scale-105">
                      <div className="relative w-full h-full bg-gradient-to-br from-[#5A7A5E]/30 to-[#F5F1E8]/30 border-2 border-gradient-to-br from-[#5A7A5E]/50 to-[#F5F1E8]/50 shadow-md">
                        <img
                          src={item.images[2] || "/placeholder.svg"}
                          alt={`${item.name} main`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:col-end-3" : "md:col-start-2"}`}>
                    <div className="space-y-3">
                      <p className="text-[#5A7A5E] text-sm tracking-widest font-light">ROYAL COLLECTION</p>
                      <h3
                        className="text-4xl sm:text-5xl font-normal text-[#333333] tracking-tight"
                        style={{ fontFamily: "Georgia, serif", textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
                      >
                        {item.name}
                      </h3>
                      <p className="text-[#666666] text-sm tracking-wide">{item.subtitle}</p>
                    </div>
                    <div className="w-16 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent"></div>
                    <div className="space-y-4 text-[#666666] leading-relaxed">
                      <p className="text-sm">{item.description}</p>
                      <p className="text-sm">{item.details}</p>
                    </div>
                    <button className="inline-block px-6 py-2 bg-gradient-to-r from-[#5A7A5E] to-[#3B5A3E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#333333] hover:to-[#1A1A1A] transition-all duration-300 shadow-md hover:shadow-xl">
                      LEARN MORE
                    </button>
                  </div>

                  {/* Right Images Column */}
                  <div className={`space-y-4 ${index % 2 === 1 ? "md:col-start-1" : "md:col-start-3"}`}>
                    <div className="overflow-hidden rounded-2xl aspect-video cursor-pointer transition-transform duration-300 hover:scale-105">
                      <div className="relative w-full h-full bg-gradient-to-br from-[#5A7A5E]/30 to-[#F5F1E8]/30 border-2 border-gradient-to-br from-[#5A7A5E]/50 to-[#F5F1E8]/50 shadow-md">
                        <img
                          src={item.images[3] || "/placeholder.svg"}
                          alt={`${item.name} detail`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {item.images.slice(4).map((img, i) => (
                        <div key={i}>
                          <div className="overflow-hidden rounded-2xl aspect-square cursor-pointer transition-transform duration-300 hover:scale-105">
                            <div className="relative w-full h-full bg-gradient-to-br from-[#5A7A5E]/30 to-[#F5F1E8]/30 border-2 border-gradient-to-br from-[#5A7A5E]/50 to-[#F5F1E8]/50 shadow-md">
                              <img
                                src={img || "/placeholder.svg"}
                                alt={`${item.name} ${i + 5}`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {index < 2 && (
                  <div className="mt-24 flex items-center justify-center">
                    <div className="w-1/4 h-px bg-gradient-to-r from-transparent via-[#5A7A5E]/30 to-transparent"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-[#5A7A5E]/30 flex items-center justify-center mx-4">
                      <div className="w-4 h-4 rounded-full bg-[#5A7A5E]/20"></div>
                    </div>
                    <div className="w-1/4 h-px bg-gradient-to-r from-[#5A7A5E]/30 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button className="inline-block px-10 py-4 bg-gradient-to-r from-[#5A7A5E] to-[#3B5A3E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#333333] hover:to-[#1A1A1A] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Explore More Collection
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}