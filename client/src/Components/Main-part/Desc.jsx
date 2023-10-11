import React from 'react';
import './Desc.css';
import desc1 from '../../assets/images1.png';

function Desc() {
  return (
    <div className='main-desc'>
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

  );
}

export default Desc;
