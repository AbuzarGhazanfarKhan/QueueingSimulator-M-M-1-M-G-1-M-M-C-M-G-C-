import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import PerformanceMeasures from "./pages/PerformanceMeasures";
import Home from "./Home";
function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="performance" element={<PerformanceMeasures />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
