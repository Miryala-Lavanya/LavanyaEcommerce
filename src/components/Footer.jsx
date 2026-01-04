import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h3 className="footer-title">Looms by Lavanya</h3>
        <p className="footer-tagline" style={{color:'white'}}>
          Handcrafted • Traditional • Timeless
        </p>

        <div className="footer-social">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>

        <p className="footer-copy">
          © 2025 Looms by Lavanya. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
