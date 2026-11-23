
import Link from "next/link";

const newProducts = [
  {
    id: 1,
    name: "SR/18 Premium Training T-Shirt",
    price: 2799,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=New+Training+T-Shirt",
  },
  {
    id: 2,
    name: "SR/18 Women's Activewear",
    price: 3999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=New+Activewear",
  },
  {
    id: 3,
    name: "SR/18 Performance Hoodie",
    price: 4499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=New+Hoodie",
  },
  {
    id: 4,
    name: "SR/18 Running Shoes",
    price: 5999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=New+Shoes",
  },
  {
    id: 5,
    name: "SR/18 Sports Tracksuit",
    price: 4999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=New+Tracksuit",
  },
  {
    id: 6,
    name: "SR/18 Training Shorts",
    price: 1999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=New+Shorts",
  },
];

export default function NewArrivalsPage() {
  return (
    <section className="section-container">
      <div className="section-heading">
        <div>
          <span className="section-label">JUST DROPPED</span>
          <h2>New Arrivals</h2>
          <p>Discover the latest styles from SR/18.</p>
        </div>
      </div>

      <div className="product-grid">
        {newProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link href={`/products/${product.id}`}>
              <div style={{ position: "relative" }}>
                <img src={product.image} alt={product.name} />

                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "#0b9b83",
                    color: "white",
                    padding: "7px 12px",
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  NEW
                </span>
              </div>

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
