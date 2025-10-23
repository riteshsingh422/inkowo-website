import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import FooterImg from "../assets/images/footer.png";
import About1 from "../assets/images/about1.png";
import About2 from "../assets/images/about2.png";
import About3 from "../assets/images/about3.png";
import About4 from "../assets/images/about4.png";
import About5 from "../assets/images/about5.png";
import About6 from "../assets/images/about6.png";
import About7 from "../assets/images/about7.png";
import About8 from "../assets/images/about8.png";
import About9 from "../assets/images/about9.png";
import "./Collection.css";

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  const images = [About1, About2, About3, About4, About5, About6, About7, About8, About9];

  useEffect(() => {
    // ✅ Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // ✅ Responsive GSAP animation using matchMedia
    ScrollTrigger.matchMedia({
      // 📱 Mobile
      "(max-width: 640px)": function () {
        gsap.to(".img", {
          stagger: 0.2,
          y: -300,
          scrub: true,
          scrollTrigger: {
            trigger: ".img",
            scrub: true,
          },
        });
      },

      // 💻 Tablet
      "(min-width: 641px) and (max-width: 1024px)": function () {
        gsap.to(".img", {
          stagger: 0.2,
          y: -450,
          scrub: true,
          scrollTrigger: {
            trigger: ".img",
            scrub: true,
          },
        });
      },

      // 🖥️ Desktop
      "(min-width: 1025px)": function () {
        gsap.to(".img", {
          stagger: 0.2,
          y: -700,
          scrub: true,
          scrollTrigger: {
            trigger: ".img",
            scrub: true,
          },
        });
      },
    });

    // ✅ Cleanup when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <h1 className="text-6rem font-bebas-neue fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[-2] m-0 text-white">
        Inkowo Present
      </h1>

      {/* Grid background lines */}
      <section className="grid grid-cols-3 h-screen m-auto">
        <div className="line border-r border-black"></div>
        <div className="line border-r border-black"></div>
        <div className="line border-r border-black"></div>
      </section>

      {/* Image gallery */}
      <section className="gallery grid grid-cols-3 h-[200vh] m-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="img w-full h-[700px] relative bg-cover z-[-1] border-r border-black"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}
      </section>

      <section className="grid grid-cols-3 h-screen m-auto"></section>

      {/* Footer */}
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
            {/* Column 1 */}
            <div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 hover:-translate-y-2 transition-transform duration-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h3 className="text-4xl font-dancing-script font-bold mb-4 text-[#FFD700] [text-shadow:_0_2px_4px_rgba(255,215,0,0.3)]">
                INKOWO
              </h3>
              <p className="text-sm leading-relaxed text-[#000000] font-[Lato] font-semibold tracking-wide">
                <span className="italic">Where fashion meets artistry</span> — embrace couture that speaks your essence, celebrates individuality, and redefines timeless elegance.
              </p>
            </div>

            {/* Column 2 */}
            <div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 hover:-translate-y-2 transition-transform duration-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h4 className="text-2xl font-dancing-script font-bold mb-4 text-[#00FFAA] underline decoration-wavy">
                Quick Links
              </h4>
              <ul className="text-sm space-y-2 font-[Lato] font-semibold text-[#000000]">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Value</a></li>
                <li><a href="#">Clients</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 hover:-translate-y-2 transition-transform duration-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h4 className="text-2xl font-dancing-script font-bold mb-4 text-[#00FFAA] underline decoration-wavy">
                Design
              </h4>
              <ul className="text-sm space-y-2 font-[Lato] font-semibold text-[#000000]">
                <li><a href="#">Web & Interactive</a></li>
                <li><a href="#">Branding</a></li>
                <li><a href="#">Video & Animation</a></li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="relative bg-white/95 backdrop-blur-lg p-6 rounded-xl shadow-2xl border border-[#FFD700]/20 hover:-translate-y-2 transition-transform duration-200">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FFD700] to-[#A8B5A2] rounded-t-xl"></div>
              <h4 className="text-2xl font-dancing-script font-bold mb-4 text-[#00FFAA] underline decoration-wavy">
                Reach Us
              </h4>
              <ul className="text-sm space-y-2 font-[Lato] font-semibold">
                <li>E-92, Masjid Moth, Greater Kailash 3, New Delhi - 110048, India</li>
                <li>
                  <a href="tel:+919493999914" className="hover:text-[#FFD700]/80 transition-colors">
                    +91-9493999914
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@Inkowo.com" className="hover:text-[#FFD700]/80 transition-colors">
                    contact@Inkowo.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials */}
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
    </div>
  );
};

export default Collection;
