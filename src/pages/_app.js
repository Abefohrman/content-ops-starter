// src/pages/index.js  (or src/app/page.js)

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        backgroundColor: "#f8f8f8",
        color: "#222",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      {/* Header / Logo */}
      <img
        src="/logo.png"
        alt="ALMO-TEK Logo"
        width="180"
        style={{ marginBottom: "20px" }}
      />

      {/* Title */}
      <h1 style={{ fontSize: "2.3rem", marginBottom: "15px", color: "#4a1e1e" }}>
        ALMO-TEK™ Column Protectors
      </h1>

      {/* Tagline */}
      <h2 style={{ fontSize: "1.2rem", marginBottom: "30px", color: "#666" }}>
        Made Tough. Made Local. Made to Last.
      </h2>

      {/* Main Section */}
      <section
        style={{
          maxWidth: "750px",
          margin: "0 auto 40px auto",
          lineHeight: "1.6",
          fontSize: "1.05rem",
        }}
      >
        <p>
          The <strong>ALMO-TEK™ Column Protector</strong>, developed by{" "}
          <strong>Iron Africa Steelworks</strong>, is a proudly South African
          safety product engineered to stop rack damage before it starts.
        </p>

        <p>
          Each unit is made from <strong>high-impact HDPE</strong> and features
          a simple <strong>red-button impact indicator</strong> that instantly
          shows when a forklift has made contact — helping you spot and replace
          damaged protectors before they compromise your racking.
        </p>

        <p>
          Designed as a <strong>3-part stackable system</strong>, ALMO-TEK
          protectors install in seconds and fit securely without tools, giving
          warehouse teams a clean, modular safety solution that keeps operations
          running smoothly.
        </p>

        <p>
          <strong>Specifications & Highlights:</strong><br />
          • 3-part modular, stackable design<br />
          • High-Impact HDPE construction<br />
          • Red impact-indicator buttons for visual detection<br />
          • Installs in seconds — no bolts, straps, or tools<br />
          • Signal Yellow finish (custom colours available)<br />
          • Dimensions: Height 137 mm × Width 147 mm × Depth 147 mm (≈ 425 g)<br />
          • Price: <strong>R 499 (VAT Incl.) per unit</strong>
        </p>

        <p>
          ALMO-TEK is the smarter way to protect your racking, reduce repair
          costs, and maintain a safer, more efficient warehouse environment.
        </p>
      </section>

      {/* Contact Section */}
      <section style={{ marginBottom: "30px" }}>
        <h3 style={{ color: "#4a1e1e" }}>Contact Us</h3>
        <p>
          📞 Cell:{" "}
          <a href="tel:+27795490265" style={{ textDecoration: "none", color: "#4a1e1e" }}>
            +27 79 549 0265
          </a>
          <br />
          🌐 Website:{" "}
          <a
            href="https://www.almotek.co.za"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#4a1e1e" }}
          >
            almotek.co.za
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer style={{ fontSize: "0.9rem", color: "#777" }}>
        © {new Date().getFullYear()} ALMO-TEK™. Proudly engineered in South Africa.
      </footer>
    </main>
  );
}
