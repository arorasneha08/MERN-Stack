import { User } from "../models/user.js";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken" ; 

// register page 
export const register = async(req, res) =>{
    try{
        const {fullname , email , password} = req.body ; 
        if(!fullname || !email || !password) {
            return res.status(400).json({message : "All fields are required .. "}); 
        }
        const user = await User.findOne({email}); 
        if(user){
            return res.status(400).json({message : "Email already registered .. "}); 
        }
        const hashedPassword = await bcrypt.hash(password , 10) ;
        await User.create({
            fullname : fullname ,
            email : email ,
            password : hashedPassword 
        })
        return res.status(201).json({
            message : "Account created successfully " ,  
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({ message: "Server error. Please try again later." });
    }
}

// login page 

export const login = async(req, res) =>{
    try{
        const {email , password} = req.body ; 
        if(!email || !password){
            return res.status(400).json({message : "All fields are required .. "}); 
        }
        const user = await User.findOne({email}); 
        if(!user){
            return res.status(400).json({message : "incorrect email or password"}); 
        }
        const isPasswordMatch = await bcrypt.compare(password , user.password); 
        if(!isPasswordMatch){
            return res.status(400).json({message : "incorrect email or password"}) ; 
        }

        const token = await jwt.sign({userId : user._id} , process.env.SECRET_KEY , {expiresIn : '1d'}); 

        return res.status(200).cookie("token" , token , {httpOnly  : true , sameSite : "strict" , maxAge : 24*60*60*1000}).json({message : `welcome ${user.fullname}`}); 
    }
    catch(error){
        res.status(400).json({message : "login failed ..."}); 
    }
} 


export const logout = async(req, res) =>{
    try{
        return res.status(200).cookie("token" , "" , {maxAge : 0}).json({
            success : true ,
            message : "user logged out successfully .. "
        })
    }
    catch(error){
        console.log(error); 
    }
}