
import Link from "next/link";

const saleProducts = [
  {
    id: 1,
    name: "Performance Training T-Shirt",
    price: 1999,
    oldPrice: 2499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Training+T-Shirt",
  },
  {
    id: 2,
    name: "Women's Active Sports Set",
    price: 2999,
    oldPrice: 3999,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Active+Wear",
  },
  {
    id: 3,
    name: "Premium Running Shoes",
    price: 4499,
    oldPrice: 5499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Running+Shoes",
  },
  {
    id: 4,
    name: "Sports Training Hoodie",
    price: 3499,
    oldPrice: 4499,
    image: "https://placehold.co/500x550/e9edf2/101d35?text=Sports+Hoodie",
  },
];

export default function SalePage() {
  return (
    <section className="section-container">
      <div className="section-heading">
        <div>
          <span className="section-label">SPECIAL OFFERS</span>
          <h2>SR/18 Sale Collection</h2>
          <p>Get your favourite sportswear at special prices.</p>
        </div>
      </div>

      <div className="product-grid">
        {saleProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <Link href={`/products/${product.id}`}>
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <span className="sale-badge">SALE</span>
                <h3>{product.name}</h3>

                <p>
                  <strong>
                    Rs. {product.price.toLocaleString("en-PK")}
                  </strong>
                </p>

                <p>
                  <del>
                    Rs. {product.oldPrice.toLocaleString("en-PK")}
                  </del>
                </p>

                <span className="primary-btn">View Product</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
