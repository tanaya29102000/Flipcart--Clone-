// const express = require('express');
// const router = express.Router();
// const User = require('../User'); // Assuming wishlist is part of the user model

// // Add to wishlist
// router.post('/add', async (req, res) => {
//   const { userId, productId, name, price, image } = req.body;

//   try {
//     const user = await User.findById(userId);
//     user.wishlist.push({ productId, name, price, image });
//     await user.save();
//     res.status(200).json({ msg: 'Product added to wishlist' });
//   } catch (error) {
//     res.status(500).json({ msg: 'Server error', error: error.message });
//   }
// });

// // Remove from wishlist
// router.delete('/remove', async (req, res) => {
//   const { userId, productId } = req.body;

//   try {
//     const user = await User.findById(userId);
//     user.wishlist = user.wishlist.filter(item => item.productId.toString() !== productId);
//     await user.save();
//     res.status(200).json({ msg: 'Product removed from wishlist' });
//   } catch (error) {
//     res.status(500).json({ msg: 'Server error', error: error.message });
//   }
// });

// // Get wishlist items
// router.get('/:userId', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId).populate('wishlist.productId');
//     res.status(200).json(user.wishlist);
//   } catch (error) {
//     res.status(500).json({ msg: 'Server error', error: error.message });
//   }
// });

// module.exports = router;
// routes/wishlist.js
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');

// // Add to wishlist
// router.post('/add', async (req, res) => {
//   const { userId, productId, name, price, image } = req.body;

//   try {
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ msg: 'User not found' });
//     }

//     user.wishlist.push({ productId, name, price, image });
//     await user.save();
//     res.status(200).json({ msg: 'Product added to wishlist' });
//   } catch (error) {
//     res.status(500).json({ msg: 'Server error', error: error.message });
//   }
// });

// // Remove from wishlist
// router.delete('/remove', async (req, res) => {
//   const { userId, productId } = req.body;

//   try {
//     const user = await User.findById(userId);
//     user.wishlist = user.wishlist.filter(item => item.productId.toString() !== productId);
//     await user.save();
//     res.status(200).json({ msg: 'Product removed from wishlist' });
//   } catch (error) {
//     res.status(500).json({ msg: 'Server error', error: error.message });
//   }
// });

// // Get wishlist items
// router.get('/:userId', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.userId).populate('wishlist.productId');
//     res.status(200).json(user.wishlist);
//   } catch (error) {
//     res.status(500).json({ msg: 'Server error', error: error.message });
//   }
// });

// module.exports = router;
// routes/wishlist.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Add to wishlist
router.post('/add', async (req, res) => {
  const { userId, productId, name, price, image } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    // Check if the product is already in the wishlist
    const existingItem = user.wishlist.find(item => item.productId.toString() === productId);
    if (existingItem) {
      return res.status(400).json({ msg: 'Product is already in the wishlist' });
    }

    user.wishlist.push({ productId, name, price, image });
    await user.save();
    res.status(200).json({ msg: 'Product added to wishlist' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});

// Remove from wishlist
router.delete('/remove', async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    user.wishlist = user.wishlist.filter(item => item.productId.toString() !== productId);
    await user.save();
    res.status(200).json({ msg: 'Product removed from wishlist' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});

// Get wishlist items
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('wishlist.productId');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(user.wishlist);
  } catch (error) {
    res.status(500).json({ msg: 'Server error', error: error.message });
  }
});

module.exports = router;
