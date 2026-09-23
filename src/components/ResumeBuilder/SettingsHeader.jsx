// DONE: Make the column layout setting functional
// DONE: Make the font setting functional
// DONE: Make the spacing setting functional
// DONE: Add language settings and make it work

import DropDown from "./DropDown";
import TwoColumnSwitch from "./TwoColumnSwitch";

export default function SettingsHeader({
  layout,
  setLayout,
  font,
  setFont,
  spacing,
  setSpacing,
  language,
  setLanguage,
  isHidden = true,
}) {
  return (
    <div
      className={`${isHidden ? "hidden" : "block"} lg:sticky lg:-top-2 lg:z-30 lg:flex lg:items-center lg:justify-between lg:w-full lg:px-6 lg:py-4 lg:bg-surface/90 lg:backdrop-blur-md lg:shadow-sm lg:mt-0 mt-8`}
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 px-6 lg:px-0">
        <TwoColumnSwitch layout={layout} setLayout={setLayout} />
        <div className="h-6 w-px bg-outline-variant hidden lg:inline"></div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 text-on-surface-variant">
          <DropDown
            label={"Font"}
            value={font}
            setFunction={setFont}
            options={[
              { val: "cairo", name: "Cairo" },
              { val: "amiri", name: "Amiri" },
              { val: "source-serif", name: "Source Serif" },
              { val: "inter", name: "Inter" },
            ]}
          />
          <DropDown
            label={"Spacing"}
            value={spacing}
            setFunction={setSpacing}
            options={[
              { val: "spacious", name: "Spacious" },
              { val: "compact", name: "Compact" },
            ]}
          />
          <DropDown
            label={"Language"}
            value={language}
            setFunction={setLanguage}
            options={[
              { val: "english", name: "English" },
              { val: "arabic", name: "Arabic" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
