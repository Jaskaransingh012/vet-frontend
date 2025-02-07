import React from "react";
import { FaRegHeart, FaHeart, FaMapMarkerAlt, FaCheck } from "react-icons/fa";

const AnimalCard = () => {
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => setIsLiked(!isLiked);

  return (
    <div className="group border border-gray-100 rounded-2xl shadow-lg overflow-hidden w-80 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative hover:border-gray-200 transform-gpu">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="relative h-56 bg-gradient-to-br from-blue-50 to-purple-50">
          <img
            src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Golden Retriever"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 transform-gpu"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {isLiked ? (
            <FaHeart className="text-red-500 w-6 h-6 animate-pop-in" />
          ) : (
            <FaRegHeart className="text-gray-700 w-6 h-6 transition-colors duration-200 hover:text-red-400" />
          )}
        </button>
      </div>

      {/* Details Section */}
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              <span className="text-blue-600">₹</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                15,000
              </span>
            </h3>
            <p className="text-lg font-semibold text-gray-900 mt-1">Golden Retriever</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs bg-emerald-100/90 text-emerald-800 px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm border border-emerald-200/50">
            <FaCheck className="w-3.5 h-3.5" />
            Verified
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            🐾 2 years
          </span>
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
            ♂ Male
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="truncate">Mumbai, India</span>
          </div>
          <div className="h-1 w-1 bg-gray-400 rounded-full" />
          <span className="text-gray-500">3d ago</span>
        </div>

        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-blue-50/80 rounded-lg backdrop-blur-sm">
          <svg
            className="w-5 h-5 text-blue-600 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium text-blue-800">
            Vaccinated & Health Checked
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mx-5 mb-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 text-sm font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-600 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-200/50 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transform-gpu">
        <span>Start Adoption Process</span>
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
};

export default AnimalCard;