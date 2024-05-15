

const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
require('dotenv').config();
const mongoose=require('mongoose')
const itinerariesRouter = require('./routes/iterneraryRoute');
const userRoutes = require('./routes/userRoutes');

const dbConnect=process.env.Db_String || "mongodb://localhost:27017"
const port=process.env.port || 5000

// "mongodb://0.0.0.0:27017"


app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


// mongoose.connect(dbConnect).then(()=>{console.log("Mongodb connected success")})

mongoose.connect(dbConnect)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


app.get('/',(req,res)=>{
    res.send("Hi I am working properly")
})



app.use('/api/user', userRoutes);



app.listen(5000,()=>{
   console.log("app is running on port 5000")
})