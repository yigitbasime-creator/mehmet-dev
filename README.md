# Mehmet's Fullstack React App

A fullstack web application built during a React.js + Node.js bootcamp.
Live at: https://gilded-meringue-6f2a62.netlify.app

## Tech Stack

**Frontend**
- React 18 + Vite
- React Router v6
- Tailwind CSS + inline styles (light coral & lavender palette)
- Context API for auth state

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Live at: https://my-backend-cu5k.onrender.com

## Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Landing page with navigation cards |
| Login | `/login` | JWT login form |
| Register | `/register` | New user registration |
| Todos | `/todos` | Full CRUD todo list (protected) |
| Weather | `/weather` | External API weather lookup |
| Projects | `/projects` | Project showcase |
| About | `/about` | Developer info |

## Features Built

- [x] JWT Authentication (login, register, logout)
- [x] Protected routes (redirect to /login if no token)
- [x] Full CRUD Todos connected to MongoDB
- [x] 401 auto-logout handling
- [x] Loading & error states on all async calls
- [x] Light coral & lavender design palette
- [ ] GitHub profile component (in progress)

## Color Palette

```
Background:     #fdf6f3  (warm white)
Navbar bg:      #f5ede8  (soft peach)
Primary text:   #3d2a52  (deep plum)
Muted text:     #9b8ec4  (lavender)
Accent/buttons: #d4537e  (coral rose)
Button text:    #fbeaf0  (blush white)
Card bg:        #fff8f5  (soft white)
Card border:    #e8d5ce  (warm grey)
```

## Project Structure

```
my-react-app/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Todos.jsx
│   │   ├── Weather.jsx
│   │   ├── Projects.jsx
│   │   └── About.jsx
│   ├── App.jsx
│   └── main.jsx
├── .env               # VITE_API_URL=https://my-backend-cu5k.onrender.com
└── package.json
```

## Environment Variables

```bash
# .env (frontend)
VITE_API_URL=https://my-backend-cu5k.onrender.com
```

## Key Lessons Learned

- Tailwind color classes (`text-white`, `bg-gray-800`) must be replaced with `style={{}}` when applying a custom palette
- `useEffect` dependencies array must include all values used inside the effect
- `fetchTodos` should be defined **inside** `useEffect` to avoid ESLint cascading render warnings
- Always check `response.ok` before updating state on DELETE/PUT calls
- `npm run dev` only catches syntax errors — ESLint catches code quality issues

## Deployment

- Frontend: Netlify (auto-deploy from GitHub)
- Backend: Render.com
