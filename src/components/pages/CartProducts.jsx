import { Link } from "react-router";
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from "lucide-react";
import { useECommerceContext } from "../contexts/ECommerceContext";

export default function CartProducts() {
  const {
    cartProducts,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    handleRemoveFromCart,
  } = useECommerceContext();

  // Calcolo totale prezzo e totale pezzi
  const totalPrice = cartProducts.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const totalItems = cartProducts.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <section className="my-4">
      {/* Stato: Carrello Vuoto */}
      {cartProducts.length === 0 && (
        <div className="text-center py-5 my-4 bg-white rounded-4 shadow-sm border p-5">
          <div className="mb-3 text-secondary opacity-50">
            <ShoppingCart size={54} />
          </div>
          <h3 className="fw-bold mb-2">Il tuo carrello è vuoto</h3>
          <p className="text-secondary mb-4">
            Non hai ancora aggiunto nessun prodotto al carrello.
          </p>
          <Link to="/products" className="btn btn-primary rounded-pill px-4">
            Esplora i prodotti
          </Link>
        </div>
      )}

      {/* Stato: Carrello con Prodotti */}
      {cartProducts.length > 0 && (
        <>
          {/* Intestazione */}
          <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <div>
              <h2 className="fw-bold m-0">Il tuo Carrello</h2>
              <p className="text-secondary small m-0">
                {totalItems} {totalItems === 1 ? "articolo" : "articoli"} nel
                carrello
              </p>
            </div>
            <Link
              to="/products"
              className="btn btn-outline-secondary btn-sm rounded-pill px-3"
            >
              <ArrowLeft size={16} className="me-1" /> Continua gli acquisti
            </Link>
          </div>

          {/* Griglia Prodotti nel carrello */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {cartProducts.map((product) => (
              <div className="col" key={product.id}>
                <div className="card h-100 shadow-sm rounded-3 overflow-hidden border">
                  {/* Immagine */}
                  <img
                    className="product-card-img"
                    src={product.thumbnail || product.images?.[0]}
                    alt={product.title}
                  />

                  <div className="card-body d-flex flex-column">
                    {/* Categoria & Rimozione */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="badge bg-light text-secondary text-uppercase border small">
                        {product.category}
                      </span>
                      <button
                        type="button"
                        className="btn btn-link text-danger p-0 border-0"
                        onClick={() => handleRemoveFromCart(product.id)}
                        title="Rimuovi dal carrello"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    {/* Titolo */}
                    <h6
                      className="card-title fw-bold text-dark text-truncate mb-2"
                      title={product.title}
                    >
                      {product.title}
                    </h6>

                    {/* Prezzo unitario */}
                    <div className="small text-secondary mb-2">
                      Prezzo unitario: €{product.price.toFixed(2)}
                    </div>

                    {/* Gestione Quantità (+ / -) */}
                    <div className="d-flex align-items-center justify-content-between bg-light border rounded-pill px-2 py-1 my-2">
                      <span className="small text-secondary ps-2">Qtà:</span>
                      <div className="d-flex align-items-center">
                        <button
                          type="button"
                          className="btn btn-sm btn-white rounded-circle border-0 d-flex align-items-center justify-content-center p-1"
                          onClick={() => handleDecreaseQuantity(product.id)}
                          title="Diminuisci quantità"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="fw-bold px-2 small text-dark user-select-none">
                          {product.quantity || 1}
                        </span>

                        <button
                          type="button"
                          className="btn btn-sm btn-primary rounded-circle border-0 d-flex align-items-center justify-content-center p-1"
                          onClick={() => handleIncreaseQuantity(product.id)}
                          title="Aumenta quantità"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Subtotale Prodotto */}
                    <div className="fs-6 fw-bold text-primary my-2">
                      Subtotale: €
                      {(product.price * (product.quantity || 1)).toFixed(2)}
                    </div>

                    {/* Pulsante Dettagli in fondo */}
                    <div className="mt-auto pt-2">
                      <Link
                        className="btn btn-sm btn-outline-primary rounded-pill w-100 fw-medium"
                        to={`/product/${product.id}`}
                      >
                        Dettagli Prodotto
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Riepilogo Totale Ordine */}
          <div className="card bg-white border rounded-4 shadow-sm p-4 mt-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
              <div>
                <span className="text-secondary small">Totale stimato:</span>
                <div className="fs-2 fw-bold text-primary">
                  €{totalPrice.toFixed(2)}
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary btn-lg rounded-pill px-5 fw-medium"
              >
                Procedi al Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
