
import Link from "next/link";

const categories = [
  { name: "Men", icon: "🏃", href: "/men", description: "Performance Wear" },
  { name: "Women", icon: "🏋️", href: "/women", description: "Active Lifestyle" },
  { name: "Kids", icon: "⚽", href: "/kids", description: "Young Champions" },
  { name: "Shoes", icon: "👟", href: "/shoes", description: "Step Into Comfort" },
  { name: "Cricket", icon: "🏏", href: "/cricket", description: "Cricket Collection" },
  { name: "Football", icon: "⚽", href: "/football", description: "Football Collection" },
];

const products = [
  {
    id: 1,
    name: "Performance Training T-Shirt",
    category: "Men's Sportswear",
    price: 2499,
    image: "https://placehold.co/600x650/e9edf2/101d35?text=Training+T-Shirt",
  },
  {
    id: 2,
    name: "Women's Active Sports Set",
    category: "Women's Sportswear",
    price: 3999,
    image: "https://placehold.co/600x650/e9edf2/101d35?text=Active+Wear",
  },
  {
    id: 3,
    name: "Premium Running Shoes",
    category: "Sports Shoes",
    price: 5499,
    image: "https://placehold.co/600x650/e9edf2/101d35?text=Running+Shoes",
  },
  {
    id: 4,
    name: "Sports Training Hoodie",
    category: "Men's Collection",
    price: 4499,
    image: "https://placehold.co/600x650/e9edf2/101d35?text=Sports+Hoodie",
  },
];

export default function Home() {
  return (
    <div className="home-page">

      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">SR/18 PREMIUM SPORTSWEAR</span>

          <h1>
            PLAY HARD.
            <br />
            LOOK <span>STRONG.</span>
          </h1>

          <p>
            Discover premium sportswear designed for performance,
            comfort and confidence. Take your game to the next level.
          </p>

          <div className="hero-buttons">
            <Link href="/products" className="primary-btn">
              SHOP NOW →
            </Link>

            <Link href="/products" className="secondary-btn">
              NEW ARRIVALS
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>100%</strong>
              <span>Quality</span>
            </div>

            <div>
              <strong>SR/18</strong>
              <span>Performance</span>
            </div>

            <div>
              <strong>ALL</strong>
              <span>Sports Lovers</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle"></div>
          <div className="hero-brand">SR<span>/18</span></div>
          <p>BUILT FOR PERFORMANCE</p>
        </div>
      </section>

      <section className="section-container">
        <div className="section-heading">
          <div>
            <span className="section-label">EXPLORE OUR COLLECTION</span>
            <h2>Shop By Category</h2>
          </div>

          <Link href="/products" className="view-all">
            View All →
          </Link>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              href={category.href}
              key={category.name}
              className="category-card"
            >
              <span className="category-icon">{category.icon}</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span className="category-link">
                Explore Collection →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-container featured-section">
        <div className="section-heading">
          <div>
            <span className="section-label">OUR BEST PICKS</span>
            <h2>Featured Products</h2>
          </div>

          <Link href="/products" className="view-all">
            View All Products →
          </Link>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <span className="product-badge">FEATURED</span>
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <span>{product.category}</span>
                <h3>{product.name}</h3>

                <div className="product-bottom">
                  <strong>
                    Rs. {product.price.toLocaleString("en-PK")}
                  </strong>

                  <Link href={`/products/${product.id}`}>
                    View Product →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="promo-banner">
        <div className="promo-content">
          <span>SR/18 EXCLUSIVE COLLECTION</span>
          <h2>
            GEAR UP.
            <br />
            LEVEL UP.
          </h2>

          <p>
            Your performance deserves the best.
            Explore our latest sportswear collection.
          </p>

          <Link href="/products" className="promo-btn">
            EXPLORE COLLECTION →
          </Link>
        </div>

        <div className="promo-logo">
          SR<span>/18</span>
        </div>
      </section>

      <section className="benefits-section">
        <div className="benefit">
          <span>✦</span>
          <h3>Premium Quality</h3>
          <p>Quality products for your active lifestyle.</p>
        </div>

        <div className="benefit">
          <span>🚚</span>
          <h3>Fast Delivery</h3>
          <p>Get your favourite sportswear delivered.</p>
        </div>

        <div className="benefit">
          <span>↩</span>
          <h3>Easy Shopping</h3>
          <p>A simple and convenient shopping experience.</p>
        </div>
      </section>

    </div>
  );
}
