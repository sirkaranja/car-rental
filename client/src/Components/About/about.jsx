import React from 'react'
import Footer from '../Footer/Footer';
import './about.css'
import ford from '../../assets/frd.png'
import more from '../../assets/more.png'
import tag from '../../assets/tag.png'

function About() {
  return (

    <>

    <div className='mainpart'>
      <div className='header'>
        About
      </div>
      </div>
<img src={tag} className="tag" alt="" srcset="" />
 <div className='car-container'>
  <img src={ford} alt="" className='ford' />
  <ul className='car-details'>
    <h3>Details</h3>
    <li><strong>Model:</strong> Ford Ranger</li>
    <li><strong>Seats Capacity:</strong> 5</li>
    <li><strong>Transmission:</strong> Automatic</li>
    <li><strong>Engine Capacity:</strong> [Capacity]</li>
    <li><strong>Speedometer:</strong> [Speed]</li>
  </ul>
</div>
<div className='btn-book'>
<p>A Ford Ranger rental comes with a high-strength steel frame for<br/>
 extra durability and exceptional gas mileage for its class.</p>
 <button type="button" className='btn' >Book</button>
</div>

 <div className='more-cars'>
  <img src={more} alt="" srcset="" className='img-more'/>
  <div className='btn-group'>
<h5>View more Categories</h5>
 <button>More cars</button>
</div>

 </div>
 
    <Footer />
    </>
  )
}

export default About