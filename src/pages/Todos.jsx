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

  const fetchTodos = async () => {
    try {
      const response = await fetch(`${API}/todos`, { headers });
      if (response.status === 401) {
        logout();
        navigate("/login");
        return;
      }
      const data = await response.json();
      setTodos(Array.isArray(data) ? data : []);
    } catch (err) {
      setError("Could not connect to server!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    fetchTodos();
  }, []);

  const addTodo = async () => {
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
      await fetch(`${API}/todos/${id}`, { method: "DELETE", headers });
      setTodos(todos.filter(t => t._id !== id));
    } catch (err) {
      setError("Could not delete todo!");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        📝 Fullstack Todos
      </h2>

      <div className="flex gap-2 mb-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          placeholder="Add a task..."
          className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={addTodo}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition-colors">
          Add
        </button>
      </div>

      {error && <p className="text-red-400 text-center mb-4">{error}</p>}
      {loading && <p className="text-gray-400 text-center">⏳ Loading...</p>}

      <ul className="space-y-3">
        {todos.map(todo => (
          <li
            key={todo._id}
            className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3 border border-gray-700">
            <span
              onClick={() => toggleTodo(todo._id, todo.done)}
              className={`flex-1 cursor-pointer ${
                todo.done ? "line-through text-gray-500" : "text-white"
              }`}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo._id)}
              className="ml-4 text-red-400 hover:text-red-300 transition-colors">
              ❌
            </button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <p className="text-gray-400 text-center mt-6">
          ✅ {todos.filter(t => t.done).length} of {todos.length} completed
        </p>
      )}
    </div>
  );
};

export default Todos;