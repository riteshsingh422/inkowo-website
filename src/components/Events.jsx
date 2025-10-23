import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";
import event4 from "../assets/images/event4.jpg";
import FooterImg from "../assets/images/footer.png"


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

      <footer className="py-12 text-[#000000] relative overflow-hidden border-t-4 border-[#FFD700]/50 shadow-[0_0_20px_rgba(255,215,0,0.4),-20px_0_40px_rgba(255,215,0,0.5)] bg-[#141414]">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?luxury')] bg-cover bg-center"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-20 pointer-events-none">
          <img
            src={FooterImg}
            alt="Footer Design"
            className="w-full h-full object-cover opacity-80"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[80px] sm:text-[100px] md:text-[150px] lg:text-[200px] font-dancing-script text-[#FFD700]/20 opacity-5 rotate-[-15deg] tracking-widest filter blur-[2px]">
            INKOWO
          </h1>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 hover:-translate-y-2 transition-transform duration-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h3 className="text-4xl font-dancing-script font-bold mb-4 text-[#FFD700] [text-shadow:_0_2px_4px_rgba(255,215,0,0.3)]">
                INKOWO
              </h3>
              <p className="text-sm leading-relaxed text-[#000000] font-[Lato] font-semibold tracking-wide">
                <span className="italic">Where fashion meets artistry</span> — embrace couture that speaks your essence, celebrates individuality, and redefines timeless elegance.
              </p>
            </div>

            <div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 hover:-translate-y-2 transition-transform duration-200">
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
            </div>

            <div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 hover:-translate-y-2 transition-transform duration-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h4 className="text-2xl font-dancing-script font-bold mb-4 text-[#00FFAA] underline decoration-wavy">
                Design
              </h4>
              <ul className="text-sm space-y-2 font-[Lato] font-light text-[#000000] font-semibold">
                <li><a href="#">Web & Interactive</a></li>
                <li><a href="#">Branding</a></li>
                <li><a href="#">Video & Animation</a></li>
              </ul>
            </div>

            <div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 hover:-translate-y-2 transition-transform duration-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h4 className="text-2xl font-dancing-script font-bold mb-4 text-[#00FFAA] underline decoration-wavy">
                Reach Us
              </h4>
              <ul className="text-sm space-y-2 font-[Lato] font-light font-semibold">
                <li>E-92, Masjid Moth, Greater Kailash 3, New Delhi - 110048, India</li>
                <li><a href="tel:+919493999914" className="hover:text-[#FFD700]/80 transition-colors">+91-9493999914</a></li>
                <li><a href="mailto:contact@Inkowo.com" className="hover:text-[#FFD700]/80 transition-colors">contact@Inkowo.com</a></li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-4">
            <div className="flex justify-center gap-8 mb-6">
              <a href="#" className="text-[#FFD700] font-dancing-script text-lg hover:scale-110 transition-transform duration-200">Instagram</a>
              <a href="#" className="text-[#FFD700] font-dancing-script text-lg hover:scale-110 transition-transform duration-200">Twitter</a>
              <a href="#" className="text-[#FFD700] font-dancing-script text-lg hover:scale-110 transition-transform duration-200">Pinterest</a>
            </div>
            <a
              href="#"
              className="inline-block bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] text-[#000000] py-3 px-8 rounded-full font-dancing-script text-lg font-bold hover:-translate-y-1 transition-transform duration-200 shadow-[0_0_10px_rgba(255,215,0,0.3)]"
            >
              Join Our Exclusive Community
            </a>
          </div>

          <div className="relative pt-6">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2]"></div>
            <p className="text-sm text-[#FFD700] font-[Lato] font-light">
              © 2025 INKOWO. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Events;