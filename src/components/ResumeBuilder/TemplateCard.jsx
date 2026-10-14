import { Reorder } from "framer-motion";
import ReorderableFormCard from "./ReorderableFormCard";
import { ChevronDown, CirclePlus } from "lucide-react";

export default function TemplateCard({
  icon: IconComponent,
  title,
  isOpen = false,
  items,
  onReorder,
  onAdd,
  onRemove,
  renderInputs,
  children,
}) {
  const isDynamic = Boolean(items && renderInputs);

  return (
    <details
      open={isOpen}
      className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300 group"
    >
      <summary className="w-full flex items-center justify-between p-6 bg-surface-container-lowest hover:bg-surface-container-low transition-colors select-none list-none  border-b border-outline-variant/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
            <IconComponent />
          </div>
          <h2 className="text-headline-md font-headline-md text-on-surface">
            {title}
          </h2>
        </div>
        <ChevronDown className="text-on-surface-variant transition-transform group-open:rotate-180 duration-300" />
      </summary>

      <div className="flex flex-col gap-6 p-6 pt-0">
        {isDynamic ? (
          <Reorder.Group axis="y" values={items} onReorder={onReorder}>
            {items.map((item) => (
              <ReorderableFormCard
                key={item.id}
                id={item.id}
                item={item}
                onRemove={() => onRemove(item.id)}
              >
                {renderInputs(item)}
              </ReorderableFormCard>
            ))}
          </Reorder.Group>
        ) : (
          children
        )}

        {onAdd && (
          <button
            type="button"
            onClick={onAdd}
            className="w-full py-4 border-2 border-dashed border-outline-variant rounded-lg text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 font-label-md text-label-md justify-self-center"
          >
            <CirclePlus />
            Add {title}
          </button>
        )}
      </div>
    </details>
  );
}
