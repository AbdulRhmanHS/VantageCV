import PDFPreview from "../ResumeBuilder/PDFPreview";
import { previewData } from "../../data/previewData";
import FadeInSection from "./FadeInSection";
import { useState } from "react";

export default function Content() {
  const [personalInfo, setPersonalInfo] = useState({
    ...previewData.eng.personalInfo,
    name: "Alex Johnson",
    job: "Senior Product Designer",
  });
  const [experiences, setExperiences] = useState(
    Object.values(previewData.eng.exp),
  );
  const [educations, setEducations] = useState(
    Object.values(previewData.eng.edu),
  );
  const [skills, setSkills] = useState(Object.values(previewData.eng.skill));
  const [layout, setLayout] = useState("one-col");
  const [language, setLanguage] = useState("english");

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    const langKey = newLang === "english" ? "eng" : "ara";

    setLanguage(newLang);
    setPersonalInfo(() => {
      return newLang === "english"
        ? {
            ...previewData.eng.profile,
            name: "Alex Johnson",
            job: "Senior Product Designer",
          }
        : {
            ...previewData.ara.profile,
            name: "عبد الرحمن بن حسن",
            job: "مبرمج ويب",
          };
    });
    setExperiences(Object.values(previewData[langKey].exp));
    setEducations(Object.values(previewData[langKey].edu));
    setSkills(Object.values(previewData[langKey].skill));
  };

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-max-width-desktop mx-auto px-6 relative z-10">
        <FadeInSection>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 transition-all duration-700 opacity-100 translate-y-0">
            <span className="text-label-md font-label-md text-secondary uppercase tracking-widest mb-3">
              Live Interactive Showcase
            </span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
              See It In Action: True Bilingual ATS Previews
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Toggle between languages and layout configurations below to
              preview clean typographic rendering and layout adaptability.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="max-w-5xl mx-auto bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/40 overflow-hidden transition-all duration-700 opacity-100 translate-y-0">
            <div className="bg-surface-container-high px-6 py-4 border-b border-outline-variant/40 flex flex-col-reverse lg:flex-row items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="flex items-center gap-1 bg-surface-container-lowest p-1 rounded-lg border border-outline-variant/40">
                  <button
                    className={`px-3 py-1.5 rounded text-label-md font-semibold transition-all ${
                      language === "english"
                        ? "bg-primary text-on-primary"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                    onClick={() => handleLanguageChange("english")}
                  >
                    English (LTR)
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded text-label-md font-semibold transition-all ${
                      language === "arabic"
                        ? "bg-primary text-on-primary"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                    onClick={() => handleLanguageChange("arabic")}
                  >
                    Arabic (RTL)
                  </button>
                </div>
                <div className="flex items-center justify-center gap-1 bg-surface-container-lowest p-1 rounded-lg border border-outline-variant/40">
                  <button
                    className={`px-3 py-1.5 rounded text-label-md font-semibold transition-all ${
                      layout === "one-col"
                        ? "bg-secondary text-on-secondary"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                    onClick={() => setLayout("one-col")}
                  >
                    1-Column
                  </button>
                  <button
                    className={`px-3 py-1.5 rounded text-label-md font-semibold transition-all ${
                      layout === "two-col"
                        ? "bg-secondary text-on-secondary"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                    onClick={() => setLayout("two-col")}
                  >
                    2-Column
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-label-md text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary inline-block"></span>
                <span className="">ATS Parser Friendly · Score 100/100</span>
              </div>
            </div>
            <PDFPreview
              personalInfo={personalInfo}
              experiences={experiences}
              educations={educations}
              skills={skills}
              layout={layout}
              font={"cairo"}
              spacing={"spacious"}
              language={language}
              isHidden={false}
              isHome={true}
            />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
