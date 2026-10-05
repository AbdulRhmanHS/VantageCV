export default function PersonalInfoInputs({ personalInfo, onInputChange }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-6">
        <div className="grow">
          <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={personalInfo.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
        <div className="grow">
          <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
            Job Position / Target Title
          </label>
          <input
            type="text"
            value={personalInfo.job}
            onChange={(e) => onInputChange("job", e.target.value)}
            placeholder="e.g. Senior Product Designer"
            className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        <div className="grow">
          <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
            Email
          </label>
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            type="email"
            value={personalInfo.email}
            onChange={(e) => onInputChange("email", e.target.value)}
          />
        </div>
        <div className="grow">
          <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
            Phone
          </label>
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            type="tel"
            value={personalInfo.phone}
            onChange={(e) => onInputChange("phone", e.target.value)}
          />
        </div>
      </div>
      <div className="grow">
        <div className="grow">
          <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
            Location
          </label>
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2.5 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            type="text"
            value={personalInfo.address}
            onChange={(e) => onInputChange("address", e.target.value)}
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
          value={personalInfo.proSummary}
          onChange={(e) => onInputChange("proSummary", e.target.value)}
        ></textarea>
      </div>
    </>
  );
}
