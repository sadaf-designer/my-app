
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="info-page">
      <section className="info-hero">
        <span>ABOUT SR/18</span>
        <h1>BUILT FOR PERFORMANCE.<br />DESIGNED FOR CHAMPIONS.</h1>
        <p>Sportswear that inspires you to move, perform and achieve more.</p>
      </section>

      <section className="info-content">
        <h2>Who We Are</h2>
        <p>
          SR/18 is a sportswear brand created for people who love sports,
          fitness and an active lifestyle. We believe that confidence,
          comfort and performance go hand in hand.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to bring stylish, comfortable and performance-focused
          sportswear to everyone. We want you to feel confident every time
          you step onto the field, into the gym or out into the world.
        </p>

        <h2>Why Choose SR/18?</h2>
        <div className="info-features">
          <div>Premium Style</div>
          <div>Everyday Comfort</div>
          <div>Sports Performance</div>
        </div>

        <Link href="/products" className="primary-btn">
          Explore Collection
        </Link>
      </section>
    </div>
  );
}
