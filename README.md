# Progress Tracker

A full-stack web app to log daily coding sessions and track your streak of consecutive days.

## Features

- Register and login with JWT authentication
- Log coding sessions with topic and notes
- View all past sessions on the dashboard
- 🔥 Streak counter — tracks consecutive days you logged a session

## Tech Stack

**Backend:** Node.js, Express, MongoDB Atlas, Mongoose, JWT, bcrypt  
**Frontend:** HTML, CSS, Vanilla JavaScript

## Folder Structure

```
progress-tracker/
├── backend/
│   ├── config/        # MongoDB connection
│   ├── controllers/   # Auth and session logic
│   ├── middleware/    # JWT auth middleware
│   ├── models/        # User and Session schemas
│   ├── routes/        # Auth and session routes
│   ├── server.js      # Entry point
│   └── .env           # Environment variables (not committed)
└── frontend/
    ├── index.html     # Register / Login page
    ├── dashboard.html # Session logging and history
    ├── auth.js        # Auth logic
    ├── dashboard.js   # Session and streak logic
    └── style.css      # Styles
```

## API Routes

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | /api/auth/register | No | Register a new user |
| POST | /api/auth/login | No | Login and get token |
| POST | /api/session/Create | Yes | Log a new session |
| GET | /api/session/all | Yes | Get all sessions |

## Environment Variables

Create a `.env` file in the `backend/` folder:

```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
```

## Running Locally

```bash
cd backend
npm install
npm start
```

Then open `frontend/index.html` in your browser.

## Deployment

- **Backend:** Deployed on [Render](https://progress-tracker-706k.onrender.com)
- **Frontend:** Deployed on [Vercel](https://render.com) as a static site