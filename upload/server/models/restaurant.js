var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/restaurant");  // update here
mongoose.Promise = global.Promise;

const ReviewModel = new mongoose.Schema({
    name: {type: String, required: [true], minlength: [3, "Product title must be min 3 char long"]}, 
    stars: {type: Number, required: true},
    message: {type: String, required: [true], minlength: [3, "Product title must be min 3 char long"]}
}, {timestamps: true})
mongoose.model("Review", ReviewModel);

const RestaurantModel = new mongoose.Schema({
    restaurant: {type: String, required: [true], minlength: [3, "Product title must be min 3 char long"]},
    cuisine: {type: String, required: [true], minlength: [3, "Product title must be min 3 char long"]}, 
    reviews: [ReviewModel]
}, {timestamps: true})
mongoose.model("Restaurant", RestaurantModel);

module.exports = {
    Restaurant: mongoose.model("Restaurant"),  // update here
    Review: mongoose.model("Review")
}

// field list
// restaurant
// cuisine

// customer ~ name
// stars
// message