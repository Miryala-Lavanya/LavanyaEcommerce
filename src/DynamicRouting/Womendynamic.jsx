import React from 'react'
import './Womendynamic.css'
import WomenData from '../data/Women.json'
import { useParams, useOutletContext } from 'react-router-dom';

const Womendynamic = () => {
  const { id } = useParams();
  const saree = WomenData.sarees.find((item) => item.id === Number(id));

  // Get addToCart from Shop via Outlet context
  const { addToCart } = useOutletContext();

  // Function to handle adding with quantity
  const handleAddToCart = () => {
    addToCart(saree); // Calls Shop's addToCart
    alert('Item added to cart');
  };

  return (
    <div className='ind-page'>
      <div className="ind-image">
        <img src={saree.image} alt='' />
      </div>

      <div className="ind-details">
        <h3 className='name'>
          <span className="label">Name:</span> <span className="value">{saree.name}</span>
        </h3>

        <h3 className='materials'>
          <span className="label">Material:</span> <span className="value">{saree.material}</span>
        </h3>

        <h3 className='price'>
          <span className="label">Price:</span> <span className="value">{saree.price}</span>
        </h3>

        <h3 className='avilability'>
          <span className="label">Availability:</span> <span className="value">{saree.availability}</span>
        </h3>

        <h3 className='rating'>
          <span className="label">Rating:</span> <span className="value">{saree.rating}</span>
        </h3>

        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Womendynamic;
