import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-all',
  templateUrl: './restaurants-all.component.html',
  styleUrls: ['./restaurants-all.component.css']
})
export class RestaurantsAllComponent implements OnInit {
  restaurant: any;
  restaurants: any;
  id: any;
  id2: any;
  editdefault: boolean

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.editdefault = false;
    this.getRestaurants();
  }

  getRestaurants() {
    let observable = this._httpService.getRestaurants();
    observable.subscribe(data => {
      this.restaurants = data;
    })
  }

  deleteRestaurant(x)  {
    console.log(x)
    // this._route.params.subscribe((params: Params) => {
    //   console.log(params['id']);
    //   this.id= params['id']
  
    // });
    let observable = this._httpService.deleteRestaurant(x);
    observable.subscribe(data => {
      this.restaurants = data;
      this.getRestaurants()
      this._router.navigate(['/restaurants']);
      this.getRestaurants()
    })
  
  }
  editdefault1(id){
    this.id2 = id;
    this.editdefault=true;
  }

  getRestaurant()  {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id']);
      this.id= params['id']
  
    });
    let observable = this._httpService.findRestaurant(this.id2);
    observable.subscribe(data => {
      this.restaurant = data;
    })
  
  }

  editRestaurant(){
  if (this.restaurant.restaurant.length < 3 || this.restaurant.cuisine.length < 3 ) {
    this._router.navigate(['/restaurants']);
  } else {
    // console.log(this.movie)
    let observable = this._httpService.editRestaurant(this.id, this.restaurant);
    observable.subscribe(data => {
      var x = data;
      this._router.navigate(['/restaurants']);
      return this.restaurant._id;
    })
  }
}

}
