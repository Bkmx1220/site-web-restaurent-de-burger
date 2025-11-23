import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Titre */}
        <h1 className="text-4xl font-bold text-brand-orange text-center mb-2">
          Contactez-nous
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Une question ? Une réservation ? Nous sommes à votre service !
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Formulaire */}
          <div className="bg-white p-6 rounded-xl shadow-lg border">
            <h2 className="text-2xl font-semibold mb-4 text-brand-red">
              Envoyez-nous un message
            </h2>

            <form className="space-y-4">

              <div>
                <label className="block font-medium mb-1">Nom*</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-brand-orange outline-none"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Email*</label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-brand-orange outline-none"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Message*</label>
                <textarea
                  className="w-full border rounded-lg p-3 h-32 resize-none focus:ring-2 focus:ring-brand-orange outline-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange text-white py-3 rounded-lg font-semibold hover:bg-brand-red transition-all"
              >
                Envoyer
              </button>

            </form>
          </div>

          {/* Informations + Carte */}
          <div className="space-y-6">

            <div className="bg-white p-6 rounded-xl shadow-lg border">
              <h2 className="text-2xl font-semibold mb-4 text-brand-red">
                Infos & Localisation
              </h2>

              <p className="mb-2">
                <span className="font-semibold">📍 Adresse :</span>  
                25 Rue du Marché, Paris 75001
              </p>

              <p className="mb-2">
                <span className="font-semibold">📞 Téléphone :</span>  
                01 23 45 67 89
              </p>

              <p className="mb-4">
                <span className="font-semibold">🕒 Horaires :</span>  
                Lun – Dim : 11h00 – 23h00
              </p>
            </div>

            <div className="rounded-xl overflow-hidden shadow-lg border">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999841658847!2d2.292292676942833!3d48.85837360094471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdd3f640000%3A0xa5f4b95d2b5e1ef1!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1700000000000"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
