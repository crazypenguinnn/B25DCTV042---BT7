import { useState } from "react";
import Calculator from "./components/calculator/Calculator";
import CV from "./components/cv/CV";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("calc");

  return (
    <div className="app-container">
      <nav className="nav-tabs">
        <button
          className={`tab-btn ${activeTab === "calc" ? "active" : ""}`}
          onClick={() => setActiveTab("calc")}
        >
          Bài 1: Virtual Calculator
        </button>
        <button
          className={`tab-btn ${activeTab === "cv" ? "active" : ""}`}
          onClick={() => setActiveTab("cv")}
        >
          Bài 2: Trang CV React
        </button>
      </nav>

      <main className="main-content">
        {activeTab === "calc" ? <Calculator /> : <CV />}
      </main>

      <footer className="app-footer">
        LTW Buổi 7: SPA & React - Học viện Công nghệ Bưu chính Viễn thông (PTIT)
      </footer>
    </div>
  );
}