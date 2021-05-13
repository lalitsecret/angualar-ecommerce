const express=require("express")
const models=require("../models")

const router=express.Router()

router.get("/products",(req,res) =>{
	models.products.find()
	.then(data=>res.json({status:true,data}))
	.then(error=>res.json({status:false,error}))

})
router.get("/tags",(req,res) =>{
	models.tags.find()
	.then(data=>res.json({status:true,data}))
	.then(error=>res.json({status:false,error}))
	
})



module.exports=router