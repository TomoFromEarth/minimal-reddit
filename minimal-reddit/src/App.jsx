import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-3 p-4">
        <div className="col-start-1 col-end-3">
          <Home />
        </div>
      </main>
    </>
  );
}

export default App;
