import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const [profileImg, setProfileImg] = useState(null);
  const [address, setAddress] = useState("");

  const user = {
    name: "Lavanya",
    email: "lavanya@gmail.com",
    memberSince: "2025",
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Profile Image Upload */}
        <label style={styles.avatar}>
          {profileImg ? (
            <img src={profileImg} alt="profile" style={styles.avatarImg} />
          ) : (
            <span style={styles.avatarText}>🪔</span>
          )}
          <input type="file" hidden onChange={handleImageUpload} />
        </label>

        <h2 style={styles.heading}>Looms by Lavanya</h2>
        <p style={styles.tagline}>Pure Handlooms • Timeless Elegance</p>

        {/* User Info */}
        <div style={styles.info}>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Member Since:</strong> {user.memberSince}</p>
        </div>

       

        {/* Actions */}
        <div style={styles.actions}>
          <button style={styles.goldBtn}>Save Profile</button>

          <button
            style={styles.maroonBtn}
            onClick={() => navigate("/account/orders")}
          >
            My Orders
          </button>

          <button style={styles.logoutBtn}>Logout</button>
        </div>

      </div>
    </div>
  );
}

/* 🎨 Silk Theme Styles */
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #fffaf0, #f5e6d3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "400px",
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    padding: "25px",
    boxShadow: "0 10px 30px rgba(90,62,54,0.3)",
    textAlign: "center",
  },
  avatar: {
    width: "90px",
    height: "90px",
    borderRadius: "50%",
    backgroundColor: "#d4af37",
    margin: "0 auto 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    overflow: "hidden",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  avatarText: {
    fontSize: "32px",
  },
  heading: {
    color: "#7a1f2b",
    marginBottom: "5px",
  },
  tagline: {
    fontStyle: "italic",
    color: "#5a3e36",
    marginBottom: "20px",
  },
  info: {
    textAlign: "left",
    lineHeight: "1.7",
    marginBottom: "15px",
  },
  addressBox: {
    textAlign: "left",
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    minHeight: "60px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    padding: "8px",
  },
  actions: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  goldBtn: {
    backgroundColor: "#d4af37",
    color: "#000",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  maroonBtn: {
    backgroundColor: "#7a1f2b",
    color: "#fff",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  logoutBtn: {
    backgroundColor: "#eee",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
  },
};

export default Profile;
