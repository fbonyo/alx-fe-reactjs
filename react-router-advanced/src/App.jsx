import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Post from "./components/Post";

function App() {
  // Simulate authentication
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <h1>React Router Advanced Demo</h1>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Login route */}
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />

          {/* Protected Profile route with nested routes */}
          <Route
            path="/profile/*"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />

          {/* Dynamic Post route */}
          <Route path="/posts/:postId" element={<Post />} />

          {/* Fallback route */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

