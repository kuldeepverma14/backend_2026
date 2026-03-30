import express from "express"
import "dotenv/config"
const app = express()
const PORT = process.env.PORT

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})

app.listen(PORT,()=>{
console.log(`Server is lsitening on port ${PORT}` )
})