import React from 'react';
import './footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';


function Footer() {
  return (
    <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div class="single_footer">
            <h4>CarHire</h4>
            <p>
            Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been
 the industry's standard dummy text ever since 
the 1500s, when an unknown printer took a 
galley of type and scrambled it to make a type 
specimen book.
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div class="single_footer single_footer_address">
            <h4>Vehicle Type</h4>
            <ul>
              <li>Trucks</li>
              <li>SUVs</li>
              <li>Exotic & Luxury</li>
              <li> Minivans</li>
              <li>Sports</li>
              <li>Covertibles</li>
              <li>Vans</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div class="single_footer single_footer_address">
            <h4>Explore</h4>
            <ul>
              <li>Privacy</li>
              <li>Book a car</li>
              <li>Trust & safety</li>
              <li>Contact us</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
          <div class="single_footer single_footer_address">
            <h4>Stay in the loop</h4>
            <div class="signup_form">
              <form action="#" class="subscribe">
                <input
                  type="text"
                  class="subscribe__input"
                  placeholder="Enter Email Address"
                />
                <button type="button" class="subscribe__btn">
                  <i class="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
          <div class="social_profile">
            <ul>
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   
  )
}

export default Footer