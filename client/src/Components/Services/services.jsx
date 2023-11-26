import React from 'react'
import Footer from '../Footer/Footer';
import './services.css'
import trip from '../../assets/trip.png'
import airport from '../../assets/air.png'
import connect from '../../assets/connect.png'

function Services() {
  return (
    <>
    <div className='header'>services</div>
 <div className='box-wrapper'>
 <div className='serv-box'>
    <div>
    <img src={trip} srcset="" />
    <h5>Business Trips</h5>
    <p>If you are looking to hire a wedding car in Kenya 
then  look no further.   We have a luxurious 
collection of Vintage, Modern and   Classic Cars  
 such as Limousines, Prado vx, Prado v8,
 Mercedes convertible.</p>
        </div>
    </div>
    <div className='serv-box'>
        <div>
    <img src={airport} srcset="" />
    <h5> Airport Transfer</h5>
    <p>If you are looking to hire a wedding car in Kenya 
then  look no further.   We have a luxurious 
collection of Vintage, Modern and   Classic Cars  
 such as Limousines, Prado vx, Prado v8,
 Mercedes convertible.</p>
        </div>
    </div>
    <div className='serv-box'>
        <div>
    <img src={connect} srcset="" />
    <h5>Events & Weddings</h5>
    <p>If you are looking to hire a wedding car in Kenya 
then  look no further.   We have a luxurious 
collection of Vintage, Modern and   Classic Cars  
 such as Limousines, Prado vx, Prado v8,
 Mercedes convertible.</p>
        </div>
    </div>
 </div>
    <Footer />
    </>
  )
}

export default Services