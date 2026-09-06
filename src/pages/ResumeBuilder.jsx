// TODO: Make the collapse buttons functional
// TODO: Make the add and delete button work for each section
// TODO: Connect the typed input to the pdf
// TODO: Make the display of the pdf at small screens functional
// TODO: Add the hidden settings to the displayed pdf
// TODO: Show the settings in the displayed pdf as a pop up modal

import BuilderHeader from "../components/ResumeBuilder/BuilderHeader";
import Experience from "../components/ResumeBuilder/Experience";
import PersonalInfo from "../components/ResumeBuilder/PersonalInfo";
import SettingsHeader from "../components/ResumeBuilder/SettingsHeader";
import Education from "../components/ResumeBuilder/Education";
import PDFPreview from "../components/ResumeBuilder/PDFPreview";

export default function ResumeBuilder() {
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
                  <PersonalInfo />
                  <Experience />
                  <Education />
                </div>
              </div>
            </div>
            <PDFPreview />
          </div>
        </div>
        <button className="lg:hidden fixed bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center z-50 hover:scale-110 transition-transform active:scale-95">
          <span className="material-symbols-outlined text-2xl">visibility</span>
        </button>
      </main>
    </>
  );
}
