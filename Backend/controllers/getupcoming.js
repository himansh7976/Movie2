const Moive=require('../models/MoviesSchema');


const getupcoming= async(req,res)=>{
    try{
        const upcoming=await Moive.find();
        const filter= upcoming.filter((i)=>{
            return i.popularity > 600;
        })
        res.send(filter);

      }
      catch(err){
        console.log(`eorra rha han ${err}` )
        res.status(404).json({massg:"eor hain"})
      }
}
module.exports=getupcoming;