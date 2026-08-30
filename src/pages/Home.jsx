export default function Home() {
  return (
    <div className="bg-background font-body-md text-on-surface">
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 max-w-[1600px] mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <img
                alt="ResumeFlow Logo"
                className="h-8 w-auto object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA__yS96uo1QrPErR11rs4PhYPjAR_zLeEr1Rz3T6z6-aCv8PBlXa5OAjDWMtmRSLBg0Bj6Gxlo1LhMgBDNcXNODEiDRZqmj-9wF5waPGUeYC4SArre4_tsk6h-3Z-OoS4osyWgaBBtrzwzPXKpx2apW5qIuef9VROXXNvTNC7vQthCQejZRy27PY60ufnIwEiddX23hqSTrnZiY7JjM0yUPX3JY6EYvOOky6ojbdyNX2qpJvZ1owCz"
              />
              <span className="text-headline-md font-headline-md tracking-tight text-primary">
                VantageCV
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                aria-current="page"
                className="transition-colors text-secondary font-semibold"
                href="#"
              >
                Home
              </a>
              <a
                className="text-label-md text-on-surface-variant hover:text-on-surface transition-colors"
                href="#"
              >
                My Resumes
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="bg-secondary text-on-secondary px-4 py-2 rounded-lg text-label-md hover:bg-secondary/90 transition-all"
              data-path="builder"
              href="#"
            >
              Create New
            </a>
          </div>
        </div>
      </header>
      <main className="w-full pt-16">
        <div className="flex flex-col w-full relative">
          <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-surface py-24">
            <div className="absolute inset-0 bg-gradient-to-b from-surface via-surface-container-lowest to-surface z-0"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-fixed-dim rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-pulse-slow"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-fixed rounded-full mix-blend-multiply filter blur-[120px] opacity-20"></div>
            <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full flex flex-col items-center text-center space-y-8">
              <h1 className="text-display-lg font-display-lg text-on-surface leading-tight">
                Build an{" "}
                <span className="text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-on-secondary-fixed-variant">
                  ATS-Friendly
                </span>{" "}
                CV in Minutes.
              </h1>
              <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl leading-relaxed mx-auto">
                Precision engineering for professionals. Create, optimize, and
                manage resumes that pass applicant tracking systems with zero
                formatting headaches.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center transition-all duration-700 opacity-100 translate-y-0">
                <a
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary text-on-primary rounded-xl text-headline-md font-headline-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  data-path="builder"
                  href="#"
                >
                  Get Started Free
                  <span className="material-symbols-outlined ml-2">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </section>
          <section className="py-24 bg-background relative" id="features">
            <div className="max-w-[1600px] mx-auto px-6">
              <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 transition-all duration-700 opacity-100 translate-y-0">
                <span className="text-label-md font-label-md text-secondary uppercase tracking-widest mb-4">
                  Features
                </span>
                <h2 className="text-headline-lg font-headline-lg text-on-surface mb-6">
                  Engineered for Success
                </h2>
                <p className="text-body-lg font-body-lg text-on-surface-variant">
                  Stop fighting with margins. Focus on your content, and let our
                  intelligent engine handle the formatting, ATS compliance, and
                  typography.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 opacity-100 translate-y-0">
                <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center text-on-primary-container mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">
                      splitscreen
                    </span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                    Live Split-Pane Preview
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    See changes instantly. Our dual-pane builder separates data
                    entry from design, ensuring you never break the layout.
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center text-on-secondary-container mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">rule</span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                    ATS Optimization
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Templates structurally designed to be parsed perfectly by
                    Greenhouse, Workday, and Lever.
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-tertiary-container rounded-xl flex items-center justify-center text-on-tertiary-container mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">
                      dashboard_customize
                    </span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                    Professional Templates
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Switch styles with one click. Typography and spacing adapt
                    automatically.
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-2xl p-8 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-on-tertiary-fixed-variant rounded-xl flex items-center justify-center text-surface-container-lowest mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">
                      text_fields
                    </span>
                  </div>
                  <h3 className="text-headline-md font-headline-md text-on-surface mb-3 text-xl">
                    Impeccable Typography
                  </h3>
                  <p className="text-body-md font-body-md text-on-surface-variant">
                    Every template utilizes paired Google Fonts designed for
                    maximum readability in both digital and print formats.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-24 bg-surface relative overflow-hidden">
            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
              <div className="flex flex-col space-y-8 items-center text-center transition-all duration-700 opacity-100 translate-y-0">
                <h2 className="text-headline-lg font-headline-lg text-on-surface">
                  Data-driven design, not guesswork.
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
                  <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                      <span className="material-symbols-outlined">
                        mobile_arrow_right
                      </span>
                    </div>
                    <div>
                      <h4 className="text-body-lg font-body-lg text-on-surface font-semibold mb-2">
                        Structured Input
                      </h4>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        Enter your history once. Our modular schema keeps your
                        data clean and reusable.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                      <span className="material-symbols-outlined">waves</span>
                    </div>
                    <div>
                      <h4 className="text-body-lg font-body-lg text-on-surface font-semibold mb-2">
                        Algorithmic Spacing
                      </h4>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        White space is calculated automatically to ensure
                        content fits perfectly on 1 or 2 pages.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow group cursor-default">
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                      <span className="material-symbols-outlined">
                        cloud_download
                      </span>
                    </div>
                    <div>
                      <h4 className="text-body-lg font-body-lg text-on-surface font-semibold mb-2">
                        One-Click Export
                      </h4>
                      <p className="text-body-md font-body-md text-on-surface-variant">
                        Generate crisp, text-selectable PDFs that render
                        flawlessly on any device.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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
              <a
                className="inline-flex items-center justify-center px-10 py-5 bg-secondary text-on-secondary rounded-xl text-headline-md font-headline-md hover:bg-secondary/90 shadow-[0_0_40px_rgba(49,107,243,0.3)] hover:shadow-[0_0_60px_rgba(49,107,243,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                data-path="builder"
                href="#"
              >
                Create Your Resume Now
              </a>
            </div>
          </section>
        </div>
      </main>
      <footer className="w-full bg-surface-container py-12 border-t border-outline-variant">
        <div className="max-w-[1600px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-on-surface-variant text-label-md">
          <span className="">
            © 2026 VantageCV Inc. Built by AbdulRahman Ibn Hassn. Precise
            engineering for professionals.
          </span>
          <nav className="flex gap-8">
            <a className="hover:text-on-surface" href="#">
              Privacy
            </a>
            <a className="hover:text-on-surface" href="#">
              Terms
            </a>
            <a className="hover:text-on-surface" href="#">
              Support
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
