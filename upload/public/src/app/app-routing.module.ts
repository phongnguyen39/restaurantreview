import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// import { MovieNewComponent } from './movie-new/movie-new.component';
// import { MovieAllComponent } from './movie-all/movie-all.component';
// import { MovieOneComponent } from './movie-one/movie-one.component';
// import { ReviewNewComponent } from './review-new/review-new.component';
import { RestaurantsAllComponent } from './restaurants-all/restaurants-all.component';
import { RestaurantsNewComponent } from './restaurants-new/restaurants-new.component';
import { RestaurantsOneComponent } from './restaurants-one/restaurants-one.component';
import { RestaurantsEditComponent } from './restaurants-edit/restaurants-edit.component';
import { RestaurantsReviewComponent } from './restaurants-review/restaurants-review.component';


const routes: Routes = [
  {path: "restaurants", component: RestaurantsAllComponent},
  {path: "restaurants/new", component: RestaurantsNewComponent},
  {path: "restaurants/:id", component: RestaurantsOneComponent},
  {path: "restaurants/:id/edit", component: RestaurantsEditComponent},
  {path: "restaurants/:id/review", component: RestaurantsReviewComponent}
  // {path: "movies", component: MovieAllComponent},
  // {path: "movies/new", component: MovieNewComponent},
  // {path: "movies/:id", component: MovieOneComponent},
  // {path: "movies/:id/review", component: ReviewNewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
