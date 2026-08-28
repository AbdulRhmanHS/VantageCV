import ArrowRight from "/src/assets/arrow_right.svg?react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <h1>
          Build an <span id="ATS">ATS-Friendly</span> CV in Minutes
        </h1>
        <p>
          Precision engineering for professionals. Create, optimize, and manage
          resumes that pass applicant tracking systems with zero formatting
          headaches.
        </p>
        <a href="#">
          <span>Get Started Free</span> <ArrowRight />
        </a>
      </div>
    </section>
  );
}
