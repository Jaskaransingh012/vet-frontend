import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";
  const API_KEY = "AIzaSyDevmJ3xpEgLeN4N-CguP1eZ15wJefaQUU"; // Store the API key securely

  const sendMessage = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: { text: input },
        }),
      });

      const data = await response.json();
      const botMessage = data.candidates?.[0]?.output || "Sorry, I couldn't understand that.";

      setMessages([...newMessages, { text: botMessage, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { text: "Error connecting to AI.", sender: "bot" }]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4">
      <div className="h-80 overflow-y-auto border-b p-2">
        {messages.map((msg, index) => (
          <div key={index} className={`p-2 my-1 rounded ${msg.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-200"}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Ask something..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
