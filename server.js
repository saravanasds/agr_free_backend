
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv"
import registerRoute from "./routes/register.js"

const app = express();
const port = process.env.PORT || 5000;
 
dotenv.config();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// routes
app.use('/api/register', registerRoute);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
