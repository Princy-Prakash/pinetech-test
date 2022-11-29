import User from "../models/user.js"
import bcrypt from 'bcryptjs' 
import jwt from 'jsonwebtoken'


export const register = async(req,res,next) => {
    try{
    const Salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password,Salt)

    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:hash
    })
   
        await newUser.save()
        res.status(200).send("user has been created successfully")
    }
    catch(err){
       res.send(err)   
    }
}



export const login = async(req,res,next) => {
    try{
         const user = await User.findOne({username:req.body.username})
         if(!user){
            res.status(400).json("User not found")
         }

         const isPasswordCorrect = await bcrypt.compare(req.body.password , user.password)
         if(!isPasswordCorrect){
            res.status(400).json("Wrong username or password")
         }

        const token =  jwt.sign({id:user._id},process.env.JWT)

         const {password,...others} = user._doc


        res.
        cookie("access_token",token,{
            httponly:true
        }).
        status(200).send({...others})
    }
    catch(err){
        res.send(err)
    }
}


export const logout = async(req,res)=>{
    res.cookie('jwt',{maxAge:1})
    res.send("logout")
}