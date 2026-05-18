const WeatherCard = ({ weather, displayTemp, unit, onToggle, isCelsius }) => {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 text-center shadow-xl">
      <h2 className="text-2xl font-semibold mb-2">
        📍 {weather.name}
      </h2>
      <p className="text-7xl font-bold text-blue-400 my-4">
        {displayTemp?.toFixed(1)}{unit}
      </p>
      <p className="text-gray-300 capitalize text-lg mb-4">
        {weather.weather[0].description}
      </p>
      <div className="flex justify-around text-gray-300 mb-6">
        <p>💧 {weather.main.humidity}%</p>
        <p>💨 {weather.wind.speed} m/s</p>
        <p>🌡️ Feels {isCelsius 
            ? weather.main.feels_like?.toFixed(1)
            : ((weather.main.feels_like * 9/5) + 32).toFixed(1)
            }{unit}</p>
      </div>
      <button
        onClick={onToggle}
        className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition-colors">
        Switch to {isCelsius ? "°F" : "°C"}
      </button>
    </div>
  );
};

export default WeatherCard;