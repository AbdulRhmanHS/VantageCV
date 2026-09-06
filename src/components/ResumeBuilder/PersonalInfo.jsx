export default function PersonalInfo() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300">
      <button className="w-full flex items-center justify-between p-6 bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">person</span>
          </div>
          <h2 className="text-headline-md font-headline-md text-on-surface">
            General Information
          </h2>
        </div>
        <span
          // className="{'rotate-180': activeSection === 'general'}"
          className="material-symbols-outlined text-on-surface-variant transition-transform duration-300"
        >
          expand_more
        </span>
      </button>
      <div
        className="p-6 pt-0 border-t border-outline-variant/30"
        x-collapse=""
        x-show="activeSection === 'general' || activeSection === 'all'"
      >
        <div className="flex flex-col gap-6 mt-4">
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="grow">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Full Name
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                type="text"
                x-model="personal.name"
              />
            </div>
            <div className="grow">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Email
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                type="email"
                x-model="personal.email"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-6">
            <div className="grow">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Phone
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                type="tel"
                x-model="personal.phone"
              />
            </div>
            <div className="grow">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Location
              </label>
              <input
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                type="text"
                x-model="personal.location"
              />
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
              Professional Summary
            </label>
            <textarea
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              rows="4"
              x-model="personal.summary"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
