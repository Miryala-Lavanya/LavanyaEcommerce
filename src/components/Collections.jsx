import React from 'react';
import {Link} from 'react-router-dom'
import './Collections.css'; // make sure this file exists

function Collections() {
  return (
    <div className="collections-container">
      <h4 className="collections-title">Collections</h4>
      <ul className="collections-list">
         <li><Link to="/shop/women">Women's Wear</Link></li>
        <li><Link to="/shop/men">Men's Wear</Link></li>
        <li><Link to="/shop/kids">Kids' Clothing</Link></li>
         <li><Link to="/shop/homeaccessories">Accessories</Link></li>
      </ul>
    </div>
  );
}

export default Collections;
