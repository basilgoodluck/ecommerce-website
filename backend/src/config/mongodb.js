import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()

const uri = process.env.MONGO_URL
const client = new MongoClient(uri)
let db

async function connect() {
    if(!db){
        await client.connect()
        db = client.db('ecommerce-website')
    }

    return db;
}

async function getProducts() {
    const db = await connect();
    const products = db.collection('products');
    
    return products.find({}).toArray()
}

export { connect, getProducts };