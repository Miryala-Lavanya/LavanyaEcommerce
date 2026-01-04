import React from 'react'
import './Womendynamic.css'
import Menu from '../components/Menu'
import MenData from '../data/Men.json'
import { useParams,useOutletContext } from 'react-router-dom'

const Mendynamic = () => {
  const {id}=useParams()
      const men=MenData.menswear.find((item)=>item.id===Number(id))

      // Get addToCart from Shop via Outlet context
  const { addToCart } = useOutletContext();

  // Function to handle adding with quantity
  const handleAddToCart = () => {
    addToCart(men); // Calls Shop's addToCart
    alert('Item added to cart');
  };
  return (
     
    <div className='ind-page'>
      <div className="ind-image">
            <img src={men.image} alt=''/>
      </div>
      <div className="ind-details">
            <h3 className='name'>
                  <span className="label">Name:</span> <span className="value">{men.name}</span>
            </h3>
      
             <h3 className='materials'>
                  <span className="label">Material:</span> <span className="value">{men.material}</span>
             </h3>
   
             <h3 className='price'>
                  <span className="label">Price:</span> <span className="value">{men.price}</span>
             </h3>
     
             <h3 className='avilability'>
                  <span className="label">Availability:</span> <span className="value">{men.availability}</span>
             </h3>
      
             <h3 className='rating'>
                  <span className="label">Rating:</span> <span className="value">{men.rating}</span>
             </h3>
             <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
    
  )
}


export default Mendynamic
