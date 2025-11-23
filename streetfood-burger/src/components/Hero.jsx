import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-yellow-500 via-orange-600 to-red-600 text-white overflow-hidden">
      
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 blur-sm"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1606755962773-d324e0a1303f?auto=format&fit=crop&w=1400&q=80')",
        }}
      ></div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
          <span className="text-white">Bienvenue chez</span>{" "}
          <span className="text-yellow-300">
            <Typewriter
              words={["StreetFood Burger", "Le Goût de la Rue", "100% Fait Maison"]}
              loop={0}
              cursor
              cursorStyle="🍔"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <p className="text-lg md:text-2xl mb-8 font-light">
          Le goût du vrai burger fait maison 🍔🔥
        </p>

        {/* Bouton vers la page Menu */}
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 15px rgba(255,255,255,0.8)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/menu"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-10 rounded-full transition-all duration-300 shadow-md"
          >
            Voir le menu
          </Link>
        </motion.div>

      </motion.div>

      {/* Gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/30 via-transparent to-yellow-300/30 animate-pulse"></div>
    </section>
  );
};

export default Hero;
