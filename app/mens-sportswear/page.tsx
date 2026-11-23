
import Link from "next/link";

const productSections = [
  {
    title: "Men's Shoes",
    subtitle: "Find the perfect shoes for your performance",
    products: [
      { id: 1, name: "Running Shoes", price: "Rs. 5,499", image: "/images/mens-sportswear/running shoes (3).jpg" },
      { id: 2, name: "Training Shoes", price: "Rs. 4,999", image: "/images/mens-sportswear/tanning shoes.jpg" },
      { id: 3, name: "Gym Shoes", price: "Rs. 4,499", image: "/images/mens-sportswear/gym shoes.jpg" },
      { id: 4, name: "Football Shoes", price: "Rs. 5,999", image: "/images/mens-sportswear/football shoes.jpg" },
      { id: 5, name: "Cricket Shoes", price: "Rs. 5,499", image: "/images/mens-sportswear/cricket shoes.jpg" },
      { id: 6, name: "Walking Shoes", price: "Rs. 3,999", image: "/images/mens-sportswear/walking shoes.jpg" },
      { id: 7, name: "Sports Sneakers", price: "Rs. 4,799", image: "/images/mens-sportswear/sneakers shoes.jpg" },
      { id: 8, name: "Lightweight Running Shoes", price: "Rs. 5,799", image: "/images/mens-sportswear/lightweight running shoes.jpg" },
      { id: 9, name: "Premium Sports Shoes", price: "Rs. 6,499", image: "/images/mens-sportswear/premium-sports-shoes.jpg" },
      { id: 10, name: "Casual Sports Shoes", price: "Rs. 4,299", image: "/images/mens-sportswear/casual sports-shoes.jpg" },
    ],
  },
  {
    title: "Men's T-Shirts",
    subtitle: "Comfortable styles for everyday training",
    products: [
      { id: 11, name: "Performance Training T-Shirt", price: "Rs. 2,499", image: "/images/mens-sportswear/Performance Training T-Shirt.jpg" },
      { id: 12, name: "Sports T-Shirt", price: "Rs. 2,199", image: "/images/mens-sportswear/sports T-shirt.jpg" },
      { id: 13, name: "Gym T-Shirt", price: "Rs. 1,999", image: "/images/mens-sportswear/gym T-shirt.jpg" },
      { id: 14, name: "Running T-Shirt", price: "Rs. 2,299", image: "/images/mens-sportswear/running-tshirt.jpg" },
    ],
  },
  {
    title: "Men's Hoodies",
    subtitle: "Stay warm and stylish",
    products: [
      { id: 15, name: "Premium Sports Hoodie", price: "Rs. 4,499", image: "/images/mens-sportswear/sports-hoodie.jpg" },
      { id: 16, name: "Training Hoodie", price: "Rs. 3,999", image: "/images/mens-sportswear/tranning hoodie.jpg" },
      { id: 17, name: "Zip-Up Hoodie", price: "Rs. 4,799", image: "/images/mens-sportswear/zip-up hoodie.jpg" },
    ],
  },
  {
    title: "Joggers",
    subtitle: "Move freely with maximum comfort",
    products: [
      { id: 18, name: "Performance Joggers", price: "Rs. 2,999", image: "/images/mens-sportswear/joggers.jpg" },
      { id: 19, name: "Training Joggers", price: "Rs. 2,799", image: "/images/mens-sportswear/training-joggers.jpg" },
      { id: 20, name: "Casual Sports Joggers", price: "Rs. 3,199", image: "/images/mens-sportswear/casual-joggers.jpg" },
    ],
  },
  {
    title: "Sports Shorts",
    subtitle: "Lightweight comfort for every workout",
    products: [
      { id: 21, name: "Gym Shorts", price: "Rs. 1,799", image: "/images/mens-sportswear/Gym Shorts.jpg" },
      { id: 22, name: "Running Shorts", price: "Rs. 1,999", image: "/images/mens-sportswear/Running Shorts.jpg" },
      { id: 23, name: "Training Shorts", price: "Rs. 1,899", image: "/images/mens-sportswear/Training Shorts.jpg" },
    ],
  },
  {
    title: "Tracksuits",
    subtitle: "Complete sportswear sets",
    products: [
      { id: 24, name: "Premium Tracksuit", price: "Rs. 6,499", image: "/images/mens-sportswear/Premium Tracksuit.jpg" },
      { id: 25, name: "Training Tracksuit", price: "Rs. 5,999", image: "/images/mens-sportswear/Training Tracksuit.jpg" },
      { id: 26, name: "Athletic Tracksuit", price: "Rs. 6,999", image: "/images/mens-sportswear/Athletic Tracksuit.jpg" },
    ],
  },
  {
    title: "Sports Jerseys",
    subtitle: "Show your passion for the game",
    products: [
      { id: 27, name: "Cricket Jersey", price: "Rs. 2,799", image: "/images/mens-sportswear/cricket-jersey.jpg" },
      { id: 28, name: "Football Jersey", price: "Rs. 2,999", image: "/images/mens-sportswear/football-jersey.jpg" },
      { id: 29, name: "Training Jersey", price: "Rs. 2,499", image: "/images/mens-sportswear/tranning kit.jpg" },
      { id: 30, name: "Team Kit", price: "Rs. 3,499", image: "/images/mens-sportswear/team-kit.jpg" },
    ],
  },
];

export default function MensSportswearPage() {
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
          Men's Sportswear
        </h1>

        <p style={{ color: "#666", fontSize: "16px" }}>
          Discover performance, comfort and style in every move.
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
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="mens-product-hover"
              >
                <div className="mens-product-image">
                  <img src={product.image} alt={product.name} />

                  <span className="mens-brand-label">SR/18</span>
                </div>

                <div className="mens-product-info">
                  <h3>{product.name}</h3>

                  <p className="mens-product-price">{product.price}</p>

                  <span className="mens-view-button">
                    View Product
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
