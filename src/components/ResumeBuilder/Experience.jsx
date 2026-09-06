export default function Experience() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
      <button className="w-full flex items-center justify-between p-6 bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined">work</span>
          </div>
          <h2 className="text-headline-md font-headline-md text-on-surface">
            Experience
          </h2>
        </div>
        <span
          // className="{'rotate-180': activeSection === 'experience'}"
          className="material-symbols-outlined text-on-surface-variant transition-transform duration-300"
        >
          expand_more
        </span>
      </button>
      <div
        className="p-6 pt-0 border-t border-outline-variant/30"
        x-collapse=""
        x-show="activeSection === 'experience' || activeSection === 'all'"
      >
        <div className="mt-6 p-5 rounded-lg relative group">
          <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab">
            <span className="material-symbols-outlined text-outline">
              drag_indicator
            </span>
          </div>
          <button className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors">
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
        <button className="mt-6 w-full py-4 border-2 border-dashed border-outline-variant rounded-lg text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 font-label-md text-label-md">
          <span className="material-symbols-outlined">add_circle</span>
          Add Position
        </button>
      </div>
    </div>
  );
}
