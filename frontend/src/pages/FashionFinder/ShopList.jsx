import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ShopList() {
  const { locationId } = useParams();
  const [shops, setShops] = useState([]);
  const [locationName, setLocationName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/dummy.json')
      .then(res => res.json())
      .then(data => {
        setShops((data.shops || []).filter(shop => shop.location === locationId));
        const loc = (data.locations || []).find(l => l.id === locationId);
        setLocationName(loc ? loc.name : '');
      });
  }, [locationId]);

  const handleShopClick = (shopId) => {
    navigate(`/fashion-finder/products/${shopId}`);
  };

  return (
    <div className="mt-10 min-h-screen flex flex-col items-center bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Shops in {locationName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {shops.map(shop => (
          <div
            key={shop.id}
            className="bg-white rounded shadow p-4 cursor-pointer hover:bg-blue-100 transition"
            onClick={() => handleShopClick(shop.id)}
          >
            <img src={shop.image} alt={shop.name} className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold">{shop.name}</div>
            <div className="text-sm text-gray-600">{shop.category}</div>
            <div className="text-xs text-gray-500">{shop.address}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopList; 