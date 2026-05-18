const About = () => {
  const skills = [
    "JavaScript ES6+",
    "React.js",
    "Tailwind CSS",
    "REST APIs",
    "localStorage",
    "Git & GitHub",
  ];

  return (
    <div className="max-w-md mx-auto px-4 py-8 text-center">
      <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-4xl mx-auto mb-4">
        👨‍💻
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">Mehmet</h2>
      <p className="text-blue-400 mb-4">Fullstack Developer in training</p>
      <p className="text-gray-400 mb-8">
        Based in Antalya, Turkey. Learning React and Node.js to build amazing web apps! 🚀
      </p>
      <h3 className="text-white font-semibold mb-4">Skills</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;