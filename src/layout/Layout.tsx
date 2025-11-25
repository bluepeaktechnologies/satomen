import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
