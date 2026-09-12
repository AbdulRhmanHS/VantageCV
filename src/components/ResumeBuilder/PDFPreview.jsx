import { useRef, useState, useEffect } from "react";

export default function PDFPreview({
  personalInfo,
  experiences,
  educations,
  isHidden = true,
}) {
  const { name, email, phone, address, proSummary } = personalInfo;

  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Fixed A4 pixel dimensions (at standard 96 DPI: 210mm = ~794px, 297mm = ~1123px)
  const TARGET_WIDTH = 794;
  const TARGET_HEIGHT = 1123;

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;

      // Available space inside the sticky container (minus padding)
      const parentWidth = containerRef.current.clientWidth - 64; // 64px = p-8 padding

      // Calculate scale to fit both width constraints
      const newScale = parentWidth / TARGET_WIDTH;

      setScale(newScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${isHidden ? "hidden" : "flex"} lg:flex lg:w-1/2 bg-surface-container-low p-8 overflow-y-auto justify-center lg:sticky lg:top-16 lg:h-[calc(100vh-160px)]`}
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
            height: `${TARGET_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
          className="bg-surface-container-lowest shadow-xl p-12 origin-top font-cv-preview-body text-cv-preview-body gap-y-10"
        >
          <div className="flex flex-col gap-10">
            <div className="border-b-2 border-primary pb-6">
              <h1 className="text-display-lg font-display-lg text-primary mb-2">
                {name || "Your Name"}
              </h1>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-on-surface-variant">
                {email && <span>{email}</span>}
                {email && phone && <span>•</span>}
                {phone && <span>{phone}</span>}
                {phone && address && <span>•</span>}
                {address && <span>{address}</span>}
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {proSummary && (
                <div className="flex flex-col gap-8">
                  <div>
                    <h2 className="text-headline-md font-headline-md text-primary mb-3 uppercase tracking-wider text-sm text-cv-preview-title border-b border-outline-variant/30 pb-1.5">
                      Profile
                    </h2>
                    <p className="text-on-surface leading-relaxed">
                      {proSummary}
                    </p>
                  </div>
                </div>
              )}
              {experiences.length > 0 && (
                <div className="flex flex-col gap-8">
                  <div>
                    <h2 className="text-headline-md font-headline-md text-primary mb-4 uppercase tracking-wider text-sm text-cv-preview-title border-b border-outline-variant/30 pb-1.5">
                      Experience
                    </h2>
                    {experiences.map((exp) => (
                      <div key={exp.id} className="flex flex-col gap-6">
                        <div className="relative pl-4 before:absolute before:left-0 before:top-3 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                          <div className="flex justify-between items-baseline mb-1">
                            <h3 className="font-bold text-on-surface text-lg">
                              {exp.title}
                            </h3>
                            <span className="text-on-surface-variant text-sm italic whitespace-nowrap">
                              {exp.date}
                            </span>
                          </div>
                          <div className="text-primary font-medium text-sm mb-2">
                            {exp.company}
                          </div>
                          <p className="text-on-surface leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {educations.length > 0 && (
                <div>
                  <h2 className="text-headline-md font-headline-md text-primary mb-3 uppercase tracking-wider text-sm text-cv-preview-title border-b border-outline-variant/30 pb-1.5">
                    Education
                  </h2>
                  {educations.map((edu) => (
                    <div key={edu.id} className="flex flex-col gap-4">
                      <div>
                        <h3 className="font-bold text-on-surface">
                          {edu.degree}
                        </h3>
                        <div className="text-on-surface-variant text-sm mt-0.5">
                          {edu.school}
                        </div>
                        <div className="text-on-surface-variant text-sm italic mt-0.5">
                          {edu.date}
                        </div>
                        <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
