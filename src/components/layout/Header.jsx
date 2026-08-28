import MainLogo from "/src/assets/main_logo.svg?react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-container-nav">
          <div className="header-container-icon">
            <MainLogo className="main-logo" width="18" height="18" />
            <div id="logo-text">ResumeFlow</div>
          </div>
          <nav className="header-nav">
            <a href="#">Home</a>
            <a href="#">My Resumes</a>
          </nav>
        </div>
        <a className="header-link" href="#">
          Create Now
        </a>
      </div>
    </header>
  );
}
