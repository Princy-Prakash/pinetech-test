import jwt from 'jsonwebtoken' 

export const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token

    if(!token){
        res.status(401).json("you are not authenticated!!!") 
    }

    jwt.verify(token,process.env.JWT, (err,user) => {
        if(err)
        {
            res.status(403).json("invalid token")  
        }
        req.user = user
        next()
    })
}

 