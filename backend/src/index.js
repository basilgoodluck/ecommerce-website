import express from 'express';
import cors from 'cors';
import { connect, getProducts } from './config/mongodb.js';
import dotenv from 'dotenv';
import authRoute from "../src/routes/authRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;
connect()

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);

app.get('/api/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error loading API:', error);
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
});

app.get('/api/promo-products', async (req, res) => {
    try {
        const products = await getProducts();
        const shuffledProducts = products.sort(() => Math.random() - 0.5);
        const data = shuffledProducts.slice(0, 5);

        res.status(200).json(data);
    } catch (error) {
        console.error('Error loading promo products:', error);
        res.status(500).json({ message: 'Error fetching promo products', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`App is running on port http://localhost:${PORT}`);
});
