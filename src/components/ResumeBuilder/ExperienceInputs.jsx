export default function ExperienceInputs({ exp, onInputChange }) {
  return (
    <>
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
          Job Title
        </label>
        <input
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          type="text"
          value={exp.title}
          onChange={(e) => onInputChange(exp.id, "title", e.target.value)}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
          Company
        </label>
        <input
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          type="text"
          value={exp.company}
          onChange={(e) => onInputChange(exp.id, "company", e.target.value)}
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
          value={exp.date}
          onChange={(e) => onInputChange(exp.id, "date", e.target.value)}
        />
      </div>
      <div className="col-span-2">
        <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
          Description
        </label>
        <textarea
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
          rows="3"
          value={exp.description}
          onChange={(e) => onInputChange(exp.id, "description", e.target.value)}
        ></textarea>
      </div>
    </>
  );
}
