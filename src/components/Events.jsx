import React, { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";
import event4 from "../assets/images/event4.jpg";
import event6 from "../assets/images/event6.jpg";
import event7 from "../assets/images/event7.jpg";
import lotus from "../assets/images/lotus.png"; // 🌸 Lotus background image
import lotus1 from "../assets/images/lotus1.png"; // 🌸 New lotus image to place above text

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const eventsRef = useRef(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const events = eventsRef.current.querySelectorAll(".gallery-item");
    events.forEach((event, index) => {
      gsap.fromTo(
        event,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: event,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        }
      );
    });
  }, []);

  const eventsData = [
    {
      id: 1,
      number: "01",
      title: "Fashion Week 2025",
      subtitle: "October 15, 2025",
      description:
        "Experience the pinnacle of sustainable fashion at our flagship Fashion Week showcase. Featuring exclusive collections and live demonstrations of our eco-conscious design process.",
      details:
        "Join us for an exclusive showcase of sustainable fashion, featuring live demonstrations and eco-conscious designs that redefine luxury.",
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
      details:
        "Explore our vibrant Summer Collection, crafted with organic materials and innovative techniques for modern elegance.",
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
      details:
        "An enchanting evening of luxury and sustainability, bringing together fashion enthusiasts for an unforgettable experience.",
      image: event3,
      imagePosition: "left",
    },
    {
      id: 4,
      title: "Spring Showcase",
      date: "Mar 05, 2025",
      description: "Celebrating renewal with fresh, avant-garde collections.",
      details:
        "A vibrant showcase of spring-inspired sustainable fashion, highlighting innovative designs and eco-friendly materials.",
      image: event4,
    },
    {
      id: 5,
      title: "Eco-Fashion Day",
      date: "Apr 12, 2025",
      description:
        "A day dedicated to eco-conscious fashion with live demonstrations and sustainable designs.",
      details:
        "Celebrate eco-conscious fashion with live demonstrations and sustainable designs that inspire change.",
      image: event6,
    },
    {
      id: 6,
      title: "Mid-Year Couture",
      date: "Jul 18, 2025",
      description:
        "Experience high fashion with our mid-year couture collection.",
      details:
        "Experience high fashion with our mid-year couture collection, blending luxury with sustainable practices.",
      image: event7,
    },
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <Navbar />
      <section
        ref={eventsRef}
        className="py-24 bg-[#F5F1E8] relative overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?luxury')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A7A5E]/5 to-[#F5F1E8]/10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {selectedEvent ? (
            // ===========================
            // Detailed Event View
            // ===========================
            <div className="space-y-12">
              <button
                onClick={handleBackClick}
                className="inline-block px-6 py-2 bg-[#5A7A5E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-[#333333] transition-all duration-300 shadow-md"
              >
                Back to Events
              </button>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#333333] text-center font-dancing-script">
                {selectedEvent.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative overflow-hidden rounded-xl aspect-square shadow-lg border border-[#5A7A5E]/20">
                    <img
                      src={selectedEvent.image || "/placeholder.svg"}
                      alt={selectedEvent.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/30 to-transparent"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-sm sm:text-base text-[#5A7A5E] tracking-widest font-light">
                    {selectedEvent.subtitle || selectedEvent.date}
                  </p>
                  <p className="text-base sm:text-lg text-[#666666] leading-relaxed font-light">
                    {selectedEvent.description}
                  </p>
                  <p className="text-base sm:text-lg text-[#666666] leading-relaxed font-light">
                    {selectedEvent.details}
                  </p>
                  <button className="inline-block px-8 py-3 bg-[#5A7A5E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-[#333333] transition-all duration-300 shadow-md hover:shadow-lg">
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // ===========================
            // Events List View
            // ===========================
            <>
              {/* 🌸 Header with Lotus Background and New Image */}
              <div className="relative flex justify-center items-center mb-16">
                {/* Lotus background */}
                <img
                  src={lotus}
                  alt="Lotus background"
                  className="absolute left-1/2 transform -translate-x-1/2 top-56 sm:top-0 w-72 sm:w-96 md:w-[500px] opacity-10 blur-[1px] mx-auto select-none pointer-events-none transition-all duration-700"
                />

                {/* Lotus foreground (very faint above text) */}
                <img
                  src={lotus1}
                  alt="Lotus foreground"
                  className="absolute left-1/2 transform -translate-x-1/2 -top-16 sm:-top-20 w-28 sm:w-36 md:w-44 select-none pointer-events-none opacity-20 transition-all duration-700"
                />

                {/* Text */}
                <h2 className="relative text-5xl sm:text-6xl md:text-7xl font-semibold text-center">
                  <span className="font-dancing-script text-[#333333] tracking-wide">
                    INKOWO
                  </span>{" "}
                  <span className="font-sans font-bold text-[#5A7A5E]">Showcase</span>
                </h2>
              </div>

              {/* Testimonials Section */}
              <div className="mb-24 py-16 bg-gradient-to-r from-[#F5F1E8] via-[#5A7A5E]/20 to-[#5A7A5E] rounded-2xl px-8 sm:px-12">
                <div className="flex justify-center mb-8">
                  <span className="text-6xl text-[#5A7A5E]">"</span>
                </div>
                <p className="text-center text-lg sm:text-xl md:text-2xl text-[#333333] font-light leading-relaxed mb-8 max-w-4xl mx-auto">
                  INKOWO transformed our vision into reality. Their attention to
                  detail and commitment to sustainable fashion made our event
                  truly unforgettable. Every piece told our story.
                </p>
                <div className="flex justify-center mb-4">
                  <span className="text-6xl text-[#5A7A5E]">"</span>
                </div>
                <p className="text-center text-sm sm:text-base text-[#666666] font-light tracking-widest">
                  JANE & MICHAEL
                </p>
              </div>

              {/* Events Grid with Numbered Sections */}
              <div className="space-y-20">
                {eventsData.slice(0, 3).map((event, index) => (
                  <div key={event.id} className="gallery-item">
                    <div
                      className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                        event.imagePosition === "right"
                          ? "md:grid-flow-dense"
                          : ""
                      }`}
                    >
                      {/* Image Column */}
                      <div
                        className={
                          event.imagePosition === "right" ? "md:col-start-2" : ""
                        }
                      >
                        <div className="relative overflow-hidden rounded-xl aspect-square shadow-lg border border-[#5A7A5E]/20">
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
                      <div
                        className={
                          event.imagePosition === "right" ? "md:col-start-1" : ""
                        }
                      >
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <p className="text-7xl sm:text-8xl font-light text-[#5A7A5E]/40">
                              {event.number}
                            </p>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#333333] font-dancing-script">
                              {event.title}
                            </h3>
                            <p className="text-sm sm:text-base text-[#5A7A5E] tracking-widest font-light">
                              {event.subtitle}
                            </p>
                          </div>
                          <div className="w-12 h-px bg-gradient-to-r from-[#5A7A5E] to-transparent"></div>
                          <p className="text-base sm:text-lg text-[#666666] leading-relaxed font-light">
                            {event.description}
                          </p>
                          <button
                            onClick={() => handleEventClick(event)}
                            className="inline-block px-8 py-3 bg-[#5A7A5E] text-white text-sm tracking-widest font-semibold rounded-full hover:bg-[#333333] transition-all duration-300 shadow-md hover:shadow-lg"
                          >
                            EXPLORE EVENT
                          </button>
                        </div>
                      </div>
                    </div>
                    {index < 2 && (
                      <div className="mt-20 h-px bg-gradient-to-r from-transparent via-[#5A7A5E]/30 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>

              {/* Additional Events Grid */}
              <div className="mt-24 pt-20 border-t border-[#5A7A5E]/20">
                <h3 className="text-2xl sm:text-3xl font-light text-[#333333] text-center mb-12 font-dancing-script">
                  Upcoming Events
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {eventsData.slice(3).map((event) => (
                    <div key={event.id} className="group">
                      <div className="relative overflow-hidden rounded-xl aspect-square mb-4 shadow-md border border-[#5A7A5E]/20">
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
                      <p className="text-sm text-[#5A7A5E] font-light tracking-wide mb-3">
                        {event.date}
                      </p>
                      <button
                        onClick={() => handleEventClick(event)}
                        className="text-sm font-semibold text-[#5A7A5E] border-b-2 border-[#5A7A5E]/50 hover:border-[#5A7A5E] transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;