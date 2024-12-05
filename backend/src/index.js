import express from 'express';
import cron from "node-cron";
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

const myProducts = []
const myPromoProducts = []

cron.schedule("*/4 * * * *", async function() {
    try{
        const products = await getProducts();
        for(let i = 0; i < products.length; i++){
            myProducts.push(products[i])
        }
    }
    catch(error){
        console.error(error.message);
    }
});

cron.schedule("*/4 * * * *", async function () {
    try{
        const promoProducts = await getProducts();
        const shuffledProducts = promoProducts.sort(() => Math.random() - 0.5);
        const data = shuffledProducts.slice(0, 5);

        for(let i = 0; i < data.length; i++){
            myProducts.push(myPromoProducts[i])
        }

    } 
    catch(error){
        console.error(error.message);
    }   
})
app.get('/api/products', (req, res) => {
    res.status(200).json(myProducts)
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
