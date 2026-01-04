import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact({ title = "Contact Us" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send(
      'service_xppx40p',
      'template_z5t6ol8',
      templateParams,
      'oWteLntv66Yz39wg3'
    )
    .then((res) => {
      console.log('Email sent successfully!', res);
      alert('Thank you for contacting us!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('Failed to send email:', err);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        {/* Dynamic Title */}
        <h1>{title}</h1>

        {/* Contact Info */}
        <div className="contact-info">
          <p>Email: <a href="mailto:lavanyamiryala47@gmail.com">lavanyamiryala47@gmail.com</a></p>
          <p>Phone: <a href="tel:+919392776602">+91 9392776602</a></p>
          <p>WhatsApp: <a 
            href="https://wa.me/919392776602" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a></p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
