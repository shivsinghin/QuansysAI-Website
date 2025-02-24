import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-[#1C1C1C] pb-[60px] sm:pb-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-purple-900/30 via-transparent to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-radial from-blue-900/30 via-transparent to-transparent opacity-50" />
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full px-4 md:px-8 pt-24 sm:pt-12 md:pt-40">
        <div className="max-w-[90rem] mx-auto">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[65rem] mx-auto text-center"
          >
            <h1 className="mt-24 sm:mt-0 text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[7.5rem] font-bold text-white leading-[1.1] tracking-tight">
              <span className="block">
                AI Agents Empowering
              </span>
              <span className="block">
                Enterprise Support
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#cacaca] mt-4 md:mt-8 px-4 md:px-0">
              <span className="inline sm:block">
                AI call agents for seamless support and sales, offering custom voices
              </span>
              <span className="inline sm:block">
                and the ability to handle thousands of phone calls simultaneously.
              </span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 md:mt-12"
            >
              <button
                onClick={() => navigate("/book-a-demo")}
                className="px-6 md:px-8 py-2.5 md:py-3 bg-white hover:bg-gray-100 text-black rounded-full font-medium text-base md:text-lg transition-all"
              >
                Book a demo
              </button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 md:mt-20"
          >
            <p className="text-center text-[#A1A1A1] text-xs md:text-sm uppercase tracking-wider mb-8 md:mb-12">
              Trusted by Industry Leaders
            </p>
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-y-0 gap-x-2 sm:gap-4 md:gap-x-8 items-center">
                {[
                  "/1-marg.png",
                  "/2-pazcare.png",
                  "/3-ayushpay.png",
                  "/4-intargos.png",
                  "/6-omelo.png",
                  "/5-7stone.png"
                ].map((logo, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="flex justify-center items-center"
                  >
                    <img
                      src={logo}
                      alt="Partner logo"
                      className="w-[112px] sm:w-[80px] md:w-[120px] h-auto object-contain transition-all duration-300 mb-4 sm:mb-[0px] md:mb-[80px]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
