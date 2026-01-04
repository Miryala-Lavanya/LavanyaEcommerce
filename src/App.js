import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import Home from "./components/Home";
import About from "./components/About";
import Collections from "./components/Collections";
import Blogs from "./components/Blogs";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Account from "./components/Account";
import Cart from "./components/Cart";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagenotFound from "./components/PagenotFound";
import Women from "./components/Women";
import Men from "./components/Men";
import Kids from "./components/Kids";
import HomeAccessories from "./components/HomeAccessories";
import NewArrivals from "./components/NewArrivals";
import SaleOffers from "./components/SaleOffers";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import Checkout from "./components/Checkout";
import Wishlist from "./components/Wishlist";
import Womendynamic from "./DynamicRouting/Womendynamic";
import Mendynamic from "./DynamicRouting/Mendynamic";
import Kidsdynamic from "./DynamicRouting/Kidsdynamic";

function App() {
  // Cart state
  const [cart, setCart] = useState([]);

  // Add to cart
  const addToCart = (item) => setCart([...cart, item]);

  // Remove from cart
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  // Clear cart (used in Checkout)
  const clearCart = () => setCart([]);

  return (
    <BrowserRouter>
      <Header />
      <Menu cart={cart} /> {/* Menu gets cart for badge */}
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="collections" element={<Collections />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />

        {/* Shop Routes */}
        <Route
          path="shop"
          element={
            <Shop cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
          }
        >
          <Route path="women" element={<Women />} />
          <Route path="men" element={<Men />} />
          <Route path="kids" element={<Kids />} />
          <Route path="homeaccessories" element={<HomeAccessories />} />
          <Route path="newarrivals" element={<NewArrivals />} />
          <Route path="saleoffers" element={<SaleOffers />} />
          <Route path="sarees/:id" element={<Womendynamic />} />
          <Route path="mens/:id" element={<Mendynamic />} />
          <Route path="kids/:id" element={<Kidsdynamic />} />
          <Route path="cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Route>

        {/* Account Routes with cart context */}
        <Route
  path="account"
  element={<Account cart={cart} clearCart={clearCart} />}>


          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>

        <Route path="*" element={<PagenotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
