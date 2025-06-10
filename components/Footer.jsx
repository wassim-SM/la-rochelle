import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Degui Location</h2>
          <p>Votre partenaire de confiance pour la location de voitures en toute simplicité et sécurité.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Accueil</a></li>
            <li><a href="/cars" className="hover:underline">Nos véhicules</a></li>
            <li><a href="/about" className="hover:underline">À propos</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Adresse : Alger, Algérie</p>
          <p>Téléphone : +213 555 55 55 55</p>
          <p>Email : contact@deguilocation.com</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Degui Location. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
