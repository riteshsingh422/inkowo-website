import { User, ShoppingBag, ArrowRight } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="w-full">
      <style>{`
        @keyframes slideArrow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }
        .animate-slide-arrow { animation: slideArrow 1.5s ease-in-out infinite; }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
          color: #4B5563; /* Gray-600 */
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background-color: #000000; /* Black underline */
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #000000; /* Dark black on hover */
        }

        .nav-link:hover::after {
          width: 100%; /* Underline extends on hover */
        }

        .nav-active {
          color: #000000 !important; /* Dark black for active */
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
          color: #4B5563; /* Gray-600 */
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .icon-button:hover {
          color: #000000; /* Dark black on hover */
          transform: scale(1.1);
        }

        .icon-button:focus {
          outline: none;
          box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2);
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
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          {/* Top row: Logo centered, Icons on right */}
          <div className="flex items-center justify-center mb-8 relative">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-normal tracking-widest text-gray-900">INKOWO</h1>
              <div className="w-24 h-px bg-gray-900 mt-2"></div>
            </div>

            {/* User and Bag icons on right */}
            <div className="absolute right-4 flex items-center gap-4">
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
          </div>

          {/* Navigation links */}
          <div className="flex items-center justify-center gap-8 md:gap-12">
            <Link
              to="/"
              className={`nav-link text-sm md:text-base font-normal tracking-wide ${
                location.pathname === "/" ? "nav-active" : "text-gray-600"
              }`}
            >
              Home
            </Link>

            <Link
              to="/collection"
              className={`nav-link text-sm md:text-base font-normal tracking-wide ${
                location.pathname === "/collection" ? "nav-active" : "text-gray-600"
              }`}
            >
              Collection
            </Link>

            <Link
              to="/events"
              className={`nav-link text-sm md:text-base font-normal tracking-wide ${
                location.pathname === "/events" ? "nav-active" : "text-gray-600"
              }`}
            >
              Events
            </Link>

            <Link
              to="/contact"
              className={`nav-link text-sm md:text-base font-normal tracking-wide ${
                location.pathname === "/contact" ? "nav-active" : "text-gray-600"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}