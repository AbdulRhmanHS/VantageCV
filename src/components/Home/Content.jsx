import InputLogo from "/src/assets/input.svg?react";
import SpacingLogo from "/src/assets/spacing.svg?react";
import CloudLogo from "/src/assets/cloud_arrow_down.svg?react";

const CONTENT_DATA = [
  {
    icon: <InputLogo />,
    title: "Structured Input",
    desc: "Enter your history once. Our modular schema keeps your data clean and reusable.",
  },
  {
    icon: <SpacingLogo />,
    title: "Algorithmic Spacing",
    desc: "White space is calculated automatically to ensure content fits perfectly on 1 or 2 pages.",
  },
  {
    icon: <CloudLogo />,
    title: "One-Click Export",
    desc: "Generate crisp, text-selectable PDFs that render flawlessly on any device.",
  },
];

export default function Content() {
  return (
    <section className="content">
      <div className="content-container">
        <div className="content-head">
          <h2>CONTENT</h2>
          <h3>Data-driven design, not guesswork</h3>
        </div>
        <div className="content-grid">
          {CONTENT_DATA.map((content, idx) => (
            <article key={idx} className="content-card">
              <div className="content-logo-box">{content.icon}</div>
              <h4>{content.title}</h4>
              <p>{content.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
