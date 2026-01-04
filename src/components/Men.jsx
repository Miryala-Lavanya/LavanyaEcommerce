import React from 'react'
import menData from '../data/Men.json'
import './Dropdownitems.css'
import { Link } from 'react-router-dom'

const Men = () => {
 
  const firstFiveMensWear = menData.menswear.slice(0, 5)
  const fiveToTenMensWear = menData.menswear.slice( 5,10)
  const tenToFifteenMensWear = menData.menswear.slice(10, 15)
  const lastFiveMensWear = menData.menswear.slice(15,20)

  return (
    <div className='mainSection'>
      {firstFiveMensWear.map((item) => {
        return (
          <Link key={item.id} to={`/shop/mens/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
        <div className='imgBox' key={item.id}>
          <img src={item.image} alt={item.name} className='Image'  />
          <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
        </div>
        </Link>
        );
})}
      {fiveToTenMensWear.map((item) => {
        return (
          <Link key={item.id} to={`/shop/mens/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
        <div className='imgBox' key={item.id}>
          <img src={item.image} alt={item.name} className='Image'  />
          <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
        </div>
        </Link>
        );
})}
      {tenToFifteenMensWear.map((item) => {
        return (
          <Link key={item.id} to={`/shop/mens/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
        <div className='imgBox' key={item.id}>
          <img src={item.image} alt={item.name} className='Image'  />
         <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
        </div>
        </Link>
      );
})}
      { lastFiveMensWear.map((item) => {
        return (
          <Link key={item.id} to={`/shop/mens/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
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

export default Men
