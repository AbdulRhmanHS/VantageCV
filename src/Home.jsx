import "./Home.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-nav">
          <div className="header-container-icon">
            <svg>logo</svg>
            <div id="logo-text">ResumeFlow</div>
          </div>
          <nav className="header-nav">
            <a href="#">Home</a>
            <a href="#">My Resumes</a>
          </nav>
        </div>
        <a className="header-link" href="#">
          Create Now
        </a>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main className="main">
      <section className="hero">
        <div className="hero-container">
          <h1>Build an ATS-Friendly CV in Minutes</h1>
          <p>
            Precision engineering for professionals. Create, optimize, and
            manage resumes that pass applicant tracking systems with zero
            formatting headaches.
          </p>
          <a href="#">
            Get Started<svg>&gt;</svg>
          </a>
        </div>
      </section>

      <section className="features">
        <div className="features-container">
          <div className="features-head">
            <h2>FEATURES</h2>
            <h3>Engineered for Success</h3>
            <p>
              Stop fighting with margins. Focus on your content, and let our
              intelligent engine handle the formatting, ATS compliance, and
              typography.
            </p>
          </div>
          <div className="features-grid">
            <article className="features-card">
              <svg>Icon</svg>
              <h4>Live Split-Pane Preview</h4>
              <p>
                See changes instantly. Our dual-pane builder separates data
                entry from design, ensuring you never break the layout.
              </p>
            </article>
            <article className="features-card">
              <svg>Icon</svg>
              <h4>ATS Optimization</h4>
              <p>
                Templates structurally designed to be parsed perfectly by
                Greenhouse, Workday, and Lever.
              </p>
            </article>
            <article className="features-card">
              <svg>Icon</svg>
              <h4>Professional Templates</h4>
              <p>
                Switch styles with one click. Typography and spacing adapt
                automatically.
              </p>
            </article>
            <article className="features-card">
              <svg>Icon</svg>
              <h4>Impeccable Typography</h4>
              <p>
                Every template utilizes paired Google Fonts designed for maximum
                readability in both digital and print formats.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="content-container">
          <div className="content-head">
            <h2>CONTENT</h2>
            <h3>Data-driven design, not guesswork</h3>
          </div>
          <div className="content-grid">
            <article className="content-card">
              <svg>Icon</svg>
              <h4>Structured Input</h4>
              <p>
                Enter your history once. Our modular schema keeps your data
                clean and reusable.
              </p>
            </article>
            <article className="content-card">
              <svg>Icon</svg>
              <h4>Algorithmic Spacing</h4>
              <p>
                White space is calculated automatically to ensure content fits
                perfectly on 1 or 2 pages.
              </p>
            </article>
            <article className="content-card">
              <svg>Icon</svg>
              <h4>One-Click Export</h4>
              <p>
                Generate crisp, text-selectable PDFs that render flawlessly on
                any device.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="final-cta-container">
          <h2 id="cta">Ready to upgrade your career?</h2>
          <p>
            Join thousands of professionals landing their dream roles with
            precision- crafted resumes.
          </p>
          <a href="#">Create Your Resume Now</a>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-copyright"></div>
        <nav className="footer-nav">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Support</a>
        </nav>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
