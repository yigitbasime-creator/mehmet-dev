import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ErrorMessage from "../components/ErrorMessage";

const API_KEY = import.meta.env.VITE_API_KEY;

const Weather = () => {
  const [city, setCity] = useState("Antalya");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);

  const fetchWeather = async (searchCity) => {
    try {
      setLoading(true);
      setError("");
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod !== 200) {
        setError(`City not found: "${searchCity}"`);
        setWeather(null);
        return;
      }
      setWeather(data);
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("Antalya");
  }, []);

  const toggleUnit = () => setIsCelsius(!isCelsius);

  const displayTemp = weather
    ? isCelsius
      ? weather.main.temp
      : (weather.main.temp * 9/5) + 32
    : null;

  const unit = isCelsius ? "°C" : "°F";

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white text-center mb-6">
        🌤️ Weather
      </h2>
      <SearchBar
        city={city}
        onCityChange={setCity}
        onSearch={() => fetchWeather(city)}
      />
      {loading && <p className="text-center text-gray-400">⏳ Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {weather && !loading && (
        <WeatherCard
          weather={weather}
          displayTemp={displayTemp}
          unit={unit}
          isCelsius={isCelsius}
          onToggle={toggleUnit}
        />
      )}
    </div>
  );
};

export default Weather;