import { Link, NavLink } from "react-router";
import { ShoppingBag } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { useECommerceContext } from "../contexts/ECommerceContext";

// 1. Definizione links
const navLinks = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Prodotti" },
  { path: "/contacts", label: "Contatti" },
];

// 2. Funzione helper per le classi dei link attivi
const getNavLinkClass = ({ isActive }) =>
  `btn btn-sm rounded-pill px-3 ${isActive ? "btn-primary" : "btn-outline-primary"}`;

export default function HeaderContent() {
  const { cartProductsLength } = useECommerceContext();
  return (
    <header className="bg-white shadow-sm rounded-4 px-4 py-3 mb-4">
      <nav className="d-flex align-items-center justify-content-between flex-wrap gap-2">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-decoration-none d-flex align-items-center gap-2"
        >
          <span className="badge bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center">
            <ShoppingBag size={20} className="text-white" />
          </span>
          <span className="fs-4 fw-bold text-dark m-0">ReactStore</span>
        </Link>

        {/* Menu di Navigazione */}
        <div className="d-flex gap-2">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={getNavLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>
        <NavLink
          className="position-relative d-inline-block"
          key="/cart-products"
          to="/cart-products"
        >
          {/* Icona del Carrello */}
          <ShoppingCart size={24} className="text-secondary" />

          {/* Pallino Rosso del Badge Bootstrap */}
          {cartProductsLength > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartProductsLength}
              <span className="visually-hidden">elementi nel carrello</span>
            </span>
          )}
        </NavLink>
      </nav>
    </header>
  );
}
