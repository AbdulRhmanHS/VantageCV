export default function ResumesNewBtn() {
  return (
    <button className="flex flex-col items-center justify-center p-8 min-h-87.5 bg-surface-container hover:bg-surface-container-high transition-colors rounded shadow-sm border border-outline-variant group">
      <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
        <span className="material-symbols-outlined text-primary text-3xl">
          add
        </span>
      </div>
      <span className="font-headline-md text-headline-md text-on-surface">
        New Resume
      </span>
      <span className="font-body-md text-body-md text-on-surface-variant mt-2 text-center">
        Start from scratch or choose a template
      </span>
    </button>
  );
}
