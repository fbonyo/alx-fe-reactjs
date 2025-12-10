import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/profile">Go to Profile (Protected)</Link>
      <br />
      <Link to="/blog/1">Go to Blog Post 1 (Dynamic)</Link>
    </div>
  );
}

