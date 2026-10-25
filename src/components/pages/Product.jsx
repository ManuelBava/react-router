import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (e) {
        console.log(e.message);
      }
    }
    getProduct();
  }, [id]);

  return <section></section>;
}
