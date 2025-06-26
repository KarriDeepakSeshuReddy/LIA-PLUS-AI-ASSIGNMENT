const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

let chatHistory = [];
const users = new Set(); // 🧠 Track unique usernames

io.on('connection', (socket) => {
  console.log('✅ A user connected');

  socket.on('newUser', (username) => {
    socket.username = username;        // Store username in socket
    users.add(username);               // Add to user set
    io.emit('userList', Array.from(users)); // Send updated list
  });

  socket.on('message', (msg) => {
    chatHistory.push(msg);
    io.emit('message', msg);
  });

  socket.on('file', (fileData) => {
    chatHistory.push(fileData);
    io.emit('file', fileData);
  });

  socket.on('disconnect', () => {
    console.log('❌ A user disconnected');
    if (socket.username) {
      users.delete(socket.username);         // Remove user
      io.emit('userList', Array.from(users)); // Broadcast update
    }
  });
});

server.listen(5001, () => {
  console.log('🚀 Server running on http://localhost:5001');
});
