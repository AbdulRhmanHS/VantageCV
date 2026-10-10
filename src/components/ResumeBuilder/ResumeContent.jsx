import React from "react";

const FONT_STYLES = {
  cairo: {
    headlineText: "font-cairo text-cairo-title",
    bodyText: "font-cairo text-cairo-body",
  },
  amiri: {
    headlineText: "font-amiri text-amiri-title",
    bodyText: "font-amiri text-amiri-body",
  },
  "source-serif": {
    headlineText: "font-cv-preview-title text-cv-preview-title",
    bodyText: "font-cv-preview-body text-cv-preview-body",
  },
  inter: {
    headlineText: "font-headline-md text-headline-md",
    bodyText: "font-body-md text-body-md",
  },
};

const ResumeContent = React.forwardRef(
  (
    {
      personalInfo,
      experiences,
      educations,
      skills,
      layout = "one-col",
      font = "cairo",
      spacing = "spacious",
      language = "english",
      isHidden = false,
    },
    printRef,
  ) => {
    const { name, job, email, phone, address, proSummary } = personalInfo;

    const { headlineText, bodyText } =
      FONT_STYLES[font] || FONT_STYLES["source-serif"];

    const isCompact = spacing === "compact";

    const density = {
      paddingPage: isCompact ? "p-6" : "p-12",
      pageMargin: isCompact ? 5 : 15,
      titleMargin: isCompact ? "mb-3" : "mb-8",
      gapItem: isCompact ? "gap-4" : "gap-8",
      gapNested: isCompact ? "gap-3" : "gap-6",
      titleSize: isCompact ? "text-base" : "text-lg",
      bodyTextSize: isCompact ? "text-xs" : "text-sm",
      skillTextSize: isCompact ? "text-sm" : "text-body-md",
      skillGap: isCompact ? "gap-1.5" : "gap-2.5",
      leading: isCompact ? "leading-snug" : "leading-relaxed",
      borderBottom: isCompact ? "pb-3" : "pb-6",
      headingBottom: isCompact ? "mb-1.5 pb-1" : "mb-3 pb-1",
      jobTitleSize: isCompact ? "text-body-md" : "text-body-lg",
    };

    const isArabic = language === "arabic";

    return (
      <div
        ref={printRef}
        id="printable-resume"
        dir={isArabic ? "rtl" : "ltr"}
        className={`flex-col ${bodyText} ${density.paddingPage} ${
          isArabic ? "rtl:text-right" : "ltr:text-left"
        } ${isHidden ? "hidden print:flex" : "flex"}`}
      >
        <style>
          {`@media print {
            @page {
              size: A4 portrait;
              margin: ${density.pageMargin}mm;
            }
            html, body {
              height: auto !important;
              min-height: 0 !important;
              margin: 0 !important;
              padding: 0 !important;
              overflow: visible !important;
            }
            #printable-resume {
              width: 100% !important;
              height: auto !important;
              min-height: 0 !important;
              margin: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
              transform: none !important;
              display: block !important;
            }
          }`}
        </style>
        {/* Header Section */}
        <div
          className={`border-b-2 border-primary ${density.borderBottom} ${density.titleMargin}`}
        >
          <h1
            className={`${headlineText} text-5xl text-primary mb-2 rtl:mb-4 rtl:mt-1.5`}
          >
            {name || (isArabic ? "الاسم" : "Your Name")}
          </h1>
          <div
            className={`${density.jobTitleSize} mb-2 rtl:mb-4 text-on-surface-variant`}
          >
            {job}
          </div>
          <div
            className={`flex flex-wrap items-center gap-x-4 gap-y-1 text-on-surface-variant font-bold ${density.bodyTextSize}`}
          >
            {email && <span>{email}</span>}
            {email && phone && <span>•</span>}
            {phone && <span dir="ltr">{phone}</span>}
            {phone && address && <span>•</span>}
            {address && <span>{address}</span>}
          </div>
        </div>
        {/* Content Sections */}
        <div
          className={`${
            layout === "one-col"
              ? `flex flex-col ${density.gapItem}`
              : "pdf-grid-layout"
          }`}
        >
          {/* Profile Summary */}
          {proSummary && (
            <div className={`flex flex-col ${density.gapItem} area-summary`}>
              <div>
                <h2
                  className={`${headlineText} ${density.headingBottom} text-primary uppercase tracking-wider border-b border-outline-variant/30`}
                >
                  {isArabic ? "نبذة عني" : "Profile"}
                </h2>
                <p
                  className={`text-on-surface ${density.leading} ${density.bodyTextSize}`}
                >
                  {proSummary}
                </p>
              </div>
            </div>
          )}
          {/* Work Experience */}
          {experiences.length > 0 && (
            <div className={`flex flex-col ${density.gapItem} area-experience`}>
              <div>
                <h2
                  className={`${headlineText} ${density.headingBottom} text-primary uppercase tracking-wider border-b border-outline-variant/30`}
                >
                  {isArabic ? "الخبرة العملية" : "Experience"}
                </h2>
                <div
                  className={`flex flex-col ${density.gapNested} break-inside-avoid`}
                >
                  {experiences.map((exp) => (
                    <div key={exp.id}>
                      <div className="relative ps-4 before:absolute before:inset-s-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                        <div className="flex justify-between items-baseline mb-0.5">
                          <h3
                            className={`font-bold text-on-surface ${density.titleSize}`}
                          >
                            {exp.title}
                          </h3>
                          <span
                            className={`text-on-surface-variant ${density.bodyTextSize} italic whitespace-nowrap`}
                          >
                            {exp.date}
                          </span>
                        </div>
                        <div
                          className={`text-primary font-medium ${density.bodyTextSize} mb-1`}
                        >
                          {exp.company}
                        </div>
                        <p
                          className={`text-on-surface ${density.leading} ${density.bodyTextSize}`}
                        >
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* Education */}
          {educations.length > 0 && (
            <div>
              <h2
                className={`${headlineText} ${density.headingBottom} text-primary uppercase tracking-wider border-b border-outline-variant/30`}
              >
                {isArabic ? "التعليم والدورات" : "Education"}
              </h2>
              <div
                className={`flex flex-col ${density.gapNested} area-education break-inside-avoid`}
              >
                {educations.map((edu) => (
                  <div key={edu.id}>
                    <div>
                      <h3
                        className={`font-bold text-on-surface ${density.titleSize}`}
                      >
                        {edu.degree}
                      </h3>
                      <div
                        className={`text-on-surface-variant ${density.bodyTextSize} mt-0.5`}
                      >
                        {edu.school}
                      </div>
                      <div
                        className={`text-on-surface-variant ${density.bodyTextSize} italic mt-0.5`}
                      >
                        {edu.date}
                      </div>
                      <p
                        className={`text-on-surface-variant ${density.bodyTextSize} mt-1 ${density.leading}`}
                      >
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Skills */}
          {skills.length > 0 && (
            <div>
              <h2
                className={`${headlineText} ${density.headingBottom} text-primary uppercase tracking-wider border-b border-outline-variant/30`}
              >
                {isArabic ? "المهارات" : "Skills"}
              </h2>
              <div
                className={`flex flex-col ${density.skillGap} ${density.skillTextSize} break-inside-avoid`}
              >
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div>
                      <span className="font-bold text-on-surface">
                        {skill.category}
                        {skill.category ? ":" : ""}
                      </span>
                      <span className="text-on-surface-variant ltr:ml-1.5 rtl:mr-1.5">
                        {skill.skillItems}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
);

export default ResumeContent;
