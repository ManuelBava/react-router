import { useEffect } from "react";
import { useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      async function getProducts() {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        console.log(data);

        setProducts(data.products);
      }
      getProducts();
    } catch (e) {
      console.log(e.message);
    }
  }, []);

  return (
    <section>
      <h2>I nostri prodotti:</h2>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
