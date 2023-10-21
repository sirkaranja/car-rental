import React from 'react'
import Footer from '../Footer/Footer';
import NavbaMain from '../Navbar/Navbar'
import './contact.css'

function Contact() {
  return (
    <>
    < NavbaMain />
    
    <div className='header'>Contact</div>
    <div className='main-contact'>
        <form action="">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='name'/>
            <label htmlFor="">Email</label>
            <input type="email" name="email"  placeholder='email....' id="" />
            <label htmlFor="">Subject</label>
            <input type="text" placeholder='subject...' />
            <label htmlFor="">Phone Number</label>
            <input type="number" name="phone number..." id="" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">Send Message</button>
        </form>

    </div>
    < Footer />
    </>
  )
}

export default Contact