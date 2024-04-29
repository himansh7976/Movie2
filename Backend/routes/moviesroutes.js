const express =require('express');
const addmovie = require('../controllers/addbooks');
const getmovies = require('../controllers/getmovies');
const getpopular = require('../controllers/getpopular');
const getupcoming = require('../controllers/getupcoming');
const single = require('../controllers/single');
const router=express.Router();

router.post('/addmovies',addmovie);
router.get('/getmovies',getmovies);
router.get('/getpopular',getpopular)
router.get('/getupcomingmovies',getupcoming);
router.get('/getsingle/:id',single)

module.exports=router;  