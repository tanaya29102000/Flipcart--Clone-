import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const FeaturedBrands = ({ featuredBrands, brandNames }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <>
      <section className="featured-brands">
        <h2>Beauty, Food, Toys & More</h2>
        <div className="brands-grid">
          {featuredBrands.map((brand, index) => (
            <div key={index} className="brand-card" onClick={() => navigate(`/brand/${index}`)}>
              <img src={brand} alt={`Brand ${index + 1}`} />
              <p onClick={(e) => { e.stopPropagation(); navigate(`/brand/${index}`); }}>
                {brandNames[index]} {/* Use the corresponding brand name */}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Repeat for other categories, adjusting titles and brand data as needed */}
      <section className="featured-brands">
        <h2>Sports, Healthcare & More</h2>
        <div className="brands-grid">
          {featuredBrands.map((brand, index) => (
            <div key={index} className="brand-card" onClick={() => navigate(`/brand/${index}`)}>
              <img src={brand} alt={`Brand ${index + 1}`} />
              <p onClick={(e) => { e.stopPropagation(); navigate(`/brand/${index}`); }}>
                {brandNames[index]} {/* Use the corresponding brand name */}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Add more sections here as needed */}
    </>
  );
};

export default FeaturedBrands;
