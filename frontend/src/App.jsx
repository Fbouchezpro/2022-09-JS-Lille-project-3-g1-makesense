import Home from "@pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggest" />
        <Route path="/historic" />
        <Route path="/params" />
        <Route path="/contact" />
        <Route path="/logout" />
      </Routes>
    </div>
  );
}

export default App;
