import { connect } from '../config/mongodb.js';

export const getRecommendedProducts = async (req, res) => {
  try {
    const database = await connect();
    const productsCollection = database.collection('products');

    const products = await productsCollection
      .aggregate([{ $sample: { size: 5 } }])
      .toArray();

    res.json(products);
  } catch (error) {
    console.error('Get recommended products error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};