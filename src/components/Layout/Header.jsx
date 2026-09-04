import { Link, NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-max-width-desktop mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3">
            <img
              alt="ResumeFlow Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA__yS96uo1QrPErR11rs4PhYPjAR_zLeEr1Rz3T6z6-aCv8PBlXa5OAjDWMtmRSLBg0Bj6Gxlo1LhMgBDNcXNODEiDRZqmj-9wF5waPGUeYC4SArre4_tsk6h-3Z-OoS4osyWgaBBtrzwzPXKpx2apW5qIuef9VROXXNvTNC7vQthCQejZRy27PY60ufnIwEiddX23hqSTrnZiY7JjM0yUPX3JY6EYvOOky6ojbdyNX2qpJvZ1owCz"
            />
            <span className="text-headline-md font-headline-md tracking-tight text-primary">
              VantageCV
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-label-md transition-colors font-semibold ${
                  isActive
                    ? "text-secondary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/resumes"
              className={({ isActive }) =>
                `text-label-md transition-colors font-semibold ${
                  isActive
                    ? "text-secondary"
                    : "text-on-surface-variant hover:text-on-surface"
                }`
              }
            >
              My Resumes
            </NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/builder"
            className={`bg-secondary text-on-secondary px-4 py-2 rounded-lg text-label-md opacity-100 hover:opacity-90 transition-opacity ${location.pathname === "/" ? "block" : "hidden"}`}
          >
            Create New
          </Link>
        </div>
      </div>
    </header>
  );
}
