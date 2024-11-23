import { Router } from 'express';
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import { connect } from '../config/mongodb.js';

const router = Router()
const jwt = jsonwebtoken()

router.post("/sign-in", async (req, res) => {
    try {
        const {email, password} = req.body
        const database = await connect()

        const usersCollection = database.collection("users")
        const user = usersCollection.findOne({email})

        if(!user){
            return res.status(401).json({message: "invalid credentials"})
        }

        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            {userId: user._id.toString()},
            process.env.JWT_KEY,
            {expiresIn: "24h"}
        )

        res.json({
            token,
            user: {
              id: user._id,
              name: user.name,
              email: user.email
            }
        });
    }
    catch(error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
})

export {router}