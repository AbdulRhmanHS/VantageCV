import { useRef, useState, useEffect } from "react";
import ResumeContent from "./ResumeContent";

export default function PDFPreview({
  personalInfo,
  experiences,
  educations,
  skills,
  layout,
  font,
  spacing,
  language,
  isHidden = true,
}) {
  // Fixed A4 pixel dimensions (at standard 96 DPI: 210mm = ~794px, 297mm = ~1123px)
  const resizingRef = useRef(null);
  const [scale, setScale] = useState(1);
  const TARGET_WIDTH = 794;
  const TARGET_HEIGHT = 1123;

  useEffect(() => {
    const handleResize = () => {
      if (!resizingRef.current) return;
      const parentWidth = resizingRef.current.clientWidth - 64;
      const newScale = parentWidth / TARGET_WIDTH;
      setScale(newScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={resizingRef}
      className={`lg:flex lg:w-1/2 bg-surface p-8 overflow-y-auto justify-center lg:sticky lg:top-16 lg:h-[calc(100vh-160px)] ${
        isHidden ? "hidden" : "flex"
      }`}
    >
      <div
        style={{
          width: TARGET_WIDTH * scale,
          height: TARGET_HEIGHT * scale,
        }}
        className="shrink-0"
      >
        <div
          style={{
            width: `${TARGET_WIDTH}px`,
            minHeight: `${TARGET_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
          className="bg-surface-container-lowest shadow-xl origin-top"
        >
          <ResumeContent
            personalInfo={personalInfo}
            experiences={experiences}
            educations={educations}
            skills={skills}
            layout={layout}
            font={font}
            spacing={spacing}
            language={language}
          />
        </div>
      </div>
    </div>
  );
}
