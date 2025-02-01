import React, { useRef } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../Css/Navbar.css"; 
import logo from "../assets/Images/Logo.jpg";

const Navbar = () => {
  const loginRef = useRef(null);
  const signupRef = useRef(null);

  const handleMouseMove = (e, ref) => {
    const button = ref.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);

    // Magnetic Effect
    const moveX = (x - rect.width / 2) * 0.2;
    const moveY = (y - rect.height / 2) * 0.2;
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = "translate(0, 0)"; // Reset position
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Animal Marketplace Logo" />
        </Link>
      </div>

      <div className="buttons">
        <Link to="/login">
          <button
            ref={loginRef}
            className="magnetic-button"
            onMouseMove={(e) => handleMouseMove(e, loginRef)}
            onMouseLeave={() => handleMouseLeave(loginRef)}
          >
            <span>Login</span>
          </button>
        </Link>

        <Link to="/signup">
          <button
            ref={signupRef}
            className="magnetic-button"
            onMouseMove={(e) => handleMouseMove(e, signupRef)}
            onMouseLeave={() => handleMouseLeave(signupRef)}
          >
            <span>Signup</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
