import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Subreddits from "./components/Subreddits";

function App() {
  return (
    <div className="grid grid-cols-3">
      <Header />
      <main className="col-start-1 col-end-3 p-4">
        <Home />
      </main>
      <aside className="col-start-3 col-end-4 p-4">
        <Subreddits />
      </aside>
    </div>
  );
}

export default App;
