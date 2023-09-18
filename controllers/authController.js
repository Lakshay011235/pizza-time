import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        //validation
        //TODO:: Add SQL injection check
        if (!name) {
            return res.send({ error: "Invalid Name @ Registration" });
        }
        if (!email) {
            return res.send({ error: "Invalid Email @ Registration" });
        }
        if (!password) {
            return res.send({ error: "Invalid Password @ Registration" });
        }
        if (!phone) {
            return res.send({ error: "Invalid Phone @ Registration" });
        }
        if (!address) {
            return res.send({ error: "Invalid Address @ Registration" });
        }

        //check user
        const existingUser = await userModel.findOne({ email });

        //existing user
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: "Already registered, please login",
            });
        }

        //register user
        const hashedPassword = await hashPassword(password);

        //save
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword,
        }).save();

        res.status(201).send({
            success: true,
            message: "User Registration Success",
            user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registration @ registerController",
            error,
        });
    }
};

//POST LOGIN
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        //validation
        // TODO:: add SQL security
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password @ loginController",
            });
        }
        // check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email not found @ loginController",
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid password @ loginController",
            });
        }
        //token
        const token = await JWT.sign(
            { _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.status(200).send({
            success: true,
            message: "Login successful @ loginController",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Login @ loginController",
            error,
        });
    }
};

// Test controller
export const testController = (req, res) => {
    try {
        res.status(200).send({message: "Test successful"});
        console.log("Protected Route");            
    } catch (error) {
        console.log(error);
    }
}
