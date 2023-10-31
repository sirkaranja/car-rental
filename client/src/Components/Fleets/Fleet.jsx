import React, { useState, useEffect } from 'react';

function Fleet() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'http://127.0.0.1:5000/cars';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCars(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Car List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <h3>
                {car.brand} - {car.model}
              </h3>
              <p>
                <strong>Transition:</strong> {car.transition}
              </p>
              <p>
                <strong>Seat Capacity:</strong> {car.seat_capacity}
              </p>
              <p>
                <strong>Speedometer:</strong> {car.speedometer}
              </p>
              <img src={car.image} alt={`Image of ${car.brand} ${car.model}`} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fleet;
