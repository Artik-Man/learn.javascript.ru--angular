import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotWeatherWidgetHotelListComponent } from './hot-weather-widget-hotel-list.component';

describe('HotWeatherWidgetHotelListComponent', () => {
  let component: HotWeatherWidgetHotelListComponent;
  let fixture: ComponentFixture<HotWeatherWidgetHotelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotWeatherWidgetHotelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotWeatherWidgetHotelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
