import User from "../models/user.js"

const userRegister = async (req, res) => {
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
            if (err.code === 11000 && err.keyPattern && err.keyPattern.adhaarNumber) {
                res.status(400).json({ message: 'Aadhaar number is already registered' });
            } else {
                res.status(500).json({ message: err.message });
            }
        }
    };

    export default userRegister