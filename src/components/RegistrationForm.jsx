import React, { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!form.username.trim()) errs.username = "Username is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Password must be at least 6 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!validate()) return;

    try {
      setStatus("submitting");
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      await res.json();
      setStatus("success");
      setForm({ username: "", email: "", password: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "0 auto" }}>
      <h2>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 12 }}>
          <label>Username</label>
          <input name="username" value={form.username} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} style={{ width: "100%", padding: 8 }} />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>

        <button type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Submitting..." : "Register"}
        </button>

        {status === "success" && <div style={{ color: "green", marginTop: 8 }}>Registered (mock)!</div>}
        {status === "error" && <div style={{ color: "red", marginTop: 8 }}>Submission failed.</div>}
      </form>
    </div>
  );
}
