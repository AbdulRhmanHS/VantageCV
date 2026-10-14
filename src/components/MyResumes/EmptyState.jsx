import { FileText, Sparkles } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="grow flex flex-col items-center justify-center max-w-lg mx-auto">
      <div className="relative mb-6 group cursor-pointer">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-surface-container-low flex items-center justify-center shadow-inner transition-transform duration-300 group-hover:scale-105">
          <div className="w-16 h-20 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col p-2.5 justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-4 h-4 bg-surface-container-high rounded-bl-xs"></div>
            <div className="flex items-center gap-1.5 pt-0.5">
              <span className="w-4 h-1.5 rounded-full bg-secondary"></span>
              <span className="w-6 h-1 rounded bg-surface-container-high"></span>
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="w-full h-1 rounded bg-surface-container"></span>
              <span className="w-4/5 h-1 rounded bg-surface-container"></span>
              <span className="w-full h-1 rounded bg-surface-container"></span>
              <span className="w-2/3 h-1 rounded bg-surface-container"></span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <span className="w-3 h-1 rounded bg-surface-container-high"></span>
              <Sparkles size={14} className="text-secondary" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md">
          <FileText size={16} />
        </div>
      </div>
      <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight mb-2">
        No resumes yet
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-8 leading-relaxed">
        Create your first resume to get started. Choose from ATS-tested formats
        engineered for modern hiring pipelines.
      </p>
    </div>
  );
}
