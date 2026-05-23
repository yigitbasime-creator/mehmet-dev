import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Todos from "./pages/Todos";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen" style={{background: "#fdf6f3", color: "#3d2a52"}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;