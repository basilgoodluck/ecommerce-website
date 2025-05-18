import { connect } from '../config/mongodb.js';

export const getProducts = async (req, res) => {
  try {
    const database = await connect();
    const productsCollection = database.collection('products');
    const products = await productsCollection.find().toArray();
    res.status(200).json(products);
  } catch (error) {
    console.error('Get products error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPromoProducts = async (req, res) => {
  try {
    const database = await connect();
    const productsCollection = database.collection('products');
    const promoProducts = await productsCollection
      .aggregate([{ $sample: { size: 5 } }])
      .toArray();
    res.status(200).json(promoProducts);
  } catch (error) {
    console.error('Get promo products error:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};