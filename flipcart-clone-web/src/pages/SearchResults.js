import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import product from '../pages/Product'; // Your product data
import "./SearchResults.css";

function SearchResults() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query');

  useEffect(() => {
    if (searchQuery) {
      const results = product.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    }
  }, [searchQuery]);

  return (
    <div className="search-results-container">
      <h1>Search Results for "{searchQuery}"</h1>
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found for your search.</p>
      )}
    </div>
  );
}

export default SearchResults;
