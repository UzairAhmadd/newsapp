import React, { Component } from 'react'
import './footer.css';
export class Footer extends Component {
  render() {
    return (
      <div>
        <section className="footer">
  <div className="footer-row">
    <div className="footer-col">
      <h4>Info</h4>
      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Compressions</a>
        </li>
        <li>
          <a href="#">Customers</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Collection</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Explore</h4>
      <ul className="links">
        <li>
          <a href="#">Free Designs</a>
        </li>
        <li>
          <a href="#">Latest Designs</a>
        </li>
        <li>
          <a href="#">Themes</a>
        </li>
        <li>
          <a href="#">Popular Designs</a>
        </li>
        <li>
          <a href="#">Art Skills</a>
        </li>
        <li>
          <a href="#">New Uploads</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>Legal</h4>
      <ul className="links">
        <li>
          <a href="#">Customer Agreement</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        <li>
          <a href="#">GDPR</a>
        </li>
        <li>
          <a href="#">Security</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">Media Kit</a>
        </li>
      </ul>
    </div>
    <div className="footer-col">
      <h4>MyNewsApp</h4>
      <p>
        Subscribe to our mynewsapp for a weekly dose of news, updates, helpful
        tips, and exclusive offers.
      </p>
      <form action="#">
        <input type="text" placeholder="Your email" required="" />
        <button type="submit">SUBSCRIBE</button>
      </form>
      <div className="icons">
        <i className="fa-brands fa-facebook-f" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-linkedin" />
        <i className="fa-brands fa-github" />
      </div>
    </div>
  </div>
      <div className='text-center fs-4 fw-bold p-3'>
      Copyright © 2024 MyNewsApp By Uzair Ahmad. All Rights Reserved.
    </div>
</section>

      </div>
    )
  }
}

export default Footer