import { Link } from "react-router";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, Sparkles } from "lucide-react";

export default function FooterContent() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light rounded-4 shadow-lg mt-5 p-4 p-md-5">
      <div className="row g-4">
        {/* Colonna 1: Brand & Mission */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="badge bg-primary rounded-circle p-2">
              <Sparkles size={20} className="text-white" />
            </span>
            <h4 className="fw-bold m-0 text-white">ReactStore</h4>
          </div>
          <p className="text-secondary small pe-lg-4">
            La tua destinazione di riferimento per i migliori prodotti tech e lifestyle.
            Qualità garantita, resi facili e spedizioni rapide in tutta Italia.
          </p>
          <div className="d-flex align-items-center gap-2 text-success small mt-3">
            <ShieldCheck size={18} />
            <span>Pagamenti sicuri & Spedizione tracciata</span>
          </div>
        </div>

        {/* Colonna 2: Link Rapidi */}
        <div className="col-6 col-md-3 col-lg-2">
          <h6 className="fw-bold text-white mb-3 text-uppercase small tracking-wide">
            Navigazione
          </h6>
          <ul className="list-unstyled d-flex flex-column gap-2 small">
            <li>
              <Link to="/" className="text-secondary text-decoration-none link-light">
                Home Page
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-secondary text-decoration-none link-light">
                Catalogo Prodotti
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="text-secondary text-decoration-none link-light">
                Contattaci
              </Link>
            </li>
            <li>
              <span className="text-secondary text-decoration-none">
                Chi siamo
              </span>
            </li>
          </ul>
        </div>

        {/* Colonna 3: Contatti Diretti */}
        <div className="col-6 col-md-3 col-lg-3">
          <h6 className="fw-bold text-white mb-3 text-uppercase small tracking-wide">
            Contatti
          </h6>
          <ul className="list-unstyled d-flex flex-column gap-2 small text-secondary">
            <li className="d-flex align-items-center gap-2">
              <MapPin size={16} className="text-primary flex-shrink-0" />
              <span>Via Roma 120, 20121 Milano</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <Phone size={16} className="text-primary flex-shrink-0" />
              <a href="tel:+39021234567" className="text-secondary text-decoration-none link-light">
                +39 02 1234567
              </a>
            </li>
            <li className="d-flex align-items-center gap-2">
              <Mail size={16} className="text-primary flex-shrink-0" />
              <a href="mailto:supporto@reactstore.it" className="text-secondary text-decoration-none link-light">
                supporto@reactstore.it
              </a>
            </li>
            <li className="d-flex align-items-center gap-2">
              <Clock size={16} className="text-primary flex-shrink-0" />
              <span>Lun - Ven: 09:00 - 18:00</span>
            </li>
          </ul>
        </div>

        {/* Colonna 4: Newsletter */}
        <div className="col-12 col-md-6 col-lg-3">
          <h6 className="fw-bold text-white mb-3 text-uppercase small tracking-wide">
            Resta Aggiornato
          </h6>
          <p className="text-secondary small mb-3">
            Iscriviti alla newsletter per ricevere offerte esclusive e sconti riservati.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2">
            <input
              type="email"
              className="form-control form-control-sm bg-body-tertiary border-0 text-dark"
              placeholder="Inserisci la tua email..."
              aria-label="Email per newsletter"
            />
            <button
              type="submit"
              className="btn btn-sm btn-primary d-flex align-items-center justify-content-center px-3"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>

      <hr className="my-4 border-secondary opacity-25" />

      {/* Barra inferiore: Copyright e Note Legali */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-secondary small">
        <p className="m-0">
          &copy; {currentYear} <strong className="text-white">ReactStore</strong>. Tutti i diritti riservati.
        </p>
        <div className="d-flex gap-3">
          <span role="button" className="text-secondary link-light text-decoration-none">
            Privacy Policy
          </span>
          <span>•</span>
          <span role="button" className="text-secondary link-light text-decoration-none">
            Termini di Servizio
          </span>
          <span>•</span>
          <span role="button" className="text-secondary link-light text-decoration-none">
            Cookie Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
