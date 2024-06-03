import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import userRegisterRoute from "./routes/register.js";
import adminRoute from "./routes/admin.js"

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

// Middleware
const allowedOrigins = [process.env.FRONTEND_URL, process.env.ADMIN_DASHBOARD_URL];
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/user', userRegisterRoute);
app.use('/api/admin', adminRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
