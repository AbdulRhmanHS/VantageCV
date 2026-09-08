export default function InputCard({
  children,
  icon,
  title,
  addPos,
  isOpen = false,
  onAdd,
}) {
  return (
    <details
      open={isOpen}
      className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden transition-all duration-300 group"
    >
      <summary className="w-full flex items-center justify-between p-6 bg-surface-container-lowest hover:bg-surface-container-low transition-colors select-none list-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <h2 className="text-headline-md font-headline-md text-on-surface">
            {title}
          </h2>
        </div>
        <span className="material-symbols-outlined text-on-surface-variant transition-transform group-open:rotate-180 duration-300">
          expand_more
        </span>
      </summary>
      <div className="flex flex-col gap-6 p-6 pt-0">
        {children}
        {addPos !== false && (
          <button
            type="button"
            onClick={onAdd}
            className="w-full py-4 border-2 border-dashed border-outline-variant rounded-lg text-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 font-label-md text-label-md justify-self-center"
          >
            <span className="material-symbols-outlined">add_circle</span>
            Add {title}
          </button>
        )}
      </div>
    </details>
  );
}
