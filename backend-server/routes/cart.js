const express = require('express');
const User = require('../models/User'); // Ensure this path is correct
const router = express.Router();

// Add to cart
router.post('/add', async (req, res) => {
  const { userId, productId, name, price, image, quantity } = req.body;

  try {
    const user = await User.findById(userId);
    const product = { productId, name, price, image, quantity };
    await user.addToCart(product);
    res.status(200).json({ msg: 'Product added to cart' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});

// Remove from cart
router.delete('/remove', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const user = await User.findById(userId);
    await user.removeFromCart(productId);
    res.status(200).json({ msg: 'Product removed from cart' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});

// Get cart items
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('cart.productId');
    res.status(200).json(user.cart);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});

module.exports = router;
