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
      <header className="bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 text-white text-center py-8">
        {/* <h1>Products</h1> */}
        {/* <p>Discover your next spine-tingling adventure!</p> */}
      </header>

      <main className="p-8">
        <section className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-h-[80vh] overflow-y-auto p-4">
          {[
            {
              img: "https://cdn.penguin.co.uk/dam-assets/books/9780241972953/9780241972953-jacket-large.jpg",
              title: "A Call For Charlie Barnes",
              author: "Joshua Ferris",
              price: "9.99",
            },
            {
              img: "https://m.media-amazon.com/images/I/71JIuynbY5L._AC_UF1000,1000_QL80_.jpg",
              title: "The Time Of Her Life",
              author: "Tracy Bloom",
              price: "19.99",
            },
            {
              img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388183826i/389627._UX160_.jpg",
              title: "Diary Of A Wimpy Kid",
              author: "Jeff Kinney",
              price: "14.09",
            },
            {
              img: "https://rukminim2.flixcart.com/image/850/1000/k1mgu4w0/book/5/9/4/the-comedy-of-errors-original-imafh5vuhdqkfacb.jpeg?q=90&crop=false",
              title: "The Comedy Of Errors",
              author: "William Shakespeare",
              price: "24.99",
            },
            {
              img: "https://m.media-amazon.com/images/I/71fysklKnfL._UF1000,1000_QL80_.jpg",
              title: "I Have Never",
              author: "Camilla Isley",
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
              title: "Aloice and A Grump Next Door",
              author: "Jenny Proctor",
              price: "18.90",
            },
            {
              img: "https://img.readthistwice.com/unsafe/240x360/books/4ab5c9fa-b58f-4231-9f9d-0a913fa46658.jpg",
              title: "I Can't Make This Up",
              author: "Jennifer A.Nielsen",
              price: "25.99",
            },
            {
              img: "https://m.media-amazon.com/images/I/91cH3iahx2L._AC_UF1000,1000_QL80_.jpg",
              title: "The History Of Sketch Comedy",
              author: "Ashok Kumawat",
              price: "30.99",
            },
            {
              img: "https://www.write-right.in/wp-content/uploads/2022/09/the-unporposed-guy-book.jpg",
              title: "The Unproposed Guy",
              author: "R.F.Kuang",
              price: "12.99",
            },
            {
              img: "https://m.media-amazon.com/images/I/71nbq0xBFPL._AC_UF1000,1000_QL80_.jpg",
              title: "Being Funny",
              author: "Markus Zusak",
              price: "21.99",
            },
            {
              img: "https://www.write-right.in/wp-content/uploads/2022/09/mrs-funnybones.jpg",
              title: "Mrs Funny Gones",
              author: "Paulo Coelho",
              price: "17.99",
            },
            {
              img: "https://m.media-amazon.com/images/I/91X4TW3n2ZL._AC_UF1000,1000_QL80_.jpg",
              title: "Bobodenrik Comedy Comedy Comedy Drama",
              author: "Taylor Jenkins Reid",
              price: "14.99",
            },
            {
              img: "https://www.write-right.in/wp-content/uploads/2022/09/english-august.jpg",
              title: "English August",
              author: "Kelly Barnhill",
              price: "23.99",
            },
            {
              img: "https://s2.r29static.com/bin/entry/759/x,80/2196395/image.jpg",
              title: "Red White Royal Blue",
              author: "Durjoy datta",
              price: "28.99",
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
