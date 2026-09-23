export default function SkillInputs({ skill, onInputChange }) {
  return (
    <>
      <div className="col-span-2">
        <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
          Category Name
        </label>
        <input
          className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          type="text"
          value={skill.category}
          onChange={(e) => onInputChange(skill.id, "category", e.target.value)}
        />
      </div>
      <div className="col-span-2">
        <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
          Skills (comma separated)
        </label>
        <input
          className="w-full bg-surface-container-lowest border border-outline-variant rounded px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          type="text"
          value={skill.skillItems}
          onChange={(e) =>
            onInputChange(skill.id, "skillItems", e.target.value)
          }
        />
      </div>
    </>
  );
}
