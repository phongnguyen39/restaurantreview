import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsReviewComponent } from './restaurants-review.component';

describe('RestaurantsReviewComponent', () => {
  let component: RestaurantsReviewComponent;
  let fixture: ComponentFixture<RestaurantsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
