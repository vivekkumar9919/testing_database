const mongoose=require('mongoose');

// creating schema
const productSchema=new mongoose.Schema({
title:String,
price:String,
brand:String,
details:String,


});

// export schema
module.exports=mongoose.model("Product",productSchema);