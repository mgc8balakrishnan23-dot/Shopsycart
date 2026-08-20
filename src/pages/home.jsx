import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-small">WELCOME TO OUR STORE</p>

          <h1>
            Discover Your <span>Perfect Style</span>
          </h1>

          <p className="hero-text">
            Explore our latest collection of amazing products,
            carefully selected just for you.
          </p>

          <button
            className="btn btn-primary hero-btn"
            onClick={() => navigate("/products")}
          >
            Shop Now →
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
            alt="Shopping"
          />
        </div>
      </section>

      {/* Features */}
      <section className="features container">
        <div className="feature-card">
          <h3>🚚</h3>
          <h5>Fast Delivery</h5>
          <p>Quick and safe delivery to your doorstep.</p>
        </div>

        <div className="feature-card">
          <h3>💎</h3>
          <h5>Quality Products</h5>
          <p>High quality products at affordable prices.</p>
        </div>

        <div className="feature-card">
          <h3>🔒</h3>
          <h5>Secure Payment</h5>
          <p>Your payment and information are always secure.</p>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="discover-section">
        <h2>Explore Our Products</h2>
        <p>
          Find something you love from our exclusive collection.
        </p>

        <button
          className="btn btn-dark"
          onClick={() => navigate("/products")}
        >
          View Products
        </button>
      </section>

    </div>
  );
}

export default Home;