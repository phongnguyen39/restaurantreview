import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-review',
  templateUrl: './restaurants-review.component.html',
  styleUrls: ['./restaurants-review.component.css']
})
export class RestaurantsReviewComponent implements OnInit {
  restaurant: any;
  review:  any;
  id: number;
  err: string;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this.review = {name: "", stars: "5", message: ""}
    this.getRestaurant();
  }

  newReview(id){
    console.log("******Sdfjsjdfakls;djfas;ldf")
    if(this.review.stars < 1 || this.review.stars > 5 || this.restaurant.restaurant.length < 3 || this.review.name.length < 3 || this.review.message <3 || this.review.stars == ""){
      // err = "Stars must be between 1 - 5"
      this._router.navigate(['/restaurants/'+this.id+"/review"]);
    }else{
    console.log(id, this.review)
    let observable = this._httpService.addReview(id, this.review);
    observable.subscribe(data => {
      this.review = {name: "", stars: "", message: ""}
      this._router.navigate(['/restaurants/'+this.id]);
    }) 
  }
  
  }
  getRestaurant()  {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id= params['id']
  
    });
    let observable = this._httpService.findRestaurant(this.id);
    observable.subscribe(data => {
      this.restaurant = data;
    })
  
  }

}
