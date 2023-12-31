import express from "express";
import {registerController} from "../controllers/authController.js";
import { loginController } from "../controllers/authController.js";
import { testController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


//router object :: needed as routing is in separate file
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post('/register', registerController);

//LOGIN || METHOD POST
router.post('/login', loginController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController);

export default router;
