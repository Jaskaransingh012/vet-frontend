import React from 'react';

const AnimalCard = ({ animal }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={animal.imageUrl}
          alt={animal.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          ${animal.price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Name and Breed */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{animal.name}</h3>
        <p className="text-sm text-gray-600 mb-4">{animal.breed}</p>

        {/* Details */}
        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{animal.age} years</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-pink-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
            <span>{animal.gender}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6">{animal.description}</p>

        {/* Seller Info */}
        <div className="flex items-center">
          <img
            src={animal.seller.avatar}
            alt={animal.seller.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{animal.seller.name}</p>
            <p className="text-xs text-gray-500">{animal.seller.location}</p>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>

      {/* View Button on Hover */}
      <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-purple-600 hover:text-white transition-colors duration-300">
          View Details
        </span>
      </button>
    </div>
  );
};

export default AnimalCard;