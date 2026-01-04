import React, { useEffect } from 'react';
import lav from '../assets/images/Passphoto_Lavanya-500pixels.jpg';

import './About.css';

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.slide-section');
    sections.forEach((section, index) => {
      section.style.transitionDelay = `${index * 0.3}s`; // stagger
      observer.observe(section);
    });
  }, []);

  return (
    <div className="container my-5">
      {/* About Us */}
      <h2 className="text-center mb-4 slide-section from-left">About Us</h2>
      <p className="slide-section from-right">
        Welcome to our platform! We are passionate about promoting traditional
        handloom crafts and connecting skilled artisans with customers who
        appreciate quality and culture. Our mission is to preserve cultural
        heritage while providing unique, handcrafted products that stand out
        in style and quality.
      </p>
      <p className="slide-section from-left">
        We believe in sustainability and ethical business practices. Each product
        tells a story of dedication, skill, and tradition. By choosing our
        products, you are supporting local artisans and helping keep these
        timeless crafts alive.
      </p>

      {/* Lavanya Section */}
      <h4 className="mt-5 mb-3 ml- 3 text-center slide-section from-right">Meet Lavanya</h4>
      <div className="text-center slide-section from-bottom lav-section">
        <img
          src={lav}
          alt="Lavanya"
          className="img1 rounded-circle mb-3"
        />
        <h5 style={{color:'#d717d7'}}>Lavanya</h5>
        <p style={{fontWeight:'bold'}}>Founder & CEO</p>
        <p style={{ maxWidth: '500px', margin: '0 auto' }}>
          Lavanya is passionate about preserving traditional crafts and bridging
          the gap between artisans and modern customers. She leads the team with
          vision and dedication, ensuring that every product reflects quality,
          culture, and creativity.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="mt-5 slide-section from-left">
        <h4 className="mb-3 text-center">Our Mission</h4>
        <p style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          Our mission is to empower artisans by providing them a platform to showcase their skills, promote sustainable and ethical handloom practices, and deliver unique, high-quality products to customers worldwide.
        </p>

        <h4 className="mt-4 mb-3 text-center">Our Values</h4>
        <ul style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}>
          <li>Preserving Cultural Heritage</li>
          <li>Supporting Artisans</li>
          <li>Quality & Craftsmanship</li>
          <li>Sustainability & Ethics</li>
          <li>Customer Satisfaction</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
