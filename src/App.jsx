// FIXME: Fix the delayed loading of the icons

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MyResumes from "./pages/MyResumes";
import ResumeBuilder from "./pages/ResumeBuilder";
import Layout from "./components/Layout/Layout";
import Terms from "./pages/Terms";
import { ActiveCVProvider } from "./data/ActiveCVProvider";
import ScrollToTop from "./components/Layout/ScrollToTop";

export default function App() {
  return (
    <ActiveCVProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/resumes" element={<MyResumes />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
        <Route path="/builder" element={<ResumeBuilder />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ActiveCVProvider>
  );
}
