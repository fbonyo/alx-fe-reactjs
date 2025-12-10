import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <div>
        <h1>React Router Advanced Demo</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />

          {/* Use ProtectedRoute for profile */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Dynamic route */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Fallback */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




