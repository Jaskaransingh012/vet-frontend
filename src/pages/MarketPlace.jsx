import React from "react";
import FilterAndSort from "../Components/FilterAndSort";
import AnimalCard from "../Components/AnimalCard";
import horse from "../assets/Images/image.png"
import AboutProduct from "./ProductPage";
import { Link } from "react-router-dom";

function MarketPlace() {
  const animals = [
    {
      id: 1,
      image: horse, // Replace with actual animal image URL
      price: "25,00, 000",
      age: "2 Years",
      breed: "Ravi ghoda",
      location: "Pune, Maharashtra",
      posted: "3 Days"
    },
    {
      id: 2,
      image: horse, // Replace with actual animal image URL
      price: "20,00, 000",
      age: "4 Years",
      breed: "Ravi ghoda",
      location: "Pune, Maharashtra",
      posted: "2 Days"
    }
  ]
  return (
    <div className="g-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl mb-8">
          🐾 Animal Marketplace
        </h1>
        <h2 className="mb-4">
          Find your perfect companion and explore a variety of pet products, services, and veterinary support for all your animal needs.
        </h2>
        <FilterAndSort />
        <div className="mt-5 flex gap-5 flex-wrap">

          {animals.map(animal =>{
            return <Link to={`${animal.id}`}> <AnimalCard key={animal.id} {...animal} /></Link>
          })}


        </div>

      </div>
    </div>
  );
}

export default MarketPlace;
