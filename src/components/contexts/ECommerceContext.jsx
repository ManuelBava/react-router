import { useState, useEffect, useContext, createContext } from "react";

const ECommerceContext = createContext();

export default function ECommerceContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [isAdded, setIsAdded] = useState(false);

  // Monitora e stampa l'array del carrello ogni volta che cambia
  useEffect(() => {
    console.log("Carrello aggiornato (stato):", cartProducts);
  }, [cartProducts]);

  // Gestione click "Aggiungi al Carrello" con gestione quantità
  const handleAddToCart = (product) => {
    console.log("Pulsante cliccato! Prodotto aggiunto:", product);
    setIsAdded(true);
    setCartProducts((prevProducts) => {
      const existingItem = prevProducts.find((item) => item.id === product.id);
      if (existingItem) {
        return prevProducts.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevProducts, { ...product, quantity: 1 }];
    });
    setTimeout(() => setIsAdded(false), 2000);
  };

  // Incrementa la quantità di un prodotto esistente
  const handleIncreaseQuantity = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === productId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  // Decrementa la quantità di un prodotto (rimuove se scende a 0)
  const handleDecreaseQuantity = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Rimuove un prodotto dal carrello
  const handleRemoveFromCart = (productId) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== productId)
    );
  };

  // Conteggio totale pezzi nel carrello (somma delle quantità)
  const totalCartItems = cartProducts.reduce(
    (acc, item) => acc + (item.quantity || 1),
    0
  );

  return (
    <ECommerceContext.Provider
      value={{
        handleAddToCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        handleRemoveFromCart,
        isAdded,
        cartProducts,
        cartProductsLength: totalCartItems,
        totalCartItems,
      }}
    >
      {children}
    </ECommerceContext.Provider>
  );
}

export function useECommerceContext() {
  const context = useContext(ECommerceContext);
  if (!context)
    throw new Error("the component must be inside the context wrapper");
  return context;
}
