import React, { useState } from "react";
import pedigreeImage from "../assets/Images/pedigree.jpg";
import glovesImage from "../assets/Images/gloves.jpg";
import bowlImage from "../assets/Images/product_svg/svg/gloves.jpg"; 
import poopImg from "../assets/Images/product_svg/svg/poop.jpg";   
import KuttaImage from "../assets/Images/product_svg/svg/kutta.jpg"; 

const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (title, price) => {
    setCart([...cart, { title, price }]);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
  };

  return (
    <div className="bg-gray-100">
      <main className="p-8">
        <section className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-h-[80vh] overflow-y-auto p-4">
          {[
            {
              img: pedigreeImage,
              title: "Dog Food",
              author: "Vet Villa",
              price: "9.99",
            },
            {
              img: glovesImage,
              title: "Hand Gloves",
              author: "Vet Villa",
              price: "5.99",
            },
            {
              img: bowlImage,
              title: "Pet Bowl", // Corrected title to match image
              author: "Vet Villa",
              price: "14.09",
            },
            {
              img: poopImg,
              title: "Poop Bags", // Corrected title to match image
              author: "Vet Villa",
              price: "24.99",
            },
            {
              img: KuttaImage,
              title: "Dog Leash", // Corrected title
              author: "Vet Villa",
              price: "12.99",
            },
            {
              img: KuttaImage,
              title: "Dog Leash", // Corrected title
              author: "Vet Villa",
              price: "12.99",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSummrDpDMbGdti7kKv33GBI4JzdVwbM7v4LA&s",
              title: "The Road Trip",
              author: "Beth O'Leary",
              price: "18.99",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcFyh7lXgQ1QAutYFKzYC8efP2RBtzMDOtA&s",
              title: "Grief- A Comedy",
              author: "Alison Larkin",
              price: "24.89",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbv7IYL2vUHvrutZDuF7Ryn7n79JsqCRkpyA&s",
              title: "Alice and A Grump Next Door",
              author: "Jenny Proctor",
              price: "18.90",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white border-2 border-black rounded-lg shadow-md p-4 text-center hover:scale-110 hover:border-blue-700 hover:shadow-lg hover:bg-gray-300 transition-transform">
              <img src={item.img} alt={item.title} className=" h-52 object-cover rounded-md mx-auto w-2xl " />
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="m-s text-gray-600">{item.author}</p>
              <p className="text-red-700 font-bold mt-2">${item.price}</p>
              <button
                className="bg-blue-700 text-white rounded-md px-4 py-2 mt-2 transition-colors hover:bg-blue-500"
                onClick={() => addToCart(item.title, item.price)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </section>

        <div className="cart mt-8 border-2 border-black rounded-lg p-4">
          <h2 className="text-2xl font-semibold">Shopping Cart</h2>
          <ul className="mt-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between py-2">
                <span>{item.title}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xl font-semibold">
            Total: ${getTotalPrice()}
          </p>
        </div>
      </main>

      <footer className="bg-black text-white py-8 text-center">
        <div className="flex justify-around space-x-4 flex-wrap">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: support@onlinebookstore.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Book St, Reading City, ABC 12345</p>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-white hover:text-orange-400">About Us</a></li>
              <li><a href="#" className="text-white hover:text-orange-400">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-orange-400">Terms of Service</a></li>
              <li><a href="#" className="text-white hover:text-orange-400">FAQ</a></li>
            </ul>
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#">
                <img src="https://static.vecteezy.com/system/resources/previews/018/910/719/non_2x/facebook-logo-facebook-icon-free-free-vector.jpg" alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#">
                <img src="https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b?h=210" alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="#">
                <img src="https://img.freepik.com/premium-vector/instagram-logo-vector_768467-330.jpg?semt=ais_hybrid" alt="Instagram" className="w-8 h-8" />
              </a>
              <a href="#">
                <img src="https://static.vecteezy.com/system/resources/previews/018/910/715/non_2x/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg" alt="LinkedIn" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p>&copy; BookBlaze. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
