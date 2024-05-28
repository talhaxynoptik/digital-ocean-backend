
const express=require("express")
const app=express()

require('dotenv').config()
const PORT=process.env.PORT

app.get("/",(req,res)=>{
    return res.status(200).json({
        msg:"working"
    })
})
app.get("/login",(req,res)=>{
    return res.status(200).json({
        msg:"hey you are login"
    })
})
app.listen(PORT,()=>{
    console.log(`server running on  ${PORT}`);
}
)