import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPaperPlane,
  faUser,
  faRobot,
  faMinus,
  faMessage
} from "@fortawesome/free-solid-svg-icons";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm RAZY Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Thank you for your message. Our admissions team will get back to you within 24 hours.",
        "I'd be happy to help you learn more about our programs. What specific area interests you?",
        "Great question! Let me connect you with the right department. Could you provide more details?",
        "We offer personalized consultations. Would you like to schedule a call with our advisors?",
        "Our scholarship programs have helped thousands of students. I'd recommend starting with our free assessment.",
        "Thank you for your interest in RAZY Academy. Let me provide you with more information about our courses."
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const botMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-8 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white w-14 h-14 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 group z-50"
        aria-label="Open chat"
        title="Chat with us"
      >
        <FontAwesomeIcon
          icon={faMessage}
          className="text-lg group-hover:scale-110 transition-transform duration-300"
        />
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-slate-800"></div>
        </div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 right-8 z-50">
      {/* Chat Window */}
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-80 h-96 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3">
              <FontAwesomeIcon icon={faRobot} className="text-sm" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">RAZY Assistant</h3>
              <p className="text-xs text-blue-100">Online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 hover:bg-white/20 rounded transition-colors duration-200 flex items-center justify-center"
              aria-label="Minimize chat"
            >
              <FontAwesomeIcon icon={faMinus} className="text-xs" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-6 h-6 hover:bg-white/20 rounded transition-colors duration-200 flex items-center justify-center"
              aria-label="Close chat"
            >
              <FontAwesomeIcon icon={faTimes} className="text-xs" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-slate-800 shadow-md"
                }`}
              >
                <div className="flex items-center mb-1">
                  <FontAwesomeIcon
                    icon={message.sender === "user" ? faUser : faRobot}
                    className={`text-xs mr-2 ${
                      message.sender === "user" ? "text-blue-100" : "text-blue-600"
                    }`}
                  />
                  <span className={`text-xs font-medium ${
                    message.sender === "user" ? "text-blue-100" : "text-blue-600"
                  }`}>
                    {message.sender === "user" ? "You" : "RAZY Assistant"}
                  </span>
                </div>
                <p>{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === "user" ? "text-blue-100" : "text-slate-500"
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-slate-200 bg-white">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-slate-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="w-8 h-8 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors duration-200"
              aria-label="Send message"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-xs" />
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            We typically respond within a few minutes during business hours.
          </p>
        </div>
      </div>
    </div>
  );
}
