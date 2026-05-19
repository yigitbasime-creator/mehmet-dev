const projects = [
  { id: 1, title: "Tip Calculator", description: "Calculate tips and split bills between friends.", tech: ["HTML", "CSS", "JavaScript"], emoji: "🧮" },
  { id: 2, title: "Grade Tracker", description: "Track student grades with pass/fail filtering and class average.", tech: ["HTML", "CSS", "JavaScript", "ES6+"], emoji: "📊" },
  { id: 3, title: "Todo App", description: "Full featured todo app with toggle, delete and clear completed.", tech: ["HTML", "CSS", "JavaScript", "DOM"], emoji: "✅" },
  { id: 4, title: "Weather App", description: "Live weather data for any city with °C/°F toggle.", tech: ["HTML", "CSS", "JavaScript", "API"], emoji: "🌤️" },
  { id: 5, title: "Persistent Todo", description: "Todo app that remembers your tasks after browser restart.", tech: ["JavaScript", "localStorage", "ES6+"], emoji: "💾" },
  { id: 6, title: "React Weather App", description: "Weather app rebuilt in React with components, hooks and Tailwind.", tech: ["React", "Tailwind CSS", "API", "useState", "useEffect"], emoji: "⚛️" },
];

const techColors = {
  "React": "bg-blue-900 text-blue-300",
  "JavaScript": "bg-yellow-900 text-yellow-300",
  "HTML": "bg-orange-900 text-orange-300",
  "CSS": "bg-purple-900 text-purple-300",
  "Tailwind CSS": "bg-teal-900 text-teal-300",
  "API": "bg-green-900 text-green-300",
  "ES6+": "bg-pink-900 text-pink-300",
  "DOM": "bg-red-900 text-red-300",
  "localStorage": "bg-indigo-900 text-indigo-300",
  "useState": "bg-blue-900 text-blue-300",
  "useEffect": "bg-blue-900 text-blue-300",
};

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white text-center mb-2">
        🔨 My Projects
      </h2>
      <p className="text-gray-400 text-center mb-8">
        Built during my 10-day fullstack bootcamp
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(({ id, title, description, tech, emoji }) => (
          <div
            key={id}
            className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
            <div className="text-4xl mb-3">{emoji}</div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tech.map(t => (
                <span
                  key={t}
                  className={`text-xs px-2 py-1 rounded-full ${techColors[t] || "bg-gray-700 text-gray-300"}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;