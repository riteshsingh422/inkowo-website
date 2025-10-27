"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom" // Added for redirects
import Navbar from "../components/Navbar"
import WalkingGirlImage from "../assets/images/hero1.jpg"
import AboutImage1 from "../assets/images/hero2.jpeg"
import PortfolioSection from "../components/PortfolioSection"
import Footer from "../components/Footer";
import DressImage from "../assets/images/dress.png"
import Dress1Image from "../assets/images/dress1.png"
import Video1 from "../assets/images/video1.mp4"
import Video2 from "../assets/images/video2.mp4"
import EventImg from "../assets/images/event.png"
import event1 from "../assets/images/event1.jpg"
import event2 from "../assets/images/event2.jpg"
import event3 from "../assets/images/event3.jpg"
import event4 from "../assets/images/event4.jpg"
import event5 from "../assets/images/event5.jpg"
import event6 from "../assets/images/event6.jpg"
import event7 from "../assets/images/event7.jpg"
import event8 from "../assets/images/event8.jpg"
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
                backgroundPosition: "center 20%"
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
            <section
        ref={customRef}
        className="py-24 bg-[#F5F1E8] min-h-[80vh] relative overflow-hidden"
      >
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
                description: "Their union symbolized religious tolerance. She was called Queen Mother during Akbar's and her son's reign.",
                details: "Jodha Bai was Akbar's first and last love, and the longest-serving Hindu Mughal Empress.",
                images: [
                  jodhabai1,
                  jodhabai2,
                  jodhabaimain,
                  jodhabaidetail,
                  jodhabai5,
                ],
              },
              {
                id: 2,
                name: "Rani Padmavati",
                subtitle: "17 September 1303",
                description: "Rani Padmavati, or Padmini, was the legendary queen of Mewar, known for her beauty.",
                details: "She chose jauhar over dishonor when Alauddin Khilji attacked Chittorgarh, symbolizing Rajput pride forever.",
                images: [
                  ranipadmavati1,
                  ranipadmavati2,
                  ranipadmavatimain,
                  ranipadmavatidetail,
                  ranipadmavati5,
                ],
              },
              {
                id: 3,
                name: "Rani Lakshmibai",
                subtitle: "19 November 1828",
                description: "Rani Lakshmibai, born Manikarnika in 1828, learned horse riding, sword fighting, and archery young.",
                details: "She led the 1857 revolt bravely, carrying her son and sword, dying fighting the British.",
                images: [
                  ranilaxmi1,
                  ranilaxmi2,
                  ranilaxmimain,
                  ranilaxmidetail,
                ],
              },
            ].map((item, index) => (
              <div key={item.id} className="gallery-item">
                <div
                  className={`grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-dense" : ""
                  }`}
                >
                  {/* Images Column (Left) */}
                  <div
                    className={`space-y-4 ${index % 2 === 1 ? "md:col-start-3" : ""}`}
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {item.images.slice(0, 2).map((img, i) => (
                        <Link to="/collection" key={i}>
                          <div className="overflow-hidden rounded-xl aspect-square cursor-pointer hover:opacity-80 transition-opacity">
                            <div className="relative w-full h-full bg-gradient-to-br from-[#5A7A5E]/20 to-[#F5F1E8]/20 border border-[#5A7A5E]/20 shadow-lg">
                              <img
                                src={img}
                                alt={`${item.name} ${i + 1}`}
                                className="w-full h-full object-cover"
                                onError={() =>
                                  console.log(`Failed to load image: ${item.name} ${i + 1}`)
                                }
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
                            src={item.images[2]}
                            alt={`${item.name} main`}
                            className="w-full h-full object-cover"
                            onError={() =>
                              console.log(`Failed to load image: ${item.name} main`)
                            }
                          />
                        </div>
                      </div>
                    </Link>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`space-y-6 ${
                      index % 2 === 1 ? "md:col-start-1 md:col-end-3" : "md:col-start-2"
                    }`}
                  >
                    <div className="space-y-2">
                      <p className="text-[#5A7A5E] text-sm tracking-widest font-light">
                        ROYAL HISTORY
                      </p>
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
                  <div
                    className={`space-y-4 ${index % 2 === 1 ? "md:col-start-1" : "md:col-start-3"}`}
                  >
                    <Link to="/collection">
                      <div className="overflow-hidden rounded-xl aspect-video cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="relative w-full h-full bg-gradient-to-br from-[#5A7A5E]/20 to-[#F5F1E8]/20 border border-[#5A7A5E]/20 shadow-lg">
                          <img
                            src={item.images[3]}
                            alt={`${item.name} detail`}
                            className="w-full h-full object-cover"
                            onError={() =>
                              console.log(`Failed to load image: ${item.name} detail`)
                            }
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
                                src={img}
                                alt={`${item.name} ${i + 5}`}
                                className="w-full h-full object-cover"
                                onError={() =>
                                  console.log(`Failed to load image: ${item.name} ${i + 5}`)
                                }
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

      {/* Custom Experience Section (Unchanged) */}
      <section
        ref={customRef}
        className="py-20 bg-gradient-to-b from-[#A8B5A2] to-[#8A9A85] min-h-[80vh] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?luxury')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-[#A8B5A2]/20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#000000] text-center mb-4 font-dancing-script [text-shadow:_0_2px_4px_rgba(0,0,0,0.2)]"
            initial="hidden"
            animate={customInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            Your Bespoke Journey with INKOWO
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#000000] text-center mb-12 leading-relaxed font-light max-w-3xl mx-auto"
            initial="hidden"
            animate={customInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            Embark on a collaborative creation process where your vision is transformed into wearable art, crafted with
            unparalleled elegance and precision.
          </motion.p>

          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-10 text-center font-dancing-script [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">
              The Art of Co-Creation
            </h3>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#FFD700] opacity-20 hidden md:block"></div>
              {[
                {
                  step: 1,
                  title: "Discovery Consultation",
                  description:
                    "Begin with a one-on-one consultation to share your inspirations, style, and dreams with our expert designers.",
                  images: [
                    "https://media.istockphoto.com/id/1312051741/photo/shot-of-a-young-women-as-a-fashion-designer-stock-photo.jpg?s=612x612&w=0&k=20&c=CwNvWSSfLim0yYIBhCchWLHiOMDZ6qB7t9oIpebzKS0=",
                    "https://media.istockphoto.com/id/599713242/photo/beautiful-female-designer-at-design-studio.jpg?s=612x612&w=0&k=20&c=RqMBwinnyniYtSx0AtYsBwRg5bNS1-vosLLw7sy3ZOo=",
                    "https://d2line.com/thatlook/wp-content/uploads/sites/4/2022/02/cover-3-800x600.png",
                  ],
                },
                {
                  step: 2,
                  title: "Moodboard & Sketch",
                  description:
                    "Collaborate to create a curated moodboard and detailed sketches, bringing your vision to life with artistic precision.",
                  image: DressImage,
                },
                {
                  step: 3,
                  title: "Crafting Masterpiece",
                  description:
                    "Our artisans handcraft your piece using the finest materials, ensuring every detail reflects your unique story.",
                  image: Dress1Image,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  initial="hidden"
                  animate={customInView ? "visible" : "hidden"}
                >
                  <motion.div className="w-full md:w-1/2 px-4 mb-6 md:mb-0" variants={imageVariants}>
                    <div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl hover:shadow-xl transition-shadow duration-300 border border-[#FFD700]/20 transform hover:-translate-y-2">
                      <div className="absolute -top-4 left-4 bg-[#FFD700] text-[#000000] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-dancing-script font-bold text-[#000000] mb-3 [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">
                        {step.title}
                      </h4>
                      <p className="text-sm sm:text-base text-[#000000] leading-relaxed font-light">
                        {step.description}
                      </p>
                      {step.images && (
                        <motion.div className="mt-6 flex flex-row gap-4 justify-center" variants={imageVariants}>
                          {step.images.map((img, imgIndex) => (
                            <motion.img
                              key={imgIndex}
                              src={img}
                              alt={`Client Inspiration ${imgIndex + 1}`}
                              className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg shadow-md border border-[#FFD700]/20"
                              whileHover={{ scale: 1.1, rotate: 2 }}
                              transition={{ duration: 0.3 }}
                            />
                          ))}
                        </motion.div>
                      )}
                      {step.image && (
                        <motion.img
                          src={step.image}
                          alt={step.title}
                          className="mt-6 w-full max-w-xs mx-auto object-cover rounded-lg shadow-md border border-[#FFD700]/20"
                          variants={imageVariants}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </div>
                  </motion.div>
                  <div className="hidden md:block w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-16 bg-white/95 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl max-w-3xl mx-auto border border-[#FFD700]/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2]"></div>
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-8 text-center font-dancing-script [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]"
              initial="hidden"
              animate={customInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              Begin Your Creation
            </motion.h3>
            <form className="space-y-6">
              <motion.div variants={textVariants} initial="hidden" animate={customInView ? "visible" : "hidden"}>
                <label htmlFor="name" className="block text-[#000000] font-bold text-sm sm:text-base mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000] text-sm sm:text-base rounded-sm"
                  placeholder="Your Name"
                />
              </motion.div>
              <motion.div variants={textVariants} initial="hidden" animate={customInView ? "visible" : "hidden"}>
                <label htmlFor="style" className="block text-[#000000] font-bold text-sm sm:text-base mb-2">
                  Style Preferences
                </label>
                <textarea
                  id="style"
                  className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000] text-sm sm:text-base rounded-sm"
                  placeholder="Describe your style (e.g., minimalist, bold, romantic)"
                  rows="4"
                ></textarea>
              </motion.div>
              <motion.div variants={textVariants} initial="hidden" animate={customInView ? "visible" : "hidden"}>
                <label htmlFor="moodboard" className="block text-[#000000] font-bold text-sm sm:text-base mb-2">
                  Upload Moodboard
                </label>
                <input
                  type="file"
                  id="moodboard"
                  className="w-full p-3 text-[#000000] text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#A8B5A2] file:text-[#000000] hover:file:bg-[#FFD700] transition-colors"
                  accept="image/*"
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-[#000000] text-white py-3 rounded-full hover:bg-[#FFD700] hover:text-[#000000] transition-all duration-300 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
                variants={textVariants}
                initial="hidden"
                animate={customInView ? "visible" : "hidden"}
                whileHover={{ scale: 1.05 }}
              >
                Submit Your Vision
              </motion.button>
            </form>
            <motion.p
              className="text-center text-[#000000] text-sm sm:text-base mt-6 font-light italic"
              variants={textVariants}
              initial="hidden"
              animate={customInView ? "visible" : "hidden"}
            >
              Powered by INKOWO's <span className="font-bold">Intelligent Design Engine</span> for personalized
              recommendations.
            </motion.p>
            <motion.div
              className="text-center mt-6"
              variants={textVariants}
              initial="hidden"
              animate={customInView ? "visible" : "hidden"}
            >
              <a
                href="#"
                className="inline-block bg-transparent border-2 border-[#FFD700] text-[#000000] py-2 px-6 rounded-lg hover:bg-[#FFD700] hover:text-[#000000] transition-all duration-300 text-sm sm:text-base"
              >
                Book a Consultation
              </a>
            </motion.div>
          </div>

          <div>
            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-10 text-center font-dancing-script [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]"
              initial="hidden"
              animate={customInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              Stories from Our Clients
            </motion.h3>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
              initial="hidden"
              animate={customInView ? "visible" : "hidden"}
            >
              {[
                {
                  name: "Emma S.",
                  quote: "INKOWO turned my vision into a masterpiece that felt like an extension of my soul.",
                  video: Video1,
                },
                {
                  name: "Sophia L.",
                  quote: "The collaborative process was seamless, and the result was beyond my wildest dreams.",
                  video: Video2,
                },
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl hover:shadow-xl transition-shadow duration-300 border border-[#FFD700]/20 transform hover:-translate-y-2"
                  variants={textVariants}
                >
                  <motion.p
                    className="text-sm sm:text-base text-[#000000] italic mb-4 font-light"
                    variants={textVariants}
                  >
                    "{testimonial.quote}"
                  </motion.p>
                  <motion.p
                    className="text-lg sm:text-xl font-bold text-[#000000] font-dancing-script"
                    variants={textVariants}
                  >
                    {testimonial.name}
                  </motion.p>
                  <motion.div
                    className="mt-6 h-40 sm:h-48 rounded-lg overflow-hidden border border-[#FFD700]/20"
                    variants={imageVariants}
                  >
                    {testimonial.video ? (
                      <motion.video
                        src={testimonial.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        variants={imageVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onError={() => console.log(`Failed to load video for ${testimonial.name}`)}
                      />
                    ) : (
                      <motion.img
                        src={testimonial.placeholder}
                        alt={`${testimonial.name}'s Story`}
                        className="w-full h-full object-cover rounded-lg shadow-md"
                        variants={imageVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onError={() => console.log(`Failed to load placeholder image for ${testimonial.name}`)}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        {customInView && <div>{console.log("Custom Experience section in view")}</div>}
      </section>
      <div className="border-t-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>

      {/* Events Section (Unchanged) */}
      <section ref={eventsRef} className="py-20 bg-gradient-to-b from-[#8A9A85] to-[#A8B5A2] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-[#A8B5A2]/20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#000000] text-center mb-4 font-dancing-script [text-shadow:_0_2px_4px_rgba(0,0,0,0.2)]">
            INKOWO Events
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#000000] text-center mb-12 leading-relaxed font-light max-w-3xl mx-auto">
            Relive the magic of our past events and join us for exclusive upcoming fashion drops.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: "Fashion Week 2025", date: "Oct 15, 2025", image: event1 },
              { title: "Summer Collection Launch", date: "Jun 10, 2025", image: event2 },
              { title: "Winter Gala 2025", date: "Dec 20, 2025", image: event3 },
              { title: "Spring Showcase", date: "Mar 05, 2025", image: event4 },
              { isImage: true },
              { title: "Holiday Extravaganza", date: "Dec 01, 2025", image: event5 },
              { title: "Eco-Fashion Day", date: "Apr 12, 2025", image: event6 },
              { title: "Mid-Year Couture", date: "Jul 18, 2025", image: event7 },
              { title: "New Year Preview", date: "Jan 10, 2026", image: event8 },
            ].map((event, index) =>
              event && !event.isImage ? (
                <div
                  key={index}
                  className="relative bg-white/95 rounded-xl overflow-hidden border border-[#FFD700]/20 transform hover:-translate-y-2 transition-transform duration-200"
                  style={{ zIndex: 10 + index }}
                >
                  <div className="relative">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-64 sm:h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-[#FFD700] text-[#000000] text-xs font-semibold rounded-full w-12 h-12 flex items-center justify-center shadow">
                      New
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-dancing-script font-bold text-[#FFD700] mb-2 [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[#000000] font-light">{event.date}</p>
                    <a
                      href="#"
                      className="inline-block mt-4 text-sm font-semibold text-[#FFD700] border-b-2 border-[#FFD700]/50 hover:border-[#FFD700] transition-colors"
                    >
                      Explore Event
                    </a>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2]"></div>
                </div>
              ) : event?.isImage ? (
                <div key={index} className="relative">
                  <img
                    src={EventImg || "/placeholder.svg"}
                    alt="Event Placeholder"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 sm:h-72 object-cover mt-[70px]"
                  />
                </div>
              ) : (
                <div key={index} className="relative"></div>
              ),
            )}
          </div>
        </div>
        <div className="mt-[10px] border-t-2 border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
      </section>

      {/* Contact / Apply for Access Section (Unchanged) */}
      <section
        ref={contactRef}
        className="py-20 bg-gradient-to-b from-[#A8B5A2] to-[#8A9A85] min-h-[80vh] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?texture')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#000000] text-center mb-4 font-dancing-script"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            Connect with INKOWO
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#000000] text-center mb-12 leading-relaxed font-light max-w-3xl mx-auto"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            Become a private client or reach out for press and business opportunities.
          </motion.p>
          <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
            <motion.div
              className="flex-1 bg-white/95 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl border border-[#000000]/10 relative overflow-hidden"
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2]"></div>
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-8 text-center font-dancing-script"
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                variants={textVariants}
              >
                Private Client Application
              </motion.h3>
              <form className="space-y-6">
                <motion.div variants={textVariants} initial="hidden" animate={contactInView ? "visible" : "hidden"}>
                  <label htmlFor="client-name" className="block text-[#000000] font-bold text-sm sm:text-base mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000] text-sm sm:text-base rounded-sm"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div variants={textVariants} initial="hidden" animate={contactInView ? "visible" : "hidden"}>
                  <label htmlFor="client-intent" className="block text-[#000000] font-bold text-sm sm:text-base mb-2">
                    Intent
                  </label>
                  <textarea
                    id="client-intent"
                    className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000] text-sm sm:text-base rounded-sm"
                    placeholder="Describe your interest in becoming a private client"
                    rows="4"
                  ></textarea>
                </motion.div>
                <motion.div variants={textVariants} initial="hidden" animate={contactInView ? "visible" : "hidden"}>
                  <label
                    htmlFor="client-moodboard"
                    className="block text-[#000000] font-bold text-sm sm:text-base mb-2"
                  >
                    Upload Moodboard
                  </label>
                  <input
                    type="file"
                    id="client-moodboard"
                    className="w-full p-3 text-[#000000] text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#A8B5A2] file:text-[#000000] hover:file:bg-[#FFD700] transition-colors"
                    accept="image/*"
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#000000] text-white py-3 rounded-full hover:bg-[#FFD700] hover:text-[#000000] transition-all duration-300 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
                  variants={textVariants}
                  initial="hidden"
                  animate={contactInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05 }}
                >
                  Apply as Private Client
                </motion.button>
              </form>
              <motion.p
                className="text-center text-[#000000] text-sm sm:text-base mt-6 font-light italic"
                variants={textVariants}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
              >
                Join the exclusive world of INKOWO couture.
              </motion.p>
            </motion.div>
            <motion.div
              className="flex-1 bg-white/95 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl border border-[#000000]/10 relative overflow-hidden"
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2]"></div>
              <motion.h3
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-8 text-center font-dancing-script"
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                variants={textVariants}
              >
                Press & Business Inquiries
              </motion.h3>
              <form className="space-y-6">
                <motion.div variants={textVariants} initial="hidden" animate={contactInView ? "visible" : "hidden"}>
                  <label htmlFor="press-name" className="block text-[#000000] font-bold text-sm sm:text-base mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="press-name"
                    className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000] text-sm sm:text-base rounded-sm"
                    placeholder="Your Name"
                  />
                </motion.div>
                <motion.div variants={textVariants} initial="hidden" animate={contactInView ? "visible" : "hidden"}>
                  <label htmlFor="press-email" className="block text-[#000000] font-bold text-sm sm:text-base mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="press-email"
                    className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000] text-sm sm:text-base rounded-sm"
                    placeholder="Your Email"
                  />
                </motion.div>
                <motion.div variants={textVariants} initial="hidden" animate={contactInView ? "visible" : "hidden"}>
                  <label htmlFor="press-message" className="block text-[#000000] font-bold text-sm sm:text-base mb-2">
                    Message
                  </label>
                  <textarea
                    id="press-message"
                    className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000] text-sm sm:text-base rounded-sm"
                    placeholder="Your inquiry or message"
                    rows="4"
                  ></textarea>
                </motion.div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#000000] text-white py-3 rounded-full hover:bg-[#FFD700] hover:text-[#000000] transition-all duration-300 text-sm sm:text-base font-semibold shadow-md hover:shadow-lg"
                  variants={textVariants}
                  initial="hidden"
                  animate={contactInView ? "visible" : "hidden"}
                  whileHover={{ scale: 1.05 }}
                >
                  Submit Inquiry
                </motion.button>
              </form>
              <motion.p
                className="text-center text-[#000000] text-sm sm:text-base mt-6 font-light italic"
                variants={textVariants}
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
              >
                Partner with INKOWO for unparalleled opportunities.
              </motion.p>
            </motion.div>
          </div>
        </div>
        {contactInView && <div>{console.log("Contact section in view")}</div>}
      </section>
      <div className="border-t-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
      <Footer />
    </div>

  )
}

export default Home