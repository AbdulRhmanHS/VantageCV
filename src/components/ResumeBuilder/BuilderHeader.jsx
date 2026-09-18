// DONE: Make the download button functional

import { Link } from "react-router-dom";

export default function BuilderHeader() {
  return (
    <header className="fixed top-0 right-0 h-16 bg-surface/80 backdrop-blur-md border-b border-outline-variant z-40 flex items-center justify-between px-8 left-0">
      <div className="flex items-center gap-4 text-on-surface-variant">
        <Link
          to="/resumes"
          className="text-label-md flex items-center hover:text-on-surface"
        >
          <span className="material-symbols-outlined mr-2 sm:text-sm!">
            arrow_back
          </span>
          <span className="hidden sm:inline">Back to Resumes</span>
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={() => window.print()}
          className="flex items-center text-label-md p-1.5 sm:px-4 sm:py-2 bg-primary text-on-primary rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined sm:hidden!">download</span>
          <span className="hidden sm:inline">Download</span>
        </button>
      </div>
    </header>
  );
}
