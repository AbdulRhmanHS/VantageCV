import { ChevronDown } from "lucide-react";
import FloatingMenu from "./FloatingMenu";

export default function DropDown({
  label,
  currentSelect,
  menuButtons,
  isLabelUpperCase = true,
  isRowLayout = true,
}) {
  return (
    <div
      className={`flex flex-col gap-1.5 ${isRowLayout ? "lg:flex-row lg:items-center lg:gap-4" : ""}`}
    >
      <label
        htmlFor="drop-down"
        className={`block text-xs font-semibold text-on-surface tracking-wide ${isLabelUpperCase ? "uppercase" : ""}`}
      >
        {label}
      </label>
      <FloatingMenu menuButtons={menuButtons} selectId="drop-down">
        {(triggerProps) => (
          <div
            {...triggerProps}
            className="bg-surface outline-1 outline-surface-dim hover:bg-inverse-on-surface transition-colors flex items-center justify-between gap-2 min-w-28 p-2 rounded-md select-none"
          >
            <p className="block text-xs text-on-primary-fixed first-letter:uppercase">
              {currentSelect}
            </p>
            <ChevronDown
              size={20}
              className="pointer-events-auto text-slate-400"
            />
          </div>
        )}
      </FloatingMenu>
    </div>
  );
}
