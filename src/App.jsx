import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./components/pages/HomePage";
import Products from "./components/pages/Products";
import Contacts from "./components/pages/Contacts";
import DefaultLayout from "./components/layout/DefaultLayout";
import Product from "./components/pages/Product";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
