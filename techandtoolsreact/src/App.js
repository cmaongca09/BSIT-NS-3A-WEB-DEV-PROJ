// App.js

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Shop } from "./pages/Shop";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <h1>Tech and Tools</h1>
      <Router>
        <nav>
          <div>
            <Link to="/LogIn">LogIn</Link>
            <Link to="/SignUp">SignUp</Link>
          </div>
          <div>
            <Link to="/">Shop</Link>
            <Link to="/Profile">Profile</Link>
            <Link to="/AboutUs">About Us</Link>
          </div>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
