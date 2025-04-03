import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  console.log("Login Component Rendered");  // Debugging Step 1

  const [role, setRole] = useState("patient");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending Request:", { role, id, password });  // Debugging Step 1
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        role,
        id,
        password,
      });
      console.log("Response Data:", response.data);  // Debugging Step 2
      alert("Login successful!");
      if (role === "doctor") {
        navigate(`/${role}-dashboard/${id}`);
      } else {
        navigate(`/${role}-dashboard`);
      }
      
    } catch (error) {
      console.error("Error Response:", error.response ? error.response.data : error);
      alert("Invalid credentials!");
    }
  };
  
  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded">
        <div className="mb-3">
          <label className="form-label">Select Role</label>
          <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">{role.charAt(0).toUpperCase() + role.slice(1)} ID</label>
          <input type="text" className="form-control" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
