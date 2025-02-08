import React, { useState } from "react";

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
      <main className="p-8 overflow-y-auto h-screen">
        <section className="grid gap-12 grid-cols-3 max-h-[60vh] overflow-y-auto p-4">
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
          ].map((book, index) => (
            <div key={index} className="bg-white border-2 border-black rounded-lg shadow-md p-4 text-center hover:scale-110 hover:border-blue-700 hover:shadow-lg hover:bg-gray-300 transition-transform">
              <img src={book.img} alt={book.title} className="w-24 h-36 object-cover rounded-md" />
              <h3 className="mt-2 text-lg font-semibold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-red-700 font-bold mt-2">${book.price}</p>
              <button
                className="bg-blue-700 text-white rounded-md px-4 py-2 mt-2 transition-colors hover:bg-blue-500"
                onClick={() => addToCart(book.title, book.price)}
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
