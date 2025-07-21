import React, { useState } from 'react';

const ChatWindow: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <div className="border rounded p-4 bg-white max-w-md mx-auto mt-4">
      <div className="h-40 overflow-y-auto mb-2 border-b pb-2">
        {messages.map((msg, i) => (
          <div key={i} className="mb-1 text-gray-800">{msg}</div>
        ))}
      </div>
      <div className="flex">
        <input
          className="border rounded px-2 py-1 flex-1 mr-2"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? sendMessage() : undefined}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-600 text-white rounded px-4 py-1"
          onClick={sendMessage}
        >Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
