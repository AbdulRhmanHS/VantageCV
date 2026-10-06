// DONE: Attach the cards to the resume data in the builder
// DONE: Make the build button functional open the builder with the current CV data
// DONE: Make the pen icon rename the title of the CV
// DONE: Make an active state on last opened CV by changing the border color to bg-secondary and adding active an span indicator
// DONE: Make the export button functional by exporting as a PDF
// TODO: Make an option for exporting as JSON to be able to import it later
// TODO: Add an import button, and make it functional
// DONE: Make the 3 dot button work by showing another menu which has the delete option
// DONE: Make the delete functional
// DONE: Add last modified date to the cards
// DONE: Make the lastEdit record date with any edit made
// DONE: Add number of sections to the cards
// DONE: Add a job position to the resume and add it to the card

import CreateResumesH from "../components/MyResumes/CreateResumesH";
import ResumeCard from "../components/MyResumes/ResumeCard";
import CreateResumeModal from "../components/MyResumes/CreateResumeModal";
import EmptyState from "../components/MyResumes/EmptyState";
import { useRef, useState } from "react";
import { useActiveCV } from "../data/ActiveCVProvider";
import { useReactToPrint } from "react-to-print";
import ResumeContent from "../components/ResumeBuilder/ResumeContent";

const updateData = () => {
  const saved = JSON.parse(localStorage.getItem("cards_data"));
  const modifiedCV = JSON.parse(localStorage.getItem("active_cv"));
  return saved
    ? saved.map((data) => {
        return data.id === modifiedCV.id ? { ...modifiedCV } : data;
      })
    : [];
};

export default function MyResumes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardsData, setCardsData] = useState(updateData);
  const [activeId, setActiveId] = useState(null);
  const [targetCV, setTargetCV] = useState(null);
  const { activeCV, selectCV } = useActiveCV();
  const printRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: targetCV?.resumeName || "resume",
  });

  const addCard = (dataObject) => {
    setCardsData((prev) => [...prev, dataObject]);
    setIsModalOpen(false);
  };

  const removeCard = (id) => {
    setCardsData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleActiveCV = (id) => {
    const selected = cardsData.find((card) => card.id === id);
    selectCV(selected);
  };

  const handleModalOpen = () => {
    const newId = crypto.randomUUID();
    setActiveId(newId);
    setIsModalOpen(true);
  };

  const modifyCardTitle = (id, newTitle) => {
    setCardsData((prev) =>
      prev.map((data) => {
        if (activeCV && activeCV.id === data.id && data.id === id)
          localStorage.setItem(
            "active_cv",
            JSON.stringify({ ...data, resumeName: newTitle }),
          );
        return data.id === id ? { ...data, resumeName: newTitle } : data;
      }),
    );
  };

  const PDFExport = (cardData) => {
    setTargetCV(cardData);

    setTimeout(() => {
      handlePrint();
    }, 50);
  };

  const JSONExport = () => {
    // Export as JSON file
  };

  localStorage.setItem("cards_data", JSON.stringify(cardsData));

  return (
    <>
      <main className="w-full min-h-screen pt-16 flex flex-col">
        <div className="max-w-max-width-desktop mx-auto w-full grow flex flex-col gap-6 p-6 py-10">
          <CreateResumesH
            setIsModalOpen={handleModalOpen}
            resumeNumber={cardsData.length}
          />
          {cardsData.length === 0 && <EmptyState />}
          <div
            id="card-container"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr"
          >
            {cardsData.length > 0 &&
              cardsData.map((data) => (
                <ResumeCard
                  key={data.id}
                  data={data}
                  removeCard={removeCard}
                  modifyCardTitle={modifyCardTitle}
                  PDFExport={PDFExport}
                  JSONExport={JSONExport}
                  handleActiveCV={handleActiveCV}
                  activeCV={activeCV}
                />
              ))}
          </div>
        </div>
      </main>
      <CreateResumeModal
        key={activeId}
        resumeId={activeId}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={addCard}
      />
      {targetCV && (
        <ResumeContent
          personalInfo={targetCV.cvData.profile}
          experiences={targetCV.cvData.exp}
          educations={targetCV.cvData.edu}
          skills={targetCV.cvData.skill}
          layout={targetCV.cvSettings.layout}
          font={targetCV.cvSettings.font}
          spacing={targetCV.cvSettings.spacing}
          language={targetCV.lang}
          isHidden={true}
          ref={printRef}
        />
      )}
    </>
  );
}
