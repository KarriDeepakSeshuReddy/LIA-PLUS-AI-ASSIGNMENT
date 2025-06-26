import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import './Chat.css';

const socket = io('http://localhost:5001');

function Chat({ username, setUsername }) {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on('message', (msg) => {
      setChat((prev) => [...prev, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      const msg = { username, text: message };
      socket.emit('message', msg);
      setMessage('');
    }
  };

  const handleLogout = () => {
    setUsername('');
    navigate('/');
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-title">💬 ChatApp</div>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <div className="chat-wrapper">
        <div className="chat-box">
          <div className="chat-header">
            <h2>Welcome, {username}</h2>
          </div>

          <div className="chat-messages">
            {chat.map((msg, index) => {
              const isMine = msg.username === username;
              return (
                <div
                  key={index}
                  className={`chat-bubble ${isMine ? 'mine' : 'theirs'}`}
                >
                  <p>
                    <span className="sender-name">{msg.username}:</span> {msg.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
