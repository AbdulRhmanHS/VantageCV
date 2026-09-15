// DONE: Make the column layout setting functional
// DONE: Make the font setting functional
// DONE: Make the spacing setting functional
// DONE: Add language settings and make it work

export default function SettingsHeader({
  layout,
  setLayout,
  setFont,
  setSpacing,
  setLanguage,
}) {
  return (
    <div className="hidden sticky -top-2 z-30 lg:flex items-center justify-between w-full px-6 py-4 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-surface-container rounded-lg p-1">
          <button
            className={`px-3 py-1.5 rounded-md text-label-md font-label-md transition-all flex items-center gap-2 ${layout === "one-col" ? "bg-surface shadow-sm text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
            onClick={() => setLayout("one-col")}
          >
            <span className="material-symbols-outlined text-sm!">
              view_agenda
            </span>
            One Column
          </button>
          <button
            className={`px-3 py-1.5 rounded-md text-label-md font-label-md transition-all flex items-center gap-2 ${layout === "two-col" ? "bg-surface shadow-sm text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
            onClick={() => setLayout("two-col")}
          >
            <span className="material-symbols-outlined text-sm!">
              view_column
            </span>
            Two Column
          </button>
        </div>
        <div className="h-6 w-px bg-outline-variant"></div>
        <div className="flex items-center gap-4 text-on-surface-variant">
          <div className="flex items-center gap-2">
            <span className="text-label-md font-label-md">Font:</span>
            <select
              onChange={(e) => setFont(e.target.value)}
              className="bg-surface-container text-on-surface text-body-md font-body-md px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
            >
              <option value="source-serif">Source Serif 4</option>
              <option value="inter">Inter</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-label-md font-label-md">Spacing:</span>
            <select
              onChange={(e) => setSpacing(e.target.value)}
              className="bg-surface-container text-on-surface text-body-md font-body-md px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
            >
              <option value="spacious">Spacious</option>
              <option value="compact">Compact</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-label-md font-label-md">Language:</span>
            <select
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-surface-container text-on-surface text-body-md font-body-md px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
            >
              <option value="english">English</option>
              <option value="arabic">Arabic</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3"></div>
    </div>
  );
}
