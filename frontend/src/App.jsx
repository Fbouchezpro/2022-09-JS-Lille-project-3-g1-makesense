import Home from "@pages/Home/Home";
import SubscriptionForm from "@pages/SubscriptionForm/SubscriptionForm";
import Thread from "@pages/Thread/Thread";
import Register from "@pages/Register/Register";
import { Routes, Route } from "react-router-dom";
import SuggestForm from "@pages/SuggestForm/SuggestForm";
import FinalDecision from "@components/FinalDecision/FinalDecision";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SubscriptionForm />} />
        <Route path="/thread" element={<Thread />} />
        <Route path="/register" element={<Register />} />
        <Route path="/suggestform" element={<SuggestForm />} />
        <Route path="/finaldecision" element={<FinalDecision />} />

      </Routes>
    </div>
  );
}

export default App;
