// TODO: Make each tab show its own section

import { createPortal } from "react-dom";
import PDFPreview from "./PDFPreview";

export default function PDFModal({
  isOpen,
  onClose,
  personalInfo,
  experiences,
  educations,
}) {
  if (!isOpen) return;

  return createPortal(
    <div className="lg:hidden relative">
      {/* Modal Overlay */}
      <div
        onClick={onClose}
        className="fixed top-0 left-0 w-full min-h-screen z-40 bg-slate-900/70 backdrop-blur-sm"
      ></div>
      <div
        onClick={(e) => e.preventDefault()}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-41 bg-surface-container-lowest rounded-t-2xl rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[94vh] transition-all"
      >
        {/* Modal Header */}
        <div className="px-4 pt-3 pb-3 border-b border-slate-200 bg-surface-container-lowest flex flex-col gap-2 sticky top-0 z-30">
          <div className="w-10 h-1 rounded-full bg-slate-300 self-center mb-0.5"></div>
          <div className="flex items-center justify-between">
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-slate-900 leading-tight truncate">
                PDF Preview &amp; Settings
              </h2>
            </div>
            <button
              className="w-9 h-9 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 flex items-center justify-center transition-colors shrink-0"
              onClick={onClose}
              title="Close"
            >
              <span className="material-symbols-outlined text-[20px]">
                close
              </span>
            </button>
          </div>
        </div>
        {/* Modal Navigation / Section Quick Jump Tabs */}
        <div className="px-3 py-2 bg-surface-container-low border-b border-slate-200 flex items-center justify-between gap-2 text-xs font-medium text-slate-600">
          <div className="flex items-center p-0.5 bg-surface-container rounded-lg flex-1">
            <button
              className="px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all flex items-center gap-1.5"
              id="tabSettings"
            >
              <span className="material-symbols-outlined text-[15px] text-blue-600">
                tune
              </span>
              <span>Settings</span>
            </button>
            <button
              className="px-3 py-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-white/60 transition-all flex items-center gap-1.5"
              id="tabPreview"
            >
              <span className="material-symbols-outlined text-[15px]">
                description
              </span>
              <span>PDF Sheet</span>
            </button>
          </div>
          <button
            className="h-8 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium flex items-center gap-1 transition-colors shadow-xs shrink-0"
            id="downloadPdfQuick"
            title="Download PDF"
          >
            <span className="material-symbols-outlined text-[16px]">
              download
            </span>
            <span className="text-[11px] font-semibold hidden sm:inline">
              PDF
            </span>
          </button>
        </div>
        {/* Modal Body */}
        <div
          className="overflow-y-auto p-5 space-y-6 flex-1 bg-surface"
          id="modalContentContainer"
        >
          <section
            className="bg-surface-container-lowest p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm space-y-4"
            id="settingsPanel"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-600 text-[20px]">
                  display_settings
                </span>
                <h3 className="text-sm font-semibold text-slate-900">
                  Header Settings
                </h3>
              </div>
              <span className="text-[11px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-medium border border-blue-100">
                Live Updated
              </span>
              <div className="__gb-gb-badge __gb-gb-skip"></div>
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  Layout Format
                </label>
                <div className="grid grid-cols-2 gap-1 p-1 bg-surface-container-low rounded-lg border border-slate-200">
                  <button
                    className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-md bg-white text-slate-900 font-medium shadow-xs text-xs transition-all border border-slate-200/60"
                    id="btnColOne"
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      view_agenda
                    </span>
                    <span>Single Col</span>
                  </button>
                  <button
                    className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-md text-slate-600 hover:text-slate-900 text-xs transition-all"
                    id="btnColTwo"
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      view_column
                    </span>
                    <span>2 Columns</span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">
                    Typography
                  </label>
                  <div className="relative"></div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="bg-surface-container-lowest p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm space-y-3"
            id="sectionsReorderPanel"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-indigo-600 text-[20px]">
                  reorder
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Reorder Main Sections
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Click up/down arrows to shift section ordering in the PDF
                    output
                  </p>
                </div>
              </div>
              <button className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors">
                <span className="material-symbols-outlined text-[14px]">
                  restart_alt
                </span>
                <span className="">Reset</span>
              </button>
            </div>
            <div className="space-y-2" id="sectionSortableList">
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low/80 border border-slate-200/80 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-slate-200/70 text-slate-600 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[16px]">
                      person
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-800">
                      General Information &amp; Profile
                    </span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-500 text-[10px] font-medium border border-slate-200">
                  Fixed Top
                </span>
              </div>
              <div
                className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all text-xs group"
                id="reorderItemExperience"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-blue-50 text-blue-600 flex items-center justify-center font-medium">
                    <span className="material-symbols-outlined text-[16px]">
                      work
                    </span>
                  </div>
                  <div>
                    <span
                      className="font-semibold text-slate-900"
                      id="expOrderLabel"
                    >
                      Experience
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 p-0.5 bg-surface-container rounded border border-slate-200">
                  <button
                    className="w-7 h-7 rounded flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-colors opacity-30 cursor-not-allowed"
                    id="expMoveUp"
                    title="Move Experience Up"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_upward
                    </span>
                  </button>
                  <button
                    className="w-7 h-7 rounded flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-colors"
                    id="expMoveDown"
                    title="Move Experience Down"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_downward
                    </span>
                  </button>
                </div>
              </div>
              <div
                className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all text-xs group"
                id="reorderItemEducation"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center font-medium">
                    <span className="material-symbols-outlined text-[16px]">
                      school
                    </span>
                  </div>
                  <div>
                    <span
                      className="font-semibold text-slate-900"
                      id="eduOrderLabel"
                    >
                      Education
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 p-0.5 bg-surface-container rounded border border-slate-200">
                  <button
                    className="w-7 h-7 rounded flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-colors"
                    id="eduMoveUp"
                    title="Move Education Up"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_upward
                    </span>
                  </button>
                  <button
                    className="w-7 h-7 rounded flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-colors opacity-30 cursor-not-allowed"
                    id="eduMoveDown"
                    title="Move Education Down"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_downward
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section
            className="bg-surface-container-lowest p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm space-y-3"
            id="pdfPreviewContainer"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-slate-700 text-[20px]">
                  picture_as_pdf
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    Live Resume PDF Sheet
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Simulating responsive A4 printable sheet preview
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-[11px] text-slate-500 bg-surface-container-high px-2 py-0.5 rounded font-mono"
                  id="zoomLevelBadge"
                >
                  100% Scale
                </span>
                <button
                  className="w-7 h-7 rounded text-slate-500 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-center"
                  title="Toggle full width zoom"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    zoom_in
                  </span>
                </button>
              </div>
            </div>
            <PDFPreview
              personalInfo={personalInfo}
              experiences={experiences}
              educations={educations}
              isHidden={false}
            />
          </section>
        </div>
        {/* Modal Footer Actions */}
        <div className="px-5 py-3.5 bg-surface-container-lowest border-t border-slate-200 flex items-center justify-end gap-3 sticky bottom-0 z-30">
          <div className="flex items-center gap-2">
            <button
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm flex items-center gap-1.5"
              id="applyModalBtn"
            >
              <span className="material-symbols-outlined text-[16px]">
                check
              </span>
              <span className="">Apply Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
