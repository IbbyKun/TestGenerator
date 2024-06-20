import React, { useState } from 'react';

const ChatPage = ({ selectedOption }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleMessageSubmit = () => {
    if (inputValue.trim() === '') return;

  const newMessages = [...messages, { text: inputValue, sender: 'me' }];

  const aiResponse = 'AI response'; 

  const updatedMessages = [...newMessages, { text: aiResponse, sender: 'ai' }];

  setMessages(updatedMessages);
  setInputValue('');
  };

  return (
    <div className="flex-1 ml-72 p-12">
      {selectedOption === 'Chat' && (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
          <div className="flex flex-col w-full max-w-screen-lg h-96 bg-purple-50 p-4 rounded-lg shadow-md overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`rounded-lg p-2 ${
                  message.sender === 'me'
                    ? 'bg-purple-700 text-white self-end'
                    : 'bg-white text-purple-700 self-start'
                }`}
                style={{
                  marginTop:
                    index > 0 && messages[index - 1].sender !== message.sender
                      ? '10px'
                      : '0',
                }}
              >
                {message.text}
              </div>
            ))}
            <div style={{ flex: '1' }}></div>
          </div>
          <div className="w-full max-w-screen-lg mt-4 flex items-center">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-purple-400"
              placeholder="Type your message..."
              onKeyDown={(e) => e.key === 'Enter' && handleMessageSubmit()}
            />
            <button
              className="ml-2 px-4 py-2 bg-purple-700 text-white rounded-md"
              onClick={handleMessageSubmit}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPage;
