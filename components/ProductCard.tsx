
"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleWishlist?: (product: Product) => void;
}

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const discounted = product.salePrice !== undefined;

  const handleWishlist = () => {
    setIsWishlisted((previous) => !previous);
    onToggleWishlist?.(product);
  };

  return (
    <div className="product-card">

      {/* Product Image */}
      <div className="product-image">

        {discounted && (
          <span className="sale-badge">
            SALE
          </span>
        )}

        <button
          className={`wishlist-btn ${isWishlisted ? "wishlisted" : ""}`}
          onClick={handleWishlist}
          aria-label="Toggle wishlist"
          type="button"
        >
          {isWishlisted ? "♥" : "♡"}
        </button>

        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
          />
        ) : (
          <div className="image-placeholder">
            <span>SR/18</span>
            <small>SPORTSWEAR</small>
          </div>
        )}

      </div>

      {/* Product Information */}
      <div className="product-info">

        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="product-description">
          {product.description}
        </p>

        {/* Product Sizes */}
        <div className="product-sizes">
          <span>Available Sizes:</span>

          <div className="sizes-list">
            {product.sizes.map((size) => (
              <span key={size} className="size-item">
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Product Price */}
        <div className="product-price">
          <strong>
            Rs. {(product.salePrice ?? product.price).toLocaleString("en-PK")}
          </strong>

          {discounted && (
            <del>
              Rs. {product.price.toLocaleString("en-PK")}
            </del>
          )}
        </div>

        {/* Product Buttons */}
        <div className="product-actions">

          <button
            className="add-cart-btn"
            type="button"
            onClick={() => onAddToCart?.(product)}
          >
            Add to Cart
          </button>

          <Link
            href={`/products/${product.id}`}
            className="details-btn"
          >
            Details
          </Link>

        </div>

      </div>
    </div>
  );
}
