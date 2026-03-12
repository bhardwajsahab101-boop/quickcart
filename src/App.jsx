import React from "react";
import Header from "./components/Header";
import Productlist from "./components/Productlist";
import { products } from "./data/products";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Productlist products={products} />
      </main>
    </div>
  );
}

export default App;
