import React from 'react'
import Footer from '../Footer/Footer';
import NavbaMain from '../Navbar/Navbar'
import './about.css'
import ford from '../../assets/frd.png'
import more from '../../assets/more.png'
import tag from '../../assets/tag.png'

function About() {
  return (

    <>
    <NavbaMain />

    <div className='mainpart'>
      <div className='header'>
        About
      </div>
      </div>
<div>
        <img src={ford} alt="" className='ford' srcset="" />
        <img src={tag} className="tag" alt="" srcset="" />
        <p>A Ford Ranger rental comes with a high-strength steel frame for<br/>
 extra durability and exceptional gas mileage for its class.</p>
 <div className='car-details'>
  <h3>Details</h3>
  <div className='details-info'>
        <h3>Model: Ford Ranger</h3>
        <p>Seats Capacity: 5</p>
        <p>Transmission: Automatic</p>
        <p>Engine Capacity: [Capacity]</p>
        <p>Speedometer: [Speed]</p>
    </div>
 </div>
 <div className='more-cars'>
  <img src={more} alt="" srcset="" className='img-more'/>
 </div>
 <h5>View more Categories</h5>
 <button>More cars</button>
      </div> 
      
    <Footer />
    </>
  )
}

export default About