import { createPortal } from "react-dom";

export default function CreateResumeModal({ isOpen, onClose }) {
  if (!isOpen) return;

  return createPortal(
    <div
      onClick={(e) => {
        if (e.target.className.slice(0, 5) === "fixed") onClose();
      }}
      className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-gray-900/40 backdrop-blur-xs z-99 px-2 xs:px-4"
    >
      <div
        className="w-full max-w-lg bg-surface-container-lowest rounded-xl shadow-2xl border border-outline-variant/60 overflow-hidden transform transition-transform duration-200 z-100"
        id="create-resume-modal"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/40 bg-surface-container-low/40">
          <div>
            <h3 className="font-headline-md text-base font-semibold text-on-surface tracking-tight">
              Create New Resume
            </h3>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Enter details to start engineering your professional CV
            </p>
          </div>
          <button
            aria-label="Close dialog"
            className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
            onClick={onClose}
          >
            <span className="material-symbols-outlined text-[20px]!">
              close
            </span>
          </button>
        </div>
        <form
          className="p-6 flex flex-col gap-4"
          id="create-resume-form"
          // onsubmit="event.preventDefault();"
        >
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-semibold text-on-surface tracking-wide"
              htmlFor="resume-title-input"
            >
              Resume Name <span className="text-secondary">*</span>
            </label>
            <input
              className="w-full px-3.5 py-2.5 text-sm text-on-surface bg-surface-container-lowest border border-outline-variant/80 rounded-lg outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              id="resume-title-input"
              placeholder="e.g. Software Engineer 2026"
              required=""
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-semibold text-on-surface tracking-wide"
              htmlFor="full-name-input"
            >
              Full Name <span className="text-secondary">*</span>
            </label>
            <input
              className="w-full px-3.5 py-2.5 text-sm text-on-surface bg-surface-container-lowest border border-outline-variant/80 rounded-lg outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              id="full-name-input"
              placeholder="e.g. AbdulRahman Ibn Hassn"
              required=""
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs font-semibold text-on-surface tracking-wide"
              htmlFor="language-select"
            >
              Language
            </label>
            <select
              className="w-full px-3.5 py-2.5 text-sm text-on-surface bg-surface-container-lowest border border-outline-variant/80 rounded-lg outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
              id="language-select"
            >
              <option value="English">English</option>
              <option value="Arabic">Arabic (العربية)</option>
            </select>
          </div>
          <div className="flex items-center justify-end pt-5 mt-2 border-t border-outline-variant/40">
            <button
              className="w-auto px-5 py-2.5 text-xs font-label-md font-medium text-on-primary bg-primary hover:bg-on-surface rounded-lg shadow-sm transition-colors flex items-center justify-center gap-1.5"
              id="submit-create-resume-btn"
              type="submit"
            >
              <span className="material-symbols-outlined text-[16px]!">
                add
              </span>
              Create Resume
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}
