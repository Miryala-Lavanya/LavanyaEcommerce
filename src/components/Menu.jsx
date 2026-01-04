import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';
import { 
  FaHome, FaInfoCircle, FaThList, FaBlog, FaPhoneAlt, 
  FaShopify, FaFemale, FaMale, FaChild, FaStar,
  FaUser, FaSignInAlt, FaUserPlus, FaUserCircle, FaClipboardList, FaHeart,
  FaShoppingCart, 
 
} from "react-icons/fa";

import pic from '../assets/images/img2.png';
import './Menu.css';

function Menu({cart}) {
     

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img src={pic} alt="logo" width={50} height={50} className='rounded-circle' />
          </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              {/* Main links */}
<li className="nav-item">
  <Link className="nav-link active" to=""><FaHome className="me-1 icon-home"/> Home</Link>
</li>
<li className="nav-item">
  <Link className="nav-link active" to="/about"><FaInfoCircle className="me-1 icon-about"/> About Us</Link>
</li>
<li className="nav-item">
  <Link className="nav-link active" to="/collections"><FaThList className="me-1 icon-collections"/> Collections</Link>
</li>
<li className="nav-item">
  <Link className="nav-link active" to="/blogs"><FaBlog className="me-1 icon-blog"/> Blog/Stories</Link>
</li>
<li className="nav-item">
  <Link className="nav-link active" to="/contact"><FaPhoneAlt className="me-1 icon-contact"/> Contact</Link>
</li>

{/* Shop Dropdown */}
<li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="/shop" role="button" data-bs-toggle="dropdown">
    <FaShopify className="me-1 icon-shop"/> Shop
  </Link>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/shop/women"><FaFemale className="me-1 icon-women"/> Women</Link></li>
    <li><Link className="dropdown-item" to="/shop/men"><FaMale className="me-1 icon-men"/> Men</Link></li>
    <li><Link className="dropdown-item" to="/shop/kids"><FaChild className="me-1 icon-kids"/> Kids</Link></li>
    <li><Link className="dropdown-item" to="/shop/homeaccessories"><FaHome className="me-1 icon-homeaccess"/> Home Accessories</Link></li>
    <li><Link className="dropdown-item" to="/shop/newarrivals"><FaStar className="me-1 icon-new"/> New Arrivals</Link></li>
    <li><hr className="dropdown-divider"/></li>
    <li><Link className="dropdown-item" to="/shop/saleoffers"><FaStar className="me-1 icon-sale"/> Sale/Offers</Link></li>
  </ul>
</li>

{/* Account Dropdown */}
<li className="nav-item dropdown">
  <Link className="nav-link dropdown-toggle" to="/account" role="button" data-bs-toggle="dropdown">
    <FaUser className="me-1 icon-account"/> Account
  </Link>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="/account/signin"><FaSignInAlt className="me-1 icon-signin"/> Signin</Link></li>
    <li><Link className="dropdown-item" to="/account/signup"><FaUserPlus className="me-1 icon-signup"/> Signup</Link></li>
    <li><Link className="dropdown-item" to="/account/profile"><FaUserCircle className="me-1 icon-profile"/> Profile</Link></li>
    <li><Link className="dropdown-item" to="/account/orders"><FaClipboardList className="me-1 icon-orders"/> Orders</Link></li>
    <li><Link className="dropdown-item" to="/account/wishlist"><FaHeart className="me-1 icon-wishlist"/> Wishlist</Link></li>
  </ul>
</li>

{/* Cart */}
<li className="nav-item" style={{ position: 'relative' }}>
  <Link className="nav-link d-flex align-items-center" to="/shop/cart" style={{ position: 'relative' }}>
    <FaShoppingCart className="me-1 icon-cart" />
    <span style={{ marginLeft: '5px' }}>Cart</span>

    {cart.length > 0 && (
      <span
        style={{
          position: 'absolute',
          top: '5px',       // adjust vertical position
          right: '0px',      // adjust horizontal position
          transform: 'translate(50%, -50%)', // better centering over icon
          background: 'purple',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '12px',
          fontWeight: 'bold',
           pointerEvents: 'none',// so cart doesnot blocks 
        }}
      >
        {cart.length}
      </span>
    )}
  </Link>
</li>



       <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
</div>
</div>
</nav>
      {/* Nested Routes render here */}
      <Outlet />
    </div>
  );
}

export default Menu;
