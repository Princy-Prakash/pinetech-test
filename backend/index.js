import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js' 
import cookieParser from 'cookie-parser'
import cors from 'cors'


const PORT = process.env.PORT

const app = express();


app.use(express.json())
app.use(cookieParser())
app.use(cors())

 
const connect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected to db")
    }
    catch(err){
        throw err
    }
}
mongoose.connection.on("connected",()=>{
    console.log("mongodb connected")
})
mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
})

app.use('/auth',authRoute)
app.use('/users',userRoute) 

 

app.listen(PORT,()=>{
    connect()
    console.log(`server running on http://localhost:${PORT}`)
})