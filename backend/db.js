const express=require("express")
const db=express.Router()
const mongoose=require("mongoose")
require('./userDetails')

const bcrypt=require("bcryptjs")
db.use(express.json())

const User=mongoose.model("UserInfo")

const atlasUserName =''
const altlasPassword=''

const url=`mongodb+srv://${atlasUserName}:${altlasPassword}@cluster0.lnuvd0t.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url,{useNewUrlParser:true}).then(()=>console.log("Connected to the Backend")).catch((e)=>console.log(err))


const jwt=require("jsonwebtoken")
const JWT_SECRET="asdf43ghjkyd43zxcvb533nmefgh43jut43dcvbnbvdf"

db.post('/register',async (req,res)=>{
    const {username,email,password}=req.body;
    console.log(req.body)
    const encrypt=await bcrypt.hash(password,10)
    try{
        const oldUser=await User.findOne({email})
        if(oldUser)
        {
            console.log("user")
            return res.status(400).json({error:"exists"})
        }
        else{
            await User.create({
                username,
                email,
                'password':encrypt,
            })
            console.log(2)
            res.sendStatus(200)
        }
        
    }
    catch(err){
        console.log(err)
        res.send({error:"Something Went wrong"})
    }
})

db.post("/login",async(req,res)=>{
    const {email, password}=req.body
    const user=await User.findOne({email});
    
    if(!user){
        return res.json({error:"User does not exists"})
    }
    if(await bcrypt.compare(password,user.password))
    {
        const token=jwt.sign({email:user.email},JWT_SECRET)
        res.status(201)
        return res.json({data:token})
        console.log(token)   
    }
    else{
        return res.json({error:"Incorrect Password"})
    }

    return res.json({error:"Something Went worng"})
})

db.post("/userData",async()=>{
    const {token}=req.body
    try{
        const user=jwt.verify(token,JWT_SECRET)
        const useremail =user.email;
        User.findOne({email:useremail}).then(data=>{
            res.send({status:"ok",data:data})
        }).catch(err=>console.log(err))
    }
    catch(err)
    {

    }
})
module.exports=db