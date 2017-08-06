var express = require('express');
var router = express.Router();
// write up database connection
var connection = require('../connection.js');


router.get('add', (req, res) => {
    console.log("This is get")
})


router.post('/add', (req, res) => {
    var title = req.body.title,
        releaseDate = req.body.releaseDate,
        originalReleaseYear = req.body.originalReleaseYear,
        coverArtUrl = req.body.coverArtUrl,
        region = req.body.region

    connection.query("INSERT INTO movie (title, releaseDate, originalReleaseYear, coverArtUrl, region) VALUES (?, ?, ?, ?, ?)",
    [title, releaseDate, originalReleaseYear, coverArtUrl, region], (err,rows) =>{
        if(!err){
            console.log("Succesfully added movie to db with title " + title)
        } else{
            console.log(err)
        }
    })
})


router.get('/', function(req, res, next){

    console.log("Making query...")
    connection.query("select * from movie",function(err,rows){

    if(!err) {
        res.json(rows);
    }
    else{
        console.log(err)
    }
    });

});


module.exports = router;
