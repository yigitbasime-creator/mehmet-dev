# CLAUDE.md — AI Context File

This file helps Claude (or any AI assistant) pick up exactly where we left off.

## Who is the developer?

- Name: Mehmet (Antalya, Turkey)
- Level: Beginner → Intermediate fullstack developer
- Bootcamp: React.js + Node.js fullstack
- Goal: Land a remote fullstack developer role

## Project Status

**Current project:** `my-react-app` — a fullstack CRUD app with auth
**Frontend:** https://gilded-meringue-6f2a62.netlify.app
**Backend:** https://my-backend-cu5k.onrender.com

## What Has Been Built

### Backend (Node.js + Express + MongoDB)
- User model with bcrypt password hashing
- JWT-based auth: POST /auth/register, POST /auth/login
- Todo model (text, done, userId)
- CRUD routes: GET/POST /todos, PUT/DELETE /todos/:id
- Auth middleware that verifies Bearer token on protected routes

### Frontend (React + Vite + Tailwind)
- AuthContext — stores token in localStorage, provides login/logout
- Protected routing — redirect to /login if no token
- Navbar — active link highlighting, user name display, logout button
- Todos page — full CRUD with loading/error states, 401 auto-logout
- Home, Weather, Projects, About pages (palette applied to Home & Todos)

## What Is NOT Done Yet

- [ ] Weather, Projects, About pages — palette not applied yet
- [ ] Login / Register pages — palette not applied yet
- [ ] GitHub profile component (planned feature)
- [ ] No TypeScript
- [ ] No tests

## Design Palette (Light Coral & Lavender)

```
#fdf6f3  Background (warm white)
#f5ede8  Navbar background (soft peach)
#3d2a52  Primary text (deep plum)
#9b8ec4  Muted/secondary text (lavender)
#d4537e  Buttons & active links (coral rose)
#fbeaf0  Button text (blush white)
#fff8f5  Card/input background
#e8d5ce  Card/input border
```

**Rule:** Never use Tailwind color classes like `text-white` or `bg-gray-800`.
Always use `style={{color: "..."}}` with the palette above.

## Coding Patterns Established

### API calls
```jsx
const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`
};
```

### fetchTodos inside useEffect (correct pattern)
```jsx
useEffect(() => {
  if (!token) { navigate("/login"); return; }

  const fetchTodos = async () => {
    try {
      const response = await fetch(`${API}/todos`, { headers });
      if (response.status === 401) { logout(); navigate("/login"); return; }
      const data = await response.json();
      setTodos(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Could not connect to server!");
    } finally {
      setLoading(false);
    }
  };

  fetchTodos();
}, [token]);
```

### Delete pattern (always check response.ok)
```jsx
const response = await fetch(`${API}/todos/${id}`, { method: "DELETE", headers });
if (!response.ok) throw new Error("Delete failed");
```

## Environment Variables

```bash
# frontend .env
VITE_API_URL=https://my-backend-cu5k.onrender.com
```

## Next Project Idea

Health tourism + vacation platform for Antalya, Turkey.
Concept: Combine medical procedures (dental, hair, eye surgery, aesthetics)
with holiday packages — a booming market in Antalya.
To be discussed and scoped after finishing current project.
