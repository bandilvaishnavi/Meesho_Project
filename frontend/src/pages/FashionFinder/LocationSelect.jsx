import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LocationSelect() {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/dummy.json')
      .then(res => res.json())
      .then(data => setLocations(data.locations || []));
  }, []);

  const handleSelect = (locationId) => {
    navigate(`/fashion-finder/shops/${locationId}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Select Location</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {locations.map(loc => (
          <button
            key={loc.id}
            onClick={() => handleSelect(loc.id)}
            className="px-6 py-4 bg-white rounded shadow hover:bg-blue-100 transition"
          >
            {loc.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LocationSelect; 