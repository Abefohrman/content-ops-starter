
// src/pages/index.js
export default function Home() {
  return (
    <>
      <header className="container nav">
        <div className="brand">
          <img src="/logo.png" alt="ALMO-TEK logo" width="36" height="36" />
          <strong>ALMO-TEK™</strong>
        </div>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="#specs">Specs</a>
          <a href="#contact">Contact</a>
        </nav>
        <span className="badge">Warehouse Safety</span>
      </header>

      <section className="hero">
        <div className="hero-blobs">
          <div className="blob one"></div>
          <div className="blob two"></div>
          <div className="blob three"></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="kicker">Column Protection • Impact Indicator • Tool-Free</p>
          <h1 className="h1">Smarter Rack Protection for Busy Warehouses</h1>
          <p className="sub">
            A tough, modular guard with a red impact-indicator button — so you
            can spot hits instantly, replace modules in seconds, and keep aisles safe.
          </p>

          <div className="btns">
            <a className="btn primary" href="#contact">Get a Quote</a>
            <a className="btn" href="#gallery">See It in Action</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} ALMO-TEK™ — Column Protection, Made in South Africa.
      </footer>
    </>
  );
}
