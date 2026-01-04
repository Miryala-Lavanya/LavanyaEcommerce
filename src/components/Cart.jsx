import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  const navigate = useNavigate();

  if (!cart || cart.length === 0) {
    return (
      <h3 style={{ textAlign: "center", marginTop: "40px" }}>
        Your cart is empty
      </h3>
    );
  }

  return (
    <div className="cart-container">
      <h6>Cart</h6>

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.name} />

          <div className="cart-item-details">
            <p className="name">{item.name}</p>
            <p className="price">₹{item.finalPrice}</p>
            <p className="availability">{item.availability}</p>

            {/* Remove button */}
            <button
              type="button"
              className="btnClass"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>

            {/* Place Order button for each item */}
            <button
              type="button"
              className="place-order-btn"
              onClick={() => navigate("/account/checkout")}
            >
              Place Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
