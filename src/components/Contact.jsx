import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaInstagram, FaTwitter, FaPinterest, FaFacebook } from "react-icons/fa";
import FooterImg from "../assets/images/footer.png"

const Contact = () => {
  const contactRef = useRef(null);
  const { ref: contactInViewRef, inView: contactInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // FAQ data from the first Contact component
  const faqs = [
    {
      question: "What materials are used in your luxury lehengas?",
      answer:
        "Our luxury lehengas are crafted from premium materials such as pure silk, handwoven zari, and intricate embroidery with Swarovski crystals, ensuring unparalleled elegance and quality.",
    },
    {
      question: "Do you offer customization for your products?",
      answer:
        "Yes, we provide bespoke customization services for lehengas, bets, and other luxury items. Contact our team to discuss your vision, and we'll bring it to life.",
    },
    {
      question: "What is the delivery timeline for orders?",
      answer:
        "Standard delivery takes 4-6 weeks for custom orders and 1-2 weeks for ready-to-wear pieces, depending on your location. Expedited shipping is available upon request.",
    },
    {
      question: "How can I care for my luxury garments?",
      answer:
        "We recommend dry cleaning only for our luxury garments to preserve their intricate details and fabrics. Store them in a cool, dry place away from direct sunlight.",
    },
  ];

  return (
    <>
      <section
        ref={contactInViewRef}
        id="contact"
        className="py-20 bg-gradient-to-b from-[#8A9A85] to-[#A8B5A2] min-h-[80vh] relative overflow-hidden"
      >
        {/* Background Overlay */}
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
            {/* LEFT CARD */}
            <motion.div
              className="flex-1 bg-white/95 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl border border-[#000000]/10 relative overflow-hidden"
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2]"></div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-8 text-center font-dancing-script">
                Private Client Application
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="client-name" className="block text-[#000000] font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="client-name"
                    className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="client-intent" className="block text-[#000000] font-bold mb-2">
                    Intent
                  </label>
                  <textarea
                    id="client-intent"
                    rows="4"
                    className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000]"
                    placeholder="Describe your interest in becoming a private client"
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="client-moodboard" className="block text-[#000000] font-bold mb-2">
                    Upload Moodboard
                  </label>
                  <input
                    type="file"
                    id="client-moodboard"
                    accept="image/*"
                    className="w-full text-[#000000] file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#A8B5A2] file:text-[#000000] hover:file:bg-[#FFD700] transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#000000] text-white py-3 rounded-full hover:bg-[#FFD700] hover:text-[#000000] transition-all duration-300 font-semibold shadow-md"
                >
                  Apply as Private Client
                </button>
              </form>
              <p className="text-center text-[#000000] mt-6 italic font-light">
                Join the exclusive world of INKOWO couture.
              </p>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              className="flex-1 bg-white/95 backdrop-blur-lg p-8 sm:p-10 rounded-2xl shadow-2xl border border-[#000000]/10 relative overflow-hidden"
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={textVariants}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2]"></div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-8 text-center font-dancing-script">
                Press & Business Inquiries
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="press-name" className="block text-[#000000] font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="press-name"
                    className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="press-email" className="block text-[#000000] font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="press-email"
                    className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000]"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="press-message" className="block text-[#000000] font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="press-message"
                    rows="4"
                    className="w-full p-3 bg-transparent border-b-2 border-[#000000] focus:border-[#FFD700] focus:outline-none transition-colors text-[#000000]"
                    placeholder="Your inquiry or message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#000000] text-white py-3 rounded-full hover:bg-[#FFD700] hover:text-[#000000] transition-all duration-300 font-semibold shadow-md"
                >
                  Submit Inquiry
                </button>
              </form>
              <p className="text-center text-[#000000] mt-6 italic font-light">
                Partner with INKOWO for unparalleled opportunities.
              </p>
            </motion.div>
          </div>

          {/* Social Media Card */}
          <motion.div
            className="mt-8 bg-white/95 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-[#000000]/10 relative overflow-hidden max-w-6xl mx-auto"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2]"></div>
            <h3 className="text-2xl font-dancing-script font-bold text-[#000000] text-center mb-4">
              Follow Us
            </h3>
            <div className="flex justify-center gap-8 mb-4">
              {[
                { name: "Instagram", icon: <FaInstagram size={28} />, href: "https://instagram.com/inkowo" },
                { name: "Twitter", icon: <FaTwitter size={28} />, href: "https://twitter.com/inkowo" },
                { name: "Pinterest", icon: <FaPinterest size={28} />, href: "https://pinterest.com/inkowo" },
                { name: "Facebook", icon: <FaFacebook size={28} />, href: "https://facebook.com/inkowo" },
              ].map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center text-[#000000] hover:text-[#FFD700] transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {social.icon}
                  <span className="mt-2 text-sm font-[Lato] font-semibold">{social.name}</span>
                </motion.a>
              ))}
            </div>
            <div className="text-center text-[#000000] font-[Lato] font-semibold text-sm">
              <p>
                Email: <a href="mailto:contact@Inkowo.com" className="hover:text-[#FFD700] transition-colors">contact@Inkowo.com</a>
              </p>
              <p>
                Phone: <a href="tel:+919493999914" className="hover:text-[#FFD700] transition-colors">+91-9493999914</a>
              </p>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="mt-16"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            variants={textVariants}
          >
            <h3 className="text-3xl font-dancing-script font-bold text-[#000000] text-center mb-8">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="relative bg-white/95 p-6 rounded-xl shadow-2xl border border-[#000000]/10 transition-all duration-300 hover:-translate-y-2"
                  variants={textVariants}
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
                  <h4 className="text-lg font-dancing-script font-bold text-[#000000]">
                    {faq.question}
                  </h4>
                  <p className="mt-2 text-[#000000]">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

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
                <li><a href="mailto:contact@Inkowo.com" className="hover:text-[#FFD700]/80 transition-colors">contact@Inkowo.com</a></li>
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
    </>
  );
};

export default Contact;