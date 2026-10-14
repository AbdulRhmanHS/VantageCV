import {
  Columns3Cog,
  Download,
  FileCheck,
  Languages,
  Shield,
  Zap,
} from "lucide-react";
import FadeInSection from "./FadeInSection";

export default function Features() {
  return (
    <section className="py-24 bg-background relative" id="features">
      <div className="max-w-max-width-desktop mx-auto px-6">
        <FadeInSection>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
            <span className="text-label-md font-label-md text-secondary uppercase tracking-widest mb-3">
              Core Pillars
            </span>
            <h2 className="text-headline-lg font-headline-lg text-on-surface mb-4">
              Engineered with Care for Job Seekers
            </h2>
            <p className="text-body-lg font-body-lg text-on-surface-variant">
              Everything you need to craft high-impact, compliant CVs without
              compromise on design, privacy, or language.
            </p>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 opacity-100 translate-y-0">
            <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/30">
              <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-110 transition-transform">
                <FileCheck />
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                ATS-Friendly
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Engineered with clean semantic structures and machine-readable
                typography to score high on all major ATS screeners.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/30">
              <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform">
                <Languages />
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                Bilingual Support (EN &amp; AR)
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Native support for both English (LTR) and Arabic (RTL) with
                bidirectional text rendering and localized headers.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/30">
              <div className="w-12 h-12 bg-tertiary-container rounded-xl flex items-center justify-center text-on-tertiary-container mb-6 group-hover:scale-110 transition-transform">
                <Columns3Cog />
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                Layout &amp; Style Customization
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Easily toggle between 1-column or 2-column layouts, adjust
                spacing density (compact vs spacious), and select elegant
                typography.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/30">
              <div className="w-12 h-12 bg-on-tertiary-fixed-variant rounded-xl flex items-center justify-center text-surface-container-lowest mb-6 group-hover:scale-110 transition-transform">
                <Shield />
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                100% Client-Side Privacy
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Your data never leaves your browser. All storage is strictly in
                localStorage with zero tracking or server transmission.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/30">
              <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-110 transition-transform">
                <Download />
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                Complete Data Portability
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                Export your resume data to a lightweight JSON file anytime to
                back up, edit, or re-import across any device.
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow group border border-outline-variant/30">
              <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform">
                <Zap />
              </div>
              <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                Quick &amp; Frictionless
              </h3>
              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
                No sign-up or accounts required. Open the app and start
                authoring immediately without paywalls.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
