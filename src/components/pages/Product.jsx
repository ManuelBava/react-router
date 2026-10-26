import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { ArrowLeft, Star, ShoppingBag, Check } from "lucide-react";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function getProduct() {
      try {
        setIsLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);

        if (!response.ok) {
          if (response.status === 404 || response.status === 400) {
            navigate("/404");
            return;
          } else {
            throw new Error("Errore durante il recupero del prodotto!");
          }
        }

        const data = await response.json();

        // Pre-caricamento immagine
        await new Promise((resolve) => {
          const imgSrc = data.thumbnail || data.images?.[0];
          if (!imgSrc) return resolve();
          const img = new Image();
          img.src = imgSrc;
          img.onload = resolve;
          img.onerror = resolve;
        });

        setProduct(data);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getProduct();
  }, [id, navigate]);

  // Gestione click "Aggiungi al Carrello" con feedback visivo temporaneo
  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <section className="my-4">
      {/* Bottone Torna Indietro */}
      <div className="mb-4">
        <Link to="/products" className="btn btn-outline-secondary btn-sm rounded-pill px-3">
          <ArrowLeft size={16} className="me-1" />
          Torna ai prodotti
        </Link>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center py-5 gap-3">
          <div className="spinner-border text-primary" role="status"></div>
          <span className="text-secondary fw-medium">Caricamento scheda prodotto...</span>
        </div>
      )}

      {/* Scheda Prodotto */}
      {product !== null && !isLoading && (
        <div className="row g-4 g-lg-5 align-items-center">
          {/* Colonna Immagine */}
          <div className="col-12 col-md-6 text-center">
            <div className="bg-white p-4 rounded-4 shadow-sm border">
              <img
                src={product.thumbnail || product.images?.[0]}
                alt={product.title}
                className="img-fluid"
                style={{ maxHeight: "380px", objectFit: "contain" }}
              />
            </div>
          </div>

          {/* Colonna Dettagli */}
          <div className="col-12 col-md-6">
            <span className="badge bg-primary-subtle text-primary text-uppercase px-3 py-2 rounded-pill mb-2">
              {product.category}
            </span>

            <h1 className="fw-bold mb-2">{product.title}</h1>

            {/* Rating */}
            {product.rating && (
              <div className="d-flex align-items-center gap-2 mb-3">
                <div className="d-flex align-items-center text-warning">
                  <Star size={18} fill="currentColor" />
                  <span className="fw-bold ms-1 text-dark">{product.rating}</span>
                </div>
                <span className="text-secondary small">• Brand: {product.brand || "Generico"}</span>
              </div>
            )}

            {/* Prezzo */}
            <div className="fs-1 fw-bold text-primary mb-3">
              €{product.price.toFixed(2)}
            </div>

            {/* Descrizione */}
            <p className="text-secondary mb-4 leading-relaxed">
              {product.description}
            </p>

            <hr className="my-4 opacity-25" />

            {/* Azioni */}
            <div className="d-flex flex-wrap gap-3 align-items-center">
              <button
                type="button"
                className={`btn btn-lg rounded-pill px-4 d-flex align-items-center gap-2 ${
                  isAdded ? "btn-success" : "btn-primary"
                }`}
                onClick={handleAddToCart}
              >
                {isAdded ? (
                  <>
                    <Check size={20} /> Aggiunto al carrello!
                  </>
                ) : (
                  <>
                    <ShoppingBag size={20} /> Aggiungi al carrello
                  </>
                )}
              </button>

              <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill">
                Disponibile in magazzino
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
