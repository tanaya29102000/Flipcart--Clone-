// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { FaShoppingCart, FaHeart } from 'react-icons/fa';
// // import './Navbar.css';
// // import flipcartlogo from "../pages/image/flipcartlogo.svg";
// // import loginIcon from "../pages/image/loginIcon.png";
// // import search from "../pages/image/search.png";


// // function Navbar({ cartItemsCount, wishlist, user }) {
// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-logo">
// //         <Link to="/" className="logo-text">
// //           <img src={flipcartlogo} alt="flipcart logo" />
// //         </Link>
// //       </div>
// //       <img src={search} alt='search' />
// //       <div className="navbar-links">
// //         <Link to="/">Home</Link>
// //         <Link to="/about">About</Link>
// //         <Link to="/shop">Shop</Link>
// //         <Link to="/contact">Contact Us</Link>
// //       </div>
// //       <div className="navbar-cart">
// //         <div className="navbar-actions">
        
// //           {user ? (<span>Welcome {user.name}</span>) : (<Link to="/login"><img className='loginIcon' src={loginIcon} alt='loginIcon'/>Login</Link>)}
// //         </div>
// //         <Link to="/wishlist">
// //           <FaHeart size={24} />
// //           {wishlist.length > 0 && <span className="icon-badge">{wishlist.length}</span>}
// //         </Link>
// //         <Link to="/cart">
// //           <FaShoppingCart size={24} />
// //           {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
// //         </Link>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaShoppingCart } from 'react-icons/fa';
// import './Navbar.css';
// import flipcartlogo from "../pages/image/flipcartlogo.svg";
// import search from "../pages/image/search.png";
// import drop from "../pages/image/dropp.png";
// import loginIcon from "../pages/image/loginIconn.png";
// import sell from "../pages/image/sell.png";
// import dot from "../pages/image/dot.png";

// function Navbar({ cartItemsCount, wishlist, user }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (searchQuery.trim() !== "") {
//       navigate(`/search?query=${searchQuery}`);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <Link to="/" className="logo-text">
//           <img src={flipcartlogo} alt="flipcart logo" />
//         </Link>

//         {/* Search Bar */}
//         <div className="search-bar">
//           <button onClick={handleSearch}>
//             <img src={search} alt="search icon" />
//           </button>
//           <input
//             type="text"
//             placeholder="Search for products, brands and more"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             onKeyDown={handleKeyPress}
//           />
//         </div>
//       </div>

//       <div className="navbar-actions">
//         <div className="user-area">
//           {user ? (
//             <span>{user.name}</span>
//           ) : (
//             <Link to="/login" className="login-button">
//               <img src={loginIcon} alt="login icon" />
//               <span>Login</span>
//               <img src={drop} alt="dropdown arrow" />
//             </Link>
//           )}
//         </div>
//       </div>

//       <div className="nav-i">
//         {/* Cart icon links to shop page */}
//         <Link to="/shop" className="navbar-cart">
//           <FaShoppingCart size={24} />
//         </Link>
//         {/* Cart text links to cart page */}
//         <Link to="/cart" className="cart-text">
//           Cart {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
//         </Link>
//         <Link to="/Seller" className="seller-link">
//           <img src={sell} alt="sell" />
//           <span>Become a Seller</span>
//         </Link>
//         <img src={dot} alt="dot" className="dot-icon" />
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import flipcartlogo from "../pages/image/flipcartlogo.svg";
import search from "../pages/image/search.png";
import drop from "../pages/image/dropp.png";
import loginIcon from "../pages/image/loginIconn.png";
import sell from "../pages/image/sell.png";
import dot from "../pages/image/dot.png";

function Navbar({ cartItemsCount, wishlist, user }) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-text">
          <img src={flipcartlogo} alt="flipcart logo" />
        </Link>

        {/* Search Bar */}
        <div className="search-bar">
          <button onClick={handleSearch}>
            <img src={search} alt="search icon" />
          </button>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
      <div className="navbar-actions">
  <div className="user-area">
    <Link to="/login" className="login-buttonn">
      <img src={loginIcon} alt="login icon" />
      <span>Login</span>
      <img src={drop} alt="dropdown arrow" />
    </Link>
  </div>
</div>


      <div className="nav-i">
        <Link to="/shop" className="navbar-cart">
          <FaShoppingCart size={24} />
          <Link to="/cart" className="cart-text">
          Cart {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          <Link to="/Seller" className="seller-link">
          <img src={sell} alt="sell" />
          <span>Become a Seller</span>
          <img src={dot} alt="dot" className="dot-icon" />
        </Link>
        </Link>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
