export default function Filter({ filters, setFilters }) {
    return (
      <div className="p-4 bg-white rounded-md shadow-md">
        <div className="mb-4">
          <label className="block mb-2">Bed Rooms</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setFilters((prev) => ({ ...prev, bedRooms: num }))}
                className={`px-4 py-2 rounded-md ${filters.bedRooms === num ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Bath Rooms</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setFilters((prev) => ({ ...prev, bathRooms: num }))}
                className={`px-4 py-2 rounded-md ${filters.bathRooms === num ? 'bg-yellow-600 text-white' : 'bg-gray-200'}`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Price Range (KShs)</label>
          <input
            type="range"
            min="0"
            max="40000"
            value={filters.priceRange}
            onChange={(e) => setFilters((prev) => ({ ...prev, priceRange: e.target.value }))}
            className="w-full"
          />
          <div>{filters.priceRange}</div>
        </div>
        <button className="w-full px-4 py-2 bg-yellow-600 text-white rounded-md">Apply Filter</button>
      </div>
    );
  }
  