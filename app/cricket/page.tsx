
import Link from "next/link";

const cricketProducts = [
  {
    id: 1,
    name: "Cricket Jersey",
    price: 2499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Cricket+Jersey",
  },
  {
    id: 2,
    name: "Cricket T-Shirt",
    price: 1999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Cricket+T-Shirt",
  },
  {
    id: 3,
    name: "Cricket Training Pants",
    price: 2999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Cricket+Pants",
  },
  {
    id: 4,
    name: "Cricket Sports Shoes",
    price: 5499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Cricket+Shoes",
  },
];

export default function CricketPage() {
  return (
    <section className="section-container">
      <div className="section-heading">
        <div>
          <span className="section-label">SR/18 CRICKET COLLECTION</span>
          <h2>Cricket Sportswear</h2>
          <p>Gear up for every match. Play like a champion.</p>
        </div>
      </div>

      <div className="product-grid">
        {cricketProducts.map((product) => (
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
