const SearchBar = ({ city, onCityChange, onSearch }) => {
  return (
    <div className="flex gap-2 mb-6">
      <input
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        placeholder="Enter city..."
        className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={onSearch}
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold transition-colors">
        Search
      </button>
    </div>
  );
};

export default SearchBar;