
import Link from "next/link";

const productSections = [
  {
    title: "Men's Sports Caps",
    subtitle: "Sporty caps for everyday performance",
    products: [
      { id: 63, name: "Classic Men's Sports Cap", price: "Rs. 1,299", image: "/images/main/mens-sports-cap.jpg" },
      { id: 64, name: "Performance Sports Cap", price: "Rs. 1,499", image: "/images/main/performance-cap.jpg" },
      { id: 65, name: "Premium Men's Cap", price: "Rs. 1,599", image: "/images/main/premium-mens-cap.jpg" },
      { id: 66, name: "Lightweight Training Cap", price: "Rs. 1,199", image: "/images/main/training-cap.jpg" },
    ],
  },
  {
    title: "Women's Caps",
    subtitle: "Comfortable and stylish everyday caps",
    products: [
      { id: 67, name: "Women's Sports Cap", price: "Rs. 1,299", image: "/images/main/womens-sports-cap.jpg" },
      { id: 68, name: "Women's Running Cap", price: "Rs. 1,399", image: "/images/main/womens-running-cap.jpg" },
      { id: 69, name: "Women's Premium Cap", price: "Rs. 1,599", image: "/images/main/womens-premium-cap.jpg" },
    ],
  },
  {
    title: "Baseball Caps",
    subtitle: "Classic sporty looks with a modern touch",
    products: [
      { id: 70, name: "Classic Baseball Cap", price: "Rs. 1,299", image: "/images/main/baseball-cap.jpg" },
      { id: 71, name: "SR/18 Baseball Cap", price: "Rs. 1,499", image: "/images/main/sr18-baseball-cap.jpg" },
      { id: 72, name: "Premium Baseball Cap", price: "Rs. 1,699", image: "/images/main/premium-baseball-cap.jpg" },
    ],
  },
  {
    title: "Running Caps",
    subtitle: "Lightweight comfort for outdoor activities",
    products: [
      { id: 73, name: "Lightweight Running Cap", price: "Rs. 1,199", image: "/images/main/running-cap.jpg" },
      { id: 74, name: "Breathable Running Cap", price: "Rs. 1,399", image: "/images/main/breathable-cap.jpg" },
      { id: 75, name: "Performance Running Cap", price: "Rs. 1,499", image: "/images/main/performance-running-cap.jpg" },
    ],
  },
  {
    title: "Adjustable Caps",
    subtitle: "A comfortable fit for everyone",
    products: [
      { id: 76, name: "Adjustable Sports Cap", price: "Rs. 1,299", image: "/images/main/adjustable-cap.jpg" },
      { id: 77, name: "Snapback Adjustable Cap", price: "Rs. 1,599", image: "/images/main/snapback-cap.jpg" },
      { id: 78, name: "Premium Adjustable Cap", price: "Rs. 1,699", image: "/images/main/premium-adjustable-cap.jpg" },
    ],
  },
];

export default function CapsPage() {
  return (
    <main
      style={{
        background: "#f7f8fa",
        minHeight: "100vh",
        padding: "45px 5%",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "45px" }}>
        <p style={{ color: "#0b9b8a", fontWeight: 700, letterSpacing: "3px" }}>
          SR/18 COLLECTION
        </p>

        <h1 style={{ color: "#101d35", fontSize: "38px", fontWeight: 800, margin: "10px 0" }}>
          Sports Caps
        </h1>

        <p style={{ color: "#666", fontSize: "16px" }}>
          Complete your sporty look with SR/18 caps.
        </p>
      </div>

      {productSections.map((section) => (
        <section key={section.title} style={{ marginBottom: "60px" }}>
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ color: "#101d35", fontSize: "27px", fontWeight: 800, marginBottom: "7px" }}>
              {section.title}
            </h2>

            <p style={{ color: "#777", fontSize: "14px" }}>
              {section.subtitle}
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: "22px",
            }}
          >
            {section.products.map((product) => (
              <div
                key={product.id}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #e5e8ee",
                }}
              >
                <div style={{ height: "230px", background: "#f0f2f5", position: "relative" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />

                  <span
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      background: "#0b9b8a",
                      color: "white",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      fontSize: "11px",
                      fontWeight: 700,
                    }}
                  >
                    SR/18
                  </span>
                </div>

                <div style={{ padding: "16px" }}>
                  <h3 style={{ color: "#101d35", fontSize: "16px", fontWeight: 700, marginBottom: "10px" }}>
                    {product.name}
                  </h3>

                  <p style={{ color: "#0b9b8a", fontWeight: 800, fontSize: "16px", marginBottom: "14px" }}>
                    {product.price}
                  </p>

                  <Link
                    href={`/products/${product.id}`}
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: "#101d35",
                      color: "white",
                      padding: "10px",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: 700,
                    }}
                  >
                    View Product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
