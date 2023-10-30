import React, { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import NavbarMain from '../Navbar/Navbar';
import './fleet.css';

function Fleet() {
  

  return (
    <>
      <NavbarMain />
      <div className='header'>
        <h3>Our Fleet</h3>
      </div>
      <Footer />
    </>
  );
}

export default Fleet;
