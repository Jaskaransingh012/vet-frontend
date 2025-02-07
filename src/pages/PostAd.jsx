import React, { useState } from "react";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const PostAd = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "Horse",
    location: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const previewURLs = files.map((file) => URL.createObjectURL(file));

    setFormData({ ...formData, images: files });
    setImagePreviews(previewURLs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toast.success(
        "Your ad has been submitted successfully!."
      );
    navigate("/");
  };

  return (
    <div className="min-h-screen pt-5 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-200 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">📢 Post Your Animal Ad</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Ad Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter animal name or breed"
              className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter price"
                className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="Horse">Horse</option>
                <option value="Cow">Cow</option>
                <option value="Goat">Goat</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter city or area"
              className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your animal (age, breed, special features)"
              className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Upload Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
              className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {/* Image Previews */}
            {imagePreviews.length > 0 && (
              <div className="mt-4 flex gap-2">
                {imagePreviews.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt="Preview"
                    className="w-24 h-24 object-cover rounded-lg shadow-md border"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:bg-blue-700 active:scale-95 transition-all"
          >
            🚀 Post Ad
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostAd;
