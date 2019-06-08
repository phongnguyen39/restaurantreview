import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsOneComponent } from './restaurants-one.component';

describe('RestaurantsOneComponent', () => {
  let component: RestaurantsOneComponent;
  let fixture: ComponentFixture<RestaurantsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
