import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import New from "./contact/New";
import Contact from "./contact/Contact";
import Signup from "./contact/Signup";
import PantryUpdate from "./contact/PantryUpdate";
// import FoodbankUpdate from "./contact/foodbankUpdate";
import Direction from "./pages/Direction";
import AdminDashboard from "./contact/AdminDashboard";
import NewPantryDashboard from "./contact/NewPantryDashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home/Home" element={<Home />} />
          <Route path="/West" element={<Direction direction="west" />} />
          <Route path="/North" element={<Direction direction="north" />} />
          <Route path="/South" element={<Direction direction="south" />} />
          <Route path="/East" element={<Direction direction="east" />} />
          <Route path="/New" element={<New />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/PantryUpdate" element={<PantryUpdate />} />
          {/* <Route path="/FoodbankUpdate" element={<FoodbankUpdate />} /> */}
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/NewPantryDashboard" element={<NewPantryDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
