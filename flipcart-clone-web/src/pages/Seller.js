import React from 'react';
import './Seller.css'; // Import the CSS file
import customer from "./image/customer.png";
import secure from "./image/secure.png";
import cost from "./image/cost.png";
import support from "./image/support.png";
import shop from "./image/shop.png";



const Seller = () => {
  return (
    <div className="seller-page">
      <div className="header">
        <h1>Existing Seller? Explore our product recommendations with Dhamaka Selection</h1>
      </div>

      <div className="content">
        <div className="menu">
          <ul>
            <li><a href="#">Sell Online</a></li>
            <li><a href="#">Fees and Commission</a></li>
            <li><a href="#">Grow</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Shopsy</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Start Selling</a></li>
          </ul>
        </div>

        <div className="main-section">
          <h2>Sell Online with Flipkart</h2>
          <div className="cards">
            <div className="card">
              <img src={customer} alt="50 Crore users" />
              <p>45 crore+ Flipkart customers</p>
            </div>

            <div className="card">
              <img src={secure} alt="Secure Payments" />
              <p>7* days secure & regular payments</p>
            </div>

            <div className="card">
              <img src={cost} alt="Low Cost" />
              <p>Low cost of doing business</p>
            </div>

            <div className="card">
              <img src={support} alt="Seller Support" />
              <p>One click Seller Support</p>
            </div>

            <div className="card">
              <img src={shop} alt="Big Billion Days" />
              <p>Access to The Big Billion Days & more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
