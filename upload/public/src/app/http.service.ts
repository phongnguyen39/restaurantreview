import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    
  }

  newRestaurant(restaurant){
    console.log("******** HTTP.SERVICE NEW CAKE")
    return this._http.post("/restaurants/new", restaurant);
  }


  getRestaurants() {
    console.log("******** HTTP.SERVICE ALL PRODUCTS")
    return this._http.get("/restaurants/all");
  }

  
  findRestaurant(id){
    console.log("******** HTTP.SERVICE FIND PRODUCT")
    return this._http.get(`/restaurants/${id}`);
  }

  deleteRestaurant(id){
    console.log("****** HTTP.SERVICE REMOVE PRODUCT")
    console.log("****** HTTP.SERVICE REMOVE PRODUCT"+id)
    return this._http.delete("/restaurants/delete/"+id);
  }

  // BLACK BELT FEATURE ///////////////
  deleteReview(id){
    console.log("****** HTTP.SERVICE REMOVE PRODUCT")
    console.log("****** HTTP.SERVICE REMOVE PRODUCT"+id)
    return this._http.delete("/reviews/delete/"+id);
  }

  addReview(id, review){
    console.log("******** HTTP.SERVICE RATING PRODUCT*********"+'/restaurants/'+id+'/review', review)
    return this._http.post("/restaurants/"+id+"/review", review)
    // return this._http.post("/products/rating/"+productID, newRating)
  }


  editRestaurant(id, restaurant){
    console.log("******** HTTP.SERVICE UPDATE PRODUCT**************")
    console.log(id)
    console.log(restaurant)
    return this._http.put(`/restaurants/${id}/edit`, restaurant);
  }


  dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

}
