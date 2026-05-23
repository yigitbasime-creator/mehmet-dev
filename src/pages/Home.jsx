import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-5xl font-bold mb-4" style={{color: "#776e81"}}>
        👋 Merhaba!
      </h1>
      <p className="text-gray-400 text-xl mb-8 max-w-md">
        Welcome to my React app. Built with React, Tailwind CSS and love from Antalya! 🌊
      </p>
      <div className="flex gap-4">
        <Link
          to="/weather"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-colors">
          Check Weather 🌤️
        </Link>
        <Link
          to="/about"
          className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-xl font-semibold transition-colors">
          About Me
        </Link>
      </div>
    </div>
  );
};

export default Home;