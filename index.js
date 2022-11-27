const express =require('express');
const dotenv=require('dotenv');
const mongoose =require('mongoose')
const cors=require("cors")
const PORT = process.env.PORT || 3030;

dotenv.config();

const app=express();

// midleware
app.use(express.json())
app.use(cors())


// connecting databse
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log('Database connected');
})
.catch((err)=>{
    console.log(`Some error occured ${err}`);
})


// import routes
const productRoutes=require('./routes/product')
app.use("/api/products",productRoutes)







app.listen(PORT,()=>{
    console.log(`Server started  at port 4000`);
})