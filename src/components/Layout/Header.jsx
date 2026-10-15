import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MainLogo } from "../../assets/MainLogo";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-max-width-desktop mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-3">
            <MainLogo />
            <span className="hidden min-[350px]:block text-headline-md font-headline-md tracking-tight text-primary">
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
          <button
            className={`bg-secondary text-on-secondary px-4 py-2 rounded-lg text-label-md opacity-100 hover:opacity-90 transition-opacity ${location.pathname === "/" ? "block" : "hidden"}`}
            onClick={() => {
              navigate("/resumes", { state: { triggerAction: true } });
            }}
          >
            Create New
          </button>
        </div>
      </div>
    </header>
  );
}
