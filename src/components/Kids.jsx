import React from 'react'
import './Dropdownitems.css'
import kidsData from '../data/Kids.json'
import { Link } from 'react-router-dom'
const Kids = () => {
  
  const firstFiveKidsWear = kidsData.kidswear.slice(0, 5)
  const fiveToTenKidsWear = kidsData.kidswear.slice( 5,10)
  const tenToFifteenKidsWear = kidsData.kidswear.slice(10, 15)
  const lastFiveKidsWear = kidsData.kidswear.slice(15,20)

  return (
    <div className='mainSection'>
      {firstFiveKidsWear.map((item) => {
        return (
          <Link key={item.id} to={`/shop/kids/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
        <div className='imgBox' key={item.id}>
          <img src={item.image} alt={item.name} className='Image' width="200" />
          <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
        </div>
        </Link>
        );
})}
      {fiveToTenKidsWear.map((item) => {
        return (
          <Link key={item.id} to={`/shop/kids/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
        <div className='imgBox' key={item.id}>
          <img src={item.image} alt={item.name} className='Image' width="200" />
          <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
        </div>
        </Link>
        );
})}
      {tenToFifteenKidsWear.map((item) => {
        return (
          <Link key={item.id} to={`/shop/kids/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
        <div className='imgBox' key={item.id}>
          <img src={item.image} alt={item.name} className='Image' width="200" />
         <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
        </div>
        </Link>
        );
})}
      { lastFiveKidsWear.map((item) => {
        return (
          <Link key={item.id} to={`/shop/kids/${item.id}`} style={{ listStyleType: 'none', textDecoration: 'none' }}>
        <div className='imgBox' key={item.id}>
          <img src={item.image} alt={item.name} className='Image' width="200" />
          <h4 className='Heading'>{item.name}</h4>
          <p className='Price'>₹{item.finalPrice}</p>
        </div>
        </Link>
        );
})}
    </div>
  )
}



export default Kids
