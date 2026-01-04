import React, { useState, useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import "./Checkout.css";

const STORAGE_KEY = "lavanya_orders";

function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useOutletContext();

  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("Cash on Delivery");
  const [showQR, setShowQR] = useState(false);
  const [qrData, setQrData] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [transactionId, setTransactionId] = useState("");

  const amount = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  useEffect(() => {
    let timer;
    if (showQR && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      alert("Payment time expired! Please try again.");
      setShowQR(false);
      setTimeLeft(300);
    }
    return () => clearInterval(timer);
  }, [showQR, timeLeft]);

  const generateTransactionId = () => "TXN" + Date.now() + Math.floor(Math.random() * 1000);

  const getUPIQR = () => {
    const upiIDs = {
      PhonePe: "merchant@phonepe",
      GPay: "merchant@gpay",
      Paytm: "merchant@paytm",
    };
    const upiID = upiIDs[payment];
    if (!upiID) return "";
    return `upi://pay?pa=${upiID}&pn=MyShop&am=${amount}&cu=INR&tn=Order%20Payment%20Ref:${transactionId}`;
  };

  const submitOrder = () => {
    if (!address.trim()) {
      alert("Please enter delivery address!");
      return;
    }
    if (cart.length === 0) {
      alert("Cart is empty!");
      navigate("/shop/cart");
      return;
    }

    if (payment === "Cash on Delivery") {
      placeOrder("Ordered", "Placed");
    } else {
      const txnId = generateTransactionId();
      setTransactionId(txnId);
      const qrUrl = getUPIQR();
      setQrData(qrUrl);
      setShowQR(true);
    }
  };

  const placeOrder = (status, step) => {
    const newOrders = cart.map((item) => {
      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 15);
      return {
        ...item,
        id: Date.now() + Math.random(),
        status: status || "Ordered", // Ordered or Payment Pending
        step: step || "Placed",
        expectedDelivery: deliveryDate.toDateString(),
        deliveryAddress: address,
        paymentMethod: payment,
        transactionId: transactionId || null,
      };
    });

    const existingOrders = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...newOrders, ...existingOrders]));

    clearCart();
    alert("Order placed successfully!");
    navigate("/account/orders");
  };

  const handlePaymentSuccess = () => {
    alert("Payment successful!");
    placeOrder("Ordered", "Placed");
    setShowQR(false);
    setTimeLeft(300);
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>

      <label>
        Delivery Address
        <textarea
          rows="3"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter delivery address"
        />
      </label>

      <label>
        Payment Method
        <select value={payment} onChange={(e) => setPayment(e.target.value)}>
          <option>Cash on Delivery</option>
          <option>PhonePe</option>
          <option>GPay</option>
          <option>Paytm</option>
        </select>
      </label>

      <button className="confirm-btn" onClick={submitOrder}>
        Confirm Order
      </button>

      {showQR && (
        <div className="qr-container">
          <h3>Scan to Pay with {payment}</h3>
          <QRCodeSVG value={qrData} size={200} />
          <p>Amount: ₹{amount}</p>
          <p>Transaction ID: {transactionId}</p>
          <p>Time left: {formatTime(timeLeft)}</p>
          <button onClick={handlePaymentSuccess}>I Paid</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
