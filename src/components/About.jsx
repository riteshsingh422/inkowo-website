"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Import your luxury images (use high-res fashion/cloth shots)
import founderImg from "../assets/images/jodhabai1.jpg";
import atelier1 from "../assets/images/jodhabai2.jpg";
import atelier2 from "../assets/images/jodhabai5.jpg";
import atelier3 from "../assets/images/jodhabaidetail.webp";
import heritage1 from "../assets/images/ranipadmavati2.jpg";
import heritage2 from "../assets/images/ranilaxmi1.jpg";
import valueCraft from "../assets/images/ranilaxmi2.jpg";
import valueHeritage from "../assets/images/ranilaxmimain.jpg";
import valueSustain from "../assets/images/ranipadmavati5.jpg";

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Timeline Data
  const timeline = [
    { year: "2018", title: "Founded in Jaipur", desc: "Inkovo was born from a vision to revive royal Indian couture with modern luxury." },
    { year: "2020", title: "First Runway Show", desc: "Debuted at Delhi Fashion Week with the 'Rani Padmavati' collection." },
    { year: "2022", title: "Global Recognition", desc: "Featured in Vogue India & worn by celebrities at Cannes." },
    { year: "2024", title: "Atelier Expansion", desc: "Opened flagship atelier in Mumbai with 40 master artisans." },
    { year: "2025", title: "Sustainability Pledge", desc: "Committed to 100% ethical sourcing and zero-waste embroidery." },
  ];

  // Core Values
  const values = [
    { title: "Craftsmanship", desc: "Hand-embroidered by master artisans using ancestral techniques.", img: valueCraft },
    { title: "Heritage", desc: "Inspired by the grandeur of Rajputana queens and Mughal courts.", img: valueHeritage },
    { title: "Sustainability", desc: "Ethically sourced silks, natural dyes, and eco-conscious packaging.", img: valueSustain },
  ];

  return (
    <main className="bg-[#F5F1E8] min-h-screen overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION - CINEMATIC */}
      <section className="relative py-32 bg-gradient-to-b from-[#F5F1E8] via-[#e8e0d3] to-[#F5F1E8] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?royal-palace')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#5A7A5E]/10 via-transparent to-[#F5F1E8]/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl font-light text-[#333333] leading-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Inkowo
            </h1>
            <p className="text-2xl sm:text-3xl text-[#5A7A5E] tracking-widest font-light">Royal Couture Reimagined</p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#5A7A5E] to-transparent mx-auto"></div>
            <p className="text-[#666666] text-lg max-w-3xl mx-auto leading-relaxed">
              Where the opulence of Indian royalty meets contemporary luxury. Every thread tells a story of legacy, artistry, and timeless elegance.
            </p>
          </div>

          {/* Floating Ornament */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <div className="w-96 h-96 rounded-full border-8 border-[#5A7A5E]/20"></div>
          </div>
        </div>
      </section>

      {/* BRAND STORY - TWO COLUMN */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <h2
                className="text-5xl lg:text-6xl font-light text-[#333333]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                A Legacy in Every Stitch
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent"></div>
              <p className="text-[#666666] text-lg leading-relaxed">
                Founded in the pink city of Jaipur, <strong>Inkovo</strong> draws inspiration from the resplendent courts of Rani Padmavati, Jodha Bai, and Rani Lakshmibai. We don’t just create garments — we preserve heritage.
              </p>
              <p className="text-[#666666] leading-relaxed">
                Each collection is a tribute to India’s royal past, reinterpreted through modern silhouettes, luxurious fabrics, and unparalleled handcraftsmanship.
              </p>
              <button className="inline-block px-8 py-3 bg-[#5A7A5E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-[#333333] transition-all shadow-md hover:shadow-lg">
                OUR JOURNEY
              </button>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={founderImg || "/placeholder.svg?height=600&width=800&text=Founder"}
                  alt="Inkovo Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img src={heritage1} alt="Heritage" className="w-full h-48 object-cover" />
                </div>
                <div className="overflow-hidden rounded-xl shadow-md">
                  <img src={heritage2} alt="Heritage" className="w-full h-48 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-[#eae2d5]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-light text-[#333333] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Journey
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-[#5A7A5E]/30 to-transparent"></div>
            <div className="space-y-16">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-center relative ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 border-[#5A7A5E] bg-[#F5F1E8] flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 rounded-full bg-[#5A7A5E]"></div>
                  </div>
                  <div className="w-5/12 bg-white p-6 rounded-2xl shadow-xl border border-[#5A7A5E]/10">
                    <p className="text-[#5A7A5E] text-sm font-semibold tracking-widest">{item.year}</p>
                    <h4 className="text-xl font-medium text-[#333333] mt-1">{item.title}</h4>
                    <p className="text-[#666666] text-sm mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-light text-[#333333] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Our Philosophy
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#5A7A5E]/10"
              >
                <div className="overflow-hidden">
                  <img
                    src={value.img || "/placeholder.svg"}
                    alt={value.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 text-center space-y-3">
                  <h3 className="text-2xl font-medium text-[#333333]">{value.title}</h3>
                  <p className="text-[#666666] text-sm leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATELIER & TEAM */}
      <section className="py-24 bg-[#eae2d5]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-5xl font-light text-[#333333] mb-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Inside the Atelier
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent mx-auto"></div>
            <p className="text-[#666666] max-w-2xl mx-auto mt-4">
              Meet the 40+ master artisans who bring every Inkovo piece to life with devotion and decades of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[atelier1, atelier2, atelier3].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={img}
                  alt={`Atelier ${i + 1}`}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="inline-block px-10 py-4 bg-gradient-to-r from-[#5A7A5E] to-[#3B5A3E] text-white text-sm tracking-widest font-semibold rounded-full hover:from-[#333333] hover:to-[#1A1A1A] transition-all shadow-lg hover:shadow-xl">
              Meet Our Artisans
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-5xl font-light text-[#333333] mb-6"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Wear the Legacy
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto mb-8">
            Step into a world where every garment is a masterpiece. Let Inkovo dress your story.
          </p>
          <div className="flex justify-center gap-6">
            <button className="px-8 py-3 border-2 border-[#5A7A5E] text-[#5A7A5E] text-sm tracking-widest font-semibold rounded-full hover:bg-[#5A7A5E] hover:text-white transition-all">
              BOOK A CONSULTATION
            </button>
            <button className="px-8 py-3 bg-[#5A7A5E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-[#333333] transition-all shadow-md">
              EXPLORE COLLECTIONS
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}