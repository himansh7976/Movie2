const mongoose=require('mongoose');

const dotenv=require('dotenv').config();


const connectDB=async ()=>{
    try{


        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`monogo ji connect ho gaye ${conn.connect.host} `)

    } catch(err){
        console.log(`eorrr in ${err}`)

    }
}
module.exports=connectDB;