import { Reorder, useDragControls } from "framer-motion";

export default function ReorderableFormCard({ item, id, onRemove, children }) {
  const controls = useDragControls();

  return (
    <Reorder.Item
      key={id}
      value={item}
      dragListener={false}
      dragControls={controls}
      animate={{ scale: 1 }}
      whileDrag={{ scale: 1.02 }}
    >
      <div className="border-t border-outline-variant/30 no-select">
        <div className="mt-6 p-5 bg-surface rounded-lg relative group">
          {/* Drag Handle */}
          <div
            onPointerDown={(e) => controls.start(e)}
            className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab touch-none"
          >
            <span className="material-symbols-outlined text-outline">
              drag_indicator
            </span>
          </div>

          {/* Delete Button */}
          <button
            type="button"
            onClick={onRemove}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors"
          >
            <span className="material-symbols-outlined text-sm!">delete</span>
          </button>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4">{children}</div>
        </div>
      </div>
    </Reorder.Item>
  );
}
