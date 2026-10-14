import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import PDFPreview from "./PDFPreview";
import SettingsHeader from "./SettingsHeader";
import { Download, FileText, SlidersHorizontal, X } from "lucide-react";

export default function PDFModal({
  isOpen,
  onClose,
  personalInfo,
  experiences,
  educations,
  skills,
  layout,
  setLayout,
  font,
  setFont,
  spacing,
  setSpacing,
  language,
  setLanguage,
  handlePrint,
}) {
  const [menu, setMenu] = useState("pdf");

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (isOpen) {
      rootElement.classList.add("overflow-hidden", "fixed", "inset-0");
    } else {
      rootElement.classList.remove("overflow-hidden", "fixed", "inset-0");
    }
  }, [isOpen]);

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
            <X size={20} />
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
              <FileText
                size={18}
                className={`transition-colors ${
                  menu === "pdf" ? "text-secondary" : ""
                }`}
              />
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
              <SlidersHorizontal
                size={18}
                className={`transition-colors ${
                  menu === "settings" ? "text-secondary" : ""
                }`}
              />
              <span>Settings</span>
            </button>
          </div>
        </nav>
        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto bg-surface">
          <div className={`${menu === "settings" ? "block" : "hidden"}`}>
            <SettingsHeader
              layout={layout}
              setLayout={setLayout}
              font={font}
              setFont={setFont}
              spacing={spacing}
              setSpacing={setSpacing}
              language={language}
              setLanguage={setLanguage}
              isHidden={false}
            />
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
                onClick={handlePrint}
                className="inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:underline"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </button>
            </div>
            <PDFPreview
              personalInfo={personalInfo}
              experiences={experiences}
              educations={educations}
              skills={skills}
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
