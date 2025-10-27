import { User, ShoppingBag, ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ heroRef }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full z-[9999] relative">
      <style>{`
        @keyframes slideArrow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-slide-arrow { animation: slideArrow 1.5s ease-in-out infinite; }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .slide-in {
          animation: slideIn 0.4s ease-out forwards;
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
          color: #4B5563;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #000000;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #000000;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-active {
          color: #000000 !important;
          font-weight: 500;
        }

        .banner-link {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .banner-link:hover {
          opacity: 0.8;
          transform: scale(1.02);
        }

        .icon-button {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: #4B5563;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .icon-button:hover {
          color: #000000;
          transform: scale(1.1);
        }

        .icon-button:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: ${isMenuOpen ? "flex" : "none"};
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            height: 75vh;
            background-color: white;
            border-bottom: 1px solid rgba(0,0,0,0.3); /* darker line */
            padding: 1.5rem 1rem;
            z-index: 9999;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2); /* darker shadow */
            justify-content: center;
          }

          .nav-links a {
            padding: 1rem 0;
            text-align: center;
            font-size: 1.25rem;
            font-weight: 500;
            letter-spacing: 0.5px;
            opacity: 0;
            transform: translateX(-30px);
          }

          /* Animate each link individually when menu opens */
          ${isMenuOpen ? `
            .nav-links a:nth-child(1) { animation: slideIn 0.3s ease forwards 0.05s; }
            .nav-links a:nth-child(2) { animation: slideIn 0.3s ease forwards 0.1s; }
            .nav-links a:nth-child(3) { animation: slideIn 0.3s ease forwards 0.15s; }
            .nav-links a:nth-child(4) { animation: slideIn 0.3s ease forwards 0.2s; }
            .nav-links a:nth-child(5) { animation: slideIn 0.3s ease forwards 0.25s; }
            .nav-links a:nth-child(6) { animation: slideIn 0.3s ease forwards 0.3s; }
          ` : ""}

          .hamburger {
            display: block;
          }

          .left-icons {
            left: 1rem;
            right: auto;
          }

          .icon-button svg {
            width: 28px;
            height: 28px;
          }

          .hamburger svg {
            width: 30px;
            height: 30px;
          }
        }

        @media (min-width: 769px) {
          .nav-links {
            display: flex !important;
            flex-direction: row;
            position: static;
            background-color: transparent;
            border-bottom: none;
            padding: 0;
            height: auto;
            box-shadow: none;
          }

          .hamburger {
            display: none;
          }
        }
      `}</style>

      {/* Top banner */}
      <Link to="/collection">
        <div className="bg-black text-white py-3 px-4 banner-link">
          <div className="container mx-auto flex items-center justify-center">
            <p className="text-sm md:text-base font-normal tracking-wide flex items-center gap-2">
              Have you checked out our latest collections ?
              <ArrowRight className="w-4 h-4 animate-slide-arrow" />
            </p>
          </div>
        </div>
      </Link>

      {/* Main navbar */}
      <div className="bg-white border-b border-gray-200 relative">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-center mb-8 relative">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-normal tracking-widest text-gray-900">INKOWO</h1>
              <div className="w-24 h-px bg-gray-900 mt-2"></div>
            </div>

            {/* User & Bag icons - move left on mobile */}
            <div className="absolute right-20 flex items-center gap-4 left-icons">
              <button
                onClick={() => navigate("/")}
                className="icon-button"
                aria-label="Go to home page"
              >
                <User className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("/collection")}
                className="icon-button"
                aria-label="Go to collection page"
              >
                <ShoppingBag className="w-5 h-5" />
              </button>
            </div>

            {/* Hamburger stays right side */}
            <div className="absolute right-4 flex items-center">
              <button
                onClick={toggleMenu}
                className="icon-button hamburger"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Navigation links */}
          <div className="nav-links flex items-center justify-center gap-8 md:gap-12">
            <Link to="/" className={`nav-link text-sm md:text-base font-normal tracking-wide ${
              location.pathname === "/" ? "nav-active" : "text-gray-600"
            }`}>Home</Link>

            <Link to="/about" className={`nav-link text-sm md:text-base font-normal tracking-wide ${
              location.pathname === "/about" ? "nav-active" : "text-gray-600"
            }`}>About</Link>

            <Link to="/membership" className={`nav-link text-sm md:text-base font-normal tracking-wide ${
              location.pathname === "/membership" ? "nav-active" : "text-gray-600"
            }`}>Membership</Link>

            <Link to="/collection" className={`nav-link text-sm md:text-base font-normal tracking-wide ${
              location.pathname === "/collection" ? "nav-active" : "text-gray-600"
            }`}>Collection</Link>

            <Link to="/events" className={`nav-link text-sm md:text-base font-normal tracking-wide ${
              location.pathname === "/events" ? "nav-active" : "text-gray-600"
            }`}>Events</Link>

            <Link to="/contact" className={`nav-link text-sm md:text-base font-normal tracking-wide ${
              location.pathname === "/contact" ? "nav-active" : "text-gray-600"
            }`}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
