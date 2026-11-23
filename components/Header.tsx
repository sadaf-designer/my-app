"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const toggleMobileSubmenu = (menu: string) => {
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        {/* LOGO */}
        <Link href="/" className="logo" onClick={closeMobileMenu}>
          SR<span>/18</span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="main-nav desktop-only" aria-label="Main Navigation">
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
              aria-haspopup="true"
              aria-expanded={openMenu === "categories"}
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
              aria-haspopup="true"
              aria-expanded={openMenu === "sportswear"}
            >
              Sportswear ▾
            </button>

            <div className="dropdown-menu">
              <Link href="/mens-sportswear" onClick={() => setOpenMenu(null)}>
                {"Men's Sportswear"}
              </Link>
              <Link href="/womens-sportswear" onClick={() => setOpenMenu(null)}>
                {"Women's Sportswear"}
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

        {/* DESKTOP ACTIONS */}
        <div className="header-actions desktop-only">
          <Link href="/login">Login</Link>

          <Link href="/wishlist" className="wishlist-icon" aria-label="Wishlist">
            ♥
          </Link>

          <div className="header-search">
            <input type="text" placeholder="Search products..." aria-label="Search products" />
            <button type="button" aria-label="Submit search">⌕</button>
          </div>

          <Link href="/cart">Cart</Link>
        </div>

        {/* MOBILE CONTROLS (ICONS + HAMBURGER) */}
        <div className="mobile-header-bar mobile-only">
          <Link href="/wishlist" className="wishlist-icon mobile-action-icon" aria-label="Wishlist" onClick={closeMobileMenu}>
            ♥
          </Link>

          <Link href="/cart" className="mobile-action-icon" aria-label="Cart" onClick={closeMobileMenu}>
            Cart
          </Link>

          <button
            type="button"
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE BACKDROP & SLIDEOUT DRAWER */}
      {mobileMenuOpen && (
        <div className="mobile-backdrop" onClick={closeMobileMenu} />
      )}

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-search-box">
          <input type="text" placeholder="Search sportswear..." aria-label="Search sportswear" />
          <button type="button" aria-label="Search">⌕</button>
        </div>

        <nav className="mobile-nav-links">
          <Link href="/" onClick={closeMobileMenu}>Home</Link>
          <Link href="/products" onClick={closeMobileMenu}>Shop</Link>

          {/* MOBILE CATEGORIES ACCORDION */}
          <div className="mobile-accordion">
            <button
              type="button"
              className="mobile-accordion-trigger"
              onClick={() => toggleMobileSubmenu("categories")}
            >
              <span>Categories</span>
              <span className={`arrow ${mobileSubmenu === "categories" ? "up" : ""}`}>▾</span>
            </button>
            {mobileSubmenu === "categories" && (
              <div className="mobile-accordion-content">
                <Link href="/men" onClick={closeMobileMenu}>Men</Link>
                <Link href="/women" onClick={closeMobileMenu}>Women</Link>
                <Link href="/kids" onClick={closeMobileMenu}>Kids</Link>
              </div>
            )}
          </div>

          {/* MOBILE SPORTSWEAR ACCORDION */}
          <div className="mobile-accordion">
            <button
              type="button"
              className="mobile-accordion-trigger"
              onClick={() => toggleMobileSubmenu("sportswear")}
            >
              <span>Sportswear</span>
              <span className={`arrow ${mobileSubmenu === "sportswear" ? "up" : ""}`}>▾</span>
            </button>
            {mobileSubmenu === "sportswear" && (
              <div className="mobile-accordion-content">
                <Link href="/mens-sportswear" onClick={closeMobileMenu}>
                  {"Men's Sportswear"}
                </Link>
                <Link href="/womens-sportswear" onClick={closeMobileMenu}>
                  {"Women's Sportswear"}
                </Link>
                <Link href="/caps" onClick={closeMobileMenu}>Caps</Link>
                <Link href="/clothing" onClick={closeMobileMenu}>Clothing</Link>
                <Link href="/sports-jerseys" onClick={closeMobileMenu}>Sports Jerseys</Link>
              </div>
            )}
          </div>

          <Link href="/new-arrivals" onClick={closeMobileMenu}>New Arrivals</Link>
          <Link href="/sale" onClick={closeMobileMenu}>Sale</Link>
          <Link href="/about" onClick={closeMobileMenu}>About Us</Link>
          <Link href="/contact" onClick={closeMobileMenu}>Contact Us</Link>
          <Link href="/login" onClick={closeMobileMenu} className="mobile-login-link">
            Account / Login →
          </Link>
        </nav>
      </div>
    </header>
  );
}
