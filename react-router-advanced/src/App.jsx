import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div>
        <h1>React Router Advanced Demo</h1>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Protected Profile route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Dynamic Blog route */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Fallback route */}
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





