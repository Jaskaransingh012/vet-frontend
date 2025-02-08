import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Images/Logo.png";

const Navbar = () => {
  const loginRef = useRef(null);
  const signupRef = useRef(null);
  const postAdRef = useRef(null);

  const handleMouseMove = (e, ref) => {
    const button = ref.current;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--x", `${x}px`);
    button.style.setProperty("--y", `${y}px`);

    const moveX = (x - rect.width / 2) * 0.2;
    const moveY = (y - rect.height / 2) * 0.2;
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = "translate(0, 0)";
  };

  return (
    <nav className="w-full py-4 px-6 bg-white/10 backdrop-blur-md shadow-md flex justify-between items-center rounded-xl">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Buttons Section */}
      <div className="flex space-x-4">
        <Link to="/login">
          <button
            ref={loginRef}
            className="relative px-6 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-700 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onMouseMove={(e) => handleMouseMove(e, loginRef)}
            onMouseLeave={() => handleMouseLeave(loginRef)}
          >
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button
            ref={signupRef}
            className="relative px-6 py-2 text-white font-semibold bg-gradient-to-r from-purple-500 to-purple-700 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onMouseMove={(e) => handleMouseMove(e, signupRef)}
            onMouseLeave={() => handleMouseLeave(signupRef)}
          >
            SignUp
          </button>
        </Link>

        {/* Post Ad Button */}
        <Link to="/post-ad">
          <button className="relative px-6 py-2 bg-blue-600 text-white rounded-4xl  font-semibold hover:bg-blue-500 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Post Ad
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
