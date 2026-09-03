import { useState } from "react";
import Home from "./pages/Home";
import MyResumes from "./pages/MyResumes";
import Layout from "./components/Layout/Layout";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {currentPage === "home" && <Home />}
      {currentPage === "myResumes" && <MyResumes />}
    </Layout>
  );
}
