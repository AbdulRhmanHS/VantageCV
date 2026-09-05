export default function CreateResumesH() {
  return (
    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-4 border-b border-outline-variant/40 pb-5">
      <div>
        <div class="flex items-center gap-3">
          <h1 class="font-display-lg text-display-lg text-on-surface text-3xl font-bold tracking-tight">
            My Resumes
          </h1>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
            4 Total
          </span>
        </div>
        <p class="font-body-md text-body-md text-on-surface-variant mt-1.5 text-sm">
          Manage and edit your precise professional engineering documents.
        </p>
      </div>
      <button class="bg-secondary hover:opacity-90 text-on-primary font-label-md text-sm px-2 py-2 lg:px-4 rounded-lg flex items-center justify-center gap-2 transition-opacity shadow-sm max-w-8 sm:max-w-[initial]">
        <span class="material-symbols-outlined text-[18px]! lg:hidden!">
          add
        </span>
        <p className="hidden lg:inline">Create New</p>
      </button>
    </div>
  );
}
