// import React from "react";
// import FilterAndSort from "../Components/FilterAndSort";
// import AnimalCard from "../Components/AnimalCard";
// import horse from "../assets/Images/image.png"
// import AboutProduct from "./ProductPage";
// import { Link } from "react-router-dom";

// function MarketPlace() {
//   const animals = [
//     {
//       name: "Buddy",
//       breed: "Golden Retriever",
//       age: 2,
//       gender: "Male",
//       price: 1200,
//       description: "Friendly and playful, loves kids and other pets. Vaccinated and healthy.",
//       imageUrl: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       seller: {
//         name: "John Doe",
//         location: "New York, USA",
//         avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//       },
//     }
//   ]
//   return (
//     <div className="g-gray-100 min-h-screen py-12 px-6">
//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
//         <h1 className="text-3xl mb-8">
//           🐾 Animal Marketplace
//         </h1>
//         <h2 className="mb-4">
//           Find your perfect companion and explore a variety of pet products, services, and veterinary support for all your animal needs.
//         </h2>
//         <FilterAndSort />
//         <div className="mt-5 flex gap-5 flex-wrap">

//           {animals.map(animal => {
//             return <Link to={`${animal.id}`}> <AnimalCard key={animal.id} animal={animal} /></Link>
//           })}


//         </div>

//       </div>
//     </div>
//   );
// }

// export default MarketPlace;
import React, { useState } from "react";
import FilterAndSort from "../Components/FilterAndSort";
import AnimalCard from "../Components/AnimalCard";
import { Link } from "react-router-dom";

function MarketPlace() {
  const [selectedFilters, setSelectedFilters] = useState({
    dogs: false,
    cats: false,
    birds: false,
    fish: false,
  });

  const animals = [
    {
      id: 1,
      name: "Buddy",
      breed: "Golden Retriever",
      age: 2,
      gender: "Male",
      price: 1200,
      description: "Friendly and playful, loves kids and other pets. Vaccinated and healthy.",
      category: "dogs", // Added category
      imageUrl: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      seller: {
        name: "John Doe",
        location: "New York, USA",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      },
    },
    {
      id: 2,
      name: "Mittens",
      breed: "Persian Cat",
      age: 3,
      gender: "Female",
      price: 800,
      category: "cats", // Added category
      imageUrl: "https://example.com/cat.jpg",
      seller: {
        name: "Jane Smith",
        location: "Los Angeles, USA",
        avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      },
    },
    // Add more animals...
  ];

  const handleFilterChange = (selectedFilters) => {
    setSelectedFilters(selectedFilters);
  };

  const filteredAnimals = animals.filter((animal) => {
    const { dogs, cats, birds, fish } = selectedFilters;
    if (dogs && animal.category === "dogs") return true;
    if (cats && animal.category === "cats") return true;
    if (birds && animal.category === "birds") return true;
    if (fish && animal.category === "fish") return true;
    return !dogs && !cats && !birds && !fish; // No filters, show all animals
  });

  return (
    <div className="g-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl mb-8">🐾 Animal Marketplace</h1>
        <h2 className="mb-4">
          Find your perfect companion and explore a variety of pet products, services, and veterinary support for all your animal needs.
        </h2>
        <FilterAndSort onFilterChange={handleFilterChange} />
        <div className="mt-5 flex gap-5 flex-wrap">
          {filteredAnimals.map((animal) => (
            <Link to={`${animal.id}`} key={animal.id}>
              <AnimalCard animal={animal} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarketPlace;
