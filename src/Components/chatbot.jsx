// import React, { useState, useRef } from "react";

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef(null);
//   const API_URL =
//     "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";
//   const API_KEY =
//     "AIzaSyDevmJ3xpEgLeN4N-CguP1eZ15wJefaQUU"; // Use environment variables in production

//   // Removed auto-scroll useEffect so that sending a message doesn't automatically scroll

//   const sendMessage = async (e) => {
//     e?.preventDefault();
//     const trimmedInput = input.trim();
//     if (!trimmedInput || isLoading) return;

//     // Add user message with a timestamp
//     const userMessage = { text: trimmedInput, sender: "user", timestamp: new Date() };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");
//     setIsLoading(true);

//     try {
//       const response = await fetch(`${API_URL}?key=${API_KEY}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ prompt: { text: trimmedInput } }),
//       });

//       const data = await response.json();
//       const botMessage = {
//         text:
//           data.candidates?.[0]?.output ||
//           "I'm having trouble understanding. Could you rephrase that?",
//         sender: "bot",
//         timestamp: new Date(),
//       };

//       setMessages((prev) => [...prev, botMessage]);
//     } catch (error) {
//       console.error("Error fetching response:", error);
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Sorry, I'm experiencing technical difficulties. Please try again later.",
//           sender: "bot",
//           timestamp: new Date(),
//         },
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       sendMessage();
//     }
//   };

//   return (
//     <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
//       {/* Chat Header */}
//       <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
//         <div className="flex items-center space-x-4">
//           <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md">
//             <span className="text-blue-600 text-3xl">🤖</span>
//           </div>
//           <div>
//             <h1 className="text-white text-2xl font-bold">AI Chatbot</h1>
//             <p className="text-white text-sm font-semibold">
//               Your intelligent assistant
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Chat Messages */}
//       <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
//           >
//             <div
//               className={`max-w-[75%] rounded-2xl p-4 relative ${
//                 msg.sender === "user"
//                   ? "bg-blue-600 text-white rounded-br-none"
//                   : "bg-gray-700 shadow-md rounded-bl-none text-white"
//               }`}
//             >
//               <p className="text-base leading-relaxed font-semibold">{msg.text}</p>
//               <span className="text-xs block mt-1 text-white">
//                 {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//               </span>
//               {/* Message triangle */} 
//               <div
//                 className={`absolute -bottom-1 ${
//                   msg.sender === "user" ? "right-0" : "left-0"
//                 } w-3 h-3 transform rotate-45 ${
//                   msg.sender === "user" ? "bg-blue-600" : "bg-white-700"
//                 }`}
//               />
//             </div>
//           </div>
//         ))}
//         {isLoading && (
//           <div className="flex justify-start">
//             <div className="max-w-[75%] bg-gray-700 shadow-md rounded-2xl p-4 rounded-bl-none text-white">
//               <div className="flex space-x-2 items-center">
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
//                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
//               </div>
//             </div>
//           </div>
//         )}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input Area */}
//       <form onSubmit={sendMessage} className="border-t p-4 bg-white flex items-center">
//         <div className="relative flex-1">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyPress={handleKeyPress}
//             placeholder="Type your message..."
//             className="w-full p-4 pr-16 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-gray-900"
//             disabled={isLoading}
//           />
//         </div>
//         <button
//           type="submit"
//           disabled={isLoading}
//           className="ml-3 bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 disabled:bg-gray-400 transition-colors shadow-md flex items-center justify-center"
//         >
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
//             />
//           </svg>
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Chatbot;



import React, { useState, useRef } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const API_URL =
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";
  const API_KEY =
    "AIzaSyDevmJ3xpEgLeN4N-CguP1eZ15wJefaQUU"; // Use environment variables in production

  const sendMessage = async (e) => {
    e?.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    // Add user message with a timestamp
    const userMessage = { text: trimmedInput, sender: "user", timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: { text: trimmedInput } }),
      });

      const data = await response.json();
      const botMessage = {
        text:
          data.candidates?.[0]?.output ||
          "I'm having trouble understanding. Could you rephrase that?",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Sorry, I'm experiencing technical difficulties. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-teal-400 to-emerald-500 p-6"> {/* Lighter Gradient */}
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-teal-600 text-3xl">🤖</span> {/* Adjusted color for icon */}
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold">AI Chatbot</h1>
            <p className="text-white text-sm font-semibold">
              Your intelligent assistant
            </p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
          >
            <div
              className={`max-w-[75%] rounded-2xl p-4 relative ${msg.sender === "user" ? "bg-teal-500 text-white rounded-br-none" : "bg-gray-700 shadow-md rounded-bl-none text-white"}`} 
            >
              <p className="chat leading-relaxed font-semibold ">{msg.text}</p>
              <span className="text-xs block mt-1 text-white">
                {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
              {/* Message triangle */}
              <div
                className={`absolute -bottom-1 ${msg.sender === "user" ? "right-0" : "left-0"} w-3 h-3 transform rotate-45 ${msg.sender === "user" ? "bg-teal-500" : "bg-gray-700"}`} 
              />
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[75%] bg-gray-700 shadow-md rounded-2xl p-4 rounded-bl-none text-white">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={sendMessage} className="border-t p-4 bg-white flex items-center">
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="w-full p-4 pr-16 rounded-xl border-2 border-gray-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all text-gray-900"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="ml-3 bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 disabled:bg-gray-400 transition-colors shadow-md flex items-center justify-center"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
