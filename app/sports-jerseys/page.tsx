
import Link from "next/link";

const productSections = [
  {
    title: "Cricket Jerseys",
    subtitle: "Represent your passion for cricket",
    products: [
      { id: 80, name: "SR/18 Cricket Jersey", price: "Rs. 2,799", image: "/images/main/cricket-jersey.jpg" },
      { id: 81, name: "Pakistan Style Cricket Jersey", price: "Rs. 2,999", image: "/images/main/pakistan-cricket-jersey.jpg" },
      { id: 82, name: "Premium Cricket Jersey", price: "Rs. 3,499", image: "/images/main/premium-cricket-jersey.jpg" },
      { id: 83, name: "Cricket Training Jersey", price: "Rs. 2,499", image: "/images/main/cricket-training-jersey.jpg" },
    ],
  },
  {
    title: "Football Jerseys",
    subtitle: "Performance and style on the football field",
    products: [
      { id: 84, name: "Classic Football Jersey", price: "Rs. 2,799", image: "/images/main/football-jersey.jpg" },
      { id: 85, name: "Premium Football Jersey", price: "Rs. 3,299", image: "/images/main/premium-football-jersey.jpg" },
      { id: 86, name: "Football Training Jersey", price: "Rs. 2,499", image: "/images/main/football-training-jersey.jpg" },
      { id: 87, name: "Team Football Jersey", price: "Rs. 3,499", image: "/images/main/team-football-jersey.jpg" },
    ],
  },
  {
    title: "Basketball Jerseys",
    subtitle: "Lightweight comfort for every game",
    products: [
      { id: 88, name: "Classic Basketball Jersey", price: "Rs. 2,799", image: "/images/main/basketball-jersey.jpg" },
      { id: 89, name: "Premium Basketball Jersey", price: "Rs. 3,299", image: "/images/main/premium-basketball-jersey.jpg" },
      { id: 90, name: "Training Basketball Jersey", price: "Rs. 2,499", image: "/images/main/basketball-training-jersey.jpg" },
    ],
  },
  {
    title: "Training Jerseys",
    subtitle: "Stay comfortable during every workout",
    products: [
      { id: 91, name: "Performance Training Jersey", price: "Rs. 2,499", image: "/images/main/performance-jersey.jpg" },
      { id: 92, name: "Quick Dry Sports Jersey", price: "Rs. 2,799", image: "/images/main/quick-dry-jersey.jpg" },
      { id: 93, name: "Gym Training Jersey", price: "Rs. 2,299", image: "/images/main/gym-jersey.jpg" },
    ],
  },
  {
    title: "Custom Team Jerseys",
    subtitle: "A matching look for your entire team",
    products: [
      { id: 94, name: "Custom Cricket Team Kit", price: "Rs. 3,999", image: "/images/main/custom-cricket-kit.jpg" },
      { id: 95, name: "Custom Football Team Kit", price: "Rs. 4,499", image: "/images/main/custom-football-kit.jpg" },
      { id: 96, name: "Custom Sports Team Jersey", price: "Rs. 3,499", image: "/images/main/custom-team-jersey.jpg" },
    ],
  },
];

export default function SportsJerseysPage() {
  return (
    <main
      style={{
        background: "#f7f8fa",
        minHeight: "100vh",
        padding: "45px 5%",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "45px" }}>
        <p
          style={{
            color: "#0b9b8a",
            fontWeight: 700,
            letterSpacing: "3px",
          }}
        >
          SR/18 COLLECTION
        </p>

        <h1
          style={{
            color: "#101d35",
            fontSize: "38px",
            fontWeight: 800,
            margin: "10px 0",
          }}
        >
          Sports Jerseys
        </h1>

        <p style={{ color: "#666", fontSize: "16px" }}>
          Explore premium sports jerseys made for champions.
        </p>
      </div>

      {productSections.map((section) => (
        <section key={section.title} style={{ marginBottom: "60px" }}>
          <div style={{ marginBottom: "22px" }}>
            <h2
              style={{
                color: "#101d35",
                fontSize: "27px",
                fontWeight: 800,
                marginBottom: "7px",
              }}
            >
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
                  transition: "0.3s",
                }}
              >
                <div
                  style={{
                    height: "230px",
                    background: "#f0f2f5",
                    position: "relative",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
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
                  <h3
                    style={{
                      color: "#101d35",
                      fontSize: "16px",
                      fontWeight: 700,
                      marginBottom: "10px",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      color: "#0b9b8a",
                      fontWeight: 800,
                      fontSize: "16px",
                      marginBottom: "14px",
                    }}
                  >
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
