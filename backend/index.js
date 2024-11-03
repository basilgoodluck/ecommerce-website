import express from 'express';
import cors from 'cors';
import { getProducts } from './mongodb.js';
import dotenv from 'dotenv';

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json())

const PORT = 3001

app.get('/api/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products)
    } catch (error) {
        console.error('Error loading API:', error);
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
})

app.listen(PORT, () => {
    console.log(`App is runing on port http://localhost:${PORT}`)
})
