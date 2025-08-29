import { Route, Routes } from "react-router-dom";
import "./index.css";
import React from "react";
import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ContactPage from "./pages/Contact/Contact";
import NotFoundPage from "./pages/Not Found/NotFound";
import ProductsPage from "./pages/Products/Products";
import ProductDetail from "./pages/Product Details/ProductDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
