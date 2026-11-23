
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="contact-page">

      <section className="contact-hero">
        <span>SR/18 SUPPORT</span>
        <h1>LET'S TALK <span>SPORTS.</span></h1>
        <p>
          Have a question or need help? We are always happy to hear from you.
        </p>
      </section>

      <section className="contact-wrapper">

        <div className="contact-info">
          <span className="contact-label">GET IN TOUCH</span>
          <h2>We're Here To Help.</h2>
          <p>
            Whether you have a question about our products, sizes or orders,
            feel free to contact the SR/18 team.
          </p>

          <div className="contact-info-card">
            <div className="contact-icon">✉</div>
            <div>
              <h3>Email Support</h3>
              <p>Contact details coming soon</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">◷</div>
            <div>
              <h3>Business Hours</h3>
              <p>Monday – Saturday</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-icon">★</div>
            <div>
              <h3>Customer Care</h3>
              <p>We're here to help you shop better.</p>
            </div>
          </div>

          <div className="contact-brand">
            SR<span>/18</span>
          </div>
        </div>

        <div className="contact-form-box">
          <h2>Send Us A Message</h2>
          <p>Fill in the details below.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" required />

            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Subject</label>
            <input type="text" placeholder="How can we help?" required />

            <label>Your Message</label>
            <textarea
              rows={5}
              placeholder="Write your message here..."
              required
            />

            <button type="submit" className="primary-btn">
              Send Message →
            </button>

            {submitted && (
              <p className="success-message">
                Thank you! Your message has been submitted.
              </p>
            )}
          </form>
        </div>

      </section>

      <section className="contact-bottom">
        <h2>THANK YOU FOR CHOOSING SR/18</h2>
        <p>Move Better. Play Better. Live Better.</p>
        <Link href="/products" className="primary-btn">
          Explore Products
        </Link>
      </section>

    </main>
  );
}
