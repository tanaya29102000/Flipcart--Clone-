const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define a Product model (you may already have this in a separate file)
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  quantity: { type: Number, default: 1 },
});

const Product = mongoose.model('Product', ProductSchema);

// Route to add a product to the cart
router.post('/add', async (req, res) => {
  const { userId, productId, name, price, image, quantity } = req.body;

  // Validate input
  if (!userId || !productId || !name || !price || !image || !quantity) {
    return res.status(400).json({ msg: 'Please provide all required fields.' });
  }

  try {
    // You might want to implement logic to check if the product already exists in the cart
    // For now, we'll just create a new product entry
    const newProduct = new Product({ userId, productId, name, price, image, quantity });
    await newProduct.save();
    
    res.status(201).json({ msg: 'Product added to cart successfully!', product: newProduct });
  } catch (error) {
    console.error('Error adding product to cart:', error);
    res.status(500).json({ msg: 'Server error while adding product to cart.' });
  }
});

// Route to get all products (example)
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ msg: 'Server error while fetching products.' });
  }
});

// Additional routes can be added here as needed

module.exports = router;
