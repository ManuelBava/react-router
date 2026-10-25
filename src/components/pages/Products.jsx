import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);
        await Promise.all(
          data.products.map((product) => {
            return new Promise((resolve) => {
              if (!product.images[0]) return resolve();
              // questa costante non usata  serve a fare il "pre-caricamento" (preloading)
              // delle immagini nella cache del browser. Non importa se l'immagine è visibile a schermo o no: per il browser impostare un .src significa "scarica subito questa risorsa".
              const img = new Image();
              img.src = product.images[0];
              img.onload = resolve;
              img.onerror = resolve; // se una singola immagine fallisce, non blocca l'applicazione
            });
          }),
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

  return (
    <section>
      <h2>I nostri prodotti:</h2>
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center py-5 gap-3">
          <div className="spinner-border text-primary" role="status"></div>
          <span>Loading products...</span>
        </div>
      )}
      {!isLoading && (
        <div className="row row-cols-3 g-4 mt-3">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <div className="card-body">
                  <img
                    className="card-img-top"
                    src={product.images[0]}
                    alt={product.title}
                  />
                  <h3>{product.title}</h3>
                  <Link to={`/product/${product.id}`}>Product info</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
