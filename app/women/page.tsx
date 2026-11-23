
import Link from "next/link";

const womenProducts = [
  {
    id: 1,
    name: "Women's Active Sports Set",
    price: 3999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Active+Sports+Set",
  },
  {
    id: 2,
    name: "Women's Training T-Shirt",
    price: 2499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Training+T-Shirt",
  },
  {
    id: 3,
    name: "Women's Gym Leggings",
    price: 2999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Gym+Leggings",
  },
  {
    id: 4,
    name: "Women's Running Shoes",
    price: 5499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Running+Shoes",
  },
];

export default function WomenPage() {
  return (
    <section className="section-container">
      <div className="section-heading">
        <div>
          <span className="section-label">SR/18 COLLECTION</span>
          <h2>Women's Sportswear</h2>
          <p>Move with confidence. Explore our women's collection.</p>
        </div>
      </div>

      <div className="product-grid">
        {womenProducts.map((product) => (
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
