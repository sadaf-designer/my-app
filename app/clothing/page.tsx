
import Link from "next/link";

const productSections = [
  {
    title: "Sports T-Shirts",
    subtitle: "Comfortable shirts for everyday training",
    products: [
      { id: 79, name: "Performance Sports T-Shirt", price: "Rs. 2,499", image: "/images/main/sports-tshirt.jpg" },
      { id: 80, name: "Men's Training T-Shirt", price: "Rs. 2,199", image: "/images/main/training-tshirt.jpg" },
      { id: 81, name: "Dry Fit T-Shirt", price: "Rs. 2,299", image: "/images/main/dry-fit-tshirt.jpg" },
      { id: 82, name: "Premium Gym T-Shirt", price: "Rs. 2,799", image: "/images/main/gym-tshirt.jpg" },
    ],
  },
  {
    title: "Sports Hoodies",
    subtitle: "Warm and stylish hoodies for athletes",
    products: [
      { id: 83, name: "Classic Sports Hoodie", price: "Rs. 4,499", image: "/images/main/sports-hoodie.jpg" },
      { id: 84, name: "Training Zip Hoodie", price: "Rs. 4,999", image: "/images/main/zip-hoodie.jpg" },
      { id: 85, name: "Premium Gym Hoodie", price: "Rs. 4,799", image: "/images/main/gym-hoodie.jpg" },
      { id: 86, name: "Lightweight Hoodie", price: "Rs. 3,999", image: "/images/main/lightweight-hoodie.jpg" },
    ],
  },
  {
    title: "Joggers",
    subtitle: "Flexible joggers for workouts and casual wear",
    products: [
      { id: 87, name: "Training Joggers", price: "Rs. 3,499", image: "/images/main/training-joggers.jpg" },
      { id: 88, name: "Slim Fit Joggers", price: "Rs. 3,299", image: "/images/main/slim-joggers.jpg" },
      { id: 89, name: "Cotton Sports Joggers", price: "Rs. 3,699", image: "/images/main/cotton-joggers.jpg" },
      { id: 90, name: "Performance Joggers", price: "Rs. 3,899", image: "/images/main/performance-joggers.jpg" },
    ],
  },
  {
    title: "Sports Shorts",
    subtitle: "Lightweight shorts for active performance",
    products: [
      { id: 91, name: "Running Sports Shorts", price: "Rs. 1,999", image: "/images/main/running-shorts.jpg" },
      { id: 92, name: "Gym Training Shorts", price: "Rs. 2,199", image: "/images/main/gym-shorts.jpg" },
      { id: 93, name: "Performance Shorts", price: "Rs. 2,399", image: "/images/main/performance-shorts.jpg" },
      { id: 94, name: "Casual Sports Shorts", price: "Rs. 1,899", image: "/images/main/casual-shorts.jpg" },
    ],
  },
  {
    title: "Tracksuits",
    subtitle: "Complete sports outfits for training and travel",
    products: [
      { id: 95, name: "Classic Sports Tracksuit", price: "Rs. 6,999", image: "/images/main/tracksuit.jpg" },
      { id: 96, name: "Training Tracksuit", price: "Rs. 7,499", image: "/images/main/training-tracksuit.jpg" },
      { id: 97, name: "Premium Tracksuit", price: "Rs. 7,999", image: "/images/main/premium-tracksuit.jpg" },
      { id: 98, name: "Athletic Tracksuit", price: "Rs. 6,499", image: "/images/main/athletic-tracksuit.jpg" },
    ],
  },
  {
    title: "Sports Jerseys",
    subtitle: "Sport-inspired jerseys for every fan",
    products: [
      { id: 99, name: "Cricket Sports Jersey", price: "Rs. 2,999", image: "/images/main/cricket-jersey.jpg" },
      { id: 100, name: "Football Sports Jersey", price: "Rs. 2,999", image: "/images/main/football-jersey.jpg" },
      { id: 101, name: "Training Sports Jersey", price: "Rs. 2,499", image: "/images/main/training-jersey.jpg" },
      { id: 102, name: "Team Sports Jersey", price: "Rs. 3,199", image: "/images/main/team-kit.jpg" },
    ],
  },
];

export default function ClothingPage() {
  return (
    <main style={{ background: "#f5f7fa", minHeight: "100vh", padding: "45px 5%" }}>
      <div style={{ textAlign: "center", marginBottom: "45px" }}>
        <p style={{ color: "#079b87", fontWeight: "bold", letterSpacing: "3px" }}>
          SR/18 PERFORMANCE WEAR
        </p>
        <h1 style={{ color: "#071b3a", fontSize: "38px", margin: "10px 0" }}>
          Sports Clothing
        </h1>
        <p style={{ color: "#64748b", fontSize: "16px" }}>
          Discover comfortable and stylish clothing for your active lifestyle.
        </p>
      </div>

      {productSections.map((section) => (
        <section key={section.title} style={{ marginBottom: "55px" }}>
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ color: "#071b3a", fontSize: "27px", marginBottom: "7px" }}>
              {section.title}
            </h2>
            <p style={{ color: "#64748b" }}>{section.subtitle}</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "22px"
          }}>
            {section.products.map((product) => (
              <div key={product.id} style={{
                background: "#ffffff",
                borderRadius: "13px",
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)"
              }}>
                <div style={{
                  height: "230px",
                  background: "#eef2f6",
                  position: "relative"
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <span style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: "#079b87",
                    color: "white",
                    padding: "6px 11px",
                    borderRadius: "5px",
                    fontSize: "12px",
                    fontWeight: "bold"
                  }}>
                    SR/18
                  </span>
                </div>

                <div style={{ padding: "16px" }}>
                  <h3 style={{
                    color: "#071b3a",
                    fontSize: "16px",
                    margin: "0 0 12px",
                    minHeight: "40px"
                  }}>
                    {product.name}
                  </h3>

                  <p style={{
                    color: "#079b87",
                    fontWeight: "bold",
                    fontSize: "17px",
                    margin: "0 0 15px"
                  }}>
                    {product.price}
                  </p>

                  <Link href={`/products/${product.id}`} style={{
                    display: "block",
                    textAlign: "center",
                    background: "#071b3a",
                    color: "#ffffff",
                    textDecoration: "none",
                    padding: "11px",
                    borderRadius: "7px",
                    fontWeight: "bold"
                  }}>
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
