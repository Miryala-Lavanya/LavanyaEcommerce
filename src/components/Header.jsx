import React from 'react'
import './Header.css';
import img1 from '../assets/images/img1.png';


function Header() {
  return (
    <div className="header">
        <div className="text-box">
            <h2>Looms by Lavanya </h2>
                <p>
                  "Curating sustainable style through beautifully handwoven creations,
                   each crafted by hands and woven with hearts 💖."
                </p>
        </div>
    <img src={img1} alt='img' width={'80px'} height={'80px'} className='rounded-circle'/>
    </div>
  );
}

export default Header;
