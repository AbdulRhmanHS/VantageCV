import { ArrowRight, Code, LockKeyholeOpen, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex justify-center overflow-hidden bg-surface py-24">
      <div className="absolute inset-0 bg-linear-to-b from-surface via-surface-container-lowest to-surface z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-fixed-dim rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-fixed rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
      <div className="relative z-10 max-w-300 mx-auto px-6 w-full flex flex-col gap-8 justify-center items-center text-center space-y-8">
        <div className="inline-flex flex-wrap items-center justify-center gap-2.5 mb-2 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-md font-semibold bg-secondary-fixed text-on-secondary-fixed border border-secondary-fixed-dim/40 shadow-sm">
            <Code size={16} />
            100% Free &amp; Open Source
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-md font-semibold bg-surface-container-high text-on-surface border border-outline-variant/40 shadow-sm">
            <LockKeyholeOpen size={16} />
            No Sign-up Required
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-md font-semibold bg-primary-container text-on-primary-container border border-primary-fixed-dim/30 shadow-sm">
            <ShieldCheck size={16} />
            Client-Side Only
          </span>
        </div>
        <h1 className="text-display-lg font-display-lg text-on-surface leading-tight max-w-4xl mb-0">
          Build a bilingual,{" "}
          <span className="text-secondary bg-clip-text bg-linear-to-r from-secondary to-on-secondary-fixed-variant">
            ATS-Friendly
          </span>{" "}
          CV in minutes. Completely private.
        </h1>
        <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl leading-relaxed mx-auto mb-0">
          Free and open-source. Engineered for flawless ATS compliance, native
          English &amp; Arabic (RTL) support, and 100% client-side privacy with
          zero server uploads.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center items-center transition-all duration-700 opacity-100 translate-y-0">
          <Link
            to="/resumes"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-xl text-headline-md font-headline-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 gap-2"
          >
            <span className="">Get Started</span>
            <ArrowRight />
          </Link>
          <a
            className="inline-flex items-center justify-center px-8 py-4 bg-surface-container-lowest text-on-surface border border-outline-variant/60 rounded-xl text-headline-md font-headline-md hover:border-secondary hover:text-secondary shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 gap-2"
            href="https://github.com/AbdulRhmanHS/CV-app"
          >
            <Code />
            <span>View on GitHub ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
