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
      <h1 className="Title">TechandTools</h1>
      <Router>
        <div className="nav">
          <Link to="/Home">Home</Link>
          <Link to="/Shop">Shop</Link>
          <Link to="/Profile">Profile</Link>
        </div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/" element={<Inventory />} />
          <Route path="/" element={<LogIn />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
