import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MyResumes from "./pages/MyResumes";
import Layout from "./components/Layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumes" element={<MyResumes />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}
