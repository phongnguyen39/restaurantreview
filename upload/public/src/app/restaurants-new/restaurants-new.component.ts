import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-new',
  templateUrl: './restaurants-new.component.html',
  styleUrls: ['./restaurants-new.component.css']
})
export class RestaurantsNewComponent implements OnInit {
  restaurant: any;
  review: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.restaurant = { restaurant: "", cuisine: "" }
    this.review = { name: "", stars: "", message: "" }
  }

  newRestaurant() {
    // if (this.restaurant.restaurant.length < 3 || this.restaurant.cuisine.length < 3 || this.review.name.length < 3 || this.review.message < 3 || this.review.stars == "") {
    if (this.restaurant.restaurant.length < 3 || this.restaurant.cuisine.length < 3 ) {
      this._router.navigate(['/restaurants/new']);
    } else {
      // console.log(this.movie)
      let observable = this._httpService.newRestaurant(this.restaurant);
      observable.subscribe(data => {
        var x = data;
        console.log(Object.values(x)[0])
        var y = Object.values(x)[0]
        this.restaurant = { restaurant: "", cuisine: "" };
        // this.newReview(y, this.review)
        this._router.navigate(['/restaurants']);
        return this.restaurant._id;
      })
    }
  }
  //create movie/ find movie/ add review

  // newReview(id, review) {
  //   console.log(id, review)
  //   let observable = this._httpService.addReview(id, review);
  //   observable.subscribe(data => {
  //     this.review = { name: "", stars: "", message: "" }
  //     this._router.navigate(['/restaurants']);
  //   })
  // }

}
