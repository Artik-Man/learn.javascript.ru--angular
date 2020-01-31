import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotWeatherWidgetMainComponent } from './hot-weather-widget-main.component';

describe('HotWeatherWidgetMainComponent', () => {
  let component: HotWeatherWidgetMainComponent;
  let fixture: ComponentFixture<HotWeatherWidgetMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotWeatherWidgetMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotWeatherWidgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
