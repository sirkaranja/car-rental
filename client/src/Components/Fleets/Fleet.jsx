import React, { useState, useEffect } from 'react';

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
    <div>
      <h2>Car List</h2>
      <div className="card-container">
        {cars.map((car) => (
          <div key={car.id} className='card' style={{ width: '18rem' }}>
            <img src={car.image} alt={`${car.brand} ${car.model}`} className='img-card' />
            <div className='card-body'>
              <p className='card-text'>{car.brand} {car.model}</p>
              <p className='card-text'>Transmission: {car.transition}</p>
              <p className='card-text'>Seat Capacity: {car.seat_capacity}</p>
              <p className='card-text'>Speedometer: {car.speedometer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CarList;
