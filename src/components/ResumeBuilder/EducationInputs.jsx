import { Reorder, useDragControls } from "framer-motion";

export default function EducationInputs({
  edu,
  school,
  degree,
  date,
  description,
  id,
  onRemove,
  onInputChange,
}) {
  const controls = useDragControls();

  return (
    <Reorder.Item
      key={id}
      value={edu}
      dragListener={false}
      dragControls={controls}
      animate={{ scale: 1 }}
      whileDrag={{
        scale: 1.02,
      }}
    >
      <div className="border-t border-outline-variant/30 no-select">
        <div className="mt-6 p-5 bg-surface rounded-lg relative group">
          <div
            onPointerDown={(e) => controls.start(e)}
            className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab"
          >
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
            <div className="col-span-2">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                School / University
              </label>
              <input
                type="text"
                value={school}
                onChange={(e) => onInputChange(id, "school", e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Degree / Field of Study
              </label>
              <input
                type="text"
                value={degree}
                onChange={(e) => onInputChange(id, "degree", e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Graduation Date
              </label>
              <input
                type="text"
                value={date}
                onChange={(e) => onInputChange(id, "date", e.target.value)}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-label-md font-label-md text-on-surface-variant mb-1">
                Description (Optional)
              </label>
              <textarea
                type="text"
                value={description}
                onChange={(e) =>
                  onInputChange(id, "description", e.target.value)
                }
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-2 text-body-md font-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </Reorder.Item>
  );
}
