import CreateResumesH from "../components/MyResumes/CreateResumesH";
import ResumeCard from "../components/MyResumes/ResumeCard";

export default function MyResumes() {
  return (
    <main className="w-full min-h-screen pt-16">
      <div className="max-w-max-width-desktop mx-auto w-full grow flex flex-col gap-6 p-6 py-10">
        <CreateResumesH />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          <ResumeCard
            title={"Software Engineer 2026"}
            lastEdit={"Sep 5, 2026"}
            name={"AbdulRahman Ibn Hassn"}
            job={"Full-Stack Engineer"}
            sections={3}
          />
          <ResumeCard
            title={"Product Manager Variant"}
            lastEdit={"Aug 28, 2026"}
            name={"Alex Johnson"}
            job={"Senior Technical Product Manager"}
            sections={4}
          />
          <ResumeCard
            title={"Designer Portfolio CV"}
            lastEdit={"Aug 14, 2026"}
            name={"Elena Rostova"}
            job={"Lead Product & Systems Designer"}
            sections={5}
          />
          <ResumeCard
            title={"Senior Frontend Architect"}
            lastEdit={"Jul 30, 2026"}
            name={"Marcus Vance"}
            job={"Principal Web Engineer & Architect"}
            sections={4}
          />
          <ResumeCard
            title={"My Resume"}
            lastEdit={"Sep 6, 2026"}
            name={"Ahmed"}
            job={"Personal Trainer"}
            sections={6}
          />
        </div>
      </div>
    </main>
  );
}
