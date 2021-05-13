require("dotenv").config()

const PORT=process.env.PORT
const express=require("express")
const upload=require("express-fileupload")
const app=express()


const index=require("./routes/index")

const cors=require("cors")
const body=require("body-parser")
app.use(cors())
app.use(body.json())
app.use(body.urlencoded({extended:true}))
app.use(upload())

app.use("/",index)


app.listen(PORT,()	=>console.log(`server started on port ${PORT}`))