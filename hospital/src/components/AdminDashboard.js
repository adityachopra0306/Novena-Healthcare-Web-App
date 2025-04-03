import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";  // Import CSS file

const AdminDashboard = () => {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/admin-dashboard/")
      .then((response) => {
        setDoctors(response.data.doctors);
        setPatients(response.data.patients);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <h3>Doctors</h3>
      <table>
        <thead>
          <tr><th>ID</th><th>Specialization</th></tr>
        </thead>
        <tbody>
          {doctors.map((doc) => (
            <tr key={doc.user__user_id}>
              <td>{doc.user__user_id}</td>
              <td>{doc.specialization}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Patients</h3>
      <table>
        <thead>
          <tr><th>ID</th><th>Medical History</th></tr>
        </thead>
        <tbody>
          {patients.map((pat) => (
            <tr key={pat.user__user_id}>
              <td>{pat.user__user_id}</td>
              <td>{pat.medical_history}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
