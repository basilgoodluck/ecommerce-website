import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()

const uri = process.env.MONGODB_URL ||`mongodb+srv://nobledev:${encodeURIComponent(process.env.MONGODB_PSW)}@free-cluster.xucjn.mongodb.net/?retryWrites=true&w=majority&appName=free-cluster`
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