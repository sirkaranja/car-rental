import React from 'react';
import Footer from '../Footer/Footer';
import NavbarMain from '../Navbar/Navbar';
import './contact.css';

function Contact() {
  return (
    <>
      <NavbarMain />
      {/* Contact form */}
      <div className='main-contact'>
  <form action="">
    <div className="flex-container">
      <div className="flex-item">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder='Name' />
      </div>
      <div className="flex-item">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder='Email' />
      </div>
    </div>

    <div className="flex-container">
      <div className="flex-item">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" placeholder='Subject' />
      </div>
      <div className="flex-item">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder='Phone Number' />
      </div>
    </div>

    <textarea id="message" cols="30" rows="10" placeholder='Your message'></textarea>
    <button type="submit">Send Message</button>
  </form>

  <div className='contact-info'>
    <h3>Contact Information</h3>
    <p>Nairobi, Kenya</p>
    <p>Email us at: <span className="email">info@carhire.co.ke</span></p>
    <p>Call: 0798343427</p>
    <p>Follow us on our socials</p>
  </div>
</div>

      <div className='ftr'></div>
      <Footer />
    </>
  );
}

export default Contact;
