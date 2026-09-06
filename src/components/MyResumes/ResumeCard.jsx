// TODO: Attach the cards to the resume data in the builder
// TODO: Make the pen icon rename the title of the CV
// TODO: Make the lastEdit record date with any edit made
// TODO: Make the build button functional open the builder with the current CV data
// TODO: Make an active state on last opened CV by changing the border color to bg-secondary and adding active an span indicator
// TODO: Make the language dropdown menu functional
// TODO: Make the export button functional by exporting as a PDF
// TODO: Make an option for exporting as JSON to be able to import it later
// TODO: Make the 3 dot button work by showing another menu which has the delete option
// TODO: Make the delete functional

export default function ResumeCard({ title, lastEdit, name, job, sections }) {
  return (
    <div class="flex flex-col bg-surface-container-lowest rounded-xl border border-outline-variant/80 shadow-sm overflow-hidden h-full transition-all hover:shadow-md hover:border-outline-variant relative">
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
            English
            <span className="material-symbols-outlined text-[12px]!">
              expand_more
            </span>
          </span>
        </div>
        <div className="bg-surface-container-low/60 rounded p-3 mb-3 border border-outline-variant/30">
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-sm text-on-surface truncate">
              {name}
            </span>
            <span className="text-[11px] px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant">
              {sections} sections
            </span>
          </div>
          <p className="text-xs text-on-surface-variant truncate">{job}</p>
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
          <button className="w-8 h-8 rounded hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors">
            <span className="material-symbols-outlined text-[18px]!">
              more_vert
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
