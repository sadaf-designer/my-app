
import Link from "next/link";

const productSections = [
  {
    title: "Women's Shoes",
    subtitle: "Comfort and performance for every activity",
    products: [
      { id: 31, name: "Women's Running Shoes", price: "Rs. 5,499", image: "/images/main/women-running-shoes.jpg" },
      { id: 32, name: "Women's Training Shoes", price: "Rs. 4,999", image: "/images/main/women-training-shoes.jpg" },
      { id: 33, name: "Women's Gym Shoes", price: "Rs. 4,499", image: "/images/main/women-gym-shoes.jpg" },
      { id: 34, name: "Women's Walking Shoes", price: "Rs. 3,999", image: "/images/main/women-walking-shoes.jpg" },
      { id: 35, name: "Casual Sports Sneakers", price: "Rs. 4,799", image: "/images/main/women-sneakers.jpg" },
      { id: 36, name: "Lightweight Running Shoes", price: "Rs. 5,799", image: "/images/main/women-light-shoes.jpg" },
      { id: 37, name: "Premium Sports Shoes", price: "Rs. 6,499", image: "/images/main/women-premium-shoes.jpg" },
      { id: 38, name: "Women's Sports Sneakers", price: "Rs. 4,299", image: "/images/main/women-sports-sneakers.jpg" },
      { id: 39, name: "Everyday Training Shoes", price: "Rs. 4,599", image: "/images/main/women-everyday-shoes.jpg" },
      { id: 40, name: "Performance Gym Shoes", price: "Rs. 5,299", image: "/images/main/women-performance-shoes.jpg" },
    ],
  },
  {
    title: "Women's T-Shirts",
    subtitle: "Fresh styles for training and everyday wear",
    products: [
      { id: 41, name: "Performance T-Shirt", price: "Rs. 2,299", image: "/images/main/women-tshirt.jpg" },
      { id: 42, name: "Training T-Shirt", price: "Rs. 2,499", image: "/images/main/women-training-tshirt.jpg" },
      { id: 43, name: "Gym T-Shirt", price: "Rs. 1,999", image: "/images/main/women-gym-tshirt.jpg" },
      { id: 44, name: "Running T-Shirt", price: "Rs. 2,199", image: "/images/main/women-running-tshirt.jpg" },
    ],
  },
  {
    title: "Sports Bras",
    subtitle: "Support and comfort during every workout",
    products: [
      { id: 45, name: "Performance Sports Bra", price: "Rs. 2,499", image: "/images/main/sports-bra.jpg" },
      { id: 46, name: "High Support Sports Bra", price: "Rs. 2,799", image: "/images/main/high-support-bra.jpg" },
      { id: 47, name: "Training Sports Bra", price: "Rs. 2,299", image: "/images/main/training-bra.jpg" },
    ],
  },
  {
    title: "Women's Hoodies",
    subtitle: "Sporty comfort with a stylish look",
    products: [
      { id: 48, name: "Premium Sports Hoodie", price: "Rs. 4,499", image: "/images/main/women-hoodie.jpg" },
      { id: 49, name: "Training Hoodie", price: "Rs. 3,999", image: "/images/main/women-training-hoodie.jpg" },
      { id: 50, name: "Zip-Up Hoodie", price: "Rs. 4,799", image: "/images/main/women-zip-hoodie.jpg" },
    ],
  },
  {
    title: "Leggings",
    subtitle: "Flexible fit for gym, yoga and training",
    products: [
      { id: 51, name: "Performance Leggings", price: "Rs. 2,499", image: "/images/main/leggings.jpg" },
      { id: 52, name: "Gym Leggings", price: "Rs. 2,299", image: "/images/main/women-gym-leggings.jpg" },
      { id: 53, name: "High-Waist Leggings", price: "Rs. 2,699", image: "/images/main/high-waist-leggings.jpg" },
    ],
  },
  {
    title: "Women's Shorts",
    subtitle: "Lightweight styles for active days",
    products: [
      { id: 54, name: "Running Shorts", price: "Rs. 1,799", image: "/images/main/women-running-shorts.jpg" },
      { id: 55, name: "Training Shorts", price: "Rs. 1,999", image: "/images/main/women-training-shorts.jpg" },
      { id: 56, name: "Gym Shorts", price: "Rs. 1,899", image: "/images/main/women-gym-shorts.jpg" },
    ],
  },
  {
    title: "Women's Tracksuits",
    subtitle: "Complete outfits for your active lifestyle",
    products: [
      { id: 57, name: "Premium Tracksuit", price: "Rs. 6,499", image: "/images/main/women-tracksuit.jpg" },
      { id: 58, name: "Training Tracksuit", price: "Rs. 5,999", image: "/images/main/women-training-tracksuit.jpg" },
      { id: 59, name: "Athletic Tracksuit", price: "Rs. 6,999", image: "/images/main/women-athletic-tracksuit.jpg" },
    ],
  },
  {
    title: "Sports Jerseys",
    subtitle: "Show your passion for the game",
    products: [
      { id: 60, name: "Cricket Jersey", price: "Rs. 2,799", image: "/images/main/women-cricket-jersey.jpg" },
      { id: 61, name: "Football Jersey", price: "Rs. 2,999", image: "/images/main/women-football-jersey.jpg" },
      { id: 62, name: "Training Jersey", price: "Rs. 2,499", image: "/images/main/women-training-jersey.jpg" },
    ],
  },
];

export default function WomensSportswearPage() {
  return (
    <main
      style={{
        background: "#f7f8fa",
        minHeight: "100vh",
        padding: "45px 5%",
      }}
    >
      {/* PAGE HEADING */}
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
          Women's Sportswear
        </h1>

        <p style={{ color: "#666", fontSize: "16px" }}>
          Discover comfort, confidence and performance in every move.
        </p>
      </div>

      {/* PRODUCT SECTIONS */}
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
                {/* PRODUCT IMAGE */}
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

                {/* PRODUCT DETAILS */}
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
