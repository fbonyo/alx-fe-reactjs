// src/components/Login.jsx
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();            // set isAuthenticated = true
    navigate("/profile");  // redirect to Profile page
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
