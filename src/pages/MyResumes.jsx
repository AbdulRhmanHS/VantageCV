import CreateResumesH from "../components/MyResumes/CreateResumesH";
import ResumeCard from "../components/MyResumes/ResumeCard";
import CreateResumeModal from "../components/MyResumes/CreateResumeModal";
import EmptyState from "../components/MyResumes/EmptyState";
import ResumeContent from "../components/ResumeBuilder/ResumeContent";
import { useRef, useState, useEffect } from "react";
import { useActiveCV } from "../data/ActiveCVProvider";
import { useReactToPrint } from "react-to-print";
import { useLocation, useNavigate } from "react-router-dom";

const updateData = () => {
  const saved = JSON.parse(localStorage.getItem("cards_data"));
  const modifiedCV = JSON.parse(localStorage.getItem("active_cv"));
  return saved
    ? saved.map((data) => {
        return data.id === modifiedCV?.id ? { ...modifiedCV } : data;
      })
    : [];
};

export default function MyResumes() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(() => {
    return Boolean(location.state?.triggerAction);
  });
  const [cardsData, setCardsData] = useState(updateData);
  const [activeId, setActiveId] = useState(() => {
    return location.state?.triggerAction ? crypto.randomUUID() : null;
  });
  const [targetCV, setTargetCV] = useState(null);
  const { activeCV, selectCV } = useActiveCV();
  const printRef = useRef(null);
  const fileInputRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: targetCV?.resumeName || "resume",
  });

  const addCard = (dataObject) => {
    setCardsData((prev) => [...prev, dataObject]);
    isModalOpen ? setIsModalOpen(false) : null;
  };

  const removeCard = (id) => {
    setCardsData((prev) => prev.filter((item) => item.id !== id));
    if (activeCV.id === id) {
      localStorage.removeItem("active_cv");
      selectCV(null);
    }
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

  const handleImport = async (event) => {
    const files = Array.from(event.target.files);
    if (!files.length) return;

    for (const file of files) {
      try {
        // file.text() returns a promise resolving to the text string
        const textFile = await file.text();
        const dataObject = JSON.parse(textFile);
        addCard(dataObject);
      } catch (error) {
        console.error(`Invalid JSON file format in ${file.name}:`, error);
        alert(`Failed to parse ${file.name}.`);
      }
    }

    // Reset input value so selecting the same files again triggers onChange
    event.target.value = "";
  };

  const PDFExport = (cardData) => {
    setTargetCV(cardData);

    setTimeout(() => {
      handlePrint();
    }, 50);
  };

  const JSONExport = (data) => {
    const dataString = JSON.stringify(data, null, 2);
    const file = new Blob([dataString], { type: "application/json" });
    const url = URL.createObjectURL(file);

    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.resumeName}.json`;
    a.click();

    URL.revokeObjectURL(url);
  };

  // For the trigger action from the home page
  useEffect(() => {
    if (location.state?.triggerAction) {
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  localStorage.setItem("cards_data", JSON.stringify(cardsData));

  return (
    <>
      <main className="w-full min-h-screen pt-16 flex flex-col">
        <div className="max-w-max-width-desktop mx-auto w-full grow flex flex-col gap-6 p-6 py-10">
          <CreateResumesH
            resumeNumber={cardsData.length}
            openModal={handleModalOpen}
            importFn={() => fileInputRef.current?.click()}
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
      {/* Import file picker */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImport}
        className="hidden"
        accept=".json,application/json"
        multiple
      />
    </>
  );
}
