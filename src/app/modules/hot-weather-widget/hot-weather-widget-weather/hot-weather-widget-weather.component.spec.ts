import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotWeatherWidgetWeatherComponent } from './hot-weather-widget-weather.component';

describe('HotWeatherWidgetWeatherComponent', () => {
  let component: HotWeatherWidgetWeatherComponent;
  let fixture: ComponentFixture<HotWeatherWidgetWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotWeatherWidgetWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotWeatherWidgetWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
