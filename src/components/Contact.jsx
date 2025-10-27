import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaInstagram, FaTwitter, FaPinterest, FaFacebook } from "react-icons/fa";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

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
        <Navbar />
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
      <Footer />
    </>
  );
};

export default Contact;