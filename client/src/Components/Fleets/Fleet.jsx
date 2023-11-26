import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './fleet.css';
import frd from '../../assets/frd.png';
import Footer from '../Footer/Footer';
import NavbarMain from '../Navbar/Navbar';

const CarList = () => {
  const customStyles = {
    content: {
      width: '50%', 
      margin: 'auto',
    },
  };
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    pickupAddress: '',
    dropoffAddress: '',
    date: '',
  });

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

  const openModal = (car) => {
    setSelectedCar(car);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCar(null);
    setBookingDetails({
      fullName: '',
      emailAddress: '',
      phoneNumber: '',
      pickupAddress: '',
      dropoffAddress: '',
      date: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleBookClick = () => {
    // You can handle the booking logic here
    console.log('Booking details:', bookingDetails);
    closeModal();
  };

  return (
    <>
      <div>
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
                <button className='book-btn' onClick={() => openModal(car)}>
                  Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal
      style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Booking Modal"
      >
        <h2>{selectedCar ? `${selectedCar.brand} ${selectedCar.model} Booking` : 'Booking Details'}</h2>
        <form>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={bookingDetails.fullName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Email Address:
            <input
              type="text"
              name="emailAddress"
              value={bookingDetails.emailAddress}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={bookingDetails.phoneNumber}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Pickup Address:
            <input
              type="text"
              name="pickupAddress"
              value={bookingDetails.pickupAddress}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Dropoff Address:
            <input
              type="text"
              name="dropoffAddress"
              value={bookingDetails.dropoffAddress}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={bookingDetails.date}
              onChange={handleInputChange}
            />
          </label>
          <button type="button" onClick={handleBookClick}>
            Book Now
          </button>
          <button type="button" onClick={closeModal}>
            Cancel
          </button>
        </form>
      </Modal>
      <Footer />
    </>
  );
};

export default CarList;
