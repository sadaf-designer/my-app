
import Link from "next/link";

const footballProducts = [
  {
    id: 1,
    name: "Football Jersey",
    price: 2499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Football+Jersey",
  },
  {
    id: 2,
    name: "Football Shorts",
    price: 1499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Football+Shorts",
  },
  {
    id: 3,
    name: "Football Training Tracksuit",
    price: 3999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Football+Tracksuit",
  },
  {
    id: 4,
    name: "Football Sports Shoes",
    price: 5999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Football+Shoes",
  },
];

export default function FootballPage() {
  return (
    <section className="section-container">
      <div className="section-heading">
        <div>
          <span className="section-label">SR/18 FOOTBALL COLLECTION</span>
          <h2>Football Sportswear</h2>
          <p>Train harder. Play stronger. Own the game.</p>
        </div>
      </div>

      <div className="product-grid">
        {footballProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link href={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>Rs. {product.price.toLocaleString("en-PK")}</p>
                <span className="primary-btn">View Product</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
