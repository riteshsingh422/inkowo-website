import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";
import event4 from "../assets/images/event4.jpg";
import Footer from "../components/Footer"


gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const eventsRef = useRef(null);

  useEffect(() => {
    const events = eventsRef.current.querySelectorAll(".event-item");

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

  return (
    <>
      <Navbar/>
      <section
        ref={eventsRef}
        className="py-24 bg-gradient-to-b from-[#8A9A85] to-[#A8B5A2] relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?fashion')] bg-cover bg-center"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/10 to-[#A8B5A2]/20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#000000] text-center mb-6 font-dancing-script [text-shadow:_0_4px_12px_rgba(0,0,0,0.3)]">
            INKOWO Events
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-[#000000] text-center mb-16 leading-relaxed font-light max-w-4xl mx-auto font-[Lato]">
            Step into the world of INKOWO, where fashion transcends boundaries. Explore our iconic events and anticipate the future of couture.
          </p>

          <div className="space-y-16">
            {[
              {
                title: "Fashion Week 2025",
                date: "Oct 15, 2025",
                image: event1,
                description: "A global stage for groundbreaking designs and visionary artistry.",
              },
              {
                title: "Summer Collection Launch",
                date: "Jun 10, 2025",
                image: event2,
                description: "Vibrant hues and bold silhouettes to define your summer essence.",
              },
              {
                title: "Winter Gala 2025",
                date: "Dec 20, 2025",
                image: event3,
                description: "An evening of opulence, where elegance meets innovation.",
              },
              {
                title: "Spring Showcase",
                date: "Mar 05, 2025",
                image: event4,
                description: "Celebrating renewal with fresh, avant-garde collections.",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="event-item relative flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                <div className="relative w-full md:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-[#FFD700] font-dancing-script text-2xl font-bold">
                    {event.date}
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-dancing-script font-bold text-[#FFD700] mb-4 [text-shadow:_0_2px_6px_rgba(255,215,0,0.3)]">
                    {event.title}
                  </h3>
                  <p className="text-base md:text-lg text-[#000000] font-[Lato] font-light mb-6">
                    {event.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block text-[#FFD700] font-dancing-script text-lg font-semibold border-b-2 border-[#FFD700]/50 hover:border-[#FFD700] transition-colors duration-300"
                  >
                    Discover More
                  </a>
                </div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] opacity-50"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Events;