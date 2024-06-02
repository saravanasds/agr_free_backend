import express from "express";
import User from "../models/user.js";


const router = express.Router();

// Register route
router.post('/', async (req, res) => {
    const { name, fatherName, dob, gender, email, mobileNumber, adhaarNumber, district, constituency, address } = req.body;

    // Create a new user
    const newUser = new User({
        name,
        fatherName,
        dob,
        gender,
        email,
        mobileNumber,
        adhaarNumber,
        district,
        constituency,
        address
    });

    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;
