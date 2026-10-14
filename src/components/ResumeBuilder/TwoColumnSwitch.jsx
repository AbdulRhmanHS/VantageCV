import { Columns3, StretchHorizontal } from "lucide-react";

export default function TwoColumnSwitch({ layout, setLayout }) {
  return (
    <div>
      <label className="block lg:hidden text-xs font-semibold text-on-primary-fixed mb-2 uppercase tracking-wide">
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
          <StretchHorizontal size={17} />
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
          <Columns3 size={17} />
          <span>2 Columns</span>
        </button>
      </div>
    </div>
  );
}
