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
        <section className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  p-4">
          {[
            {
              img: "https://headsupfortails.com/cdn/shop/files/8906002480449_2.jpg?v=1738409894",
              title: "Pedigree",
              price: "9.99",
            },
            {
              img: "https://midstchull.com/cdn/shop/products/7d07a0a8a7d6c38baa21885cf516d0a6.jpg?v=1705138030",
              title: "Pet Grooming Gloves",
              price: "19.99",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdB-lenn7ez6WqBgLbwEzCF7ySXNaCDUY7Lg&s",
              title: "Pet Bowl",

              price: "14.09",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK51IwbTFlmexLH2lphfMAPmGOWmh-jTl52e3NuR3gEymUpAENR-OwmpBrx4Y1X6JG62I&usqp=CAU",
              title: "Pet Harness",

              price: "24.99",
            },
            {
              img: "https://getvetco.com/wp-content/uploads/2021/07/Cure-by-Design-500-gms-CBD-Hemp-Oil-for-Dogs-Cats-30-ml.jpg",
              title: "Pet Oil",

              price: "12.99",
            },
            {
              img: "https://goofytails.com/cdn/shop/products/Untitled-1_6527a59d-1b8c-4fd2-be40-ede8c35b8dcf.jpg?v=1676117247",
              title: "Pet Toys",

              price: "18.99",
            },
            {
              img: "https://m.media-amazon.com/images/I/71iWJiqLLLL._AC_UF1000,1000_QL80_.jpg",
              title: "Pet Grooming Brush",

              price: "24.89",
            },
            {
              img: "https://www.bigbasket.com/media/uploads/p/l/40243877_1-first-pet-dog-poop-scooper-large-ergonomic-handle-non-messy.jpg",
              title: "Pet Poop Picker",

              price: "18.90",
            },
          ].map((item, index) => (
            <div key={index} className="border-2 border-gray-300 rounded-xl shadow-lg p-6 hover:border-blue-500 transition-allborder-2 hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <img src={item.img} alt={item.title} className=" h-52 object-cover rounded-md mx-auto w-2xl " />
              <h3 className="mt-2 text-lg font-semibold text-center">{item.title}</h3>
              <p className="m-s text-gray-600 text-center">{item.author}</p>
              <p className="text-red-700 font-bold mt-2 text-center">${item.price}</p>
              <div className="flex justify-center">
                <button
                  className="bg-blue-700 text-white rounded-md px-4 py-2 mt-2 transition-colors hover:bg-blue-500"
                  onClick={() => addToCart(item.title, item.price)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Cart Section */}
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
          <p className="mt-4 text-xl font-semibold">Total: ${getTotalPrice()}</p>

          {/* Buy Now Button Component */}
          <BuyButton total={getTotalPrice()} />
        </div>
      </main>

      
    </div>
  );
};

export default Products;
