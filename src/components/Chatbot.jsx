import React, { useState } from "react";
import { Bot, Send, Volume2 } from "lucide-react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const sendMessage = async (msg) => {
    setMessages((prev) => [...prev, { text: msg, isUser: true }]);
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyB9gsMhcSBUqOY3C46EdvKVb6-Rpx7Gpbs",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: msg }] }],
          }),
        }
      );

      const data = await response.json();
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
      
      setMessages((prev) => [...prev, { text: reply, isUser: false }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Error occurred. Try again!", isUser: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      sendMessage(message);
      setMessage("");
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button
        className="fixed bottom-4 right-4 bg-purple-600 p-3 rounded-full shadow-lg hover:bg-purple-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Bot className="w-6 h-6 text-white" />
      </button>

      {isOpen && (
        <div className="fixed bottom-16 right-4 w-80 bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="flex items-center p-4 border-b border-gray-800">
            <Bot className="w-6 h-6 mr-2" />
            <h1 className="text-lg font-bold">AI Medical Assistant</h1>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-80">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                <div className={`p-3 rounded-lg ${msg.isUser ? "bg-purple-600" : "bg-gray-700"}`}>
                  <p className="text-sm">{msg.text}</p>
                  {!msg.isUser && (
                    <button onClick={() => speak(msg.text)} className="ml-2">
                      <Volume2 className="w-4 h-4 text-white" />
                    </button>
                  )}
                </div>
              </div>
            ))}
            {isLoading && <p className="text-purple-400">Typing...</p>}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800 flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white focus:outline-none"
            />
            <button type="submit" className="p-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg">
              <Send className="w-5 h-5 text-white" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
