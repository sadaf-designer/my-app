
"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Performance Training T-Shirt",
    category: "Men's Sportswear",
    price: 2499,
    image: "https://placehold.co/600x650/e9edf2/101d35?text=Training+T-Shirt",
    description:
      "Comfortable and lightweight sports T-shirt, designed for everyday training and performance.",
  },
  {
    id: 2,
    name: "Women's Active Sports Set",
    category: "Women's Sportswear",
    price: 3999,
    image: "https://placehold.co/600x650/e9edf2/101d35?text=Active+Wear",
    description:
      "Stylish and comfortable activewear set for workouts and an active lifestyle.",
  },
  {
    id: 3,
    name: "Premium Running Shoes",
    category: "Sports Shoes",
    price: 5499,
    image: "https://placehold.co/600x650/e9edf2/101d35?text=Running+Shoes",
    description:
      "Lightweight running shoes designed for comfort, support and daily training.",
  },
  {
    id: 4,
    name: "Sports Training Hoodie",
    category: "Men's Collection",
    price: 4499,
    image: "https://placehold.co/600x650/e9edf2/101d35?text=Sports+Hoodie",
    description:
      "Premium sports hoodie with a comfortable fit for training and casual wear.",
  },
];

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  const [selectedSize, setSelectedSize] = useState("M");

  const product = products.find((item) => item.id === id);

  function addToCart() {
    if (!product) return;

    const savedCart = localStorage.getItem("sr18-cart");
    const cart = savedCart ? JSON.parse(savedCart) : [];

    cart.push({
      ...product,
      size: selectedSize,
      quantity: 1,
    });

    localStorage.setItem("sr18-cart", JSON.stringify(cart));

    router.push("/cart");
  }

  if (!product) {
    return (
      <div className="section-container">
        <h2>Product Not Found</h2>
        <Link href="/products">Back to Products</Link>
      </div>
    );
  }

  return (
    <section className="section-container">
      <div className="product-details-layout">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-info">
          <span className="section-label">{product.category}</span>

          <h1>{product.name}</h1>

          <h2>
            Rs. {product.price.toLocaleString("en-PK")}
          </h2>

          <p>{product.description}</p>

          <h3>Select Size</h3>

          <div className="size-options">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={
                  selectedSize === size ? "selected-size" : ""
                }
              >
                {size}
              </button>
            ))}
          </div>

          <button className="primary-btn" onClick={addToCart}>
            ADD TO CART
          </button>

          <p>Premium Quality | SR/18 Sportswear</p>

          <Link href="/products">← Back to Products</Link>
        </div>
      </div>
    </section>
  );
}
