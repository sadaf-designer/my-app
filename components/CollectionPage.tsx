
"use client";

import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";

export default function CollectionPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Men",
    "Women",
    "Kids",
    "Shoes",
    "Cricket",
    "Football",
    "Accessories",
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <main className="collection-page">
      <section className="listing-header">
        <span>SR/18 SPORTSWEAR</span>
        <h1>Our Collection</h1>
        <p>
          Discover premium sportswear designed for performance
          and everyday comfort.
        </p>
      </section>

      <section className="listing-container">
        <h2 className="collection-title">All Products</h2>

        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category ? "active" : ""
              }
            >
              {category}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </section>
    </main>
  );
}
