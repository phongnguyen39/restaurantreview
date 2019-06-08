import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from "./http.service"
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// import { MovieNewComponent } from './movie-new/movie-new.component';
// import { MovieAllComponent } from './movie-all/movie-all.component';
// import { MovieOneComponent } from './movie-one/movie-one.component';
import { ReviewNewComponent } from './review-new/review-new.component';
import { RestaurantsAllComponent } from './restaurants-all/restaurants-all.component';
import { RestaurantsNewComponent } from './restaurants-new/restaurants-new.component';
import { RestaurantsOneComponent } from './restaurants-one/restaurants-one.component';
import { RestaurantsEditComponent } from './restaurants-edit/restaurants-edit.component';
import { RestaurantsReviewComponent } from './restaurants-review/restaurants-review.component';

@NgModule({
  declarations: [
    AppComponent,
    // MovieNewComponent,
    // MovieAllComponent,
    // MovieOneComponent,
    // ReviewNewComponent,
    RestaurantsAllComponent,
    RestaurantsNewComponent,
    RestaurantsOneComponent,
    RestaurantsEditComponent,
    RestaurantsReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
