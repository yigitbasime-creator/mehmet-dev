import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/weather", label: "Weather" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
  ];

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
    </nav>
  );
};

export default Navbar;