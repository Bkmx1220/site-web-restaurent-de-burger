import React from "react";
import { motion } from "framer-motion";
import chefImage from '../assets/channels4_profile.jpg'; // Importation de  l'image

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-orange-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Image du chef */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={chefImage} // Utiliser l'importation
            alt="Chef Burger StreetFood"
            className="rounded-3xl shadow-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </motion.div>

        {/* Texte descriptif */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Notre <span className="text-orange-600">Histoire</span> 🍔
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Chez <span className="font-semibold text-orange-600">StreetFood Burger</span>, 
            tout a commencé avec une simple passion : celle du goût, du partage et du vrai burger artisanal.
            Chaque recette est pensée avec soin, chaque ingrédient est choisi pour sa qualité
            et sa fraîcheur.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Depuis nos débuts dans un petit food truck, notre objectif n’a jamais changé :
            offrir une expérience culinaire authentique, conviviale et savoureuse.
            Aujourd’hui, nous sommes fiers d’accueillir chaque client comme un ami.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 transition"
          >
            Découvrir le Menu
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
