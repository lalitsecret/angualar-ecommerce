const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://dbUser:7b8J2GORy6UxkFNR@cluster0.5mn66.mongodb.net/ecommerce?retryWrites=true&w=majority")

const users=new mongoose.model("users",new mongoose.Schema({
	name:String,
	email:String,
	phone:String,
	password:String
}))
const products=new mongoose.model("products",new mongoose.Schema({
	sku:String,
	title:String,
	description:String,
	old:String,
	price:String,
	rating:String,
	discount:String,
	tags:String,
	image:String
}))
const cart=new mongoose.model("cart",new mongoose.Schema({
	sku:String,
	qty:Number,
	uid:String
}))
const orders=new mongoose.model("orders",new mongoose.Schema({
	sku:String,
	qty:Number,
	uid:String,
	price:String
}))
const tags=new mongoose.model("tags",new mongoose.Schema({
	t:String,
	c:String
}))




module.exports={
	users,
	products,
	cart,
	orders,
	tags
}