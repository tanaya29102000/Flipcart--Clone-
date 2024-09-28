import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BrandDetail.css'; // Make sure to include a CSS file for styling

const BrandDetail = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  // Define your categories and their respective items
  const categories = {
    electronics: ['Smartphones', 'Laptops', 'Cameras'],
    tvsAppliances: ['LED TVs', 'Refrigerators', 'Washing Machines'],
    men: ['Shirts', 'Pants', 'Shoes'],
    women: ['Dresses', 'Handbags', 'Jewelry'],
    babyKids: ['Toys', 'Clothing', 'Accessories'],
    homeFurniture: ['Sofas', 'Tables', 'Chairs'],
    sportsBooks: ['Sports Gear', 'Books', 'Stationery'],
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="brand-detail-container">
      <nav>
        <h1>Brand Details</h1>
      </nav>
      <nav className="small-nav">
        <ul className="category-list">
          {Object.keys(categories).map((cat) => (
            <li key={cat} onClick={() => handleCategoryClick(cat)}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </li>
          ))}
          <li onClick={() => navigate('/flights')}>Flights</li>
          <li onClick={() => navigate('/offer-zone')}>Offer Zone</li>
        </ul>
      </nav>
      <div className="brand-content">
        {selectedCategory && (
          <div>
            <h2>{selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
            <ul>
              {categories[selectedCategory].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        <h2>Brand Name</h2>
        <p>Details about the brand, its products, and special offers go here.</p>
        <img src="path_to_brand_image" alt="Brand" className="brand-image" />
      </div>
    </div>
  );
};

export default BrandDetail;
