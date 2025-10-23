"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import WalkingGirlImage from "../assets/images/hero.jpg"
import AboutImage1 from "../assets/images/about1.png"
import AboutImage2 from "../assets/images/about2.png"
import AboutImage3 from "../assets/images/about3.png"
import PortfolioSection from "../components/PortfolioSection"
import DressImage from "../assets/images/dress.png"
import Dress1Image from "../assets/images/dress1.png"
import Video1 from "../assets/images/video1.mp4"
import Video2 from "../assets/images/video2.mp4"
import FooterImg from "../assets/images/footer.png"
import EventImg from "../assets/images/event.png";
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";
import event4 from "../assets/images/event4.jpg";
import event5 from "../assets/images/event5.jpg";
import event6 from "../assets/images/event6.jpg";
import event7 from "../assets/images/event7.jpg";
import event8 from "../assets/images/event8.jpg";


const Home = () => {
  const heroRef = useRef(null)
  const { ref: customRef, inView: customInView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const { ref: eventsRef, inView: eventsInView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: false, threshold: 0.2 })
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: false, threshold: 0.2 })

  // State for slideshow on left side
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [AboutImage1, AboutImage2, AboutImage3]

  // Automatic slideshow effect
  useEffect(() => {
    console.log("Home component mounted")
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds
    return () => clearInterval(interval) // Cleanup on unmount
  }, [images.length])

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

  return (
    <div className="overflow-x-hidden" style={{ "--smooth-scroll": "true" }}>
      {/* Hero Section */}
      <section ref={heroRef} className="h-[70vh] sm:h-[70vh] md:h-screen bg-cover bg-center relative m-0 p-0 overflow-hidden">
        <img
          src={WalkingGirlImage}
          alt="Walking Girl"
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
          style={{ objectPosition: 'center 20%' }} // Adjusts image focus for better visibility
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5"></div>
        <div className="relative z-10">
          <Navbar heroRef={heroRef} />
        </div>
        <Menu />
        <div className="absolute inset-0 flex items-center sm:items-center justify-center z-20">
          <p className="text-white text-lg sm:text-xl md:text-3xl font-bold [text-shadow:_2px_2px_6px_rgba(0,0,0,0.9)] px-4 text-center pt-24 sm:pt-0">
            Step Into the Future of Fashion with
          </p>
        </div>
      </section>
      <div className="border-t-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
      
      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-gradient-to-b from-[#A8B5A2] to-[#8A9A85] min-h-[80vh] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?luxury')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/20 to-[#A8B5A2]/20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16 relative"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <div className="relative flex flex-col items-center">
              <motion.h2
                className="text-5xl md:text-7xl font-bold text-[#FFD700] font-dancing-script [text-shadow:_0_3px_6px_rgba(0,0,0,0.4)] relative z-10"
                style={{ transform: "translateY(-20px) rotate(-3deg)" }}
                variants={headingVariants}
              >
                Crafted with Passion
              </motion.h2>
              <motion.h2
                className="text-4xl md:text-6xl font-bold text-[#FFD700] font-dancing-script [text-shadow:_0_3px_6px_rgba(0,0,0,0.4)] relative z-10"
                style={{ transform: "translateX(20px) rotate(2deg)" }}
                variants={headingVariants}
              >
                For Timeless Elegance
              </motion.h2>
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-[#FFD700] font-dancing-script [text-shadow:_0_3px_6px_rgba(0,0,0,0.4)] relative z-10"
                style={{ transform: "translateY(20px) rotate(-1deg)" }}
                variants={headingVariants}
              >
                Wear Your Story
              </motion.h2>
              <div className="absolute top-0 right-0 md:right-8 lg:right-16">
                <span className="text-2xl md:text-3xl text-[#FFD700] [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">©</span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-1 bg-[#FFD700]/30 rotate-45 opacity-20"></div>
                <div className="w-32 h-1 bg-[#FFD700]/30 -rotate-45 opacity-20"></div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-12 items-center pr-0.5 sm:pr-2"> {/* Added right padding for mobile */}
            <motion.div
              className="flex-1 flex justify-center md:justify-start"
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={imageVariants}
            >
              <div className="relative bg-white/95 backdrop-blur-lg rounded-full p-4 shadow-[0_0_10px_rgba(255,215,0,0.3)] border-2 border-[#FFD700]/30 transform hover:-translate-y-2 transition-transform duration-300">
                <motion.img
                  src={images[currentImageIndex]}
                  alt={`INKOWO Slide ${currentImageIndex + 1}`}
                  className="w-full max-w-md rounded-full object-cover"
                  onLoad={() => console.log(`Slideshow image ${currentImageIndex + 1} loaded successfully`)}
                  onError={() => console.log(`Failed to load slideshow image ${currentImageIndex + 1}`)}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            <motion.div
              className="flex-1 bg-white/95 backdrop-blur-lg p-8 rounded-xl shadow-2xl border border-[#FFD700]/20 border-t-4 border-[#FFD700] rounded-t-xl transform hover:-translate-y-2 transition-transform duration-300 relative"
              initial="hidden"
              animate={aboutInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#FFD700]/50 rounded-full"></div>
              <h4 className="text-xl md:text-2xl font-bold text-[#FFD700] mb-6 tracking-wide font-dancing-script [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">𝕚𝕟𝕜𝓸𝔀𝓸</h4>
              <p className="text-sm md:text-base text-[#000000] mb-6 leading-relaxed font-light hover:text-[#FFD700]/80 transition-colors">
                INKOWO is a women’s fashion brand that reimagines couture as an intimate, emotional, and 
                artistic expression. Each creation is a story — a fusion of fine craftsmanship, timeless elegance, 
                and bold innovation. Rooted in the philosophy that fashion is both wearable art and a reflection of the soul
              </p>
              <p className="text-sm md:text-base text-[#000000] mb-8 leading-relaxed font-light hover:text-[#FFD700]/80 transition-colors">
                INKOWO invites women to experience clothing not just as a statement, but as a personal journey. The brand’s 
                digital presence mirrors this vision: immersive, refined, and visually arresting. With a seamless blend of 
                avant-garde technology and aesthetic sophistication, INKOWO sets a new standard for how fashion is felt, 
                seen, and lived.
              </p>
              <div className="border-t-2 border-[#FFD700]/50 w-16 mb-6 shadow-[0_0_5px_rgba(255,215,0,0.3)]"></div>
              <p className="text-2xl md:text-3xl text-[#FFD700] font-dancing-script font-bold [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">
                𝓲𝓷𝓴𝓸𝔀𝓸
              </p>
            </motion.div>
          </div>
        </div>
        {aboutInView && <div>{console.log("About section in view")}</div>}
      </section>
      <div className="border-t-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>

      {/* Portfolio Section */}
      <PortfolioSection />
      <div className="border-t-2 border-white/50 shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>

      {/* Custom Experience Section */}
      <section ref={customRef} className="py-20 bg-gradient-to-b from-[#A8B5A2] to-[#8A9A85] min-h-[80vh] relative overflow-hidden">
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
            Embark on a collaborative creation process where your vision is transformed into wearable art, crafted with unparalleled elegance and precision.
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
                  description: "Begin with a one-on-one consultation to share your inspirations, style, and dreams with our expert designers.",
                  images: [
                    "https://media.istockphoto.com/id/1312051741/photo/shot-of-a-young-women-as-a-fashion-designer-stock-photo.jpg?s=612x612&w=0&k=20&c=CwNvWSSfLim0yYIBhCchWLHiOMDZ6qB7t9oIpebzKS0=",
                    "https://media.istockphoto.com/id/599713242/photo/beautiful-female-designer-at-design-studio.jpg?s=612x612&w=0&k=20&c=RqMBwinnyniYtSx0AtYsBwRg5bNS1-vosLLw7sy3ZOo=",
                    "https://d2line.com/thatlook/wp-content/uploads/sites/4/2022/02/cover-3-800x600.png",
                  ],
                },
                {
                  step: 2,
                  title: "Moodboard & Sketch",
                  description: "Collaborate to create a curated moodboard and detailed sketches, bringing your vision to life with artistic precision.",
                  image: DressImage,
                },
                {
                  step: 3,
                  title: "Crafting Masterpiece",
                  description: "Our artisans handcraft your piece using the finest materials, ensuring every detail reflects your unique story.",
                  image: Dress1Image,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                  initial="hidden"
                  animate={customInView ? "visible" : "hidden"}
                >
                  <motion.div
                    className="w-full md:w-1/2 px-4 mb-6 md:mb-0"
                    variants={imageVariants}
                  >
                    <div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl hover:shadow-xl transition-shadow duration-300 border border-[#FFD700]/20 transform hover:-translate-y-2">
                      <div className="absolute -top-4 left-4 bg-[#FFD700] text-[#000000] rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      <h4 className="text-xl sm:text-2xl font-dancing-script font-bold text-[#000000] mb-3 [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]">{step.title}</h4>
                      <p className="text-sm sm:text-base text-[#000000] leading-relaxed font-light">{step.description}</p>
                      {step.images && (
                        <motion.div
                          className="mt-6 flex flex-row gap-4 justify-center"
                          variants={imageVariants}
                        >
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
              Powered by INKOWO’s <span className="font-bold">Intelligent Design Engine</span> for personalized recommendations.
            </motion.p>
            <motion.div className="text-center mt-6" variants={textVariants} initial="hidden" animate={customInView ? "visible" : "hidden"}>
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
                        whileHover={{ scale: 1.05}}
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

      {/* Events Section */}
      <section
      ref={eventsRef}
      className="py-20 bg-gradient-to-b from-[#8A9A85] to-[#A8B5A2] relative overflow-hidden"
    >

      <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-[#A8B5A2]/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#000000] text-center mb-4 font-dancing-script [text-shadow:_0_2px_4px_rgba(0,0,0,0.2)]">
          INKOWO Events
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#000000] text-center mb-12 leading-relaxed font-light max-w-3xl mx-auto">
          Relive the magic of our past events and join us for exclusive upcoming fashion drops.
        </p>

        {/* ✅ Added "loading='lazy'" for all event images + reduced shadow complexity */}
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
                    src={event.image}
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
                  src={EventImg}
                  alt="Event Placeholder"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 sm:h-72 object-cover mt-[70px]"
                />
              </div>
            ) : (
              <div key={index} className="relative"></div>
            )
          )}
        </div>
      </div>

      <div className="mt-[10px] border-t-2 border-white/50 shadow-[0_0_10px_rgba(255,255,255,0.2)]"></div>
      </section>

          {/* Contact / Apply for Access Section */}
          <section ref={contactRef} className="py-20 bg-gradient-to-b from-[#A8B5A2] to-[#8A9A85] min-h-[80vh] relative overflow-hidden">
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
                      <label htmlFor="client-moodboard" className="block text-[#000000] font-bold text-sm sm:text-base mb-2">
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

      {/* Footer Section */}
      <footer className="py-12 text-[#000000] relative overflow-hidden border-t-4 border-[#FFD700]/50 shadow-[0_0_20px_rgba(255,215,0,0.4),-20px_0_40px_rgba(255,215,0,0.5)] bg-[#141414]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?luxury')] bg-cover bg-center"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-20 pointer-events-none">
          <img
            src={FooterImg}
            alt="Footer Design"
            className="w-full h-full object-cover opacity-80"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1
            className="text-[80px] sm:text-[100px] md:text-[150px] lg:text-[200px] font-dancing-script text-[#FFD700]/20 opacity-5 rotate-[-15deg] tracking-widest filter blur-[2px]"
          >
            INKOWO
          </h1>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-24">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut", staggerChildren: 0.2 } },
            }}
          >
            <motion.div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 transform hover:-translate-y-2 transition-transform duration-300" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h3 className="text-4xl font-dancing-script font-bold mb-4 text-[#FFD700] [text-shadow:_0_2px_4px_rgba(255,215,0,0.3)]">
                INKOWO
              </h3>
              <p className="text-sm leading-relaxed text-[#000000] font-[Lato] font-semibold tracking-wide">
                <span className="italic">Where fashion meets artistry</span> — embrace couture that speaks your essence, celebrates individuality, and redefines timeless elegance.
              </p>
            </motion.div>
            <motion.div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 transform hover:-translate-y-2 transition-transform duration-300" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h4 className="text-2xl font-dancing-script font-bold mb-4 text-[#00FFAA] underline decoration-wavy">
                Quick Links
              </h4>
              <ul className="text-sm space-y-2 font-[Lato] font-light text-[#000000] font-semibold">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Value</a></li>
                <li><a href="#">Clients</a></li>
              </ul>
            </motion.div>
            <motion.div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 transform hover:-translate-y-2 transition-transform duration-300" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h4 className="text-2xl font-dancing-script font-bold mb-4 text-[#00FFAA] underline decoration-wavy">
                Design
              </h4>
              <ul className="text-sm space-y-2 font-[Lato] font-light text-[#000000] font-semibold">
                <li><a href="#">Web & Interactive</a></li>
                <li><a href="#">Branding</a></li>
                <li><a href="#">Video & Animation</a></li>
              </ul>
            </motion.div>
            <motion.div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 transform hover:-translate-y-2 transition-transform duration-300" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h4 className="text-2xl font-dancing-script font-bold mb-4 text-[#00FFAA] underline decoration-wavy">
                Reach Us
              </h4>
              <ul className="text-sm space-y-2 font-[Lato] font-light font-semibold">
                <li>E-92, Masjid Moth, Greater Kailash 3, New Delhi - 110048, India</li>
                <li><a href="tel:+919493999914" className="hover:text-[#FFD700]/80 transition-colors">+91-9493999914</a></li>
                <li><a href="mailto:contact@artattackk.com" className="hover:text-[#FFD700]/80 transition-colors">contact@Inkowo.com</a></li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="flex justify-center gap-8 mb-6">
              <motion.a
                href="#"
                className="text-[#FFD700] font-dancing-script text-lg"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                Instagram
              </motion.a>
              <motion.a
                href="#"
                className="text-[#FFD700] font-dancing-script text-lg"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                Twitter
              </motion.a>
              <motion.a
                href="#"
                className="text-[#FFD700] font-dancing-script text-lg"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                Pinterest
              </motion.a>
            </div>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] text-[#000000] py-3 px-8 rounded-full font-dancing-script text-lg font-bold hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_10px_rgba(255,215,0,0.3)]"
            >
              Join Our Exclusive Community
            </a>
          </motion.div>
          <div className="relative pt-6">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2]"></div>
            <p className="text-sm text-[#FFD700] font-[Lato] font-light">© 2025 INKOWO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home