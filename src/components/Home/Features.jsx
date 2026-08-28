import SplitLogo from "/src/assets/split_logo.svg?react";
import ListLogo from "/src/assets/list.svg?react";
import TemplatesLogo from "/src/assets/templates.svg?react";
import TypographyLogo from "/src/assets/typography.svg?react";

const FEATURES_DATA = [
  {
    icon: <SplitLogo className="icon" />,
    title: "Live Split-Pane Preview",
    desc: "See changes instantly. Our dual-pane builder separates data entry from design, ensuring you never break the layout.",
  },
  {
    icon: <ListLogo />,
    title: "ATS Optimization",
    desc: "Templates structurally designed to be parsed perfectly by Greenhouse, Workday, and Lever.",
  },
  {
    icon: <TemplatesLogo className="icon" />,
    title: "Professional Templates",
    desc: "Switch styles with one click. Typography and spacing adapt automatically.",
  },
  {
    icon: <TypographyLogo />,
    title: "Impeccable Typography",
    desc: "Every template utilizes paired Google Fonts designed for maximum readability in both digital and print formats.",
  },
];

export default function Features() {
  return (
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
          {FEATURES_DATA.map((feature, idx) => (
            <article key={idx} className="features-card">
              <div className="features-logo-box">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
