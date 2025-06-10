'use client';

import React from 'react';

export default function ContactUs() {
  return (
    <section className="py-16 px-4 sm:px-10 bg-gray-100 dark:bg-zinc-900" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-8">
        
        {/* Left side – Contact form */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Contactez-nous</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Vous avez une question sur la location ? Besoin d’aide pour réserver un véhicule ? Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement.
          </p>
          
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Nom complet</label>
              <input type="text" placeholder="Votre nom" className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-gray-800 dark:text-white" required />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Email</label>
              <input type="email" placeholder="exemple@mail.com" className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-gray-800 dark:text-white" required />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Téléphone</label>
              <input type="tel" placeholder="05 55 55 55 55" className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-gray-800 dark:text-white" />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-200 mb-1">Message</label>
              <textarea rows="4" placeholder="Votre message..." className="w-full px-4 py-2 border border-gray-300 dark:border-zinc-600 rounded-lg bg-white dark:bg-zinc-700 text-gray-800 dark:text-white" required></textarea>
            </div>

            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition">
              Envoyer
            </button>
          </form>
        </div>

        {/* Right side – Contact details */}
        <div className="bg-gray-50 dark:bg-zinc-900 rounded-xl p-6 shadow-sm">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Coordonnées</h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Adresse :</strong><br />
              123 Rue des voitures, Alger, Algérie
            </li>
            <li>
              <strong>Téléphone :</strong><br />
              +213 555 00 00 00
            </li>
            <li>
              <strong>Email :</strong><br />
              contact@location-voiture.dz
            </li>
            <li>
              <strong>Horaires :</strong><br />
              Lun - Sam : 08h00 - 20h00 <br />
              Dimanche : Fermé
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
