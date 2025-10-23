import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AboutImage1 from "../assets/images/about15.jpg";
import { FaInstagram, FaTwitter, FaPinterest, FaFacebook } from "react-icons/fa";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isMenuOpen && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 300);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleNavigation = (sectionId) => {
    const routes = {
      home: "/",
      collection: "/collection",
      events: "/events",
      contact: "/contact",
    };
    console.log(`Navigating to: ${routes[sectionId]}`); // Debug log
    navigate(routes[sectionId]);
    toggleMenu();
  };

  return (
    <>
      <style>{`
        @keyframes floatMedium {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .float-medium {
          animation: floatMedium 3.5s ease-in-out infinite;
        }
        .float-medium:nth-child(2) {
          animation-delay: 0.2s;
        }
        .float-medium:nth-child(3) {
          animation-delay: 0.4s;
        }
        .float-medium:nth-child(4) {
          animation-delay: 0.6s;
        }
      `}</style>

      <div className="fixed top-4 right-4 z-[10000]">
        <button
          type="button"
          aria-label="Toggle menu"
          aria-controls="menu-overlay"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="bg-white/90 text-black px-6 py-3 rounded-full hover:bg-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-semibold"
        >
          Menu
        </button>
      </div>

      {isMenuOpen && (
        <>
          <div
            className={`fixed inset-0 z-[9900] bg-black/50 md:hidden transition-opacity duration-300 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={toggleMenu}
          />

          <div
            id="menu-overlay"
            className={`fixed top-0 right-0 h-full w-full md:w-[420px] text-black p-8 transform transition-all duration-300 ease-in-out z-[10000] bg-cover bg-center shadow-xl ${
              isClosing ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
            }`}
            style={{
              backgroundImage: `url(${AboutImage1})`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>

            <button
              type="button"
              aria-label="Close menu"
              onClick={toggleMenu}
              className="absolute top-4 right-4 h-10 w-10 rounded-full bg-black text-white grid place-items-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl z-[10001] transform transition-transform duration-300 hover:rotate-90 hover:scale-110"
            >
              ×
            </button>

            <nav className="mt-6 relative z-[10001] flex flex-col h-full">
              <ul className="space-y-6 mt-12">
                {[
                  { label: "Home", id: "home" },
                  { label: "Collection", id: "collection" },
                  { label: "Events", id: "events" },
                  { label: "Contact", id: "contact" },
                ].map((item, index) => (
                  <li
                    key={item.id}
                    className={`transform transition-all duration-500 ease-out ${
                      isClosing
                        ? "translate-y-4 opacity-0"
                        : "translate-y-0 opacity-100"
                    } float-medium`}
                    style={{
                      animationDelay: `${index * 0.25}s`,
                    }}
                  >
                    <button
                      onClick={() => handleNavigation(item.id)}
                      className="block w-full text-left text-2xl md:text-3xl py-2 text-white hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <footer
                className={`mt-auto pt-6 text-center transform transition-all duration-500 ${
                  isClosing ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                }`}
              >
                <div className="border-t border-white/50"></div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-4 float-medium">
                    Follow Us
                  </h4>
                  <div className="flex gap-6 justify-center">
                    {[
                      {
                        label: "Instagram",
                        href: "https://instagram.com/inkowo",
                        icon: <FaInstagram size={28} />,
                      },
                      {
                        label: "Twitter",
                        href: "https://twitter.com/inkowo",
                        icon: <FaTwitter size={28} />,
                      },
                      {
                        label: "Pinterest",
                        href: "https://pinterest.com/inkowo",
                        icon: <FaPinterest size={28} />,
                      },
                      {
                        label: "Facebook",
                        href: "https://facebook.com/inkowo",
                        icon: <FaFacebook size={28} />,
                      },
                    ].map((social, i) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-orange-500 transition-transform duration-300 hover:scale-110 float-medium"
                        style={{ animationDelay: `${i * 0.3}s` }}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </footer>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
