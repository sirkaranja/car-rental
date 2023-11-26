import React, { useState, useEffect } from 'react';
import './fleet.css'
import frd from '../../assets/frd.png'
import Footer from '../Footer/Footer';
import NavbaMain from '../Navbar/Navbar'

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/cars');
        const data = await response.json();
        setCars(data.cars);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <><div>
      <div className='header'>
        <h1> Our Fleets</h1>
      </div>
      <div className="card-container">
        {cars.map((car) => (
          <div key={car.id} className='card'>
            <img src={car.image} alt={`${car.brand} ${car.model}`} className='img-card' />
            <div className='card-body'>
              <p className='card-text'>{car.brand} {car.model}</p>
              <p className='card-text'>Transmission: {car.transition}</p>
              <p className='card-text'>Seat Capacity: {car.seat_capacity}</p>
              <p className='card-text'>Speedometer: {car.speedometer}</p>
            </div>
            <div className='card-button'>
              <button className='view-details-btn'>View Details</button>
              <button className='book-btn'>Book</button>

            </div>
          </div>
        ))}
      </div>
    </div><Footer /></>
  );
};


export default CarList;
