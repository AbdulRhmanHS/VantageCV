export default function Features() {
  const FEATURES_DATA = [
    {
      color: "bg-primary-container",
      icon: "splitscreen",
      headline: "Live Split-Pane Preview",
      text: "See changes instantly. Our dual-pane builder separates data entry from design, ensuring you never break the layout.",
    },
    {
      color: "bg-secondary-container",
      icon: "rule",
      headline: "ATS Optimization",
      text: "Templates structurally designed to be parsed perfectly by Greenhouse, Workday, and Lever.",
    },
    {
      color: "bg-tertiary-container",
      icon: "dashboard_customize",
      headline: "Professional Templates",
      text: "Switch styles with one click. Typography and spacing adapt automatically.",
    },
    {
      color: "bg-on-tertiary-fixed-variant",
      icon: "text_fields",
      headline: "Impeccable Typography",
      text: "Every template utilizes paired Google Fonts designed for maximum readability in both digital and print formats.",
    },
  ];

  return (
    <section className="py-24 bg-background relative" id="features">
      <div className="max-w-max-width-desktop mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-label-md font-label-md text-secondary uppercase tracking-widest mb-4">
            Features
          </span>
          <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">
            Engineered for Success
          </h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">
            Stop fighting with margins. Focus on your content, and let our
            intelligent engine handle the formatting, ATS compliance, and
            typography.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 opacity-100 translate-y-0">
          {FEATURES_DATA.map((feature, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm"
            >
              <div
                className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform`}
              >
                <span className="material-symbols-outlined">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                {feature.headline}
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
