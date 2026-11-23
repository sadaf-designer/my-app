
import Link from "next/link";

const shoesProducts = [
  {
    id: 1,
    name: "Premium Running Shoes",
    price: 5499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Running+Shoes",
  },
  {
    id: 2,
    name: "Training Sports Shoes",
    price: 4999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Training+Shoes",
  },
  {
    id: 3,
    name: "Men's Casual Sneakers",
    price: 3999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Casual+Sneakers",
  },
  {
    id: 4,
    name: "Women's Active Shoes",
    price: 4599,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Active+Shoes",
  },
];

export default function ShoesPage() {
  return (
    <section className="section-container">
      <div className="section-heading">
        <div>
          <span className="section-label">SR/18 FOOTWEAR</span>
          <h2>Sports Shoes Collection</h2>
          <p>Every step matters. Find your perfect pair.</p>
        </div>
      </div>

      <div className="product-grid">
        {shoesProducts.map((product) => (
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
