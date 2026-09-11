// DONE: Make the collapse buttons functional
// DONE: Make the add button work for each section
// DONE: Make the delete button work for each section
// DONE: Connect the typed input to the pdf
// DONE: Make the drag handle reorder the sections
// DONE: Make the display of the pdf at small screens functional
// TODO: Add the hidden settings to the displayed pdf
// TODO: Show the settings in the displayed pdf as a pop up modal
// TODO: Handle PDF content overflow by making another page
// TODO: Add an up and down arrow or a section button for reordering the main sections

import BuilderHeader from "../components/ResumeBuilder/BuilderHeader";
import SettingsHeader from "../components/ResumeBuilder/SettingsHeader";
import TemplateCard from "../components/ResumeBuilder/TemplateCard";
import PersonalInfoInputs from "../components/ResumeBuilder/PersonalInfoInputs";
import ExperienceInputs from "../components/ResumeBuilder/ExperienceInputs";
import EducationInputs from "../components/ResumeBuilder/EducationInputs";
import PDFPreview from "../components/ResumeBuilder/PDFPreview";
import PDFModal from "../components/ResumeBuilder/PDFModal";
import { useState } from "react";

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
  const [personalInfo, setPersonalInfo] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
    proSummary:
      "Creative technologist and senior product designer with 8+ years of experience building high-impact digital experiences.",
  });

  const handlePersonalChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = useSectionState([
    {
      id: crypto.randomUUID(),
      title: "Senior Product Designer",
      date: "Jan 2020 - Present",
      company: "Acme Corp",
      description:
        "Led the redesign of the core flagship application, increasing user engagement by 45%. Managed a team of 4 designers.",
    },
    {
      id: crypto.randomUUID(),
      title: "UX Designer",
      date: "Aug 2015 - Jan 2018",
      company: "TechNova",
      description:
        "Spearheaded user research initiatives and developed design systems that reduced development time by 30%.",
    },
  ]);

  const educations = useSectionState([
    {
      id: crypto.randomUUID(),
      school: "Carnegie Mellon University",
      degree: "M.S. Human-Computer Interaction",
      date: "2017",
      description:
        "Focus on interactive systems, quantitative user research, and cognitive design architectures.",
    },
    {
      id: crypto.randomUUID(),
      school: "Rhode Island School of Design",
      degree: "B.A. Graphic Design",
      date: "2015",
      description:
        "Graduated with Honors. Coursework in typography, visual communication systems, and physical computing.",
    },
  ]);

  const emptyExperience = { title: "", date: "", company: "", description: "" };
  const emptyEducation = { school: "", degree: "", date: "", description: "" };

  return (
    <>
      <BuilderHeader />
      <main className="pt-16 min-h-screen">
        <div className="flex flex-col w-full h-full relative">
          <SettingsHeader />
          <div className="flex flex-col lg:flex-row flex-1 h-auto lg:h-[calc(100vh-140px)]">
            <div className="w-full lg:w-1/2 flex flex-col bg-surface overflow-y-auto">
              <div className="px-4 py-8 lg:p-8 lg:max-w-2xl mx-auto w-full">
                <h1 className="text-headline-lg font-headline-lg text-on-surface mb-8">
                  Build Your Resume
                </h1>
                <div className="space-y-4">
                  {/* Simple Personal Info Card */}
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

                  {/* Dynamic Experience Card */}
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

                  {/* Dynamic Education Card */}
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
                </div>
              </div>
            </div>
            <PDFPreview
              personalInfo={personalInfo}
              experiences={experiences.items}
              educations={educations.items}
            />
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className={`${isModalOpen ? "hidden" : "fixed"} lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center z-50 hover:scale-110 transition-transform active:scale-95`}
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
      />
    </>
  );
}
