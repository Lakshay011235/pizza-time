import express from "express";
import {registerController} from "../controllers/authController.js";

//router object :: needed as routing is in separate file
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);

export default router;
