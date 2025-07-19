import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductList() {
  const { shopId } = useParams();
  const [products, setProducts] = useState([]);
  const [shop, setShop] = useState(null);

  useEffect(() => {
    fetch('/dummy.json')
      .then(res => res.json())
      .then(data => {
        setShop((data.shops || []).find(s => s.id === shopId));
        setProducts((data.products || []).filter(p => p.shopId === shopId));
      });
  }, [shopId]);

  return (
    <div className="mt-10 min-h-screen flex flex-col items-center bg-gray-50">
      {shop && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold">{shop.name}</h2>
          <div className="text-gray-600">{shop.address}</div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded shadow p-4">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded mb-2" />
            <div className="font-semibold">{product.name}</div>
            <div className="text-sm text-gray-600">{product.category} - {product.generation}</div>
            <div className="text-xs text-gray-500">{product.description}</div>
            <div className="font-bold mt-2">${product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList; 