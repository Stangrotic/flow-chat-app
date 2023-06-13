// src/Chat.js

import React, { useState } from 'react';
import { MessageBox } from 'react-chat-elements';
import axios from 'axios';

function Chat() {
  const [messages, setMessages] = useState([]);

  const handleKeyDown = async (event) => {
    if (event.key === 'Enter') {
      const userInput = event.target.value;
      setMessages([...messages, { text: userInput, position: 'right' }]);
      event.target.value = '';

      const response = await axios.get('http://localhost:8000/chat/', {
        params: {
          input: userInput
        }
      });

      setMessages([...messages, { text: response.data.response, position: 'left' }]);
    }
  };

  return (
    <div>
      {messages.map((message, index) => (
        <MessageBox
          key={index}
          position={message.position}
          text={message.text}
        />
      ))}
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
}

export default Chat;

