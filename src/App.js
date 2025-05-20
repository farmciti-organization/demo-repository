import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import FarmDetailPage from "./pages/farm-detail/FarmDetailPage.jsx";
import FarmListPage from "./pages/farm-list/FarmListPage.jsx";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import "./assets/scripts/index.js";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app">
      <ScrollToTop />

      <Header />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/farm/:farmId" element={<FarmDetailPage />} />
          <Route path="/category/:categoryId" element={<FarmListPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
