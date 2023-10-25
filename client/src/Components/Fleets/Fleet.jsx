import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import NavbarMain from '../Navbar/Navbar';
import './fleet.css';

function Fleet() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch car data from your backend API (replace with your API endpoint)
    fetch('/api/cars') // Update the URL to your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => {
        console.error('Error fetching car data:', error);
        setError('An error occurred while fetching car data.');
      });
  }, []);

  return (
    <>
      <NavbarMain />
      <div className='header'>
        <h3>Our Fleet</h3>
      </div>
      <div className="car-list">
        {error ? (
          <p>{error}</p>
        ) : (
          cars.map((car) => (
            <div key={car.id} className="car-card">
              {/* Your car card content here */}
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Fleet;
