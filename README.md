Here’s a complete and step-by-step README.md tailored to your project, including:

Project purpose

Technologies used

Setup steps (for both frontend & backend)

How to test

How to run

GitHub commands

#  Real-Time Chat Application

This is a **simple real-time chat application** built using **React** (frontend), **Node.js + Express** (backend), and **Socket.IO** (real-time messaging).

It allows users to:
- Join a chat using a username (no password required)
- Send messages in real-time
- View messages with clear sender info
- Logout and return to login screen

---

##  Technologies Used

###  Frontend:
- React.js
- CSS (custom styling)
- React Router (for routing between Login and Chat pages)

###  Backend:
- Node.js
- Express
- Socket.IO (WebSocket for real-time communication)

##  How to Run the Project Locally

### Step 1: Clone the Repository

```bash
git clone https://github.com/KarriDeepakSeshuReddy/LIA-PLUS-AI-ASSIGNMENT.git
cd real-time-chat-app

Step 2️⃣: Install Dependencies
# Backend
bash
cd backend
npm install
# Frontend
bash
cd ../frontend
npm install

Step 3️⃣: Start the Application
🔸 Start the Backend Server
bash
cd backend
node server.js
Server will run on: http://localhost:5001

🔸 Start the Frontend React App
Open another terminal:
bash
cd frontend
npm start
App will open in your browser at: http://localhost:3000


# Test the Chat
Open http://localhost:3000 in two browser tabs or two devices.

Enter different usernames and click "Join Chat".

Start chatting — messages appear in real-time with usernames.


# Logout
Click the Logout button at the top right of the chat page.

You’ll be redirected to the login screen.



