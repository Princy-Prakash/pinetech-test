import express from "express"; 
import { updateUser,getUser,getUsers,deleteUser } from '../controllers/user.js';

const router = express.Router();

// router.get('/',(req,res)=>{
//     res.send("This is user")
// })

//update
router.put('/:id' , updateUser)

//Get one
router.get('/:id' , getUser)

//Get all
router.get('/' , getUsers)

//Delete
router.delete('/:id' , deleteUser)

export default router