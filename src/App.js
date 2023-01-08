import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import North from "./North";
import South from "./South";
import West from "./West";
import East from "./East";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/North" element={<North />} />
          <Route path="/South" element={<South />} />
          <Route path="/East" element={<East />} />
          <Route path="/West" element={<West />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
