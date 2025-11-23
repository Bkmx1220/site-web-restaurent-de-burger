import React from "react";
import { motion } from "framer-motion";

// ➜ Importation des images locales
import classicImg from "../assets/classic.jpg";
import spicyImg from "../assets/Spicy.jpg";
import cheeseImg from "../assets/cheese.jpg";
import veganImg from "../assets/vegan.jpg";

// ➜ Tableau complet du menu
const burgers = [
  {
    name: "Classic Burger",
    description: "Un goût intemporel avec fromage fondant et steak juteux.",
    price: "3500 FCFA",
    image: classicImg,
  },
  {
    name: "Spicy Burger",
    description: "Pour les amateurs de sensations fortes 🌶️.",
    price: "4000 FCFA",
    image: spicyImg,
  },
  {
    name: "Cheese Lover",
    description: "Triple fromage pour un plaisir crémeux et fondant 🧀.",
    price: "4200 FCFA",
    image: cheeseImg,
  },
  {
    name: "Double Beef",
    description: "Deux steaks 100% pur bœuf, sauce maison et frites croustillantes.",
    price: "5500 FCFA",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Vegan Delight",
    description: "Savoureux burger végétal pour tous 🌱.",
    price: "3800 FCFA",
    image: veganImg,
  },
];

const Menu = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-yellow-50" id="menu">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Titre */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Notre <span className="text-orange-600">Menu</span> 🍔
        </motion.h2>

        {/* Cartes */}
        <div className="grid md:grid-cols-3 gap-10">
          {burgers.map((burger, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              
              {/* Image */}
              <img
                src={burger.image}
                alt={burger.name}
                className="w-full h-60 object-cover"
              />
              
              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {burger.name}
                </h3>

                <p className="text-gray-600 mb-4">{burger.description}</p>

                {/* Prix + bouton */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-orange-600">
                    {burger.price}
                  </span>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-all"
                  >
                    Commander
                  </motion.button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;
