import { connect } from '../config/mongodb.js';

export const getCart = async (req, res) => {
  try {
    const database = await connect();
    const cartsCollection = database.collection('carts');
    const cart = await cartsCollection.findOne({ userId: req.user.userId });
    res.json(cart ? cart.items : []);
  } catch (error) {
    console.error('Get cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity, ...productData } = req.body;
    const database = await connect();
    const cartsCollection = database.collection('carts');

    let cart = await cartsCollection.findOne({ userId: req.user.userId });

    if (!cart) {
      cart = {
        userId: req.user.userId,
        items: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }

    const existingItemIndex = cart.items.findIndex(
      (item) => item.productId === productId
    );

    if (existingItemIndex !== -1) {
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity, ...productData });
    }

    cart.updatedAt = new Date();
    await cartsCollection.updateOne(
      { userId: req.user.userId },
      { $set: cart },
      { upsert: true }
    );

    res.status(201).json(cart.items);
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const database = await connect();
    const cartsCollection = database.collection('carts');

    const cart = await cartsCollection.findOne({ userId: req.user.userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const item = cart.items.find((item) => item.productId === req.params.id);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    item.quantity = quantity;
    cart.updatedAt = new Date();

    await cartsCollection.updateOne(
      { userId: req.user.userId },
      { $set: cart }
    );

    res.json(cart.items);
  } catch (error) {
    console.error('Update cart item error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const database = await connect();
    const cartsCollection = database.collection('carts');

    const cart = await cartsCollection.findOne({ userId: req.user.userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter((item) => item.productId !== req.params.id);
    cart.updatedAt = new Date();

    await cartsCollection.updateOne(
      { userId: req.user.userId },
      { $set: cart }
    );

    res.json(cart.items);
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const clearCart = async (req, res) => {
  try {
    const database = await connect();
    const cartsCollection = database.collection('carts');

    const cart = await cartsCollection.findOne({ userId: req.user.userId });

    if (cart) {
      cart.items = [];
      cart.updatedAt = new Date();
      await cartsCollection.updateOne(
        { userId: req.user.userId },
        { $set: cart }
      );
    }

    res.json({ items: [] });
  } catch (error) {
    console.error('Clear cart error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};