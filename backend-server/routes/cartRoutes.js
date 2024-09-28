// const express = require('express');
// const router = express.Router();
// const User = require('../models/User'); // Ensure the path is correct
// const Product = require('../models/Product'); // Assuming you have a Product model

// // Add to Cart Route
// router.post('/add', async (req, res) => {
//     const { userId, productId, name, price, image, quantity } = req.body;

//     try {
//         // Find the user by userId
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ msg: 'User not found' });
//         }

//         // Check if the product is already in the cart
//         const productIndex = user.cart.findIndex(item => item.productId.toString() === productId);
        
//         if (productIndex > -1) {
//             // If the product is already in the cart, update the quantity
//             user.cart[productIndex].quantity += quantity;
//         } else {
//             // If not, add the new product to the cart
//             user.cart.push({ productId, name, price, image, quantity });
//         }

//         // Save the updated user document
//         await user.save();
//         res.status(200).json({ msg: 'Product added to cart successfully', cart: user.cart });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ msg: 'Server error', error: error.message });
//     }
// });

// module.exports = router;
// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Add to cart
router.post('/add', async (req, res) => {
  const { userId, productId, name, price, image, quantity } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check if the product is already in the cart
    const productIndex = user.cart.findIndex(item => item.productId.toString() === productId);
    
    if (productIndex > -1) {
      // If the product is already in the cart, update the quantity
      user.cart[productIndex].quantity += quantity;
    } else {
      // If not, add the new product to the cart
      user.cart.push({ productId, name, price, image, quantity });
    }

    // Save the updated user document
    await user.save();
    res.status(200).json({ msg: 'Product added to cart successfully', cart: user.cart });
  } catch (error) {
    console.error(error);
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

// Remove from cart
router.delete('/remove', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const user = await User.findById(userId);
    user.cart = user.cart.filter(item => item.productId.toString() !== productId);
    await user.save();
    res.status(200).json({ msg: 'Product removed from cart' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});

module.exports = router;
