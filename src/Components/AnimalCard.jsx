import React from "react";
import { FaRegHeart } from "react-icons/fa";

const AnimalCard = ({ image, price, age, breed, location, posted }) => {
  return (
    <div className="border rounded-xl shadow-lg overflow-hidden w-72 bg-white">
      {/* Image Section */}
      <div className="relative">
        <img src={image} alt={breed} className="w-full h-40 object-cover" />
        <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md">
          <FaRegHeart className="text-gray-600" />
        </button>
      </div>

      {/* Details Section */}
      <div className="p-3">
        <h3 className="text-lg font-bold text-gray-800">₹ {price}</h3>
        <p className="text-gray-600 text-sm">{age} • {breed}</p>
        <p className="text-green-600 text-sm font-medium">Healthy & Vaccinated</p>
        <p className="text-blue-500 text-xs mt-1">{location}</p>
        <p className="text-gray-400 text-xs mt-1">{posted} ago</p>
      </div>
    </div>
  );
};

export default AnimalCard;
