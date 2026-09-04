import ResumeCard from "../components/MyResumes/ResumeCard";
import ResumesNewBtn from "../components/MyResumes/ResumesNewBtn";

export default function MyResumes() {
  return (
    <main className="w-full h-full py-16 p-2 pt-20">
      <div className="max-w-max-width-desktop mx-auto w-full grow flex flex-col gap-6">
        <div className="flex flex-col">
          <h1 className="font-display-lg text-display-lg text-on-surface">
            My Resumes
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Manage and edit your precise professional engineering.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:gap-8 auto-rows-fr gap-4">
          <ResumesNewBtn />
          <ResumeCard title={"Software Engineer 2026"} lastEdit={"2 days"} />
          <ResumeCard title={"Product Manager Variant"} lastEdit={"1 week"} />
          <ResumeCard title={"Designer Portfolio"} lastEdit={"2 weeks"} />
        </div>
      </div>
    </main>
  );
}
