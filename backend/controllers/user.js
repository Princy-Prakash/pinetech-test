import User from '../models/user.js'
import JWT from 'jsonwebtoken'

 

export const updateUser = async(req,res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{ $set : req.body}, {new:true})
        res.status(200).json(updatedUser)
        console.log('user updated successfully')
    }
    catch(err){
        send(err)
    }
}


export const getUser = async(req,res) => {
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }
    catch(err){
        send(err)
    }
}


export const getUsers = async(req,res) => {
    try{
        const users = await User.find()
        res.status(200).json(users)
    }
    catch(err){
        send(err)
    }
}


export const deleteUser = async(req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user deleted successfully")
    }
    catch(err){
        send(err)
    }
}