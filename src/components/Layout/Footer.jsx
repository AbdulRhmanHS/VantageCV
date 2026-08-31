export default function Footer() {
  return (
    <footer className="w-full bg-surface-container py-12 border-t border-outline-variant">
      <div className="max-w-max-width-desktop mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-on-surface-variant text-label-md">
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
  );
}
