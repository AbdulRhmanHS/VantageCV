// TODO: Make the column layout setting functional
// TODO: Make the font setting functional
// TODO: Make the spacing setting functional

export default function SettingsHeader() {
  return (
    <div className="hidden sticky -top-2 z-30 lg:flex items-center justify-between w-full px-6 py-4 bg-surface/90 backdrop-blur-md shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-surface-container rounded-lg p-1">
          <button
            // className="{'bg-surface shadow-sm text-on-surface': layout === 'one-column', 'text-on-surface-variant hover:text-on-surface': layout !== 'one-column'}"
            className="px-3 py-1.5 rounded-md text-label-md font-label-md transition-all flex items-center gap-2 bg-surface shadow-sm text-on-surface"
          >
            <span className="material-symbols-outlined text-sm!">
              view_agenda
            </span>
            One Column
          </button>
          <button
            // className="{'bg-surface shadow-sm text-on-surface': layout === 'two-column', 'text-on-surface-variant hover:text-on-surface': layout !== 'two-column'}"
            className="px-3 py-1.5 rounded-md text-label-md font-label-md transition-all flex items-center gap-2 text-on-surface-variant hover:text-on-surface"
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
            <select className="bg-surface-container text-on-surface text-body-md font-body-md px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
              <option value="serif">Source Serif 4</option>
              <option value="sans">Inter</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-label-md font-label-md">Spacing:</span>
            <select className="bg-surface-container text-on-surface text-body-md font-body-md px-3 py-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
              <option value="compact">Compact</option>
              <option value="spacious">Spacious</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-3"></div>
    </div>
  );
}
