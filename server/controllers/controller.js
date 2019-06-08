var express = require("express")
var app = express();

var Restaurant = require("../models/restaurant").Restaurant
var Review = require("../models/restaurant").Review

module.exports = {
    index: function (req, res) {
        console.log("******** CONTROLLER INDEX PAGE RUNNING")
        Restaurant.find({}, function (err, restaurant) {
            res.json(restaurant);
        })
    },
    newRestaurant: function (req, res) {
        console.log("******** CONTROLLER NEW PRODUCT RUNNING")
        console.log(req.body);
        var restaurant = new Restaurant(req.body);
        restaurant.save(function (err) {
            if (err) {
                console.log(err);
                res.json(restaurant);
            } else {
                console.log("****** CONTROLLER PRODUCT SAVED ")
                res.json(restaurant);
            }
        })
    },
    allRestaurants: function (req, res) {
        console.log("******** CONTROLLER VIEW ALL PRODUCTS RUNNING")
        Restaurant.find({}, function (err, restaurants) {
            // console.log(product);
            res.json(restaurants)
        })
    },
    findRestaurant: function (req, res) {
        console.log("******** CONTROLLER FIND PRODUCT BY ID RUNNING")
        Restaurant.findById(req.params.id, function (err, restaurant) {
            if (err) {
                console.log("***** CONTROLLER FIND PRODUCT ERROR");
                res.json(restaurant);
            } else {
                console.log("*****************************************")
                console.log(restaurant)
                console.log("***** CONTROLLER PRODUCT FOUND");
                res.json(restaurant);
            }
        })
    },
    deleteRestaurant: function (req, res) {
        console.log(req.params.id)
        console.log("******** CONTROLLER DELETE MOVIE RUNNING" + req.params.id)
        Restaurant.findByIdAndRemove(req.params.id, function (err, data) {
            console.log(err)
            console.log("******REMOVEEEED*******")
            res.json(data)
        })
    },

    // BLACK BELT FEATURE //////////////
    deleteReview: function (req, res) {
        console.log(req.params.id)
        const id = req.params.id + 1
        console.log(typeof(id))
        console.log(id)
        console.log("******** CONTROLLER DELETE REVIEW RUNNING" + id)
        Review.findByIdAndRemove({_id: id}, function (err, data) {
            console.log(err)
            console.log("******REMOVEEEED*******")
            res.json(data)
        })
    },

    // ADD A REVIEW TO A MOVIE
    addReview: function (req, res) {
        console.log("***** CONTROLLER HIT******")
        console.log(req.body.name, req.body.message, req.body.stars)
        Review.create({ name: req.body.name, stars: req.body.stars, message: req.body.message }, function (err, review) {
            if (err) {
                
                res.json(err);
            }
            else {
                console.log(req.params.id, "SHEEE HAS BEEN FOUND")
                Restaurant.findOneAndUpdate(
                    { _id: req.params.id }, {$push: {reviews: req.body}}, function (err, data) {
                        if (err) {
                            console.log(err)
                            res.json(err);
                        } else {
                            console.log("TESTTTT")
                            res.json(data);
                        }
                    })
            }
        })
    },


    editRestaurant: function (req, res) {
        console.log("****** CONTROLLER ENTERED" + req.params.id + "((((((((((((((((((((")
        // console.log("****** CONTROLLER ENTERED" + req.body.title + req.body.price + req.body.url + req.body.rating)
        Restaurant.findByIdAndUpdate(
            { _id: req.params.id },
            {
                restaurant:
                    req.body.restaurant,
                cuisine: req.body.cuisine,
                reviews: req.body.reviews,
            }, function (err, product) {
                if (err) {
                    console.log("**********CONTROLLER UPDATE FAILED");
                    console.log(err);
                    // res.json({errorMsg:"Something went wrong", error:err});
                    res.json(err);
                } else {
                    console.log(product)
                    console.log("***********CONTROLLER UPDATE SUCCESSFUL")
                    res.json(product);
                }
            })
    },

    // getPrices: function (req, res) {
    //     Product.find({}, "price", function (err, prices) {
    //         console.log("**********************" + prices)
    //         res.json(prices);
    //     })
    // }

}
