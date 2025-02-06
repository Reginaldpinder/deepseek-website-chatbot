import React, { useState, useEffect } from 'react';
import { Chat } from '@deepseek/ai-chat';

const ChatBot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    const response = await Chat.sendMessage({
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: message }]
    });
    setMessages(prev => [...prev, { role: 'user', content: message }, response]);
  };

  return (
    <div className={`fixed bottom-4 right-4 ${isChatOpen ? 'block' : 'hidden'}`}>
      <div className="bg-white rounded-lg shadow-lg p-4 w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">TechBridge Assistant</h2>
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        <div className="overflow-y-auto h-48 mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
              <div className={`inline-block p-2 rounded ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
                {msg.content}
              </div>
            </div>
          ))}
        </div>
        <input
          type="text"
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
    </div>
  );
};

export default ChatBot;
