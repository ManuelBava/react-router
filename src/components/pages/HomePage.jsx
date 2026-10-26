import { Link } from "react-router";
import { ArrowRight, Truck, RotateCcw, Headphones } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="bg-primary text-white rounded-4 p-5 mb-5 shadow-sm text-center">
        <div className="py-4">
          <span className="badge bg-white text-primary mb-3 px-3 py-2 rounded-pill fw-bold">
            Nuova Collezione 2026
          </span>
          <h1 className="display-5 fw-bold mb-3">Qualità e Innovazione per il tuo Shopping</h1>
          <p className="lead mx-auto text-white-50 mb-4" style={{ maxWidth: "600px" }}>
            Scopri una selezione curata di articoli tech, moda e lifestyle.
            Spedizione express gratuita per tutti gli ordini superiori a 50€.
          </p>
          <Link
            to="/products"
            className="btn btn-light btn-lg rounded-pill fw-semibold px-4 shadow-sm"
          >
            Esplora il Catalogo <ArrowRight size={18} className="ms-1" />
          </Link>
        </div>
      </section>

      {/* Vantaggi / Perché Sceglierci */}
      <section className="mb-5">
        <h2 className="text-center fw-bold mb-4">Perché Acquistare da Noi</h2>
        <div className="row g-4 text-center">
          <div className="col-12 col-md-4">
            <div className="card h-100 p-4 border-0 shadow-sm rounded-4">
              <div className="mb-3">
                <span className="badge bg-primary-subtle text-primary p-3 rounded-circle">
                  <Truck size={28} />
                </span>
              </div>
              <h5 className="fw-bold">Spedizioni Veloci</h5>
              <p className="text-secondary small m-0">
                Consegna in 24/48 ore con corriere espresso tracciato in tutta Italia.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 p-4 border-0 shadow-sm rounded-4">
              <div className="mb-3">
                <span className="badge bg-success-subtle text-success p-3 rounded-circle">
                  <RotateCcw size={28} />
                </span>
              </div>
              <h5 className="fw-bold">Reso Gratuito 30 Giorni</h5>
              <p className="text-secondary small m-0">
                Non sei soddisfatto? Effettua il reso in modo semplice e senza costi aggiuntivi.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 p-4 border-0 shadow-sm rounded-4">
              <div className="mb-3">
                <span className="badge bg-info-subtle text-info-emphasis p-3 rounded-circle">
                  <Headphones size={28} />
                </span>
              </div>
              <h5 className="fw-bold">Supporto Dedicato</h5>
              <p className="text-secondary small m-0">
                Il nostro team è sempre a disposizione per aiutarti via chat o email.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
