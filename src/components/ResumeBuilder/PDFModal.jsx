// DONE: Make each tab show its own section
// DONE: Make the settings functional

import { createPortal } from "react-dom";
import { useState } from "react";
import PDFPreview from "./PDFPreview";

export default function PDFModal({
  isOpen,
  onClose,
  personalInfo,
  experiences,
  educations,
  layout,
  setLayout,
  font,
  setFont,
  spacing,
  setSpacing,
  language,
  setLanguage,
}) {
  const [menu, setMenu] = useState("pdf");

  if (!isOpen) return;

  return createPortal(
    <div className="lg:hidden relative">
      <div
        onClick={(e) => e.preventDefault()}
        className="h-svh w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-41 bg-surface overflow-hidden flex flex-col"
      >
        {/* Modal Header */}
        <header className="bg-white border-b border-[#e2e8f0] px-4 py-3.5 flex items-center justify-between shrink-0 shadow-xs">
          <div className="min-w-0 pr-2">
            <h1 className="text-base font-bold text-on-primary-fixed tracking-tight leading-snug">
              PDF Preview &amp; Settings
            </h1>
            <p className="text-xs text-slate-500 leading-none mt-0.5">
              Mobile layout &amp; printable preview
            </p>
          </div>
          <button
            className="w-9 h-9 rounded-lg text-slate-500 hover:text-on-primary-fixed hover:bg-slate-100 flex items-center justify-center transition-colors shrink-0"
            onClick={() => {
              setMenu("pdf");
              onClose();
            }}
          >
            <span className="material-symbols-outlined text-[20px]!">
              close
            </span>
          </button>
        </header>
        {/* Modal Navigation / Section Quick Jump Tabs */}
        <nav className="px-4 border-b border-[#e2e8f0] bg-white shrink-0">
          <div className="flex items-center max-w-md mx-auto w-full px-4 gap-6">
            <button
              type="button"
              onClick={() => setMenu("pdf")}
              className={`flex-1 py-2 px-3 rounded-md text-xs transition-all flex items-center justify-center gap-1.5 ${
                menu === "pdf"
                  ? "bg-white text-on-primary-fixed font-semibold shadow-xs"
                  : "text-slate-500 hover:text-on-primary-fixed! font-medium"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[18px]! transition-colors ${
                  menu === "pdf" ? "text-secondary" : ""
                }`}
              >
                description
              </span>
              <span>PDF Sheet</span>
            </button>
            <button
              onClick={() => setMenu("settings")}
              className={`flex-1 py-2 px-3 rounded-md text-xs transition-all flex items-center justify-center gap-1.5 ${
                menu === "settings"
                  ? "bg-white text-on-primary-fixed font-semibold shadow-xs"
                  : "text-slate-500 hover:text-on-primary-fixed font-medium"
              }`}
            >
              <span
                className={`material-symbols-outlined text-[18px]! transition-colors ${
                  menu === "settings" ? "text-secondary" : ""
                }`}
              >
                tune
              </span>
              <span>Settings</span>
            </button>
          </div>
        </nav>
        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto bg-surface">
          <div
            className={`${menu === "settings" ? "flex" : "hidden"} flex-col min-h-full justify-between`}
          >
            <div className="flex flex-col mb-0 p-5">
              <section className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-on-primary-fixed mb-2 uppercase tracking-wide">
                    Layout Format
                  </label>
                  <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-200/70 rounded-lg border border-[#e2e8f0]">
                    <button
                      type="button"
                      onClick={() => setLayout("one-col")}
                      className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs transition-all ${
                        layout === "one-col"
                          ? "bg-white text-on-primary-fixed font-semibold shadow-xs border border-[#e2e8f0]"
                          : "text-slate-600 hover:text-on-primary-fixed font-medium"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[17px]!">
                        view_agenda
                      </span>
                      <span>Single Col</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setLayout("two-col")}
                      className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-xs transition-all ${
                        layout === "two-col"
                          ? "bg-white text-on-primary-fixed font-semibold shadow-xs border border-[#e2e8f0]"
                          : "text-slate-600 hover:text-on-primary-fixed font-medium"
                      }`}
                    >
                      <span className="material-symbols-outlined text-[17px]!">
                        view_column
                      </span>
                      <span>2 Columns</span>
                    </button>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="fontSelect"
                    className="block text-xs font-semibold text-on-primary-fixed mb-1.5 uppercase tracking-wide"
                  >
                    Font
                  </label>
                  <div className="relative">
                    <select
                      id="fontSelect"
                      value={font}
                      onChange={(e) => setFont(e.target.value)}
                      className="w-full appearance-none bg-white border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-xs text-on-primary-fixed focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary font-medium transition-colors cursor-pointer pr-9 shadow-xs"
                    >
                      <option value="source-serif">Source Serif 4</option>
                      <option value="inter">Inter</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[20px]!">
                      expand_more
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="spacingSelect"
                    className="block text-xs font-semibold text-on-primary-fixed mb-1.5 uppercase tracking-wide"
                  >
                    Spacing
                  </label>
                  <div className="relative">
                    <select
                      id="spacingSelect"
                      value={spacing}
                      onChange={(e) => setSpacing(e.target.value)}
                      className="w-full appearance-none bg-white border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-xs text-on-primary-fixed focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary font-medium transition-colors cursor-pointer pr-9 shadow-xs"
                    >
                      <option value="spacious">Spacious</option>
                      <option value="compact">Compact</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
                {/* DONE: Make font work */}
                <div>
                  <label
                    htmlFor="languageSelect"
                    className="block text-xs font-semibold text-on-primary-fixed mb-1.5 uppercase tracking-wide"
                  >
                    Language
                  </label>
                  <div className="relative">
                    <select
                      id="languageSelect"
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full appearance-none bg-white border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-xs text-on-primary-fixed focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary font-medium transition-colors cursor-pointer pr-9 shadow-xs"
                    >
                      <option value="english">English</option>
                      <option value="arabic">Arabic</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[20px]">
                      expand_more
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* PDF Preview */}
          <section
            className={`${menu === "pdf" ? "block" : "hidden"} space-y-4`}
            id="previewTabContent"
          >
            <div className="flex items-center justify-between w-full px-8 pt-4 mb-0">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                A4 Printable Page
              </span>
              <button
                type="button"
                onClick={() => alert("Preparing PDF for download...")}
                className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:underline"
              >
                <span className="material-symbols-outlined text-[16px]">
                  download
                </span>
                <span>Download PDF</span>
              </button>
            </div>
            <PDFPreview
              personalInfo={personalInfo}
              experiences={experiences}
              educations={educations}
              layout={layout}
              font={font}
              spacing={spacing}
              language={language}
              isHidden={false}
            />
          </section>
        </div>
      </div>
    </div>,
    document.body,
  );
}
