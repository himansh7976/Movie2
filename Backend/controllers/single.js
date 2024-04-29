const Movie =require('../models/MoviesSchema');

const single=async (req,res)=>{
    try{
        const {id}=req.params
        const moviename = await Movie.findById(id);

        res.status(200).json(moviename);



    } catch (err) {
        console.log(`Error in adding by ook ${err}`);
        res.status(500).json({ massge: "internal server" });
    }
}
module.exports=single;

