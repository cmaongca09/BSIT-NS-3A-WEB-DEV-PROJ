import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { Inventory } from "./pages/Inventory";
import { Profile } from "./pages/Profile";
import { Shop } from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <h1>TechandTools</h1>
      <Router>
        <div>
          <Link to="/LogIn">Shop</Link>
          <Link to="/SignUp">Profile</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/Profile">Profile</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/" element={<Inventory />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
