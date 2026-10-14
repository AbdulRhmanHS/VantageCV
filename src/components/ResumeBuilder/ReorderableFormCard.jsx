import { Reorder, useDragControls } from "framer-motion";
import { GripVertical, Trash } from "lucide-react";

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
      <div className="no-select">
        <div className="mt-6 p-5 bg-surface rounded-lg relative group">
          {/* Drag Handle */}
          <div
            onPointerDown={(e) => controls.start(e)}
            className="absolute -left-6 top-1/2 -translate-y-1/2 md:opacity-0 md:group-hover:opacity-100 transition-opacity cursor-grab touch-none"
          >
            <GripVertical className="text-outline" />
          </div>

          {/* Delete Button */}
          <button
            type="button"
            onClick={onRemove}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-error transition-colors"
          >
            <Trash size={14} />
          </button>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4">{children}</div>
        </div>
      </div>
    </Reorder.Item>
  );
}
