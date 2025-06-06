import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connect } from '../config/mongodb.js';
import validateUser from "../utils/validators.js";
import { configDotenv } from "dotenv";

configDotenv()

export const SignUp = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const validation = validateUser({name, email, password});
        if(!validation.isValid){
            return res.status(400).json({errors: validation.errors})
        }
        const database = await connect()
        const usersCollection = database.collection("users")

        const existingUser = await usersCollection.findOne({ email })
        if(existingUser){
            return res.status(409).json({message: "email exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await usersCollection.insertOne({
            name,
            email,
            password: hashedPassword,
            createdAt: new Date()
        });

        res.status(201).json({
            message: `${name} registered successfully`
        })
    }
    catch (error) {
        console.error("Signup error: ", error)
        res.status(500).json({message: `Server error during registration`})
    }

}


export const SignIn = async (req, res) => {
    try {
        const {email, password} = req.body
        const database = await connect()

        const usersCollection = database.collection("users")
        const user = await usersCollection.findOne({email})
        console.log(user)

        if(!user){
            return res.status(401).json({message: "invalid credentials"})
        }
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }


        const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_KEY, { subject: "Access API", expiresIn: "50m"} )

        res.status(200).json({
            userId: user._id,
            accessToken
        });
    }
    catch(error) {
        res.status(500).json({ message: "error" });
    }
}


