"use client";
import { ArrowRight, Facebook, Instagram, Paintbrush as Pinterest, Youtube } from "lucide-react";
import FooterImage from "../assets/images/footer.webp"; // ✅ Imported image

export default function Footer() {
  return (
    <footer className="relative bg-gray-800 pt-12 pb-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="w-full h-full bg-[url('https://source.unsplash.com/random/1920x1080/?luxury')] bg-cover bg-center"
          style={{ filter: "sepia(20%)" }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>

      {/* Newsletter Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-white text-2xl font-light font-dancing-script tracking-wide text-center">
            Join Our Exclusive Community
          </h2>
          <div className="flex items-center w-full max-w-sm border border-white/30 bg-white/10 backdrop-blur-md rounded-lg overflow-hidden transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <input
              type="email"
              placeholder="Your Email Address"
              className="bg-transparent text-white placeholder-white/50 px-5 py-3 outline-none flex-grow text-sm font-light"
            />
            <button className="px-4 py-3 text-white hover:text-white/80 transition-all">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Box */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div
          className="relative rounded-xl p-8 shadow-lg overflow-hidden backdrop-blur-sm"
          style={{
            backgroundImage: `url(${FooterImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-white/85"></div>

          {/* Footer Grid */}
          <div className="relative grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
            {/* Explore */}
            <div>
              <h3 className="text-gray-700 font-semibold text-base mb-4 tracking-wide">
                Explore
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  "About us",
                  "Partner onboarding",
                  "News and events",
                  "Work with us",
                  "Bulk Order",
                  "Return Order",
                  "Blogs",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="text-gray-700 font-semibold text-base mb-4 tracking-wide">
                Help
              </h3>
              <ul className="space-y-2 text-sm">
                {["Privacy and terms of use", "Shipping and cancellation", "FAQ's"].map(
                  (item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:underline"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Connect with us */}
            <div>
              <h3 className="text-gray-700 font-semibold text-base mb-4 tracking-wide">
                Connect with us
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:underline"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="tel:079-66131721"
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:underline"
                  >
                    079-66131721
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+916359021222"
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:underline"
                  >
                    +91 6359 021 222
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@inkowo.org"
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:underline"
                  >
                    hello@inkowo.org
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:underline"
                  >
                    Store locator
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-gray-700 font-semibold text-base mb-4 tracking-wide">
                Categories
              </h3>
              <ul className="space-y-2 text-sm">
                {["Apparel", "Home decor", "Accessories", "Gift and toys"].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-all duration-300 ease-in-out hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/20 pt-6">
      <p className="text-white text-sm">
  © {new Date().getFullYear()} Inkowo. All rights reserved.
    </p>
        <div className="flex gap-4">
          {[
            { Icon: Facebook, href: "#" },
            { Icon: Instagram, href: "#" },
            { Icon: Pinterest, href: "#" },
            { Icon: Youtube, href: "#" },
          ].map(({ Icon, href }, index) => (
            <a
              key={index}
              href={href}
              className="text-white hover:text-gray-200 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}