import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        // Precaricamento immagini per una navigazione fluida
        await Promise.all(
          data.products.map((product) => {
            return new Promise((resolve) => {
              const imageSrc = product.thumbnail || product.images?.[0];
              if (!imageSrc) return resolve();
              const img = new Image();
              img.src = imageSrc;
              img.onload = resolve;
              img.onerror = resolve;
            });
          })
        );

        setProducts(data.products);
      } catch (e) {
        console.log(e.message);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);

  // Filtro semplice per nome prodotto
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      {/* Intestazione e Barra di ricerca */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <div>
          <h2 className="fw-bold m-0">I Nostri Prodotti</h2>
          <p className="text-secondary small m-0">
            Esplora la nostra selezione di articoli di qualità
          </p>
        </div>

        {/* Input Ricerca */}
        <div className="input-group" style={{ maxWidth: "320px" }}>
          <span className="input-group-text bg-white border-end-0">
            <Search size={16} className="text-secondary" />
          </span>
          <input
            type="text"
            className="form-control border-start-0 ps-0"
            placeholder="Cerca prodotto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Loading Spinner */}
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center py-5 gap-3">
          <div className="spinner-border text-primary" role="status"></div>
          <span className="fw-medium text-secondary">Caricamento prodotti in corso...</span>
        </div>
      )}

      {/* Nessun prodotto trovato */}
      {!isLoading && filteredProducts.length === 0 && (
        <div className="alert alert-light border text-center py-5 my-4">
          <p className="m-0 text-secondary">Nessun prodotto corrisponde alla tua ricerca.</p>
        </div>
      )}

      {/* Griglia Prodotti */}
      {!isLoading && filteredProducts.length > 0 && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filteredProducts.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100 shadow-sm rounded-3 overflow-hidden">
                {/* Immagine con altezza uniforme */}
                <img
                  className="product-card-img"
                  src={product.thumbnail || product.images?.[0]}
                  alt={product.title}
                />

                <div className="card-body d-flex flex-column">
                  {/* Categoria */}
                  <span className="badge bg-light text-secondary text-uppercase border mb-2 align-self-start small">
                    {product.category}
                  </span>

                  {/* Titolo */}
                  <h6 className="card-title fw-bold text-dark text-truncate" title={product.title}>
                    {product.title}
                  </h6>

                  {/* Prezzo */}
                  <div className="fs-5 fw-bold text-primary mb-3">
                    €{product.price.toFixed(2)}
                  </div>

                  {/* Pulsante info in fondo con mt-auto */}
                  <div className="mt-auto">
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
      )}
    </section>
  );
}
