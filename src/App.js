import { BrowserRouter, Routes, Route } from "react-router-dom";
import North from "./pages/North";
import South from "./pages/South";
import West from "./pages/West";
import East from "./pages/East";
import Home from "./home/Home";
import New from "./contact/New";
import Contact from "./contact/Contact";
import Signup from "./contact/Signup";
import PantryUpdate from "./contact/PantryUpdate";
import FoodbankUpdate from "./contact/foodbankUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home/Home" element={<Home />} />
          <Route path="/North" element={<North />} />
          <Route path="/South" element={<South />} />
          <Route path="/East" element={<East />} />
          <Route path="/West" element={<West />} />
          <Route path="/New" element={<New />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/PantryUpdate" element={<PantryUpdate />} />
          <Route path="/FoodbankUpdate" element={<FoodbankUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
