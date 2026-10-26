import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import Products from "./components/pages/Products";
import Contacts from "./components/pages/Contacts";
import DefaultLayout from "./components/layout/DefaultLayout";
import Product from "./components/pages/Product";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="container my-4">
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/product/:id" element={<Product />} />
            {/* l'asterisco indica che qualsiasi percorso che non è tra quelli già collegati ci reindirizzerà al componente not found page */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
