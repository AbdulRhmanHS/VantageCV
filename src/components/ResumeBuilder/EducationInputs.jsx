export default function EducationInputs({ edu, onInputChange }) {
  return (
    <>
      <div className="col-span-2">
        <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
          School / University
        </label>
        <input
          type="text"
          value={edu.school}
          onChange={(e) => onInputChange(edu.id, "school", e.target.value)}
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
          Degree / Field of Study
        </label>
        <input
          type="text"
          value={edu.degree}
          onChange={(e) => onInputChange(edu.id, "degree", e.target.value)}
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
          Graduation Date
        </label>
        <input
          type="text"
          value={edu.date}
          onChange={(e) => onInputChange(edu.id, "date", e.target.value)}
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <div className="col-span-2">
        <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
          Description (Optional)
        </label>
        <textarea
          type="text"
          value={edu.description}
          onChange={(e) => onInputChange(edu.id, "description", e.target.value)}
          className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
          rows="3"
        ></textarea>
      </div>
    </>
  );
}
