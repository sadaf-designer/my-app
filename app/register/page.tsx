
"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration form submitted successfully!");
  }

  return (
    <section className="section-container">
      <div
        style={{
          maxWidth: "480px",
          margin: "40px auto",
          padding: "35px",
          background: "#ffffff",
          borderRadius: "14px",
          boxShadow: "0 5px 25px rgba(0,0,0,0.10)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "25px" }}>
          <h1 style={{ color: "#101d35", fontSize: "32px" }}>
            SR<span style={{ color: "#0b9b83" }}>/18</span>
          </h1>

          <h2 style={{ color: "#101d35", marginTop: "15px" }}>
            Create Account
          </h2>

          <p style={{ color: "#666", marginTop: "8px" }}>
            Join the SR/18 sportswear family
          </p>
        </div>

        <form onSubmit={handleRegister}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={inputStyle}
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={inputStyle}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={inputStyle}
          />

          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={6}
            style={inputStyle}
          />

          <button
            type="submit"
            className="primary-btn"
            style={{ width: "100%", marginTop: "15px", cursor: "pointer" }}
          >
            CREATE ACCOUNT
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "25px", color: "#555" }}>
          Already have an account?{" "}
          <Link
            href="/login"
            style={{ color: "#0b9b83", fontWeight: "bold" }}
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px",
  margin: "10px 0 18px",
  border: "1px solid #ddd",
  borderRadius: "7px",
};
