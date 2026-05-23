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
    <nav style={{background: "#dfd3cc", borderBottom: "0.5px solid #8a817e"}} className="px-6 py-4 flex gap-6 items-center">
      <span className="text-white font-bold text-lg mr-4">⚛️ Mehmet's App</span>
      {links.map(({ path, label }) => (

      <Link
        to={path}
        key={path}
        className={pathname === path ? "border-b-2 pb-1" : "hover:opacity-80"}
        style={{
          color: pathname === path ? "#d4537e" : "#9b8ec4",
          borderColor: pathname === path ? "#d4537e" : "transparent"
        }}
      >
        {label}
      </Link>

      ))}

      <div className="ml-auto flex items-center gap-4">
        {user && (
          <span className="text-sm" style={{color: "#3d2a52"}}>
            {user.name}
          </span>
        )}
        {user ? (
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors" style={{background: "#d4537e", color: "#fbeaf0"}}>
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