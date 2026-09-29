import ResumeCardMenu from "./ResumeCardMenu";

export default function ResumeCard({
  itemKey,
  title,
  lastEdit,
  name,
  lang,
  removeCard,
}) {
  return (
    <div className="flex flex-col bg-surface-container-lowest rounded-xl border border-outline-variant/80 shadow-sm overflow-hidden h-full transition-all hover:shadow-md hover:border-outline-variant relative">
      <div className="p-5 flex flex-col grow">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3
            className="font-semibold text-base text-on-surface tracking-tight truncate flex-1"
            title={title}
          >
            {title}
          </h3>
          <button className="text-on-surface-variant hover:text-secondary transition-colors p-1 -mr-1">
            <span className="material-symbols-outlined text-[16px]!">edit</span>
          </button>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-xs text-on-surface-variant mb-4">
          <span className="inline-flex items-center gap-1">
            <span className="material-symbols-outlined text-[14px]!">
              calendar_today
            </span>
            Updated {lastEdit}
          </span>
          <span className="text-outline-variant">•</span>
          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-surface-container text-[11px] font-medium text-on-surface-variant">
            {lang}
            <span className="material-symbols-outlined text-[12px]!">
              expand_more
            </span>
          </span>
        </div>
        <div className="bg-surface-container-low/60 rounded p-3 mb-3 border border-outline-variant/30">
          <div className="flex items-center justify-between">
            <span className="font-semibold text-sm text-on-surface truncate">
              {name}
            </span>
          </div>
        </div>
        <div className="mt-auto pt-3 border-t border-outline-variant/40 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-1">
            <a
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-primary text-on-primary hover:bg-on-surface font-label-md text-xs rounded-lg transition-colors shadow-sm flex-1 font-medium"
              href="#"
            >
              <span className="material-symbols-outlined text-[14px]!">
                edit_note
              </span>
              Build
            </a>
            <a
              className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-xs rounded-lg border border-outline-variant/60 transition-colors flex-1 font-medium"
              href="#"
            >
              <span className="material-symbols-outlined text-[14px]!">
                download
              </span>
              Export
            </a>
          </div>
          <ResumeCardMenu deleteFunc={() => removeCard(itemKey)} />
        </div>
      </div>
    </div>
  );
}
