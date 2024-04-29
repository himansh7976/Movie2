const express =require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors')
const morgon=require("morgan");
const connectDB = require('./Config/db');
const router = require('./routes/moviesroutes');

// in env file we have all serct link like monog url port'
dotenv.config();



// using cors  connect'
app.use(cors());

// morgon are use for shhow detail when somone hit our url'
app.use(morgon('dev'));

// connect monogo db'
connectDB();

const PORT=8002;

// convert all data in object formet form come database'

app.use(express.json());
app.use('/api/movies',router)

app.get('/',(req,res)=>{
    res.send({massge:"welme"})


})

app.listen(PORT,()=>{
    console.log(`rung ${PORT}`)
});