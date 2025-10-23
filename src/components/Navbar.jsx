"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Navbar = ({ heroRef }) => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef?.current) return
      const heroRect = heroRef.current.getBoundingClientRect()
      const heroHeight = heroRect.height
      const scrollY = window.scrollY
      if (scrollY > 50 && scrollY < heroHeight) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [heroRef])

  // Animation variants for smooth transition
  const navbarVariants = {
    top: {
      y: 0,
      scale: 0.7, // slightly smaller when at the top
      position: "relative",
    },
    sticky: {
      y: "calc(50vh + 3rem)",
      scale: 1.6, // reduced slightly from 1.8 for more subtle scaling
      position: "sticky",
      top: "calc(50vh + 3rem)",
      left: 0,
      right: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.nav
      className="p-6 z-30"
      variants={navbarVariants}
      initial="top"
      animate={isSticky ? "sticky" : "top"}
      style={{
        backgroundColor: "transparent",
        marginTop: "1rem", // 👈 adds space from the very top (~same as Menu button top-4)
      }}
    >
      <div className="container mx-auto flex items-center justify-center">
        <motion.h1
          className="text-white text-4xl sm:text-5xl font-bold tracking-wide [text-shadow:_2px_2px_6px_rgba(0,0,0,0.9)]"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            top: "0.5rem", // small controlled vertical offset
          }}
        >
          INKOWO
        </motion.h1>
      </div>
    </motion.nav>
  )
}

export default Navbar


