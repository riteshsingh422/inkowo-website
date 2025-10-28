"use client"
import { useEffect, useState } from "react"

export default function WelcomeLoader({ onLoaded }) {
  const [isVisible, setIsVisible] = useState(true)
  const welcomeText = "Welcome To INKOWO".split("") // Text for character animation

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      if (onLoaded) onLoaded()
    }, 4000) // Duration remains 4s
    return () => clearTimeout(timer)
  }, [onLoaded])

  return (
    <>
      {isVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-1000 ease-in-out"
          style={{
            background: "#FAF8F2", // Solid off-white background
          }}
        >
          <div className="text-center space-y-6 sm:space-y-8">
            {/* Loader Animation */}
            <div className="relative flex items-center justify-center">
              <div className="w-16 sm:w-20 h-16 sm:h-20 rounded-full border-4 border-[#5A7A5E]/30 animate-[pulse_2s_ease-in-out_infinite]">
                <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full border-4 border-[#5A7A5E]/50 m-1 sm:m-2 animate-[pulse_2s_ease-in-out_infinite_0.2s]"></div>
              </div>
              <div className="absolute w-24 sm:w-28 h-24 sm:h-28 rounded-full border-2 border-[#5A7A5E]/20 animate-[spinSlow_5s_linear_infinite]"></div>
              <div className="absolute w-28 sm:w-32 h-28 sm:h-32 rounded-full border border-[#5A7A5E]/10 animate-[spinSlow_7s_linear_infinite_reverse]"></div>
            </div>

            {/* Welcome Text with Character Animation */}
            <div className="flex justify-center space-x-0.5 sm:space-x-1">
              {welcomeText.map((char, index) => (
                <span
                  key={index}
                  className="text-3xl sm:text-4xl md:text-5xl font-light text-[#333333] tracking-tight"
                  style={{
                    fontFamily: "Georgia, serif",
                    textShadow: "0 1px 2px rgba(0,0,0,0.1)",
                    animation: `charFadeIn 0.5s ease-in-out ${0.2 + index * 0.08}s forwards`,
                    opacity: 0,
                  }}
                >
                  {char === " " ? "\u00A0" : char} {/* Handle spaces */}
                </span>
              ))}
            </div>
            <p className="text-[#666666] text-xs sm:text-sm tracking-widest font-light animate-[fadeInText_1s_ease-in-out_1.2s_forwards] opacity-0">
              Discover Timeless Elegance
            </p>

            {/* Decorative Element with Bounce */}
            <div
              className="w-20 sm:w-24 h-px bg-gradient-to-r from-[#5A7A5E] via-[#7A9A7E] to-transparent mx-auto animate-[bounceLine_1.5s_ease-in-out_infinite]"
            ></div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes spinSlow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes charFadeIn {
          0% {
            opacity: 0;
            transform: translateY(12px) rotate(5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
        }

        @keyframes fadeInText {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.15);
            opacity: 1;
          }
        }

        @keyframes bounceLine {
          0%, 100% {
            transform: translateY(0);
            width: 20px;
          }
          50% {
            transform: translateY(-4px);
            width: 24px;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @media (max-width: 640px) {
          .text-center {
            transform: scale(0.9); /* Slightly scale down for better fit on small screens */
          }
        }
      `}</style>
    </>
  )
}