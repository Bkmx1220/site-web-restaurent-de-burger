import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-brand-orange text-white px-6 py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          🍔 StreetFood
        </Link>
        <ul className="flex gap-6 font-medium">
          <li><Link to="/" className="hover:text-brand-yellow transition">Accueil</Link></li>
          <li><Link to="/menu" className="hover:text-brand-yellow transition">Menu</Link></li>
          <li><Link to="/about" className="hover:text-brand-yellow transition">À propos</Link></li>
          <li><Link to="/reservation" className="hover:text-brand-yellow transition">Réservations</Link></li>
          <li><Link to="/contact" className="hover:text-brand-yellow transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
