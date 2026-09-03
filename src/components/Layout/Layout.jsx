import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, currentPage, setCurrentPage }) {
  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {children}
      <Footer />
    </>
  );
}
