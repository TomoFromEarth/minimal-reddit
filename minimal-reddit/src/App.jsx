import { useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Subreddits from "./components/Subreddits";

function App() {
  const [darkMode, setDarkMode] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleThemeChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener("change", handleThemeChange);
    return () => mediaQuery.removeEventListener("change", handleThemeChange);
  }, []);
  const baseColor = darkMode ? "#334155" : "#cbd5e1";
  const highlightColor = darkMode ? "#64748b" : "#f8fafc";

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <div className="grid grid-cols-1 dark:bg-slate-900 md:grid-cols-3">
        <Header />
        <main className="p-2 md:col-start-1 md:col-end-3 md:p-4">
          <Home />
        </main>
        <aside className="p-2 md:col-start-3 md:col-end-4 md:p-4">
          <Subreddits />
        </aside>
      </div>
    </SkeletonTheme>
  );
}

export default App;
