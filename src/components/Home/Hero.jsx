import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-150 flex items-center justify-center overflow-hidden bg-surface py-24">
      <div className="absolute inset-0 bg-linear-to-b from-surface via-surface-container-lowest to-surface z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-fixed-dim rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-fixed rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
      <div className="relative z-10 max-w-300 mx-auto px-6 w-full flex flex-col items-center text-center space-y-8">
        <h1 className="text-display-lg font-display-lg text-on-surface leading-tight">
          Build an{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-secondary to-on-secondary-fixed-variant">
            ATS-Friendly
          </span>{" "}
          CV in Minutes.
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl leading-relaxed mx-auto">
          Precision engineering for professionals. Create, optimize, and manage
          resumes that pass applicant tracking systems with zero formatting
          headaches.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center transition-all duration-700 opacity-100 translate-y-0">
          <Link
            to="/resumes"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-xl text-headline-md font-headline-md transition-transform duration-300 hover:-translate-y-1"
          >
            Get Started Free
            <span className="material-symbols-outlined ml-2">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
