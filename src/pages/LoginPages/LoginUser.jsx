import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // setLoading(true);
    // try {
    //   const response = await fetch("https://your-backend-api.com/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();
    //   setLoading(false);

    //   if (response.ok) {
    //     localStorage.setItem("token", data.token);
    //     navigate("/dashboard");
    //   } else {
    //     alert(data.message || "Login failed");
    //   }
    // } catch (error) {
    //   setLoading(false);
    //   alert("Something went wrong. Please try again.");
    // }

    setTimeout(()=>{
        toast.success("User logged in successfully")
        navigate("/")
    },1000)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-blue-300 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">🔑 Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <Mail className="absolute left-4 top-3 text-gray-500" size={20} />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-12 py-3 bg-gray-100 rounded-lg border ${errors.email ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-4 top-3 text-gray-500" size={20} />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className={`w-full px-12 py-3 bg-gray-100 rounded-lg border ${errors.password ? "border-red-500" : "border-gray-300"} focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between text-sm text-gray-600">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember Me
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition-all"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative bg-white px-4 text-gray-500">OR</div>
        </div>

        {/* Social Login */}
        <div className="flex space-x-4">
          <button className="flex-1 py-3 bg-red-600 text-white rounded-lg font-semibold shadow-md hover:bg-red-700 transition-all">
            🔴 Google
          </button>
          <button className="flex-1 py-3 bg-blue-800 text-white rounded-lg font-semibold shadow-md hover:bg-blue-900 transition-all">
            🔵 Facebook
          </button>
        </div>

        {/* Signup Link */}
        <p className="mt-6 text-gray-600">
          Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginUser;
