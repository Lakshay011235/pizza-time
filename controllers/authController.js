import userModel from "../models/userModel";
import { hashPassword } from "../helpers/authHelper";

export const registerController = async (req, res) => {
    try {
        const {name, email, password, phone, address} = req.body
        
        //validation
        //TODO:: Add SQL injection check 
        if (!name){
            return res.send({error: "Invalid Name @ Registration"});
        }
        if (!email){
            return res.send({error: "Invalid Email @ Registration"});
        }
        if (!password){
            return res.send({error: "Invalid Password @ Registration"});
        }
        if (!phone){
            return res.send({error: "Invalid Phone @ Registration"});
        }
        if (!address){
            return res.send({error: "Invalid Address @ Registration"});
        }
    
        //check user
        const existingUser = await userModel.findOne({email})

        //existing user
        if (existingUser){
            return res.status(200).send({
                success: true,
                message: "Already registered, please login",
            });
        }

        //register user
        const hashedPassword = await hashPassword(password);
        
        //save
        const user = new userModel({
            name, email, phone, address, password:hashedPassword
        }).save();

        res.status(200).send({
            success: true, 
            message: "User Regisration Success",
            user
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Registeration @ registerController",
            error
        })
    }
};

// export default {registerController};