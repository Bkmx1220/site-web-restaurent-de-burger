import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-orange text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          🍔 StreetFood
        </Link>

        {/* ----- MENU DESKTOP ----- */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><Link to="/" className="hover:text-brand-yellow transition">Accueil</Link></li>
          <li><Link to="/menu" className="hover:text-brand-yellow transition">Menu</Link></li>
          <li><Link to="/about" className="hover:text-brand-yellow transition">À propos</Link></li>
          <li><Link to="/reservation" className="hover:text-brand-yellow transition">Réservations</Link></li>
          <li><Link to="/contact" className="hover:text-brand-yellow transition">Contact</Link></li>
        </ul>

        {/* ----- ICON HAMBURGER (MOBILE) ----- */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* ----- MENU MOBILE DÉROULANT ----- */}
      {isOpen && (
        <ul className="md:hidden bg-brand-orange px-6 py-4 space-y-4 font-medium">
          <li><Link to="/" className="block hover:text-brand-yellow">Accueil</Link></li>
          <li><Link to="/menu" className="block hover:text-brand-yellow">Menu</Link></li>
          <li><Link to="/about" className="block hover:text-brand-yellow">À propos</Link></li>
          <li><Link to="/reservation" className="block hover:text-brand-yellow">Réservations</Link></li>
          <li><Link to="/contact" className="block hover:text-brand-yellow">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
