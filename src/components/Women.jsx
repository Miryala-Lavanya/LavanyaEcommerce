import React from 'react'
import './Dropdownitems.css'
import womenData from '../data/Women.json'
import { Link } from 'react-router-dom'

const Women = () => {
 
  // Access the sarees array and slice the first 5 items
  const firstFiveSarees = womenData.sarees.slice(0, 5)
  const fiveToTenSarees = womenData.sarees.slice( 5,10)
  const tenToFifteenSarees = womenData.sarees.slice(10, 15)
  const lastFiveSarees = womenData.sarees.slice(15,20)
  
  
  return (
    <div className='mainSection'>
      
      {firstFiveSarees.map((item) => {
          return(
        <Link key={item.id} to={`/shop/sarees/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
        <div className='imgBox' >
          <img src={item.image} alt={item.name} className='Image' />
          <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
          
        </div>
        </Link>
        );
})}
      {fiveToTenSarees.map((item) => {
         return(
        <Link  key={item.id} to={`/shop/sarees/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }} >
        <div className='imgBox' key={item.id}>
          <img src={item.image} alt={item.name} className='Image' />
          <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
          
        </div>
        </Link>
        );
})}
      {tenToFifteenSarees.map((item) => {
         return(
        <Link key={item.id} to={`/shop/sarees/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
        <div className='imgBox' key={item.id}>
          <img src={item.image} alt={item.name} className='Image'  />
          <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
          
        </div>
        </Link>
        );
})}
      { lastFiveSarees.map((item) => {
        return(
        <Link key={item.id} to={`/shop/sarees/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
        <div className='imgBox' key={item.id}>
          <img src={item.image} alt={item.name} className='Image'  />
          <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
          
        </div>
        </Link>
        );
       
   
      
})}
      
     </div>
  )
}

export default Women
