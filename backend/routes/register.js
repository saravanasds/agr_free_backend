import express from "express";
import { userRegister } from "../controllers/userRegister.js";
import { getAllUsers }  from "../controllers/userRegister.js";

const router = express.Router();

router.post('/register', userRegister);
router.get('/all', getAllUsers);

export default router;
