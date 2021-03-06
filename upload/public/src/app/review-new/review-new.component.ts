import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
``
@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css']
})
export class ReviewNewComponent implements OnInit {
  restaurant: any;
  review:  any;
  id: number;


  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }


  ngOnInit() {
    this.review = {name: "", stars: "", message: ""}
    this.getRestaurant();
  }


  newReview(id){
    console.log("******Sdfjsjdfakls;djfas;ldf")
    if(this.restaurant.restaurant.length < 3 || this.review.name.length < 3 || this.review.message <3 || this.review.stars == ""){
      this._router.navigate(['/review/new']);
    }else{
    console.log(id, this.review)
    let observable = this._httpService.addReview(id, this.review);
    observable.subscribe(data => {
      this.review = {name: "", stars: "", message: ""}
      this._router.navigate(['/restaurants']);
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
