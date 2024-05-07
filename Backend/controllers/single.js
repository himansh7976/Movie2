const Movie =require('../models/MoviesSchema');

const single=async (req,res)=>{
    try{
        // const {id} = req.params
   const product =await Movie.findById(req.params.id)
   console.log(product)

        // const moviename = await Movie.findById(id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({
            succes: true,
            product,
        })



    } catch (err) {
        console.log(`Error in adding by ook ${err}`);
        res.status(500).json({ massge: "internal server" });
    }
}
module.exports=single;

