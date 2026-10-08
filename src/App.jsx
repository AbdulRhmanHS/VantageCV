// FIXME: Fix the delayed loading of the icons

import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MyResumes from "./pages/MyResumes";
import ResumeBuilder from "./pages/ResumeBuilder";
import Layout from "./components/Layout/Layout";
import { ActiveCVProvider } from "./data/ActiveCVProvider";

export default function App() {
  return (
    <ActiveCVProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/resumes" element={<MyResumes />} />
        </Route>
        <Route path="/builder" element={<ResumeBuilder />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ActiveCVProvider>
  );
}
