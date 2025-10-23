import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WelcomeLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Hide loader after animation completes
    const timer = setTimeout(() => setShowLoader(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gray-900 z-50 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          {/* Animated Ball */}
          <motion.div
            className="w-16 h-16 bg-blue-500 rounded-full shadow-2xl"
            initial={{ y: 0, scale: 1, opacity: 1 }}
            animate={{
              y: [0, -80, 0, -60, 0, -40, 0, 0],
              scale: [1, 1, 1, 1, 1, 1, 20, 80],
              opacity: [1, 1, 1, 1, 0.8, 0.5, 0.2, 0],
            }}
            transition={{
              duration: 3.3,
              ease: "easeInOut",
            }}
          />

          {/* Welcome Text (moved slightly below the ball) */}
          <motion.p
            className="mt-8 text-white text-xl font-semibold" // 👈 added mt-8 for space below ball
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20],
            }}
            transition={{
              duration: 2.8,
              ease: "easeInOut",
            }}
          >
            Welcome to Our Website!
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeLoader;
