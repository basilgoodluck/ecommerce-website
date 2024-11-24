import express from 'express';
import cors from 'cors';
import { getProducts } from './config/mongodb.js';
import dotenv from 'dotenv';
import SignIn from "../src/routes/signin.js"
import SignUp from "../src/routes/signup.js"

dotenv.config()

const app = express()

app.use(cors());
app.use(express.json())
app.use("/api/auth/sign-up", SignUp)
app.use("/api/auth/sign-in", SignIn)

const PORT = process.env.PORT

app.get('/api/products', async (req, res) => {
    try {
        const products = await getProducts();
        res.status(200).json(products)
    } catch (error) {
        console.error('Error loading API:', error);
        res.status(500).json({ message: 'Error fetching products', error: error.message });
    }
})

app.get("/api/promo-products", async (req, res) => {
    try{
        const products = await getProducts();
        const limit = parseInt(req.query.limit) || 5
        const shuffledProductss = products.sort(() => Math.random() - 0.5)

        const data = shuffledProductss.slice(0, limit)
        res.json(data)
    }
    catch (error){
        throw error
    }
})

app.listen(PORT, () => {
    console.log(`App is runing on port http://localhost:${PORT}`)
})
