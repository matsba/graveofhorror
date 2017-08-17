var express = require('express');
var router = express.Router();
// write up database connection
var connection = require('../connection.js');
var moment = require('moment')


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

router.get('/this_month', function(req, res, next){

    var fromDate = moment().format()
        toDate = moment().endOf("month").format()

    console.log("Getting movies from " + fromDate + " to " + toDate)

    connection.query("select * from movie where releaseDate >= ? AND releaseDate <= ?", [fromDate, toDate], (err,rows) =>{

    if(!err) {
        res.json(rows);
    }
    else{
        console.log(err)
    }
    });

});

router.get('/next_month', function(req, res, next){

    var fromDate = moment().add(1, 'months').startOf('month').format()
        toDate = moment().add(1, 'months').endOf("month").format()

    console.log("Getting movies from " + fromDate + " to " + toDate)

    connection.query("select * from movie where releaseDate >= ? AND releaseDate <= ?", [fromDate, toDate], (err,rows) =>{

    if(!err) {
        res.json(rows);
    }
    else{
        console.log(err)
    }
    });

});

router.get('/rest_of_the_year', function(req, res, next){

    var fromDate = moment().add(2, 'months').startOf('month').format()
        toDate = moment().endOf("year").format()

    console.log("Getting movies from " + fromDate + " to " + toDate)

    connection.query("select * from movie where releaseDate >= ? AND releaseDate <= ?", [fromDate, toDate], (err,rows) =>{

    if(!err) {
        res.json(rows);
    }
    else{
        console.log(err)
    }
    });

});



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
