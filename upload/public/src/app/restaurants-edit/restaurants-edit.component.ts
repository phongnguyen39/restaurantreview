import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants-edit',
  templateUrl: './restaurants-edit.component.html',
  styleUrls: ['./restaurants-edit.component.css']
})
export class RestaurantsEditComponent implements OnInit {
  restaurant: any;
  id: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getRestaurant();
    this.editRestaurant();
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

  editRestaurant(){
  if (this.restaurant.restaurant.length < 3 || this.restaurant.cuisine.length < 3 ) {
    this._router.navigate(['/restaurants/edit']);
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
