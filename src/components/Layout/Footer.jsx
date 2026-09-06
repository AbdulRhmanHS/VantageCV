// TODO: Make links for Home, My Resumes, Builder, and Github repo
// TODO: Make a Terms page
// TODO: Make a contact me page (or make the link lead to any email)

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container border-t border-outline-variant py-4">
      <div className="max-w-max-width-desktop mx-auto px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-outline-variant/40">
          <div className="md:col-span-6 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="VantageCV Logo"
                className="h-6 w-auto object-contain"
                src="/src/assets/main_logo.svg"
              />
              <span className="text-headline-md font-headline-md tracking-tight text-primary">
                VantageCV
              </span>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md leading-relaxed">
              A precision resume builder crafted for modern professionals to
              build ATS-friendly CVs in minutes.
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-label-md font-label-md uppercase tracking-wider text-primary font-semibold">
              Navigation
            </span>
            <nav className="flex flex-col gap-2.5">
              <Link
                to="/"
                className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                Home
              </Link>
              <Link
                to="/resumes"
                className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                My Resumes
              </Link>
              <Link
                to="/builder"
                className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                Builder
              </Link>
            </nav>
          </div>
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-label-md font-label-md uppercase tracking-wider text-primary font-semibold">
              Resources
            </span>
            <nav className="flex flex-col gap-2.5">
              <a
                className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
                href="#"
              >
                Terms
              </a>
              <a
                className="text-body-md text-on-surface-variant hover:text-secondary transition-colors"
                href="mailto:contact@vantagecv.com"
              >
                Contact Me
              </a>
              <a
                className="text-body-md text-on-surface-variant hover:text-secondary transition-colors inline-flex items-center gap-1.5"
                href="https://github.com"
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-label-md text-on-surface-variant pt-4">
          <p className="">
            © 2026 VantageCV Inc. Built by AbdulRahman Ibn Hassn.
          </p>
          <p className="">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
