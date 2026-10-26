import { Frown } from "lucide-react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="text-center py-5 my-4">
      <div className="mb-3">
        <Frown size={80} className="text-primary opacity-75" />
      </div>
      <h1 className="display-6 fw-bold mb-2">404 - Pagina Non Trovata</h1>
      <p className="text-secondary mb-4 mx-auto" style={{ maxWidth: "450px" }}>
        La pagina o il prodotto che stai cercando non esiste o è stato rimosso.
      </p>
      <Link to="/" className="btn btn-primary rounded-pill px-4 fw-medium">
        Torna alla Home
      </Link>
    </section>
  );
}
