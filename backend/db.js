const express=require("express")
const db=express.Router()
const mongoose=require("mongoose")
require('./userDetails')

const bcrypt=require("bcryptjs")
db.use(express.json())

const User=mongoose.model("UserInfo")



const url=`mongodb+srv://${process.env.ATLAS_DATABASE_USERNAME}:${process.env.ATLAS_DATABASE_PASSWORD}@cluster0.lnuvd0t.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url,{useNewUrlParser:true}).then(()=>console.log("Connected to the Backend")).catch((error)=>console.log(error))


const jwt=require("jsonwebtoken")
const JWT_SECRET=process.env.SECRET

db.post('/register',async (req,res)=>{
    const {username,email,password}=req.body;
    const encrypt=await bcrypt.hash(password,10)
    try{
        const oldUser=await User.findOne({email})

        if(oldUser)
        {
            return res.status(400).json({code:10,message:"User with this email already exist"})
        }
        else{
            await User.create({
                username,
                email,
                'password':encrypt,
            })
            res.sendStatus(200)
        }
        
    }
    catch(err){
        console.log(err)
        res.send({code:1,message:"Something Went wrong!"})
    }
})

db.post("/login",async(req,res)=>{
    const {email, password}=req.body
    const user=await User.findOne({email});
    
    if(!user){
        return res.json({code:20,message:"User does not exists"})
    }
    if(await bcrypt.compare(password,user.password))
    {
        const token=jwt.sign({email:user.email},JWT_SECRET)
        res.status(201)
        return res.json({data:token}) 
    }
    else{
        return res.json({code:21,message:"Incorrect Credentials"})
    }

    return res.json({code:1,message:"Something Went worng"})
})

db.post("/userData",async()=>{
    const {token}=req.body
    try{
        const user=jwt.verify(token,JWT_SECRET)
        const useremail =user.email;
        User.findOne({email:useremail}).then(data=>{
            res.status(200)
            res.send({data:data})
        }).catch(err=>console.log(err))
    }
    catch(err)
    {
        console.log(err)
    }
})
module.exports=db