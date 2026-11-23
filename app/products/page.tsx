
import Link from "next/link";

const products = [
  { id: 1, name: "Performance Training T-Shirt", category: "Men", price: 2499, image: "/images/main/traning%20t-shirt.jpg" },
  { id: 2, name: "Premium Sports Hoodie", category: "Men", price: 4499, image: "/images/main/sports%20hoodie.jpg" },
  { id: 3, name: "Premium Running Shoes", category: "Shoes", price: 5499, image: "/images/main/shoes.jpg" },
  { id: 4, name: "Men's Sports Joggers", category: "Men", price: 2999, image: "/images/main/joggers.jpg" },
  { id: 5, name: "Women's Active Sports Set", category: "Women", price: 3999, image: "/images/main/women-set.jpg" },
  { id: 6, name: "Women's Sports Leggings", category: "Women", price: 2499, image: "/images/main/leggings.jpg" },
  { id: 7, name: "Cricket Sports Jersey", category: "Cricket", price: 2799, image: "/images/main/cricket-jersey.jpg" },
  { id: 8, name: "Football Jersey", category: "Football", price: 2999, image: "/images/main/football-jersey.jpg" },
  { id: 9, name: "Sports Running Shoes", category: "Shoes", price: 6499, image: "/images/main/running-shoes.jpg" },
  { id: 10, name: "SR/18 Sports Cap", category: "Accessories", price: 1299, image: "/images/main/cap.jpg" },
];

export default function ProductsPage() {
  return (
    <section className="section-container">
      <div className="section-heading">
        <div>
          <span className="section-label">SR/18 COLLECTION</span>
          <h2>All Products</h2>
          <p>Explore our complete sportswear collection.</p>
        </div>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div
            className="product-card"
            key={product.id}
            style={{
              display: "flex",
              flexDirection: "column",
              minWidth: 0,
              overflow: "hidden",
              height: "auto",
            }}
          >
            <div
              className="product-image"
              style={{
                position: "relative",
                width: "100%",
                height: "220px",
                flexShrink: 0,
              }}
            >
              <span className="product-badge">SR/18</span>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            <div
              className="product-info"
              style={{
                display: "flex",
                flexDirection: "column",
                position: "static",
                width: "100%",
                minWidth: 0,
                padding: "12px",
                backgroundColor: "#ffffff",
                textAlign: "left",
                boxSizing: "border-box",
              }}
            >
              <span style={{ color: "#777", fontSize: "12px" }}>
                {product.category}
              </span>

              <h3
                style={{
                  position: "static",
                  display: "block",
                  width: "100%",
                  color: "#101d35",
                  fontSize: "15px",
                  lineHeight: "1.4",
                  fontWeight: 600,
                  margin: "7px 0 10px",
                  textAlign: "left",
                  whiteSpace: "normal",
                  overflow: "visible",
                  transform: "none",
                }}
              >
                {product.name}
              </h3>

              <div
                className="product-bottom"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "auto",
                }}
              >
                <strong style={{ color: "#0b9b83", fontSize: "14px" }}>
                  Rs. {product.price.toLocaleString("en-PK")}
                </strong>

                <Link
                  href={`/products/${product.id}`}
                  style={{ fontSize: "12px" }}
                >
                  View Product →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
