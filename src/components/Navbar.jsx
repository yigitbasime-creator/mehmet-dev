import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const links = [
    { path: "/", label: "Home" },
    { path: "/weather", label: "Weather" },
    { path: "/projects", label: "Projects" },
    { path: "/todos", label: "Todos" },
    { path: "/about", label: "About" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 px-6 py-4 flex gap-6 items-center">
      <span className="text-white font-bold text-lg mr-4">⚛️ Mehmet's App</span>
      {links.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`text-sm font-medium transition-colors ${
            pathname === path
              ? "text-blue-400 border-b-2 border-blue-400 pb-1"
              : "text-gray-300 hover:text-white"
          }`}>
          {label}
        </Link>
      ))}
      <div className="ml-auto flex items-center gap-4">
        {user && (
          <span className="text-gray-400 text-sm">
            👋 {user.name}
          </span>
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors">
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;