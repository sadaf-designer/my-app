
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="site-header">
      <div className="header-container">

        {/* LOGO */}
        <Link href="/" className="logo">
          SR<span>/18</span>
        </Link>

        {/* NAVIGATION */}
        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/products">Shop</Link>

          {/* CATEGORIES DROPDOWN */}
          <div
            className={`nav-dropdown ${openMenu === "categories" ? "active" : ""}`}
            onMouseEnter={() => setOpenMenu("categories")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              className="dropdown-trigger"
              onClick={() =>
                setOpenMenu(openMenu === "categories" ? null : "categories")
              }
            >
              Categories ▾
            </button>

            <div className="dropdown-menu">
              <Link href="/men" onClick={() => setOpenMenu(null)}>Men</Link>
              <Link href="/women" onClick={() => setOpenMenu(null)}>Women</Link>
              <Link href="/kids" onClick={() => setOpenMenu(null)}>Kids</Link>
            </div>
          </div>

          {/* SPORTSWEAR DROPDOWN */}
          <div
            className={`nav-dropdown ${openMenu === "sportswear" ? "active" : ""}`}
            onMouseEnter={() => setOpenMenu("sportswear")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              type="button"
              className="dropdown-trigger"
              onClick={() =>
                setOpenMenu(openMenu === "sportswear" ? null : "sportswear")
              }
            >
              Sportswear ▾
            </button>

            <div className="dropdown-menu">
              <Link href="/mens-sportswear" onClick={() => setOpenMenu(null)}>
                Men's Sportswear
              </Link>

              <Link href="/womens-sportswear" onClick={() => setOpenMenu(null)}>
                Women's Sportswear
              </Link>

              <Link href="/caps" onClick={() => setOpenMenu(null)}>
                Caps
              </Link>

              <Link href="/clothing" onClick={() => setOpenMenu(null)}>
                Clothing
              </Link>

              <Link href="/sports-jerseys" onClick={() => setOpenMenu(null)}>
                Sports Jerseys
              </Link>
            </div>
          </div>

          <Link href="/new-arrivals">New Arrivals</Link>
          <Link href="/sale">Sale</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="header-actions">
          <Link href="/login">Login</Link>

          <Link href="/wishlist" className="wishlist-icon">
            ♥
          </Link>

          <div className="header-search">
            <input type="text" placeholder="Search products..." />
            <button type="button">⌕</button>
          </div>

          <Link href="/cart">Cart</Link>
        </div>

      </div>
    </header>
  );
}
