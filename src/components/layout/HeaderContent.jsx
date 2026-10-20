import { Link, NavLink } from "react-router";

export default function HeaderContent() {
  return (
    <header>
      <nav className="d-flex gap-3 justify-content-end">
        <Link to="/">Home Page</Link>
        <NavLink to="/products">Prodotti</NavLink>
        <NavLink to="/contacts">Contatti</NavLink>
      </nav>
    </header>
  );
}
