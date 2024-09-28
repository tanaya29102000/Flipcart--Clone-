// import React, { useState } from "react";
// import Slider from "react-slick";
// import { useNavigate, Link } from "react-router-dom"; // Added Link from react-router-dom
// import "./Home.css";
// import Grocery from "../pages/image/Glocery.png";
// import Mobiles from "../pages/image/Mobiles.png";
// import Fashion from "../pages/image/Fashion.png";
// import Electronics from "../pages/image/Electronics.png";
// import HomeImage from "../pages/image/Home.png"; // Renamed Home image variable to avoid conflict
// import Applic from "../pages/image/Applic.png";
// import Beauty from "../pages/image/Beauty.png";
// import ele from "../pages/image/e.png";
// import e1 from "../pages/image/e1.png";
// import e2 from "../pages/image/e2.png";
// import e3 from "../pages/image/e3.png";
// import e4 from "../pages/image/e4.png";
// import e5 from "../pages/image/5.png";


// // Featured Brands
// const carouselImages = [
//   "../Images/P1.jpg",
//   "../Images/P2.jpg",
//   "../Images/P3.jpg",
//   "../Images/P4.jpg",
//   "../Images/P5.jpg",
//   "../Images/P6.jpg",
//   // "../Images/drag.png",
// ];

// const featuredBrands = [
//   "../Images/e.png",
//   "../Images/e1.png",
//   "../Images/e2.png",
//   "../Images/e3.png",
//   "../Images/e4.png",

// ];

// function Home({ products, addToCart, addToWishlist, isLoggedIn }) {
//   const navigate = useNavigate();
//   const [cartMessage, setCartMessage] = useState(""); // State for cart message
//   const [hoveredProductId, setHoveredProductId] = useState(null);

//   const handleShopNow = () => {
//     navigate("/shop");
//   };

//   const handleAddToCart = (product) => {
//     if (isLoggedIn) {
//       addToCart(product); // Add product to cart if logged in
//       setCartMessage(`${product.name} has been added to your cart!`);

//       // Navigate to the Cart page after 2 seconds
//       setTimeout(() => {
//         setCartMessage("");
//         navigate("/cart");
//       }, 1000);
//     } else {
//       navigate("/login"); // Redirect to login if not logged in
//     }
//   };

//   const handleAddToWishlist = (product) => {
//     if (isLoggedIn) {
//       addToWishlist(product); // Add product to wishlist if logged in
//       setCartMessage(`${product.name} has been added to your Wishlist!`);

//       // Navigate to the Wishlist page after 2 seconds
//       setTimeout(() => {
//         setCartMessage("");
//         navigate("/wishlist");
//       }, 1000);
//     } else {
//       navigate("/login"); // Redirect to login if not logged in
//     }
//   };

//   // Carousel settings
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 200,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 2000, // Slide every 2 seconds
//     pauseOnHover: true, // Pause sliding when hovering over the carousel
//   };

//   return (
//     <div className="home-container">
//       {/* Categories Section */}

//       <section className="home-categories">
//   <div className="home-category" onClick={() => navigate('/brand/grocery')}>
//     <img src={Grocery} alt="Grocery" />
//     <span className="category-name">Grocery</span>
//   </div>
//   <div className="home-category" onClick={() => navigate('/brand/mobiles')}>
//     <img src={Mobiles} alt="Mobiles" />
//     <span className="category-name">Mobiles</span>
//   </div>
//   <div className="home-category" onClick={() => navigate('/brand/fashion')}>
//     <img src={Fashion} alt="Fashion" />
//     <span className="category-name">Fashion</span>
//   </div>
//   <div className="home-category" onClick={() => navigate('/brand/electronics')}>
//     <img src={Electronics} alt="Electronics" />
//     <span className="category-name">Electronics</span>
//   </div>
//   <div className="home-category" onClick={() => navigate('/brand/homeFurniture')}>
//     <img src={HomeImage} alt="Home" />
//     <span className="category-name">Home & Furniture</span>
//   </div>
//   <div className="home-category" onClick={() => navigate('/brand/appliances')}>
//     <img src={Applic} alt="Appliances" />
//     <span className="category-name">Appliances</span>
//   </div>
//   <div className="home-category" onClick={() => navigate('/brand/flights')}>
//     <img src={Flight} alt="Flight" />
//     <span className="category-name">Flight Booking</span>
//   </div>
//   <div className="home-category" onClick={() => navigate('/brand/beauty')}>
//     <img src={Beauty} alt="Beauty" />
//     <span className="category-name">Beauty, Toys & More</span>
//   </div>
// </section>


//       {/* Hero Section */}
//       <header className="hero-section">
//         <div className="carousel-container">
//           <Slider {...settings}>
//             {carouselImages.map((image, index) => (
//               <div key={index} className="carousel-slide">
//                 <img src={image} alt={`Slide ${index + 1}`} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </header>

//       {/* Best Electronics */}
//       <section className="featured-brands">
//   <h2>Best Electronics</h2>
//   <div className="brands-grid">
//     {featuredBrands.map((brand, index) => (
//       <div key={index} className="brand-card">
//         <a href={`/brand/${index + 1}`}>
//           <img src={e} alt={`e ${index + 1}`} />
//           <div className="icon-wrapper">
//             <i className="fas fa-link"></i> {/* This is the icon for jumping */}
//           </div>
//         </a>
//       </div>
//     ))}
//   </div>
// </section>

//             {/* Best Electronics */}

//       <section className="">
//         <h2>Beuty, Food, Toys & More</h2>
//         <div className="brands-grid">
//           {featuredBrands.map((brand, index) => (
//             <div key={index} className="brand-card">
//               <img src={brand} alt={`Brand ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="f">
//         <h2>Sports, Healthcare & more</h2>
//         <div className="brands-grid">
//           {featuredBrands.map((brand, index) => (
//             <div key={index} className="brand-card">
//               <img src={brand} alt={`Brand ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="f">
//         <h2>gifts for all Occasions </h2>
//         <div className="brands-grid">
//           {featuredBrands.map((brand, index) => (
//             <div key={index} className="brand-card">
//               <img src={brand} alt={`Brand ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="f">
//         <h2>Grooming, Books, Auth & more</h2>
//         <div className="brands-grid">
//           {featuredBrands.map((brand, index) => (
//             <div key={index} className="brand-card">
//               <img src={brand} alt={`Brand ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="">
//         <h2>Furniture Deals</h2>
//         <div className="brands-grid">
//           {featuredBrands.map((brand, index) => (
//             <div key={index} className="brand-card">
//               <img src={brand} alt={`Brand ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="f">
//         <h2>Fashion Top Deals</h2>
//         <div className="brands-grid">
//           {featuredBrands.map((brand, index) => (
//             <div key={index} className="brand-card">
//               <img src={brand} alt={`Brand ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="">
//         <h2>Pic Your Styles</h2>
//         <div className="brands-grid">
//           {featuredBrands.map((brand, index) => (
//             <div key={index} className="brand-card">
//               <img src={brand} alt={`Brand ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </section>
//       <section className="">
//         <h2>Top Deals On TVs & Appliances</h2>
//         <div className="brands-grid">
//           {featuredBrands.map((brand, index) => (
//             <div key={index} className="brand-card">
//               <img src={brand} alt={`Brand ${index + 1}`} />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Home;
import React, { useState } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom"; // Added Link from react-router-dom
import "./Home.css";
import Grocery from "../pages/image/Glocery.png";
import Mobiles from "../pages/image/Mobiles.png";
import Fashion from "../pages/image/Fashion.png";
import Electronics from "../pages/image/Electronics.png";
import HomeImage from "../pages/image/Home.png"; // Renamed Home image variable to avoid conflict
// import Applic from "../pages/image/Applic.png";
import Beauty from "../pages/image/Beauty.png";

// Carousel images and featured brands (add real paths to your images)
const carouselImages = [
  "../Images/P1.jpg",
  "../Images/P2.jpg",
  "../Images/P3.jpg",
  "../Images/P4.jpg",
  "../Images/P5.jpg",
  "../Images/P6.jpg",
];

const featuredBrands = [
  "../Images/e.png",
  "../Images/e1.png",
  "../Images/e2.png",
  "../Images/e3.png",
  "../Images/e4.png",
];

function Home({ products, addToCart, addToWishlist, isLoggedIn }) {
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState(""); // State for cart message

  const handleShopNow = () => {
    navigate("/shop");
  };

  const handleAddToCart = (product) => {
    if (isLoggedIn) {
      addToCart(product); // Add product to cart if logged in
      setCartMessage(`${product.name} has been added to your cart!`);

      setTimeout(() => {
        setCartMessage("");
        navigate("/cart");
      }, 1000);
    } else {
      navigate("/login");
    }
  };

  const handleAddToWishlist = (product) => {
    if (isLoggedIn) {
      addToWishlist(product);
      setCartMessage(`${product.name} has been added to your Wishlist!`);

      setTimeout(() => {
        setCartMessage("");
        navigate("/wishlist");
      }, 1000);
    } else {
      navigate("/login");
    }
  };

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  // Common section rendering function
  const renderSection = (title, brands) => (
    <section className="featured-brands">
      <h2>{title}</h2>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div key={index} className="brand-card">
            <img src={brand} alt={`Brand ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );

  return (
    <div className="home-container">
      {/* Categories Section */}
      <section className="home-categories">
        <div className="home-category" onClick={() => navigate('/brand/grocery')}>
          <img src={Grocery} alt="Grocery" />
          <span className="category-name">Grocery</span>
        </div>
        <div className="home-category" onClick={() => navigate('/brand/mobiles')}>
          <img src={Mobiles} alt="Mobiles" />
          <span className="category-name">Mobiles</span>
        </div>
        <div className="home-category" onClick={() => navigate('/brand/fashion')}>
          <img src={Fashion} alt="Fashion" />
          <span className="category-name">Fashion</span>
        </div>
        <div className="home-category" onClick={() => navigate('/brand/electronics')}>
          <img src={Electronics} alt="Electronics" />
          <span className="category-name">Electronics</span>
        </div>
        <div className="home-category" onClick={() => navigate('/brand/homeFurniture')}>
          <img src={HomeImage} alt="Home & Furniture" />
          <span className="category-name">Home & Furniture</span>
        </div>
        {/* <div className="home-category" onClick={() => navigate('/brand/appliances')}>
          <img src={Applic} alt="Appliances" />
          <span className="category-name">Appliances</span>
        </div> */}
        <div className="home-category" onClick={() => navigate('/brand/beauty')}>
          <img src={Beauty} alt="Beauty" />
          <span className="category-name">Beauty, Toys & More</span>
        </div>
      </section>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="carousel-container">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index} className="carousel-slide">
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </Slider>
        </div>
      </header>

      {/* Sections with brands */}
      {renderSection("Best Electronics", featuredBrands)}
      {renderSection("Beauty, Food, Toys & More", featuredBrands)}
      {renderSection("Sports, Healthcare & More", featuredBrands)}
      {renderSection("Gifts for All Occasions", featuredBrands)}
      {renderSection("Grooming, Books, & More", featuredBrands)}
      {renderSection("Furniture Deals", featuredBrands)}
      {renderSection("Fashion Top Deals", featuredBrands)}
      {renderSection("Pick Your Styles", featuredBrands)}
      {renderSection("Top Deals on TVs & Appliances", featuredBrands)}
    </div>
  );
}

export default Home;
