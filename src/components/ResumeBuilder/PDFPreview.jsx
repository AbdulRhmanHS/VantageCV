export default function PDFPreview() {
  return (
    <div className="hidden lg:flex lg:w-1/2 bg-surface-container-low p-8 overflow-y-auto justify-center lg:sticky lg:top-4 lg:h-[calc(100vh-160px)]">
      <div
        // className="{'font-cv-preview-body text-cv-preview-body': font === 'serif', 'font-body-md text-body-md': font === 'sans', 'gap-y-6': spacing === 'compact', 'gap-y-10': spacing === 'spacious'}"
        className="bg-surface-container-lowest shadow-xl w-full max-w-[21cm] min-h-[29.7cm] p-12 transition-all duration-500 origin-top font-cv-preview-body text-cv-preview-body gap-y-10"
      >
        <div
          // className="{'gap-6': spacing === 'compact', 'gap-10': spacing === 'spacious'}"
          className="flex flex-col gap-10"
        >
          <div className="border-b-2 border-primary pb-6">
            <h1
              className="text-display-lg font-display-lg text-primary mb-2"
              x-text="personal.name || 'Your Name'"
            >
              Alex Johnson
            </h1>
            <div
              // className="{'text-sm': font === 'sans'}"
              className="flex flex-wrap items-center gap-x-4 gap-y-1 text-on-surface-variant"
            >
              <span
                x-show="personal.email"
                x-text="personal.email"
                className=""
              >
                alex@example.com
              </span>
              <span
                x-show="personal.email &amp;&amp; personal.phone"
                className=""
              >
                •
              </span>
              <span
                x-show="personal.phone"
                x-text="personal.phone"
                className=""
              >
                +1 (555) 123-4567
              </span>
              <span
                x-show="(personal.email || personal.phone) &amp;&amp; personal.location"
                className=""
              >
                •
              </span>
              <span
                x-show="personal.location"
                x-text="personal.location"
                className=""
              >
                San Francisco, CA
              </span>
            </div>
          </div>
          <div
            // className="{'flex flex-col gap-8': layout === 'one-column', 'grid grid-cols-[1fr_2fr] gap-8': layout === 'two-column'}"
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-8">
              <div x-show="personal.summary">
                <h2
                  // className="{'font-cv-preview-title text-cv-preview-title normal-case text-xl mb-4': font === 'serif'}"
                  className="text-headline-md font-headline-md text-primary mb-3 uppercase tracking-wider text-sm text-cv-preview-title"
                >
                  Profile
                </h2>
                <p
                  className="text-on-surface leading-relaxed"
                  x-text="personal.summary"
                >
                  Creative technologist and senior product designer with 8+
                  years of experience building high-impact digital experiences.
                </p>
              </div>
              <div x-show="education.length &gt; 0">
                <h2
                  // className="{'font-cv-preview-title text-cv-preview-title normal-case text-xl mb-4': font === 'serif'}"
                  className="text-headline-md font-headline-md text-primary mb-3 uppercase tracking-wider text-sm text-cv-preview-title"
                >
                  Education
                </h2>
                <div className="flex flex-col gap-4">
                  <template x-for="edu in education">
                    <div>
                      <h3
                        className="font-bold text-on-surface"
                        x-text="edu.degree"
                      ></h3>
                      <div
                        className="text-on-surface-variant text-sm mt-0.5"
                        x-text="edu.school"
                      ></div>
                      <div
                        className="text-on-surface-variant text-sm italic mt-0.5"
                        x-text="edu.date"
                      ></div>
                    </div>
                  </template>
                  <div>
                    <h3
                      className="font-bold text-on-surface"
                      x-text="edu.degree"
                    >
                      M.S. Human-Computer Interaction
                    </h3>
                    <div
                      className="text-on-surface-variant text-sm mt-0.5"
                      x-text="edu.school"
                    >
                      Carnegie Mellon University
                    </div>
                    <div
                      className="text-on-surface-variant text-sm italic mt-0.5"
                      x-text="edu.date"
                    >
                      2017
                    </div>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-on-surface"
                      x-text="edu.degree"
                    >
                      B.A. Graphic Design
                    </h3>
                    <div
                      className="text-on-surface-variant text-sm mt-0.5"
                      x-text="edu.school"
                    >
                      Rhode Island School of Design
                    </div>
                    <div
                      className="text-on-surface-variant text-sm italic mt-0.5"
                      x-text="edu.date"
                    >
                      2015
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div x-show="experience.length &gt; 0">
                <h2
                  // className="{'font-cv-preview-title text-cv-preview-title normal-case text-xl mb-6': font === 'serif'}"
                  className="text-headline-md font-headline-md text-primary mb-4 uppercase tracking-wider text-sm text-cv-preview-title"
                >
                  Experience
                </h2>
                <div className="flex flex-col gap-6">
                  <template x-for="exp in experience">
                    <div className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3
                          className="font-bold text-on-surface text-lg"
                          x-text="exp.title"
                        ></h3>
                        <span
                          className="text-on-surface-variant text-sm italic whitespace-nowrap"
                          x-text="exp.date"
                        ></span>
                      </div>
                      <div
                        className="text-primary font-medium text-sm mb-2"
                        x-text="exp.company"
                      ></div>
                      <p
                        className="text-on-surface leading-relaxed"
                        x-text="exp.desc"
                      ></p>
                    </div>
                  </template>
                  <div className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3
                        className="font-bold text-on-surface text-lg"
                        x-text="exp.title"
                      >
                        Senior Product Designer
                      </h3>
                      <span
                        className="text-on-surface-variant text-sm italic whitespace-nowrap"
                        x-text="exp.date"
                      ></span>
                    </div>
                    <div
                      className="text-primary font-medium text-sm mb-2"
                      x-text="exp.company"
                    >
                      Acme Corp
                    </div>
                    <p
                      className="text-on-surface leading-relaxed"
                      x-text="exp.desc"
                    >
                      Led the redesign of the core flagship application,
                      increasing user engagement by 45%. Managed a team of 4
                      designers.
                    </p>
                  </div>
                  <div className="relative pl-4 before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-primary before:rounded-full">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3
                        className="font-bold text-on-surface text-lg"
                        x-text="exp.title"
                      >
                        UX Designer
                      </h3>
                      <span
                        className="text-on-surface-variant text-sm italic whitespace-nowrap"
                        x-text="exp.date"
                      ></span>
                    </div>
                    <div
                      className="text-primary font-medium text-sm mb-2"
                      x-text="exp.company"
                    >
                      TechNova
                    </div>
                    <p
                      className="text-on-surface leading-relaxed"
                      x-text="exp.desc"
                    >
                      Spearheaded user research initiatives and developed design
                      systems that reduced development time by 30%.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
