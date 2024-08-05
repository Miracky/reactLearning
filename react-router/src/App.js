import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Sayfalar
import About from "./components/About";
import Home from "./components/Home";
import Users from "./components/Users";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} /> {/* Tüm /users/ altında olan rotaları kapsar */}
          <Route path="/users/:userId" element={<User />} /> {/* Kullanıcı detayları için rota */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
