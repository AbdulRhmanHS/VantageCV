// DONE: Make the collapse buttons functional
// DONE: Make the add button work for each section
// DONE: Make the delete button work for each section
// DONE: Connect the typed input to the pdf
// DONE: Make the drag handle reorder the sections
// DONE: Make the display of the pdf at small screens functional
// DONE: Add the hidden settings to the displayed pdf
// DONE: Make inputs support RTL direction
// DONE: Handle PDF content overflow
// DONE: Replace the English preview text with Arabic when switching languages
// FIXME: Fix spacing and font sizes in the pdf
// FIXME: Fix Arabic rtl pdf characters not rendered into correct words
// DONE: Add new fonts that works for both Arabic and English
// DONE: Add skills section for the CV

import BuilderHeader from "../components/ResumeBuilder/BuilderHeader";
import SettingsHeader from "../components/ResumeBuilder/SettingsHeader";
import TemplateCard from "../components/ResumeBuilder/TemplateCard";
import PersonalInfoInputs from "../components/ResumeBuilder/PersonalInfoInputs";
import ExperienceInputs from "../components/ResumeBuilder/ExperienceInputs";
import EducationInputs from "../components/ResumeBuilder/EducationInputs";
import SkillInputs from "../components/ResumeBuilder/SkillInputs";
import PDFPreview from "../components/ResumeBuilder/PDFPreview";
import PDFModal from "../components/ResumeBuilder/PDFModal";
import ResumeContent from "../components/ResumeBuilder/ResumeContent";
import { previewData } from "../data/previewData";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useActiveCV } from "../data/ActiveCVProvider";

function useSectionState(initialItems) {
  const [items, setItems] = useState(initialItems);

  const update = (id, field, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)),
    );
  };

  const add = (template) => {
    setItems((prev) => [...prev, { id: crypto.randomUUID(), ...template }]);
  };

  const remove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return { items, setItems, update, add, remove };
}

export default function ResumeBuilder() {
  const { activeCV } = useActiveCV();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [layout, setLayout] = useState("one-col");
  const [font, setFont] = useState("cairo");
  const [spacing, setSpacing] = useState("spacious");
  const [language, setLanguage] = useState("english");
  const [personalInfo, setPersonalInfo] = useState({
    ...activeCV.cvData.profile,
    name: activeCV.fullName,
  });
  const experiences = useSectionState(Object.values(activeCV.cvData.exp));
  const educations = useSectionState(Object.values(activeCV.cvData.edu));
  const skills = useSectionState(Object.values(activeCV.cvData.skill));

  const handleUpdateActiveCV = () => {
    const CV = { ...activeCV };
    CV.fullName = personalInfo.name;
    CV.lang = language;
    CV.cvData.profile = personalInfo;
    CV.cvData.exp = experiences.items;
    CV.cvData.edu = educations.items;
    CV.cvData.skill = skills.items;

    localStorage.setItem("active_cv", JSON.stringify(CV));
  };

  useEffect(() => {
    handleUpdateActiveCV();
  });

  const handlePersonalChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    const langKey = newLang === "english" ? "eng" : "ara";

    setPersonalInfo(previewData[langKey].profile);
    experiences.setItems(Object.values(previewData[langKey].exp));
    educations.setItems(Object.values(previewData[langKey].edu));
    skills.setItems(Object.values(previewData[langKey].skill));
  };

  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "resume",
  });

  const emptyExperience = { title: "", date: "", company: "", description: "" };
  const emptyEducation = { school: "", degree: "", date: "", description: "" };
  const emptySkill = { category: "", skillItems: "" };

  return (
    <>
      <BuilderHeader handlePrint={handlePrint} />
      <main className="pt-16 min-h-screen">
        <div className="flex flex-col w-full h-full relative">
          <SettingsHeader
            layout={layout}
            setLayout={setLayout}
            font={font}
            setFont={setFont}
            spacing={spacing}
            setSpacing={setSpacing}
            language={language}
            setLanguage={handleLanguageChange}
          />
          <div className="flex flex-col lg:flex-row flex-1 h-auto lg:h-[calc(100vh-140px)]">
            <div className="w-full lg:w-1/2 flex flex-col bg-surface overflow-y-auto">
              <div className="px-4 py-8 lg:p-8 lg:max-w-2xl mx-auto w-full">
                <h1 className="text-headline-lg font-headline-lg text-on-surface mb-8">
                  Build Your Resume
                </h1>
                <div className="space-y-4">
                  <TemplateCard
                    icon="person"
                    title="General Information"
                    isOpen={true}
                  >
                    <PersonalInfoInputs
                      personalInfo={personalInfo}
                      onInputChange={handlePersonalChange}
                    />
                  </TemplateCard>
                  <TemplateCard
                    icon="work"
                    title="Experience"
                    items={experiences.items}
                    onReorder={experiences.setItems}
                    onAdd={() => experiences.add(emptyExperience)}
                    onRemove={experiences.remove}
                    renderInputs={(exp) => (
                      <ExperienceInputs
                        exp={exp}
                        onInputChange={experiences.update}
                      />
                    )}
                  />
                  <TemplateCard
                    icon="school"
                    title="Education"
                    items={educations.items}
                    onReorder={educations.setItems}
                    onAdd={() => educations.add(emptyEducation)}
                    onRemove={educations.remove}
                    renderInputs={(edu) => (
                      <EducationInputs
                        edu={edu}
                        onInputChange={educations.update}
                      />
                    )}
                  />
                  <TemplateCard
                    icon="psychology"
                    title="Skills"
                    items={skills.items}
                    onReorder={skills.setItems}
                    onAdd={() => skills.add(emptySkill)}
                    onRemove={skills.remove}
                    renderInputs={(skill) => (
                      <SkillInputs
                        skill={skill}
                        onInputChange={skills.update}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
            <PDFPreview
              personalInfo={personalInfo}
              experiences={experiences.items}
              educations={educations.items}
              skills={skills.items}
              layout={layout}
              font={font}
              spacing={spacing}
              language={language}
            />
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className={`lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center z-50 hover:scale-110 transition-transform active:scale-95 ${
            isModalOpen ? "hidden" : "fixed"
          }`}
        >
          <span className="material-symbols-outlined text-2xl">visibility</span>
        </button>
      </main>
      <PDFModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        personalInfo={personalInfo}
        experiences={experiences.items}
        educations={educations.items}
        skills={skills.items}
        layout={layout}
        setLayout={setLayout}
        font={font}
        setFont={setFont}
        spacing={spacing}
        setSpacing={setSpacing}
        language={language}
        setLanguage={handleLanguageChange}
        handlePrint={handlePrint}
      />
      <ResumeContent
        personalInfo={personalInfo}
        experiences={experiences.items}
        educations={educations.items}
        skills={skills.items}
        layout={layout}
        font={font}
        spacing={spacing}
        language={language}
        isHidden={true}
        ref={printRef}
      />
    </>
  );
}
