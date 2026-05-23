import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API = import.meta.env.VITE_API_URL;

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };

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


  const addTodo = async () => {           // ✅ BUG 2 FIXED: was },' [token]; should be };
    if (!input.trim()) return;
    try {
      const response = await fetch(`${API}/todos`, {
        method: "POST",
        headers,
        body: JSON.stringify({ text: input })
      });
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
      setInput("");
    } catch (err) {
      setError("Could not add todo!");
    }
  };

  const toggleTodo = async (id, done) => {
    try {
      const response = await fetch(`${API}/todos/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ done: !done })
      });
      const updated = await response.json();
      setTodos(todos.map(t => t._id === id ? updated : t));
    } catch (err) {
      setError("Could not update todo!");
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${API}/todos/${id}`, { method: "DELETE", headers });
      if (!response.ok) throw new Error("Delete failed");
      setTodos(todos.filter(t => t._id !== id));
    } catch (err) {
      setError("Could not delete todo!");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6" style={{color: "#3d2a52"}}>
        📝 Fullstack Todos
      </h2>

      <div className="flex gap-2 mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a task..."
          className="flex-1 px-4 py-3 rounded-xl border focus:outline-none"
          style={{ background: "#fff8f5", borderColor: "#e8d5ce", color: "#3d2a52" }}
        />
        <button
          onClick={addTodo}
          className="px-6 py-3 rounded-xl font-semibold"
          style={{ background: "#d4537e", color: "#fbeaf0" }}
        >
          Add
        </button>
      </div>

      {error && <p className="text-center mb-4" style={{color: "#d4537e"}}>{error}</p>}
      {loading && <p className="text-center" style={{color: "#9b8ec4"}}>⏳ Loading...</p>}

      <ul className="space-y-3">
        {todos.map(todo => (
          <li key={todo._id}
            className="flex items-center justify-between rounded-xl px-4 py-3 border"
            style={{ background: "#fff8f5", borderColor: "#e8d5ce" }}>
            <span
              onClick={() => toggleTodo(todo._id, todo.done)}
              className="flex-1 cursor-pointer"
              style={{ color: todo.done ? "#c4b0d0" : "#3d2a52",   // ✅ BUG 3 FIXED: was text-white
                       textDecoration: todo.done ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo._id)}
              className="ml-4 transition-colors">
              ❌
            </button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <p className="text-center mt-6" style={{color: "#9b8ec4"}}>
          ✅ {todos.filter(t => t.done).length} of {todos.length} completed
        </p>
      )}
    </div>
  );
};

export default Todos;