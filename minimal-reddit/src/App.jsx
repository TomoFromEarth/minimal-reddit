import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Subreddits from "./components/Subreddits";

function App() {
  return (
    <SkeletonTheme baseColor="#cbd5e1" highlightColor="#f8fafc">
      <div className="grid grid-cols-3 dark:bg-slate-900">
        <Header />
        <main className="col-start-1 col-end-3 p-4">
          <Home />
        </main>
        <aside className="col-start-3 col-end-4 p-4">
          <Subreddits />
        </aside>
      </div>
    </SkeletonTheme>
  );
}

export default App;
