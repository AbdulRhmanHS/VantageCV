import { useNavigate } from "react-router-dom";

export default function FinalCTA() {
  const navigate = useNavigate();
  return (
    <section className="py-32 relative overflow-hidden bg-primary text-on-primary flex items-center justify-center text-center">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(var(--tw-colors-surface-container) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        <h2 className="text-display-lg font-display-lg mb-6">
          Ready to upgrade your career?
        </h2>
        <p className="text-body-lg font-body-lg text-on-primary/80 mb-10 max-w-2xl">
          Join thousands of professionals landing their dream roles with
          precision-crafted resumes.
        </p>
        <button
          className="inline-flex items-center justify-center px-10 py-5 bg-secondary text-on-secondary rounded-xl text-md xs:text-xl sm:text-headline-md font-headline-md transition-[transform, opacity] duration-300 hover:-translate-y-1 hover:opacity-90"
          onClick={() => {
            navigate("/resumes", { state: { triggerAction: true } });
          }}
        >
          Create Your Resume Now
        </button>
      </div>
    </section>
  );
}
