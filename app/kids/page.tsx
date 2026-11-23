
import Link from "next/link";

const kidsProducts = [
  {
    id: 1,
    name: "Kids Sports T-Shirt",
    price: 1499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Kids+T-Shirt",
  },
  {
    id: 2,
    name: "Kids Sports Tracksuit",
    price: 2999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Kids+Tracksuit",
  },
  {
    id: 3,
    name: "Kids Training Shorts",
    price: 1299,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Kids+Shorts",
  },
  {
    id: 4,
    name: "Kids Running Shoes",
    price: 3499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Kids+Shoes",
  },
];

export default function KidsPage() {
  return (
    <section className="section-container">
      <div className="section-heading">
        <div>
          <span className="section-label">SR/18 COLLECTION</span>
          <h2>Kids Sportswear</h2>
          <p>Comfort, energy and style for young champions.</p>
        </div>
      </div>

      <div className="product-grid">
        {kidsProducts.map((product) => (
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
