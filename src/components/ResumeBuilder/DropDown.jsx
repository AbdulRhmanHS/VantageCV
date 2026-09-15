export default function DropDown({ label, value, setFunction, options = [] }) {
  return (
    <div className="lg:flex lg:items-center lg:gap-2">
      <label
        htmlFor="fontSelect"
        className="block text-xs font-semibold text-on-primary-fixed lg:mb-0 mb-1.5 uppercase tracking-wide"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id="fontSelect"
          value={value}
          onChange={(e) => setFunction(e.target.value)}
          className="w-full appearance-none bg-white border border-[#e2e8f0] rounded-lg px-3.5 py-2.5 text-xs text-on-primary-fixed focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary font-medium transition-colors cursor-pointer pr-9 shadow-xs"
        >
          {options.map((opt) => (
            <option key={opt.val} value={opt.val}>
              {opt.name}
            </option>
          ))}
        </select>
        <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-[20px]!">
          expand_more
        </span>
      </div>
    </div>
  );
}
