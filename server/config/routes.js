var express = require("express")
var app = express();

Controllers = require("../controllers/controller")

const path = require("path")  

// components:  
// restaurants-all
// restaurants-new
// restaurants-one
// restaurants-edit
// restaurants-review

module.exports= function(app){
    app.get("/", function(req,res){
        console.log("******** ROUTES INDEX PAGE RUNNING");
        Controllers.index(req,res);
    })

    app.post("/restaurants/new", function(req,res){
        console.log("******** ROUTES NEW PRODUCT POST RUNNING");
        Controllers.newRestaurant(req,res);
    })
    
    app.get("/restaurants/all", function(req,res){
        console.log("******* ROUTES ALL RESTAURANTS RUNNING");
        Controllers.allRestaurants(req,res);
    })

    app.get("/restaurants/:id", function(req,res){
        console.log("******* ROUTES FIND CAKE BY ID RUNNING")
        Controllers.findRestaurant(req,res);
    })

    app.delete("/restaurants/delete/:id", function(req,res){
        console.log("****** ROUTES DELETE RUNNING"+ req.params.id)
        Controllers.deleteRestaurant(req,res);
    })

    // BLACK BELT FEATURE ///////////////
    app.delete("/reviews/delete/:id", function(req,res){
        console.log("****** ROUTES DELETE RUNNING"+ req.params.id)
        Controllers.deleteReview(req,res);
    })


    // ADD A REVIEW TO A MOVIE
    app.post("/restaurants/:id/review", function(req,res){
        console.log("******** ROUTES RATING ********");
        console.log("**** ROUTES ****"+req.params.id)
        console.log("**** ROUTES ****"+req.body)
        Controllers.addReview(req,res);
    })

    app.put("/restaurants/:id/edit", function(req,res){
        console.log("******** ROUTES UPDATE POST RUNNING");
        Controllers.editRestaurant(req,res);
    })


    // PLACEHOLDER FOR RETRIEVING AND AVERAGING REVIEWS//////////////////////

    // app.get("/price", function(req,res){
    //     console.log("*********" + req.body +"*********" )
    //     Controllers.getPrice(req,res);
    // })

}
