"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom" // Added for redirects
import Navbar from "../components/Navbar"
import WalkingGirlImage from "../assets/images/hero1.jpg"
import AboutImage1 from "../assets/images/hero2.jpeg"
import PortfolioSection from "../components/PortfolioSection"
import Footer from "../components/Footer"
import event1 from "../assets/images/event1.jpg"
import event2 from "../assets/images/event2.jpg"
import event3 from "../assets/images/event3.jpg"
import event4 from "../assets/images/event4.jpg"
import event6 from "../assets/images/event6.jpg"
import event7 from "../assets/images/event7.jpg"
// New image imports for Gallery Section
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

const Home = () => {
  const heroRef = useRef(null)
  const { ref: customRef, inView: customInView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const { ref: eventsRef, inView: eventsInView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.2 })

  // State for Hero Section slider
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0)
  const heroImages = [WalkingGirlImage, AboutImage1]

  // Automatic image change effect for Hero Section
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000) // Change image every 3 seconds
    return () => clearInterval(heroInterval) // Cleanup on unmount
  }, [heroImages.length])

  // Preload hero images to prevent loading delays
  useEffect(() => {
    heroImages.forEach((image) => {
      const img = new Image()
      img.src = image
    })
  }, [])

  // Animation variants for Custom, Events, Contact, and About sections
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  }

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  }

  const headingVariants = {
    hidden: { opacity: 0, y: 50, rotate: 5 },
    visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 1.2, ease: "easeInOut" } },
  }

  // Animation variants for Hero Section image change (simple fade)
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="overflow-x-hidden" style={{ "--smooth-scroll": "true" }}>
      <Navbar heroRef={heroRef} />
      {/* Hero Section (Unchanged) */}
      <section
        ref={heroRef}
        className="h-[70vh] sm:h-[70vh] md:h-screen relative m-0 p-0 overflow-hidden"
        style={{
          backgroundColor: "#000000", // Black fallback to match overlay
          backgroundImage: `url(${heroImages[0]})`, // First image as fallback
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-5">
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={currentHeroIndex}
              src={heroImages[currentHeroIndex]}
              alt={`Hero Image ${currentHeroIndex + 1}`}
              className="w-full h-full object-cover object-center"
              style={{ objectPosition: "center 20%" }}
              variants={fadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              onError={() => console.log(`Failed to load image ${heroImages[currentHeroIndex]}`)}
            />
          </AnimatePresence>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
        <div className="absolute inset-0 flex items-center sm:items-center justify-center z-20"></div>
      </section>
      <div className="border-t-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>

      <section ref={aboutRef} className="py-20 bg-[#F5F1E8] min-h-auto relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 text-sm sm:text-base text-[#666666]">
              <div className="flex items-center gap-2">
                <span className="text-lg">🌿</span>
                <span>Sustainable</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-[#999999] rounded-full"></div>
              <div className="flex items-center gap-2">
                <span>Handmade</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-[#999999] rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="text-lg">💚</span>
                <span>Comfortable</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333] mb-4 leading-tight">
              Bringing Slow Fashion to your everyday
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333] mb-8 leading-tight">
              journeys, made with love
            </h2>

            <a
              href="#"
              className="inline-block text-[#666666] font-semibold border-b-2 border-[#666666] hover:border-[#333333] hover:text-[#333333] transition-colors text-sm sm:text-base"
            >
              Read Our Story
            </a>
          </motion.div>

          {/* 4 Feature Cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            {[
              {
                title: "Eco-Friendly",
                icon: "🌱",
              },
              {
                title: "Zero Waste",
                icon: "♻️",
              },
              {
                title: "Plastic and Carbon Neutral",
                icon: "🌿",
              },
              {
                title: "Quality Guarantee",
                icon: "⭐",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#6B8E6F] rounded-3xl p-8 sm:p-10 flex flex-col items-center justify-center text-center transform hover:-translate-y-2 transition-transform duration-300 shadow-lg"
                variants={imageVariants}
              >
                <div className="text-5xl sm:text-6xl mb-6 text-[#C9B89A]">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#C9B89A]">{feature.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <div className="border-t-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>

      <PortfolioSection />
      <div className="border-t-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>

      {/* Gallery Section (Updated with new images and clickable redirects) */}
      <section ref={customRef} className="py-24 bg-[#F5F1E8] min-h-[80vh] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?luxury')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A7A5E]/10 to-[#F5F1E8]/20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-24">
            {[
              {
                id: 1,
                name: "Jodha Bai",
                subtitle: "1 October 1542",
                description:
                  "Their union symbolized religious tolerance. She was called Queen Mother during Akbar's and her son's reign.",
                details: "Jodha Bai was Akbar's first and last love, and the longest-serving Hindu Mughal Empress.",
                images: [jodhabai1, jodhabai2, jodhabaimain, jodhabaidetail, jodhabai5],
              },
              {
                id: 2,
                name: "Rani Padmavati",
                subtitle: "17 September 1303",
                description: "Rani Padmavati, or Padmini, was the legendary queen of Mewar, known for her beauty.",
                details:
                  "She chose jauhar over dishonor when Alauddin Khilji attacked Chittorgarh, symbolizing Rajput pride forever.",
                images: [ranipadmavati1, ranipadmavati2, ranipadmavatimain, ranipadmavatidetail, ranipadmavati5],
              },
              {
                id: 3,
                name: "Rani Lakshmibai",
                subtitle: "19 November 1828",
                description:
                  "Rani Lakshmibai, born Manikarnika in 1828, learned horse riding, sword fighting, and archery young.",
                details: "She led the 1857 revolt bravely, carrying her son and sword, dying fighting the British.",
                images: [ranilaxmi1, ranilaxmi2, ranilaxmimain, ranilaxmidetail],
              },
            ].map((item, index) => (
              <div key={item.id} className="gallery-item">
                <div
                  className={`grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Images Column (Left) */}
                  <div className={`space-y-4 ${index % 2 === 1 ? "md:col-start-3" : ""}`}>
                    <div className="grid grid-cols-2 gap-4">
                      {item.images.slice(0, 2).map((img, i) => (
                        <Link to="/collection" key={i}>
                          <div className="overflow-hidden rounded-xl aspect-square cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="relative w-full h-full bg-gradient-to-br from-[#5A7A5E]/20 to-[#F5F1E8]/20 border border-[#5A7A5E]/20 shadow-lg">
                              <img
                                src={img || "/placeholder.svg"}
                                alt={`${item.name} ${i + 1}`}
                                className="w-full h-full object-cover"
                                onError={() => console.log(`Failed to load image: ${item.name} ${i + 1}`)}
                              />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <Link to="/collection">
                      <div className="overflow-hidden rounded-xl aspect-video cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="relative w-full h-full bg-gradient-to-br from-[#5A7A5E]/20 to-[#F5F1E8]/20 border border-[#5A7A5E]/20 shadow-lg">
                          <img
                            src={item.images[2] || "/placeholder.svg"}
                            alt={`${item.name} main`}
                            className="w-full h-full object-cover"
                            onError={() => console.log(`Failed to load image: ${item.name} main`)}
                          />
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Content Column */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "md:col-start-1 md:col-end-3" : "md:col-start-2"}`}>
                    <div className="space-y-2">
                      <p className="text-[#5A7A5E] text-sm tracking-widest font-light">ROYAL HISTORY</p>
                      <h3 className="text-4xl sm:text-5xl font-light text-[#333333] font-dancing-script">
                        {item.name}
                      </h3>
                      <p className="text-[#666666] text-sm tracking-wide">{item.subtitle}</p>
                    </div>
                    <div className="w-12 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent"></div>
                    <div className="space-y-4 text-[#666666] leading-relaxed">
                      <p className="text-sm">{item.description}</p>
                      <p className="text-sm">{item.details}</p>
                    </div>
                    <a
                      href="#"
                      className="inline-block px-6 py-2 bg-[#5A7A5E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-[#333333] hover:text-white transition-all shadow-md hover:shadow-lg"
                    >
                      LEARN MORE
                    </a>
                  </div>

                  {/* Right Images Column */}
                  <div className={`space-y-4 ${index % 2 === 1 ? "md:col-start-1" : "md:col-start-3"}`}>
                    <Link to="/collection">
                      <div className="overflow-hidden rounded-xl aspect-video cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="relative w-full h-full bg-gradient-to-br from-[#5A7A5E]/20 to-[#F5F1E8]/20 border border-[#5A7A5E]/20 shadow-lg">
                          <img
                            src={item.images[3] || "/placeholder.svg"}
                            alt={`${item.name} detail`}
                            className="w-full h-full object-cover"
                            onError={() => console.log(`Failed to load image: ${item.name} detail`)}
                          />
                        </div>
                      </div>
                    </Link>
                    <div className="grid grid-cols-2 gap-4">
                      {item.images.slice(4).map((img, i) => (
                        <Link to="/collection" key={i}>
                          <div className="overflow-hidden rounded-xl aspect-square cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="relative w-full h-full bg-gradient-to-br from-[#5A7A5E]/20 to-[#F5F1E8]/20 border border-[#5A7A5E]/20 shadow-lg">
                              <img
                                src={img || "/placeholder.svg"}
                                alt={`${item.name} ${i + 5}`}
                                className="w-full h-full object-cover"
                                onError={() => console.log(`Failed to load image: ${item.name} ${i + 5}`)}
                              />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                {index < 2 && (
                  <div className="mt-24 h-px bg-gradient-to-r from-transparent via-[#5A7A5E]/30 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/collection"
              className="inline-block px-8 py-3 bg-[#5A7A5E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-[#333333] hover:text-white transition-all shadow-md hover:shadow-lg"
            >
              Explore More Collection
            </Link>
          </div>
        </div>
        {customRef && customRef.current && <div>{console.log("Gallery section in view")}</div>}
      </section>
      <div className="border-t-2 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]"></div>

      {/* Events Section (REDESIGNED) */}
      <section ref={eventsRef} className="py-24 bg-[#F5F1E8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Text */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-semibold text-center mb-16">
            <span className="font-dancing-script text-[#222] tracking-wide">INKOWO</span>{" "}
            <span className="font-sans font-bold text-[#555]">Showcase</span>
        </h2>

        {/* Testimonials Section */}
        <div className="mb-24 py-16 bg-gradient-to-r from-[#F5F1E8] via-[#8A9A85]/20 to-[#8A9A85] rounded-2xl px-8 sm:px-12">
          <div className="flex justify-center mb-8">
            <span className="text-6xl text-[#8A9A85]">"</span>
          </div>
          <p className="text-center text-lg sm:text-xl md:text-2xl text-[#333333] font-light leading-relaxed mb-8 max-w-4xl mx-auto">
            INKOWO transformed our vision into reality. Their attention to detail and commitment to sustainable
            fashion made our event truly unforgettable. Every piece told our story.
          </p>
          <div className="flex justify-center mb-4">
            <span className="text-6xl text-[#8A9A85]">"</span>
          </div>
          <p className="text-center text-sm sm:text-base text-[#666666] font-light tracking-widest">JANE & MICHAEL</p>
        </div>

        {/* Events Grid with Numbered Sections */}
        <div className="space-y-20">
          {[
            {
              id: 1,
              number: "01",
              title: "Fashion Week 2025",
              subtitle: "October 15, 2025",
              description:
                "Experience the pinnacle of sustainable fashion at our flagship Fashion Week showcase. Featuring exclusive collections and live demonstrations of our eco-conscious design process.",
              image: event1,
              imagePosition: "left",
            },
            {
              id: 2,
              number: "02",
              title: "Summer Collection Launch",
              subtitle: "June 10, 2025",
              description:
                "Celebrate the season with our vibrant Summer Collection. Discover pieces crafted with organic materials and innovative sustainable techniques that define modern elegance.",
              image: event2,
              imagePosition: "right",
            },
            {
              id: 3,
              number: "03",
              title: "Winter Gala 2025",
              subtitle: "December 20, 2025",
              description:
                "Join us for an enchanting evening celebrating luxury and sustainability. Our Winter Gala brings together fashion enthusiasts and conscious consumers for an unforgettable night.",
              image: event3,
              imagePosition: "left",
            },
          ].map((event, index) => (
            <div key={event.id} className="gallery-item">
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  event.imagePosition === "right" ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Image Column */}
                <div className={event.imagePosition === "right" ? "md:col-start-2" : ""}>
                  <div className="relative overflow-hidden rounded-xl aspect-square shadow-lg border border-[#8A9A85]/20">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={event.imagePosition === "right" ? "md:col-start-1" : ""}>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <p className="text-7xl sm:text-8xl font-light text-[#8A9A85]/40">{event.number}</p>
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#333333] font-dancing-script">
                        {event.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#8A9A85] tracking-widest font-light">
                        {event.subtitle}
                      </p>
                    </div>

                    <div className="w-12 h-px bg-gradient-to-r from-[#8A9A85] to-transparent"></div>

                    <p className="text-base sm:text-lg text-[#666666] leading-relaxed font-light">
                      {event.description}
                    </p>

                    {/* ✅ Link fixed: always goes to /events */}
                    <Link
                      to="/events"
                      className="inline-block px-8 py-3 bg-[#8A9A85] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-[#333333] transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      EXPLORE EVENT
                    </Link>
                  </div>
                </div>
              </div>

              {index < 2 && (
                <div className="mt-20 h-px bg-gradient-to-r from-transparent via-[#8A9A85]/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Events Grid */}
        <div className="mt-24 pt-20 border-t border-[#8A9A85]/20">
          <h3 className="text-2xl sm:text-3xl font-light text-[#333333] text-center mb-12 font-dancing-script">
            Upcoming Events
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { id: 4, title: "Spring Showcase", date: "Mar 05, 2025", image: event4 },
              { id: 5, title: "Eco-Fashion Day", date: "Apr 12, 2025", image: event6 },
              { id: 6, title: "Mid-Year Couture", date: "Jul 18, 2025", image: event7 },
            ].map((event) => (
              <div key={event.id} className="group">
                <div className="relative overflow-hidden rounded-xl aspect-square mb-4 shadow-md border border-[#8A9A85]/20">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 to-transparent"></div>
                </div>
                <h4 className="text-lg sm:text-xl font-light text-[#333333] font-dancing-script mb-2">
                  {event.title}
                </h4>
                <p className="text-sm text-[#8A9A85] font-light tracking-wide mb-3">{event.date}</p>

                {/* ✅ Link fixed: always goes to /events */}
                <Link
                  to="/events"
                  className="text-sm font-semibold text-[#8A9A85] border-b-2 border-[#8A9A85]/50 hover:border-[#8A9A85] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Curved shadow divider */}
    <div className="border-t-2 border-white/20 shadow-[0_0_25px_rgba(0,0,0,0.5)] rounded-t-[50%]"></div>

      {/* Enhanced Contact Section */}
      <section
        ref={contactRef}
        className="py-24 bg-gradient-to-b from-[#F5F1E8] to-[#8A9A85]/20 min-h-[80vh] relative overflow-hidden"
      >
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?fabric')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A7A5E]/10 to-[#F5F1E8]/10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-light text-[#333333] text-center mb-4 font-dancing-script"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            Connect with INKOWO
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#666666] text-center mb-16 leading-relaxed font-light max-w-3xl mx-auto"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            Join our exclusive community as a private client or explore press and business opportunities with us.
          </motion.p>

          {/* Forms Container */}
          <motion.div
            className="flex flex-col md:flex-row gap-12 max-w-6xl mx-auto"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut", staggerChildren: 0.2 } },
            }}
          >
            {/* Private Client Application */}
            <motion.div
              className="flex-1 bg-[#F5F1E8]/95 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-xl border border-[#5A7A5E]/20 relative overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C9B89A] to-[#5A7A5E]"></div>
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-light text-[#333333] mb-8 text-center font-dancing-script"
                variants={textVariants}
              >
                Private Client Application
              </motion.h3>
              <form className="space-y-8">
                <motion.div variants={textVariants}>
                  <label
                    htmlFor="client-name"
                    className="block text-[#333333] font-semibold text-sm sm:text-base mb-3"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    className="w-full p-4 bg-transparent border-b-2 border-[#5A7A5E] focus:border-[#C9B89A] focus:outline-none transition-colors text-[#333333] text-sm sm:text-base rounded-sm placeholder-[#8A9A85]/60"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div variants={textVariants}>
                  <label
                    htmlFor="client-intent"
                    className="block text-[#333333] font-semibold text-sm sm:text-base mb-3"
                  >
                    Intent
                  </label>
                  <textarea
                    id="client-intent"
                    className="w-full p-4 bg-transparent border-b-2 border-[#5A7A5E] focus:border-[#C9B89A] focus:outline-none transition-colors text-[#333333] text-sm sm:text-base rounded-sm placeholder-[#8A9A85]/60"
                    placeholder="Describe your interest in becoming a private client"
                    rows="4"
                  ></textarea>
                </motion.div>
                <motion.div variants={textVariants}>
                  <label
                    htmlFor="client-moodboard"
                    className="block text-[#333333] font-semibold text-sm sm:text-base mb-3"
                  >
                    Upload Moodboard
                  </label>
                  <input
                    type="file"
                    id="client-moodboard"
                    className="w-full p-4 text-[#333333] text-sm sm:text-base file:mr-4 file:py-2 file:px-6 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#5A7A5E] file:text-[#F5F1E8] hover:file:bg-[#C9B89A] hover:file:text-[#333333] transition-colors"
                    accept="image/*"
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#5A7A5E] text-[#F5F1E8] py-3 rounded-full hover:bg-[#C9B89A] hover:text-[#333333] transition-all duration-300 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
                  variants={textVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  Apply as Private Client
                </motion.button>
              </form>
              <motion.p
                className="text-center text-[#666666] text-sm sm:text-base mt-8 font-light italic"
                variants={textVariants}
              >
                Step into the world of INKOWO’s sustainable couture.
              </motion.p>
            </motion.div>

            {/* Press & Business Inquiries */}
            <motion.div
              className="flex-1 bg-[#F5F1E8]/95 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-xl border border-[#5A7A5E]/20 relative overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
              }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#C9B89A] to-[#5A7A5E]"></div>
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-light text-[#333333] mb-8 text-center font-dancing-script"
                variants={textVariants}
              >
                Press & Business Inquiries
              </motion.h3>
              <form className="space-y-8">
                <motion.div variants={textVariants}>
                  <label
                    htmlFor="press-name"
                    className="block text-[#333333] font-semibold text-sm sm:text-base mb-3"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="press-name"
                    className="w-full p-4 bg-transparent border-b-2 border-[#5A7A5E] focus:border-[#C9B89A] focus:outline-none transition-colors text-[#333333] text-sm sm:text-base rounded-sm placeholder-[#8A9A85]/60"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div variants={textVariants}>
                  <label
                    htmlFor="press-email"
                    className="block text-[#333333] font-semibold text-sm sm:text-base mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="press-email"
                    className="w-full p-4 bg-transparent border-b-2 border-[#5A7A5E] focus:border-[#C9B89A] focus:outline-none transition-colors text-[#333333] text-sm sm:text-base rounded-sm placeholder-[#8A9A85]/60"
                    placeholder="Your Email"
                  />
                </motion.div>
                <motion.div variants={textVariants}>
                  <label
                    htmlFor="press-message"
                    className="block text-[#333333] font-semibold text-sm sm:text-base mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="press-message"
                    className="w-full p-4 bg-transparent border-b-2 border-[#5A7A5E] focus:border-[#C9B89A] focus:outline-none transition-colors text-[#333333] text-sm sm:text-base rounded-sm placeholder-[#8A9A85]/60"
                    placeholder="Your inquiry or message"
                    rows="4"
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#5A7A5E] text-[#F5F1E8] py-3 rounded-full hover:bg-[#C9B89A] hover:text-[#333333] transition-all duration-300 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
                  variants={textVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  Submit Inquiry
                </motion.button>
              </form>
              <motion.p
                className="text-center text-[#666666] text-sm sm:text-base mt-8 font-light italic"
                variants={textVariants}
              >
                Collaborate with INKOWO for extraordinary partnerships.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
        {contactInView && <div>{console.log("Contact section in view")}</div>}
      </section>
      <div className="border-t-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
      <Footer />
    </div>
  )
}

export default Home