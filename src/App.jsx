import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MyResumes from "./pages/MyResumes";
import ResumeBuilder from "./pages/ResumeBuilder";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resumes" element={<MyResumes />} />
      </Route>
      <Route path="/builder" element={<ResumeBuilder />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
