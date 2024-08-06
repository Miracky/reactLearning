import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

// Sayfalar
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import Error404 from "./components/Error404";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#FF0000" : "inherit",
                  };
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#FF0000" : "inherit",
                  };
                }}
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#FF0000" : "inherit",
                  };
                }}
                to="/users"
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} />
          {/* Tüm /users/ altında olan rotaları kapsar */}
          <Route path="*" element={<Error404 />} />

          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
