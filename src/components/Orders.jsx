import React, { useEffect, useState } from "react";
import "./Orders.css";

const STORAGE_KEY = "lavanya_orders";

function Orders() {
  // 🔹 Load orders from localStorage
  const [orders, setOrders] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  // 🔹 Save orders to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));
  }, [orders]);

  // 🔹 Step flow
  const flow = ["Placed", "Packed", "Shipped", "Delivered"];

  // 🔹 Advance step, move to Delivered if step reaches "Delivered"
  const stepAdvance = (order) => {
    const index = flow.indexOf(order.step);
    const nextStep = index < flow.length - 1 ? flow[index + 1] : order.step;
    return {
      ...order,
      step: nextStep,
      status: nextStep === "Delivered" ? "Delivered" : order.status,
    };
  };

  const advanceStep = (id) =>
    setOrders(prev => prev.map(o => (o.id === id ? stepAdvance(o) : o)));

  // 🔹 Auto-deliver orders whose expectedDelivery has passed
  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      setOrders(prev =>
        prev.map(order => {
          const deliveryDate = new Date(order.expectedDelivery);
          if (order.status === "Ordered" && deliveryDate <= today) {
            return { ...order, status: "Delivered", step: "Delivered" };
          }
          return order;
        })
      );
    }, 60 * 1000); // check every minute

    return () => clearInterval(interval);
  }, []);

  // 🔹 Cancel order
  const cancelOrder = (id) =>
    setOrders(prev => prev.filter(o => o.id !== id));

  // 🔹 Reorder delivered item
  const reorderItem = (item) => {
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 15);
    const newOrder = {
      ...item,
      id: Date.now(),
      status: "Ordered",
      step: "Placed",
      expectedDelivery: deliveryDate.toDateString(),
    };
    setOrders(prev => [newOrder, ...prev]);
  };

  // 🔹 Step progress %
  const stepPercent = (step) => {
    const index = flow.indexOf(step);
    return index >= 0 ? `${((index + 1) / flow.length) * 100}%` : "0%";
  };

  // 🔹 Split Active & Delivered Orders
  const activeOrders = orders.filter(o => o.status === "Ordered");
  const deliveredOrders = orders
    .filter(o => o.status === "Delivered")
    .sort((a, b) => new Date(b.expectedDelivery) - new Date(a.expectedDelivery));

  // 🔹 Order Card Component
  const OrderCard = ({ order }) => (
  <div className={`order-card ${order.status === "Delivered" ? "delivered-card" : ""}`}>
    
    {/* Product Image */}
    {order.image && (
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <img 
          src={order.image} 
          alt={order.name} 
          style={{ maxWidth: "150px", maxHeight: "150px", borderRadius: "10px" }} 
        />
      </div>
    )}

    <h4>
      {order.name} {order.status === "Delivered" ? "✅ Delivered" : ""}
    </h4>

    <div className="order-row">
      <span>{order.category}</span>
      <span>₹{order.price}</span>
    </div>

    {/* Tracking Steps */}
    <div className="track-steps">
      {flow.map(step => (
        <span
          key={step}
          className={flow.indexOf(step) <= flow.indexOf(order.step) ? "active" : ""}
        >
          <span className="step-circle" /> {step}
        </span>
      ))}
    </div>

    {/* Progress Bar */}
    <div className="track-box">
      <div className="track-progress" style={{ width: stepPercent(order.step) }} />
    </div>

    {/* Delivery Info */}
    <p className="order-status">
      {order.status === "Delivered"
        ? `Delivered On: ${order.expectedDelivery}`
        : <>Expected Delivery: <b>{order.expectedDelivery}</b></>}
    </p>
    <p className="order-status small-text">
      <b>Address:</b> {order.deliveryAddress || "Not provided"}
    </p>
    <p className="order-status small-text">
      <b>Payment:</b> {order.paymentMethod || "Not provided"}
    </p>

    {/* Status Text */}
    <p className="order-status" style={{ color: order.status === "Ordered" ? "#c27c0e" : "green" }}>
      {order.status === "Delivered" ? "Order Delivered" : order.status}
    </p>

    {/* Buttons */}
    {order.status === "Ordered" && (
      <>
        <button className="order-btn update-btn" onClick={() => advanceStep(order.id)}>
          Update Status
        </button>
        <button className="order-btn cancel-btn" onClick={() => cancelOrder(order.id)}>
          Cancel Order
        </button>
      </>
    )}
    {order.status === "Delivered" && (
      <button className="order-btn reorder-btn" onClick={() => reorderItem(order)}>
        Reorder
      </button>
    )}
  </div>
);


  return (
    <div className="orders-container">
      <h2 style={{ textAlign: "center", color: "#7a1f2b", fontFamily: "Times New Roman" }}>
        My Orders
      </h2>
      <p style={{ textAlign: "center", fontStyle: "italic", color: "#5a3e36", marginBottom: "25px", fontFamily: "Times New Roman" }}>
        Looms by Lavanya Mall
      </p>

      <h3 style={{ color: "#c27c0e", marginTop: "25px", fontFamily: "Times New Roman" }}>🛒 Active Orders</h3>
      {activeOrders.length ? activeOrders.map(o => <OrderCard key={o.id} order={o} />) : <p>No active orders</p>}

      <h3 style={{ color: "green", marginTop: "25px", fontFamily: "Times New Roman" }}>📦 Delivered Orders</h3>
      {deliveredOrders.length ? deliveredOrders.map(o => <OrderCard key={o.id} order={o} />) : <p>No delivered orders</p>}
    </div>
  );
}

export default Orders;
