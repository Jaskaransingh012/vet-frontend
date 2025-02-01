import React from "react";
import { Link } from "react-router-dom";
import "../Css/Login.css";
import doctorIcon from "../assets/Images/doctor.jpg"; // Replace with actual path
// import patientIcon from "../assets/Images/patient.jpg"; // Replace with actual path

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="small-container">
          <h1>Welcome to Our Healthcare Portal</h1>
          <p>
            Select your role to proceed with secure access. Our platform ensures a
            seamless experience for both doctors and patients.
          </p>
          <div className="login-options">
            <Link to="/login-doctor" className="login-card doctor-card">
              <img src={doctorIcon} alt="Doctor Icon" className="icon" />
              <span>Login as Doctor →</span>
            </Link>
            <Link to="/login-patient" className="login-card patient-card">
              <img src={doctorIcon} alt="Patient Icon" className="icon" />
              <span>Login as Patient →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;