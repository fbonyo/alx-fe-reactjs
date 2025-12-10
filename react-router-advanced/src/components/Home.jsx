// src/components/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>
        <Link to="/profile">Go to Profile (Protected)</Link>
      </p>
    </div>
  );
}
