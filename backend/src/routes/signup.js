import { Router } from 'express';
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { connect } from '../config/mongodb.js';
import validatorUser from '../utils/validators.js';

const router = Router()

router.post("/sign-up", async (req, res) => {
    try {
        const {name, email, password} = req.body;

        const validation = validatorUser({name, email, password});
        if(!validation.isValid){
            return res.status(400).json({errors: validation.errors})
        }
        const database = await connect()
        const usersCollection = database.collection("users")

        const existingUser = usersCollection.findOne({ email })
        if(existingUser){
            return res.status(400).json({message: "Email already exists"})
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await usersCollection.insertOne({
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        const token = jsonwebtoken.sign(
            {userId: result.insertedId.toString()},
            process.env.JWT_KEY,
            {expiresIn: "24h"}

        )

        res.status(201).json({
            token,
            user: {
                id: result.insertedId,
                name,
                email
            }
        })
    }
    catch (error) {
        console.error("Signup error: ", error)
        res.status(500).json({message: "Server error during registration"})
    }

})

export default router