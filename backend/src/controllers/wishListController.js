import { connect } from '../config/mongodb.js';

export const getWishlist = async (req, res) => {
  try {
    const database = await connect();
    const wishlistsCollection = database.collection('wishlists');
    const wishlist = await wishlistsCollection.findOne({ userId: req.user.userId });
    res.json(wishlist ? wishlist.items : []);
  } catch (error) {
    console.error('Get wishlist error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const addToWishlist = async (req, res) => {
  try {
    const { productId, ...productData } = req.body;
    const database = await connect();
    const wishlistsCollection = database.collection('wishlists');

    let wishlist = await wishlistsCollection.findOne({ userId: req.user.userId });

    if (!wishlist) {
      wishlist = {
        userId: req.user.userId,
        items: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }

    const existingItem = wishlist.items.find(
      (item) => item.productId === productId
    );

    if (existingItem) {
      return res.status(400).json({ message: 'Item already in wishlist' });
    }

    wishlist.items.push({ productId, ...productData });
    wishlist.updatedAt = new Date();

    await wishlistsCollection.updateOne(
      { userId: req.user.userId },
      { $set: wishlist },
      { upsert: true }
    );

    res.status(201).json(wishlist.items);
  } catch (error) {
    console.error('Add to wishlist error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const database = await connect();
    const wishlistsCollection = database.collection('wishlists');

    const wishlist = await wishlistsCollection.findOne({ userId: req.user.userId });

    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    wishlist.items = wishlist.items.filter(
      (item) => item.productId !== req.params.id
    );
    wishlist.updatedAt = new Date();

    await wishlistsCollection.updateOne(
      { userId: req.user.userId },
      { $set: wishlist }
    );

    res.json(wishlist.items);
  } catch (error) {
    console.error('Remove from wishlist error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const clearWishlist = async (req, res) => {
  try {
    const database = await connect();
    const wishlistsCollection = database.collection('wishlists');

    const wishlist = await wishlistsCollection.findOne({ userId: req.user.userId });

    if (wishlist) {
      wishlist.items = [];
      wishlist.updatedAt = new Date();
      await wishlistsCollection.updateOne(
        { userId: req.user.userId },
        { $set: wishlist }
      );
    }

    res.json({ items: [] });
  } catch (error) {
    console.error('Clear wishlist error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};