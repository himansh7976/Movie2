const mongoose=require('mongoose');

const movieschema= new mongoose.Schema({
    id:{
        type:"Number",
    
    },

    backdrop_path:{
        type:"String",
        
    },
    original_title:{
        type:"String",
    },

    overview:{
        type:"String",
        
    },

    popularity:{
        type:"Number",
    },

    poster_path:{
        type:"String",
    }



    // description: {
    //     type: String,
    //     required: true,
    // },
    // category: {
    //     type: String,
    //     required: true,
    // },
    // image: {
    //     type: String,
    //     required: true,
    // },
    // rating: {
    //     type: String,
    //     required: true,
    // },

});
 const Movie=mongoose.model("movi",movieschema);
module.exports=Movie;