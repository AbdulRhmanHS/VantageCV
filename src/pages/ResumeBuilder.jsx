// DONE: Make the collapse buttons functional
// DONE: Make the add button work for each section
// DONE: Make the delete button work for each section
// DONE: Connect the typed input to the pdf
// TODO: Make the drag handle reorder the sections
// TODO: Make the display of the pdf at small screens functional
// TODO: Add the hidden settings to the displayed pdf
// TODO: Show the settings in the displayed pdf as a pop up modal
// TODO: Handle PDF content overflow by making another page

import BuilderHeader from "../components/ResumeBuilder/BuilderHeader";
import ExperienceCard from "../components/ResumeBuilder/ExperienceCard";
import PersonalInfoCard from "../components/ResumeBuilder/PersonalInfoCard";
import SettingsHeader from "../components/ResumeBuilder/SettingsHeader";
import EducationCard from "../components/ResumeBuilder/EducationCard";
import PDFPreview from "../components/ResumeBuilder/PDFPreview";
import { useState } from "react";

export default function ResumeBuilder() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    address: "San Francisco, CA",
    proSummary:
      "Creative technologist and senior product designer with 8+ years of experience building high-impact digital experiences.",
  });
  const [experiences, setExperiences] = useState([
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
  const [educations, setEducations] = useState([
    {
      id: crypto.randomUUID(),
      school: "Carnegie Mellon University",
      degree: "M.S. Human-Computer Interaction",
      date: "2017",
      description:
        "Focus on interactive systems, quantitative user research, and cognitive design architectures. Teaching assistant for Graduate Interface Design.",
    },
    {
      id: crypto.randomUUID(),
      school: "Rhode Island School of Design",
      degree: "B.A. Graphic Design",
      date: "2015",
      description:
        "Graduated with Honors. Coursework in typography, visual communication systems, and physical computing. Senior capstone exhibition award winner.",
    },
  ]);

  const handlePersonalChange = (field, value) => {
    setPersonalInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleExperienceChange = (id, field, value) => {
    setExperiences((prevExp) =>
      prevExp.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    );
  };

  const handleExperienceAdd = () => {
    setExperiences((prevEdu) => [
      ...prevEdu,
      {
        id: crypto.randomUUID(),
        title: "",
        date: "",
        company: "",
        description: "",
      },
    ]);
  };

  const handleExperienceRemove = (idToRemove) => {
    setExperiences((prevEdu) =>
      prevEdu.filter((item) => item.id !== idToRemove),
    );
  };

  const handleEducationChange = (id, field, value) => {
    setEducations((prevEdu) =>
      prevEdu.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    );
  };

  const handleEducationAdd = () => {
    setEducations((prevEdu) => [
      ...prevEdu,
      {
        id: crypto.randomUUID(),
        school: "",
        degree: "",
        date: "",
        description: "",
      },
    ]);
  };

  const handleEducationRemove = (idToRemove) => {
    setEducations((prevEdu) =>
      prevEdu.filter((item) => item.id !== idToRemove),
    );
  };

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
                  <PersonalInfoCard
                    {...personalInfo}
                    onInputChange={handlePersonalChange}
                  />
                  <ExperienceCard
                    experiences={experiences}
                    handleAdd={handleExperienceAdd}
                    handleRemove={handleExperienceRemove}
                    onInputChange={handleExperienceChange}
                  />
                  <EducationCard
                    educations={educations}
                    handleAdd={handleEducationAdd}
                    handleRemove={handleEducationRemove}
                    onInputChange={handleEducationChange}
                  />
                </div>
              </div>
            </div>
            <PDFPreview
              personalInfo={personalInfo}
              experiences={experiences}
              educations={educations}
            />
          </div>
        </div>
        <button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center z-50 hover:scale-110 transition-transform active:scale-95">
          <span className="material-symbols-outlined text-2xl">visibility</span>
        </button>
      </main>
    </>
  );
}
