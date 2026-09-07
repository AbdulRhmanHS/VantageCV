export default function ExperienceInputs({ onRemove }) {
  return (
    <div className="border-t border-outline-variant/30">
      <div className="mt-6 p-5 bg-surface rounded-lg relative group">
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
          <span className="material-symbols-outlined text-outline">
            drag_indicator
          </span>
        </div>
        <button
          onClick={onRemove}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors"
        >
          <span className="material-symbols-outlined text-sm!">delete</span>
        </button>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
              Job Title
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              type="text"
              x-model="exp.title"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
              Company
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              type="text"
              x-model="exp.company"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
              Dates
            </label>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/50"
              placeholder="e.g. Jan 2020 - Present"
              type="text"
              x-model="exp.date"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
              Description
            </label>
            <textarea
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
              rows="3"
              x-model="exp.desc"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
