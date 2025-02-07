// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-12 px-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
//         <h1 className="text-6xl font-bold text-center text-red-800 mb-6">
//           About Us
//         </h1>
//         <p className="text-gray-600 text-lg text-center">
//           Welcome to **Animal MarketPlace**, your one-stop destination for
//           buying and selling animals, pet products, and veterinary support. Our
//           mission is to connect animal lovers with trusted sellers while
//           ensuring the best care for their pets and livestock.
//         </p>

//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">
//             🐾 What We Offer:
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 text-lg">
//             <li>Wide range of animals for sale – pets, livestock, and exotic breeds</li>
//             <li>High-quality pet and farm products</li>
//             <li>Verified sellers for a trustworthy experience</li>
//             <li>24/7 veterinary consultation and support</li>
//           </ul>
//         </div>

//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">
//             ❤️ Our Mission:
//           </h2>
//           <p className="text-gray-600 text-lg">
//             We aim to create a **safe, ethical, and transparent** marketplace
//             where animal lovers can find the perfect companions, farm animals,
//             and essential products while promoting responsible pet ownership and
//             care.
//           </p>
//         </div>

//         <div className="mt-8 text-center">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-2">
//             📩 Contact Us
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Have questions? Reach out to us at:
//           </p>
//           <p className="text-gray-800 font-semibold">support@animalmarket.com</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-6">
      <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-10">
        
        {/* About Us Section */}
        <div className="flex items-center justify-between mb-10">
          {/* Left: Dog Icon */}
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
            <span className="text-7xl">🐶</span>
          </div>

          {/* Center: About Us Title */}
          <div className="text-center flex-1">
            <h6 className="text-7xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
              About Us
            </h6>
            <p className="text-gray-600 text-lg mt-2">
              Connecting Animal Lovers with Trusted Sellers
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Welcome to <strong>Animal MarketPlace</strong>, your one-stop destination for buying and selling animals, pet products, and veterinary support. 
          Our mission is to connect animal lovers with trusted sellers while ensuring the best care for their pets and livestock.
        </p>

        {/* Additional Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-4xl">📢</span>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Sell Your Animals</h2>
            <p className="text-gray-600 mt-2">Easily list and sell your pets or livestock to trusted buyers in our marketplace.</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-4xl">🏥</span>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Expert Animal Care</h2>
            <p className="text-gray-600 mt-2">Our facility is equipped with professional veterinarians ensuring the best care for your pets.</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-4xl">📅</span>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Book Appointments</h2>
            <p className="text-gray-600 mt-2">Schedule a consultation with a vet for your sick pet with just a few clicks.</p>
          </div>
        </div>

        {/* Original Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white shadow-md rounded-xl p-6 flex justify-between flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-4xl">🐾</span>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800">What We Offer</h2>
            <p className="text-gray-600 mt-2">Discover exclusive pet products and services tailored for your furry friends.</p>
            <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-110">
              Learn More
            </button>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 flex justify-between flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-4xl">🐶</span>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Sign Up</h2>
            <p className="text-gray-600 mt-2">Join our community for amazing offers and pet-friendly services.</p>
            <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-110">
              Sign Up
            </button>
          </div>

          <div className="bg-white shadow-md rounded-xl justify-between p-6 flex flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-4xl">🐕</span>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-2">Providing the best care and quality for pets while ensuring sustainability.</p>
            <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-110">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
