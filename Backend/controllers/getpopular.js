const Movie=require('../models/MoviesSchema');

const getpopular=async(req,res)=>{
    try{ 

        const moviename = await Movie.find();
        // console.log(moviename)
       const filters= moviename.filter((i)=>{
            // console.log(i);
            const b=i.popularity > 500
            return b;
        })
        res.send(filters);
  


        
      
    }
    catch(eorr){
        console.log(`eoree a rha ${eorr}`)
        res.status(500).json({massge:"servwe err"})
    }
}
module.exports=getpopular;