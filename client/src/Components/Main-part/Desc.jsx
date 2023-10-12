import React from 'react';
import './Desc.css';
import desc1 from '../../assets/images1.png';
import desc2 from '../../assets/subaru.png'

function Desc() {
  return (
    <><div className='main-desc'>
      <div className='desc-img-container'>
        <img src={desc1} alt="Car" className='desc-img' />
      </div>
      <div className='text-container'>
        <h3>The World’s largest <br></br> Car Sharing Market</h3>
        <p>Find the right car to conquer the great outdoors</p>
        <div className='browse-more'>
          Browse More
          <span>→</span>
        </div>
      </div>
    </div>
    <div className='card' style={{ width: '18rem' }}>
        <img src={desc2} alt='' className='img-card' />
        <div className='card-body'>
          <p className='card-text'>Range Rover Vogue</p>
        </div>
      </div></>
    

  );
}

export default Desc;
