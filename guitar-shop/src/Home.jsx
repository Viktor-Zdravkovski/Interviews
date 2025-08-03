import React, { useState } from 'react';
import './Home.css';
import GuitarBrandSelector from "./components/GuitarBrandSelector";
import BrandModels from "./components/BrandModels";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [selectedGuitar, setSelectedGuitar] = useState(null);
  const [activeTab, setActiveTab] = useState("specs");
  const [selectedBrand, setSelectedBrand] = useState(null);

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setSelectedGuitar(null);
    setActiveTab("specs");
  };

  const handleGuitarSelect = (guitar) => {
    setSelectedGuitar(guitar);
    setActiveTab("specs");
  };

  const handleBackToHome = () => {
    setSelectedBrand(null);
    setSelectedGuitar(null);
  };

  const handleBackToList = () => {
    setSelectedGuitar(null);
    setActiveTab("specs");
  };

  return (
    <div className="page-container">
      <header className="top-bar">
        <div className="top-left">
          {(selectedBrand || selectedGuitar) && (
            <button
              onClick={selectedGuitar ? handleBackToList : handleBackToHome}
              style={{
                marginBottom: '8px',
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                color: 'black',
                fontSize: '20px',
                marginLeft: '30px'
              }}
            >
              &lt; Back to {selectedGuitar ? 'List' : 'Home'}
            </button>
          )}

          <div className="top-left-title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            {/* Line 1: Logo + VibeStrings */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img
                src="./src/assets/Logos/VibeStringsLogo.png"
                alt="VibeStrings Logo"
                style={{ width: '40px', height: '40px' }}
              />
              <h1 style={{ margin: 0 }}>VibeStrings</h1>
            </div>

            {/* Line 2: Guitar Name (Full width h1 look) */}
            {selectedGuitar && (
              <h1 style={{ margin: '120px', marginTop: '10rem', fontSize: '4rem' }}>
                {selectedGuitar.name}
              </h1>
            )}
          </div>


          {/* Intro Text or Brand Intro */}
          {!selectedBrand && !selectedGuitar && (
            <section className="intro-text">
              <h1>Browse top quality <span>Guitars</span> online</h1>
              <p>Explore 50k+ latest collections of branded guitars online with VibeStrings.</p>
            </section>
          )}

          {selectedBrand && !selectedGuitar && (
            <section className="intro-text-category">
              <h1>Play like a <span>Rock star</span></h1>
              <p>
                With a legacy dating back to the 1950s, {selectedBrand.name} blends expert craftsmanship with cutting-edge innovation to deliver
                guitars that inspire creativity and elevate your performance. Trusted by top artists worldwide, {selectedBrand.name} guitars are built
                to play fast, sound bold, an stand out any stage. Ask ChatGPT
              </p>
            </section>
          )}
        </div>

        <div className="top-right-form">
          <div
            className="form-rounded-box"
            style={
              selectedGuitar
                ? {
                  backgroundImage: `url(${selectedGuitar.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "orange"
                }
                : selectedBrand
                  ? {
                    backgroundImage: `url(${selectedBrand.logo})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundColor: "orange"
                  }
                  : {}
            }
          >
            {!selectedBrand && !selectedGuitar && (
              <div className="logo-circle">
                <img
                  src="./src/assets/Logos/VibeStringsLogo.png"
                  alt="Logo"
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Guitar Detail Tabs */}
      {selectedGuitar && (
        <section style={{ width: "100%", padding: "2rem 1rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "1rem",
              borderBottom: "2px solid #ccc",
              width: "100%",
            }}
          >
            <button
              onClick={() => setActiveTab("specs")}
              style={{
                flex: 1,
                padding: "1rem",
                cursor: "pointer",
                border: "none",
                borderBottom: activeTab === "specs" ? "3px solid #ff6600" : "none",
                backgroundColor: "transparent",
                fontWeight: activeTab === "specs" ? "bold" : "normal",
                color: activeTab === "specs" ? "#ff6600" : "#333",
              }}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab("players")}
              style={{
                flex: 1,
                padding: "1rem",
                cursor: "pointer",
                border: "none",
                borderBottom: activeTab === "players" ? "3px solid #ff6600" : "none",
                backgroundColor: "transparent",
                fontWeight: activeTab === "players" ? "bold" : "normal",
                color: activeTab === "players" ? "#ff6600" : "#333",
              }}
            >
              Who plays it?
            </button>
          </div>

          <div
            style={{
              padding: "1rem",
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#fefefe",
              width: "100%",
            }}
          >
            {activeTab === "players" ? (
              selectedGuitar?.musicians?.length > 0 ? (
                <div style={{ width: "100%" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      marginBottom: "1rem",
                      justifyContent: "center",
                    }}
                  >
                    {selectedGuitar.musicians.map((musician, index) => (
                      <div key={index} style={{ textAlign: "center" }}>
                        <img
                          src={musician.musicianImage}
                          alt={musician.name}
                          style={{ width: "250px", height: "auto", borderRadius: "8px" }}
                        />
                        <p style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
                          {musician.name}
                        </p>
                        {musician.bands && (
                          <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
                            {musician.bands.join(", ")}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p>No known artists listed.</p>
              )
            ) : activeTab === "specs" ? (
              <div style={{ width: "100%" }}>
                {/* Description Paragraph */}
                <p
                  style={{
                    marginBottom: "1.5rem",
                    lineHeight: "1.6",
                    fontSize: "20px",
                    color: "#333",
                    padding: "50px 50px",
                  }}
                >
                  The <strong>{selectedGuitar.name}</strong> is a modern take on the
                  classic Precision <strong>{selectedGuitar.type}</strong> design,
                  featuring a sleek body shape and comfortable neck profile for easy
                  playability. It is equipped with dual active pickups that deliver a
                  powerful and versatile tone, perfect for any genre from rock to funk.
                  The onboard EQ allows players to shape their sound with precision,
                  while the high-quality hardware ensures reliability on stage. With its
                  striking finish options and attention to detail, the{" "}
                  <strong>{selectedGuitar.type}</strong> is designed for both
                  performance and style.
                </p>

                {/* Guitar Specs */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: "0px 70px",
                    fontSize: "30px",
                  }}
                >
                  <li>
                    <strong>Body Wood:</strong> {selectedGuitar.specs?.bodyWood || "N/A"}
                  </li>
                  <li>
                    <strong>Neck Wood:</strong> {selectedGuitar.specs?.neckWood || "N/A"}
                  </li>
                  <li>
                    <strong>Fingerboard:</strong>{" "}
                    {selectedGuitar.specs?.fingerboardWood || "N/A"}
                  </li>
                  <li>
                    <strong>Pickups:</strong> {selectedGuitar.specs?.pickups || "N/A"}
                  </li>
                  <li>
                    <strong>Tuners:</strong> {selectedGuitar.specs?.tuners || "N/A"}
                  </li>
                  <li>
                    <strong>Scale Length:</strong>{" "}
                    {selectedGuitar.specs?.scaleLength || "N/A"}
                  </li>
                  <li>
                    <strong>Bridge:</strong> {selectedGuitar.specs?.bridge || "N/A"}
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </section>
      )}


      {/* Brand Models */}
      {selectedBrand && !selectedGuitar && (
        <section className="brand-detail-section">
          <BrandModels brandId={selectedBrand.id} onSelectGuitar={handleGuitarSelect} />
        </section>
      )}

      {/* Home Sections */}
      {!selectedBrand && !selectedGuitar && (
        <>
          <section className="brands-section">
            <h1>
              Featuring the <span className="highlight">Best Brands</span>
            </h1>
            <p>Select your preferred brand and explore our exquisite collection.</p>
            <GuitarBrandSelector onBrandClick={handleBrandClick} />
          </section>

          <section className="why-try-section">
            <h1>
              Why try <span className="highlight">VibeStrings?</span>
            </h1>
            <div className="why-try-columns">
              {/* Repeatable info boxes */}
              <div className="why-try-box">
                <i className="fa-solid fa-magnifying-glass" style={{ fontSize: '50px', color: '#333' }}></i>
                <br /><br /><br />
                <h2>SMOOTH BROWSING</h2>
                <p>We ensure top-notch guitars that meet professional standards.</p>
              </div>
              <div className="why-try-box">
                <i className="fa-solid fa-truck-fast" style={{ fontSize: '50px', color: '#333' }}></i>
                <br /><br /><br />
                <h2>EASY DELIVERY</h2>
                <p>Thousands of models from renowned brands to choose from.</p>
              </div>
              <div className="why-try-box">
                <i className="fa-solid fa-wallet" style={{ fontSize: '50px', color: '#333' }}></i>
                <br /><br /><br />
                <h2>SWIFT PAYMENTS</h2>
                <p>Get your guitar delivered safely and quickly to your doorstep.</p>
              </div>
            </div>
          </section>

          <section className="browse-buy-section">
            <div className="browse-left">
              <h1>
                Browse and buy your <span className="highlight">favorite guitars</span> with VibeStrings.
              </h1>
              <div className="app-store-buttons">
                <img src="./src/assets/Logos/GooglePlayLogo.png" alt="Google Play" />
                <img src="./src/assets/Logos/AppStoreLogo.png" alt="App Store" />
              </div>
            </div>

            <div className="browse-right">
              <div className="orange-circle"></div>
              <div className="phone-screenshot-container">
                <img
                  src="./src/assets/MobileSS1.jpg"
                  alt="Top Guitar"
                  className="phone-screenshot"
                />
                <img
                  src="./src/assets/MobileSS2.jpg"
                  alt="Bottom Guitar"
                  className="phone-screenshot"
                />
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-brand">
              <img src="/src/assets/Logos/VibeStringsLogo.png" alt="Logo" />
              <h1>VibeStrings</h1>
            </div>
            <div className="footer-info">
              <i className="fa-solid fa-envelope"></i>
              <p>Enquiry@VibeStrings.com</p>
            </div>
            <div className="footer-info">
              <i className="fa-solid fa-location-dot"></i>
              <p>San Francisco</p>
            </div>
          </div>

          <div className="footer-middle-left">
            <h3>Pages</h3>
            <ul>
              <li>Store</li>
              <li>Collections</li>
              <li>Support</li>
            </ul>
          </div>

          <div className="footer-middle-right">
            <h3>Product</h3>
            <ul>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Copyright</li>
            </ul>
          </div>

          <div className="footer-right">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {currentYear} Copyright. VibeStrings
        </div>
      </footer>
    </div>
  );
}
