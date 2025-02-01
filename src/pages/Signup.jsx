import React from 'react'
import "../Css/Login.css"
import doctorIcon from "../assets/Images/doctor.jpg"; 
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-1">
            <div className="login-container">
                <div className="small-container">
                    <h1>Welcome to Our Healthcare Portal</h1>
                    <p>
                        Select your role to proceed with secure access. Our platform ensures a
                        seamless experience for both doctors and patients.
                    </p>
                    <div className="login-options">
                        <Link to="/signup-doctor" className="login-card">
                            <img src={doctorIcon} alt="Doctor Icon" className="icon" />
                            <span>SignUp as Doctor →</span>
                        </Link>
                        <Link to="/signup-patient" className="login-card">
                            <img src={doctorIcon} alt="Patient Icon" className="icon" />
                            <span>SignUp as Patient →</span>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup