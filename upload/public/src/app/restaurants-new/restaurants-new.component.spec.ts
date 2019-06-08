import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsNewComponent } from './restaurants-new.component';

describe('RestaurantsNewComponent', () => {
  let component: RestaurantsNewComponent;
  let fixture: ComponentFixture<RestaurantsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
