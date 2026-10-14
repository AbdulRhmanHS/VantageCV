import { MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="flex flex-col w-full pt-10">
      <div className="w-full mx-auto py-10 md:py-14 px-8">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant/30">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-on-surface transition-colors text-label-md font-label-md"
          >
            <MoveLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
        <article>
          <header className="mb-8 pb-6 border-b border-outline-variant/30">
            <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">
              Terms of Service &amp; Privacy Disclaimer
            </h1>
            <p className="font-label-md text-label-md text-on-surface-variant">
              Last updated: 2026 • Built by AbdulRahman Ibn Hassn
            </p>
          </header>
          <div className="flex flex-col gap-8 text-on-surface font-body-md text-body-md leading-relaxed">
            <section>
              <h2 className="font-headline-md text-[20px] text-on-surface font-semibold mb-3">
                1. Client-Side Privacy &amp; Local Storage
              </h2>
              <p className="text-on-surface-variant mb-3">
                VantageCV is designed with strict client-side data architecture.
                All resume data, work history, contact information, and edits
                remain exclusively on your device. We do not transmit, collect,
                or store your personal information on any external server or
                analytics database.
              </p>
              <p className="text-on-surface-variant">
                All persistence is managed locally through your browser's
                standard{" "}
                <code className="px-1.5 py-0.5 rounded bg-surface-container text-on-surface text-[14px] font-mono">
                  localStorage
                </code>
                .
              </p>
            </section>
            <section>
              <h2 className="font-headline-md text-[20px] text-on-surface font-semibold mb-3">
                2. No Warranty &amp; Limitation of Liability
              </h2>
              <p className="text-on-surface-variant mb-3">
                VantageCV is provided completely free of charge on an "AS IS"
                and "AS AVAILABLE" basis, without warranties of any kind,
                whether express, statutory, or implied.
              </p>
              <p className="text-on-surface-variant">
                The project author and contributors assume no liability for
                formatting discrepancies with third-party applicant tracking
                systems (ATS), browser print variations, lost data due to
                cleared browser caches, or career outcomes.
              </p>
            </section>
            <section>
              <h2 className="font-headline-md text-[20px] text-on-surface font-semibold mb-3">
                3. Content Ownership &amp; Responsibility
              </h2>
              <p className="text-on-surface-variant mb-3">
                You retain 100% full copyright and intellectual property rights
                over all content, resumes, and documents you create using
                VantageCV. VantageCV claims no ownership or licensing rights
                over your creations.
              </p>
              <p className="text-on-surface-variant">
                You are solely responsible for ensuring the accuracy and
                veracity of the information you author and share with
                prospective employers.
              </p>
            </section>
            <section>
              <h2 className="font-headline-md text-[20px] text-on-surface font-semibold mb-3">
                4. Open Source License
              </h2>
              <p className="text-on-surface-variant mb-4">
                VantageCV is licensed and distributed under the permissive{" "}
                <strong className="text-on-surface font-semibold">
                  MIT License
                </strong>
                . You are welcome to inspect, fork, or contribute to the source
                code on{" "}
                <a
                  className="text-secondary hover:underline font-medium inline-flex items-center gap-1"
                  href="https://github.com/AbdulRhmanHS/CV-app"
                >
                  GitHub{" "}
                  <span className="material-symbols-outlined text-[14px]">
                    open_in_new
                  </span>
                </a>
                .
              </p>
            </section>
          </div>
          <footer className="mt-10 pt-6 border-t border-outline-variant/30 text-label-md text-on-surface-variant flex flex-wrap items-center justify-between gap-4">
            <p className="">
              Have questions or feedback?{" "}
              <a
                className="text-secondary hover:underline font-medium"
                href="mailto:bodahassan12@gmail.com"
              >
                Contact the developer
              </a>
              .
            </p>
          </footer>
        </article>
      </div>
    </div>
  );
}
