import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-one',
  templateUrl: './restaurants-one.component.html',
  styleUrls: ['./restaurants-one.component.css']
})
export class RestaurantsOneComponent implements OnInit {
  restaurant: any;
  reviews: any;
  id: number;
  editdefault: boolean


  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
    ) { }


  ngOnInit() {
    this.editdefault= false;
    this.getRestaurant();
    this.getReview();
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

  getReview(){
    
    this._route.params.subscribe((params: Params) => {
      // console.log(params['id']);
      this.id= params['id']
  
    });
    let observable = this._httpService.findRestaurant(this.id);
    observable.subscribe(data => {
      this.reviews = data;
      console.log(this.reviews.reviews[0].stars)

      // object key.  array object. key
      // this.reviews.reviews.stars.sort(this._httpService.dynamicSort("-stars"));      
      this.reviews.sort(this._httpService.dynamicSort("-stars"));      
      // this.reviews= data['data'].sort(this._httpService.dynamicSort("-stars"));      
      // this.reviews.sort(this._httpService.dynamicSort("stars"));
    })

  }



}
