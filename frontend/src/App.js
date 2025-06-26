// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Chat from './Chat';
import './App.css';

function Login({ setUsername }) {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleJoin = () => {
    if (input.trim()) {
      setUsername(input);
      navigate('/chat');
    }
  };

  return (

    <div className="login-container">
      <h2 className="login-title">Login to Chat</h2>
      <div className="login-box">
        <input
          type="text"
          placeholder="Enter your username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleJoin}>Join Chat</button>
      </div>
    </div>
  );
}

function App() {
  const [username, setUsername] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Login setUsername={setUsername} />}
        />
        <Route
          path="/chat"
          element={
            username ? (
              <Chat username={username} setUsername={setUsername} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
