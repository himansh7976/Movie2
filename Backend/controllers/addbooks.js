const Movie = require('../models/MoviesSchema');

const addmovie = async (req, res) => {
    try {
        const { id, backdrop_path, original_title, overview, popularity, poster_path } = req.body;
        const newmovie = new Movie({
            id,
            backdrop_path,
            original_title,
            overview, popularity,
            poster_path
        })
        const save = await newmovie.save();
        res.send(200).json({ massge: "book post in database" });

    }
    catch (err) {
        console.log(`Error in adding by
        ook ${err}`);
        res.status(500).json({ massge: "internal server" });
    }
}
module.exports = addmovie;