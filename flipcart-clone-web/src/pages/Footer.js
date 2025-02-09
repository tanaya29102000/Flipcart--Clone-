// import React from 'react';
// import './Footer.css';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-section">
//           <h3>About Shoppers Stop</h3>
//           <p>
//            We offer a wide range of products at unbeatable prices.
//           </p>
//         </div>
//         <div className="footer-section">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About Us</a></li>
//             <li><a href="/shop">Shop</a></li>
//             <li><a href="/contact">Contact Us</a></li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h3>Follow Us</h3>
//           <div className="social-icons">
//             <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
//             <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
//             <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
//           </div>
//         </div>
//         <div className="footer-section">
//           <h3>Contact Us</h3>
//           <p>Email: support@shopperstop.com</p>
//           <p>Phone: +123 456 7890</p>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            Shoppers Stop offers a wide range of products at unbeatable prices. We prioritize quality and customer satisfaction.
          </p>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section follow-us">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@shopperstop.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
