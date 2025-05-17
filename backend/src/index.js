import express from 'express';
import cron from "node-cron";
import cors from 'cors';
import { connect, getProducts } from './config/mongodb.js';
import dotenv from 'dotenv';
import authRoute from "../src/routes/authRoute.js";
import morgan from 'morgan';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;
connect()

app.use(cors());
app.use(express.json());
app.use(morgan("dev"))
app.use("/api/auth", authRoute);

let myProducts = []
let myPromoProducts = []

cron.schedule("*/4 * * * *", async function() {
    try{
        const products = await getProducts();
        myProducts = products
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

        myPromoProducts = data

    } 
    catch(error){
        console.error(error.message);
    }   
})
app.get('/api/products', (req, res) => {
    res.status(200).json(myProducts)
});

app.get('/api/promo-products', (req, res) => {
    res.status(200).json(myPromoProducts)
});

app.listen(PORT, () => {
    console.log(`App is running on port http://localhost:${PORT}`);
});
