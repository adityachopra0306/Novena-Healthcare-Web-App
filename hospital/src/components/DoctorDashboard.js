import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./AdminDashboard.css";

const DoctorDashboard = () => {
  const { doctorId } = useParams();  // Get doctorId from URL
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    if (!doctorId) return;  // Ensure doctorId exists

    axios.get(`http://127.0.0.1:8000/api/doctor-dashboard/${doctorId}/`)
      .then((response) => {
        setPatients(response.data.patients);
      })
      .catch((error) => console.error("Error fetching patients:", error));
  }, [doctorId]);

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <h3>My Patients</h3>
      <table border="1">
        <thead>
          <tr><th>ID</th><th>Medical History</th></tr>
        </thead>
        <tbody>
          {patients.length > 0 ? (
            patients.map((pat) => (
              <tr key={pat.user__user_id}>
                <td>{pat.user__user_id}</td>
                <td>{pat.medical_history}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No patients assigned.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorDashboard;
