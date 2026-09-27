// DONE: Make the Create New button show a pop up to fill the initial data of the CV
// DONE: Attach the span element to the total number of resume cards
// TODO: Add an import button, and make it functional

export default function CreateResumesH({ setIsModalOpen, resumeNumber }) {
  return (
    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-4 border-b border-outline-variant/40 pb-5">
      <div>
        <div className="flex items-center gap-3">
          <h1 className="font-display-lg text-display-lg text-on-surface text-3xl font-bold tracking-tight">
            My Resumes
          </h1>
          {resumeNumber > 0 && (
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
              {resumeNumber} Total
            </span>
          )}
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1.5 text-sm">
          Manage and edit your precise professional engineering documents.
        </p>
      </div>
      <button
        onClick={setIsModalOpen}
        className="bg-secondary hover:opacity-90 text-on-primary font-label-md text-sm px-2 py-2 lg:px-4 rounded-lg flex items-center justify-center gap-2 transition-opacity shadow-sm max-w-8 sm:max-w-[initial]"
      >
        <span className="material-symbols-outlined text-[18px]! lg:hidden!">
          add
        </span>
        <p className="hidden lg:inline">Create New</p>
      </button>
    </div>
  );
}
