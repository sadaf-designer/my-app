
import Link from "next/link";

const menProducts = [
  {
    id: 1,
    name: "Men's Training T-Shirt",
    price: 2499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Training+T-Shirt",
  },
  {
    id: 2,
    name: "Men's Sports Hoodie",
    price: 4499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Sports+Hoodie",
  },
  {
    id: 3,
    name: "Men's Gym Tracksuit",
    price: 4999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Gym+Tracksuit",
  },
  {
    id: 4,
    name: "Men's Running Shoes",
    price: 5499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Running+Shoes",
  },
];

export default function MenPage() {
  return (
    <section className="section-container">
      <div className="section-heading">
        <div>
          <span className="section-label">SR/18 COLLECTION</span>
          <h2>Men's Sportswear</h2>
          <p>Performance meets style. Explore our men's collection.</p>
        </div>
      </div>

      <div className="product-grid">
        {menProducts.map((product) => (
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
