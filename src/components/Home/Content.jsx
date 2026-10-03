export default function Content() {
  const CONTENT_DATA = [
    {
      icon: "mobile_arrow_right",
      headline: "Structured Input",
      text: "Enter your history once. Our modular schema keeps your data clean and reusable.",
    },
    {
      icon: "waves",
      headline: "Algorithmic Spacing",
      text: "White space is calculated automatically to ensure content fits perfectly on 1 or 2 pages.",
    },
    {
      icon: "cloud_download",
      headline: "One-Click Export",
      text: "Generate crisp, text-selectable PDFs that render flawlessly on any device.",
    },
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-max-width-desktop mx-auto px-6 relative z-10">
        <div className="flex flex-col space-y-8 items-center text-center transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-label-md font-label-md text-secondary uppercase tracking-widest mb-4">
            Content
          </span>
          <h2 className="text-headline-lg font-headline-lg text-on-surface">
            Data-driven design, not guesswork.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
            {CONTENT_DATA.map((content, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-surface-container-lowest shadow-sm group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined">
                    {content.icon}
                  </span>
                </div>
                <div>
                  <h4 className="text-body-lg font-body-lg text-on-surface font-semibold mb-2">
                    {content.headline}
                  </h4>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    {content.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
