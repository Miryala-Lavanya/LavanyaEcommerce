import React from 'react';
import { Outlet } from 'react-router-dom';

function Shop({ cart, addToCart, removeFromCart }) {
 
 
  return (
    <div>
   
      {/* Pass cart and addToCart to children */}
      <Outlet context={{ cart, addToCart , removeFromCart}} />
    </div>
  );
}

export default Shop;
