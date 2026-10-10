// DONE: Make the column layout setting functional
// DONE: Make the font setting functional
// DONE: Make the spacing setting functional
// DONE: Add language settings and make it work

import DropDown from "../Layout/DropDown";
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
            currentSelect={font}
            menuButtons={[
              { name: "Cairo", clickEvent: () => setFont("cairo") },
              { name: "Amiri", clickEvent: () => setFont("amiri") },
              {
                name: "Source Serif",
                clickEvent: () => setFont("source-serif"),
              },
              { name: "Inter", clickEvent: () => setFont("inter") },
            ]}
          />
          <DropDown
            label={"Spacing"}
            currentSelect={spacing}
            menuButtons={[
              { name: "Spacious", clickEvent: () => setSpacing("spacious") },
              { name: "Compact", clickEvent: () => setSpacing("compact") },
            ]}
          />
          <DropDown
            label={"Language"}
            currentSelect={language}
            menuButtons={[
              { name: "English", clickEvent: () => setLanguage("english") },
              { name: "Arabic", clickEvent: () => setLanguage("arabic") },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
