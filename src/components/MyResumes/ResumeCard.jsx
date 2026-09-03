export default function ResumeCard({ title, lastEdit }) {
  return (
    <div className="flex flex-col bg-surface rounded shadow-sm border border-outline-variant overflow-hidden h-full hover:shadow-md transition-shadow relative group">
      <div className="bg-surface-container-high relative overflow-hidden flex items-center justify-center p-6 h-48">
        <div className="absolute inset-0 opacity-10 bg-linear-to-br from-primary via-transparent to-transparent"></div>
        <div className="w-full h-full bg-surface rounded shadow-sm flex flex-col p-4 opacity-80 rotate-2 scale-105 group-hover:rotate-0 group-hover:scale-100 transition-all duration-300">
          <div className="w-1/2 h-2 bg-outline-variant rounded mb-2"></div>
          <div className="w-3/4 h-1.5 bg-outline-variant/50 rounded mb-1"></div>
          <div className="w-2/3 h-1.5 bg-outline-variant/50 rounded mb-4"></div>
          <div className="w-full h-1 bg-outline-variant/30 rounded mb-1"></div>
          <div className="w-full h-1 bg-outline-variant/30 rounded mb-1"></div>
          <div className="w-4/5 h-1 bg-outline-variant/30 rounded mb-4"></div>
          <div className="w-full h-1 bg-outline-variant/30 rounded mb-1"></div>
          <div className="w-3/4 h-1 bg-outline-variant/30 rounded"></div>
        </div>
        <div className="absolute top-4 right-4 bg-surface-container text-on-surface-variant font-label-md text-[10px] uppercase tracking-wider px-2 py-1 rounded shadow-sm">
          Status
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <h3 className="font-headline-md text-headline-md text-on-surface mb-2 truncate">
          {title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-4 text-sm">
          Last edited: {lastEdit} ago
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex gap-2">
            <button className="bg-surface-container text-on-surface font-label-md text-[11px] px-2 py-1 rounded uppercase tracking-wide">
              Edit
            </button>
            <button className="bg-surface-container text-on-surface font-label-md text-[11px] px-2 py-1 rounded uppercase tracking-wide">
              Export
            </button>
          </div>
          <button className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors">
            <span className="material-symbols-outlined text-[20px]">
              more_vert
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
