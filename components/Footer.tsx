
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div>
          <h2>SR<span>/18</span></h2>
          <p>Built for performance. Designed for champions.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link href="/">Home</Link>
          <Link href="/products">Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer-links">
          <h3>Categories</h3>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/shoes">Shoes</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SR/18. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
