import React, { useState } from "react";
import { motion } from "framer-motion";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${formData.name} ! Votre réservation a été enregistrée 🍔`);
    setFormData({
      name: "",
      email: "",
      date: "",
      time: "",
      guests: "",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800"
        >
          Réservez votre <span className="text-orange-600">table</span> 🍽️
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-10 space-y-6"
        >
          {/* Nom */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Entrez votre nom"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Adresse e-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="exemple@email.com"
            />
          </div>

          {/* Date et heure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Heure
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Nombre de personnes */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Nombre de personnes
            </label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ex: 4"
            />
          </div>

          {/* Bouton */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-orange-500 text-white py-3 rounded-full font-semibold shadow-md hover:bg-orange-600 transition"
            type="submit"
          >
            Confirmer la réservation
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Reservation;
