import React from 'react';
import './Desc.css';
import desc1 from '../../assets/images1.png';
import desc2 from '../../assets/subaru.png';
import desc3 from '../../assets/rent.png';

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
    <div className='card-display'>
    <div className='card' style={{ width: '18rem' }}>
        <img src={desc2} alt='' className='img-card' />
        <div className='card-body'>
          <p className='card-text'>BMW</p>
        </div>
      </div>
      <div className='card' style={{ width: '18rem' }}>
        <img src={desc2} alt='' className='img-card' />
        <div className='card-body'>
          <p className='card-text'>Range Rover Vogue</p>
        </div>
      </div>
      <div className='card' style={{ width: '18rem' }}>
        <img src={desc2} alt='' className='img-card' />
        <div className='card-body'>
          <p className='card-text'>Jeep</p>
        </div>
      </div>
      <div className='card' style={{ width: '18rem' }}>
        <img src={desc2} alt='' className='img-card' />
        <div className='card-body'>
          <p className='card-text'>Toyota</p>
        </div>
      </div>
    </div>

    <div className='main-explainer'>
      <div className='explainer'>
        <h3>Who we are</h3>
        <p>We strive for nothing short of perfection in our<br/>
 service delivery. We are renown for our superb <br/>
and well-maintained fleet of cars available for you <br/>
to rent. Moreover, we also offer chauffeur driven<br/>
 and VIP services to our clients.The fleet of our cars <br/>
consists of Saloon Cars, 4x4 SUVs, Executive Cars <br/>
and Shuttle Buses. Other than car hire, we offer the<br/>
 following services; VIP Transportation, Airport 
Transfers, Wedding
</p>
      </div>
      <div className='desc-img-container'>
        <img src={desc3} alt="Car" className='explainer-img' />
      </div>
    </div>
    <div className='hire'>

    </div>
      </>
    

  );
}

export default Desc;
