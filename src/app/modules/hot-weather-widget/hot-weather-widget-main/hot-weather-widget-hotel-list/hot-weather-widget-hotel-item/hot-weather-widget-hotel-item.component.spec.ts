import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotWeatherWidgetHotelItemComponent } from './hot-weather-widget-hotel-item.component';

describe('HotWeatherWidgetHotelItemComponent', () => {
  let component: HotWeatherWidgetHotelItemComponent;
  let fixture: ComponentFixture<HotWeatherWidgetHotelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotWeatherWidgetHotelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotWeatherWidgetHotelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
