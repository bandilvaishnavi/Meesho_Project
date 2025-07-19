import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../components/Layout/Header';
import LocationSelect from './LocationSelect';
import ShopList from './ShopList';
import ProductList from './ProductList';

function FashionFinder() {
  return (
    <div>
      <Header activeHeading={6} />
      <Routes>
        <Route path="/" element={<LocationSelect />} />
        <Route path="/shops/:locationId" element={<ShopList />} />
        <Route path="/products/:shopId" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default FashionFinder;
