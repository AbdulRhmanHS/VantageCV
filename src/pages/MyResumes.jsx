/*
TODO: Add last modified date to the cards
TODO: Add number of sections to the cards 
TODO: Add a position to the resume and add it to the card
*/

import CreateResumesH from "../components/MyResumes/CreateResumesH";
import ResumeCard from "../components/MyResumes/ResumeCard";
import CreateResumeModal from "../components/MyResumes/CreateResumeModal";
import EmptyState from "../components/MyResumes/EmptyState";
import { useState } from "react";

export default function MyResumes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const addCard = (dataObject) => {
    setCardsData((prev) => [...prev, dataObject]);
    setIsModalOpen(false);
  };

  // const removeCard = (id) => {
  //   setCardsData((prev) => prev.filter((item) => item.id !== id));
  // };

  const handleModalOpen = () => {
    const newId = crypto.randomUUID();
    setActiveId(newId);
    setIsModalOpen(true);
  };

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
                  title={data.resumeName}
                  name={data.fullName}
                  lang={data.lang}
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
    </>
  );
}
