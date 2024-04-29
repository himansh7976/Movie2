const Movie =require('../models/MoviesSchema');

const getmovies=async (req,res)=>{
    try{
        const moviename = await Movie.find();

        res.status(200).json(moviename);



    } catch (err) {
        console.log(`Error in adding by ook ${err}`);
        res.status(500).json({ massge: "internal server" });
    }
}
module.exports=getmovies;


