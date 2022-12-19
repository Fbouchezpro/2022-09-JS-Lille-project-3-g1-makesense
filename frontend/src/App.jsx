import SugestCard from "@components/SugestCard/SugestCard";
import Home from "@pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/suggest" element={<SugestCard />} />
        <Route path="/historic" />
        <Route path="/contacts" />
        <Route path="/params" />
        <Route path="/logout" />
      </Routes>
    </div>
  );
}

export default App;
