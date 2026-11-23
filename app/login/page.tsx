
"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("Login form submitted successfully!");
  }

  return (
    <section className="section-container">
      <div
        style={{
          maxWidth: "450px",
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
            Welcome Back!
          </h2>

          <p style={{ color: "#666", marginTop: "8px" }}>
            Login to your SR/18 account
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "13px",
              margin: "10px 0 20px",
              border: "1px solid #ddd",
              borderRadius: "7px",
            }}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "13px",
              margin: "10px 0 15px",
              border: "1px solid #ddd",
              borderRadius: "7px",
            }}
          />

          <div style={{ textAlign: "right", marginBottom: "20px" }}>
            <Link href="/forgot-password" style={{ color: "#0b9b83" }}>
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="primary-btn"
            style={{ width: "100%", cursor: "pointer" }}
          >
            LOGIN
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "25px", color: "#555" }}>
          Don't have an account?{" "}
          <Link
            href="/register"
            style={{ color: "#0b9b83", fontWeight: "bold" }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
}
